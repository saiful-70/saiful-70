#!/usr/bin/env node
/**
 * Renders the README's "At a glance" cards as committed SVGs.
 *
 * Why self-hosted: every third-party card service was either down (503 from
 * github-readme-stats, timeouts from streak-stats) or gave no control over its own
 * typography — big blue headings that belong to someone else's design. Owning the
 * drawing means the cards match the site's tokens and stay up as long as GitHub does.
 *
 * With GITHUB_TOKEN in the environment it uses GraphQL and reports real contribution
 * totals; without one it falls back to the public REST API and omits them.
 *
 *   node scripts/profile-stats.mjs            # writes assets/stats-{light,dark}.svg
 */

import fs from "node:fs";
import path from "node:path";

const USER = process.env.PROFILE_USER || "saiful-70";
const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const OUT = path.join(process.cwd(), "assets");

const headers = {
  "User-Agent": "saiful-70-profile-stats",
  Accept: "application/vnd.github+json",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

async function graphql() {
  const query = `
    query($login: String!) {
      user(login: $login) {
        createdAt
        followers { totalCount }
        contributionsCollection {
          totalCommitContributions
          totalPullRequestContributions
          totalIssueContributions
          totalRepositoriesWithContributedCommits
          contributionCalendar { totalContributions }
        }
        repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {field: STARGAZERS, direction: DESC}) {
          totalCount
          nodes {
            stargazerCount
            languages(first: 8, orderBy: {field: SIZE, direction: DESC}) {
              edges { size node { name } }
            }
          }
        }
      }
    }`;
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { login: USER } }),
  });
  if (!res.ok) throw new Error(`graphql ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors.map(e => e.message).join("; "));
  const u = json.data.user;
  const bytes = new Map();
  for (const r of u.repositories.nodes)
    for (const e of r.languages.edges)
      bytes.set(e.node.name, (bytes.get(e.node.name) || 0) + e.size);
  return {
    repos: u.repositories.totalCount,
    stars: u.repositories.nodes.reduce((n, r) => n + r.stargazerCount, 0),
    followers: u.followers.totalCount,
    since: new Date(u.createdAt).getUTCFullYear(),
    contributions: u.contributionsCollection.contributionCalendar.totalContributions,
    commits: u.contributionsCollection.totalCommitContributions,
    prs: u.contributionsCollection.totalPullRequestContributions,
    reposContributed: u.contributionsCollection.totalRepositoriesWithContributedCommits,
    languages: [...bytes.entries()].sort((a, b) => b[1] - a[1]),
  };
}

async function rest() {
  const u = await (await fetch(`https://api.github.com/users/${USER}`, { headers })).json();
  const repos = [];
  for (let page = 1; page <= 3; page++) {
    const r = await (await fetch(`https://api.github.com/users/${USER}/repos?per_page=100&page=${page}&type=owner`, { headers })).json();
    if (!Array.isArray(r) || !r.length) break;
    repos.push(...r);
    if (r.length < 100) break;
  }
  const own = repos.filter(r => !r.fork);
  const bytes = new Map();
  for (const r of own) if (r.language) bytes.set(r.language, (bytes.get(r.language) || 0) + 1);
  return {
    repos: u.public_repos,
    stars: own.reduce((n, r) => n + (r.stargazers_count || 0), 0),
    followers: u.followers,
    since: new Date(u.created_at).getUTCFullYear(),
    contributions: null, commits: null, prs: null, reposContributed: null,
    languages: [...bytes.entries()].sort((a, b) => b[1] - a[1]),
  };
}

/* ── the drawing ─────────────────────────────────────────────────────────────
   Minimal and bold: the number carries the card, the label stays a small mono
   caption, and the only heading is one engraved placard. No coloured titles. */
const THEME = {
  light: { ground: "#F4F4F0", frame: "#C2C6CA", ink: "#14171A", label: "#545C61", rule: "rgba(20,24,28,.14)", accent: "#0B6B37", track: "#DDDDD7" },
  dark: { ground: "#0B0D0F", frame: "#2A2D31", ink: "#F2F5F5", label: "#828A8D", rule: "rgba(242,245,245,.10)", accent: "#7CFF9E", track: "#1B1F23" },
};
const SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";
const MONO = "ui-monospace,SFMono-Regular,'SF Mono',Menlo,Consolas,'Liberation Mono',monospace";
const fmt = n => n == null ? "—" : n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 2).replace(/\.0+$/, "") + "k" : String(n);

function card(d, t) {
  const W = 900, H = 232, pad = 26;
  const cells = [
    ["Contributions", fmt(d.contributions)],
    ["Commits", fmt(d.commits)],
    ["Pull requests", fmt(d.prs)],
    ["Public repos", fmt(d.repos)],
    ["Stars earned", fmt(d.stars)],
    ["On GitHub since", String(d.since)],
  ].filter(([, v]) => v !== "—");

  const colW = (W - pad * 2) / cells.length;
  const o = [];
  o.push(`<rect width="${W}" height="${H}" rx="6" fill="${t.ground}" stroke="${t.frame}"/>`);
  // no in-card title: the README heading above it already says what this is
  o.push(`<text x="${W - pad}" y="${pad + 14}" text-anchor="end" font-family="${MONO}" font-size="10.5" letter-spacing="1.6" fill="${t.label}">GITHUB.COM/${USER.toUpperCase()}</text>`);
  o.push(`<path d="M${pad},${pad + 30} H${W - pad}" stroke="${t.rule}" stroke-width="1"/>`);

  cells.forEach(([label, value], i) => {
    const x = pad + colW * i;
    o.push(`<text x="${x}" y="${pad + 88}" font-family="${SANS}" font-size="40" font-weight="800" letter-spacing="-1.2" fill="${t.ink}">${value}</text>`);
    o.push(`<text x="${x}" y="${pad + 110}" font-family="${MONO}" font-size="10.5" letter-spacing="1.1" fill="${t.label}">${label.toUpperCase()}</text>`);
  });

  // language mix as one bar, because a donut with a legend is a chart pretending to be data
  const total = d.languages.reduce((n, [, v]) => n + v, 0) || 1;
  const top = d.languages.slice(0, 6);
  const barY = pad + 138, barW = W - pad * 2, barH = 10;
  o.push(`<text x="${pad}" y="${barY - 8}" font-family="${MONO}" font-size="10.5" letter-spacing="1.1" fill="${t.label}">LANGUAGE MIX</text>`);
  o.push(`<rect x="${pad}" y="${barY}" width="${barW}" height="${barH}" rx="2" fill="${t.track}"/>`);
  let x = pad;
  top.forEach(([, size], i) => {
    const w = Math.max(2, (size / total) * barW);
    const op = (1 - i * 0.14).toFixed(2);
    o.push(`<rect x="${x.toFixed(1)}" y="${barY}" width="${w.toFixed(1)}" height="${barH}" rx="2" fill="${t.accent}" opacity="${op}"/>`);
    x += w;
  });
  top.forEach(([name, size], i) => {
    const col = pad + (barW / 3) * (i % 3);
    const row = barY + 30 + Math.floor(i / 3) * 20;
    const pct = ((size / total) * 100).toFixed(0);
    o.push(`<rect x="${col}" y="${row - 8}" width="8" height="8" rx="1.5" fill="${t.accent}" opacity="${(1 - i * 0.14).toFixed(2)}"/>`);
    o.push(`<text x="${col + 14}" y="${row}" font-family="${MONO}" font-size="11" fill="${t.ink}">${name} <tspan fill="${t.label}">${pct}%</tspan></text>`);
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="GitHub at a glance for ${USER}: ${cells.map(([l, v]) => `${l} ${v}`).join(", ")}. Language mix: ${top.map(([n, s]) => `${n} ${((s / total) * 100).toFixed(0)}%`).join(", ")}.">
${o.join("\n")}
</svg>
`;
}

const data = await (TOKEN ? graphql() : rest()).catch(async e => {
  console.error("primary source failed (" + e.message + "), falling back to REST");
  return rest();
});
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "stats-light.svg"), card(data, THEME.light));
fs.writeFileSync(path.join(OUT, "stats-dark.svg"), card(data, THEME.dark));
console.log("wrote assets/stats-{light,dark}.svg", JSON.stringify({ ...data, languages: data.languages.slice(0, 6) }));

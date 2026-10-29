// Content check for the product-builder portfolio.
// Run: node scripts/check-portfolio.mjs  (exit 1 on any failure)
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (f) => readFileSync(join(root, f), "utf8");
const html = read("index.html");
const readme = read("README.md");
const product = read("PRODUCT.md");

const results = [];
const check = (id, fn) => {
  let reason;
  try { reason = fn(); } catch (e) { reason = e.message; }
  results.push([id, reason]);
};
const count = (s, needle) => s.split(needle).length - 1;
const between = (s, a, b) => {
  const i = s.indexOf(a), j = s.indexOf(b, i + 1);
  if (i < 0 || j < 0) throw new Error(`missing ${i < 0 ? a : b}`);
  return s.slice(i, j);
};
const inOrder = (s, needles) => {
  let at = -1;
  for (const n of needles) {
    const i = s.indexOf(n, at + 1);
    if (i < 0) return `missing or out of order: ${n}`;
    at = i;
  }
};

check("preserved-seo", () => {
  const miss = ["G-2N74T6GHQ4", 'rel="canonical"', '"@type": "Person"', "og:image", "twitter:image"]
    .filter((n) => !html.includes(n));
  if (miss.length) return `missing ${miss.join(", ")}`;
});

check("meta-new-lede", () => {
  const lede = "how a business actually runs";
  const pick = (re) => (html.match(re) || [, ""])[1];
  const fields = {
    description: pick(/<meta name="description" content="([^"]*)"/),
    "og:description": pick(/<meta property="og:description" content="([^"]*)"/),
    "twitter:description": pick(/<meta name="twitter:description" content="([^"]*)"/),
    "json-ld": pick(/"description":\s*"([^"]*)"/),
  };
  const bad = Object.keys(fields).filter((k) => !fields[k].includes(lede));
  if (bad.length) return `no new lede in ${bad.join(", ")}`;
});

check("title-plain", () => {
  const t = (html.match(/<title>([^<]*)<\/title>/) || [, ""])[1];
  if (t !== "Saiful Islam — Software Engineer") return `title is "${t}"`;
});

check("hero-copy", () => {
  const miss = ["I turn how a business actually runs into software that ships",
    "Spec first. AI agents write most of the code."].filter((n) => !html.includes(n));
  if (miss.length) return `missing ${miss.join(" | ")}`;
});

check("section-order", () =>
  inOrder(html, ['id="how"', 'id="work"', 'id="removed"', 'id="experience"', 'id="oss"', 'id="skills"', 'id="contact"']));

check("skip-link-target", () => {
  if (!html.includes('href="#work"') || !html.includes('id="work"')) return "skip link or #work missing";
});

check("how-steps", () => {
  const n = count(between(html, 'id="how"', "</ol>"), "<li");
  if (n !== 5) return `${n} steps`;
});

check("product-cards", () => {
  const sec = between(html, 'id="work"', 'id="removed"');
  const bad = ["<dt>For</dt>", "<dt>The call</dt>", "<dt>Shipped</dt>", "<dt>Cut</dt>"]
    .map((d) => [d, count(sec, d)]).filter(([, n]) => n !== 7);
  if (bad.length) return bad.map(([d, n]) => `${d}×${n}`).join(", ");
});

check("removed-list", () => {
  const n = count(between(html, 'id="removed"', 'id="experience"'), "<li");
  if (n !== 7) return `${n} items`;
});

check("forbidden", () => {
  const words = ["signals-first", "that reacts", "Senior", "40+", "2000+", "900+", "80+ lazy",
    "4 enterprise ERP", "in-house", "ISO 9001", "GDPR", "rent-erp-staging", "Angular &amp; .NET", "Angular & .NET"];
  const hits = [];
  for (const [name, text] of [["index.html", html], ["README.md", readme]]) {
    const low = text.toLowerCase();
    for (const w of words) if (low.includes(w.toLowerCase())) hits.push(`${name}: ${w}`);
  }
  if (hits.length) return hits.join("; ");
});

check("css-tokens-only", () => {
  const block = between(html, "/* product-builder:start */", "/* product-builder:end */");
  const hex = block.match(/#[0-9a-fA-F]{3,8}\b/);
  if (hex) return `hex literal ${hex[0]}`;
});

check("dead-css-gone", () => {
  const left = [".hx-", 'class="schem"', ".sc-box", "scrollhint"].filter((n) => html.includes(n));
  if (left.length) return `still has ${left.join(", ")}`;
});

check("readme-order", () => {
  const order = inOrder(readme, ["How I build", "Products", "Things I removed", "Open source", "Stack", "At a glance", "Elsewhere"]
    .map((h) => `### ${h}`));
  if (order) return order;
  if (!readme.includes("Spec first.")) return "missing method line";
});

check("product-md", () => {
  if (product.includes("preserve every factual claim")) return "still has the preserve-every-claim rule";
});

let failed = 0;
for (const [id, reason] of results) {
  if (reason) { failed++; console.log(`FAIL ${id}: ${reason}`); } else console.log(`PASS ${id}`);
}
process.exit(failed ? 1 : 0);

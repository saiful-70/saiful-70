# Product-Builder Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite `index.html`, `README.md` and `PRODUCT.md` so the portfolio argues with product decisions and shipped systems instead of a technology list.

**Architecture:** Content and structure rewrite inside the existing single-file page and its "Panel" design system. A small Node check script (`scripts/check-portfolio.mjs`) pins the copy rules, section order and preserved SEO pieces, and is the test every task runs. No new dependencies, no build step.

**Tech Stack:** Hand-written HTML/CSS/vanilla JS, GitHub-flavoured markdown, Node 24 (check script only, stdlib).

**Spec:** `docs/superpowers/specs/2026-10-28-product-builder-portfolio-design.md`. All page copy comes from the spec verbatim. This plan says where it goes and how it is marked up; it does not repeat the copy.

## Global Constraints

- One static `index.html`, all CSS and JS inline. No framework, bundler or npm dependency.
- Title stays "Software Engineer". Never show "Senior" or the internal title.
- Keep: GA tag `G-2N74T6GHQ4`, canonical URL, OG/Twitter image tags, `Person` JSON-LD structure, favicons, manifest, `robots.txt`, `sitemap.xml`, `profile.jpeg`, `og-image.png`.
- Rewrite to the new lede: meta description, keywords, OG/Twitter title and description, OG/Twitter image alt, JSON-LD `description`.
- Never name employer customers. Product and module names are fine.
- No standards or regulation names (ISO, GDPR) on the page or README.
- Colours only through existing CSS custom properties. No hex literals in new rules.
- Keep section ids `#work`, `#experience`, `#skills`, `#oss`, `#contact` so inbound links and the skip link hold.
- Work happens on branch `portfolio/product-builder`, not `main`.
- Commit messages end with `Co-Authored-By: Claude <noreply@anthropic.com>`.

## Decisions this plan adds (not in the spec)

- `<title>`, `og:title`, `twitter:title` become `Saiful Islam — Software Engineer` (drop "(Angular & .NET)").
- The "How I build" panel moves out of the 56 % hero column and sits full width under the hero text: five columns at ≥1041 px, one column below. `.deck-grid` becomes one column; the panel bleed rule at `min-width:1041px` is deleted.
- Product cards become `<article class="mod">` with a `<dl class="brief">` of four rows and an optional `<a class="mod-go">` link. Whole-card links go away, so long text is not one giant link.
- Architecture schematics (`.schem` SVGs) are removed from cards. Their CSS (`.schem`, `.sc-*`, `.scrollhint`) and the `.hx*` CSS are deleted once unused.
- Nav labels: Products (`#work`), Removed (`#removed`), Experience, Stack, Contact.
- Footer line "No framework · no build step" stays.

## Review Focus

1. Phone width (390 px): long `<dd>` text, spec chips and the five steps must wrap with no horizontal page scroll. Checked in the browser in Task 3 and Task 6.
2. Night theme: new `.how` and `.brief` rules must read correctly with `data-theme="dark"`. The check script fails on hex literals inside the new CSS block (Task 1 check `css-tokens-only`).
3. Skip link: `href="#work"` must still land on the Products section after reordering (check `skip-link-target`).
4. Logbook accordions still open and close after Experience moves below Products (Task 4 browser step).
5. Link previews: OG and Twitter descriptions must match the new lede, not the old one (check `meta-new-lede`).

---

### Task 1: Branch and content check script

**Files:**
- Create: `scripts/check-portfolio.mjs`

**Interfaces:**
- Produces: `node scripts/check-portfolio.mjs` prints one line per check, `PASS <id>` or `FAIL <id>: <reason>`, and exits 1 if any check fails. Later tasks name checks by `<id>`.

- [ ] **Step 1: Create branch**

Run: `git checkout -b portfolio/product-builder`
Expected: `Switched to a new branch 'portfolio/product-builder'`

- [ ] **Step 2: Write the check script**

Stdlib only (`node:fs`, `node:path`). Reads `index.html`, `README.md`, `PRODUCT.md` from the repo root (resolve from the script's own directory). Checks, by id:

| id | Rule |
| --- | --- |
| `preserved-seo` | index contains `G-2N74T6GHQ4`, `rel="canonical"`, `"@type": "Person"`, `og:image`, `twitter:image` |
| `meta-new-lede` | index `name="description"`, `og:description`, `twitter:description` and JSON-LD `"description"` each contain `how a business actually runs` |
| `title-plain` | index `<title>` text is exactly `Saiful Islam — Software Engineer` |
| `hero-copy` | index contains `I turn how a business actually runs into software that ships` and `Spec first. AI agents write most of the code.` |
| `section-order` | `id="how"`, `id="work"`, `id="removed"`, `id="experience"`, `id="oss"`, `id="skills"`, `id="contact"` all present, in this order by string index |
| `skip-link-target` | `href="#work"` present and `id="work"` present |
| `how-steps` | inside the element with `id="how"`, exactly 5 `<li` |
| `product-cards` | between `id="work"` and `id="removed"`: exactly 7 each of `<dt>For</dt>`, `<dt>The call</dt>`, `<dt>Shipped</dt>`, `<dt>Cut</dt>` |
| `removed-list` | between `id="removed"` and `id="experience"`: exactly 7 `<li` |
| `forbidden` | index and README, case-insensitive, contain none of: `signals-first`, `that reacts`, `Senior`, `40+`, `2000+`, `900+`, `80+ lazy`, `4 enterprise ERP`, `in-house`, `ISO 9001`, `GDPR`, `rent-erp-staging`, `Angular &amp; .NET`, `Angular & .NET` |
| `css-tokens-only` | text between `/* product-builder:start */` and `/* product-builder:end */` in index exists and has no match for `/#[0-9a-fA-F]{3,8}\b/` |
| `dead-css-gone` | index contains none of `.hx-`, `class="schem"`, `.sc-box`, `scrollhint` |
| `readme-order` | README headings `How I build`, `Products`, `Things I removed`, `Open source`, `Stack`, `At a glance`, `Elsewhere` present in this order; README contains `Spec first.` |
| `product-md` | PRODUCT.md does not contain `preserve every factual claim` |

- [ ] **Step 3: Run it to see the baseline fail**

Run: `node scripts/check-portfolio.mjs`
Expected: exit 1. `preserved-seo` and `skip-link-target` PASS; every other check FAILs.

- [ ] **Step 4: Commit**

```bash
git add scripts/check-portfolio.mjs
git commit -m "Add a content check for the product-builder portfolio rewrite"
```

---

### Task 2: Head metadata and hero

**Files:**
- Modify: `index.html:21-47` (title, meta, OG, Twitter), `index.html:71-72` (JSON-LD description, knowsAbout), `index.html:373-379` (`.deck-grid`), `index.html:441-446` (panel bleed rule), `index.html:450-522` (`.hx*` CSS), `index.html:552-560` (`.crosscheck`), `index.html:797-802` (nav), `index.html:815-911` (hero markup)

**Interfaces:**
- Produces: `<ol class="how" id="how">` inside the hero panel; the CSS block opened with `/* product-builder:start */` that Tasks 3 and 4 append to, closed with `/* product-builder:end */`.

- [ ] **Step 1: Rewrite head metadata**

Description, OG and Twitter descriptions and JSON-LD `description`: spec §1 lede, with "3.5+ years" added to the meta description. Keywords: replace the stack list with `Saiful Islam, software engineer, product engineering, full-stack, web, mobile, backend, Angular, .NET, Flutter, Dhaka`. JSON-LD `knowsAbout`: add `Flutter`, keep the rest. Titles and image alts per "Decisions this plan adds".

- [ ] **Step 2: Rewrite hero text block**

Lede: spec §1 lede. Add `<p class="method">` under it with the spec §1 method line. Status row: `Remote` (lamp) · `Dhaka, BD · UTC+6`. CTAs unchanged.

- [ ] **Step 3: Replace the architecture panel with "How I build"**

`<div class="panel">` keeps its class. Inside: `<ol class="how" id="how" aria-label="How I build">` with five `<li>`, each `<span class="how-n">01</span><b>{step}</b><span>{example}</span>`, copy from spec §2 table. Then the existing `.crosscheck` row with placard `Method` and text `Same loop on every product below.`

- [ ] **Step 4: Replace the status strip**

Six `.sl-row` items (spec §1, no "live" count): `Experience` 3.5+ yrs (num), `Surfaces I ship` Backend · Web · Mobile · Ops, `Design docs written` 200+ (num), `Products` 7 (num), `Method` Spec → agents → gate, `Base` Dhaka · UTC+6. The `Method` row is a plan decision filling the slot the live count left.

- [ ] **Step 5: CSS**

Delete `.hx*` rules and their media queries, and the `min-width:1041px` panel bleed. `.deck-grid` becomes `grid-template-columns:1fr`; hero text block keeps `max-width:62ch`. Open the `/* product-builder:start */` block and add `.method` (dim text, mono, 13px), `.how` (grid, `repeat(5,1fr)` ≥1041 px, `1fr` below, `gap:12px`), `.how li` (styled like the old `.hx-node`: `--sc-box` background, `--sc-stroke` border), `.how-n` (mono, `--green-ink`), `.how b` and `.how span` (reuse the old `.hx b` / `.hx span` type values). Close with `/* product-builder:end */`.

- [ ] **Step 6: Run checks**

Run: `node scripts/check-portfolio.mjs`
Expected PASS: `preserved-seo`, `meta-new-lede`, `title-plain`, `hero-copy`, `skip-link-target`, `how-steps`, `css-tokens-only`. Others may still fail.

- [ ] **Step 7: Commit**

```bash
git add index.html
git commit -m "Lead the portfolio with how I build instead of a stack diagram"
```

---

### Task 3: Products section

**Files:**
- Modify: `index.html:984-1166` (Work section), CSS block from Task 2, `.schem`/`.sc-*`/`.scrollhint` CSS (search `/* schematic */`)

**Interfaces:**
- Consumes: `/* product-builder:start */ … /* product-builder:end */` CSS block.
- Produces: `#work` section placed directly after the hero.

- [ ] **Step 1: Move and rename the section**

Move `<section id="work">` above `#experience`. Heading `Products`, count `7 systems`. Nav link text `Products`.

- [ ] **Step 2: Write the seven cards**

Order and copy from spec §3. Markup per card:

```html
<article class="mod wide|half [mod--caution]">
  <div class="mod-top">
    <h3>{name}</h3>
    <span class="placard">{Employer · X | Freelance | Own product}</span>
    <span class="mod-lamp [restricted]"><span class="lamp [amber]" aria-hidden="true"></span>{status}</span>
  </div>
  <dl class="brief">
    <div><dt>For</dt><dd>…</dd></div>
    <div><dt>The call</dt><dd>…</dd></div>
    <div><dt>Shipped</dt><dd>…</dd></div>
    <div><dt>Cut</dt><dd>…</dd></div>
  </dl>
  <div class="specs">{4–6 chips, one row}</div>
  <a class="mod-go" href="…" target="_blank" rel="noopener">View live — {host} <svg class="arr">…</svg></a>  <!-- only if a public URL -->
  <span class="mod-note">…</span>  <!-- for private / no-link cards -->
</article>
```

Widths: Certain QMS `wide`, CampusQ `wide`, Rent-ERP + Footwear ERP `half`, Institute + Family Connect `half`, DebuggerMind `wide`. Status words: `In production` (green), `Live` (green), `In acceptance` (amber, `restricted` + `mod--caution`) for Family Connect App. Links only for CampusQ (`https://campusqbd.com`) and DebuggerMind (`https://pogiecom.pogiit.com`). Rent-ERP and Institute carry `mod-note` "Source private · no public link". The spec's stack names at the end of each "Shipped" line move into the chips; CampusQ's "Cut" row ends with "Pre-revenue." as page copy; Rent-ERP says "mobile app built with a collaborator" with no name.

- [ ] **Step 3: CSS**

Inside the product-builder block: `.brief` (grid, `gap:12px`), `.brief div` (grid `8rem 1fr` ≥641 px, single column below), `.brief dt` (mono, 11px, uppercase, `--green-ink`), `.brief dd` (15px, `--dim`, `line-height:1.65`, `min-width:0`, `overflow-wrap:anywhere`). Change `a.mod:hover` selectors to `.mod:has(.mod-go:hover)` or delete them. Delete `.schem`, `.sc-*`, `.scrollhint` rules and the old `.mod p` rules if unused.

- [ ] **Step 4: Run checks**

Run: `node scripts/check-portfolio.mjs`
Expected PASS adds `product-cards`, `dead-css-gone` (if `.hx` already gone).

- [ ] **Step 5: Browser check at 390 px and 1280 px, both themes**

Open `index.html` locally. At 390 px: no horizontal scroll (`document.documentElement.scrollWidth === 390`), dt/dd stack. At 1280 px: halves sit two per row. Toggle night: dt, dd and chips readable.

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "Rewrite projects as product cards: who it is for, the call, what shipped, what was cut"
```

---

### Task 4: Removed, Experience, Open source, Stack, Contact

**Files:**
- Modify: `index.html` sections `#experience`, `#oss`, `#skills`, `#contact`; add `<section id="removed">`; nav

**Interfaces:**
- Consumes: product-builder CSS block.

- [ ] **Step 1: Add "Things I removed"**

New `<section class="sec" id="removed">` right after `#work`. `sec-head`: `Things I removed`, count `7 cuts`. Intro `<p>` and seven `<li>` from spec §4 inside `<ul class="remarks">` (existing class). Nav link `Removed` → `#removed`.

- [ ] **Step 2: Rewrite Experience**

Section now after `#removed`. Heading stays "Where the hours went". Bullets from spec §5. `log-type` cells: Netpower `Certain QMS · web + mobile`, MultiTech `Manufacturing ERP`, Constant Concept `Remote · International`. Keep button/panel ids `lb1–lb3`, `lp1–lp3`.

- [ ] **Step 3: Rewrite Open source**

Heading `Open source`, count `1 fix · 1 package`. Two `<article class="mod half">` cards (Optimus UI, ngx-primeng-toolkit), copy from spec §6, each with a `mod-go` link (GitHub repo; npm package). Move the "Angular libraries" card out of `#work` if still present.

- [ ] **Step 4: Compact Stack**

Heading `Stack, for the filter`, count removed. Keep the five `.cl` groups and items, drop `(3.5+ yrs)` from Angular, add `Flutter · Riverpod` to Frontend.

- [ ] **Step 5: Contact**

`<h2 class="big">Let's build something<br><span class="em">people run their business on.</span></h2>`. Foot note `Remote · replies within a day`.

- [ ] **Step 6: Run checks**

Run: `node scripts/check-portfolio.mjs`
Expected PASS: every index check (`section-order`, `removed-list`, `forbidden` for index). README and PRODUCT.md checks may still fail.

- [ ] **Step 7: Browser check**

Logbook rows open and close by click and by Enter/Space; skip link lands on Products; nav links scroll to the right sections.

- [ ] **Step 8: Commit**

```bash
git add index.html
git commit -m "Add things I removed; rewrite experience, open source, stack and contact as outcomes"
```

---

### Task 5: README

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Rewrite**

Order per spec "README.md" section. Intro: spec §1 lede plus method line; badge row unchanged except the CampusQ badge stays. `### How I build`: two-column table (Step, Example) from spec §2. `### Products`: table `Product | For | The call | Status`, one line each, seven rows, links only for CampusQ and DebuggerMind. `### Things I removed`: seven bullets. `### Open source`: Optimus UI and ngx-primeng-toolkit, keep existing badges. `### Stack`: existing badge groups, moved down. "At a glance" and "Elsewhere" unchanged. Delete the "Ask me about…" paragraph.

- [ ] **Step 2: Run checks**

Run: `node scripts/check-portfolio.mjs`
Expected PASS: `readme-order`, `forbidden`.

- [ ] **Step 3: Commit**

```bash
git add README.md
git commit -m "Mirror the product-builder structure in the GitHub profile README"
```

---

### Task 6: PRODUCT.md and final verification

**Files:**
- Modify: `PRODUCT.md` sections "Positioning", "Capabilities and Constraints", "Evidence on Hand"

- [ ] **Step 1: Update PRODUCT.md**

Positioning: replace with spec "Intent" in two sentences plus the five-step loop. Delete the "Must preserve every factual claim…" bullet; replace with "Claims follow `docs/superpowers/specs/2026-10-28-product-builder-portfolio-design.md`; numbers only where a repo, doc or live URL backs them." Evidence on Hand: drop 900+ endpoints, 80+ lazy routes, 4 ERP platforms, 40+ components/2000+ games, 1,000+ keys; add Family Connect App, Footwear ERP, Institute payment loop; DebuggerMind as a merchant storefront platform.

- [ ] **Step 2: Full check run**

Run: `node scripts/check-portfolio.mjs`
Expected: every line `PASS`, exit 0.

- [ ] **Step 3: Browser pass**

Both themes at 390 px and 1280 px: no console errors, no horizontal scroll, focus ring visible on nav, CTAs, logbook buttons and card links.

- [ ] **Step 4: Link check**

Run: `curl -s -o /dev/null -w "%{http_code} %{url_effective}\n" -L https://campusqbd.com https://pogiecom.pogiit.com https://www.npmjs.com/package/ngx-primeng-toolkit https://github.com/openng-org/optimus-ui`
Expected: `200` for each.

- [ ] **Step 5: Commit**

```bash
git add PRODUCT.md
git commit -m "Point PRODUCT.md at the product-builder positioning"
```

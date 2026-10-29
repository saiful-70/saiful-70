# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing: a single hand-authored `index.html` served by GitHub Pages at
`https://saiful-70.github.io/saiful-70/`. No framework, no bundler, no npm, no build step.
Confirmed as a binding constraint by the user — the site must remain one static file plus
committed assets. A second surface, `README.md`, is the GitHub profile README rendered by
GitHub's own markdown pipeline.

## Users

Primary: **remote hiring managers and engineering leaders hiring internationally**
(EU / Nordics / US). They arrive from LinkedIn, a job application, or a GitHub profile,
usually on a laptop, often mid-triage across many candidates. Their job is to decide in
roughly a minute whether this engineer is senior enough to interview, then find a way to
contact him.

Secondary, not to be designed for at the primary's expense: peer engineers arriving from
npm/GitHub, and product founders evaluating him for end-to-end product work.

## Product Purpose

Two surfaces representing one person, Saiful Islam, a software engineer in Dhaka, Bangladesh,
open to remote work. Success is a hiring conversation started: the visitor understands the
depth of the work, believes the claims, and uses one of the contact paths (email, WhatsApp,
LinkedIn, resume).

## Positioning

A software engineer who builds products end to end. The page argues with decisions and
shipped systems, not with a technology list; the title stays "Software Engineer".

The same loop runs through every product: find out how the business really runs, change the
model to fit, decide what not to build, ship every surface (backend, web, mobile, ops), and put
a gate behind it. AI use is disclosed as method: spec first, agents write most of the code, the
engineer owns scope and verification.

Audience is remote roles worldwide. No region, time-zone or compliance framing.

## Operating Context

- Visitors scan fast, on a laptop, comparing candidates side by side. Mobile is a real
  secondary case (LinkedIn in-app browser).
- The portfolio is linked from LinkedIn, the GitHub profile README, and job applications;
  Open Graph previews are part of the first impression.
- The README is the GitHub profile landing surface, rendered inside GitHub's own chrome in
  both light and dark themes, with no custom CSS and a sanitized HTML subset.

## Capabilities and Constraints

- Single static `index.html`; all CSS and JS inline; assets committed alongside it
  (`profile.jpeg`, `og-image.png`, favicons, `site.webmanifest`, `robots.txt`, `sitemap.xml`).
- Must preserve: Google Analytics (`G-2N74T6GHQ4`), all SEO meta, canonical URL, Open Graph
  and Twitter cards, and the `Person` JSON-LD block.
- Claims follow `docs/superpowers/specs/2026-10-28-product-builder-portfolio-design.md`;
  numbers only where a repo, doc or live URL backs them. Employer customers are never named.
- `node scripts/check-portfolio.mjs` must pass before publishing.
- No image-conversion tooling available in this environment (no cwebp/sips/magick/ffmpeg);
  raster assets ship as authored.
- GitHub README constraint: no `<style>`, no scripts, no CSS classes. Only GitHub's markdown,
  a narrow allow-list of HTML tags, and committed image assets. Anything that must look
  designed has to be a committed SVG or an image.
- The interactive signal-graph hero widget is **not** protected; the user left it free to be
  replaced.

## Brand Commitments

- Name: Saiful Islam. Handle: `saiful-70` (GitHub), `saiful70` (LinkedIn, LeetCode).
- Public title is plain **"Software Engineer"**. The current internal title
  (Senior Software Engineer II, Netpower) is deliberately not displayed on public surfaces;
  full titles belong only in experience timelines and the resume.
- Voice: direct, specific, technically concrete. Claims are backed by numbers or named
  systems. No hype adjectives.
- Existing assets that stay in service: `profile.jpeg`, favicon set, `og-image.png`
  (regenerate only if the identity changes).

## Evidence on Hand

Real and verifiable — usable as content:

- Employment: Netpower (Mar 2026 → present, Certain QMS, Angular 21); MultiTech Systems
  (Sep 2024 – Feb 2026); Constant Concept (Feb 2023 – Aug 2024, remote/international).
- Live products: `campusqbd.com` (CampusQ, pre-revenue), `pogiecom.pogiit.com`
  (DebuggerMind Commerce, a storefront platform used by merchants).
- Published package: `ngx-primeng-toolkit` on npm. One merged fix in Optimus UI.
- Rent-ERP: in production, source private, no public link; mobile app built with an unnamed
  collaborator.
- Footwear ERP (MultiTech): re-platformed from a garment ERP; customer never named.
- Institute payments: freelance from 2025-06, in production, no public link.
- Family Connect App: backend live, mobile in acceptance, no link yet.
- Metrics on the page: 3.5+ years, 200+ design docs, 7 products, 580+ endpoints (Footwear
  ERP), 2,300+ backend tests and 289 of 303 route cells (CampusQ), 585 tests (Family Connect),
  405 tests (Handbook app), 170+ tickets and 110+ design docs (Netpower).
- Education: MSc (2025) and BSc (2024) in ICT, Comilla University.
- Awards: 1st Runner-Up, DevOps Hackathon (Poridhi.io × Brain Station 23); freeCodeCamp
  JavaScript Algorithms & Data Structures.
- Contact: `saiful70.me@gmail.com`, WhatsApp `+8801689740070`, LinkedIn, GitHub, resume doc.

Absent — must never be fabricated: client testimonials, named customers of CampusQ or
Rent-ERP, revenue or user-count figures, employer logos, press coverage, uptime or
performance benchmarks, screenshots of private products.

## Product Principles

1. **Shipped systems are the argument.** Lead with what runs in production and who uses it,
   not with a technology list.
2. **Every number stays checkable.** Specific claims only, phrased so a skeptical hiring
   manager could verify them in an interview.
3. **A minute must be enough.** The primary visitor's decision has to be reachable from the
   first screen and one scroll; depth is available below, never required above.
4. **Contact is never more than one action away** from anywhere on the page.
5. **Constraint is part of the craft.** One hand-written file, no build step — the surface
   should read as deliberate engineering, not as a limitation.

## Accessibility & Inclusion

No user-specific requirement was established beyond the general standard: keyboard-operable
interactive elements, visible focus, WCAG AA contrast in both the page's own themes, honored
`prefers-reduced-motion`, and meaningful alternatives for the graph/diagram content. The
README must stay legible in both GitHub light and dark themes.

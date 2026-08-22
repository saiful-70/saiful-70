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

The differentiator is *systems actually shipped*, not techniques listed. Four enterprise ERP
platforms, 900+ typed endpoints, a multi-tenant SaaS built solo down to Postgres row-level
security and bitmask RBAC, a three-surface property ERP, and a published npm library — all
inside 3.5 years. Paired with an AI-native workflow (Claude, Cursor, Ollama, OpenCode) used
as leverage on production work, not as a novelty.

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
- Must preserve every factual claim and all content exactly as written: employers, dates,
  metrics, project descriptions, stack lists, education, awards, contact details.
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
- **Light by default.** Confirmed by the user on 2026-08-23: the site opens white for
  everyone, with a visible control to switch to dark and the choice remembered. Not
  system-preference-driven, not dark-first. Any future surface inherits this.
- **No skeuomorphism.** The user rejected a metaphor-led treatment (instrument dials,
  machined panels) outright. Future work stays literal: type, space, hairlines, one accent.
- Identity mark is an "S" monogram, white on the accent blue, chosen 2026-08-23.
- The endpoint count (900+ typed endpoints) is not to be used as a headline statistic.
  It stays in the MultiTech Systems detail where it has context.
- Assets that stay in service: `profile.jpeg`. The raster icon set
  (`favicon.png`, `apple-touch-icon.png`, `icon-512.png`) and `og-image.png` are **stale** —
  they still carry a superseded identity and need regenerating against the current one.

## Evidence on Hand

Real and verifiable — usable as content:

- Employment: Netpower (Mar 2026 → present, Certain QMS, Angular 21); MultiTech Systems
  (Sep 2024 – Feb 2026); Constant Concept (Feb 2023 – Aug 2024, remote/international).
- Live products: `campusqbd.com` (CampusQ), `pogiit.com` (DebuggerMind Commerce).
- Published package: `ngx-primeng-toolkit` on npm.
- Rent-ERP: real, source private, no public link.
- Metrics stated on the current site: 3.5+ years, 900+ typed endpoints, 80+ lazy routes,
  4 ERP platforms, 6+ products shipped, 40+ reusable components powering 2000+ games,
  1,000+ localization keys.
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

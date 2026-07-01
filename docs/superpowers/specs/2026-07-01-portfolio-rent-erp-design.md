# Portfolio — add Rent-ERP + sharpen work section

**Date:** 2026-07-01
**Repo:** `saiful-70` (public GitHub Pages portfolio) · **Branch:** `content/rent-erp`
**Also edits:** `resume.docx` (in the same repo)

## Problem

The portfolio's Work section shows two side projects (CampusQ, ngx-primeng-toolkit). A third, substantial project — **Rent-ERP**, a complete three-surface House Rent Management ERP — is not represented anywhere. It is also the only cross-platform / mobile piece in the body of work, so its absence understates the range on show. The two existing cards can also carry more precise, substantive copy. The resume omits Rent-ERP and contains a typo.

## Constraints & facts

- **Rent-ERP repo is PRIVATE** (`github.com/saiful-70/rent-erp`) and has **no live URL** — it is a single-organisation product, not a deployed SaaS. So its card cannot link out the way the others do.
- Per `rent-erp/docs/STATUS.md`: first iteration complete (all 9 phases build green) but **runtime smoke against a live DB is still pending** → the card must **not** claim "live" or "in production".
- Portfolio is a **single-file, no-build** page (`index.html`) with a fixed "reactive signals" design language (Bricolage Grotesque / Inter / JetBrains Mono; purple accent `#4B2EE6`/`#7C5CFF`, teal "live" accent). All changes must stay inside that language — no new dependencies, no build step.
- Word is installed on this machine → use it to validate the edited `.docx` (and optionally to drive the edit).
- GDPR / synthetic-data rules: no real customer data appears (none needed here).

## Decisions (confirmed with user)

| Topic | Decision |
|---|---|
| Rent-ERP CTA | No outbound link; a muted "🔒 Source private · single-org product" badge in place of the card CTA |
| Work layout | Two featured cards (CampusQ + Rent-ERP) on top; ngx-primeng-toolkit as a full-width secondary card below |
| "Resourceful" scope | Sharpen the existing structure only — no new sections, no case study |
| Resume scope | Add Rent-ERP to side projects + fix typos |

## Changes

### A. Work section layout (`index.html`)
- `.work-grid` → `grid-template-columns: 1fr 1fr` (was `1.4fr 1fr`) — CampusQ and Rent-ERP as equal featured cards.
- Add a `.card--wide` modifier: `grid-column: 1 / -1` for the library card, so it spans full width below the two flagships.
- Existing `@media (max-width:860px)` collapse to single column is unaffected (all three stack; `1 / -1` still valid).

### B. New Rent-ERP card
A `<div class="card">` (not `<a>` — no click target; hover-lift/underline styles still apply). It is a top-row featured card, so it takes no width modifier. Content:
- kicker: `web + mobile erp`
- title: `Rent-ERP`
- description: "A single-org property-management ERP across three surfaces — a .NET 10 modular monolith, an Angular 21 admin console, and a React Native app serving tenants and staff from one binary. Reuses the CampusQ architecture, minus the multi-tenant layer."
- tags: `.NET 10` · `Angular 21` · `React Native` · `Postgres` · `bKash` · `FCM push` · `RBAC personas` · `en / bn`
- footer badge (replaces `.card-cta` link): a lock glyph + `Source private · single-org product`, muted (uses `--faint`/`--muted`, no accent, no arrow). New minimal class `.card-note`.

### C. Sharpen existing cards
- **CampusQ** description → "A multi-tenant coaching platform where every tenant gets its own subdomain. Built end-to-end — Postgres row-level security, bitmask RBAC, online exams, bKash/Nagad payments — so isolation holds all the way down." Tags and `View live — campusqbd.com` link unchanged.
- **ngx-primeng-toolkit** — minor copy tightening; `View on npm` link unchanged; gains `.card--wide`.

### D. Precision updates
- Skills → Frontend column: add `React Native (Expo)`.
- JSON-LD `knowsAbout` array + `<meta name="keywords">`: add `React Native`.
- Proof strip: **unchanged** — `4 ERP platforms` stays (precise enterprise count; not inflated with side projects).

### E. Resume (`resume.docx`)
- Fix `Claudde` → `Claude`; `1st Runners-Up` → `1st Runner-Up`.
- Add a Rent-ERP entry under *Personal and Side Projects*, matching the CampusQ entry's format (bold project name + description + stack line).
- Edit preserves all existing styling; validate the result opens cleanly in Word. Keep a backup of the original before overwriting.

## Verification

- `index.html`: open in a browser (or the `/run` skill) — confirm three cards render, two-up + full-width-below layout on desktop, single column on mobile; Rent-ERP card has no link and shows the private badge; existing links still work; no console errors; reduced-motion still respected.
- `resume.docx`: opens in Word with no repair prompt; Rent-ERP entry present and styled like CampusQ; typos fixed; rest of the document unchanged.
- No secrets, no real customer data introduced.

## Out of scope
New sections, impact/metrics band, a Rent-ERP case study, proof-strip changes, experience-timeline changes.

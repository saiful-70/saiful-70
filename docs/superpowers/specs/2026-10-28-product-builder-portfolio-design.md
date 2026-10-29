# Product-builder portfolio: design

Date: 2026-10-28. Surfaces: `index.html` (GitHub Pages) and `README.md` (GitHub profile).
Status: owner questions answered 2026-10-29; awaiting final approval.

## Intent

Reposition the portfolio from "engineer who uses Angular and .NET" to "engineer who builds
products end to end". The title stays **Software Engineer**. The page argues with decisions and
shipped systems, not with a technology list. Audience: remote senior roles worldwide. No region,
time-zone or compliance framing anywhere on the page.

Why now: hiring in 2026 screens for end-to-end ownership, product judgment and verified AI use.
A scan of every repo on disk (2026-10-28) found that evidence already exists in the work
(222 design docs, dated decision records, features removed on evidence). The current copy hides
it behind stack names.

## Goals

1. A hiring manager, in one scroll, can say: "He finds out how a business really works, changes
   the model to fit, decides what not to build, ships every surface himself, and gates it."
2. Every claim on the page is one the owner can defend in an interview from a repo, a doc or a
   live URL.
3. AI use is disclosed as method, with the verification gates next to it.
4. Stack stays findable for keyword filters, but at the bottom.

## Non-goals

- No change to title, name, handles, contact paths, analytics, favicons, JSON-LD structure.
- SEO meta description, keywords, Open Graph and Twitter descriptions and the JSON-LD
  `description` field are rewritten to the new lede so link previews match the page (builder
  decision, recorded here).
- No new build step, framework, or dependency. One hand-written `index.html` stays the rule.
- No redesign of the visual system (`DESIGN.md` "The Panel" stays). This is a content and
  structure rewrite inside the existing design.
- LinkedIn and the resume are out of scope for this round.

## Anti-goals (failure even if it ships)

- Reads like a product manager who does not code. Building all surfaces must stay loud.
- Any fabricated number, customer name, testimonial, revenue or user count.
- Customer or client company names from employer work. Products and modules may be named;
  customers may not.
- Mentioning the internal title (Senior Software Engineer II) anywhere public.
- Compliance or standards name-dropping as a selling point.

## Constraints

- Keep: Google Analytics, canonical URL, Open Graph and Twitter cards, `Person` JSON-LD,
  `robots.txt`, `sitemap.xml`, `site.webmanifest`, `profile.jpeg`, `og-image.png`.
- The hero signal-graph widget may be replaced (owner left it free).
- README: GitHub markdown only, committed SVG/PNG for anything that must look designed. The
  weekly stats SVG workflow stays.
- `PRODUCT.md` currently says "preserve every factual claim exactly as written". This design
  supersedes that line; update `PRODUCT.md` positioning and evidence sections to match this
  document in the same change.

## Page structure (index.html)

Section order:

1. Hero
2. How I build (replaces the architecture panel)
3. Products (replaces "Things I shipped on my own time")
4. Things I removed
5. Experience
6. Open source
7. Stack (moved down, compact)
8. Education and awards (unchanged content)
9. Contact

### 1. Hero

- H1: Saiful Islam. Placard: Software Engineer.
- Lede: "I turn how a business actually runs into software that ships: backend, web, mobile,
  deploy, and the alerts that watch it."
- Method line, directly under the lede: "Spec first. AI agents write most of the code. I own what
  gets built, what gets cut, and the gate it has to pass."
- CTAs unchanged: "See the work", "Get in touch". Status line: "Remote · Dhaka, BD · UTC+6".
- Status strip (replaces the current six stats): Years 3.5+ · Products live 4 · Surfaces I ship
  Backend · Web · Mobile · Ops · Design docs written 200+ · Base Dhaka · UTC+6.
  No "live" count in the strip; status words on each card carry that.
  "Design docs written 200+" is backed by 222 docs under `docs/` across employer repos plus the
  own-product specs; it stays a round-down.

### 2. How I build (hero panel)

Five steps, each with one real example. Vertical list on mobile, five-column strip on desktop.
Replaces the architecture diagram in the same slot.

| Step | Example line |
| --- | --- |
| Find out how the business really runs | A property ERP billed as if the org were the landlord. It isn't; it sells a service to flat owners. |
| Change the model, not the screen | Rebuilt money into three tracks that never mix: rent, service charge, org accounts. |
| Decide what not to build | Dropped a planned mobile API service; the app calls the existing APIs through the gateway. |
| Ship every surface myself | Offline document app for field workers: sign-in, outbox, background sync, 405 tests, three weeks. |
| Put a gate behind it | The SaaS refuses to boot if any tenant table is missing a row-level security policy. |

Caption: "Same loop on every product below."

### 3. Products

Section title: "Products". Sub: "7 systems". Status word per card: live (public URL anyone can
open), in production (customers use it, no public URL), in acceptance. Each card has the same four labelled lines:
**For**, **The call**, **Shipped**, **Cut**. Spec chips stay but shrink to one row and sit last.
Order below is the page order.

**Certain QMS (employer, Netpower) · in production**
- For: quality managers and HSE staff at industrial companies, and the field workers who have to
  read and confirm controlled documents.
- The call: the "evaluate this measure" email led to a page where nobody could evaluate. Treated
  it as a migration blocker, not a bug. Owned schema, worklist, overdue escalation, evidence frozen
  at the moment of judgement, and the UI.
- Shipped: measure-effectiveness evaluation; offline Handbook app for iPhone and Android, built
  almost alone in three weeks; one OAuth sign-in (code + PKCE, rotating refresh tokens, session
  revoke) for all Netpower apps; AI-assisted requirement import with a human review step and an
  append-only run log; "Verified" no longer offered without evidence; subscription digest across
  four services. Flutter · Angular 22 · .NET 10 · YARP.
- Cut: a separate mobile API service; PDF input for the AI importer (OCR path deferred on purpose).

**CampusQ · live · campusqbd.com**
- For: coaching centres in Bangladesh that run on a paper register, a spreadsheet and the owner's
  personal mobile-money number. Front desk does the same task eighty times a day.
- The call: build for this niche, not a cut-down school ERP. Bangla-first, guardian SMS with a
  magic link and no account, printed receipts and report cards as first-class output.
- Shipped: multi-tenant SaaS on `{tenant}.campusqbd.com`, plan limits as a designed upgrade state,
  tenant isolation enforced in Postgres and checked at boot, 2,300+ backend tests, e2e over 289 of
  303 route cells, business KPIs on Grafana with Telegram alerts. .NET 10 · Angular 22 · Next.js 16.
- Cut: payment gateway (manual transfer plus operator verification instead), QR check-in, eight
  AI features removed in eight slices at the product owner's request, palettes 16 → 6. Removed
  invented stats from the marketing site before launch. Pre-revenue; say so.

**Rent-ERP · in production · source private · no link**
- For: an organisation that manages residential buildings for flat owners; admins on a console,
  tenants and staff on a phone.
- The call: see "How I build". Rent goes tenant → owner and is never org income; service charge
  follows ownership, not occupancy.
- Shipped: .NET 10 backend, Angular admin, Expo mobile app (mobile built with a collaborator,
  unnamed), field-level append-only audit trail enforced by a DB trigger, maker ≠ checker on
  vouchers, 100-issue audit closed in four days, CI with a guard that fails when tests are
  silently skipped.
- Cut: multi-tenancy, persona switching, push notifications.

**Footwear manufacturer ERP (employer, MultiTech) · in production**
- For: merchandisers and stores staff at a footwear factory.
- The call: re-platform a garment-export ERP instead of starting over. Stripped yarn, fabric and
  spin concepts, reset migrations, seeded the tenant, grew it to six modules and 580+ endpoints.
- Shipped: inventory with landed cost and reconciling issue/return/transfer; phone-to-ERP
  document capture via QR and a short-lived upload token, no mobile login; Excel bulk order
  intake that validates everything first and reports per row; BOM and pre-cost workflow.
- Cut: a transaction failure fixed by cutting saves per breakdown block from ~10 to 6, written up
  in the repo docs.

**Institute payment loop (freelance, 2025-06 →) · in production · no public link**
- For: two coaching institutes collecting fees by mobile money and cash, confirmed by hand.
- The call: one shared payment gateway with signed callbacks into each institute's system, so
  neither needed a shared database.
- Shipped: gateway (sole author), retry with backoff, admin transactions console, "Copy payment
  link" in the back office, "apply to both" admission flow that asks only for missing fields,
  monthly fee accrual and due-alert SMS on a scheduler. ASP.NET Core · PostgreSQL · Hangfire.
- Cut: wrote the client a gap analysis ranking missing features by business impact rather than
  building them unasked.

**Family Connect App · backend live, mobile in acceptance · no link yet**
- For: a family keeping prescriptions, doses and reports, each person with their own login and
  per-person sharing, working fully offline before any account exists.
- The call: health data treated as sensitive by default: encrypted phone database, export and hard
  delete, nothing health-related in logs or push, and no free-tier AI model whose terms allow
  training on user data.
- Shipped: custom sync with gapless per-family revision cursor, idempotent ops, and a scope hash
  that purges revoked data from the phone; self-host mode under a source-available licence;
  585 tests. Hono · Drizzle · Expo.
- Cut: Supabase and the original PWA; AI extraction switched off until the privacy terms hold.

**DebuggerMind Commerce · live · pogiecom.pogiit.com**
- For: shoppers on low-end Android over mobile data, arriving from ads; cash on delivery first.
- The call: one storefront codebase for many merchants. A merchant is template × theme × branding
  × flags × language as data; onboarding is one descriptor file, no fork.
- Shipped: combo and bundle landing pages with per-unit variant pick, campaign pages, Meta CAPI
  in BDT; wrote the bundle re-pricing API contract for the .NET team. Next.js 15.
- Cut: a "metaphor world" visual concept, rejected for the category standard shoppers expect.

Freelance work appears as a dated product card only, not as a fourth Experience entry.

Owner decisions recorded here, not mine: DebuggerMind is presented as a storefront platform used
by merchants, not as an in-house demo (repo deploys to merchant domains). Freelance institute work
is shown and dated honestly; it overlaps the MultiTech period.

### 4. Things I removed

Section title: "Things I removed". One line of intro: "Deciding what not to build is half the
job. These were built or planned, then taken out on evidence."

- Payment gateway integration in CampusQ. Manual transfer plus operator check was enough for the
  first customers.
- Eight AI features in CampusQ, removed in eight slices with no migration; 59 AI-only tests went
  with them, screenshots re-shot.
- A separate mobile API service at Netpower. Existing module APIs through the gateway did the job.
- PDF input in the AI register importer. Spreadsheets only; no OCR path to maintain.
- Multi-tenant layer in Rent-ERP. Single org, no row-level security, no subdomains.
- Persona switching in Rent-ERP, in favour of plain roles.
- Fabricated stats and testimonials on the CampusQ marketing site, with a production cleanup
  script.

### 5. Experience

Same three employers and dates. Bullets rewritten as outcomes; stack moves to the chip row.

- **Netpower · Software Engineer · 2026-03 →**
  - Shipped measure-effectiveness evaluation end to end, closing a gap that blocked migration to
    the new deviation UI.
  - Built the offline Handbook mobile app from zero; wrote the mobile architecture and dropped a
    planned server.
  - One sign-in for all company apps on the existing login, with session revoke and reuse
    detection; fixed one security-review finding and recorded the accepted risks.
  - First AI features in the compliance module with an audit log per run, plus the evidence guard
    that made auditor-facing numbers trustworthy.
  - 170+ tickets, 110+ design docs, Playwright e2e suite across the apps.
- **MultiTech Systems · Software Engineer · 2024-09 → 2026-02**
  - Re-platformed a garment ERP for a footwear manufacturer; inventory, document capture, bulk
    order intake, costing workflow. 222 of 773 commits as second contributor.
  - Shop-floor IoT bridge (MQTT → RabbitMQ) support work.
- **Constant Concept · Angular Developer · 2023-02 → 2024-08 · remote**
  - Educational platforms Plabook and Augie: reusable game components, Stripe and PayPal flows,
    an Android app in Kotlin and Jetpack Compose. No counts (owner decision 2026-10-29).

### 6. Open source

- Optimus UI: "One merged fix: row grouping crashed with an empty sort array. Regression tests
  included. It is the component layer under CampusQ, so the fix runs where I can see it."
- ngx-primeng-toolkit: "Table and query-state helpers extracted from ERP work, published to npm
  with CI." Link to npm.

### 7. Stack

One compact block, same groups as today (Frontend, Backend and data, Testing, DevOps, AI tools),
rendered as a single chip grid under the heading "Stack, for the filter". No years, no "in
production use" badge.

### 8. Education and awards

Unchanged content.

### 9. Contact

Headline: "Let's build something people run their business on." Rest unchanged.

## README.md

Mirrors the page in GitHub markdown:

1. Intro paragraph (lede plus method line), badge row unchanged.
2. "How I build" as a five-row table (step, example).
3. "Products" as a table: product, for, the call, status. One line each.
4. "Things I removed" as a short list.
5. "Open source" unchanged in shape, copy as above.
6. "Stack" badge grid, moved down.
7. "At a glance" SVG and "Elsewhere" unchanged.

## Copy rules

- Every card uses the same four labels so the page scans as one method.
- Numbers only where the scan counted them or the owner confirms them. Round down.
- Product and module names are fine. Employer customers are never named.
- No AI-tell phrasing; plain words; active voice.
- Claims that only the owner can back (Constant Concept counts) are marked for confirmation
  before publish.

## Left to the builder

- Exact HTML for the five-step panel and the four-line cards inside the existing design tokens.
- Whether the hero signal-graph JS is deleted or kept as decoration; deleting is fine.
- SVG for the README "How I build" strip, if a table reads poorly on GitHub.
- Regenerating `og-image.png` is not required; identity has not changed.

## Verification

- `index.html` opens with no console errors, both themes, 390 px and desktop.
- All links resolve (campusqbd.com, pogiecom.pogiit.com, npm, GitHub, LinkedIn, resume).
- Grep the final files for customer names, "Senior", standard numbers (ISO, GDPR) and the
  internal title; none may appear.
- README renders in GitHub light and dark without broken tables.

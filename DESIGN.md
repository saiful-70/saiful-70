---
name: Saiful Islam — Portfolio
description: A light-first, type-only engineer portfolio built from hairlines, space and one blue accent.
colors:
  bg: "#FFFFFF"
  bg-soft: "#F7F8F9"
  ink: "#0A0B0C"
  ink-2: "#31373F"
  ink-hover: "#25292E"
  muted: "#5C646E"
  faint: "#697079"
  line: "#E4E7EA"
  line-soft: "#EFF1F3"
  accent: "#1F5EFF"
  live: "#0A7A45"
typography:
  display:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.95rem, 4.6vw, 3.05rem)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.028em"
  headline:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.45rem, 3.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.24
    letterSpacing: "-0.024em"
  title:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-small:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  ui:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, -apple-system, BlinkMacSystemFont, Segoe UI, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.6
    letterSpacing: "0.02em"
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.02em"
rounded:
  focus: "4px"
  control: "8px"
  button: "10px"
  row: "10px"
  pill: "20px"
  dot: "50%"
spacing:
  xs: "4px"
  sm: "8px"
  md: "10px"
  lg: "18px"
  xl: "24px"
  gutter: "28px"
  block: "34px"
  column: "44px"
  section: "48px"
  hero: "96px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.ui}"
    rounded: "{rounded.button}"
    padding: "11px 18px"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
    textColor: "{colors.bg}"
  button-secondary:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.button}"
    padding: "11px 18px"
  button-secondary-hover:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.ink}"
  chip-tech:
    backgroundColor: "transparent"
    textColor: "{colors.faint}"
    typography: "{typography.mono}"
    rounded: "{rounded.pill}"
    padding: "2px 9px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.ui}"
    rounded: "{rounded.nav}"
    padding: "7px 11px"
  nav-link-hover:
    backgroundColor: "{colors.bg-soft}"
    textColor: "{colors.ink}"
  theme-toggle:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    size: "34px"
  work-row:
    backgroundColor: "transparent"
    rounded: "{rounded.row}"
    padding: "24px 12px"
  work-row-hover:
    backgroundColor: "{colors.bg-soft}"
  section-label:
    backgroundColor: "transparent"
    textColor: "{colors.faint}"
    typography: "{typography.label}"
    padding: "0 0 14px"
---

# Design System: Saiful Islam — Portfolio

## Overview

**Creative North Star: "The Engineering Memo"**

This is a document, not an interface. It behaves the way a well-set technical memo behaves:
white paper, near-black ink, one accent reserved for the things you can act on, and rules
drawn only where a rule genuinely divides one thing from another. Everything a portfolio
usually spends on — panels, gradients, hero graphics, shadowed cards, animated ornament — is
spent instead on type size, line length and the order the page is read in. The result reads
fast, which is the entire commercial argument: the reader has about a minute.

The system is literal by commitment. There is no metaphor and no material simulation. Nothing
pretends to be a dial, a card, a device, or a physical object with a light source. Surfaces do
not lift; they are separated by a hairline or by space, and nothing else. The one place the
build allows any atmosphere at all is the sticky header, which is a translucent, blurred pane
of the page background — and even that resolves to a single hairline once the page scrolls.

Density is medium and calm. The measure is short (940px container; 72–78ch on prose), the
vertical rhythm is generous, and no section competes with the statement at the top. Two
typefaces do all the work: Geist for anything a person reads as language, Geist Mono for
anything a person reads as data — dates, stack strings, statuses, tags. The mono face is the
system's only "texture", and it earns its place by carrying meaning rather than by decorating.

Light is the default for everyone, in both themes' design and in the code. Dark is a deliberate
choice the reader makes and the page remembers; it is a faithful inversion of the same system,
not a second personality.

**Key Characteristics:**

- White ground, near-black ink, exactly one blue accent
- Hairline rules and space instead of cards, panels or shadows
- Two type roles only: Geist for language, Geist Mono for data
- Light by default, dark by explicit choice, no system-preference switching
- Statement-sized `h1`; every section heading demoted to a small grey label
- All icons inline SVG, 1.9 stroke, round caps and joins — no glyphs, no emoji, no icon font
- Sentence case everywhere; no uppercase tracking-out anywhere in the system

## Colors

A single cool-grey neutral ramp from white to near-black, one saturated blue that appears only
where the reader can act, and one green reserved exclusively for status.

### Primary

- **Signal Blue** (`{colors.accent}`): The only chromatic colour in the interface, and it is
  rationed. It appears on the emphasised clause inside the `h1`, on outbound project links, on
  the focus ring, and on text selection. It is never a fill behind a button, never a section
  background, never a border on a resting element. In dark it lightens to a soft periwinkle
  (`#7FA8FF`) so it stays readable against near-black rather than glowing.

### Secondary

- **Live Green** (`{colors.live}`): Status only. It colours the availability dot, the "Live" /
  "Published" markers on work rows, and the "replies within a day" dot. It never appears on
  type that is not reporting a state. In dark it brightens to `#3DD68C`.

### Neutral

The neutrals are one cool-grey family (hue ≈ 250), sampled at eight steps. There are no warm
greys in this system and no second neutral ramp.

- **Paper** (`{colors.bg}`): The page ground. In dark, near-black `#0B0B0C`.
- **Tint** (`{colors.bg-soft}`): The only fill in the system. It is a hover response — work
  rows, nav links, secondary buttons and the theme toggle tint on hover. Never a resting
  surface, never a card background.
- **Ink** (`{colors.ink}`): Body text, the `h1`, names, and the fill of the primary button.
- **Ink Secondary** (`{colors.ink-2}`): Emphasis inside otherwise-muted prose — the bolded
  fragments in experience bullets and the stack values.
- **Ink Hover** (`{colors.ink-hover}`): The primary button's hover fill; a lifted-off-black,
  not a shade of the accent.
- **Muted** (`{colors.muted}`): Supporting prose — project descriptions, experience bullets,
  roles, nav links at rest.
- **Faint** (`{colors.faint}`): Metadata — section labels, dates, tech strings, tags, captions,
  footer.
- **Rule** (`{colors.line}`): The structural hairline: section-label underline, the stuck
  header's edge, contact and footer separators, chip and control borders, scrollbar thumb.
- **Rule Soft** (`{colors.line-soft}`): The list hairline — between work rows, experience
  entries, stack rows and meta items. Lighter than `line` because it divides peers, not
  regions.

Each token carries a dark counterpart under `[data-theme="dark"]`; the mapping lives in
`.impeccable/design.json` under `extensions.colorMeta[*].darkValue`. The two sets are the only
two, and a new colour must be added to both or not at all.

### Named Rules

**The Rationed Accent Rule.** The blue is allowed four jobs: the emphasised clause in the `h1`,
outbound links, the focus ring, and selection. Anything else — a button fill, a badge, a
divider, a background wash, an active nav state — is not one of them. Audit test: hide the
`h1` and count the blue pixels below the fold; if there are more than the outbound link labels,
the rule is broken.

**The Ink-Not-Accent Rule.** The primary button is solid ink — near-black on white, near-white
on black. The inversion between themes is the point of the button; a coloured call-to-action
would make the accent ordinary and cost the page its only piece of chromatic emphasis.

**The Two-Set Rule.** Colour exists in exactly two token sets: `:root` (light, the default) and
`[data-theme="dark"]`. Light is what every visitor gets on first paint regardless of their OS
setting; there is deliberately no `prefers-color-scheme` switch for the page theme. Any new
colour is declared in both sets in the same commit, and `color-scheme` stays declared in both
so native scrollbars, form controls and the caret follow the page.

**The Status-Is-Not-Decoration Rule.** Green means a live state and nothing else. If a new
element is green without reporting a status, it is wrong.

## Typography

**Display Font:** Geist (with `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, `system-ui`,
`sans-serif`)
**Body Font:** Geist (the same family; there is no separate text face)
**Label/Mono Font:** Geist Mono (with `ui-monospace`, `monospace`)

**Character:** Geist is a neutral, slightly technical grotesque — it reads as software without
reading as a brand. Pairing it with its own monospace sibling gives the page two clearly
different voices that still share a skeleton: language in the proportional face, data in the
mono. Weights are held to 400, 500 and 600; nothing on the page is bold in the 700 sense, and
nothing is set in uppercase.

### Hierarchy

- **Display** (600, `clamp(1.95rem, 4.6vw, 3.05rem)`, 1.16, −0.028em): The `h1` only — the one
  sentence saying what he builds. Capped at `19ch` with `text-wrap: balance` so it always
  breaks into a deliberate three-or-four-line block rather than a ragged paragraph. One
  emphasised clause inside it carries the accent.
- **Headline** (600, `clamp(1.45rem, 3.4vw, 2rem)`, 1.24, −0.024em): The contact statement, and
  only that. Capped at `20ch`, also balanced. It is the page's second-largest type and it
  appears exactly once, at the end.
- **Title** (600, 19px, −0.015em): Project names in the work list. Company names sit one step
  down (18px, −0.012em) so the shipped systems outrank the employers.
- **Body** (400, 16.5px, 1.6): The document base. Set on `body`; inherited by the brand mark in
  the header.
- **Body Small** (400, 15.5px, 1.6): The workhorse — project descriptions (max `72ch`),
  experience bullets (max `78ch`, 1.62), roles, stack values, education and award titles.
- **UI** (500, 15px): Interactive labels — buttons, nav links — and the proof row. Numbers in
  the proof row are set 600 with `font-variant-numeric: tabular-nums` so the figures align as
  data.
- **Label** (600, 14px, +0.02em, sentence case): Section headings. Grey, small, underlined by a
  hairline. See the Quiet Heading Rule.
- **Mono** (400, 12.5px, +0.02em): Every technical string — tech stacks, stack-table keys,
  status text (12.5px), employment dates (13px), tags (12px). Line height opens to 1.75 on the
  long tech strings so a wrapped stack list stays scannable.

### Named Rules

**The Quiet Heading Rule.** `h2` is a label, not a heading. Section headings are 14px, weight
600, grey (`{colors.faint}`), sentence case, above a hairline — visually the smallest text on
the page apart from the mono strings. This is intentional and must not be "fixed": the `h1` is
the only thing allowed to be large, and demoting the section headings is what lets a reader
skim the page as one document instead of five stacked pages. Semantics stay correct — they are
real `h2` elements in document order — only their visual weight is suppressed.

**The Two-Voice Rule.** If a human reads it as a sentence, it is Geist. If a human reads it as
a value — a date, a version, a stack, a status, a key — it is Geist Mono. There is no third
face and no decorative use of the mono; mono never sets prose.

**The Sentence Case Rule.** Nothing in this system is uppercase and nothing is tracked out for
effect. The only positive letter-spacing in the build is +0.02em on labels and mono, which is
legibility at small sizes, not styling. There are no eyebrows and no kickers above headings.

**The Measure Rule.** Prose is capped in `ch`, not in pixels: 72ch for descriptions, 78ch for
bullets, 19–20ch for the two display statements. The 940px container is the outer bound, not
the measure.

## Layout

One column, one container, centred: `--maxw: 940px` with a 28px gutter, applied by a single
`.wrap` class that every section reuses. There is no grid system; local layouts are per-block
flex or two-column grids.

Vertical rhythm runs on a small set of steps rather than a strict scale: 4 / 8 / 10 / 18 / 24
for internal gaps, 34px between the hero's stacked blocks (statement → actions → proof), 44px
for column gaps and the education/awards block, 48px of section padding, and 96px above the
statement. The hero is the only place that gets the 96px step; it is what makes the first
sentence feel like the top of a document.

The sticky header is 62px tall and sits at `z-index: 50` over a translucent pane of the page
background (`color-mix(in srgb, var(--bg) 85%, transparent)`) with `backdrop-filter:
saturate(1.6) blur(10px)`. It carries no bottom border at rest; a `.stuck` class adds the
`{colors.line}` hairline once `scrollY > 4`. Sections carry `scroll-margin-top: 74px` so anchor
navigation clears the header.

Local layouts:

- **Work row:** a two-column grid (`1fr auto`) — name and tag on the left, status on the right,
  baseline-aligned — with description, tech string and link spanning both columns beneath.
  Horizontal padding is negative-margined (`padding: 24px 12px; margin: 0 -12px`) so the hover
  tint bleeds past the text without shifting the text.
- **Experience:** a baseline flex head with the date pushed right by `margin-left: auto`.
- **Stack:** a two-column `dl` (44px gutter), each row a `118px 1fr` grid of mono key and
  proportional value.
- **Education / awards:** two equal columns, 44px gutter.

Responsive behaviour — three breakpoints only, 760 / 640 / 460, all `max-width` queries:

- **760px** — the primary breakpoint. Hero padding drops 96→52px, section padding 48→38px, the
  stack `dl` and the education/awards grid collapse to one column, and the footer's
  right-aligned note joins the flow.
- **640px** — nav links disappear entirely, leaving the brand and the theme toggle, and the
  employment date drops to its own full-width line. Navigation is not replaced by a menu; the
  page is short enough to scroll.
- **460px** — stack rows go from key-beside-value to key-above-value.

Motion is functional and small: 0.16s on colour and background state changes, 0.2s on theme
and transform, 0.1s on the button's 1px active press, all on `cubic-bezier(.2, .7, .25, 1)`.
Two arrows translate on hover — 3px right on the primary button, 2px right and 2px up on an
outbound work link. `prefers-reduced-motion: reduce` collapses every transition and animation
to 0.001ms and disables smooth scrolling.

### Named Rules

**The One Container Rule.** Every section's content sits inside the same 940px `.wrap`. Nothing
is full-bleed, nothing is inset further, and there is no second container width. Alignment down
the left edge is the page's strongest structural signal.

**The Mobile-Sheds Rule.** Narrow viewports remove elements and stack them; they never
substitute a different pattern. There is no hamburger, no drawer, no mobile-only component.

## Elevation & Depth

**This system has no shadows.** There is not a single `box-shadow` in the build, and none may be
added. Depth is not simulated at all: the page is one flat plane, and the only thing that ever
sits above it is the sticky header, which declares itself by translucency and a hairline rather
than by a cast shadow.

Separation is achieved three ways, in this order of preference:

1. **Space.** The default. Most divisions on this page are made by whitespace alone.
2. **Hairline rules.** 1px, `{colors.line}` for structural divisions (section label underline,
   contact and footer edges, the stuck header) and `{colors.line-soft}` for peer divisions
   inside a list. Last-child borders are always removed so no list ends on a rule.
3. **Tonal tint.** `{colors.bg-soft}` as a hover response only. Hover is a tint, never a lift.

The header's `backdrop-filter: saturate(1.6) blur(10px)` over an 85% page-background pane is the
one atmospheric effect in the system, and it exists to keep text readable while scrolling
underneath, not to suggest a material.

### Named Rules

**The No-Shadow Rule.** Zero shadows, zero elevation, zero simulated light source. If a new
element needs to feel separated, it gets space first, a hairline second, and a tint third.
There is no fourth option.

**The Hairline-Not-Card Rule.** There are no cards. A group of related items is a list divided
by `{colors.line-soft}`, not a set of bordered or filled boxes. A design that reaches for a
card here has failed to use the hairline.

## Shapes

Rectangles with small, element-keyed radii. Nothing in the system is a circle except status
dots, and nothing is sharply square except the page itself.

Radii are chosen per element rather than from an abstract scale, and they ascend gently with
the size of the thing they round: 4px on the focus ring, 7px on a nav link, 8px on the 34px
icon control and the scrollbar thumb, 9px on a button, 10px on a work row. The one outlier is
deliberate: the tech tag is a 20px pill, which at 12px mono type reads as fully rounded and is
the only shape in the system that announces itself. Status dots are 6–7px circles.

Borders are always exactly 1px and always a token colour. There are no double borders, no
inner strokes, no rings other than the focus ring, and no dashed or dotted lines anywhere.

The identity mark (`favicon.svg`) follows the same language: a 32px square with a 7px radius
filled with the accent, carrying a white "S" monogram drawn as a 2.9-weight stroke with round
caps and joins — the same drawing rules as the interface icons, scaled up.

### Named Rules

**The Element-Keyed Radius Rule.** Radius follows the element, not a `sm/md/lg` scale: controls
8–9px, rows 10px, tags fully rounded, dots circular. When adding a component, match the radius
of the existing element closest to it in size rather than inventing a new step.

**The One-Pixel Rule.** Every border in the system is 1px. Weight is expressed by which token
the border uses (`line` vs `line-soft`), never by thickening the stroke.

## Components

### Buttons

Two variants, and the difference between them is the whole hierarchy of the page.

- **Shape:** Softly rounded rectangle (9px), 1px border, `11px 18px` padding, 15px/500 label,
  8px gap to an optional trailing icon.
- **Primary:** Solid ink fill (`{colors.ink}`) with page-background text — near-black on white
  in light, near-white on near-black in dark. The border matches the fill. It appears exactly
  twice on the page: "See the work" in the hero and the email address in contact.
- **Secondary:** Page background, ink text, `{colors.line}` border. Used for every other
  action — "Get in touch", WhatsApp, résumé, GitHub, LinkedIn.
- **Hover / Focus:** Primary darkens to `{colors.ink-hover}` and translates its trailing arrow
  3px right. Secondary fills with `{colors.bg-soft}` and its border steps up to
  `{colors.faint}`. Both press down 1px on `:active`. Focus is the global 2px accent ring at
  3px offset.
- **Never:** a button is never filled with the accent, never shadowed, never uppercase, and
  never larger than 15px type.

### Chips

- **Style:** The tech tag is an outline pill — transparent fill, 1px `{colors.line}` border,
  20px radius, `2px 9px` padding, 12px Geist Mono in `{colors.faint}`, no wrapping.
- **State:** Static. Tags are classification, not controls; they have no hover, selected or
  filter state, and adding one would make them read as interactive when they are not.

### Cards / Containers

**There are none.** This is a positive specification, not an omission. Grouped content is a
list of rows separated by `{colors.line-soft}` hairlines, with the final row's border removed.
Rows have padding and a radius so they can accept a hover tint, but no background, no border
box and no shadow at rest.

### Navigation

- **Style:** Four sentence-case anchor links, 15px, `{colors.muted}`, `7px 11px` padding, 7px
  radius, sitting to the right of the brand mark in a 62px sticky bar.
- **Hover:** Text goes to `{colors.ink}` over a `{colors.bg-soft}` tint.
- **Active:** There is no active/current-section state. The page is one document; highlighting
  a section would imply page navigation.
- **Mobile:** Below 640px the links are removed outright, leaving the brand and the theme
  toggle. No menu replaces them.

### Theme Toggle

A 34px square icon button with a 1px `{colors.line}` border and 8px radius, holding a 16px
sun or moon glyph drawn as inline SVG. The sun shows in light, the moon in dark, swapped by CSS
under `[data-theme="dark"]` rather than by JavaScript. Its `aria-label` is rewritten on toggle
to name the destination theme ("Switch to dark theme" / "Switch to light theme"). The choice is
written to `localStorage.theme` and re-applied by a blocking inline script in `<head>` before
first paint, so a returning dark-mode reader never sees a white flash. Light remains the
default for anyone with nothing stored.

### Work Row (signature)

The page's one distinctive pattern, and the thing the design exists to serve. A single row
carries: project name (19px/600), a classification pill, a right-aligned mono status with a
coloured dot (green "Live"/"Published", faint "Source private"), a muted description capped at
72ch, a mono tech string, and — when the project is public — an accent link label with a
diagonal arrow. The whole row is one `<a>` when there is somewhere to go and a `<div>` when
there is not, so a private project offers no dead click target. Hover tints the entire row with
`{colors.bg-soft}` and nudges the diagonal arrow up and to the right.

### Icons

All icons are inline SVG on a 16 or 24 viewBox, `fill="none"`, `stroke="currentColor"`,
`stroke-width="1.9"`, with round caps and joins, sized 13–16px in context and marked
`aria-hidden="true"`. There are no icon fonts, no `<img>` icons, no emoji and no glyph
arrows (`→`, `↗`) anywhere in the system — an arrow is always drawn.

### Browser Surfaces

The page themes the browser's own chrome so the document does not end at its own edges:
`::selection` uses the accent behind `{colors.sel-ink}`, which inverts per theme so selected text stays readable in dark; the scrollbar is 12px with a transparent track and a
`{colors.line}` thumb carrying a 3px border in the page background so it reads inset, going to
`{colors.faint}` on hover; `scrollbar-color` and `scrollbar-width: thin` cover Firefox; and
`color-scheme` is set in both token sets so form controls, the caret and native UI follow the
theme. Focus is a single global rule: 2px solid accent, 3px offset, 4px radius, on
`:focus-visible` only.

## Do's and Don'ts

### Do:

- **Do** ship light by default. `:root` is light; `[data-theme="dark"]` is the override; a new
  colour is declared in both sets in the same change, `color-scheme` included.
- **Do** keep the accent to its four jobs: the `h1`'s emphasised clause, outbound links, the
  focus ring, selection.
- **Do** fill the primary button with ink and let it invert between themes.
- **Do** separate content with space first, a 1px hairline second, a `{colors.bg-soft}` tint
  third.
- **Do** set data — dates, statuses, stacks, keys, tags — in Geist Mono, and language in Geist.
- **Do** keep section headings small, grey and sentence case; the `h1` is the only large type
  above the contact statement.
- **Do** draw every icon as inline SVG at `stroke-width="1.9"` with round caps and joins.
- **Do** cap prose in `ch` (72ch descriptions, 78ch bullets) inside the single 940px container.
- **Do** make a whole row the link when the row has a destination, and a plain container when
  it does not.
- **Do** honour `prefers-reduced-motion` on anything new that moves.

### Don't:

- **Don't** add a `box-shadow`. There are zero in the build and the system has no elevation
  model to extend.
- **Don't** build a card. Grouped content is a hairline-divided list.
- **Don't** use the accent as a background fill, a badge, a border on a resting element, or a
  button colour.
- **Don't** switch the theme on `prefers-color-scheme`. Light is the default for everyone; the
  reader's explicit toggle is the only input.
- **Don't** enlarge, embolden or re-case the section `h2`s to look like headings — the quiet
  label is the design.
- **Don't** introduce a third typeface, a 700 weight, uppercase text, or letter-spacing beyond
  the +0.02em legibility nudge on labels and mono.
- **Don't** use a glyph arrow, an emoji, an icon font, or a raster icon.
- **Don't** reintroduce metaphor: no dials, gauges, panels, bezels, textures, gradients, or
  simulated materials of any kind.
- **Don't** add a second container width or a full-bleed section.
- **Don't** replace removed mobile elements with a different pattern (menus, drawers,
  carousels); narrow viewports shed and stack.

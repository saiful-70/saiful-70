---
name: Saiful Islam — The Panel
description: A software engineer read the way a pilot reads an instrument panel — six instruments that agree with each other, in daylight by default and unlit at night.
colors:
  panel: "#DBDBD5"
  box: "#FFFFFF"
  well: "#EFEFEB"
  plate: "#FFFFFF"
  plate-floor: "#F3F3EF"
  bezel: "#BEC3C8"
  edge: "#8B9198"
  chamfer: "rgba(255,255,255,.92)"
  hair: "rgba(20,24,28,.14)"
  lum: "#14171A"
  lum-sub: "#343B40"
  dim: "#495157"
  faint: "#545C61"
  sub-ink: "#545C61"
  green: "#0B6B37"
  green-ink: "#0A5C2F"
  amber: "#97590A"
  amber-ink: "#6E4000"
  red-reserved: "#B3261E"
  selection-ink: "#FFFFFF"
typography:
  display:
    fontFamily: "Archivo, Archivo Narrow, system-ui, sans-serif"
    fontSize: "clamp(3.6rem, 9.2vw, 6.6rem)"
    fontVariation: "'wdth' 84, 'wght' 800"
    lineHeight: 0.88
    letterSpacing: "-.035em"
  statement:
    fontFamily: "Archivo, Archivo Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 7vw, 5rem)"
    fontVariation: "'wdth' 84, 'wght' 800"
    lineHeight: 0.94
    letterSpacing: "-.032em"
  headline:
    fontFamily: "Archivo, Archivo Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.85rem, 4.2vw, 2.9rem)"
    fontVariation: "'wdth' 86, 'wght' 700"
    lineHeight: 1.02
    letterSpacing: "-.022em"
  title:
    fontFamily: "Archivo, Archivo Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.72rem)"
    fontVariation: "'wdth' 88, 'wght' 700"
    lineHeight: 1
    letterSpacing: "-.018em"
  operator:
    fontFamily: "Archivo, Archivo Narrow, system-ui, sans-serif"
    fontSize: "21px"
    fontVariation: "'wdth' 92, 'wght' 700"
    lineHeight: 1.2
    letterSpacing: "-.012em"
  lede:
    fontFamily: "Archivo, Archivo Narrow, system-ui, sans-serif"
    fontSize: "17.5px"
    fontWeight: 400
    lineHeight: 1.62
  body:
    fontFamily: "Archivo, Archivo Narrow, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  mono-list:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.55
  readout:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    letterSpacing: ".03em"
    fontFeature: "'tnum' 1"
  placard:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    letterSpacing: ".13em"
  svg-label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "7.6px"
    fontWeight: 400
    letterSpacing: ".03em"
rounded:
  xs: "2px"
  sm: "3px"
  md: "4px"
  lg: "5px"
  thumb: "6px"
  full: "50%"
spacing:
  hair: "4px"
  xs: "6px"
  sm: "9px"
  md: "12px"
  lg: "18px"
  xl: "22px"
  gutter: "28px"
  section: "86px"
  section-compact: "60px"
components:
  button:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.dim}"
    typography: "{typography.readout}"
    rounded: "{rounded.xs}"
    padding: "14px 21px"
  button-hover:
    textColor: "{colors.lum}"
  button-engage:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.green}"
    typography: "{typography.readout}"
    rounded: "{rounded.xs}"
    padding: "14px 21px"
  button-engage-hover:
    textColor: "{colors.green}"
  placard:
    backgroundColor: "{colors.face}"
    textColor: "{colors.dim}"
    typography: "{typography.placard}"
    rounded: "{rounded.xs}"
    padding: "5px 10px 4px"
  nav-link:
    textColor: "{colors.dim}"
    typography: "{typography.readout}"
    rounded: "{rounded.xs}"
    padding: "8px 12px"
  module:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.dim}"
    rounded: "{rounded.md}"
    padding: "22px 22px 20px"
  panel:
    backgroundColor: "{colors.face}"
    textColor: "{colors.lum}"
    rounded: "{rounded.lg}"
    padding: "26px 24px 20px"
  spec-chip:
    backgroundColor: "rgba(0,0,0,.34)"
    textColor: "{colors.dim}"
    typography: "{typography.placard}"
    rounded: "{rounded.xs}"
    padding: "5px 9px 4px"
---

# Design System: Saiful Islam — The Panel

## Overview

**Creative North Star: "The Panel"**

A software engineer read the way a pilot reads an instrument panel: six instruments that agree
with each other. The surface is a machined bay — a plate under a fine tooth of noise, bezels
catching a single upper-left light, and engraved placards naming everything. Nothing is decorated;
everything is labelled. The information itself is the ornament, and the ornament is legible at a
glance.

The aviation costume this world grew out of has been retired: the six enamel dials, the corner
screws, the cross-check ritual and the ALT/IAS/HDG codes read as re-enactment rather than
credential, especially in daylight. What replaced them is the thing they were standing in for —
a drawing of the actual stack, and the numbers in a strip beneath it. The discipline stayed; the
dress-up went.

The panel ships in **two lighting conditions**, and the default is **day**: white enamel
instrument faces set into a light alloy deck, graphite ink, brushed-steel bezels. **Night** is
the same panel unlit — matte black, radium green, emissive. A visitor lands in day whatever
their OS is set to, and a two-position switch on the header rail moves them to night; the
choice is remembered in `localStorage` and re-applied before first paint. See **Lighting**
below. Every colour in the sheet is a semantic token defined once per condition — no literal
colour appears in a rule.

The system is built on one hard discipline: **light means something.** The primary ink is
information. Radium green is live data and anything you can press — nothing else. Caution amber
marks a limit, and it appears in exactly four places on the whole page. Warning red is defined
in the palette and deliberately never lit, because a panel that shows red when nothing is wrong
is a panel nobody trusts. Every plate in the bay is a satin gradient with a 1px lit top edge and
a shaded floor, so depth is read from the rake of the light rather than from a decorative halo.

This world explicitly refuses the arrangement it replaces: the portfolio with one accent
colour sprinkled through headings, borders, hover states and decorative glows. Here the accent
is a signal with a job. The build is one hand-authored static file with all CSS and JS inline
and no build step — the constraint is part of the craft, and the surface should read as
deliberate engineering rather than as a limitation.

**Key Characteristics:**

- Two lighting conditions from one set of tokens; day is the default, night is a switch away
- A 3px radial-dot tooth over the entire page: lit facet plus shaded facet, per condition
- Satin plates: every raised surface is a top-to-bottom gradient with a lit top edge
- Two voices only — Archivo at condensed widths for lettering, Azeret Mono for every readout
- Radium green reserved for live data and pressable elements; amber for limits; red never lit
- Tight corners (2px controls, 4px modules, 5px panel); circles only for lamps and the engage ring
- One authored motion moment: the architecture diagram's signal path drawing itself in
- Evidence over ornament: the hero shows the system, the strip below it shows the numbers

## Colors

One ink on one ground, with one live-signal green and one caution amber, both rationed hard
enough that their appearance is itself information. The frontmatter records the **day** values,
which are the default; the night values are listed in **Lighting** below. Both conditions carry
the same semantics — only the physics change.

### Primary

- **Live Signal** (`{colors.green}`): The live-data colour. It appears on the diagram's signal
  path and its endpoint count, live-status lamps, the Dhaka clock, the experience table's period
  column, the engage ring and every pressable path into contact. It is never used for a heading, a border, a
  divider or a decorative wash. Wherever it appears, it is either a number the panel is reporting
  or something the visitor can press.
- **Green Ink** (`{colors.green-ink}`): The dimmer working green, used where radium would shout:
  the checkmark glyphs in the stack columns, the signal path in every architecture diagram —
  the hero's and the project cards' — and the scroll-hint chevron. It reads as green without
  claiming to be lit.

### Secondary

- **Caution Amber** (`{colors.amber}` for graphics, `{colors.amber-ink}` for text): Limits only.
  It appears in exactly two places on the page — the row-level-security boundary annotation in the
  CampusQ schematic, and the restricted Rent-ERP module with its amber lamp and source note. Both
  are boundaries. Amber never marks emphasis. The colour splits by role because 12.5px caution text
  needs 4.5:1 on a near-white plate while a dashed boundary needs only 3:1.

### Tertiary

- **Warning Red** (`{colors.red-reserved}`): Defined in the palette and deliberately unlit. It
  exists so the panel has a top-severity colour in reserve; nothing on the current surface has
  earned it. Keep the declaration, keep it dark.

### Neutral

- **Deck** (`{colors.panel}`): The matte ground behind everything, including the browser
  theme colour and the scrollbar track. It never appears as a raised surface.
- **Box** (`{colors.box}`) and **Well** (`{colors.well}`): The two planes a diagram is built from.
  A box is a discrete component — a client surface, a data store — and takes the brighter fill. A
  well is a layer that spans the diagram — the client layer, the API — and sits one step recessed,
  so the reader sees components sitting inside layers without a single label saying so. Both are
  real custom properties (`--sc-box`, `--well-hi`) and both flip with the lighting condition.
- **Plate** (`{colors.plate}`) → **Plate Floor** (`{colors.plate-floor}`): The two ends of the
  satin gradient every raised module runs between. Plate is the lit top, plate floor the shadowed
  bottom. Both are written literally in gradient stops for the same reason.
- **Bezel** (`{colors.bezel}`): The default border on every machined component — modules, the
  experience table, stack columns, placards, buttons, scrollbar thumb.
- **Edge** (`{colors.edge}`): The lifted bezel. Borders move from bezel to edge on hover; nothing
  else uses it.
- **Chamfer** (`{colors.chamfer}`): The lit top edge of the instrument panel's own border. The
  panel is bordered in pure black on three sides and in chamfer white across the top, so the
  bay's upper edge catches the raking light as a machined bevel would. It is the border-level
  counterpart to the inset top highlight and belongs to the Rake Rule, not to the palette's
  greys. Used on the panel only.
- **Hairline** (`{colors.hair}`): Internal division inside a plate — row separators, section-head
  rules, the data strip's grid lines, the diagram caption's top rule. Never used as an outer border.
- **Primary Ink** (`{colors.lum}`): Information. Headings, company names, diagram node titles,
  data-strip values, body emphasis.
- **Recessed Ink** (`{colors.lum-sub}`): The second line of the display name — ink that has
  stepped back one plane so the surname reads as a continuation rather than a repeat.
- **Dim** (`{colors.dim}`): Running prose, list text, placard lettering, inactive nav.
- **Faint** (`{colors.faint}`): Metadata that should be findable but not read — column headers,
  counts, the footer plate, data-strip keys.
- **Sub Ink** (`{colors.sub-ink}`): The second tier of diagram lettering — the mono sub-line under
  every node title, the annotation keys on a signal path, the recessed labels inside the project
  schematics. It is deliberately a step back from the primary ink so a node reads title-first, and
  it is calibrated against the box fill rather than against the deck. Diagram lettering keeps its
  own small ladder: title in primary ink, sub-line in `--sc-t`, annotation key in this token,
  annotation key in this token. The signal colour is not used for diagram lettering at all — it
  belongs to the path itself.
- **Selection Ink** (`{colors.selection-ink}`): The foreground of a text selection, sitting on a
  live-signal selection background — white in daylight, a near-black green at night — so
  highlighted text reads as a lit strip of the instrument rather than as the browser's default blue
  rectangle. Palette-derived and used in exactly one place.

### Named Rules

**The Signal Reserve Rule.** Green is live data and pressable elements, and nothing else. If a
green element neither reports a current value nor responds to a press, the green is wrong.

**The Two Cautions Rule.** Amber marks a limit. It is currently spent on two: the RLS-boundary
annotation and the restricted module. Adding a third requires taking one away or proving the new
one is also a limit.

**The Dark Warning Rule.** Red is declared and never rendered. A panel that lights red for
emphasis has no way left to say something is actually wrong.

## Lighting

The panel has two lighting conditions. They are not a palette inversion: an emissive halo on
white enamel reads as a smudge, so **every glow in night becomes a cast shadow or a chamfer in
day**, and the depth model changes with it.

| Slot | Day (default) | Night |
| --- | --- | --- |
| Deck ground | `#DBDBD5` alloy | `#0B0D0F` matte black |
| Panel plate | `#F4F4F0` → `#E0E0DA` (lit above the deck) | `#17191C` → `#0C0E10` |
| Card plate | `#FFFFFF` → `#F3F3EF` | `#131618` → `#0A0C0D` |
| Instrument face | `#FFFFFF` → `#EBEBE6` enamel | `#16191D` → `#060708` |
| Bezel / edge | `#BEC3C8` / `#8B9198` brushed steel | `#2A2D31` / `#383C41` satin |
| Primary ink | `#14171A` graphite | `#F2F5F5` luminous white |
| Live signal | `#0B6B37` ink green (6.6:1 on enamel) | `#7CFF9E` radium |
| Caution | `#97590A` graphic, `#6E4000` text | `#FFB000` |
| Depth | cast shadow + white chamfer | inset chamfer + black floor |
| Lamps | 1px rim + 2px coloured shadow | 9px coloured glow |
| Diagram box / well | `#FFFFFF` / `#EFEFEB` | `#101315` / `#0C0F10` |
| Signal path | `#0A5C2F` ink green | `#4FD27A` |

**Value ladder (day).** Deck darkest, panel plate lit above it, card plates near-white,
instrument faces the whitest thing on the page. Reading a card as *in front of* the deck depends
on this order; flattening it was the first defect the day build had to fix.

**Rules that hold in both.** Signal Reserve, Two Cautions and Dark Warning (below) are
lighting-independent. Caution is the one slot that splits: `amber` for arcs, pointers and lamps
where 3:1 suffices, `amber-ink` for the two places caution appears as 12.5px text.

**Mechanics.** `:root` carries day, `:root[data-theme="dark"]` carries night, and both set
`color-scheme` so browser surfaces — scrollbars, caret, form chrome — follow. The project cards'
inline SVG diagrams take every fill and stroke from tokens, so one drawing serves both
conditions. A pre-paint inline script reads `localStorage` before the
first frame, so night visitors never see a white flash. `theme-color` is updated with the
switch so the mobile browser chrome matches.

## Typography

**Display Font:** Archivo (variable, `wdth` 75–112 / `wght` 400–800), with Archivo Narrow and
system-ui as fallback
**Body Font:** Archivo at `wdth` 100
**Label/Mono Font:** Azeret Mono (400 / 500 / 700), with ui-monospace and SFMono-Regular

**Character:** Two voices, strictly divided. Archivo is the instrument lettering — silkscreened
on the panel, condensing as it grows so a six-character name can span the bay without breaking.
Azeret Mono is the machine's own hand: every readout, placard, table cell, control label, chip
and timestamp. Ligatures are off page-wide and numerals are tabular everywhere a value can
change, so nothing shifts when a digit does.

### Hierarchy

- **Display** (`wdth` 84 / `wght` 800, `clamp(3.6rem, 9.2vw, 6.6rem)`, line-height .88, uppercase):
  The operator name at signage scale, split across two lines with the second line recessed. One
  per page.
- **Statement** (`wdth` 84 / `wght` 800, `clamp(2.4rem, 7vw, 5rem)`, line-height .94, uppercase,
  balanced): The closing display line in the contact section, marked up as an `<h2 class="big">`.
  It shares the display voice at a step down from the operator name, so the page opens and closes
  in the same lettering without the closer competing with the name. One per page. Emphasis is
  carried by luminance, not hue: the first clause sits at muted, the second resolves to luminous
  white. It must not carry the signal colour — it is neither a reading nor a press target, and the section's
  one green pressable sits directly beneath it.
- **Headline** (`wdth` 86 / `wght` 700, `clamp(1.85rem, 4.2vw, 2.9rem)`, line-height 1.02,
  uppercase, balanced): Section heads.
- **Title** (`wdth` 88 / `wght` 700, `clamp(1.3rem, 2.4vw, 1.72rem)`, line-height 1, uppercase):
  Module names in the work grid.
- **Company** (`wdth` 92 / `wght` 700, 21px, line-height 1.2): The employer name in the experience
  table — the one mid-scale display tier, sitting between title and body.
- **Lede** (17.5px, line-height 1.62, max 50ch): The one paragraph above the fold. Emphasis inside
  it is bold in the primary ink; a single phrase carries the signal colour.
- **Body** (15px, line-height 1.55; 1.7 in module copy, 1.68 in table detail; max 74ch / 82ch):
  Running prose in dim, with bold emphasis stepping up to luminous white.
- **Readout** (Azeret Mono, 12.5px, tabular): Nav links, buttons, status rows, counts, footer
  plate, table periods and stacks, module call-to-action lines.
- **Diagram sub-line** (Azeret Mono, 11px, line-height 1.5): The mono line under every node title
  in the hero diagram. It is a DOM tier, not an SVG one — that is the whole point of the component:
  it wraps, reflows and keeps its size at every width instead of scaling with a viewBox.
- **Placard** (Azeret Mono 500, 11px, `.13em` tracking, uppercase): Every engraved label — the
  role plate, the diagram caption's tag, module category tags, data-strip keys, table column heads,
  stack-column headers. Card headers push tracking to `.15em` at weight 700.
- **Mono list** (`{typography.mono-list}` — Azeret Mono, 13.5px, line-height 1.55): Stack-column
  items only. The one place a list of technologies is set in the machine's own hand rather than in
  prose. It is a real tier, not a rounding error between readout and body: the stack runs five
  narrow columns, and merging these items up to body's 15px wraps roughly half the entries onto a
  second line. Hold 13.5px.
- **SVG label** (`{typography.svg-label}` — Azeret Mono, 7.6px, `.03em`): Lettering drawn inside a
  viewBox — the project cards' schematic box and annotation labels. This
  is not a DOM tier. The number is expressed in SVG user units and scales with the diagram's
  container, so its rendered size tracks the frame rather than the root font size; at the sizes the
  schematics actually render it lands near the placard tier. Do not "correct" it to 11px — that
  would print the labels at roughly one and a half times their intended size and break the
  diagrams' line-to-lettering ratio.

### Named Rules

**The Two-Voice Rule.** Archivo letters the panel; Azeret Mono reports from it. If it is a value,
a label, a column header, a chip or a control, it is mono. If it is a heading or a sentence, it
is Archivo. There is no third face and no in-between case.

**The Width-Axis Rule.** Display type narrows as it grows. The `wdth` axis is driven per tier —
84 at signage scale, 86 on section heads, 88 on module titles, 92 on the company name, 94 on
certification entries, 96 on diagram node titles, 100 on body. Never scale display type without setting
its width.

**The Clamped Display Rule.** Every tier above title is fluid, and the ramp is defined by its
endpoints, not by a single number: display `clamp(3.6rem, 9.2vw, 6.6rem)`, statement
`clamp(2.4rem, 7vw, 5rem)`, headline `clamp(1.85rem, 4.2vw, 2.9rem)`. Below title the ramp is
fixed and deliberately dense — 21 / 17.5 / 15 / 13.5 / 12.5 / 11 px — because every step in that
range is an instrument tier with a job, not a decorative size. Read together, the page runs from
6.6rem down to 11px: about 9.6:1 top to bottom. Static scanners that cannot evaluate `clamp()`
sample only the fixed tail and report the scale as flat (~1.7:1); that reading is an artefact of
the tool, and `flat-type-hierarchy` is registered as a scoped exception for `index.html` in
`.impeccable/config.json` for exactly this reason. Set a new display tier by writing its full
clamp, never by naming a single px value.

## Layout

A single centred column, `max-width` 1200px with a 28px gutter, over a fixed full-viewport noise
layer at `z-index` 0 with all content at `z-index` 1.

The first viewport is a two-column deck: `44fr` of name, role placard, lede, two actions and a
status row on the left; `56fr` of machined panel on the right, with a 56px gap, **top-aligned**. The panel holds the architecture diagram — three surface boxes, a fan of signal lines,
two full-width layer bands, an annotated contract line, three store boxes and a dashed authoring
lane — over a caption separated by a hairline. Below the deck sits the data strip: a three-across
grid of six key/value cells carrying the page's headline claims.

Sections run at 86px of vertical padding (60px below 760px), each opening with a baseline-aligned
head: the section title on the left, a mono count pushed to the right margin, a hairline
underneath, 38px of clearance below it.

The work grid is a six-column track where modules claim `span 6` (wide) or `span 3` (half),
collapsing to a single column at 900px. The stack is five equal columns, dropping to two at 1000px
and one at 560px. Certification is a straight two-up.

**Responsive behaviour, as built:** the hero diagram goes three-across to one-column at 640px and
its fan collapses to a single line; nav links other than Contact are hidden below 880px and the
clock takes their place, then disappears itself below 520px; the nameplate drops its word at 560px
so the panel-light switch keeps its label; the experience table's four-column row folds into a
stacked block with the chevron pinned right at 820px, and its expanded detail hangs under the
Company column (166px inset) only above that breakpoint; the project schematics become
horizontally scrollable at 760px with a 38px edge-fade mask and a "Pan the diagram" hint beneath
them; the data strip goes 3-up to 2-up at 1000px and one column at 560px.

### Named Rules

**The Top-Aligned Hero Rule.** The two hero columns start at the top, never centred against each
other. The panel runs 200–260px taller than the text column, so centring pushed the name 120–140px
down the viewport and put the largest empty area on the page directly above the most important
words on it. Whitespace below a short column is unremarkable; whitespace above a headline is a
defect. The text column carries a 10px optical nudge so the display cap-height sits level with the
panel's top edge rather than its box being mathematically flush, and that nudge is dropped when the
grid collapses to one column.

**The Bleed Rule.** At 1041px and up the hero panel runs off the right edge of the viewport
— negative right margin equal to the frame's own gutter, right border removed, right corners
squared. The bay continues past the window rather than sitting politely inside a margin. Below
that width it returns to the column.

**The No-Gate Rule.** No reading is available only on hover, at any width. The hero diagram is
real text in a real layout — nothing in it is revealed by pointer, and nothing in it depends on a
viewBox scaling down far enough to become illegible.

**The Reflow Rule.** Information drawn as a diagram must reflow, not scale. The hero's diagram was
first built as a 620-unit SVG; at 390px it rendered its labels at 4.8px. Anything load-bearing
above the fold is DOM boxes and CSS lines, so type keeps its size and lines redraw themselves. A
fixed viewBox is allowed only for the project cards' schematics, which are secondary and pannable.

## Elevation & Depth

There are no ambient drop shadows in this system. Depth comes from a single raking light source
in the upper left and from the material behaviour of machined metal: every raised plate carries a
1px chamfer along its top edge, a shaded bottom edge, and a top-to-bottom satin
gradient between them. Shadows exist only as tight, high-offset, negative-spread casts that read
as a plate sitting proud of the panel — never as a soft halo. The one recessed device in the
system is the spec chip, which inverts the rule with an inner black shadow and a light bottom
edge so it reads as stamped into the plate rather than sitting on it.

The instrument panel is the deepest object: a three-stop gradient, a pure-black 1px border whose
top side is overridden to chamfer white (`{colors.chamfer}`), four inset edges (lit top, lit left,
black bottom), and a two-layer overlay that rakes light across the plate from upper-left at 116
degrees. The chamfer border and the inset top highlight
are two different devices doing one job: the border is the bevel's own lit face, the inset is the
light landing on the plate just inside it. Together they read as a milled edge rather than a
stroke.

### Shadow Vocabulary

- **Top highlight** (`box-shadow: inset 0 1px 0 rgba(255,255,255,.045)`): The universal lit edge.
  Every plate, card, placard, button and status strip carries it. The panel uses `.11`, controls
  and headers `.05`.
- **Plate lift** (`box-shadow: 0 6px 12px -8px rgba(0,0,0,.9)`): Work modules sitting on the panel.
- **Panel lift** (`box-shadow: 0 10px 14px -10px rgba(0,0,0,.95)`): The hero panel itself.
- **Control** (`box-shadow: inset 0 1px 0 rgba(255,255,255,.05), 0 2px 5px rgba(0,0,0,.55)`):
  Buttons.
- **Header rail** (`box-shadow: 0 1px 0 rgba(255,255,255,.05) inset, 0 10px 22px -14px rgba(0,0,0,.9)`):
  The sticky header at rest; it deepens to `0 16px 30px -12px rgba(0,0,0,1)` once the page scrolls
  past 8px.
- **Engraved** (`box-shadow: inset 0 1px 2px rgba(0,0,0,.8), 0 1px 0 rgba(255,255,255,.05)`):
  Spec chips. The only sunken surface in the system.
- **Lamp glow** (night: `box-shadow: 0 0 0 1px rgba(0,0,0,.6), 0 0 9px rgba(124,255,158,.75)`): The
  emissive indicator, and the world's one legitimate glow — it is a light source, not a decoration.
  Amber uses the same geometry. In daylight the same lamp takes a 1px rim and a 2px coloured cast
  shadow instead, because a halo on a near-white plate reads as a smudge.
- **Knob** (`background: linear-gradient(180deg, metal-1, metal-2 62%, metal-3)` with
  `0 1px 1px shade-3` and `inset 0 1px 0 metal-hi`): The panel-light switch's slider, and the only
  piece of machined hardware left in the system. It is a control, so it is allowed to look like one.

### Named Rules

**The Rake Rule.** One light, upper left. Every raised surface takes a lit top edge and a dark
bottom edge; nothing is lit from below and nothing casts a soft halo. On the panel the lit top
edge is carried by the border itself (`border-top-color: {colors.chamfer}` over an otherwise
black border), because the bay is the one object thick enough to show its own chamfer.

**The Satin Plate Rule.** No raised surface is a flat fill. Every plate runs a top-to-bottom
gradient from a lit top stop to a shaded floor. A flat single-colour `background` on a module is a
defect, not a simplification.

## Shapes

Corners are tight and graded by mass: 2px on anything hand-sized (buttons, nav links, placards,
nameplate, spec chips, diagram nodes and bands), 3px on the schematic frame, 4px on modules, the
experience table, stack columns, certification blocks and the data strip, 5px on the hero panel.
Nothing on the page itself exceeds 5px, and nothing is fully rounded except things that are
physically round: lamps and the engage ring.

One radius sits off that scale on purpose: the scrollbar thumb (`{rounded.thumb}`). It is drawn
in an 11px gutter behind a 3px panel-coloured inset, so only about 5px of thumb is visible, and
6px rounds that sliver into a clean rail instead of a rectangle with visible corner artefacts. It
is browser chrome rather than a machined plate, and it answers to the operating system's scale,
not the panel's. Nothing on the page may borrow it.

Every machined surface is a 1px bezel-coloured border. Interior divisions are hairlines; exterior
borders are bezel. Borders move to edge grey on hover — colour never carries hover state on a
neutral surface.

The system's defining silhouette is now the diagram: 1px bezel-bordered boxes on the box fill,
full-width bands one plane recessed, 1px green-ink lines for the signal path, and a dashed border
wherever something is a lane rather than a component. Nothing in it is drawn with a gradient — a
diagram is a drawing, not a machined surface, and the plate it sits on already carries the light.

The project cards' schematics use the same line language inside a fixed viewBox: 1px stroked boxes,
green-ink strokes for the active data path, amber dashed rectangles for boundaries, and lettering
at the SVG label tier (`{typography.svg-label}`).

### Named Rules

**The Tight Corner Rule.** 2px for controls, 4px for modules, 5px for the panel, 50% only for
things that are actually round. There is no pill, no capsule and no large radius anywhere in this
world. The single documented exception is the 6px scrollbar thumb, which is not a surface of this
world at all.

## Components

### Buttons

- **Shape:** Squared-off with a 2px break on the corner (`{rounded.xs}`), 1px bezel border, satin
  gradient face, 14px/21px padding, mono 12.5px at weight 500, 10px gap to any leading element.
- **Neutral:** Dim text on plate. Hover raises text to the primary ink and the border from bezel to
  edge. Active depresses 1px. This is the default for every secondary action — WhatsApp, resume,
  GitHub, LinkedIn, "Get in touch".
- **Engage:** The only green pressable. Signal-coloured text, a signal-tinted border, and an 11px
  hollow ring in current colour. On hover the face fills with a green wash, the border goes solid,
  and the ring fills and takes its lit treatment — an indicator coming on, not a colour
  swap. Two exist on the page: "See the work" in the deck and the email address in the contact
  section, plus the header's compact variant.
- **Focus:** Global — a 2px signal-coloured outline at 3px offset with a 2px radius. Applied on
  `:focus-visible` only.

### Placard

The world's label primitive and its most reused device. An engraved plate: mono 11px at `.13em`
uppercase in dim, a plate-to-plate-floor gradient, 1px bezel border, 2px radius, an inset lit top
edge and a shaded bottom edge, `white-space: nowrap`. It names the role under the display name,
tags the hero diagram's caption, tags each work module's category, and heads every column of the
stack. On a caution module the placard shifts to amber ink and an amber border.

### Cards / Modules

- **Corner style:** 4px (`{rounded.md}`)
- **Background:** Satin gradient, plate to plate floor
- **Border:** 1px bezel; edge grey on hover
- **Shadow:** Top highlight plus plate lift (see Elevation)
- **Internal padding:** 22px / 22px / 20px, contents in a 16px-gap column
- **Distinctive behaviour:** Link modules lift 2px on hover and their trailing arrow — an inline
  16×16 SVG chevron-and-shaft in `currentColor`, not a `→` character — advances 5px.
  The caution variant swaps the border and placard to amber and replaces the call-to-action with a
  lock note. Every module carries a status lamp in its header row — green "Live"/"Published",
  amber "Restricted".

### Navigation

A sticky rail, 58px tall, with a three-stop gradient darkening downward, a hard
bottom border and an inset lit top edge. It deepens its cast once the page scrolls. On the left, a
nameplate — a bordered plate holding the identity mark in the signal colour and the name in mono 700 at `.2em`
uppercase. Centre-right, mono 12.5px uppercase section links in dim, lifting to luminous white on a
4.5% white wash. Right, the engage variant of the button, the panel-light switch, and a live Dhaka clock in the
live-signal colour with a slow-pulsing lamp. Below 880px the section links leave and the clock
takes the right margin; below 560px the nameplate gives up its word and keeps only the identity
mark, so the switch keeps its label; below 520px the clock leaves too.

### Panel-light switch

A two-position switch on the header rail, the only control on the page that changes the page
itself. A 30×15px recessed track with a bezel border and an inset floor, holding a 12×11px
machined knob — a three-stop metal gradient with a lit top edge and a cast shadow under it —
that slides 14px right when night is selected. Beside it, the state in mono 11px `.14em`
uppercase: DAY or NIGHT, naming the condition currently in force rather than the one a press
would produce. The knob transition is 160ms on the house easing and is suppressed under
`prefers-reduced-motion` with everything else.

It is a real `<button>` with `aria-pressed` and an `aria-label` that names the outcome
("Panel light — switch to night lighting"), so a screen reader hears the action while sighted
users read the state. The rocker is not the identity mark of the page and is not styled in the
live-signal colour: switching the lights is not live data, and green is reserved.

### Status list

A three-across bordered grid of six key/value cells: mono 11px `.12em` uppercase keys in faint
above mono 17px 700 tabular values in primary ink, hairline grid lines, a bezel border around.
Key over value rather than key beside value, because it gives the value the wider half of the cell
and lets the eye run down the values alone. Word values (`Self-hosted LGTM`, `Dhaka · UTC+6`) drop
to 15px so they sit on one line beside the numerals without crowding them.

It carries six claims — experience, ERP platforms, products shipped, observability, domain
modules, base — and it is the page's answer to "prove it" for a visitor who reads nothing else.
**What it deliberately does not carry is volume:** counts of endpoints, routes, components and
localization keys were all cut, because a tally of how many things exist says nothing about whether
any of them work. What replaced them names capabilities — self-hosted observability, the two module
families — and the module names themselves live in the diagram where there is room to read them.

It is marked up as a `<dl>`: each cell is a `<dt>`/`<dd>` pair inside a grid item, so the
relationship a sighted reader gets from the layout is in the document for everyone else.

### Experience table (signature component)

A bordered table of employment. A mono column header row (Period / Company / Stack) over
disclosure rows built from full-width buttons on a `150px 1fr 200px 34px` grid. The period reads
in tabular mono in the signal colour, the company name in the 21px Archivo tier with its role
beneath in faint mono, the stack in dim mono, and a chevron at the right that rotates 90 degrees
and takes the signal colour when expanded. Panels open by animating `grid-template-rows` from
`0fr` to `1fr` over 380ms — no height measurement, no layout thrash. Detail lines are dash-marked
in the signal colour at 75% opacity, indented to hang under the Company column.

### Architecture diagram (signature component)

The hero's own instrument, and the page's central claim: the shape of every system described
below it. Top to bottom — three client surfaces as boxes, a fan of signal lines converging into
one, the signals-first client layer as a full-width band, a single annotated line carrying the
typed contract (`TYPED HTTP` over `permission-checked, end to end`), the .NET API as a second band,
a fan back out to three data stores, a dashed telemetry tap into a dashed-edged observability band,
and a dashed lane naming the AI agents the whole thing is authored with.

**The modules compartment** hangs off the API band as two cells — ERP and QMS — sharing the band's
border line (`margin-top: -1px`, and `-1px` again between the cells) so it reads as compartments
*inside* the modular monolith rather than as another layer beneath it. They take the box fill, not
the band's recessed one, because a module is a discrete component and the Box/Well rule says a
component is the brighter plane. The names are the real domain slices — access control, accounting,
HR, production, inventory on the ERP side; deviation, checklist, handbook, compliance, settings on
the QMS side — and they are the answer to the question the layer diagram alone leaves open: not
just how the system is built, but what is in it. At one column the two cells stack.

**The observability band** is the one part of the diagram that is not on the request path, and the
drawing says so twice: the line into it is dashed and neutral rather than solid green, and the band
keeps the band plane but takes the lane's dashed border. Green stays reserved for the path a
request actually travels. The band names the real stack behind CampusQ — OpenTelemetry traces
through Alloy into Tempo, Prometheus scraping a token-gated metrics endpoint, container logs in
Loki, Grafana dashboards and alert rules reaching Telegram — because a system nobody is watching
is a claim, not an operation.

It is **DOM, not SVG**, and that is the design decision, not an implementation detail. Boxes are
divs, lines are 1px backgrounds and pseudo-elements, and the fan is a three-column grid whose
outer verticals run half height into a horizontal bus while the centre one runs the full height.
At 640px the grid becomes one column, the bus disappears, and the fan reduces to a single line —
every label keeps its real size, because nothing here scales with the viewport. Screen readers
walk it as ordinary text in reading order; the connectors are `aria-hidden`.

**The draw-in** is the page's only authored animation. On load the signal path draws itself once,
top to bottom: each vertical scales from `scaleY(0)` about its top edge, the bus scales out from
its centre, and the segments are staggered 50ms apart across roughly 0.6s in total. It runs from
CSS alone with no JavaScript and no scroll observer, is gated on the `js` class so a
scripting-disabled page renders the path complete, and is suppressed entirely under
`prefers-reduced-motion: reduce`.

### Stack columns

Five bordered cards, each with a mono 11px `.15em` uppercase header on a flat plate-head bar over
a bezel rule, then a list of `{typography.mono-list}` items each preceded by an 11px green-ink SVG
checkmark. The five-column track is what fixes the item tier: at 13.5px the entries set on one
line each, and the reviewer held that size across two verdict rounds against merging it up to
body's 15px.

### Iconography

Every icon on the page is inline SVG in one stroke language: `fill="none"`,
`stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`,
`aria-hidden="true"`, sized 11–18px in a 12- or 16-unit viewBox. The checklist checkmark, the
module arrow and the lock note are all drawn to that spec, so an arrow next to a checkmark reads
as the same hand at the same nib width. The identity mark is the one exception and is filled, not
stroked — see **Mark** below. There are no glyph
icons and no icon font. The `→` characters that remain on the page — in the experience table's date ranges and
the section count — are typographic content set in Azeret Mono, not icons, and stay as text.

### Mark

The identity is a monogram: a single **S** in Archivo at `wdth` 84 / `wght` 800 — the display
voice at its smallest useful size. It is the outlined glyph, not live text, so it never depends on
a font being installed or reachable: the contour is lifted from the variable font at those exact
axis settings and committed as a path.

It appears in two places and they are the same drawing. In the header it is the bare glyph in
primary ink at 15px, leading the mono wordmark; below 560px the wordmark hides and the mark stands
alone. In `favicon.svg` the same path sits on a plate with a hairline bezel, and the tile answers
to `prefers-color-scheme` — ink on plate for a light tab strip, light ink on a dark plate for a
dark one, so the mark keeps its contrast in either browser chrome. The rasters
(`favicon.png` 96px, `apple-touch-icon.png` 180px, `icon-512.png`) cannot answer to a theme and
ship in the daylight treatment, matching the page's own default.

**The mark carries no green.** A logo neither reports a value nor responds to a press, so under
the Signal Reserve Rule it has no claim on the signal colour. The mark it replaced — a dial with a
green pointer — broke that rule and outlived the instrument cluster it belonged to.

### Architecture schematic

An inline SVG diagram inside a hairline-bordered frame in a recessed well, drawn in the same
line language as the hero diagram: 1px stroked boxes, green-ink lines for the active path, amber dashed
rectangles for boundaries, lettering at the SVG label tier (`{typography.svg-label}`, drawn in
viewBox units so it scales with the frame), full descriptive `aria-label`. Below 760px it scrolls
horizontally behind a right-edge fade mask with a mono hint beneath it.

### Skip link

The first focusable thing in the document, ahead of the header: a mono 12.5px link on a plate with
a signal-coloured border, parked at `top: -100px` and sliding to `top: 12px` on `:focus` — plain
`:focus`, not `:focus-visible`, because a skip link that only appears for some focus sources is a
skip link that fails when it is needed. It targets `#work`, not `#top`: a keyboard visitor who
wants past the header wants the evidence, and the hero is already the first thing after it.

### Browser chrome

The system themes the browser surfaces it can reach, and treats them as part of the panel rather
than as leftovers. Selection paints a radium background with selection ink
(`{colors.selection-ink}`) on top — a highlighted phrase reads as a lit strip of instrument.
Scrollbars are an 11px gutter on the deck colour with a bezel thumb, an edge-grey hover, a 3px
panel-coloured inset and a `{rounded.thumb}` radius (the one radius off the page's own scale; see
Shapes). Focus rings are the live-signal colour. `color-scheme` is declared `light dark` at the
document and re-declared per condition on `:root`, so form controls and the scrollbar gutter
follow the panel's own lighting rather than the OS, and `scrollbar-color` / `scrollbar-width: thin` carry the same treatment
to engines without the `::-webkit-scrollbar` pseudo-elements.

### Named Rules

**The One Moment Rule.** The page has exactly one authored animation — the diagram's signal path
drawing itself in. Everything else is a state transition of 120–380ms on
`cubic-bezier(.2,.7,.25,1)`. A second scroll-triggered reveal would make the first one ordinary.

**The Evidence Rule.** Every claim on this page is either a named system, a checkable number, or
a drawing of something that exists. The hero shows the actual architecture; the strip beneath it
carries the numbers; the table below that says who paid for them. Nothing is asserted by
decoration — that is the reason the instrument dials came out.

**The No-Literal Rule.** Every colour in the stylesheet is a token defined once per lighting
condition, including the stops of the shared SVG gradients. A literal hex in a rule is a bug: it
means one of the two conditions was not considered.

## Do's and Don'ts

### Do:

- **Do** reserve `{colors.green}` for live data and pressable elements. If it neither reports a
  value nor responds to a press, it is not green.
- **Do** give every raised surface a satin gradient, a 1px lit top edge (`inset 0 1px 0
  rgba(255,255,255,.045)`) and a dark bottom. One light, upper left.
- **Do** set the `wdth` axis whenever you set a display size — 82/84/86/88/92/94 by tier, 100 for
  body.
- **Do** put every value, label, column header, chip and control caption in Azeret Mono, with
  tabular numerals wherever the number can change.
- **Do** use the `.placard` plate as the label device, including nested inside another plate — a
  placard is this world's label primitive, and a generic nesting warning does not apply to it. The
  `nested-cards` exception on `figcaption` in `.impeccable/config.json` was registered for the gauge
  captions and is vestigial now that they are gone; the principle it recorded still holds for the
  placards that remain.
- **Do** let indicator lamps and the engage ring glow (`0 0 9px`) **at night** — they are light
  sources on an unlit panel, and it is the only glow in the system. In daylight the same lamps
  carry a 1px rim and a 2px coloured cast shadow instead: an emissive halo on enamel reads as a
  smudge. Registered as `dark-glow` exceptions on `{colors.green}` and `{colors.amber}` in
  `.impeccable/config.json` — emissive lamps only, never text and never a plate.
- **Do** write a display tier as its full `clamp()` and let the ramp be read from its endpoints.
  The scale is intentionally wide at the display end (6.6rem) and dense at the small end (11px),
  and `flat-type-hierarchy` is registered as an `index.html`-scoped exception because static
  scanners cannot evaluate `clamp()` and sample only the fixed tail.
- **Do** keep amber to limits, and keep the count honest — four places today.
- **Do** provide a static equivalent for anything hover reveals, and honour
  `prefers-reduced-motion` by rendering the settled state rather than a frozen start state.
- **Do** draw every icon to one stroke spec — inline SVG at 11–18px, `fill="none"`,
  `stroke="currentColor"`, `stroke-width="2"`, round caps and joins, `aria-hidden="true"` — so an
  arrow and a checkmark read as the same nib. Give every meaningful SVG a descriptive `aria-label`.
- **Do** keep the second surface (`README.md`) inside the same world using only what GitHub
  markdown allows: the box-drawn instrument panel in a fenced block, the same section titles, and
  theme-forked stat cards carrying `0B0D0F` / `7CFF9E` / `9AA3A5` in dark and `F4F5F5` / `12703A` /
  `3B4245` in light.

### Don't:

- **Don't** use green for headings, dividers, borders on neutral surfaces, decorative washes or
  hover tints on non-pressable elements. That is the dark-portfolio-with-one-accent arrangement
  this world exists to refuse.
- **Don't** light red. It is declared and reserved; a page that shows red when nothing is wrong
  cannot signal that something is.
- **Don't** add a soft ambient drop shadow. Depth is raking light plus a tight, negative-spread
  cast; a `0 4px 24px rgba(0,0,0,.12)` halo does not belong on a machined plate.
- **Don't** exceed a 5px radius on the page or introduce a pill or capsule. Round is reserved for
  lamps and the engage ring; the 6px scrollbar thumb is browser chrome and is not a precedent.
- **Don't** add a second scroll-triggered animation. The diagram's draw-in is the only authored
  moment, and it runs on load from CSS alone.
- **Don't** introduce a third typeface, or set a heading in mono, or set a value in Archivo.
- **Don't** paint a raised surface with a flat fill instead of the satin gradient.
- **Don't** gate a reading behind hover at any width, and don't leave any part of the signal path
  scaled to zero when motion is reduced or scripting is off.
- **Don't** rebuild the hero diagram as a fixed-viewBox SVG. It was one, and at 390px its labels
  rendered at 4.8px. Load-bearing diagrams reflow; only the secondary project schematics may scale.
- **Don't** add a text glyph as an icon. Every icon in this system is inline SVG. The `→`
  characters in the experience table's date ranges and the section count are typographic content, not icons, and
  are correct as text.
- **Don't** "normalise" the 7.6px SVG label tier to a DOM size. That number is in viewBox units
  and scales with the project schematics; rewriting it to 11px oversizes every label in them.
- **Don't** merge the 13.5px checklist tier into 15px body. The checklist runs five narrow
  columns and roughly half the entries wrap at 15px; the tier was reviewed and held twice.
- **Don't** reintroduce a `--face` / `--plate` / `--plate-2` / `--green-dim` / `--r` custom
  property. Those declarations were deleted as dead; the plate colours live as literal stops
  inside the gradients that actually use them, and adding a variable back creates a second source
  of truth for a value that is never used flat.

---
name: Saiful Islam — Night Panel
description: A software engineer read the way a pilot reads a night panel — six instruments that agree with each other.
colors:
  panel: "#0B0D0F"
  face: "#101315"
  plate: "#141719"
  plate-floor: "#0A0C0D"
  bezel: "#2A2D31"
  edge: "#383C41"
  chamfer: "rgba(255,255,255,.13)"
  hair: "rgba(242,245,245,.10)"
  lum: "#F2F5F5"
  lum-sub: "#C9D1D2"
  dim: "#9AA3A5"
  faint: "#828A8D"
  gauge-numeral-sm: "#AFB7B8"
  green: "#7CFF9E"
  green-ink: "#4FD27A"
  amber: "#FFB000"
  red-reserved: "#FF3B30"
  selection-ink: "#04150A"
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

# Design System: Saiful Islam — Night Panel

## Overview

**Creative North Star: "The Night Panel"**

A software engineer read the way a pilot reads a night panel: six instruments that agree with
each other. The surface is a machined instrument bay — matte panel black under a fine tooth of
noise, satin bezels catching a single upper-left light, hex screws at the corners of the plate,
and engraved placards naming everything. Nothing is decorated; everything is labelled. The
information itself is the ornament, and the ornament is legible at a glance.

The system is built on one hard discipline: **light means something.** Luminous white is
information. Radium green is live data and anything you can press — nothing else. Caution amber
marks a limit, and it appears in exactly four places on the whole page. Warning red is defined
in the palette and deliberately never lit, because a panel that shows red when nothing is wrong
is a panel nobody trusts. Every plate in the bay is a satin gradient with a 1px lit top edge and
a black floor, so depth is read from the rake of the light rather than from a drop shadow.

This world explicitly refuses the arrangement it replaces: the dark portfolio with one accent
colour sprinkled through headings, borders, hover states and decorative glows. Here the accent
is a signal with a job. The build is one hand-authored static file with all CSS and JS inline
and no build step — the constraint is part of the craft, and the surface should read as
deliberate engineering rather than as a limitation.

**Key Characteristics:**

- Matte panel black ground with a 3px radial-dot tooth over the entire page
- Satin plates: every raised surface is a top-to-bottom gradient, lit top edge, black floor
- Two voices only — Archivo at condensed widths for lettering, Azeret Mono for every readout
- Radium green reserved for live data and pressable elements; amber for limits; red never lit
- Tight corners (2px controls, 4px modules, 5px panel); circles only for lamps, screws and hubs
- One authored motion moment: instrument power-on. Everything else is a state transition
- Cross-check as the signature interaction: light one gauge, dim the other five, speak the value

## Colors

A single luminous white on near-black, with one live-signal green and one caution amber, both
rationed hard enough that their appearance is itself information.

### Primary

- **Radium Green** (`{colors.green}`): The live-signal colour. It appears on gauge readouts and
  needles that carry a value, live-status lamps, the Dhaka clock, the logbook period column, the
  engage ring and every pressable path into contact. It is never used for a heading, a border, a
  divider or a decorative wash. Wherever it appears, it is either a number the panel is reporting
  or something the visitor can press.
- **Green Ink** (`{colors.green-ink}`): The dimmer working green, used where radium would shout:
  the checkmark glyphs in the pre-flight checklist, the active data path in the architecture
  schematics, and the scroll-hint chevron. It reads as green without claiming to be lit.

### Secondary

- **Caution Amber** (`{colors.amber}`): Limits only. It appears in exactly four places on the
  page — the airspeed redline arc, the heading bug, the row-level-security boundary annotation in
  the CampusQ schematic, and the restricted Rent-ERP module with its amber lamp and lock note.
  Every one of those is a boundary, a ceiling or a restriction. Amber never marks emphasis.

### Tertiary

- **Warning Red** (`{colors.red-reserved}`): Defined in the palette and deliberately unlit. It
  exists so the panel has a top-severity colour in reserve; nothing on the current surface has
  earned it. Keep the declaration, keep it dark.

### Neutral

- **Panel Black** (`{colors.panel}`): The matte ground behind everything, including the browser
  theme colour and the scrollbar track. It never appears as a raised surface.
- **Instrument Face** (`{colors.face}`): The recessed dark one plane below the plate — the value a
  surface takes when it reads as set into the panel rather than raised off it. It carries that role
  in three places — the schematic box fill, the placard plate's lit stop, and the
  instrument panel gradient's middle stop. The identity disc in `favicon.svg` sits one step darker
  on the same plane (`#0F1114`). There is no `--face` custom property; this value is written
  literally wherever it lands, because it always arrives as one stop of a gradient rather than as a
  flat fill.
- **Plate** (`{colors.plate}`) → **Plate Floor** (`{colors.plate-floor}`): The two ends of the
  satin gradient every raised module runs between. Plate is the lit top, plate floor the shadowed
  bottom. Both are written literally in gradient stops for the same reason.
- **Bezel** (`{colors.bezel}`): The default border on every machined component — modules,
  logbook, checklist cards, placards, buttons, scrollbar thumb.
- **Edge** (`{colors.edge}`): The lifted bezel. Borders move from bezel to edge on hover; nothing
  else uses it.
- **Chamfer** (`{colors.chamfer}`): The lit top edge of the instrument panel's own border. The
  panel is bordered in pure black on three sides and in chamfer white across the top, so the
  bay's upper edge catches the raking light as a machined bevel would. It is the border-level
  counterpart to the inset top highlight and belongs to the Rake Rule, not to the palette's
  greys. Used on the panel only.
- **Hairline** (`{colors.hair}`): Internal division inside a plate — row separators, section-head
  rules, the cross-check strip's top rule. Never used as an outer border.
- **Luminous White** (`{colors.lum}`): Information. Headings, the operator name, values, body
  emphasis, needle bodies.
- **Recessed White** (`{colors.lum-sub}`): The second line of the display name and the pitch
  ladder in the attitude indicator — white that has stepped back one plane.
- **Dim** (`{colors.dim}`): Running prose, list text, placard lettering, inactive nav.
- **Faint** (`{colors.faint}`): Metadata that should be findable but not read — column headers,
  counts, footer data plate, key labels.
- **Scale Numeral** (`{colors.gauge-numeral-sm}`): The second tier of instrument lettering painted
  inside SVG — the 200/400/600/800 style numbers on the airspeed and vertical-speed faces, and the
  minor numerals on the turn coordinator. It is deliberately dimmer than the primary numeral fill
  (`#E9EFEF`) so the major graduations read first from across the room. These SVG-only lettering
  greys are their own small ladder and never appear on DOM text: primary numerals `#E9EFEF`, scale
  numerals (this token), gauge tick labels `#79817F`, schematic labels `#C6CDCE` with a recessed
  `#7F8789`. Do not substitute a DOM grey for one of them; they are calibrated against the glass,
  not against the plate.
- **Selection Ink** (`{colors.selection-ink}`): The foreground of a text selection, sitting on a
  radium-green selection background. A near-black green — the panel's own hue driven almost to
  zero lightness — so highlighted text reads as a lit strip of the instrument rather than as the
  browser's default blue rectangle. Palette-derived and used in exactly one place.

### Named Rules

**The Radium Reserve Rule.** Green is live data and pressable elements, and nothing else. If a
green element neither reports a current value nor responds to a press, the green is wrong.

**The Four Cautions Rule.** Amber marks a limit. It is currently spent on four: the IAS redline
arc, the heading bug, the RLS-boundary annotation, and the restricted module. Adding a fifth
requires taking one away or proving the new one is also a limit.

**The Dark Warning Rule.** Red is declared and never rendered. A panel that lights red for
emphasis has no way left to say something is actually wrong.

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
  white. It must not carry radium — it is neither a reading nor a press target, and the section's
  one green pressable sits directly beneath it.
- **Headline** (`wdth` 86 / `wght` 700, `clamp(1.85rem, 4.2vw, 2.9rem)`, line-height 1.02,
  uppercase, balanced): Section heads.
- **Title** (`wdth` 88 / `wght` 700, `clamp(1.3rem, 2.4vw, 1.72rem)`, line-height 1, uppercase):
  Module names in the work grid.
- **Operator** (`wdth` 92 / `wght` 700, 21px, line-height 1.2): The employer name in the logbook —
  the one mid-scale display tier, sitting between title and body.
- **Lede** (17.5px, line-height 1.62, max 50ch): The one paragraph above the fold. Emphasis inside
  it is bold luminous white; a single phrase carries radium green.
- **Body** (15px, line-height 1.55; 1.7 in module copy, 1.68 in logbook remarks; max 74ch / 82ch):
  Running prose in dim, with bold emphasis stepping up to luminous white.
- **Readout** (Azeret Mono, 12.5px, tabular): Nav links, buttons, status rows, counts, cross-check
  strip, footer plate, logbook periods and types, module call-to-action lines.
- **Placard** (Azeret Mono 500, 11px, `.13em` tracking, uppercase): Every engraved label — the
  role plate, gauge captions, module category tags, status-list keys, logbook column heads,
  checklist headers. Card headers push tracking to `.15em` at weight 700.
- **Mono list** (`{typography.mono-list}` — Azeret Mono, 13.5px, line-height 1.55): Pre-flight
  checklist items only. The one place a list of technologies is set in the machine's own hand
  rather than in prose. It is a real tier, not a rounding error between readout and body: the
  checklist runs five narrow columns, and merging these items up to body's 15px wraps roughly half
  the entries onto a second line. Hold 13.5px.
- **SVG label** (`{typography.svg-label}` — Azeret Mono, 7.6px, `.03em`): Lettering drawn inside a
  viewBox — the architecture schematic's box and annotation labels, and the gauge tick labels. This
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
82 on gauge numerals, 84 at signage scale, 86 on section heads, 88 on module titles, 92 on the
operator name, 94 on certification entries, 100 on body. Never scale display type without setting
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
status row on the left; `56fr` of instrument panel on the right, with a 56px gap and centred
alignment. The panel holds a three-across six-pack of gauges (18px/16px gutters, each gauge
capped at 190px wide) over a cross-check readout strip separated by a hairline. Below the deck
sits a two-column status list whose final row spans full width and closes with a lit lamp.

Sections run at 86px of vertical padding (60px below 760px), each opening with a baseline-aligned
head: the section title on the left, a mono count pushed to the right margin, a hairline
underneath, 38px of clearance below it.

The work grid is a six-column track where modules claim `span 6` (wide) or `span 3` (half),
collapsing to a single column at 900px. The pre-flight checklist is five equal columns, dropping
to two at 1000px and one at 560px. Certification is a straight two-up.

**Responsive behaviour, as built:** the gauge six-pack goes 3-up to 2-up at 620px; nav links other
than Contact are hidden below 880px and the clock takes their place, then disappears itself below
520px; the logbook's four-column row folds into a stacked block with the chevron pinned right at
820px, and its expanded remarks hang under the Operator column (166px inset) only above that
breakpoint; architecture schematics become horizontally scrollable at 760px with a 38px edge-fade
mask and a "Pan the diagram" hint appearing beneath them; the status list goes single-column at
700px.

### Named Rules

**The Bleed Rule.** At 1041px and up the instrument panel runs off the right edge of the viewport
— negative right margin equal to the frame's own gutter, right border removed, right corners
squared. The bay continues past the window rather than sitting politely inside a margin. Below
that width it returns to the column.

**The No-Gate Rule.** No reading is available only on hover. Below 620px each gauge caption grows
a second line in radium green carrying the same value the cross-check strip would have spoken.

## Elevation & Depth

There are no ambient drop shadows in this system. Depth comes from a single raking light source
in the upper left and from the material behaviour of machined metal: every raised plate carries a
1px white inset along its top edge, a black or near-black bottom edge, and a top-to-bottom satin
gradient between them. Shadows exist only as tight, high-offset, negative-spread casts that read
as a plate sitting proud of the panel — never as a soft halo. The one recessed device in the
system is the spec chip, which inverts the rule with an inner black shadow and a light bottom
edge so it reads as stamped into the plate rather than sitting on it.

The instrument panel is the deepest object: a three-stop gradient, a pure-black 1px border whose
top side is overridden to chamfer white (`{colors.chamfer}`), four inset edges (lit top, lit left,
black bottom), a corner-anchored screw at each corner, and a two-layer overlay that rakes light
across the plate from upper-left at 116 degrees. The chamfer border and the inset top highlight
are two different devices doing one job: the border is the bevel's own lit face, the inset is the
light landing on the plate just inside it. Together they read as a milled edge rather than a
stroke.

### Shadow Vocabulary

- **Top highlight** (`box-shadow: inset 0 1px 0 rgba(255,255,255,.045)`): The universal lit edge.
  Every plate, card, placard, button and status strip carries it. The panel uses `.11`, controls
  and headers `.05`.
- **Plate lift** (`box-shadow: 0 6px 12px -8px rgba(0,0,0,.9)`): Work modules sitting on the panel.
- **Panel lift** (`box-shadow: 0 10px 14px -10px rgba(0,0,0,.95)`): The instrument bay itself.
- **Control** (`box-shadow: inset 0 1px 0 rgba(255,255,255,.05), 0 2px 5px rgba(0,0,0,.55)`):
  Buttons.
- **Glareshield** (`box-shadow: 0 1px 0 rgba(255,255,255,.05) inset, 0 10px 22px -14px rgba(0,0,0,.9)`):
  The sticky header at rest; it deepens to `0 16px 30px -12px rgba(0,0,0,1)` once the page scrolls
  past 8px.
- **Engraved** (`box-shadow: inset 0 1px 2px rgba(0,0,0,.8), 0 1px 0 rgba(255,255,255,.05)`):
  Spec chips. The only sunken surface in the system.
- **Lamp glow** (`box-shadow: 0 0 0 1px rgba(0,0,0,.6), 0 0 9px rgba(124,255,158,.75)`): The
  emissive indicator. Amber uses the same geometry at `rgba(255,176,0,.7)`. This is the world's
  one legitimate glow — it is a light source, not a decoration.
- **Screw** (`box-shadow: inset 0 0 0 1px rgba(0,0,0,.8), inset 1px 1px 2px rgba(255,255,255,.30), 0 1px 1px rgba(0,0,0,.65)`):
  Paired with a radial gradient lit at 32%/26% and a rotated slot, giving each screw an
  individual seating angle.

### Named Rules

**The Rake Rule.** One light, upper left. Every raised surface takes a lit top edge and a dark
bottom edge; nothing is lit from below and nothing casts a soft halo. On the panel the lit top
edge is carried by the border itself (`border-top-color: {colors.chamfer}` over an otherwise
black border), because the bay is the one object thick enough to show its own chamfer.

**The Satin Plate Rule.** No raised surface is a flat fill. Every plate runs a top-to-bottom
gradient from a lit top stop to a near-black floor. A flat `background: #141719` on a module is a
defect, not a simplification.

## Shapes

Corners are tight and graded by mass: 2px on anything hand-sized (buttons, nav links, placards,
nameplate, spec chips, schematic boxes), 3px on the schematic frame, 4px on modules, logbook,
checklist cards, certification blocks and the status list, 5px on the instrument panel. Nothing
on the page itself exceeds 5px, and nothing is fully rounded except things that are physically
round: lamps, screws, gauge hubs, bezel rings and the engage ring.

One radius sits off that scale on purpose: the scrollbar thumb (`{rounded.thumb}`). It is drawn
in an 11px gutter behind a 3px panel-coloured inset, so only about 5px of thumb is visible, and
6px rounds that sliver into a clean rail instead of a rectangle with visible corner artefacts. It
is browser chrome rather than a machined plate, and it answers to the operating system's scale,
not the panel's. Nothing on the page may borrow it.

Every machined surface is a 1px bezel-coloured border. Interior divisions are hairlines; exterior
borders are bezel. Borders move to edge grey on hover — colour never carries hover state on a
neutral surface.

The gauge is the system's defining silhouette: a 200×200 viewBox with a machined bezel ring drawn
from two opposing linear gradients (lit upper-left, lit lower-right), an inner chamfer, a black
seat, a radial face, an inner shadow at the face/bezel seam, a glass dome highlight offset up and
left, four corner screws, and a needle rotating about the exact centre. All of it is shared SVG
`<defs>` so six instruments cost one definition each.

Architecture schematics use the same line language at small scale: 1px stroked boxes on the
instrument face, green-ink strokes for the active data path, amber dashed rectangles for
boundaries, and lettering at the SVG label tier (`{typography.svg-label}`).

### Named Rules

**The Tight Corner Rule.** 2px for controls, 4px for modules, 5px for the panel, 50% only for
things that are actually round. There is no pill, no capsule and no large radius anywhere in this
world. The single documented exception is the 6px scrollbar thumb, which is not a surface of this
world at all.

## Components

### Buttons

- **Shape:** Squared-off with a 2px break on the corner (`{rounded.xs}`), 1px bezel border, satin
  gradient face, 14px/21px padding, mono 12.5px at weight 500, 10px gap to any leading element.
- **Neutral:** Dim text on plate. Hover raises text to luminous white and the border from bezel to
  edge. Active depresses 1px. This is the default for every secondary action — WhatsApp, resume,
  GitHub, LinkedIn, "Get in touch".
- **Engage:** The only green pressable. Radium text, a `rgba(124,255,158,.45)` border, and an 11px
  hollow ring in current colour. On hover the face fills with a green wash, the border goes solid
  radium, and the ring fills and lights with a 10px glow — an indicator coming on, not a colour
  swap. Two exist on the page: "See the work" in the deck and the email address in the contact
  section, plus the header's compact variant.
- **Focus:** Global — a 2px radium outline at 3px offset with a 2px radius. Applied on
  `:focus-visible` only.

### Placard

The world's label primitive and its most reused device. An engraved plate: mono 11px at `.13em`
uppercase in dim, a `#101315` → `#0A0C0D` gradient, 1px bezel border, 2px radius, an inset lit top
edge and a 1px black bottom edge, `white-space: nowrap`. It names the role under the display name,
captions every gauge, tags each work module's category, and heads the cross-check strip. On a
caution module the placard shifts to amber lettering and an amber border.

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

A sticky glareshield strip, 58px tall, with a three-stop gradient darkening downward, a black
bottom border and an inset lit top edge. It deepens its cast once the page scrolls. On the left, a
nameplate — a bordered plate holding the identity mark in radium and the name in mono 700 at `.2em`
uppercase. Centre-right, mono 12.5px uppercase section links in dim, lifting to luminous white on a
4.5% white wash. Right, the engage variant of the button and a live Dhaka clock in radium with a
slow-pulsing lamp. Below 880px the section links leave and the clock takes the right margin; below
520px the clock leaves too, and only the nameplate and the engage link remain.

### Status list

A two-column bordered grid of key/value rows: mono 11px `.12em` uppercase keys in faint, mono 15px
700 tabular values in luminous white, hairline separators between and a bezel border around. Its
last row spans the full width, drops its rules, and closes the block with a radium key and a lit
lamp — the panel signing off.

### Logbook (signature component)

A bordered table of employment set as an aircraft logbook. A mono column header row (Period /
Operator / Type) over disclosure rows built from full-width buttons on a
`150px 1fr 200px 34px` grid. The period reads in radium tabular mono, the operator name in the
21px Archivo tier with its role beneath in faint mono, the type in dim mono, and a chevron at the
right that rotates 90 degrees and turns radium when expanded. Panels open by animating
`grid-template-rows` from `0fr` to `1fr` over 380ms — no height measurement, no layout thrash.
Remarks are dash-marked in radium at 75% opacity, indented to hang under the Operator column.

### Instrument six-pack (signature component)

Six 200×200 SVG gauges sharing one `<defs>` block: bezel ring, inner chamfer, face, seam shadow,
glass dome, hub, and a four-screw overlay. Each gauge is a `<figure>` with `tabindex="0"`, a
descriptive `aria-label` on the SVG, a `data-read` string, and a placard caption.

**Power-on** is the page's only authored animation. On first intersection at 25% visibility, every
needle winds back 300 degrees below its stop and springs to value under a damped spring
(`k = 0.055`, `damp = 0.80`), staggered 90ms apart, driven through an inline `--a` custom property.
Under `prefers-reduced-motion: reduce` the sequence never runs and the inline `--a` already carries
the settled value, so the panel renders correct and still.

**Cross-check** is the signature interaction. Hovering or focusing any gauge drops the other five
to 0.42 opacity, lights a radium ring around the active bezel, turns its placard green-on-dark, and
writes that instrument's reading into an `aria-live="polite"` strip below the panel. Arrow keys
rove between the six. The dimming is disabled under reduced motion; the readout is not.

The attitude indicator adds a pointer-tracked horizon that banks up to 5 degrees and shifts up to
7px, easing back over 550ms on leave — pointer-only, and skipped entirely under reduced motion.

### Pre-flight checklist

Five bordered cards, each with a mono 11px `.15em` uppercase header on a flat `#0E1113` bar over a
bezel rule, then a list of `{typography.mono-list}` items each preceded by an 11px green-ink SVG
checkmark. The five-column track is what fixes the item tier: at 13.5px the entries set on one
line each, and the reviewer held that size across two verdict rounds against merging it up to
body's 15px.

### Iconography

Every icon on the page is inline SVG in one stroke language: `fill="none"`,
`stroke="currentColor"`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`,
`aria-hidden="true"`, sized 11–18px in a 12- or 16-unit viewBox. The checklist checkmark, the
module arrow, the lock note and the header marks are all drawn to that spec, so an arrow next to a
checkmark reads as the same instrument-maker's hand at the same nib width. There are no glyph
icons and no icon font. The `→` characters that remain on the page — in logbook date ranges and
the section count — are typographic content set in Azeret Mono, not icons, and stay as text.

### Architecture schematic

An inline SVG diagram inside a hairline-bordered frame on the instrument face, drawn in the same
line language as the gauges: 1px stroked boxes, green-ink lines for the active path, amber dashed
rectangles for boundaries, lettering at the SVG label tier (`{typography.svg-label}`, drawn in
viewBox units so it scales with the frame), full descriptive `aria-label`. Below 760px it scrolls
horizontally behind a right-edge fade mask with a mono hint beneath it.

### Browser chrome

The system themes the browser surfaces it can reach, and treats them as part of the panel rather
than as leftovers. Selection paints a radium background with selection ink
(`{colors.selection-ink}`) on top — a highlighted phrase reads as a lit strip of instrument.
Scrollbars are an 11px gutter on panel black with a bezel thumb, an edge-grey hover, a 3px
panel-coloured inset and a `{rounded.thumb}` radius (the one radius off the page's own scale; see
Shapes). Focus rings are radium. `color-scheme` is declared dark so form controls and the
scrollbar gutter match, and `scrollbar-color` / `scrollbar-width: thin` carry the same treatment
to engines without the `::-webkit-scrollbar` pseudo-elements.

### Named Rules

**The One Moment Rule.** The page has exactly one authored animation — instrument power-on.
Everything else is a state transition of 120–380ms on `cubic-bezier(.2,.7,.25,1)`. A second
scroll-triggered reveal would make the first one ordinary.

**The Cross-Check Rule.** Only one instrument is lit at a time. Lighting one dims the other five
to 0.42 and speaks its value into a live region; nothing is highlighted without something else
being suppressed.

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
- **Do** use the `.placard` plate as the label device, including nested inside another plate. The
  engraved caption under a gauge is the world's native labelling, not a card inside a card. This is
  registered as a `nested-cards` exception on `figcaption` in `.impeccable/config.json`: a placard
  is this world's label primitive, and a generic nesting warning does not apply to it.
- **Do** let indicator lamps and the engage ring glow (`0 0 9px`). They are light sources in a
  night panel; the glow is the material, and it is the only glow in the system. Registered as
  `dark-glow` exceptions on `{colors.green}` and `{colors.amber}` in `.impeccable/config.json` —
  emissive lamps only, never text and never a plate.
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
  lamps, screws, hubs and rings; the 6px scrollbar thumb is browser chrome and is not a precedent.
- **Don't** add a second scroll-triggered animation. Power-on is the only authored moment.
- **Don't** introduce a third typeface, or set a heading in mono, or set a value in Archivo.
- **Don't** paint a raised surface with a flat fill instead of the satin gradient.
- **Don't** gate a reading behind hover on small screens, or leave a needle at its wound-back
  start position when motion is reduced.
- **Don't** add a text glyph as an icon. Every icon in this system is inline SVG. The `→`
  characters in logbook date ranges and the section count are typographic content, not icons, and
  are correct as text.
- **Don't** "normalise" the 7.6px SVG label tier to a DOM size. That number is in viewBox units
  and scales with the diagram; rewriting it to 11px oversizes every schematic label.
- **Don't** merge the 13.5px checklist tier into 15px body. The checklist runs five narrow
  columns and roughly half the entries wrap at 15px; the tier was reviewed and held twice.
- **Don't** reintroduce a `--face` / `--plate` / `--plate-2` / `--green-dim` / `--r` custom
  property. Those declarations were deleted as dead; the plate colours live as literal stops
  inside the gradients that actually use them, and adding a variable back creates a second source
  of truth for a value that is never used flat.

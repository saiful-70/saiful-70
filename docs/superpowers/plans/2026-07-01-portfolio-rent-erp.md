# Portfolio — Rent-ERP + Work-Section Sharpen — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Rent-ERP work card, promote CampusQ + Rent-ERP to two featured cards with the library below, sharpen existing copy, reflect the new cross-platform work in skills/metadata, and add Rent-ERP to `resume.docx`.

**Architecture:** `index.html` is a single-file, no-build page — edits are exact string replacements against existing markup/CSS, verified by opening the file in a browser. `resume.docx` is patched by rewriting its internal `word/document.xml` entry in place (Open XML), then validated by opening in Word.

**Tech Stack:** Static HTML/CSS/JS (no build); PowerShell + `System.IO.Compression` for the docx; Word (installed) for docx validation.

## Global Constraints

- No new dependencies, no build step, no framework — single-file `index.html` must stay self-contained.
- Stay inside the existing design language: fonts (Bricolage Grotesque / Inter / JetBrains Mono), accent `--accent`, `--live`, `--faint`; reuse existing classes (`.card`, `.tag-chip`, `.kicker`, `.card-cta`) — add only `.card--wide` and `.card-note`.
- Rent-ERP card: **no outbound link** (repo private, no live URL); **never** label it "live" / "in production" (runtime smoke pending per STATUS.md).
- Copy is precise and factual; English; no real customer data.
- Work-item DOM order: **CampusQ, Rent-ERP, ngx-primeng-toolkit**.
- Resume edits preserve all existing styling; back up the original first.
- Work happens on branch `content/rent-erp`; commit per task.

---

### Task 1: Work section — layout, Rent-ERP card, sharpened copy (`index.html`)

**Files:**
- Modify: `index.html` — CSS `.work-grid` (line ~312); Work section markup (lines ~572–602)

**Interfaces:**
- Produces: new CSS classes `.card--wide` (full-width grid span) and `.card-note` (muted, non-link footer badge), consumed only within this file.

- [ ] **Step 1: Update the grid + add the two new classes**

Replace (line ~312):
```css
  .work-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:22px}
```
with:
```css
  .work-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px}
  .card--wide{grid-column:1 / -1}
  .card-note{display:inline-flex;align-items:center;gap:7px;font-family:"JetBrains Mono",monospace;font-size:12px;font-weight:500;color:var(--faint);margin-top:20px;letter-spacing:.01em}
  .card-note .lock{flex:none;opacity:.85}
```

- [ ] **Step 2: Replace the whole `.work-grid` markup block**

Replace the current block (the `<div class="work-grid"> … </div>` containing the two `<a class="card">` cards) with:
```html
      <div class="work-grid">
        <a class="card" data-reveal href="https://campusqbd.com" target="_blank" rel="noopener">
          <span class="kicker">multi-tenant saas</span>
          <h3>CampusQ</h3>
          <p>A multi-tenant coaching platform where every tenant gets its own subdomain. Built end-to-end — Postgres row-level security, bitmask RBAC, online exams and bKash/Nagad payments — so isolation holds all the way down.</p>
          <div class="tags">
            <span class="tag-chip">.NET 10</span>
            <span class="tag-chip">Postgres RLS</span>
            <span class="tag-chip">Angular 21</span>
            <span class="tag-chip">Next.js 16</span>
            <span class="tag-chip">bitmask RBAC</span>
            <span class="tag-chip">bKash / Nagad</span>
            <span class="tag-chip">PWA + push</span>
            <span class="tag-chip">en / bn</span>
          </div>
          <span class="card-cta">View live — campusqbd.com <span class="arr">→</span></span>
        </a>

        <div class="card" data-reveal>
          <span class="kicker">web + mobile erp</span>
          <h3>Rent-ERP</h3>
          <p>A single-org property-management ERP across three surfaces — a .NET 10 modular monolith, an Angular 21 admin console, and a React Native app serving tenants and staff from one binary. Reuses the CampusQ architecture, minus the multi-tenant layer.</p>
          <div class="tags">
            <span class="tag-chip">.NET 10</span>
            <span class="tag-chip">Angular 21</span>
            <span class="tag-chip">React Native</span>
            <span class="tag-chip">Postgres</span>
            <span class="tag-chip">bKash</span>
            <span class="tag-chip">FCM push</span>
            <span class="tag-chip">RBAC personas</span>
            <span class="tag-chip">en / bn</span>
          </div>
          <span class="card-note"><svg class="lock" viewBox="0 0 24 24" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10.5" width="16" height="9.5" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>Source private · single-org product</span>
        </div>

        <a class="card card--wide" data-reveal href="https://www.npmjs.com/package/ngx-primeng-toolkit" target="_blank" rel="noopener">
          <span class="kicker">open source</span>
          <h3>Angular libraries</h3>
          <p>npm packages published with automated GitHub Actions CI/CD — notably <span class="mono" style="color:var(--accent)">ngx-primeng-toolkit</span>: parameterized query/table state, memoized data and reusable utilities. Built for internal use, then released to the community.</p>
          <div class="tags">
            <span class="tag-chip">TypeScript</span>
            <span class="tag-chip">@ngrx/signals</span>
            <span class="tag-chip">PrimeNG</span>
            <span class="tag-chip">GH Actions</span>
          </div>
          <span class="card-cta">View on npm <span class="arr">→</span></span>
        </a>
      </div>
```

- [ ] **Step 3: Verify in a browser**

Open `index.html` in a browser and scroll to `#work`. Expected:
- Desktop: CampusQ (left) + Rent-ERP (right) as two equal cards; Angular libraries full-width beneath.
- Rent-ERP card has **no** link, a lock glyph + "Source private · single-org product" note, no `→` arrow; hover still lifts the card but the cursor is not a pointer over empty areas.
- CampusQ and npm cards still link out.
- Narrow the window < 860px: all three stack in one column, no overflow.
- DevTools console: no errors.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "Add Rent-ERP work card; feature CampusQ + Rent-ERP, library full-width"
```

---

### Task 2: Reflect cross-platform work in skills + metadata (`index.html`)

**Files:**
- Modify: `index.html` — JSON-LD `knowsAbout` (line ~69); `<meta name="keywords">` (line ~22); Skills → Frontend list (lines ~615–624)

**Interfaces:**
- Consumes: nothing. Produces: nothing beyond visible/meta content.

- [ ] **Step 1: Add React Native to the Frontend skills list**

Replace:
```html
            <li><i></i>Next.js · React</li>
            <li><i></i>PrimeNG · Material</li>
```
with:
```html
            <li><i></i>Next.js · React</li>
            <li><i></i>React Native (Expo)</li>
            <li><i></i>PrimeNG · Material</li>
```

- [ ] **Step 2: Add React Native to JSON-LD `knowsAbout`**

Replace:
```html
  "knowsAbout": ["Angular", "TypeScript", "RxJS", "NgRx Signals", "React", "Next.js", ".NET", "Node.js", "PostgreSQL", "Redis", "Docker", "Playwright"],
```
with:
```html
  "knowsAbout": ["Angular", "TypeScript", "RxJS", "NgRx Signals", "React", "React Native", "Next.js", ".NET", "Node.js", "PostgreSQL", "Redis", "Docker", "Playwright"],
```

- [ ] **Step 3: Add React Native to the meta keywords**

Replace:
```html
<meta name="keywords" content="Saiful Islam, software engineer, Angular developer, .NET developer, full-stack developer, NgRx Signals, TypeScript, PostgreSQL, Dhaka, Bangladesh" />
```
with:
```html
<meta name="keywords" content="Saiful Islam, software engineer, Angular developer, .NET developer, full-stack developer, React Native, NgRx Signals, TypeScript, PostgreSQL, Dhaka, Bangladesh" />
```

- [ ] **Step 4: Verify**

Reload `index.html`; Skills → Frontend shows "React Native (Expo)". Confirm the JSON-LD still parses (no trailing-comma / bracket errors) — paste the `<script type="application/ld+json">` block into a JSON validator or run `node -e "JSON.parse(require('fs').readFileSync('...','utf8').match(/<script type=\"application\/ld\+json\">([\s\S]*?)<\/script>/)[1])"`.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "Surface React Native across skills and structured data"
```

---

### Task 3: Resume — typos + Rent-ERP entry (`resume.docx`)

**Files:**
- Modify: `resume.docx` (in-place rewrite of `word/document.xml`)
- Backup: `resume.docx.bak` (scratchpad copy; git also retains the committed original)

**Interfaces:**
- Consumes: the confirmed Rent-ERP resume copy (below). Produces: an updated, Word-valid `.docx`.

- [ ] **Step 1: Back up the original**

```powershell
Copy-Item "D:\me-dev\saiful-70\resume.docx" "$env:TEMP\resume.docx.bak" -Force
```

- [ ] **Step 2: Patch `word/document.xml` in place**

Run this PowerShell (fixes both typos, inserts the Rent-ERP paragraph before the "Open Source" entry, identified by its unique `w14:paraId="0000002D"`):
```powershell
$path = "D:\me-dev\saiful-70\resume.docx"
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem

$rentPara = @'
<w:p w:rsidR="00000000" w:rsidDel="00000000" w:rsidP="00000000" w:rsidRDefault="00000000" w:rsidRPr="00000000"><w:pPr><w:pStyle w:val="Heading3"/><w:keepNext w:val="1"/><w:spacing w:after="60" w:before="200" w:line="276" w:lineRule="auto"/><w:rPr><w:b w:val="0"/><w:bCs w:val="0"/></w:rPr></w:pPr><w:r><w:rPr><w:b w:val="1"/><w:bCs w:val="1"/><w:rtl w:val="0"/></w:rPr><w:t xml:space="preserve">Rent-ERP</w:t></w:r><w:r><w:rPr><w:b w:val="0"/><w:bCs w:val="0"/><w:rtl w:val="0"/></w:rPr><w:t xml:space="preserve"> — Single-organisation property-management ERP across three surfaces — .NET 10 modular monolith · Angular 21 admin console · React Native (Expo) tenant/employee app. Property hierarchy, per-tenant billing with bKash, accounting, HRM, and SMS/FCM notifications; permission-bitmask roles with persona switching; auto-migrate + seed, no SQL scripts. Reuses the CampusQ architecture, minus the multi-tenant SaaS layer.</w:t></w:r></w:p>
'@.Trim()

$zip = [System.IO.Compression.ZipFile]::Open($path, 'Update')
try {
  $entry = $zip.GetEntry('word/document.xml')
  $sr = New-Object IO.StreamReader($entry.Open())
  $doc = $sr.ReadToEnd(); $sr.Close()

  $doc = $doc.Replace('Claudde', 'Claude')
  $doc = $doc.Replace('1st Runners-Up Prize', '1st Runner-Up Prize')

  $rx = [regex]'<w:p\b[^>]*w14:paraId="0000002D"[^>]*>'
  $count = $rx.Matches($doc).Count
  if ($count -ne 1) { throw "Anchor paraId 0000002D matched $count times (expected 1) — aborting." }
  $doc = $rx.Replace($doc, { param($m) $rentPara + $m.Value }, 1)

  $s = $entry.Open(); $s.SetLength(0)
  $sw = New-Object IO.StreamWriter($s, (New-Object System.Text.UTF8Encoding($false)))
  $sw.Write($doc); $sw.Flush(); $sw.Close()
} finally { $zip.Dispose() }
Write-Host "patched"
```

- [ ] **Step 3: Validate XML well-formedness + content**

```powershell
$path = "D:\me-dev\saiful-70\resume.docx"
Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem
$zip = [System.IO.Compression.ZipFile]::OpenRead($path)
$e = $zip.Entries | ? { $_.FullName -eq 'word/document.xml' }
$sr = New-Object IO.StreamReader($e.Open()); $xml = $sr.ReadToEnd(); $sr.Close(); $zip.Dispose()
[xml]$parsed = $xml   # throws if malformed
$ok = ($xml -match 'Rent-ERP') -and ($xml -notmatch 'Claudde') -and ($xml -match '1st Runner-Up Prize') -and ($xml -notmatch '1st Runners-Up Prize')
Write-Host "well-formed + content check: $ok"
```
Expected: `well-formed + content check: True` and no exception.

- [ ] **Step 4: Validate it opens cleanly in Word**

```powershell
$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.DisplayAlerts = 0   # wdAlertsNone — suppress any repair prompt so the call can't hang
try {
  $d = $word.Documents.Open("D:\me-dev\saiful-70\resume.docx", $false, $true)  # readonly
  Write-Host ("paragraphs: " + $d.Paragraphs.Count)
  $d.Close($false)
} finally { $word.Quit(); [Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null }
```
Expected: prints a paragraph count, no error, no hang. (If Word reports corruption it will fail here — restore from `$env:TEMP\resume.docx.bak` and fall back to Word COM-driven editing.)

- [ ] **Step 5: Commit**

```bash
git add resume.docx
git commit -m "Resume: add Rent-ERP side project; fix Claude/Runner-Up typos"
```

---

### Task 4: Full-page verification & finish

**Files:** none (verification only)

- [ ] **Step 1: Whole-page browser pass**

Open `index.html`. Confirm end-to-end: hero + signal graph animate; work section shows the 3 cards in the intended layout; hover states; mobile breakpoints at 860/600px; reduced-motion (emulate in DevTools) disables animation; no console errors; existing links resolve.

- [ ] **Step 2: Confirm the working tree is clean and review the diff**

```bash
git status
git log --oneline main..content/rent-erp
git diff --stat main..content/rent-erp
```
Expected: only `index.html`, `resume.docx`, and the `docs/superpowers/` spec+plan changed.

- [ ] **Step 3: Finish the branch**

Use the superpowers:finishing-a-development-branch skill to choose merge / PR / cleanup (your history uses PRs into `main`).

---

## Self-Review

**1. Spec coverage:**
- Work layout (two featured + wide library) → Task 1 ✓
- Rent-ERP no-link private badge → Task 1 (`.card-note`, lock, no arrow) ✓
- Sharpen CampusQ + library copy → Task 1 ✓
- React Native in skills / JSON-LD / keywords → Task 2 ✓
- Proof strip unchanged → not touched by any task ✓
- Resume typos + Rent-ERP entry, styling preserved, backup, Word validation → Task 3 ✓
- Out-of-scope items (new sections, case study, metrics band) → absent from all tasks ✓

**2. Placeholder scan:** No TBD/TODO; every code/copy step shows the exact content. ✓

**3. Type/name consistency:** `.card--wide` and `.card-note` defined in Task 1 Step 1 and used in Task 1 Step 2; lock `<svg class="lock">` matches `.card-note .lock` selector; docx anchor `w14:paraId="0000002D"` matches the confirmed XML. ✓

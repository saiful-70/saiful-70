# Saiful Islam

Software engineer in **Dhaka, Bangladesh** (UTC+6), open to remote. 3.5+ years building
**reactive, signals-first** interfaces in **Angular** and **React** — and the **.NET / Node**
behind them, down to the database and the monitoring that watches it.

[![Portfolio](https://img.shields.io/badge/Portfolio-0B6B37?style=for-the-badge&logo=googlechrome&logoColor=white)](https://saiful-70.github.io/saiful-70/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge)](https://www.linkedin.com/in/saiful70/)
[![Email](https://img.shields.io/badge/Email-14171A?style=for-the-badge&logo=gmail&logoColor=EA4335)](mailto:saiful70.me@gmail.com)
[![CampusQ](https://img.shields.io/badge/CampusQ-14171A?style=for-the-badge&logo=googleclassroom&logoColor=0B6B37)](https://campusqbd.com)
[![npm](https://img.shields.io/badge/ngx--primeng--toolkit-14171A?style=for-the-badge&logo=npm&logoColor=CB3837)](https://www.npmjs.com/package/ngx-primeng-toolkit)

| Experience | ERP platforms | Products | Observability | Base |
| --- | --- | --- | --- | --- |
| **3.5+ years** | **4** shipped | **6+** live | self-hosted **LGTM** | Dhaka · UTC+6 |

---

## The shape of what I build

Three surfaces, one typed API, one tenant-isolated database, watched by its own telemetry.

<img alt="Architecture: three client surfaces feed a signals-first client layer, which talks over typed permission-checked HTTP to a .NET API split into ERP and QMS modules, backed by PostgreSQL with row-level security, Redis and S3 or MinIO, with a self-hosted LGTM observability stack watching all of it." src="assets/stack-light.svg#gh-light-mode-only" width="100%">
<img alt="Architecture: three client surfaces feed a signals-first client layer, which talks over typed permission-checked HTTP to a .NET API split into ERP and QMS modules, backed by PostgreSQL with row-level security, Redis and S3 or MinIO, with a self-hosted LGTM observability stack watching all of it." src="assets/stack-dark.svg#gh-dark-mode-only" width="100%">

---

## Where the hours went

| Period | Company | Stack |
| --- | --- | --- |
| 2026-03 → | **Netpower** — Software Engineer | Angular 21 · **Certain QMS** |
| 2024-09 → 2026-02 | **MultiTech Systems** — Software Engineer | Angular 19+ · .NET 10 |
| 2023-02 → 2024-08 | **Constant Concept** — Angular Developer | Remote · International |

Four enterprise ERP platforms, a recursive permission system, and CI/CD on multi-stage
Docker behind Nginx. Modules I have built and shipped: access control, accounting, HR,
production and inventory on the ERP side; deviation, checklist, handbook, compliance and
settings on the QMS side. I work **AI-native** — Claude, Cursor, Ollama and OpenCode as a
force multiplier, not a shortcut.

---

## Things I shipped on my own time

| Project | What it is | Status |
| --- | --- | --- |
| **[CampusQ](https://campusqbd.com)** | Multi-tenant coaching-management SaaS — tenant isolation via Postgres RLS, bitmask RBAC, online exams, bKash/Nagad payments, PWA + push, bilingual (en/bn). Runs behind a self-hosted LGTM stack: OpenTelemetry traces into Tempo, Prometheus metrics, Loki logs, Grafana alerts to Telegram. `.NET 10 · Angular 21 · Next.js 16` | live |
| **Rent-ERP** | Single-org property-management ERP across three surfaces — .NET 10 modular monolith, Angular 21 admin console, and a React Native app serving tenants & staff. Property hierarchy, per-tenant billing with bKash, accounting, HRM, SMS/FCM notifications. `.NET 10 · Angular 21 · React Native` | source private |
| **[ngx-primeng-toolkit](https://www.npmjs.com/package/ngx-primeng-toolkit)** | Open-source Angular library — parameterized query/table state, memoized data & reusable utilities, released to npm with automated CI/CD. | published |
| **[DebuggerMind Commerce](https://www.pogiit.com/)** | In-house white-label storefront (Next.js 15 + .NET API) — international build and a localized Bengali variant maintained in parallel, 6 languages. | live |

---

## The stack it all runs on

**Frontend**

![Angular](https://img.shields.io/badge/Angular-14171A?style=flat-square&logo=angular&logoColor=DD0031)
![TypeScript](https://img.shields.io/badge/TypeScript-14171A?style=flat-square&logo=typescript&logoColor=3178C6)
![RxJS](https://img.shields.io/badge/RxJS-14171A?style=flat-square&logo=reactivex&logoColor=B7178C)
![NgRx Signals](https://img.shields.io/badge/NgRx%20Signals-14171A?style=flat-square&logo=ngrx&logoColor=BA2BD2)
![React](https://img.shields.io/badge/React-14171A?style=flat-square&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-14171A?style=flat-square&logo=nextdotjs&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native%20%28Expo%29-14171A?style=flat-square&logo=expo&logoColor=white)
![PrimeNG](https://img.shields.io/badge/PrimeNG-14171A?style=flat-square&logo=primeng&logoColor=DD0031)
![Angular Material](https://img.shields.io/badge/Angular%20Material-14171A?style=flat-square&logo=materialdesign&logoColor=B0BEC5)
![Tailwind](https://img.shields.io/badge/Tailwind%20v4-14171A?style=flat-square&logo=tailwindcss&logoColor=06B6D4)
![Chart.js](https://img.shields.io/badge/Chart.js-14171A?style=flat-square&logo=chartdotjs&logoColor=FF6384)

**Backend & data**

![.NET](https://img.shields.io/badge/.NET%20%28Core%20%2F%2010%29-14171A?style=flat-square&logo=dotnet&logoColor=8A6EE0)
![Node.js](https://img.shields.io/badge/Node.js-14171A?style=flat-square&logo=nodedotjs&logoColor=5FA04E)
![Express](https://img.shields.io/badge/Express-14171A?style=flat-square&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL%20%28RLS%29-14171A?style=flat-square&logo=postgresql&logoColor=6A8FE8)
![MongoDB](https://img.shields.io/badge/MongoDB-14171A?style=flat-square&logo=mongodb&logoColor=47A248)
![Redis](https://img.shields.io/badge/Redis-14171A?style=flat-square&logo=redis&logoColor=FF4438)
![MySQL](https://img.shields.io/badge/MySQL-14171A?style=flat-square&logo=mysql&logoColor=7FA8D0)
![Firebase](https://img.shields.io/badge/Firebase-14171A?style=flat-square&logo=firebase&logoColor=FFCA28)
![REST](https://img.shields.io/badge/RESTful%20APIs-14171A?style=flat-square)

**Testing**

![Playwright](https://img.shields.io/badge/Playwright%20%28e2e%29-14171A?style=flat-square)
![Vitest](https://img.shields.io/badge/Vitest-14171A?style=flat-square&logo=vitest&logoColor=6E9F18)
![Synthetic data factories](https://img.shields.io/badge/synthetic%20data%20factories-14171A?style=flat-square)

**DevOps & infra**

![Docker](https://img.shields.io/badge/Docker-14171A?style=flat-square&logo=docker&logoColor=2496ED)
![Nginx](https://img.shields.io/badge/Nginx-14171A?style=flat-square&logo=nginx&logoColor=009639)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-14171A?style=flat-square&logo=githubactions&logoColor=2088FF)
![Azure DevOps](https://img.shields.io/badge/Azure%20DevOps-14171A?style=flat-square)
![AWS](https://img.shields.io/badge/AWS-14171A?style=flat-square)
![Linux](https://img.shields.io/badge/Linux-14171A?style=flat-square&logo=linux&logoColor=FCC624)
![Git](https://img.shields.io/badge/Git-14171A?style=flat-square&logo=git&logoColor=F05032)

**Observability**

![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-14171A?style=flat-square&logo=opentelemetry&logoColor=white)
![Prometheus](https://img.shields.io/badge/Prometheus-14171A?style=flat-square&logo=prometheus&logoColor=E6522C)
![Grafana](https://img.shields.io/badge/Grafana-14171A?style=flat-square&logo=grafana&logoColor=F46800)
![Loki](https://img.shields.io/badge/Loki-14171A?style=flat-square&logo=grafana&logoColor=F46800)
![Tempo](https://img.shields.io/badge/Tempo-14171A?style=flat-square&logo=grafana&logoColor=F46800)

**AI & dev tools**

![Claude](https://img.shields.io/badge/Claude-14171A?style=flat-square&logo=anthropic&logoColor=D97757)
![Cursor](https://img.shields.io/badge/Cursor-14171A?style=flat-square&logo=cursor&logoColor=white)
![OpenCode](https://img.shields.io/badge/OpenCode-14171A?style=flat-square&logo=opensourceinitiative&logoColor=3DA639)
![Ollama](https://img.shields.io/badge/Ollama%20%28local%20LLMs%29-14171A?style=flat-square&logo=ollama&logoColor=white)
![GitHub Copilot](https://img.shields.io/badge/GitHub%20Copilot-14171A?style=flat-square&logo=githubcopilot&logoColor=white)

Ask me about **Angular Signals**, **multi-tenant architecture**, **Postgres RLS**,
**cross-platform React Native**, **.NET**, and **self-hosting an observability stack
that fits on one VPS**. Open to collaboration.

---

## At a glance

<p>
  <img alt="Profile summary for saiful-70" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=saiful-70&theme=github_dark#gh-dark-mode-only" width="100%" />
  <img alt="Repositories per language for saiful-70" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=saiful-70&theme=github_dark#gh-dark-mode-only" height="200" />
  <img alt="Most-committed language for saiful-70" src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=saiful-70&theme=github_dark#gh-dark-mode-only" height="200" />
  <img alt="Contribution streak for saiful-70" src="https://streak-stats.demolab.com/?user=saiful-70&hide_border=true&background=0B0D0F&stroke=2A2D31&ring=7CFF9E&fire=FFB000&currStreakLabel=7CFF9E&currStreakNum=F2F5F5&sideLabels=9AA3A5&sideNums=F2F5F5&dates=828A8D#gh-dark-mode-only" height="200" />
</p>
<p>
  <img alt="Profile summary for saiful-70" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=saiful-70&theme=github#gh-light-mode-only" width="100%" />
  <img alt="Repositories per language for saiful-70" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=saiful-70&theme=github#gh-light-mode-only" height="200" />
  <img alt="Most-committed language for saiful-70" src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=saiful-70&theme=github#gh-light-mode-only" height="200" />
  <img alt="Contribution streak for saiful-70" src="https://streak-stats.demolab.com/?user=saiful-70&hide_border=true&background=F4F4F0&stroke=C2C6CA&ring=0B6B37&fire=97590A&currStreakLabel=0B6B37&currStreakNum=14171A&sideLabels=2E3539&sideNums=14171A&dates=545C61#gh-light-mode-only" height="200" />
</p>

---

## Elsewhere

| Platform | Handle | Profile |
| --- | --- | --- |
| LeetCode | `saiful70` | [leetcode.com/saiful70](https://leetcode.com/saiful70/) |
| Codewars | `saiful70` | [codewars.com/users/saiful70](https://www.codewars.com/users/saiful70) |
| Codeforces | `KhaWareZmI` | [codeforces.com/profile/KhaWareZmI](https://codeforces.com/profile/KhaWareZmI) |

<sub>Dhaka, BD · UTC+6 · <a href="https://saiful-70.github.io/saiful-70/">saiful-70.github.io/saiful-70</a></sub>

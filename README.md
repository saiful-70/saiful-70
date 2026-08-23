# Saiful Islam

Software engineer in **Dhaka, Bangladesh** (UTC+6), open to remote. 3.5+ years building
**reactive, signals-first** interfaces in **Angular** and **React** — and the **.NET / Node**
behind them, down to the database and the monitoring that watches it.

[Portfolio](https://saiful-70.github.io/saiful-70/) · [LinkedIn](https://www.linkedin.com/in/saiful70/) · [Email](mailto:saiful70.me@gmail.com) · [CampusQ](https://campusqbd.com) · [npm](https://www.npmjs.com/package/ngx-primeng-toolkit)

---

## The shape of what I build

Three surfaces, one typed API, one tenant-isolated database, watched by its own telemetry.

```
┌────────────────────┐ ┌────────────────────┐ ┌────────────────────┐
│ WEB APP            │ │ ADMIN CONSOLE      │ │ MOBILE             │
│ Angular · signals  │ │ Angular · scoped   │ │ React Native       │
└─────────┬──────────┘ └─────────┬──────────┘ └─────────┬──────────┘
          └──────────────────────┼──────────────────────┘
┌────────────────────────────────┴─────────────────────────────────┐
│ SIGNALS-FIRST CLIENT LAYER                                       │
│ NgRx Signal stores · standalone components · lazy feature routes │
└────────────────────────────────┬─────────────────────────────────┘
                                 │  typed HTTP, permission-checked
┌────────────────────────────────┴─────────────────────────────────┐
│ .NET API                                                         │
│ Clean Architecture · DDD · modular monolith · Result pattern     │
├────────────────────────────────┬─────────────────────────────────┤
│ ERP                            │ QMS                             │
│ access control · accounting    │ deviation · checklist           │
│ HR · production · inventory    │ handbook · compliance · settings│
└─────────┬──────────────────────┴──────────────────────┬──────────┘
          │                      │                      │
┌─────────┴──────────┐ ┌─────────┴──────────┐ ┌─────────┴──────────┐
│ POSTGRESQL         │ │ REDIS              │ │ S3 · MINIO         │
│ RLS · bitmask RBAC │ │ cache · sessions   │ │ tokenized uploads  │
└────────────────────┘ └────────────────────┘ └────────────────────┘
                                 ╎  telemetry, out of band
┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┐
┆ OBSERVABILITY — self-hosted LGTM                                 ┆
┆ OpenTelemetry → Alloy → Tempo · Prometheus scrapes a token-gated ┆
┆ /metrics · container logs → Loki · Grafana dashboards and alert  ┆
┆ rules → Telegram · prod and staging on one stack, split by label ┆
└┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┘
```

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

```
FRONTEND         Angular · TypeScript · RxJS · NgRx Signals · React
                 React Native (Expo) · Next.js · PrimeNG · Material
                 Tailwind CSS v4 · Chart.js

BACKEND & DATA   .NET (Core / 10) · Node.js · Express · RESTful APIs
                 PostgreSQL (RLS) · MongoDB · Redis · MySQL · Firebase

TESTING          Playwright (e2e) · Vitest · synthetic data factories

DEVOPS & INFRA   Docker · Nginx · GitHub Actions · Azure DevOps · AWS
                 Linux · Git
                 OpenTelemetry · Prometheus · Grafana · Loki · Tempo

AI & DEV TOOLS   Claude · Cursor · OpenCode · Ollama (local LLMs)
                 GitHub Copilot
```

Ask me about **Angular Signals**, **multi-tenant architecture**, **Postgres RLS**,
**cross-platform React Native**, **.NET**, and **self-hosting an observability stack
that fits in a VPS**. Open to collaboration.

---

## Elsewhere

| Platform | Handle | Profile |
| --- | --- | --- |
| LeetCode | `saiful70` | [leetcode.com/saiful70](https://leetcode.com/saiful70/) |
| Codewars | `saiful70` | [codewars.com/users/saiful70](https://www.codewars.com/users/saiful70) |
| Codeforces | `KhaWareZmI` | [codeforces.com/profile/KhaWareZmI](https://codeforces.com/profile/KhaWareZmI) |

<sub>Dhaka, BD · UTC+6 · <a href="https://saiful-70.github.io/saiful-70/">saiful-70.github.io/saiful-70</a></sub>

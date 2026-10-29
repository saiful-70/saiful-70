# Saiful Islam

Software engineer in **Dhaka, Bangladesh** (UTC+6), working remote. I turn how a business
actually runs into software that ships: **backend, web, mobile, deploy**, and the alerts that
watch it.

Spec first. AI agents write most of the code. I own what gets built, what gets cut, and the
gate it has to pass.

[![Portfolio](https://img.shields.io/badge/Portfolio-0B6B37?style=for-the-badge&logo=googlechrome&logoColor=white)](https://saiful-70.github.io/saiful-70/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge)](https://www.linkedin.com/in/saiful70/)
[![Email](https://img.shields.io/badge/Email-14171A?style=for-the-badge&logo=gmail&logoColor=EA4335)](mailto:saiful70.me@gmail.com)
[![CampusQ](https://img.shields.io/badge/CampusQ-14171A?style=for-the-badge&logo=googleclassroom&logoColor=0B6B37)](https://campusqbd.com)
[![Resume](https://img.shields.io/badge/Resume-14171A?style=for-the-badge&logo=googledocs&logoColor=4285F4)](https://docs.google.com/document/d/1XCH0XdS_Svnb2OGRJEQBvJOm1GXuifI1/edit?usp=sharing&ouid=114028785100709203490&rtpof=true&sd=true)

---

### How I build

| Step | Example |
| --- | --- |
| Find out how the business really runs | A property ERP billed as if the org were the landlord. It isn't; it sells a service to flat owners. |
| Change the model, not the screen | Rebuilt money into three tracks that never mix: rent, service charge, org accounts. |
| Decide what not to build | Dropped a planned mobile API service; the app calls the existing APIs through the gateway. |
| Ship every surface myself | Offline document app for field workers: sign-in, outbox, background sync, 405 tests, three weeks. |
| Put a gate behind it | The SaaS refuses to boot if any tenant table is missing a row-level security policy. |

### Products

| Product | For | The call | Status |
| --- | --- | --- | --- |
| **Certain QMS** (Netpower) | Quality managers, HSE staff and field workers at industrial companies | Treated a dead "evaluate this measure" link as a migration blocker; shipped evaluation, an offline Handbook app and one sign-in for all apps | in production |
| **[CampusQ](https://campusqbd.com)** | Coaching centres in Bangladesh running on paper and a personal mobile-money number | Built for the niche: Bangla first, guardian SMS without accounts, printed receipts; isolation checked at boot | live, pre-revenue |
| **Rent-ERP** | An organisation managing residential buildings for flat owners | The org is not the landlord: rent, service charge and org accounts never mix | in production, private |
| **Footwear ERP** (MultiTech) | Merchandisers and stores staff at a footwear factory | Re-platformed a garment ERP instead of starting over; QR document capture, Excel order intake | in production |
| **Institute payments** (freelance, 2025-06 →) | Two coaching institutes confirming fees by hand | One shared gateway with signed callbacks, no shared database | in production, private |
| **Family Connect App** | Families keeping health records offline, each person with their own login | Health data sensitive by default: encrypted phone database, export and hard delete | in acceptance |
| **[DebuggerMind Commerce](https://pogiecom.pogiit.com)** | Shoppers on low-end Android paying cash on delivery | One storefront codebase for many merchants; onboarding is one file, no fork | live |

### Things I removed

- Payment gateway integration in CampusQ. Manual transfer plus an operator check was enough for the first customers.
- Eight AI features in CampusQ, removed in eight slices with no migration.
- A separate mobile API service at Netpower. The existing module APIs, through the gateway, did the job.
- PDF input in the AI register importer. Spreadsheets only, so there is no OCR path to maintain.
- The multi-tenant layer in Rent-ERP. One organisation: no row-level security, no subdomains.
- Persona switching in Rent-ERP, in favour of plain roles.
- Fabricated stats and testimonials on the CampusQ marketing site, with a production cleanup script.

### Open source

**[Optimus UI](https://github.com/openng-org/optimus-ui)**: one merged fix. Row grouping crashed
with an empty sort array; regression tests included. It is the component layer under CampusQ, so
the fix runs where I can see it.
[![Stars](https://img.shields.io/github/stars/openng-org/optimus-ui?style=flat-square&label=stars&labelColor=14171A&color=0B6B37)](https://github.com/openng-org/optimus-ui/stargazers)
[![Docs](https://img.shields.io/badge/optimus.openng.org-14171A?style=flat-square&logo=angular&logoColor=DD0031)](https://optimus.openng.org/)

**[ngx-primeng-toolkit](https://www.npmjs.com/package/ngx-primeng-toolkit)**: table and
query-state helpers extracted from ERP work, published to npm with CI.

---

### Stack

**Frontend**

![Angular](https://img.shields.io/badge/Angular-14171A?style=flat-square&logo=angular&logoColor=DD0031)
![TypeScript](https://img.shields.io/badge/TypeScript-14171A?style=flat-square&logo=typescript&logoColor=3178C6)
![RxJS](https://img.shields.io/badge/RxJS-14171A?style=flat-square&logo=reactivex&logoColor=B7178C)
![NgRx Signals](https://img.shields.io/badge/NgRx%20Signals-14171A?style=flat-square&logo=ngrx&logoColor=BA2BD2)
![React](https://img.shields.io/badge/React-14171A?style=flat-square&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-14171A?style=flat-square&logo=nextdotjs&logoColor=white)
![React Native](https://img.shields.io/badge/React%20Native%20%28Expo%29-14171A?style=flat-square&logo=expo&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-14171A?style=flat-square&logo=flutter&logoColor=02569B)
![PrimeNG](https://img.shields.io/badge/PrimeNG-14171A?style=flat-square&logo=primeng&logoColor=DD0031)
![Optimus UI](https://img.shields.io/badge/Optimus%20UI-14171A?style=flat-square&logo=angular&logoColor=DD0031)
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

---

### At a glance

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/stats-dark.svg">
  <img alt="GitHub at a glance for saiful-70: public repositories, stars earned, year joined, and language mix." src="assets/stats-light.svg" width="100%">
</picture>

<sub>Rendered from the GitHub API into a committed SVG and refreshed weekly by
<a href=".github/workflows/profile-stats.yml">a workflow</a> — no card service to go down.</sub>

---

### Elsewhere

| Platform | Handle | Profile |
| --- | --- | --- |
| LeetCode | `saiful70` | [leetcode.com/saiful70](https://leetcode.com/saiful70/) |
| Codewars | `saiful70` | [codewars.com/users/saiful70](https://www.codewars.com/users/saiful70) |
| Codeforces | `KhaWareZmI` | [codeforces.com/profile/KhaWareZmI](https://codeforces.com/profile/KhaWareZmI) |

<sub>Dhaka, BD · UTC+6 · <a href="https://saiful-70.github.io/saiful-70/">saiful-70.github.io/saiful-70</a></sub>

# Master Baseline Audit Report: AR Engineering Modernization

**Project:** AR Engineering Modernization (Laravel 13 + React 19)  
**Phase:** Phase 1 — Comprehensive Baseline Audit (Audit Only)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  
**Audit Scope:** 100% Repository Codebase Inspection  

---

## A. Executive Summary

This baseline audit presents a comprehensive, evidence-based assessment of the **AR Engineering** web application codebase prior to beginning modernization, refactoring, testing, and optimization.

The application is structured as a single-repository monolithic web application combining a **Laravel 13 (PHP 8.3)** backend with a **React 19** frontend orchestrated via **Vite 8** and **Tailwind CSS v4**.

### Key Executive Observations
1. **Core Features Functional but Inconsistently Architected:** The core CMS modules (Homepage, Services, About, Contact, Careers, FAQ, Clients) are operational, but dynamic data flow is fractured. Several public pages (e.g., Portfolio, How We Work) bypass the backend database entirely and rely on static hardcoded JavaScript arrays.
2. **Critical DevOps & Deployment Risks:** The production [Dockerfile](file:///c:/Users/khademul/Herd/ar_frontend/Dockerfile) contains a destructive `CMD` running `php artisan migrate:fresh --seed` on container startup, which would wipe all production data on every restart/deploy, and executes `php artisan serve` instead of a production-grade web server.
3. **Application Security & Privacy Gaps:** Public submission endpoints (Contact, Careers) lack rate limiting. Candidate resumes (dossiers containing PII) are stored in a publicly accessible directory. Unauthenticated requests to `/api/home?admin=1` bypass active status checks and reveal hidden/draft content.
4. **Testing Debt:** Automated test coverage across custom application logic is **0%** (only 2 default skeleton example tests exist).
5. **Architectural Monoliths:** Admin manager components are giant single-file monoliths (up to 1,400 lines / 96 KB per component) mixing multi-model state, forms, modals, tables, and file uploads.

---

## B. Technology & Architecture Summary

| Component | Technology | Version | Key Architectural Finding |
| :--- | :--- | :--- | :--- |
| **Backend Runtime** | PHP | `8.3.0` | Configured via `composer.json` platform requirement |
| **Backend Framework**| Laravel | `^13.8` | Modern Laravel bootstrap in [bootstrap/app.php](file:///c:/Users/khademul/Herd/ar_frontend/bootstrap/app.php) |
| **Routing Pattern** | Hybrid Web-API | N/A | [routes/api.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/api.php) is dormant; all API routes reside in [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php) under `/api/*` |
| **Frontend Framework**| React | `^19.2.7` | Modern React 19 with dual mount targets (`#frontend-app`, `#admin-app`) |
| **Client Router** | React Router DOM | `^7.18.1` | Public router and Admin router with `basename="/admin-portal"` |
| **Styling** | Tailwind CSS | `^4.0.0` | Next-gen Tailwind v4 using `@theme` block in [resources/css/app.css](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css) |
| **Build Bundler** | Vite | `^8.0.0` | Managed via `laravel-vite-plugin` and `@tailwindcss/vite` |
| **Database Support**| SQLite / MySQL / PgSQL| N/A | SQLite default dev; MySQL/PostgreSQL drivers enabled in Docker |

---

## C. Feature Inventory

| Feature / Module | Backend Handler | Frontend Handler | Status | Key Evidence |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage CMS** | `HomeController`, `Admin\HomeController` | `Home.jsx`, `HomepageManager.jsx` | **Partial** | Full CRUD works, but unauthenticated `?admin=1` exposes draft items. |
| **Services Catalog** | `ServiceController`, `Admin\ServiceController` | `Services.jsx`, `ServiceDetail.jsx`, `ServicesManager.jsx` | **Complete** | Category grouping, specs JSON, detail metrics all functional. |
| **About Us CMS** | `AboutPageController`, `Admin\AboutManagerController` | `About.jsx`, `AboutManager.jsx` | **Partial** | Public query does not filter by `is_active` for pillars, advisors, team, milestones. |
| **Contact Inquiries**| `ContactPageController`, `Admin\ContactManagerController` | `Contact.jsx`, `ContactManager.jsx` | **Complete** | Form stores to DB and displays in admin; no rate limiting or email alerts. |
| **Careers & Vacancies**| `CareersPageController`, `Admin\CareersManagerController` | `Careers.jsx`, `CareersManager.jsx` | **Security Risk** | Resumes stored in public disk; hardcoded "Titan HR" copy in response. |
| **FAQ Management** | `FaqController`, `Admin\FaqManagerController` | `FAQ.jsx`, `FaqManager.jsx` | **Complete** | Paginated admin CRUD, public accordion view. |
| **Clients & Partners**| `ClientPageController`, `Admin\ClientManagerController` | `Clients.jsx`, `ClientsManager.jsx` | **Inconsistent** | Migration and Seeder data duplication; otherwise fully functional. |
| **Operational Workflow**| `HomeController` | `HowWeWork.jsx` | **Broken/Static** | `HowWeWork.jsx` does not consume backend `home_processes` data. |
| **Portfolio Showcase**| `HomeProject` | `Portfolio.jsx` | **Broken/Static** | `Portfolio.jsx` relies on a 600-line hardcoded static array. |
| **Pricing / Tenders**| None | `Pricing.jsx` | **Orphaned** | Page component exists but is not registered in routes. |
| **Project Demo Case**| None | `ProjectDemo.jsx` | **Stub** | Static "Working on it" placeholder view. |
| **System Console** | `Admin\CommandController` | `SystemCommands.jsx` | **Partial** | Direct `env()` call fails under `config:cache`. |
| **Admin Placeholder Tabs**| None | `Products.jsx`, `Orders.jsx`, `Users.jsx`, `Analytics.jsx`, `Notifications.jsx`, `Settings.jsx`, `Profile.jsx` | **Mockups** | 8 non-functional mockup pages copied from starter theme. |

---

## D. Screen & Page Inventory

### Public Screens
1. **Home (`/`)**: [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx) — Dynamic hero, capabilities, methodology, leadership, competencies, projects, partners.
2. **About Us (`/about`)**: [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx) — Dynamic pillars, advisors, leadership, timeline.
3. **Services (`/services`)**: [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx) — Categorized service grid, zero-downtime block, CTA.
4. **Service Detail (`/services/:slug`)**: [ServiceDetail.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx) — Detail specs table, metric highlights.
5. **How We Work (`/how-we-work`)**: [HowWeWork.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/HowWeWork.jsx) — 5-phase execution HUD (Static).
6. **Partners & Clients (`/clients`)**: [Clients.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Clients.jsx) — Clients, solution partners, testimonials.
7. **Careers (`/careers`)**: [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx) — Openings accordion, application modal.
8. **Portfolio (`/portfolio`)**: [Portfolio.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Portfolio.jsx) — Project cards with modal details (Static).
9. **Contact (`/contact`)**: [Contact.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx) — Contact form, emergency protocol cards.
10. **FAQ (`/faq`)**: [FAQ.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx) — Searchable FAQ accordion.
11. **Project Demo (`/project-demo`)**: [ProjectDemo.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ProjectDemo.jsx) — Static placeholder.
12. **Pricing (`/pricing` - Unrouted)**: [Pricing.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Pricing.jsx) — Pricing tiers.

### Admin Screens (`/admin-portal/*`)
1. **Login (`/admin-portal/login`)**: [login.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/login.blade.php) — Session-based authentication form.
2. **Dashboard (`/admin-portal`)**: [Dashboard.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Dashboard.jsx) — Static dashboard mockup.
3. **Homepage Manager (`/admin-portal/homepage`)**: [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx) — 7-in-1 entity manager.
4. **Services Manager (`/admin-portal/services-manager`)**: [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx) — Services and categories CRUD.
5. **About Manager (`/admin-portal/about-manager`)**: [AboutManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx) — Pillars, advisors, team, milestones CRUD.
6. **Contact Manager (`/admin-portal/contact-manager`)**: [ContactManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ContactManager.jsx) — Settings & inquiry list.
7. **Careers Manager (`/admin-portal/careers-manager`)**: [CareersManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx) — Vacancies & applications management.
8. **FAQ Manager (`/admin-portal/faq-manager`)**: [FaqManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/FaqManager.jsx) — FAQ CRUD.
9. **Clients Manager (`/admin-portal/clients-manager`)**: [ClientsManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ClientsManager.jsx) — Clients, partners, testimonials CRUD.
10. **System Commands (`/admin-portal/system-commands`)**: [SystemCommands.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx) — Maintenance runner.
11. **Dummy Pages (7 Screens)**: `Products.jsx`, `Orders.jsx`, `Users.jsx`, `Analytics.jsx`, `Notifications.jsx`, `Settings.jsx`, `Profile.jsx` — Non-functional UI mockups.

---

## E. Route & API Inventory

- **Total Active Web Routes:** 58 endpoints in [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php).
- **Public API Endpoints:** 10 endpoints (`/api/home`, `/api/services`, `/api/services/{slug}`, `/api/contact`, `/api/contact/submit`, `/api/careers`, `/api/careers/apply`, `/api/about`, `/api/faqs`, `/api/clients`).
- **Admin API Endpoints:** 44 endpoints protected by `auth` middleware.
- **Dormant Route File:** [routes/api.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/api.php) contains 55 lines of route definitions that are never registered in [bootstrap/app.php](file:///c:/Users/khademul/Herd/ar_frontend/bootstrap/app.php).
- **Media Fallback Route:** `{prefix}/{path}` provides manual file streaming for environments where `storage:link` symlinks are unavailable.

---

## F. Database Findings

- **Missing Foreign Keys (DB-01 / High):** `services.category` stores a plain string slug rather than a foreign key referencing `service_categories.slug` or `id`.
- **Missing Database Indexes (DB-02 / Medium):** Filtering and sorting columns (`is_active`, `sort_order`, `order`, `category`) lack indexes across 11 tables.
- **Migration & Seeder Data Duplication (DB-03 / Medium):** `clients`, `client_settings`, `client_testimonials`, and `solution_partners` tables insert rows inside migration files while dedicated seeders also insert duplicate rows.
- **Naming Inconsistencies (DB-04 / Low):** Inconsistent column names across models (`sort_order` vs `order`, `description` vs `desc`, `image` vs `logo` vs `avatar`).

---

## G. Backend Findings

- **Absence of Service Layer (BE-01 / High):** All business logic, file storage management, Artisan command invocations, and database queries are located entirely inside controllers.
- **Monolithic Controllers (BE-02 / Medium):** Single controller classes manage multiple domain models (e.g. `Admin\HomeController` has 424 lines and 19 endpoints for 7 models).
- **Direct `env()` Call in Code (BE-03 / High):** `CommandController::getConsolePassword` calls `env('COMMAND_CONSOLE_PASSWORD')` directly, which returns `null` when config is cached.
- **Synchronous Heavy Shell Execution (BE-04 / High):** `CommandController::runCommand` runs `npm run build` with a 300-second timeout inside an HTTP request worker.
- **Missing Form Requests & API Resources (BE-05, BE-06 / Medium):** Validations and JSON responses are handled ad-hoc in controllers without dedicated Form Requests or API Resources.

---

## H. Frontend Findings

- **Oversized Component Monoliths (FE-01 / High):** Admin managers are up to 1,400 lines each, containing embedded modals, tabs, and form logic for multiple models.
- **Hardcoded Public Data (FE-02 / High):** `Portfolio.jsx` and `HowWeWork.jsx` use static hardcoded data, ignoring database records.
- **Mockup Admin Screens (FE-03 / Medium):** 8 admin pages are non-functional placeholder mockups.
- **Underutilized UI Components (FE-04 / Low):** Reusable atoms in `resources/js/components/ui/` are bypassed in favor of raw duplicated markup.
- **Missing Query Caching Layer (FE-05 / Medium):** No client-side caching (e.g. TanStack Query); route transitions trigger full redundant refetches.

---

## I. Authentication & Authorization Findings

- **Auth Mechanism:** Standard session cookie-based authentication using Laravel's `web` guard.
- **Role & Permission Granularity:** None. Every authenticated user is a super-admin with unrestricted access to all endpoints and system commands.
- **Frontend Route Guarding:** Handled server-side by redirecting unauthenticated users requesting `/admin-portal/*` to `/admin-portal/login`.

---

## J. Security Findings

- **[SEC-01 / High] Information Disclosure via `?admin=1`:** Public `HomeController@index` exposes draft/inactive items when `?admin=1` is provided without authentication.
- **[SEC-02 / High] PII Exposure in Candidate Resumes:** Resumes uploaded in `/api/careers/apply` are saved to public disk (`/storage/dossiers/`) with no access control.
- **[SEC-03 / Medium] Missing Rate Limiting on Form Submissions:** `/admin-portal/login`, `/api/contact/submit`, and `/api/careers/apply` lack rate limiting (`throttle`).
- **[SEC-04 / Low] GET Method Allowed on Admin Logout:** `/admin-portal/logout` allows `GET`, exposing administrators to image-tag CSRF logout attacks.
- **[SEC-05 / Medium] Insecure File Streaming in Fallback Route:** `{prefix}/{path}` reads whole files into memory with `File::get()`, risking high RAM usage and path traversal.

---

## K. Performance Findings

- **[PERF-01 / Medium] Missing Cache on Public Content APIs:** All 5 public read endpoints hit the database on every page view with zero cache caching.
- **[PERF-02 / Low] Unbounded SQL Payloads:** Queries select all columns including large JSON blobs (`technical_specs`, `metrics`) even for summary list cards.

---

## L. UI/UX Findings

- **[UI-01 / Low] Inconsistent Branding & Placeholder Copy:** Leftover copy referencing "Titan HR", "Titan Precision", "Apex Heavy Industries", and "Recommended v2".
- **[UI-02 / Low] Accessibility & Semantic Deficiencies:** Icon buttons lack `aria-label`; heading levels skip hierarchy (`<h1>` followed by `<h4>`).

---

## M. Testing Findings

- **[TEST-01 / Critical] 0% Custom Test Coverage:** Test suite contains only 2 default example tests. No feature tests, unit tests, or frontend tests exist.

---

## N. Documentation Findings

- **[DOC-01 / Medium] Outdated & Missing Documentation:** `README.md` is the generic Laravel skeleton. No architecture guide, setup steps, or API documentation exists.

---

## O. Deployment & Environment Findings

- **[DEPL-01 / Critical] Destructive `migrate:fresh` in Production Dockerfile:** Dockerfile `CMD` runs `migrate:fresh --seed` and `key:generate` on boot, wiping data and invalidating sessions.
- **[DEPL-02 / High] Hardcoded Secret Key in Dockerfile:** Static `APP_KEY` hardcoded into Docker build layer.
- **[DEPL-03 / Medium] Overly Permissive `chmod 777`:** Universal write permissions applied to storage and database directories in Dockerfile.

---

## P. Technical Debt Summary

1. **Unregistered `routes/api.php`:** 55 lines of dead route configuration while all APIs are routed through `routes/web.php`.
2. **Unused 72KB Template:** [resources/views/welcome.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/welcome.blade.php) is an unreferenced legacy file.
3. **Admin Monoliths:** 5 manager components exceed 500 lines (one reaches 1,400 lines).
4. **Hardcoded Frontend Pages:** 2 public pages (`Portfolio.jsx`, `HowWeWork.jsx`) disconnected from backend APIs.
5. **8 Mockup Admin Pages:** Dummy screens cluttering navigation without backend functionality.

---

## Q. Missing / Incomplete Functionality

1. **Portfolio CMS Connection:** Backend model `HomeProject` exists, but `Portfolio.jsx` uses static data.
2. **Dynamic How It Works:** `home_processes` table exists, but `HowWeWork.jsx` uses static HTML.
3. **Role & Permission System:** Single user role; no RBAC.
4. **Private Candidate Document Vault:** No secure resume management for HR.
5. **Email Notification System:** Contact inquiries and job applications are written to database with no email notifications dispatched.

---

## R. Risk Summary

```
+-------------------------------------------------------------------------------+
| RISK MATRIX                                                                   |
+---------------------+-------------------+-------------------------------------+
| Risk Area           | Impact Level      | Primary Vulnerability / Concern     |
+---------------------+-------------------+-------------------------------------+
| Data Loss           | CRITICAL (P0)     | Dockerfile runs migrate:fresh       |
| PII Exposure        | HIGH (P1)         | Resumes in public /storage/dossiers |
| Information Leak    | HIGH (P1)         | ?admin=1 query exposes drafts       |
| System Lockout      | HIGH (P1)         | env() in CommandController breaks   |
| Worker Starvation   | HIGH (P1)         | npm run build in web request cycle  |
| Regression Risk     | HIGH (P1)         | 0% test coverage across application |
| Spam & DoS          | MEDIUM (P2)       | No rate limiting on public forms    |
| Code Maintainability| MEDIUM (P2)       | Giant 1400-line React components    |
+---------------------+-------------------+-------------------------------------+
```

---

## S. Recommended Remediation Order & Backlog

### P0 — Critical / Blocking (Must Be Resolved Immediately)
1. **[DEPL-01] Fix Production Dockerfile:** Remove `migrate:fresh`, remove runtime `key:generate`, switch from `php artisan serve` to PHP-FPM/Nginx or FrankenPHP.
2. **[DEPL-02] Remove Hardcoded Key from Dockerfile:** Inject `APP_KEY` via runtime environment variables.
3. **[SEC-02] Secure Candidate Resumes:** Move job application dossiers to private storage disk with authorized controller streaming.

### P1 — High Priority (Security, Integrity, Architecture)
4. **[SEC-01] Fix Draft Information Exposure:** Require `Auth::check()` before returning inactive items on `/api/home`.
5. **[BE-03] Fix `env()` in CommandController:** Create `config/console.php` and read password via `config('console.password')`.
6. **[BE-04] Move `npm run build` / Long Commands to Queue / CLI:** Prevent long-running processes inside synchronous web requests.
7. **[FE-02] Connect Portfolio & HowWeWork to APIs:** Replace hardcoded arrays with dynamic data fetching from backend models.
8. **[TEST-01] Establish Baseline Test Suite:** Create feature tests for authentication, public submissions, and admin CRUD endpoints.
9. **[DB-01] Establish Foreign Key Constraints:** Relate `services.category_id` to `service_categories.id`.
10. **[SEC-03] Add Rate Limiting:** Apply `throttle:5,1` on login and `throttle:10,1` on public contact/career form submissions.

### P2 — Medium Priority (Refactoring, Performance & Quality)
11. **[BE-01 / BE-02] Refactor Monolithic Controllers:** Break giant controllers into dedicated single-responsibility controllers and Service classes.
12. **[FE-01] Decompose Giant Admin Components:** Split 1,400-line `HomepageManager.jsx` into modular sub-components and tabs.
13. **[FE-03] Clean Up / Implement Admin Mockups:** Either implement real backend support or remove the 8 dummy screens (`Products`, `Orders`, `Users`, `Analytics`, `Notifications`, `Settings`, `Profile`).
14. **[BE-05 / BE-06] Implement Form Requests & API Resources:** Replace inline validation and raw model JSON responses.
15. **[PERF-01] Implement Public API Response Caching:** Cache public endpoints using `Cache::remember` with cache tags/invalidation on admin updates.
16. **[DB-02] Add Missing Database Indexes:** Index `is_active`, `sort_order`, and category foreign keys.
17. **[DB-03] Clean Up Migration / Seeder Duplication:** Remove raw SQL inserts from migration files and consolidate into seeders.
18. **[FE-05] Implement Frontend Query Caching:** Add TanStack Query or SWR for client-side API caching.

### P3 — Low Priority (Documentation, UI Polish & Cleanup)
19. **[UI-01] Clean Up Copy Artifacts:** Replace all legacy mentions of "Titan HR", "Titan Precision", and starter theme placeholders.
20. **[FE-04] Adopt Shared UI Library:** Standardize buttons, inputs, and tables using `resources/js/components/ui/`.
21. **[DOC-01] Update README & Architecture Docs:** Document environment setup, deployment instructions, and API endpoints.
22. **[SEC-04] Restrict Admin Logout to POST:** Remove `GET` method from logout route to eliminate image-tag CSRF risk.
23. **[BE-07] Implement File Deletion on Model Updates:** Ensure old uploaded images are deleted when replaced.
24. **Clean Up Dead Files:** Remove unused `welcome.blade.php`, empty `app.js`, and sync `routes/api.php` into `bootstrap/app.php`.

---

## Findings Summary by Severity & Category

| Category | CRITICAL | HIGH | MEDIUM | LOW | INFO | Total |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Security & Auth** | 0 | 2 | 2 | 1 | 0 | **5** |
| **Database & Schema**| 0 | 1 | 2 | 1 | 0 | **4** |
| **Backend Code** | 0 | 3 | 3 | 1 | 0 | **7** |
| **Frontend Code** | 0 | 2 | 2 | 1 | 0 | **5** |
| **DevOps & Deploy** | 1 | 1 | 1 | 0 | 0 | **3** |
| **Testing** | 1 | 0 | 0 | 0 | 0 | **1** |
| **Performance** | 0 | 0 | 1 | 1 | 0 | **2** |
| **UI/UX & Copy** | 0 | 0 | 0 | 2 | 0 | **2** |
| **Documentation** | 0 | 0 | 1 | 0 | 0 | **1** |
| **Total Findings** | **2** | **9** | **12** | **7** | **0** | **30** |

---

## Phase 1 Audit Status

**Phase 1 Baseline Audit Status:** ✅ **COMPLETE**  
*The repository has been systematically audited across all 14 required dimensions. No application source code was modified during this phase. Complete findings, risk matrices, and prioritized remediation backlog (P0–P3) are documented above.*

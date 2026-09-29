# Performance, UI/UX, Testing, & Deployment Baseline Audit

**Project:** AR Engineering Modernization (Laravel + React)  
**Audit Stage:** Phase 1 — Performance, UI/UX, Testing & DevOps Audit  
**Date:** September 2026  

---

## 1. Performance & Query Efficiency

### [PERF-01] Missing Response Caching on Static/Slow-Changing Public Endpoints
- **Severity:** MEDIUM
- **Location:** `HomeController@index`, `ServiceController@index`, `AboutPageController@index`, `ClientPageController@index`, `FaqController@index`
- **Description:** Every incoming public visitor hit triggers 6 to 9 SQL queries against the database without any application-level cache (`Cache::remember()`) or HTTP cache headers (`Cache-Control`, `ETag`).
- **Impact:** Unnecessary database CPU utilization and slower Time-To-First-Byte (TTFB) during traffic spikes.

### [PERF-02] Unbounded Data Fetching (Missing Field Selection & Cursor Pagination)
- **Severity:** LOW
- **Location:** `ServiceController@index`, `AboutPageController@index`, `HomeController@index`
- **Description:** Queries execute `Model::all()` or `->get()` selecting all columns including large JSON blobs (`technical_specs`, `metrics`, `items`) even when only basic summary cards are needed.
- **Impact:** Increased network payload transfer and client JSON parsing overhead.

---

## 2. UI/UX Consistency & Design System Audit

### [UI-01] Branding & Copy Inconsistencies (Artifacts of Starter Theme)
- **Severity:** LOW
- **Location:**
  - `CareersPageController.php`: "Application transmitted successfully to Titan HR."
  - `Pricing.jsx`: "Recommended v2", "Investment & Tenders"
  - `Dashboard.jsx`, `Products.jsx`, `Orders.jsx`, `Settings.jsx`: Mentions of "Titan Precision", "Titan v2", "Apex Heavy Industries".
  - `admin.blade.php`: Header title and favicon inconsistencies.
- **Impact:** Compromises professional brand integrity.

### [UI-02] Accessibility (a11y) & Semantic Markup Observations
- **Severity:** LOW
- **Location:** Frontend and Admin components
- **Description:**
  - Icon-only buttons in admin tables lack `aria-label` tags.
  - Heading hierarchies jump (e.g. `<h1>` followed by `<h4>` skipping `<h2>`/`<h3>` in certain hero sections).
  - Material symbols span elements lack `aria-hidden="true"`.

---

## 3. Automated Testing Coverage Audit

### [TEST-01] Near-Zero Test Suite Coverage (100% Untested Business Logic)
- **Severity:** CRITICAL
- **Location:** [tests/Feature/ExampleTest.php](file:///c:/Users/khademul/Herd/ar_frontend/tests/Feature/ExampleTest.php), [tests/Unit/ExampleTest.php](file:///c:/Users/khademul/Herd/ar_frontend/tests/Unit/ExampleTest.php)
- **Verified Facts:**
  - `Feature/ExampleTest.php` contains a single test asserting `$this->get('/')->assertStatus(200)`.
  - `Unit/ExampleTest.php` contains a single test asserting `$this->assertTrue(true)`.
  - There are **ZERO** tests for authentication, authorization guards, contact form submissions, resume file uploads, admin CRUD operations, command controller permissions, or database seeders.
  - There are **ZERO** frontend component tests, Cypress/Playwright E2E tests, or API contract validation tests.
- **Impact:** High regression risk on any refactoring, modernization, or dependency upgrade.

---

## 4. Deployment, DevOps & Environment Audit

### [DEPL-01] Destructive `migrate:fresh` Command in Production Dockerfile
- **Severity:** CRITICAL
- **Location:** [Dockerfile](file:///c:/Users/khademul/Herd/ar_frontend/Dockerfile#L48)
- **Description:**
  ```dockerfile
  CMD php artisan key:generate --force --no-interaction && php artisan migrate:fresh --seed --force && php artisan serve --host 0.0.0.0 --port $PORT
  ```
- **Verified Facts:**
  1. `migrate:fresh` **DROPS ALL TABLES AND WIPES THE ENTIRE DATABASE** on every container startup or deployment.
  2. `key:generate` generates a new encryption key on every boot, immediately invalidating all existing user sessions and encrypted database cookies.
  3. `php artisan serve` is executed as the main process. It is a single-threaded developmental server that is unstable and unsuited for production workloads.
- **Impact:** Permanent data loss on every deploy or restart; severe availability and stability failure in containerized environments.

### [DEPL-02] Hardcoded Sensitive Fallback Secrets in Build Script
- **Severity:** HIGH
- **Location:** [Dockerfile](file:///c:/Users/khademul/Herd/ar_frontend/Dockerfile#L33)
- **Description:**
  `RUN sed -i 's/^APP_KEY=.*/APP_KEY=base64:rVD6vicz3Xjyc\/vLFPSwPg6zShh\/Aenfs2\/Vfc4Pqws=/' .env`
  Hardcoding static base64 encryption keys inside Docker build layers creates cryptographic security vulnerabilities.

### [DEPL-03] Overly Permissive Directory Permissions in Docker
- **Severity:** MEDIUM
- **Location:** [Dockerfile](file:///c:/Users/khademul/Herd/ar_frontend/Dockerfile#L43)
- **Description:**
  `RUN chmod -R 777 storage bootstrap/cache database`
  Grants universal write and execute permissions (`777`) across the database and cache files.

# Backend Architecture & Code Quality Baseline Audit

**Project:** AR Engineering Modernization (Laravel + React)  
**Audit Stage:** Phase 1 — Backend Architecture Audit  
**Date:** September 2026  

---

## 1. Controller Architecture & Separation of Concerns

### [BE-01] Absence of Service / Repository / Domain Layer
- **Severity:** HIGH
- **Location:** All 17 controllers in `app/Http/Controllers/` and `app/Http/Controllers/Admin/`
- **Description:** Controllers directly perform:
  - Database queries and multi-model aggregation.
  - File disk uploads, storage path mutations, and deletion of orphaned files.
  - JSON encoding/decoding of nested request data.
  - Direct calls to Artisan and Symfony Process shell commands.
- **Impact:** Tight coupling, impossible to unit test without database/filesystem mocking, zero code reusability.

### [BE-02] Monolithic Oversized Admin Controllers
- **Severity:** MEDIUM
- **Location:**
  - [Admin\HomeController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/HomeController.php): 424 lines, 19 controller actions managing 7 different database models.
  - [Admin\AboutManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/AboutManagerController.php): 380 lines, 14 controller actions managing 5 different database models.
  - [Admin\ServiceController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ServiceController.php): 316 lines managing categories, services, and settings.
  - [Admin\ClientManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ClientManagerController.php): 243 lines managing clients, testimonials, partners, and settings.
- **Description:** Single controller classes handle multiple independent business entities.
- **Impact:** Violates Single Responsibility Principle (SRP); merge conflicts, hard to maintain.

### [BE-03] Direct `env()` Usage in Application Code
- **Severity:** HIGH
- **Location:** [Admin\CommandController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php#L89)
- **Description:** `$password = env('COMMAND_CONSOLE_PASSWORD');` is executed directly inside the controller.
- **Impact:** In Laravel, when `php artisan config:cache` is enabled, all `env()` calls outside of `/config/` return `null`. This causes the system commands console password check to fail unconditionally in production.

### [BE-04] Long-Running Synchronous Shell Execution in Web Request Cycle
- **Severity:** HIGH
- **Location:** [Admin\CommandController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php#L153-L196)
- **Description:** Running `npm run build` directly in a web request with `@set_time_limit(300)` and `@ini_set('memory_limit', '1024M')`.
- **Impact:** Freezes PHP-FPM worker threads for minutes, risks HTTP gateway 504 timeouts, leads to worker starvation under traffic.

### [BE-05] Missing Form Request Classes
- **Severity:** MEDIUM
- **Location:** All controller methods
- **Description:** All validations are executed inline using `$request->validate([...])` rather than encapsulated inside dedicated Laravel Form Request classes (`StoreServiceRequest`, `UpdateServiceRequest`, `ApplyCareerRequest`, etc.).
- **Impact:** Duplicated validation logic, inconsistent error messages, controllers polluted with validation rules.

### [BE-06] Missing API Resources / Transformers
- **Severity:** MEDIUM
- **Location:** All public and admin controllers
- **Description:** Raw Eloquent models are returned directly via `response()->json([...])` or `$model->get()` without API Resource transformation (`JsonResource`).
- **Impact:** Internal database column structures are tightly coupled to frontend components. Any DB schema modification directly breaks frontend components. Also prevents automated date formatting and attribute masking.

### [BE-07] Inconsistent Soft Deletes & Unmanaged Asset Cleanup
- **Severity:** LOW
- **Location:** Controllers handling file uploads (`HomeController`, `ServiceController`, `AboutManagerController`, `CareersManagerController`)
- **Description:** When an entity (e.g. `HomeSlide`, `Service`, `HomeLeader`) is updated or deleted, the previously uploaded physical image file is not consistently removed from disk (with `Storage::disk('public')->delete(...)`), leading to storage bloat over time.

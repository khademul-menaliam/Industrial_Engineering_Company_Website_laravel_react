# Business Rules & Application Constraints Baseline

**Project:** AR Engineering Modernization  
**Document:** Business Rules & Constraints Inventory (Baseline)  
**Status:** Baseline Documented (Phase 2.7)  
**Date:** September 2026  
**Evidence Source:** Verified codebase inspection across controllers, requests, models, and migrations  

---

## 1. Authentication & Security Rules

### BR-AUTH-01: Session-Based Administrative Access Control
- **Rule ID:** `BR-AUTH-01`
- **Rule Name:** Session-Based Administrative Route Guarding
- **Category:** Authentication Rules
- **Description:** Access to all administrative web views (`/admin-portal/*`) and API endpoints (`/api/admin/*`) is strictly restricted to authenticated HTTP sessions.
- **Trigger / Context:** Any HTTP request directed to `/admin-portal/*` or `/api/admin/*`.
- **Condition:** User session must be authenticated via Laravel's `web` guard (`Auth::check() == true`).
- **Expected Behavior:** Unauthenticated requests to `/admin-portal/*` are redirected to `/admin-portal/login`. Unauthenticated requests to `/api/admin/*` are rejected with HTTP 401 or redirected to login.
- **Actor Affected:** Public Visitor (blocked), System Administrator (granted).
- **Feature / Module:** `MOD-AUTH-01`
- **Evidence / Location:** [routes/web.php:L75](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L75) (`Route::middleware(['auth'])->group(...)`).
- **Status:** **VERIFIED**

---

### BR-AUTH-02: Secondary Password Authorization for System Maintenance
- **Rule ID:** `BR-AUTH-02`
- **Rule Name:** Secondary Password Authorization for Maintenance Console
- **Category:** Authorization Rules
- **Description:** Running server-level Artisan or shell commands requires entering a secondary administrative console password in addition to the standard login session.
- **Trigger / Context:** Submitting requests to `/api/admin/commands/run` or `/api/admin/commands/verify-password`.
- **Condition:** Request payload must contain `console_password` matching the server's `COMMAND_CONSOLE_PASSWORD` via `hash_equals()`.
- **Expected Behavior:** If password matches, command executes; otherwise, returns HTTP 401 Unauthorized (`"Invalid or expired console authorization password."`).
- **Actor Affected:** System Administrator.
- **Feature / Module:** `MOD-SYS-01`
- **Evidence / Location:** [Admin\CommandController.php:L101-L121](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php#L101-L121).
- **Status:** **VERIFIED**

---

### BR-AUTH-03: Production Guard Against Destructive Database Operations
- **Rule ID:** `BR-AUTH-03`
- **Rule Name:** Production Guard on `migrate:fresh` Command Execution
- **Category:** CRUD Restrictions / Data Protection Rules
- **Description:** The system maintenance console strictly prohibits executing `migrate:fresh` when the application environment is configured as production.
- **Trigger / Context:** Admin selects `migrate_fresh_seed` in the System Commands console.
- **Condition:** `app()->environment('production') == true`.
- **Expected Behavior:** Command execution is immediately aborted with HTTP 403 Forbidden: `"Destructive database operations (migrate:fresh) are strictly disabled in production."`
- **Actor Affected:** System Administrator.
- **Feature / Module:** `MOD-SYS-01`
- **Evidence / Location:** [Admin\CommandController.php:L141-L146](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php#L141-L146).
- **Status:** **VERIFIED**

---

## 2. Content Visibility & Status Rules

### BR-VIS-01: Public Active Status Content Filtering
- **Rule ID:** `BR-VIS-01`
- **Rule Name:** Public Active Status Content Filtering
- **Category:** Content Visibility Rules
- **Description:** Public content endpoints must return only items where `is_active` flag is `true`.
- **Trigger / Context:** Public visitor requests `/api/home`, `/api/services`, `/api/careers`, `/api/faqs`, or `/api/clients`.
- **Condition:** Database query includes `where('is_active', true)`.
- **Expected Behavior:** Inactive, draft, or archived items are hidden from public visitors.
- **Actor Affected:** Public Visitor.
- **Feature / Module:** `MOD-HOME-01`, `MOD-SERV-01`, `MOD-CAR-01`, `MOD-CLNT-01`, `MOD-FAQ-01`.
- **Evidence / Location:** [HomeController.php:L32-L37](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/HomeController.php#L32-L37), [ServiceController.php:L17](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ServiceController.php#L17), [CareersPageController.php:L18](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/CareersPageController.php#L18), [FaqController.php:L13](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/FaqController.php#L13).
- **Status:** **VERIFIED** (Discrepancy: [AboutPageController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AboutPageController.php) omits this check).

---

### BR-VIS-02: Content Sort Order Precedence
- **Rule ID:** `BR-VIS-02`
- **Rule Name:** Explicit Sort Order Precedence with ID Fallback
- **Category:** Display Ordering Rules
- **Description:** All repeatable content entities (slides, services, processes, leaders, milestones, vacancies, FAQs, clients) must be ordered ascending by their explicit sort position column (`sort_order` or `order`), with `id` ascending as a deterministic fallback.
- **Trigger / Context:** Querying lists of repeatable entities.
- **Condition:** Query orders by `orderBy('sort_order')->orderBy('id')` or `orderBy('order', 'asc')`.
- **Expected Behavior:** Items appear in administrator-specified sequence.
- **Actor Affected:** Public Visitor, System Administrator.
- **Feature / Module:** All CMS modules.
- **Evidence / Location:** [HomeController.php:L24-L29](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/HomeController.php#L24-L29), [AboutPageController.php:L20-L23](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AboutPageController.php#L20-L23), [ClientManagerController.php:L17](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ClientManagerController.php#L17).
- **Status:** **VERIFIED**

---

## 3. Data Integrity & Relationship Rules

### BR-REL-01: Service Category Deletion Constraint
- **Rule ID:** `BR-REL-01`
- **Rule Name:** Service Category Deletion Constraint
- **Category:** Relationship & Integrity Rules
- **Description:** A service category cannot be deleted if there are any service offerings currently assigned to its slug.
- **Trigger / Context:** Admin initiates category deletion via `DELETE /api/admin/services/categories/{id}`.
- **Condition:** `Service::where('category', $category->slug)->exists() == true`.
- **Expected Behavior:** Controller rejects deletion with HTTP 422 Unprocessable Entity: `"Cannot delete category. There are services associated with it."`
- **Actor Affected:** System Administrator.
- **Feature / Module:** `MOD-SERV-02`
- **Evidence / Location:** [Admin\ServiceController.php:L299-L306](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ServiceController.php#L299-L306).
- **Status:** **VERIFIED**

---

### BR-VAL-01: Unique URL Slug Constraint
- **Rule ID:** `BR-VAL-01`
- **Rule Name:** Unique URL Slug Generation & Validation
- **Category:** Validation Rules
- **Description:** Every service and service category must have a unique URL slug across its respective table.
- **Trigger / Context:** Creating or updating a service or category.
- **Condition:** Slug must be formatted as URL-safe kebab-case (`Str::slug()`) and must be unique (`unique:services,slug`, `unique:service_categories,slug`).
- **Expected Behavior:** Duplicate slug generation is blocked with HTTP 422 validation failure.
- **Actor Affected:** System Administrator.
- **Feature / Module:** `MOD-SERV-02`
- **Evidence / Location:** [Admin\ServiceController.php:L52](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ServiceController.php#L52), [Admin\ServiceController.php:L239](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ServiceController.php#L239).
- **Status:** **VERIFIED**

---

## 4. File Upload & Asset Lifecycle Rules

### BR-UPL-01: Candidate Resume Document Constraints
- **Rule ID:** `BR-UPL-01`
- **Rule Name:** Candidate Resume File Upload Validation
- **Category:** Upload Rules
- **Description:** Job application resume attachments must be valid document formats and cannot exceed 10 MB in file size.
- **Trigger / Context:** Submitting `POST /api/careers/apply`.
- **Condition:** File must satisfy validation rule: `nullable|file|max:10240|mimes:pdf,docx,doc`.
- **Expected Behavior:** Non-document files (e.g., `.exe`, `.zip`, `.jpg`) or files exceeding 10,240 KB are rejected with HTTP 422.
- **Actor Affected:** Job Applicant.
- **Feature / Module:** `MOD-CAR-01`
- **Evidence / Location:** [CareersPageController.php:L42](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/CareersPageController.php#L42).
- **Status:** **VERIFIED**

---

### BR-UPL-02: CMS Graphic Image Constraints
- **Rule ID:** `BR-UPL-02`
- **Rule Name:** CMS Image Asset Validation
- **Category:** Upload Rules
- **Description:** Uploaded hero graphics, service banners, and portrait photos must be valid images and cannot exceed 5 MB in file size.
- **Trigger / Context:** Uploading images in Homepage, Services, About, Careers, or Clients managers.
- **Condition:** File must satisfy validation rule: `nullable|image|max:5120`.
- **Expected Behavior:** Files exceeding 5,120 KB or invalid image formats are rejected with HTTP 422.
- **Actor Affected:** System Administrator.
- **Feature / Module:** All Admin CMS modules.
- **Evidence / Location:** [Admin\HomeController.php:L57](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/HomeController.php#L57), [Admin\ServiceController.php:L54](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ServiceController.php#L54), [Admin\AboutManagerController.php:L151](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/AboutManagerController.php#L151).
- **Status:** **VERIFIED**

---

### BR-LIFE-01: Cascade Physical File Deletion on Application Purge
- **Rule ID:** `BR-LIFE-01`
- **Rule Name:** Cascade Physical File Deletion on Application Deletion
- **Category:** Data Lifecycle Rules
- **Description:** When an administrator deletes a job application record, the associated physical resume file stored on disk must be permanently deleted.
- **Trigger / Context:** Executing `DELETE /api/admin/careers/applications/{id}`.
- **Condition:** If `application.dossier_path` is present and points to a file in storage.
- **Expected Behavior:** Controller calls `Storage::disk('public')->delete($path)` before deleting the Eloquent record.
- **Actor Affected:** System Administrator.
- **Feature / Module:** `MOD-CAR-02`
- **Evidence / Location:** [Admin\CareersManagerController.php:L152-L157](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CareersManagerController.php#L152-L157).
- **Status:** **VERIFIED**

---

## 5. Summary of Rules by Status

| Status Category | Count | Primary Areas |
| :--- | :---: | :--- |
| **VERIFIED** | **9 Rules** | Authentication, Status Filtering, Category Constraints, Slug Constraints, Upload Limits, Cascade File Deletion. |
| **INFERRED** | **0 Rules** | (No unverified rules promoted to facts). |
| **UNKNOWN / REQUIRES CONFIRMATION** | **3 Rules** | (1) Automatic email dispatch on form submission; (2) Hard deletion vs. soft deletion policy; (3) Client portal / e-commerce tender permissions. |

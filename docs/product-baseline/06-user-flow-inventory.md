# User Flow Inventory Baseline

**Project:** AR Engineering Modernization  
**Document:** User Flow Inventory (Baseline)  
**Status:** Baseline Documented (Phase 2.6)  
**Date:** September 2026  
**Evidence Source:** Verified routes, controllers, and React UI state flows  

---

## 1. Public User Flows (Visitor / Applicant)

### FLOW-PUB-01: Public Homepage Discovery & Navigation
- **Flow ID:** `FLOW-PUB-01`
- **Flow Name:** Public Homepage Discovery & Navigation
- **Actor:** Public Visitor
- **Preconditions:** None (Public Internet).
- **Starting Point:** Browser loads `/` (`SCR-PUB-01`).
- **Step-by-Step Flow:**
  1. Browser makes `GET /api/home` to fetch slides, capabilities, leaders, competencies, projects, and partner logos.
  2. React renders the hero carousel with auto-rotating slides.
  3. Visitor scrolls through capability cards, methodology preview, leadership quotes, and competencies.
  4. Visitor clicks on a capability card (`/services`), a competency button (`/services`), or a project card (`/portfolio`).
  5. Visitor clicks "Download Profile" in the navbar, downloading `/AR_Engineering_Profile.pdf`.
- **Screens Involved:** `SCR-PUB-01` (Homepage), `SCR-PUB-03` (Services), `SCR-PUB-08` (Portfolio).
- **Backend / Controller:** [HomeController.php@index](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/HomeController.php).
- **Database Entities:** `home_slides`, `home_services`, `home_processes`, `home_leaders`, `home_competencies`, `home_projects`, `home_settings`, `clients`.
- **Validation:** None (Read-only query).
- **Success Outcome:** Full landing page rendered with responsive layout and partner marquee.
- **Failure / Error Outcome:** If API returns error (e.g., DB down), Axios catch block leaves states as empty arrays, rendering default static fallback slides.
- **Auth Requirement:** None.
- **Current Status:** **PARTIAL** (Vulnerability `[SEC-01]`: `?admin=1` parameter leaks draft/inactive slides).
- **Evidence:** [Home.jsx:L37-L48](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L37-L48), [HomeController.php:L20-L72](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/HomeController.php#L20-L72).

---

### FLOW-PUB-02: Engineering Service Discovery & Technical Specification Inspection
- **Flow ID:** `FLOW-PUB-02`
- **Flow Name:** Service Discovery & Technical Specification Inspection
- **Actor:** Public Visitor
- **Preconditions:** Services and categories seeded and marked `is_active = true`.
- **Starting Point:** Navigation to `/services` (`SCR-PUB-03`).
- **Step-by-Step Flow:**
  1. Frontend sends `GET /api/services`. Backend returns categories and active services grouped by category.
  2. Visitor selects category tabs (e.g. "Fire Safety Systems", "MEP Engineering") to filter service cards.
  3. Visitor clicks on an individual service card (e.g. "Fire Pump Systems").
  4. Router transitions to `/services/:slug` (`SCR-PUB-04`).
  5. Frontend sends `GET /api/services/{slug}` to retrieve full technical specification sheets, decoded JSON parameters, and performance metrics.
  6. Visitor inspects the technical specifications table and metrics strip.
  7. Visitor clicks "Inquire About This Service" button, redirecting to `/contact` (`SCR-PUB-09`).
- **Screens Involved:** `SCR-PUB-03` (Services Catalog), `SCR-PUB-04` (Service Detail), `SCR-PUB-09` (Contact).
- **Backend / Controller:** [ServiceController.php@index](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ServiceController.php), [ServiceController.php@show](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ServiceController.php#L46-L63).
- **Database Entities:** `services`, `service_categories`, `service_settings`.
- **Validation:** Slug existence and `is_active = true` validation in controller.
- **Success Outcome:** Detailed engineering specification displayed with JSON-driven attributes.
- **Failure / Error Outcome:** 404 JSON response (`"Service not found or inactive."`) if slug does not match an active record.
- **Auth Requirement:** None.
- **Current Status:** **COMPLETE**
- **Evidence:** [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx), [ServiceDetail.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx).

---

### FLOW-PUB-03: Corporate Inquiry Submission
- **Flow ID:** `FLOW-PUB-03`
- **Flow Name:** Corporate Inquiry Submission
- **Actor:** Public Visitor / Prospective Client
- **Preconditions:** Visitor is on `/contact` (`SCR-PUB-09`).
- **Starting Point:** Contact page form.
- **Step-by-Step Flow:**
  1. Frontend loads contact settings (`GET /api/contact`) displaying headquarters address, official email, phone, and emergency hotline.
  2. Visitor fills in Full Name, Email Address, Department selection (Fire Safety, MEP, Maintenance, General), and Project Inquiry Details.
  3. Visitor clicks "Transmit Inquiry".
  4. Frontend sends `POST /api/contact/submit` with JSON payload.
  5. Backend validates inputs (`required|string|max:255`, `email`), creates record in `contact_inquiries` table, and returns 200 OK.
  6. Frontend displays success confirmation alert ("Your safety or project inquiry has been transmitted successfully.") and clears form fields.
- **Screens Involved:** `SCR-PUB-09` (Contact Us).
- **Backend / Controller:** [ContactPageController.php@submit](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ContactPageController.php#L28-L49).
- **Database Entities:** `contact_inquiries`, `contact_settings`.
- **Validation:** `$request->validate(['name' => 'required|string|max:255', 'email' => 'required|email|max:255', 'department' => 'required|string|max:255', 'details' => 'required|string'])`.
- **Success Outcome:** Record persisted in database; success banner displayed in UI.
- **Failure / Error Outcome:** HTTP 422 with field validation error messages.
- **Auth Requirement:** None.
- **Current Status:** **COMPLETE (Security Gaps)**
- **Known Issues:**
  - `[SEC-03]` Missing rate limiting (`throttle`).
  - No email dispatch or SMS notification to internal sales engineers.
- **Evidence:** [ContactPageController.php:L28-L49](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ContactPageController.php#L28-L49), [Contact.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx).

---

### FLOW-PUB-04: Job Vacancy Application Submission
- **Flow ID:** `FLOW-PUB-04`
- **Flow Name:** Job Vacancy Application Submission
- **Actor:** Job Applicant
- **Preconditions:** Active job openings exist in `vacancies` table.
- **Starting Point:** Navigation to `/careers` (`SCR-PUB-07`).
- **Step-by-Step Flow:**
  1. Frontend loads open positions via `GET /api/careers`.
  2. Applicant reviews vacancy accordion items (Title, Type, Ref Number, Description).
  3. Applicant clicks "Apply Now" on a selected position.
  4. Application modal opens with pre-filled Target Position.
  5. Applicant enters Name, Email, LinkedIn Profile URL (optional), Cover Summary, and selects a Resume/Dossier file (`.pdf`, `.docx`, `.doc` up to 10MB).
  6. Applicant clicks "Submit Application".
  7. Frontend sends multipart `FormData` via `POST /api/careers/apply`.
  8. Backend validates inputs, stores resume to `storage/app/public/dossiers/`, creates `applications` record with file path, and returns 200 OK.
  9. Frontend displays success confirmation modal and resets state.
- **Screens Involved:** `SCR-PUB-07` (Careers Page & Application Modal).
- **Backend / Controller:** [CareersPageController.php@apply](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/CareersPageController.php#L35-L66).
- **Database Entities:** `vacancies`, `applications`, `contact_settings`.
- **Validation:** `$request->validate(['name' => 'required|string|max:255', 'email' => 'required|email|max:255', 'position' => 'required|string|max:255', 'linkedin' => 'nullable|url|max:255', 'dossier' => 'nullable|file|max:10240|mimes:pdf,docx,doc', 'summary' => 'nullable|string'])`.
- **Success Outcome:** Application and uploaded dossier stored; success message returned.
- **Failure / Error Outcome:** HTTP 422 validation error (e.g. file too large or invalid MIME type).
- **Auth Requirement:** None.
- **Current Status:** **PARTIAL (Critical PII Security Exposure)**
- **Known Issues:**
  - `[SEC-02]` Resumes stored in publicly accessible storage directory (`/storage/dossiers/`).
  - `[SEC-03]` No rate limiting.
  - Response message references "Titan HR".
- **Evidence:** [CareersPageController.php:L35-L66](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/CareersPageController.php#L35-L66), [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx).

---

### FLOW-PUB-05: FAQ Exploration
- **Flow ID:** `FLOW-PUB-05`
- **Flow Name:** FAQ Exploration
- **Actor:** Public Visitor
- **Preconditions:** Active FAQs exist.
- **Starting Point:** Navigation to `/faq` (`SCR-PUB-10`).
- **Step-by-Step Flow:**
  1. Frontend requests `GET /api/faqs`.
  2. Backend returns active FAQ items sorted by `order`.
  3. Visitor types keywords into search input to filter questions.
  4. Visitor clicks on question header to expand/collapse answer text.
- **Screens Involved:** `SCR-PUB-10` (FAQ).
- **Backend / Controller:** [FaqController.php@index](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/FaqController.php).
- **Database Entities:** `faqs`.
- **Auth Requirement:** None.
- **Current Status:** **COMPLETE**
- **Evidence:** [FAQ.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx).

---

## 2. Administrative User Flows (Administrator)

### FLOW-ADM-01: Administrator Authentication & Session Initiation
- **Flow ID:** `FLOW-ADM-01`
- **Flow Name:** Administrator Authentication & Session Initiation
- **Actor:** System Administrator
- **Preconditions:** User record exists in `users` table.
- **Starting Point:** Navigation to `/admin-portal/login` (`SCR-AUTH-01`).
- **Step-by-Step Flow:**
  1. Administrator enters registered email and password, checks "Remember this device" (optional).
  2. Administrator clicks "Authorize Connection" submitting form via HTTP POST.
  3. Backend validates credentials via `Auth::attempt()`.
  4. Upon success, session ID is regenerated (`$request->session()->regenerate()`), authentication cookie is set, and browser is redirected to `/admin-portal` (`SCR-ADM-01`).
  5. Blade view [admin.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/admin.blade.php) renders and boots React Admin SPA ([admin.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin.jsx)).
- **Screens Involved:** `SCR-AUTH-01` (Admin Login), `SCR-ADM-01` (Admin Dashboard).
- **Backend / Controller:** [AuthController.php@login](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AuthController.php#L24-L39).
- **Database Entities:** `users`, `sessions`.
- **Validation:** `$request->validate(['email' => ['required', 'email'], 'password' => ['required']])`.
- **Success Outcome:** Authenticated HTTP session cookie created; redirect to admin dashboard.
- **Failure / Error Outcome:** HTTP 302 redirect back with error: `"The provided credentials do not match our records."`
- **Auth Requirement:** None for form; sets session for subsequent requests.
- **Current Status:** **COMPLETE (Lacks Rate Limiting)**
- **Evidence:** [AuthController.php:L24-L39](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AuthController.php#L24-L39), [login.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/login.blade.php).

---

### FLOW-ADM-02: Homepage Dynamic Content Management
- **Flow ID:** `FLOW-ADM-02`
- **Flow Name:** Homepage Dynamic Content Management
- **Actor:** System Administrator
- **Preconditions:** Authenticated session.
- **Starting Point:** Navigation to `/admin-portal/homepage` (`SCR-ADM-02`).
- **Step-by-Step Flow:**
  1. React component executes `GET /api/home?admin=1` to load all homepage records (including inactive drafts).
  2. Administrator selects entity tab (Slider, Services, Methodology, Leadership, Competencies, Projects, Settings).
  3. **For Settings Tab:** Admin modifies text fields and clicks "Save General Settings", sending `POST /api/admin/home/settings`.
  4. **For Repeatable Entities (Slides, Services, Leaders, etc.):**
     - Admin clicks "Add New" or "Edit".
     - Modal opens with title, subtitle, image file picker, sort order, and active toggle.
     - Admin saves; frontend sends `POST /api/admin/home/{entity}` (multipart `FormData` if image attached).
     - Backend stores image to `storage/app/public/homepage/` and creates/updates model.
     - Modal closes, state updates, toast banner displayed.
  5. **For Deletion:** Admin clicks Delete icon; confirms browser prompt; frontend sends `DELETE /api/admin/home/{entity}/{id}`.
- **Screens Involved:** `SCR-ADM-02` (Homepage Manager).
- **Backend / Controller:** [Admin\HomeController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/HomeController.php).
- **Database Entities:** `home_slides`, `home_services`, `home_processes`, `home_leaders`, `home_competencies`, `home_projects`, `home_settings`.
- **Validation:** Required fields validated per entity type in controller.
- **Success Outcome:** Entity persisted in database; immediate live update on public homepage.
- **Auth Requirement:** Authenticated session (`auth` middleware).
- **Current Status:** **COMPLETE (Monolithic Component)**
- **Evidence:** [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx), [Admin\HomeController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/HomeController.php).

---

### FLOW-ADM-03: Services & Technical Category Management
- **Flow ID:** `FLOW-ADM-03`
- **Flow Name:** Services & Technical Category Management
- **Actor:** System Administrator
- **Preconditions:** Authenticated session.
- **Starting Point:** Navigation to `/admin-portal/services-manager` (`SCR-ADM-03`).
- **Step-by-Step Flow:**
  1. Frontend requests `GET /api/admin/services` returning services, categories, and settings.
  2. **Category Management:** Admin creates category with name and slug via `POST /api/admin/services/categories`. (Deletion blocked if attached services exist).
  3. **Service Management:** Admin creates/edits service with title, slug, short description, category slug, image, hero image, badges, dynamic technical specifications (key/value list), and metrics (value/label list).
  4. Frontend sends multipart `FormData` via `POST /api/admin/services` (or `POST /api/admin/services/{id}`).
  5. Backend encodes specs and metrics as JSON arrays in `services` table.
- **Screens Involved:** `SCR-ADM-03` (Services Manager).
- **Backend / Controller:** [Admin\ServiceController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ServiceController.php).
- **Database Entities:** `services`, `service_categories`, `service_settings`.
- **Validation:** Unique slug validation, image MIME validation (max 5MB).
- **Success Outcome:** Service and category updated; technical spec sheet rendered on public detail page.
- **Auth Requirement:** Authenticated session.
- **Current Status:** **COMPLETE**
- **Evidence:** [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx), [Admin\ServiceController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ServiceController.php).

---

### FLOW-ADM-04: Candidate Applications & Inquiries Review
- **Flow ID:** `FLOW-ADM-04`
- **Flow Name:** Candidate Applications & Inquiries Review
- **Actor:** System Administrator
- **Preconditions:** Authenticated session; inquiries and applications exist in DB.
- **Starting Point:** Navigation to `/admin-portal/contact-manager` (`SCR-ADM-05`) or `/admin-portal/careers-manager` (`SCR-ADM-06`).
- **Step-by-Step Flow:**
  1. **Inquiries Review:** Admin views list of client inquiries. Admin can review full inquiry details or delete processed inquiries via `DELETE /api/admin/contact/inquiries/{id}`.
  2. **Applications Review:** Admin views list of candidate applications with name, email, target position, and submission date.
  3. Admin clicks "Download Dossier / Resume" link opening `/storage/dossiers/{file}`.
  4. Admin deletes rejected application via `DELETE /api/admin/careers/applications/{id}`. Backend deletes physical resume file from storage disk and removes database record.
- **Screens Involved:** `SCR-ADM-05` (Contact Manager), `SCR-ADM-06` (Careers Manager).
- **Backend / Controller:** [Admin\ContactManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ContactManagerController.php), [Admin\CareersManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CareersManagerController.php).
- **Database Entities:** `contact_inquiries`, `applications`.
- **Success Outcome:** Records managed; disk files purged upon application deletion.
- **Auth Requirement:** Authenticated session.
- **Current Status:** **COMPLETE**
- **Evidence:** [CareersManager.jsx:L148-L163](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx#L148-L163), [Admin\CareersManagerController.php:L148-L164](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CareersManagerController.php#L148-L164).

---

### FLOW-ADM-05: System Maintenance Command Execution
- **Flow ID:** `FLOW-ADM-05`
- **Flow Name:** System Maintenance Command Execution
- **Actor:** System Administrator
- **Preconditions:** Authenticated session. Secondary console password configured.
- **Starting Point:** Navigation to `/admin-portal/system-commands` (`SCR-ADM-09`).
- **Step-by-Step Flow:**
  1. Frontend opens a secondary authorization modal requiring the console password.
  2. Administrator enters secondary password; frontend sends `POST /api/admin/commands/verify-password`.
  3. Upon verification, command buttons unlock (`Optimize Clear`, `Config Clear`, `Migrate`, `Storage Symlink`, `Build Assets (Vite)`).
  4. Administrator clicks a command button (e.g., `Optimize Clear`).
  5. Frontend sends `POST /api/admin/commands/run` with `{ command: 'optimize_clear', console_password: '...' }`.
  6. Backend verifies password via `hash_equals()`, checks whitelist, executes `Artisan::call('optimize:clear')`, and returns exit code and console output.
  7. Frontend terminal logs the output stream in real-time.
- **Screens Involved:** `SCR-ADM-09` (System Commands).
- **Backend / Controller:** [Admin\CommandController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php).
- **Database Entities:** None.
- **Validation:** Whitelist command key verification; secondary password hash verification; rate-limited to 5 requests per minute (`throttle:5,1`).
- **Success Outcome:** Command executed; output captured and displayed in web terminal.
- **Failure / Error Outcome:** HTTP 401 if secondary password incorrect; HTTP 403 if destructive command attempted in production.
- **Auth Requirement:** Authenticated session + Secondary console password.
- **Current Status:** **PARTIAL (Architectural Bug `[BE-03]` on `config:cache`)**
- **Evidence:** [SystemCommands.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx), [Admin\CommandController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php).

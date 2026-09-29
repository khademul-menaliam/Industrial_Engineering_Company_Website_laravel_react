# Feature & Module Inventory Baseline

**Project:** AR Engineering Modernization  
**Document:** Product Feature & Module Inventory (Baseline)  
**Status:** Baseline Documented (Phase 2.3)  
**Date:** September 2026  
**Evidence Source:** Verified codebase inspection across controllers, models, migrations, and React components  

---

## 1. Module Group: AUTHENTICATION & ACCESS CONTROL

### Module: MOD-AUTH-01 — Administrative Authentication & Session Management
- **Module ID:** `MOD-AUTH-01`
- **Module Name:** Admin Authentication & Session Management
- **Purpose:** Secure the administrative control panel against unauthorized public access.
- **Description:** Provides email/password login, remember-me persistent session cookie, session regeneration, and logout.
- **Actors:** System Administrator
- **Main Capabilities:**
  - Login form rendering via server Blade template.
  - Credential verification with password hashing check (`bcrypt`).
  - Session state regeneration on login.
  - Logout with session invalidation and CSRF token regeneration.
- **Backend Implementation:** [AuthController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AuthController.php), [routes/web.php:L70-L73](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L70-L73).
- **Frontend Implementation:** [resources/views/login.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/login.blade.php).
- **Database Entities:** `users`, `sessions`
- **Visibility:** Admin Auth
- **Current Status:** **COMPLETE (with Security Gaps)**
- **Known Audit Issues:**
  - `[SEC-03]` Login endpoint lacks rate limiting (`throttle`).
  - `[SEC-04]` Logout endpoint permits HTTP `GET`, allowing image-tag CSRF logout attacks.
- **Evidence:** [AuthController.php:L24-L52](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AuthController.php#L24-L52).

---

## 2. Module Group: HOMEPAGE & GENERAL CMS

### Module: MOD-HOME-01 — Public Homepage Showcase
- **Module ID:** `MOD-HOME-01`
- **Module Name:** Public Homepage Showcase
- **Purpose:** Provide high-impact corporate presentation of capabilities, leaders, projects, and partner brands.
- **Description:** Dynamic landing page consuming multiple backend entity feeds with animated hero slider, process pipeline, and partner marquee.
- **Actors:** Public Visitor
- **Main Capabilities:**
  - Auto-playing hero carousel with custom title, subtitle, and imagery.
  - Core engineering capability cards with icon and description.
  - 5-step operational methodology overview.
  - Executive leadership highlight quotes and portraits.
  - Strategic competency cards with bulleted feature items.
  - Featured project cards linking to portfolio.
  - Infinite auto-scrolling partner logo marquee.
- **Backend Implementation:** [HomeController.php:L15-L73](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/HomeController.php#L15-L73) (`GET /api/home`).
- **Frontend Implementation:** [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx).
- **Database Entities:** `home_slides`, `home_services`, `home_processes`, `home_leaders`, `home_competencies`, `home_projects`, `home_settings`, `clients`.
- **Visibility:** Public
- **Current Status:** **PARTIAL (Security Leak)**
- **Known Audit Issues:**
  - `[SEC-01]` Query parameter `?admin=1` exposes inactive/draft items to unauthenticated users.
  - `[PERF-01]` No caching layer on dynamic multi-table aggregation query.
- **Evidence:** [HomeController.php:L22](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/HomeController.php#L22), [Home.jsx:L37-L48](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L37-L48).

### Module: MOD-HOME-02 — Administrative Homepage Manager
- **Module ID:** `MOD-HOME-02`
- **Module Name:** Administrative Homepage CMS Manager
- **Purpose:** Full administrative control over all homepage entities and global parameters.
- **Description:** Tabbed administrative interface allowing live editing of hero slides, service capability cards, process steps, leadership profiles, competency cards, project cards, and key-value settings.
- **Actors:** System Administrator
- **Main Capabilities:**
  - Create, edit, delete, reorder, toggle active state, and upload images for slides, services, processes, leaders, competencies, and projects.
  - Bulk update general settings (hero title, subtitles, CTA links).
- **Backend Implementation:** [Admin\HomeController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/HomeController.php), [routes/web.php:L77-L109](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L77-L109).
- **Frontend Implementation:** [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx).
- **Database Entities:** `home_slides`, `home_services`, `home_processes`, `home_leaders`, `home_competencies`, `home_projects`, `home_settings`.
- **Visibility:** Admin
- **Current Status:** **COMPLETE (Maintainability Debt)**
- **Known Audit Issues:**
  - `[FE-01]` Monolithic 1,400-line React component combining 7 sub-entity handlers.
  - `[BE-02]` Monolithic 424-line controller violating Single Responsibility Principle.
- **Evidence:** [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx), [Admin\HomeController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/HomeController.php).

---

## 3. Module Group: SERVICES & TECHNICAL CATALOG

### Module: MOD-SERV-01 — Public Services Catalog & Technical Detail
- **Module ID:** `MOD-SERV-01`
- **Module Name:** Services Catalog & Technical Detail
- **Purpose:** Present structured engineering disciplines and comprehensive technical specification sheets for each service offering.
- **Description:** Categorized service browsing interface with individual deep-dive detail pages rendering technical specs, performance metrics, and compliance badges.
- **Actors:** Public Visitor
- **Main Capabilities:**
  - Category tab filtering (Fire Safety, MEP Engineering, Industrial Automation).
  - Individual service detail page (`/services/:slug`) with hero graphic, description, technical specification table (JSON-driven), and key performance metrics.
- **Backend Implementation:** [ServiceController.php:L10-L64](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ServiceController.php#L10-L64) (`GET /api/services`, `GET /api/services/{slug}`).
- **Frontend Implementation:** [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx), [ServiceDetail.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx).
- **Database Entities:** `services`, `service_categories`, `service_settings`.
- **Visibility:** Public
- **Current Status:** **COMPLETE**
- **Known Audit Issues:**
  - `[DB-01]` `services.category` uses string slug instead of relational foreign key.
  - `[DB-02]` Missing database indexes on category filter and slug query.
- **Evidence:** [ServiceController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ServiceController.php), [ServiceDetail.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx).

### Module: MOD-SERV-02 — Administrative Services Manager
- **Module ID:** `MOD-SERV-02`
- **Module Name:** Administrative Services Manager
- **Purpose:** Manage service offerings, category taxonomy, rich-text technical parameters, and page settings.
- **Description:** Admin workspace for creating and maintaining service entries, uploading main and hero imagery, managing category slugs, and editing dynamic JSON technical spec sheets.
- **Actors:** System Administrator
- **Main Capabilities:**
  - Category CRUD (preventing deletion if associated services exist).
  - Service CRUD with image upload, hero graphic upload, slug generation, badges, technical spec JSON array, and metric cards.
  - Bulk update of service intro and CTA settings.
- **Backend Implementation:** [Admin\ServiceController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ServiceController.php), [routes/web.php:L112-L125](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L112-L125).
- **Frontend Implementation:** [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx).
- **Database Entities:** `services`, `service_categories`, `service_settings`.
- **Visibility:** Admin
- **Current Status:** **COMPLETE**
- **Known Audit Issues:**
  - `[FE-01]` 932-line component monolith.
- **Evidence:** [Admin\ServiceController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ServiceController.php), [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx).

---

## 4. Module Group: ABOUT US & CORPORATE IDENTITY

### Module: MOD-ABT-01 — Public About Us & Leadership Showcase
- **Module ID:** `MOD-ABT-01`
- **Module Name:** About Us & Leadership Showcase
- **Purpose:** Present corporate history, vision, executive leadership, strategic advisory board, and corporate milestones.
- **Description:** Public narrative page rendering company background, strategic pillars, advisory profiles, management team, and historical timeline.
- **Actors:** Public Visitor
- **Main Capabilities:**
  - Corporate overview and CEO statement display.
  - Strategic pillar cards with custom icons.
  - Advisor and executive team profiles with LinkedIn links and bios.
  - Historical corporate milestone timeline.
- **Backend Implementation:** [AboutPageController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AboutPageController.php) (`GET /api/about`).
- **Frontend Implementation:** [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx).
- **Database Entities:** `about_settings`, `about_pillars`, `about_advisors`, `about_team`, `about_milestones`.
- **Visibility:** Public
- **Current Status:** **PARTIAL**
- **Known Audit Issues:**
  - `AboutPageController@index` does not filter by `is_active` for pillars, advisors, team, and milestones.
- **Evidence:** [AboutPageController.php:L19-L23](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AboutPageController.php#L19-L23), [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx).

### Module: MOD-ABT-02 — Administrative About Manager
- **Module ID:** `MOD-ABT-02`
- **Module Name:** Administrative About Manager
- **Purpose:** Manage corporate identity content, team personnel, advisor bios, and timeline milestones.
- **Description:** Full admin suite for managing About settings, uploading hero and CEO graphics, and executing CRUD over pillars, advisors, leadership team members, and milestones.
- **Actors:** System Administrator
- **Main Capabilities:**
  - Upload CEO and hero graphics to storage.
  - Full CRUD over Strategic Pillars, Advisors, Leadership Team, and Milestones.
  - Automatic deletion of replaced physical portrait files.
- **Backend Implementation:** [Admin\AboutManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/AboutManagerController.php), [routes/web.php:L145-L168](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L145-L168).
- **Frontend Implementation:** [AboutManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx).
- **Database Entities:** `about_settings`, `about_pillars`, `about_advisors`, `about_team`, `about_milestones`.
- **Visibility:** Admin
- **Current Status:** **COMPLETE**
- **Known Audit Issues:**
  - `[FE-01]` 868-line component monolith.
- **Evidence:** [Admin\AboutManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/AboutManagerController.php), [AboutManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx).

---

## 5. Module Group: CONTACT & INQUIRIES

### Module: MOD-CONT-01 — Public Contact & Inquiry Submission
- **Module ID:** `MOD-CONT-01`
- **Module Name:** Public Contact & Inquiry Submission
- **Purpose:** Provide corporate contact information, emergency response protocols, and accept structured client inquiries.
- **Description:** Public inquiry interface allowing users to submit project inquiries categorized by department (Fire Safety, MEP Engineering, Industrial Maintenance, General).
- **Actors:** Public Visitor
- **Main Capabilities:**
  - Display verified office address, email, phone, and emergency hotline.
  - Submit inquiry form with input validation (`name`, `email`, `department`, `details`).
- **Backend Implementation:** [ContactPageController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ContactPageController.php) (`GET /api/contact`, `POST /api/contact/submit`).
- **Frontend Implementation:** [Contact.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx).
- **Database Entities:** `contact_settings`, `contact_inquiries`.
- **Visibility:** Public
- **Current Status:** **COMPLETE (Security Gaps)**
- **Known Audit Issues:**
  - `[SEC-03]` No rate-limiting (`throttle`) on submission endpoint.
  - No email alert dispatch to internal staff (database write only).
- **Evidence:** [ContactPageController.php:L28-L49](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ContactPageController.php#L28-L49), [Contact.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx).

### Module: MOD-CONT-02 — Administrative Contact Manager
- **Module ID:** `MOD-CONT-02`
- **Module Name:** Administrative Contact Manager
- **Purpose:** Review received inquiries and update public contact details.
- **Description:** Admin interface listing incoming client inquiries in reverse chronological order with deletion capability, and updating contact settings.
- **Actors:** System Administrator
- **Main Capabilities:**
  - View all submitted inquiries with timestamp, sender, email, department, and message details.
  - Delete processed or spam inquiries.
  - Bulk update contact settings.
- **Backend Implementation:** [Admin\ContactManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ContactManagerController.php), [routes/web.php:L128-L132](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L128-L132).
- **Frontend Implementation:** [ContactManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ContactManager.jsx).
- **Database Entities:** `contact_settings`, `contact_inquiries`.
- **Visibility:** Admin
- **Current Status:** **COMPLETE**
- **Evidence:** [Admin\ContactManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ContactManagerController.php), [ContactManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ContactManager.jsx).

---

## 6. Module Group: CAREERS & TALENT ACQUISITION

### Module: MOD-CAR-01 — Public Careers & Application Submission
- **Module ID:** `MOD-CAR-01`
- **Module Name:** Public Careers & Application Submission
- **Purpose:** Publish engineering job vacancies and receive candidate applications with attached resumes.
- **Description:** Accordion-based job board displaying active openings and an interactive application modal supporting document uploads.
- **Actors:** Job Applicant
- **Main Capabilities:**
  - View active job openings sorted by priority.
  - Modal application submission with name, email, target position, LinkedIn profile, summary, and resume upload (PDF/DOCX up to 10MB).
- **Backend Implementation:** [CareersPageController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/CareersPageController.php) (`GET /api/careers`, `POST /api/careers/apply`).
- **Frontend Implementation:** [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx).
- **Database Entities:** `vacancies`, `applications`, `contact_settings`.
- **Visibility:** Public
- **Current Status:** **PARTIAL (Critical PII Security Issue)**
- **Known Audit Issues:**
  - `[SEC-02]` Resumes stored in publicly accessible storage directory (`/storage/dossiers/`).
  - `[SEC-03]` No rate limiting on file upload endpoint.
  - Hardcoded response message references "Titan HR".
- **Evidence:** [CareersPageController.php:L48-L63](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/CareersPageController.php#L48-L63), [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx).

### Module: MOD-CAR-02 — Administrative Careers Manager
- **Module ID:** `MOD-CAR-02`
- **Module Name:** Administrative Careers Manager
- **Purpose:** Manage job vacancies and review candidate applications.
- **Description:** Admin interface for publishing and modifying vacancy requirements, updating careers page headers, and inspecting/deleting job applications and attached resumes.
- **Actors:** System Administrator
- **Main Capabilities:**
  - CRUD operations over job vacancies (`ref`, `title`, `type`, `description`, `sort_order`, `is_active`).
  - View candidate applications with links to download resumes.
  - Delete applications with automatic file deletion from disk.
  - Update career section settings and hero graphics.
- **Backend Implementation:** [Admin\CareersManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CareersManagerController.php), [routes/web.php:L135-L142](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L135-L142).
- **Frontend Implementation:** [CareersManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx).
- **Database Entities:** `vacancies`, `applications`, `contact_settings`.
- **Visibility:** Admin
- **Current Status:** **COMPLETE**
- **Evidence:** [Admin\CareersManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CareersManagerController.php), [CareersManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx).

---

## 7. Module Group: CLIENTS, PARTNERS & TESTIMONIALS

### Module: MOD-CLNT-01 — Public Partners & Clients Ecosystem
- **Module ID:** `MOD-CLNT-01`
- **Module Name:** Public Partners & Clients Ecosystem
- **Purpose:** Display certified solution partners, institutional clients, and verified client testimonials.
- **Description:** Showcase page categorizing solution partners (FIREX, NITTAN, NAFFCO, Waterfall Pumps, Lackeby, Morgan), client logos, and customer quotes.
- **Actors:** Public Visitor
- **Main Capabilities:**
  - Grid presentation of strategic solution partner brands and certifications.
  - Client logos and case study link indicators.
  - Client testimonial review cards.
- **Backend Implementation:** [ClientPageController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ClientPageController.php) (`GET /api/clients`).
- **Frontend Implementation:** [Clients.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Clients.jsx).
- **Database Entities:** `clients`, `client_settings`, `client_testimonials`, `solution_partners`.
- **Visibility:** Public
- **Current Status:** **COMPLETE**
- **Known Audit Issues:**
  - `[DB-03]` Migration and Seeder data duplication across all 4 tables.
- **Evidence:** [ClientPageController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ClientPageController.php), [Clients.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Clients.jsx).

### Module: MOD-CLNT-02 — Administrative Clients & Partners Manager
- **Module ID:** `MOD-CLNT-02`
- **Module Name:** Administrative Clients & Partners Manager
- **Purpose:** Manage client organizations, solution partners, testimonials, and page settings.
- **Description:** Multi-section admin workspace for paginated CRUD over clients, solution partners, client testimonials, and background image uploads.
- **Actors:** System Administrator
- **Main Capabilities:**
  - CRUD operations over Clients (`name`, `logo`, `desc`, `type`, `icon`, `order`, `is_active`).
  - CRUD operations over Solution Partners (`name`, `logo`, `type`, `desc`, `order`, `is_active`).
  - CRUD operations over Testimonials (`quote`, `author`, `role`, `avatar`, `order`, `is_active`).
  - Client page settings and hero background file upload.
- **Backend Implementation:** [Admin\ClientManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ClientManagerController.php), [routes/web.php:L179-L201](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L179-L201).
- **Frontend Implementation:** [ClientsManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ClientsManager.jsx).
- **Database Entities:** `clients`, `client_settings`, `client_testimonials`, `solution_partners`.
- **Visibility:** Admin
- **Current Status:** **COMPLETE**
- **Known Audit Issues:**
  - `[FE-01]` 742-line component monolith.
- **Evidence:** [Admin\ClientManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/ClientManagerController.php), [ClientsManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ClientsManager.jsx).

---

## 8. Module Group: FAQ & KNOWLEDGE BASE

### Module: MOD-FAQ-01 — Public FAQ Knowledge Base
- **Module ID:** `MOD-FAQ-01`
- **Module Name:** Public FAQ Knowledge Base
- **Purpose:** Provide immediate answers to common industrial engineering and compliance questions.
- **Description:** Public searchable FAQ accordion list.
- **Actors:** Public Visitor
- **Main Capabilities:**
  - Browse active FAQ items sorted by order.
  - Interactive accordion expand/collapse.
- **Backend Implementation:** [FaqController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/FaqController.php) (`GET /api/faqs`).
- **Frontend Implementation:** [FAQ.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx).
- **Database Entities:** `faqs`.
- **Visibility:** Public
- **Current Status:** **COMPLETE**
- **Evidence:** [FaqController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/FaqController.php), [FAQ.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx).

### Module: MOD-FAQ-02 — Administrative FAQ Manager
- **Module ID:** `MOD-FAQ-02`
- **Module Name:** Administrative FAQ Manager
- **Purpose:** Manage question-and-answer repository.
- **Description:** Admin interface for creating, updating, reordering, and deleting FAQ items.
- **Actors:** System Administrator
- **Main Capabilities:**
  - Paginated FAQ list with active status toggle.
  - Modal form for FAQ creation and editing.
- **Backend Implementation:** [Admin\FaqManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/FaqManagerController.php), [routes/web.php:L171-L176](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L171-L176).
- **Frontend Implementation:** [FaqManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/FaqManager.jsx).
- **Database Entities:** `faqs`.
- **Visibility:** Admin
- **Current Status:** **COMPLETE**
- **Evidence:** [Admin\FaqManagerController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/FaqManagerController.php), [FaqManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/FaqManager.jsx).

---

## 9. Module Group: SYSTEM ADMINISTRATION & DIAGNOSTICS

### Module: MOD-SYS-01 — System Maintenance Console
- **Module ID:** `MOD-SYS-01`
- **Module Name:** System Maintenance Console
- **Purpose:** Execute pre-approved maintenance operations directly from the web panel.
- **Description:** Secure web terminal runner with secondary password challenge for running cache clearing, config caching, migrations, and asset builds.
- **Actors:** System Administrator
- **Main Capabilities:**
  - Secondary password authentication dialog.
  - Whitelist execution of Artisan commands (`optimize:clear`, `config:clear`, `route:clear`, `view:clear`, `cache:clear`, `migrate`, `db:seed`, `storage:link`, `npm run build`).
  - Protection against arbitrary shell injection.
  - Environment guard blocking `migrate:fresh` in production.
- **Backend Implementation:** [Admin\CommandController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php), [routes/web.php:L204-L207](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L204-L207).
- **Frontend Implementation:** [SystemCommands.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx).
- **Database Entities:** None
- **Visibility:** Admin
- **Current Status:** **PARTIAL (Architecture Issue)**
- **Known Audit Issues:**
  - `[BE-03]` Direct `env()` call fails under `config:cache`.
  - `[BE-04]` Synchronous `npm run build` runs in web request worker with 300s timeout.
- **Evidence:** [Admin\CommandController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php), [SystemCommands.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx).

---

## 10. Module Group: STATIC / DISCONNECTED / MOCKUP MODULES

### Module: MOD-DISC-01 — Static Portfolio Showcase
- **Module ID:** `MOD-DISC-01`
- **Module Name:** Static Portfolio Showcase
- **Current Status:** **BROKEN (Data Disconnected)**
- **Description:** Public project portfolio page rendered via 600 lines of hardcoded JavaScript objects instead of consuming backend `home_projects` API.
- **Evidence:** [Portfolio.jsx:L6-L130](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Portfolio.jsx#L6-L130).

### Module: MOD-DISC-02 — Static Methodology Page (How We Work)
- **Module ID:** `MOD-DISC-02`
- **Module Name:** Static Methodology Page (How We Work)
- **Current Status:** **BROKEN (Data Disconnected)**
- **Description:** Public execution workflow page rendered via hardcoded HTML instead of consuming `home_processes` API.
- **Evidence:** [HowWeWork.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/HowWeWork.jsx).

### Module: MOD-MOCK-01 — Admin Starter Template Mockups (7 Screens)
- **Module ID:** `MOD-MOCK-01`
- **Module Name:** Admin Starter Template Mockups
- **Current Status:** **MOCKUP (Non-Functional)**
- **Description:** Products Inventory, Orders/Tenders, Users Directory, Analytics Dashboard, Notifications, System Settings, and Profile screens in the admin panel are non-functional static mockups copied from a starter template.
- **Evidence:** [AdminApp.jsx:L38-L45](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx#L38-L45), `Products.jsx`, `Orders.jsx`, `Users.jsx`, `Analytics.jsx`, `Notifications.jsx`, `Settings.jsx`, `Profile.jsx`.

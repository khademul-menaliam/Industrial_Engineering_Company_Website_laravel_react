# Screen & Page Inventory Baseline

**Project:** AR Engineering Modernization  
**Document:** Screen & Page Inventory (Baseline)  
**Status:** Baseline Documented (Phase 2.4)  
**Date:** September 2026  
**Evidence Source:** [FrontendApp.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/FrontendApp.jsx), [AdminApp.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx), [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php)  

---

## 1. Public Frontend Screens (Area: PUBLIC)

### SCR-PUB-01: Homepage
- **Screen ID:** `SCR-PUB-01`
- **Screen Name:** Public Homepage
- **URL / Route:** `/`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** Primary corporate landing page introducing AR Engineering's core capabilities, projects, leaders, and certified partners.
- **Main Functionality:** Auto-scrolling hero carousel, capability cards, methodology preview, leadership quotes, competencies, project showcase, infinite partner marquee.
- **Main UI Sections:** Hero Carousel, Capabilities Grid, Methodology Step HUD, Leadership Highlight, Competency Cards, Project Cards, Client/Partner Marquee, CTA Banner.
- **Data Displayed:** Slides (`home_slides`), Services (`home_services`), Processes (`home_processes`), Leaders (`home_leaders`), Competencies (`home_competencies`), Projects (`home_projects`), Settings (`home_settings`), Partners (`clients`).
- **Data Submitted:** None.
- **Related Module:** `MOD-HOME-01`
- **Auth Requirement:** None.
- **Implementation Status:** **PARTIAL** (Query allows `?admin=1` to leak draft content; [SEC-01]).
- **Responsive Relevance:** Mobile hamburger drawer, adaptive hero typography, CSS marquee animation.
- **Evidence:** [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx).

---

### SCR-PUB-02: About Us
- **Screen ID:** `SCR-PUB-02`
- **Screen Name:** About Us & Leadership
- **URL / Route:** `/about`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** Detailed corporate history, CEO message, strategic foundational pillars, board advisors, management team, and corporate milestones.
- **Main UI Sections:** Hero Section, CEO Statement & Portrait, Strategic Pillars Grid, Advisory Board Cards, Leadership Team Cards, Milestone Timeline, CTA.
- **Data Displayed:** General settings (`about_settings`), Pillars (`about_pillars`), Advisors (`about_advisors`), Team (`about_team`), Milestones (`about_milestones`).
- **Data Submitted:** None.
- **Related Module:** `MOD-ABT-01`
- **Auth Requirement:** None.
- **Implementation Status:** **PARTIAL** (Backend controller does not filter by `is_active`).
- **Evidence:** [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx).

---

### SCR-PUB-03: Services Catalog
- **Screen ID:** `SCR-PUB-03`
- **Screen Name:** Services Catalog
- **URL / Route:** `/services`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** Comprehensive engineering catalog categorized by discipline with overview cards and links to technical specifications.
- **Main UI Sections:** Category Filter Tabs, Service Offering Grid, Zero-Downtime Commitment Block, Service CTA Block.
- **Data Displayed:** Categories (`service_categories`), Services (`services`), Intro Settings (`service_settings`).
- **Data Submitted:** None.
- **Related Module:** `MOD-SERV-01`
- **Auth Requirement:** None.
- **Implementation Status:** **COMPLETE**
- **Evidence:** [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx).

---

### SCR-PUB-04: Service Detail Page
- **Screen ID:** `SCR-PUB-04`
- **Screen Name:** Service Technical Detail
- **URL / Route:** `/services/:slug`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** Deep-dive technical specification sheet for a specific engineering service offering.
- **Main UI Sections:** Service Hero Banner, Badges Strip, Technical Narrative, Specifications Key-Value Table, Performance Metrics Strip, Sidebar Inquiry Prompt.
- **Data Displayed:** Single service record (`services`) matched by `slug` with decoded `technical_specs` and `metrics` arrays.
- **Data Submitted:** None.
- **Related Module:** `MOD-SERV-01`
- **Auth Requirement:** None.
- **Implementation Status:** **COMPLETE**
- **Evidence:** [ServiceDetail.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx).

---

### SCR-PUB-05: How We Work (Methodology)
- **Screen ID:** `SCR-PUB-05`
- **Screen Name:** How We Work (Operational Methodology)
- **URL / Route:** `/how-we-work`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** 5-phase operational execution framework explanation.
- **Main UI Sections:** Hero Section, Sticky Phase HUD Bar (Phase 1-5 anchor links), Detailed Phase Breakdown with diagrams, Verification Checklist.
- **Data Displayed:** Hardcoded static text (Site Survey, BIM Design, Documentation, Procurement, Installation).
- **Data Submitted:** None.
- **Related Module:** `MOD-DISC-02`
- **Auth Requirement:** None.
- **Implementation Status:** **BROKEN (Data Disconnected)** (Does not fetch from backend `home_processes` API).
- **Evidence:** [HowWeWork.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/HowWeWork.jsx).

---

### SCR-PUB-06: Partners & Clients
- **Screen ID:** `SCR-PUB-06`
- **Screen Name:** Strategic Partners & Clients Ecosystem
- **URL / Route:** `/clients`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** Present certified solution partner manufacturers (FIREX, NAFFCO, Lackeby, etc.), institutional client logos, and client testimonials.
- **Main UI Sections:** Hero Header, Solution Partners Grid, Client Organizations Grid, Testimonials Slider, Partnership CTA.
- **Data Displayed:** Solution Partners (`solution_partners`), Clients (`clients`), Testimonials (`client_testimonials`), Settings (`client_settings`).
- **Data Submitted:** None.
- **Related Module:** `MOD-CLNT-01`
- **Auth Requirement:** None.
- **Implementation Status:** **COMPLETE**
- **Evidence:** [Clients.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Clients.jsx).

---

### SCR-PUB-07: Careers & Openings
- **Screen ID:** `SCR-PUB-07`
- **Screen Name:** Careers & Job Openings
- **URL / Route:** `/careers`
- **Area:** PUBLIC
- **Actor:** Job Applicant / Public Visitor
- **Purpose:** Publish open engineering vacancies and accept candidate applications.
- **Main UI Sections:** Careers Hero, Culture Highlights, Vacancies Accordion, Application Modal (Name, Email, Position, LinkedIn, Summary, Resume File Upload).
- **Data Displayed:** Open Vacancies (`vacancies`), Career Settings (`contact_settings`).
- **Data Submitted:** Multipart form (`name`, `email`, `position`, `linkedin`, `dossier` file, `summary`) via `POST /api/careers/apply`.
- **Related Module:** `MOD-CAR-01`
- **Auth Requirement:** None.
- **Implementation Status:** **PARTIAL (Critical PII Security Issue)** ([SEC-02] public file storage; missing rate limiting).
- **Evidence:** [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx).

---

### SCR-PUB-08: Portfolio / Projects Showcase
- **Screen ID:** `SCR-PUB-08`
- **Screen Name:** Project Portfolio
- **URL / Route:** `/portfolio`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** Showcase completed major industrial engineering projects with filtering by category.
- **Main UI Sections:** Category Filter Tabs, Project Card Grid, Project Detail Modal with challenge/solution/metrics breakdown.
- **Data Displayed:** 6 complex projects loaded from a hardcoded 600-line static JavaScript array.
- **Data Submitted:** None.
- **Related Module:** `MOD-DISC-01`
- **Auth Requirement:** None.
- **Implementation Status:** **BROKEN (Data Disconnected)** (Bypasses backend database entirely).
- **Evidence:** [Portfolio.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Portfolio.jsx).

---

### SCR-PUB-09: Contact Us
- **Screen ID:** `SCR-PUB-09`
- **Screen Name:** Contact Us & Inquiries
- **URL / Route:** `/contact`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** Display office contact information and accept structured inquiries.
- **Main UI Sections:** Contact Information Cards, Emergency Hotline Protocol, Project Inquiry Submission Form.
- **Data Displayed:** Contact Settings (`contact_settings`).
- **Data Submitted:** Inquiry payload (`name`, `email`, `department`, `details`) via `POST /api/contact/submit`.
- **Related Module:** `MOD-CONT-01`
- **Auth Requirement:** None.
- **Implementation Status:** **COMPLETE (Security Gaps)** (No rate limiting, no email alerts).
- **Evidence:** [Contact.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx).

---

### SCR-PUB-10: FAQ
- **Screen ID:** `SCR-PUB-10`
- **Screen Name:** Frequently Asked Questions
- **URL / Route:** `/faq`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** Searchable and expandable list of engineering compliance and service FAQs.
- **Main UI Sections:** Hero Header, Search Input, Accordion List of Questions and Answers.
- **Data Displayed:** Active FAQ records (`faqs`).
- **Data Submitted:** None.
- **Related Module:** `MOD-FAQ-01`
- **Auth Requirement:** None.
- **Implementation Status:** **COMPLETE**
- **Evidence:** [FAQ.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx).

---

### SCR-PUB-11: Project Demo (Placeholder Stub)
- **Screen ID:** `SCR-PUB-11`
- **Screen Name:** Project Demonstration Stub
- **URL / Route:** `/project-demo`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** "Working On It" placeholder page.
- **Data Displayed:** Static text: "Working On It. The detailed project demonstration and case studies will be published soon."
- **Implementation Status:** **MOCKUP / STUB**
- **Evidence:** [ProjectDemo.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ProjectDemo.jsx).

---

### SCR-PUB-12: Pricing / Tenders (Orphaned)
- **Screen ID:** `SCR-PUB-12`
- **Screen Name:** Transparent Pricing Models
- **URL / Route:** `(None / Unrouted)`
- **Area:** PUBLIC
- **Actor:** Public Visitor
- **Purpose:** Display 3 fixed pricing tiers ($4,500 Standard Audit, $12,000 Enterprise Spec v2, Custom Elite Infrastructure).
- **Implementation Status:** **MOCKUP / ORPHANED** (Component exists in [Pricing.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Pricing.jsx) but is not registered in `FrontendApp.jsx` routes).
- **Evidence:** [Pricing.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Pricing.jsx).

---

## 2. Authentication Screen (Area: AUTH)

### SCR-AUTH-01: Admin Login
- **Screen ID:** `SCR-AUTH-01`
- **Screen Name:** Admin System Access
- **URL / Route:** `/admin-portal/login`
- **Area:** AUTH
- **Actor:** System Administrator
- **Purpose:** Server-rendered authentication form to establish admin session.
- **Main UI Sections:** Ambient background glow, Credential Card (Email, Password, Remember Device, Submit Button).
- **Data Submitted:** Form POST with `email`, `password`, `remember` checkbox, and `@csrf` token.
- **Related Module:** `MOD-AUTH-01`
- **Auth Requirement:** Unauthenticated (Redirects to `/admin-portal` if already logged in).
- **Implementation Status:** **COMPLETE (Lacks Rate Limiting)**
- **Evidence:** [login.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/login.blade.php), [AuthController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AuthController.php).

---

## 3. Administrative Control Screens (Area: ADMIN)

### SCR-ADM-01: Admin Dashboard (Mockup)
- **Screen ID:** `SCR-ADM-01`
- **Screen Name:** Admin Control Overview
- **URL / Route:** `/admin-portal`
- **Area:** ADMIN
- **Actor:** System Administrator
- **Implementation Status:** **MOCKUP (Non-Functional)**
- **Data Displayed:** Static metrics ("$24.8M Revenue", "142 Specs"), static audit table, fake security log.
- **Evidence:** [Dashboard.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Dashboard.jsx).

---

### SCR-ADM-02: Homepage Manager
- **Screen ID:** `SCR-ADM-02`
- **Screen Name:** Homepage CMS Manager
- **URL / Route:** `/admin-portal/homepage`
- **Area:** ADMIN
- **Actor:** System Administrator
- **Purpose:** Full CRUD management over all homepage entities and general settings.
- **Main UI Sections:** Tab Bar (Slider, Services, Methodology, Leadership, Competencies, Projects, Settings), Entity Tables, Creation/Edit Modal with image upload.
- **Data Displayed / Changed:** Slides (`home_slides`), Services (`home_services`), Processes (`home_processes`), Leaders (`home_leaders`), Competencies (`home_competencies`), Projects (`home_projects`), Settings (`home_settings`).
- **Related Module:** `MOD-HOME-02`
- **Implementation Status:** **COMPLETE (Monolithic Component)**
- **Evidence:** [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx).

---

### SCR-ADM-03: Services Manager
- **Screen ID:** `SCR-ADM-03`
- **Screen Name:** Services CMS Manager
- **URL / Route:** `/admin-portal/services-manager`
- **Area:** ADMIN
- **Actor:** System Administrator
- **Purpose:** Manage service offerings, category taxonomy, rich-text technical parameters, and page settings.
- **Main UI Sections:** Sub-tabs (Services, Categories, Page Settings), Service Cards Grid, Creation/Edit Modal with specs JSON builder.
- **Data Displayed / Changed:** Categories (`service_categories`), Services (`services`), Settings (`service_settings`).
- **Related Module:** `MOD-SERV-02`
- **Implementation Status:** **COMPLETE (Monolithic Component)**
- **Evidence:** [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx).

---

### SCR-ADM-04: About Page Manager
- **Screen ID:** `SCR-ADM-04`
- **Screen Name:** About Us CMS Manager
- **URL / Route:** `/admin-portal/about-manager`
- **Area:** ADMIN
- **Actor:** System Administrator
- **Purpose:** Manage pillars, advisors, leadership team members, milestones, and corporate graphics.
- **Main UI Sections:** Sub-tabs (Pillars, Advisors, Leadership Team, Milestones, General Settings), Modals for each entity type.
- **Data Displayed / Changed:** Pillars (`about_pillars`), Advisors (`about_advisors`), Team (`about_team`), Milestones (`about_milestones`), Settings (`about_settings`).
- **Related Module:** `MOD-ABT-02`
- **Implementation Status:** **COMPLETE (Monolithic Component)**
- **Evidence:** [AboutManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx).

---

### SCR-ADM-05: Contact Manager
- **Screen ID:** `SCR-ADM-05`
- **Screen Name:** Contact & Inquiries Manager
- **URL / Route:** `/admin-portal/contact-manager`
- **Area:** ADMIN
- **Actor:** System Administrator
- **Purpose:** Review submitted inquiries and update contact settings.
- **Main UI Sections:** Contact Settings Form, Inquiries Table with message preview and deletion.
- **Data Displayed / Changed:** Settings (`contact_settings`), Inquiries (`contact_inquiries`).
- **Related Module:** `MOD-CONT-02`
- **Implementation Status:** **COMPLETE**
- **Evidence:** [ContactManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ContactManager.jsx).

---

### SCR-ADM-06: Careers Manager
- **Screen ID:** `SCR-ADM-06`
- **Screen Name:** Careers & Vacancies Manager
- **URL / Route:** `/admin-portal/careers-manager`
- **Area:** ADMIN
- **Actor:** System Administrator
- **Purpose:** Manage job openings, careers hero graphics, and candidate application submissions.
- **Main UI Sections:** Vacancies Table with Add/Edit Modal, Careers Settings, Submitted Applications Table with resume download link and deletion.
- **Data Displayed / Changed:** Vacancies (`vacancies`), Applications (`applications`), Settings (`contact_settings`).
- **Related Module:** `MOD-CAR-02`
- **Implementation Status:** **COMPLETE**
- **Evidence:** [CareersManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx).

---

### SCR-ADM-07: FAQ Manager
- **Screen ID:** `SCR-ADM-07`
- **Screen Name:** FAQ Manager
- **URL / Route:** `/admin-portal/faq-manager`
- **Area:** ADMIN
- **Actor:** System Administrator
- **Purpose:** Manage question-and-answer repository.
- **Main UI Sections:** FAQ Paginated Table, Question Creation/Edit Modal.
- **Data Displayed / Changed:** FAQs (`faqs`).
- **Related Module:** `MOD-FAQ-02`
- **Implementation Status:** **COMPLETE**
- **Evidence:** [FaqManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/FaqManager.jsx).

---

### SCR-ADM-08: Clients & Partners Manager
- **Screen ID:** `SCR-ADM-08`
- **Screen Name:** Clients & Partners Manager
- **URL / Route:** `/admin-portal/clients-manager`
- **Area:** ADMIN
- **Actor:** System Administrator
- **Purpose:** Manage client logos, certified solution partners, testimonials, and page graphics.
- **Main UI Sections:** Sub-tabs (Clients, Solution Partners, Testimonials, Page Settings), Modals for each entity.
- **Data Displayed / Changed:** Clients (`clients`), Partners (`solution_partners`), Testimonials (`client_testimonials`), Settings (`client_settings`).
- **Related Module:** `MOD-CLNT-02`
- **Implementation Status:** **COMPLETE**
- **Evidence:** [ClientsManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ClientsManager.jsx).

---

### SCR-ADM-09: System Commands Runner
- **Screen ID:** `SCR-ADM-09`
- **Screen Name:** System Commands Console
- **URL / Route:** `/admin-portal/system-commands`
- **Area:** ADMIN
- **Actor:** System Administrator
- **Purpose:** Execute pre-approved maintenance operations directly from the web panel.
- **Main UI Sections:** Password Authorization Modal, Command Action Grid (`Optimize Clear`, `Migrate`, `Storage Symlink`, `Build Assets (Vite)`), Terminal Output Console Log.
- **Related Module:** `MOD-SYS-01`
- **Implementation Status:** **PARTIAL (Fails under config:cache)** ([BE-03]).
- **Evidence:** [SystemCommands.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx).

---

### SCR-ADM-10 through SCR-ADM-16: Starter Template Mockups (7 Screens)
- **Screen IDs:** `SCR-ADM-10` to `SCR-ADM-16`
- **Routes:**
  - `SCR-ADM-10`: `/admin-portal/products` ([Products.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Products.jsx))
  - `SCR-ADM-11`: `/admin-portal/orders` ([Orders.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Orders.jsx))
  - `SCR-ADM-12`: `/admin-portal/users` ([Users.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Users.jsx))
  - `SCR-ADM-13`: `/admin-portal/analytics` ([Analytics.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Analytics.jsx))
  - `SCR-ADM-14`: `/admin-portal/notifications` ([Notifications.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Notifications.jsx))
  - `SCR-ADM-15`: `/admin-portal/settings` ([Settings.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Settings.jsx))
  - `SCR-ADM-16`: `/admin-portal/profile` ([Profile.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Profile.jsx))
- **Area:** ADMIN
- **Actor:** System Administrator
- **Implementation Status:** **MOCKUP (Non-Functional)** (Copied placeholder screens with zero backend API connectivity).
- **Evidence:** [AdminApp.jsx:L38-L45](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx#L38-L45).

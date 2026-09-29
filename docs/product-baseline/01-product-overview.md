# Product Overview & Domain Baseline

**Project:** AR Engineering Modernization  
**Document:** Product Overview (Baseline)  
**Status:** Baseline Documented (Phase 2.1)  
**Date:** September 2026  
**Evidence Source:** Repository code, database seeders, public and admin templates  

---

## 1. Product Identity & Purpose

| Attribute | Baseline Value | Evidence / Verification | Status |
| :--- | :--- | :--- | :--- |
| **Product Name** | AR Engineering (with legacy starter template references to "Titan Precision") | [resources/views/frontend.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/frontend.blade.php#L6), [Navbar.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L23-L33) | **VERIFIED** |
| **Primary Domain** | Industrial engineering solutions, MEP (Mechanical, Electrical, Plumbing) engineering, fire protection systems, industrial automation/SCADA, and facility maintenance services. | [frontend.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/frontend.blade.php#L7), [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx), [ServiceSeeder.php](file:///c:/Users/khademul/Herd/ar_frontend/database/seeders/ServiceSeeder.php) | **VERIFIED** |
| **Product Purpose** | Serve as the digital presence and administrative content management system (CMS) for an engineering consultancy and contracting firm, showcasing capabilities, certified solution partners, client projects, accepting inquiries, and managing employment applications. | [FrontendApp.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/FrontendApp.jsx), [AdminApp.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx) | **VERIFIED** |
| **Target Geography** | Industrial and commercial sectors in Bangladesh / International engineering projects (indicated by corporate email domains `@arengineeringbd.com` and profile documents). | [Users.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Users.jsx#L5-L8), [Navbar.jsx:L61](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L61) | **VERIFIED** |

---

## 2. Core Business Problem Solved

1. **Digital Showcase & Technical Credibility:** Provides detailed technical specifications, certifications, NFPA/ISO compliance data, and service breakdowns for industrial clients requiring verified engineering capabilities.
2. **Dynamic Corporate Content Management:** Allows non-technical administrative staff to update homepage hero carousels, leadership profiles, services, company milestones, FAQs, and strategic partners without modifying code.
3. **Inquiry & Lead Capture:** Captures industrial project inquiries and RFQs categorized by department.
4. **Talent Acquisition Channel:** Publishes active job openings and receives candidate applications with uploaded resumes/dossiers.

---

## 3. Target Users & User Types

```
+--------------------------------------------------------------------------------+
| USER ACTORS & SYSTEM INTERFACES                                                |
+--------------------------------------------------------------------------------+
| [Public Visitors / Prospective Clients / Job Seekers]                          |
|         │                                                                      |
|         ▼ (Browser: HTTP GET / Public REST APIs)                               |
| ┌────────────────────────────────────────────────────────────────────────────┐ |
| │ Public React Frontend SPA (routes: /, /about, /services, /careers, etc.)  │ |
| └────────────────────────────────────────────────────────────────────────────┘ |
|                                                                                |
| [System Administrators]                                                        |
|         │                                                                      |
|         ▼ (Session Login: /admin-portal/login -> Protected Admin Portal)       |
| ┌────────────────────────────────────────────────────────────────────────────┐ |
| │ Admin React Management SPA (routes: /admin-portal/*)                       │ |
| └────────────────────────────────────────────────────────────────────────────┘ |
+--------------------------------------------------------------------------------+
```

| User Type | Authentication | Primary Objective | Implemented Interface |
| :--- | :---: | :--- | :--- |
| **Public Visitor / Client** | No | Browse engineering capabilities, inspect partner credentials, review case studies, submit project inquiries. | Public React SPA ([resources/js/frontend/](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/)) |
| **Job Applicant** | No | Browse open career vacancies, submit applications with resume attachments. | Careers Page ([Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx)) |
| **System Administrator** | Yes (Session Auth) | Update CMS content, review submitted inquiries, process applications, run maintenance commands. | Admin React Portal ([resources/js/admin/](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/)) |

---

## 4. System Boundaries & High-Level Scope

### 4.1 What Is Actually Implemented & Operational (VERIFIED)
- **Public Dynamic Content Pages:** Homepage, Services Catalog, Service Detail, About Us, Partners/Clients, Careers, FAQ, Contact Us.
- **Inquiry Processing:** Database storage of contact inquiries via `ContactPageController@submit`.
- **Job Application Ingestion:** File upload and database storage of candidate applications via `CareersPageController@apply`.
- **Administrative CMS Suite:** Dedicated CRUD managers for Slides, Services, Categories, About Pillars/Advisors/Team/Milestones, Vacancies, Clients, Testimonials, Partners, and FAQs.
- **System Maintenance Console:** Password-protected interface executing selected Artisan and shell commands.

### 4.2 What Is Placeholder / Non-Functional Mockup (VERIFIED)
- **Admin Products Inventory (`/admin-portal/products`):** Static dummy table of component parts (`PROD-V2-01` to `PROD-V2-05`). No backend model, table, or API exists.
- **Admin Orders / Tenders (`/admin-portal/orders`):** Static dummy table of tenders (`TNDR-2026-091` to `TNDR-2026-095`). No backend model, table, or API exists.
- **Admin User Management (`/admin-portal/users`):** Static list of 5 hardcoded names with no CRUD functionality.
- **Admin Analytics (`/admin-portal/analytics`):** Hardcoded SVG graphs and static percentage metrics.
- **Admin Notifications (`/admin-portal/notifications`):** Static mockup list of 4 alerts.
- **Admin System Settings & Profile (`/admin-portal/settings`, `/admin-portal/profile`):** Static unwired HTML form inputs.
- **Admin Dashboard (`/admin-portal`):** Static financial cards ("$24.8M Annual Revenue") and fake security logs.
- **Public Pricing Page (`/pricing` / `Pricing.jsx`):** Unrouted static pricing tiers component.
- **Public Case Study Demo (`/project-demo` / `ProjectDemo.jsx`):** Static "Working on it" construction stub.

### 4.3 What Is Unclear / Requires Business Confirmation (UNKNOWN)

1. **E-Commerce / Tender Management Intent:**
   - *Status:* **UNKNOWN / REQUIRES BUSINESS CONFIRMATION**
   - *Detail:* Were the `Products` and `Orders` tabs in the admin panel intended for a future tender tracking system or client parts inventory, or are they obsolete starter-theme artifacts that should be permanently removed?
2. **Pricing Page Business Model:**
   - *Status:* **UNKNOWN / REQUIRES BUSINESS CONFIRMATION**
   - *Detail:* [Pricing.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Pricing.jsx) defines fixed prices ($4,500 Standard Audit, $12,000 Enterprise Spec v2). Does AR Engineering offer fixed-price engineering audit packages, or is all engineering work quoted custom per RFQ?
3. **Email Notifications & Outbound Dispatch:**
   - *Status:* **UNKNOWN / REQUIRES BUSINESS CONFIRMATION**
   - *Detail:* Currently, contact inquiries and job applications are written only to the database with no email notifications sent to HR or sales. Is email dispatch (via SMTP/SES) required?
4. **Portfolio CMS Integration:**
   - *Status:* **UNKNOWN / REQUIRES BUSINESS CONFIRMATION**
   - *Detail:* The database contains `home_projects` table and admin has `Projects CRUD`, but [Portfolio.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Portfolio.jsx) has a distinct 6-project static dataset. Should `Portfolio.jsx` be driven by `home_projects` or a dedicated full-scale `projects` table?

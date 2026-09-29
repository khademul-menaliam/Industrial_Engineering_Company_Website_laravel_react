# Feature ↔ Screen ↔ Role Mapping Matrix

**Project:** AR Engineering Modernization  
**Document:** Feature ↔ Screen ↔ Role Map (Baseline)  
**Status:** Baseline Documented (Phase 2.5)  
**Date:** September 2026  
**Evidence Source:** Cross-referenced inspection of routes, controllers, models, and React views  

---

## 1. Master Traceability Matrix

| Feature / Module | Screen / Page | Primary Actor | Auth Req? | Main Actions Performed | Implementation Status |
| :--- | :--- | :--- | :---: | :--- | :--- |
| **Admin Authentication** (`MOD-AUTH-01`) | Admin Login (`SCR-AUTH-01`) | Administrator | No (Public) | Submit email/password; establish session cookie | **Complete** *(Missing Rate Limit)* |
| **Homepage Showcase** (`MOD-HOME-01`) | Public Homepage (`SCR-PUB-01`) | Visitor | No | View slides, capabilities, process HUD, leaders, competencies, project cards, partner marquee | **Partial** *(Draft Data Leak via ?admin=1)* |
| **Homepage CMS Management** (`MOD-HOME-02`) | Homepage Manager (`SCR-ADM-02`) | Administrator | Yes | Full CRUD on 6 repeatable entities; bulk settings update; image uploads | **Complete** *(Monolithic Code)* |
| **Services Catalog** (`MOD-SERV-01`) | Services Page (`SCR-PUB-03`) | Visitor | No | Filter by category; browse service cards; read zero-downtime info | **Complete** |
| **Service Technical Detail** (`MOD-SERV-01`) | Service Detail (`SCR-PUB-04`) | Visitor | No | View technical specification table, metrics, badges, hero graphic | **Complete** |
| **Services CMS Management** (`MOD-SERV-02`) | Services Manager (`SCR-ADM-03`) | Administrator | Yes | CRUD on categories; CRUD on services with JSON specs/metrics; settings update | **Complete** *(Monolithic Code)* |
| **About Us Showcase** (`MOD-ABT-01`) | About Us Page (`SCR-PUB-02`) | Visitor | No | View corporate background, CEO note, pillars, advisors, leadership, timeline | **Partial** *(Ignores is_active)* |
| **About Us CMS Management** (`MOD-ABT-02`) | About Manager (`SCR-ADM-04`) | Administrator | Yes | CRUD on pillars, advisors, team members, milestones; hero/CEO image upload | **Complete** *(Monolithic Code)* |
| **Contact & Inquiries** (`MOD-CONT-01`) | Contact Page (`SCR-PUB-09`) | Visitor | No | View office/emergency details; submit categorized project inquiry | **Complete** *(No Rate Limit/Emails)* |
| **Inquiries Management** (`MOD-CONT-02`) | Contact Manager (`SCR-ADM-05`) | Administrator | Yes | Read submitted inquiries list; delete inquiries; update contact settings | **Complete** |
| **Careers & Applications** (`MOD-CAR-01`) | Careers Page (`SCR-PUB-07`) | Job Applicant | No | Browse vacancies; submit application with resume upload (PDF/DOCX) | **Partial** *(Public Resume PII Risk)* |
| **Vacancies & Applications CMS** (`MOD-CAR-02`)| Careers Manager (`SCR-ADM-06`) | Administrator | Yes | CRUD on vacancies; review applications; download resume dossiers; delete | **Complete** |
| **Partners & Clients Showcase** (`MOD-CLNT-01`)| Clients Page (`SCR-PUB-06`) | Visitor | No | View certified partners, client logos, testimonials slider, CTA | **Complete** *(Seeder Duplication)* |
| **Clients & Partners CMS** (`MOD-CLNT-02`) | Clients Manager (`SCR-ADM-08`) | Administrator | Yes | CRUD on clients, solution partners, testimonials; hero background upload | **Complete** *(Monolithic Code)* |
| **FAQ Knowledge Base** (`MOD-FAQ-01`) | FAQ Page (`SCR-PUB-10`) | Visitor | No | Search and expand frequently asked questions | **Complete** |
| **FAQ CMS Management** (`MOD-FAQ-02`) | FAQ Manager (`SCR-ADM-07`) | Administrator | Yes | Paginated FAQ table; create, edit, delete, and reorder Q&A items | **Complete** |
| **System Commands Console** (`MOD-SYS-01`) | System Commands (`SCR-ADM-09`) | Administrator | Yes | Enter secondary password; execute whitelisted Artisan & Vite build commands | **Partial** *(Breaks on config:cache)* |
| **Static Portfolio Showcase** (`MOD-DISC-01`) | Portfolio Page (`SCR-PUB-08`) | Visitor | No | Filter projects; open project detail modal (Data hardcoded in JS) | **Broken** *(Data Disconnected)* |
| **Static Methodology Workflow** (`MOD-DISC-02`)| How We Work (`SCR-PUB-05`) | Visitor | No | View 5-phase framework with HUD anchor bar (Static HTML) | **Broken** *(Data Disconnected)* |
| **Pricing Models (Orphaned)** | Pricing Page (`SCR-PUB-12`) | Visitor | No | View fixed pricing tiers (Unrouted component in codebase) | **Mockup / Orphaned** |
| **Project Case Study Demo** | Project Demo (`SCR-PUB-11`) | Visitor | No | View "Working on it" construction stub | **Mockup / Stub** |
| **Admin Overview Dashboard** | Dashboard (`SCR-ADM-01`) | Administrator | Yes | View hardcoded $24.8M revenue stats, fake audits, fake logs | **Mockup** *(No Backend)* |
| **Component Inventory** | Products (`SCR-ADM-10`) | Administrator | Yes | View hardcoded table of parts (PROD-V2-01 to 05) | **Mockup** *(No Backend)* |
| **Project Tenders** | Orders (`SCR-ADM-11`) | Administrator | Yes | View hardcoded table of tenders (TNDR-2026-091 to 095) | **Mockup** *(No Backend)* |
| **Personnel Directory** | Users (`SCR-ADM-12`) | Administrator | Yes | View hardcoded list of 5 fake users | **Mockup** *(No Backend)* |
| **Analytics Dashboard** | Analytics (`SCR-ADM-13`) | Administrator | Yes | View static SVG graphs and dummy numbers | **Mockup** *(No Backend)* |
| **Notifications** | Notifications (`SCR-ADM-14`) | Administrator | Yes | View 4 static notification cards | **Mockup** *(No Backend)* |
| **System Settings** | Settings (`SCR-ADM-15`) | Administrator | Yes | Unwired form inputs for telemetry and backup nodes | **Mockup** *(No Backend)* |
| **Administrator Profile** | Profile (`SCR-ADM-16`) | Administrator | Yes | Unwired form inputs for profile bio | **Mockup** *(No Backend)* |

---

## 2. Product Disconnect & Architectural Gap Analysis

### 2.1 Frontend Screens with No Real Backend (Mockups)
The following 8 admin screens and 2 public screens have no underlying database models, migrations, or API endpoints:
1. `SCR-ADM-01` (Admin Dashboard)
2. `SCR-ADM-10` (Products Inventory)
3. `SCR-ADM-11` (Orders / Tenders)
4. `SCR-ADM-12` (Users Directory)
5. `SCR-ADM-13` (Analytics)
6. `SCR-ADM-14` (Notifications)
7. `SCR-ADM-15` (System Settings)
8. `SCR-ADM-16` (Profile)
9. `SCR-PUB-11` (Project Demo Case Studies — static placeholder)
10. `SCR-PUB-12` (Pricing — orphaned component)

### 2.2 Frontend Screens Disconnected from Existing Backend Models
1. **Portfolio (`/portfolio` / `SCR-PUB-08`):**
   - *Backend Exists:* Database table `home_projects` and model `HomeProject` exist; admin can create/edit projects via `HomepageManager.jsx`.
   - *Frontend Disconnect:* [Portfolio.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Portfolio.jsx) ignores the backend completely and renders a hardcoded static array of 6 projects.
2. **How We Work (`/how-we-work` / `SCR-PUB-05`):**
   - *Backend Exists:* Database table `home_processes` and model `HomeProcess` exist; admin can create/edit methodology steps.
   - *Frontend Disconnect:* [HowWeWork.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/HowWeWork.jsx) renders hardcoded HTML.

### 2.3 Backend Endpoints with No Frontend Consumer
1. **Dormant `routes/api.php`:**
   - 55 lines of route definitions matching `/home` and `/admin/home/*` that are never registered in [bootstrap/app.php](file:///c:/Users/khademul/Herd/ar_frontend/bootstrap/app.php).

### 2.4 Screens / Data Accessible by Wrong Actor (Authorization Gaps)
1. **Draft Content Exposure on Public Route:**
   - [HomeController.php:L22](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/HomeController.php#L22) allows any public visitor to view draft/inactive slides and projects simply by passing `?admin=1`.
2. **Candidate Resume Exposure:**
   - Anyone on the public internet can access candidate resumes in `/storage/dossiers/` without logging in.

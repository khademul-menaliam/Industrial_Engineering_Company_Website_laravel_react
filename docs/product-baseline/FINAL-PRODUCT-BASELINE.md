# Master Product Baseline: AR Engineering

**Project:** AR Engineering Application Modernization  
**Phase:** Phase 2 — Final Product Baseline (Phases 2.1 – 2.10)  
**Status:** Baseline Finalized & Traceable  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  

---

## 1. Product Summary & Scope

**AR Engineering** is a monolithic web application built on **Laravel 13** and **React 19** providing:
1. **A Public Corporate Engineering Portal:** Showcasing engineering disciplines (Fire Safety, MEP Design, Industrial Automation, Facility Maintenance), technical specification sheets, certified solution partners (FIREX, NITTAN, NAFFCO, Lackeby, Waterfall Pumps, Morgan Marine), leadership profiles, job vacancies, and accepting structured inquiries.
2. **An Administrative Content Management System (CMS):** A session-authenticated control panel allowing administrators to manage all public corporate content, review client inquiries, process employment applications, and run system diagnostics.

### Implementation Status Scope Classification:
- **Verified Functional Scope:** Homepage CMS, Services Catalog & Specs, About Us CMS, Contact Inquiries, Careers Job Board & Applications, FAQ Knowledge Base, Partners/Clients CMS, and System Maintenance Console.
- **Disconnected Scope:** Portfolio Page (`/portfolio`) and How We Work Page (`/how-we-work`) are currently hardcoded static React views bypassing backend database models.
- **Placeholder / Mockup Scope:** 8 admin control screens (`Dashboard`, `Products`, `Orders`, `Users`, `Analytics`, `Notifications`, `Settings`, `Profile`) and 2 public views (`Project Demo`, `Pricing`) are static mockups copied from a starter template.

---

## 2. Implemented Actors & User Hierarchy

```
+-----------------------------------------------------------------------------------------+
| MASTER ACTOR CLASSIFICATION                                                             |
+---------------------+-------------------+---------------------+-------------------------+
| Actor Name          | Implementation    | Authentication      | Accessible Interfaces   |
+---------------------+-------------------+---------------------+-------------------------+
| Public Visitor      | VERIFIED FACT     | None (Anonymous)    | Public Pages (/, etc.)  |
| Job Applicant       | VERIFIED FACT     | None (Anonymous)    | Careers (/careers)      |
| System Administrator| VERIFIED FACT     | Session Cookie      | Admin (/admin-portal/*) |
+---------------------+-------------------+---------------------+-------------------------+
| HR Recruiter        | UNIMPLEMENTED     | Potential Role      | None                    |
| Content Editor      | UNIMPLEMENTED     | Potential Role      | None                    |
| Client Portal User  | UNIMPLEMENTED     | Potential Role      | None                    |
+---------------------+-------------------+---------------------+-------------------------+
```

---

## 3. Product Traceability Matrix (Feature ↔ Screen ↔ Actor ↔ Flow ↔ Entity)

| Feature ID & Name | Screen ID & Route | Primary Actor | Primary Flow ID | Primary Data Entity | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **MOD-AUTH-01** (Admin Auth) | `SCR-AUTH-01` (`/admin-portal/login`) | Administrator | `FLOW-ADM-01` | `ENT-01` (`users`), `sessions` | **Complete** *(Missing Rate Limit)* |
| **MOD-HOME-01** (Home Showcase) | `SCR-PUB-01` (`/`) | Visitor | `FLOW-PUB-01` | `ENT-05` to `ENT-11` (`home_*`), `ENT-21` | **Partial** *(?admin=1 Leak)* |
| **MOD-HOME-02** (Home CMS) | `SCR-ADM-02` (`/admin-portal/homepage`)| Administrator | `FLOW-ADM-02` | `ENT-05` to `ENT-11` (`home_*`) | **Complete** *(Monolithic Code)* |
| **MOD-SERV-01** (Services Catalog)| `SCR-PUB-03` (`/services`) | Visitor | `FLOW-PUB-02` | `ENT-02` (`service_categories`), `ENT-03`| **Complete** |
| **MOD-SERV-01** (Service Detail) | `SCR-PUB-04` (`/services/:slug`) | Visitor | `FLOW-PUB-02` | `ENT-03` (`services` JSON specs/metrics) | **Complete** |
| **MOD-SERV-02** (Services CMS) | `SCR-ADM-03` (`/admin-portal/services`)| Administrator | `FLOW-ADM-03` | `ENT-02`, `ENT-03`, `ENT-04` | **Complete** *(Monolithic Code)* |
| **MOD-ABT-01** (About Showcase) | `SCR-PUB-02` (`/about`) | Visitor | `FLOW-PUB-01` | `ENT-12` to `ENT-16` (`about_*`) | **Partial** *(Ignores is_active)* |
| **MOD-ABT-02** (About CMS) | `SCR-ADM-04` (`/admin-portal/about`) | Administrator | `FLOW-ADM-02` | `ENT-12` to `ENT-16` (`about_*`) | **Complete** *(Monolithic Code)* |
| **MOD-CONT-01** (Contact Us) | `SCR-PUB-09` (`/contact`) | Visitor | `FLOW-PUB-03` | `ENT-17` (`contact_inquiries`), `ENT-18` | **Complete** *(No Rate Limit/Email)* |
| **MOD-CONT-02** (Inquiries CMS)| `SCR-ADM-05` (`/admin-portal/contact`)| Administrator | `FLOW-ADM-04` | `ENT-17` (`contact_inquiries`), `ENT-18` | **Complete** |
| **MOD-CAR-01** (Careers Board) | `SCR-PUB-07` (`/careers`) | Applicant | `FLOW-PUB-04` | `ENT-19` (`vacancies`), `ENT-20` (`apps`) | **Partial** *(Public Resume Risk)* |
| **MOD-CAR-02** (Careers CMS) | `SCR-ADM-06` (`/admin-portal/careers`)| Administrator | `FLOW-ADM-04` | `ENT-19` (`vacancies`), `ENT-20` (`apps`) | **Complete** |
| **MOD-CLNT-01** (Partners/Clients)| `SCR-PUB-06` (`/clients`) | Visitor | `FLOW-PUB-01` | `ENT-21` (`clients`), `ENT-24` (`partners`)| **Complete** *(Seeder Duplication)* |
| **MOD-CLNT-02** (Partners CMS) | `SCR-ADM-08` (`/admin-portal/clients`)| Administrator | `FLOW-ADM-02` | `ENT-21` to `ENT-24` (`client_*`) | **Complete** *(Monolithic Code)* |
| **MOD-FAQ-01** (FAQ Base) | `SCR-PUB-10` (`/faq`) | Visitor | `FLOW-PUB-05` | `ENT-25` (`faqs`) | **Complete** |
| **MOD-FAQ-02** (FAQ CMS) | `SCR-ADM-07` (`/admin-portal/faq`) | Administrator | `FLOW-ADM-02` | `ENT-25` (`faqs`) | **Complete** |
| **MOD-SYS-01** (System Console)| `SCR-ADM-09` (`/admin-portal/system`)| Administrator | `FLOW-ADM-05` | None (Artisan / Shell runners) | **Partial** *(Fails on config:cache)* |
| **MOD-DISC-01** (Static Portfolio)| `SCR-PUB-08` (`/portfolio`) | Visitor | `FLOW-PUB-01` | Hardcoded JS array (Bypasses `ENT-10`) | **Broken** *(Disconnected Data)* |
| **MOD-DISC-02** (Static Process) | `SCR-PUB-05` (`/how-we-work`) | Visitor | `FLOW-PUB-01` | Hardcoded HTML (Bypasses `ENT-07`) | **Broken** *(Disconnected Data)* |

---

## 4. Key Business Rules Summary

1. **BR-AUTH-01 (Administrative Route Guarding):** `/admin-portal/*` views and `/api/admin/*` APIs require an active authenticated session.
2. **BR-AUTH-02 (Secondary Console Password):** Maintenance commands require entering `COMMAND_CONSOLE_PASSWORD`.
3. **BR-AUTH-03 (Production Database Protection):** Destructive operations (`migrate:fresh`) are strictly blocked when `APP_ENV=production`.
4. **BR-VIS-01 (Active Content Filtering):** Public content queries filter by `where('is_active', true)`.
5. **BR-REL-01 (Category Deletion Guard):** Categories cannot be deleted while services are assigned to them.
6. **BR-VAL-01 (Unique Kebab Slugs):** Services and categories enforce unique slugs.
7. **BR-UPL-01 / 02 (File Constraints):** Resumes capped at 10 MB (PDF/DOCX); CMS graphics capped at 5 MB (Images).
8. **BR-LIFE-01 (Physical File Cleanup):** Deleting a candidate application purges its physical dossier file from disk.

---

## 5. Phase 1 Risk & Debt Factors Impacting the Product Baseline

```
+-----------------------------------------------------------------------------------------+
| PHASE 1 RISKS & PRODUCT IMPACTS                                                         |
+------------+----------+-----------------------------+-----------------------------------+
| Finding ID | Severity | Root Cause                  | Product Impact                    |
+------------+----------+-----------------------------+-----------------------------------+
| DEPL-01    | CRITICAL | Docker CMD migrate:fresh    | Production DB wiped on deploy/boot|
| TEST-01    | CRITICAL | 0% automated test coverage  | Severe regression vulnerability   |
| SEC-02     | HIGH     | Resumes in /storage/dossiers| Candidate PII leaked to public    |
| SEC-01     | HIGH     | ?admin=1 query bypass       | Inactive/draft CMS content leaked |
| BE-03      | HIGH     | env() in CommandController  | Console breaks on config:cache    |
| FE-02      | HIGH     | Hardcoded Portfolio & Flow  | CMS edits do not reflect on web   |
| FE-01      | HIGH     | 1400-line manager components| Performance & UI state corruption |
+------------+----------+-----------------------------+-----------------------------------+
```

---

## 6. Items Requiring Business Confirmation (UNKNOWN)

1. **E-Commerce & Tender Tracking Scope:**
   - *Question:* Should the 8 starter-theme mockup tabs (`Products`, `Orders`, `Users`, `Analytics`, `Notifications`, `Settings`, `Profile`, `Dashboard`) be converted into real functional database modules (e.g. client order/tender tracking), or cleanly removed from the navigation to declutter the CMS?
2. **Fixed Pricing vs. Custom Quotation Policy:**
   - *Question:* Does AR Engineering intend to offer fixed-fee engineering audit tiers (as authored in orphaned [Pricing.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Pricing.jsx)), or operate strictly through custom RFQ consultation?
3. **Internal Notification Architecture:**
   - *Question:* Should inquiry submissions (`/contact`) and job applications (`/careers`) trigger automated email notifications (via Mailgun/SES/SMTP) to internal department leads, or remain stored solely in database tables?
4. **Portfolio CMS Unification:**
   - *Question:* Should the public `/portfolio` route be wired directly to the existing `home_projects` table, or does AR Engineering require an expanded, multi-image case study entity schema?

---

## 7. Baseline Verification & Lock

- **Product Overview:** Documented in [01-product-overview.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/01-product-overview.md).
- **User/Role Inventory:** Documented in [02-user-role-inventory.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/02-user-role-inventory.md).
- **Feature/Module Inventory:** Documented in [03-feature-module-inventory.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/03-feature-module-inventory.md).
- **Screen Inventory:** Documented in [04-screen-inventory.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/04-screen-inventory.md).
- **Feature-Screen-Role Map:** Documented in [05-feature-screen-role-map.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/05-feature-screen-role-map.md).
- **User Flow Inventory:** Documented in [06-user-flow-inventory.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/06-user-flow-inventory.md).
- **Business Rules Inventory:** Documented in [07-business-rules-inventory.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/07-business-rules-inventory.md).
- **Permission Matrix:** Documented in [08-permission-matrix.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/08-permission-matrix.md).
- **Data Entity Inventory:** Documented in [09-data-entity-inventory.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/09-data-entity-inventory.md).
- **Application Source Code Status:** **0 lines modified** (Strictly documentation baseline).

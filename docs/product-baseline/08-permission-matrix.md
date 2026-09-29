# Access Control & Permission Matrix Baseline

**Project:** AR Engineering Modernization  
**Document:** Access Control & Permission Matrix (Baseline)  
**Status:** Baseline Documented (Phase 2.8)  
**Date:** September 2026  
**Evidence Source:** [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php), [config/auth.php](file:///c:/Users/khademul/Herd/ar_frontend/config/auth.php), Controller inspection  

---

## 1. Permission Matrix by Functional Area

### Legend:
- **YES:** Permitted and enforced.
- **NO:** Denied and enforced.
- **N/A:** Not applicable to this entity/action.
- **DISCREPANCY:** Technical enforcement differs from intended access control.

---

### Table 1: Public Web Pages & Discovery Features

| Feature / Screen | Actor | Auth Req? | View | Create | Read | Update | Delete | Submit | Upload | Publish / Unpublish | Technical Enforcement Status |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Homepage** (`SCR-PUB-01`) | Public Visitor | NO | YES | NO | YES | NO | NO | N/A | NO | NO | **DISCREPANCY:** Can view unpublished drafts if `?admin=1` parameter is appended ([SEC-01]). |
| **Homepage** (`SCR-PUB-01`) | Administrator | NO | YES | N/A | YES | N/A | N/A | N/A | N/A | N/A | **YES** |
| **About Us** (`SCR-PUB-02`) | Public Visitor | NO | YES | NO | YES | NO | NO | N/A | NO | NO | **DISCREPANCY:** Inactive pillars/team members returned because controller query lacks `where('is_active', true)`. |
| **Services Catalog** (`SCR-PUB-03`) | Public Visitor | NO | YES | NO | YES | NO | NO | N/A | NO | NO | **YES** (Only active items returned). |
| **Service Detail** (`SCR-PUB-04`) | Public Visitor | NO | YES | NO | YES | NO | NO | N/A | NO | NO | **YES** (Only active items returned). |
| **How We Work** (`SCR-PUB-05`) | Public Visitor | NO | YES | NO | YES | NO | NO | N/A | NO | NO | **DISCREPANCY:** Renders hardcoded static text; ignores backend database. |
| **Partners & Clients** (`SCR-PUB-06`)| Public Visitor | NO | YES | NO | YES | NO | NO | N/A | NO | NO | **YES** (Only active items returned). |
| **FAQ Page** (`SCR-PUB-10`) | Public Visitor | NO | YES | NO | YES | NO | NO | N/A | NO | NO | **YES** (Only active items returned). |
| **Portfolio** (`SCR-PUB-08`) | Public Visitor | NO | YES | NO | YES | NO | NO | N/A | NO | NO | **DISCREPANCY:** Renders hardcoded static JS array; ignores backend `home_projects`. |

---

### Table 2: Inquiries & Job Applications (Public Input & Submissions)

| Feature / Screen | Actor | Auth Req? | View | Create | Read | Update | Delete | Submit | Upload | Publish / Unpublish | Technical Enforcement Status |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Contact Form** (`SCR-PUB-09`) | Public Visitor | NO | YES | N/A | N/A | NO | NO | **YES** | NO | N/A | **DISCREPANCY:** Submissions succeed but lack rate-limiting protection ([SEC-03]). |
| **Careers Page** (`SCR-PUB-07`) | Job Applicant | NO | YES | N/A | N/A | NO | NO | **YES** | **YES** | N/A | **DISCREPANCY:** Resumes uploaded to public disk without access control ([SEC-02]); no rate limiting. |
| **Uploaded Resumes (`/storage/dossiers/*`)** | Public Internet | NO | **YES** | NO | **YES** | NO | NO | N/A | N/A | N/A | **CRITICAL DISCREPANCY:** Direct URL allows unauthenticated public download of candidate PII documents. |

---

### Table 3: Administrative Control Panel (`/admin-portal/*`)

| Feature / Screen | Actor | Auth Req? | View | Create | Read | Update | Delete | Submit | Upload | Publish / Unpublish | Technical Enforcement Status |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **Admin Login** (`SCR-AUTH-01`) | Public Visitor | NO | YES | N/A | N/A | N/A | N/A | **YES** | NO | N/A | **DISCREPANCY:** Missing rate limiting on login brute-force attempts ([SEC-03]). |
| **Admin Login** (`SCR-AUTH-01`) | Administrator | YES | Redirect to `/admin-portal` | N/A | N/A | N/A | N/A | N/A | N/A | N/A | **YES** |
| **Homepage CMS** (`SCR-ADM-02`) | Administrator | YES | YES | YES | YES | YES | YES | YES | YES | YES | **YES** (Protected by `auth` middleware). |
| **Services CMS** (`SCR-ADM-03`) | Administrator | YES | YES | YES | YES | YES | YES | YES | YES | YES | **YES** (Protected by `auth` middleware). |
| **About Us CMS** (`SCR-ADM-04`) | Administrator | YES | YES | YES | YES | YES | YES | YES | YES | YES | **YES** (Protected by `auth` middleware). |
| **Contact Inquiries** (`SCR-ADM-05`) | Administrator | YES | YES | NO | YES | YES (Settings) | YES | YES | NO | N/A | **YES** (Inquiries cannot be created manually in admin; can only be read/deleted). |
| **Careers & Apps** (`SCR-ADM-06`) | Administrator | YES | YES | YES (Vacancies) | YES | YES (Vacancies) | YES | YES | YES (Hero) | YES (Vacancies) | **YES** (Full management over vacancies and applications). |
| **Clients CMS** (`SCR-ADM-08`) | Administrator | YES | YES | YES | YES | YES | YES | YES | YES | YES | **YES** (Protected by `auth` middleware). |
| **FAQ CMS** (`SCR-ADM-07`) | Administrator | YES | YES | YES | YES | YES | YES | YES | NO | YES | **YES** (Protected by `auth` middleware). |
| **System Commands** (`SCR-ADM-09`)| Administrator | YES + Console PWD | YES | N/A | YES | N/A | N/A | **YES** | N/A | N/A | **DISCREPANCY:** Fails if config is cached due to `env()` usage ([BE-03]). |
| **Admin Mockups (7 Screens)** | Administrator | YES | YES | NO | NO | NO | NO | NO | NO | NO | **MOCKUP:** Static non-functional UI views; no backend CRUD exists. |

---

## 2. Intended Permission vs. Current Technical Enforcement Gaps

```
+-----------------------------------------------------------------------------------------+
| AUTHORIZATION & PERMISSION ENFORCEMENT GAPS                                             |
+---------------------+-------------------------------+-----------------------------------+
| Area                | Intended Business Permission  | Actual Technical Reality          |
+---------------------+-------------------------------+-----------------------------------+
| Draft CMS Data      | Admin Only                    | Public access via ?admin=1 query  |
| Candidate Resumes   | HR / Admin Only               | Public access via direct URL      |
| Admin Logout        | Explicit POST action only     | Open to GET (CSRF logout risk)    |
| Form Submissions    | Humans with normal frequency  | Open to unbounded automated bots  |
| Maintenance Runner  | Authorized Admin with console | Fails unconditionally on cache    |
+---------------------+-------------------------------+-----------------------------------+
```

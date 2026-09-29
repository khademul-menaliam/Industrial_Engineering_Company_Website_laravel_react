# Frontend Architecture & Component Quality Baseline Audit

**Project:** AR Engineering Modernization (Laravel + React)  
**Audit Stage:** Phase 1 — Frontend Audit  
**Date:** September 2026  

---

## 1. Frontend Architecture & Component Composition

### [FE-01] Massive Monolithic Admin Page Components
- **Severity:** HIGH
- **Location:**
  - [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx): **1,400 lines (96 KB)** in a single file.
  - [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx): **932 lines (67 KB)**.
  - [AboutManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx): **868 lines (60 KB)**.
  - [ClientsManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ClientsManager.jsx): **742 lines (50 KB)**.
  - [CareersManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx): **576 lines (40 KB)**.
- **Description:** These files combine table views, tab switchers, modal dialogs, file upload inputs, rich text editor integration, toast messaging, and state manipulation for 4–7 different sub-entities inside single giant React components.
- **Impact:** Significant cognitive overhead, high re-render penalty across entire page when typing in single input, difficult to maintain or test.

### [FE-02] Hardcoded Static Data in Public Pages Bypassing Backend API
- **Severity:** HIGH
- **Location:**
  - [Portfolio.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Portfolio.jsx#L6-L130): 626 lines containing a hardcoded `DEFAULT_PROJECTS` array with 6 complex industrial projects, completely ignoring the backend `HomeProject` models and database.
  - [HowWeWork.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/HowWeWork.jsx): Hardcoded HTML markup for the 5 execution phases rather than consuming `home_processes` data.
- **Impact:** Content edited via the Admin Panel does not reflect on these public pages.

### [FE-03] Mockup / Dummy Admin Screens Left in Navigation
- **Severity:** MEDIUM
- **Location:**
  - [Products.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Products.jsx)
  - [Orders.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Orders.jsx)
  - [Users.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Users.jsx)
  - [Analytics.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Analytics.jsx)
  - [Notifications.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Notifications.jsx)
  - [Settings.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Settings.jsx)
  - [Profile.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Profile.jsx)
  - [Dashboard.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Dashboard.jsx)
- **Description:** 8 out of 16 admin screens are non-functional placeholder mockups copied from generic dashboard starter themes (containing references to "Titan Precision", "Apex Heavy Industries", etc.).
- **Impact:** Misleads administrators; creates dead navigation clutter.

### [FE-04] Underutilized Shared UI Component Library
- **Severity:** LOW
- **Location:** [resources/js/components/ui/](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/components/ui/) (`Badge.jsx`, `Button.jsx`, `Card.jsx`, `Input.jsx`, `Pagination.jsx`, `Table.jsx`)
- **Description:** Clean, modular UI atoms were created in `resources/js/components/ui/` but are rarely imported in the admin and public pages, which instead rewrite raw Tailwind classes and ad-hoc HTML tables and inputs.
- **Impact:** UI inconsistency and code duplication.

### [FE-05] Missing Global State Management / Data Caching Layer
- **Severity:** MEDIUM
- **Location:** Across all React pages
- **Description:** No state management library (Zustand, Redux Toolkit) or query caching tool (TanStack Query / SWR) is installed. Every page transition re-triggers fresh Axios `api.get()` calls, causing visible loading flashes.
- **Impact:** Degraded user experience, redundant API traffic.

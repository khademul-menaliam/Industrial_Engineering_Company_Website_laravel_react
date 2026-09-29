# Feature Inventory Baseline Audit

**Project:** AR Engineering Modernization (Laravel + React)  
**Audit Stage:** Phase 1 — Feature Inventory  
**Date:** September 2026  

---

## Complete Feature & Module Inventory

| Module / Feature | Backend Implementation | Frontend Implementation | Implementation Status | Verification Evidence / Findings |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage Dynamic Content** | `HomeController@index`<br>`Admin\HomeController` (Slides, Services, Processes, Leaders, Competencies, Projects, Settings) | `resources/js/frontend/pages/Home.jsx`<br>`resources/js/admin/pages/HomepageManager.jsx` | **Partial / Inconsistent** | Public fetch works, but unauthenticated `?admin=1` query parameter exposes draft/inactive items. Admin management works via single 1,400-line monolithic manager. |
| **Services Catalog & Detail** | `ServiceController@index`<br>`ServiceController@show`<br>`Admin\ServiceController` (CRUD & Categories) | `resources/js/frontend/pages/Services.jsx`<br>`resources/js/frontend/pages/ServiceDetail.jsx`<br>`resources/js/admin/pages/ServicesManager.jsx` | **Complete** | CRUD operations with image uploads, categories, detail pages with specs and metrics. Category slug binding without Eloquent relationships. |
| **About Us & Leadership** | `AboutPageController@index`<br>`Admin\AboutManagerController` (Pillars, Advisors, Team, Milestones, Settings) | `resources/js/frontend/pages/About.jsx`<br>`resources/js/admin/pages/AboutManager.jsx` | **Partial** | Public fetch ignores `is_active` flags for pillars, advisors, team members, and milestones. Admin CRUD is functional. |
| **Contact Inquiries** | `ContactPageController@index`<br>`ContactPageController@submit`<br>`Admin\ContactManagerController` | `resources/js/frontend/pages/Contact.jsx`<br>`resources/js/admin/pages/ContactManager.jsx` | **Complete (Functional) / Unprotected** | Submit saves inquiry to database, but has no rate-limiting, CAPTCHA, email dispatch, or CSRF protection on public API endpoint. |
| **Careers & Applications** | `CareersPageController@index`<br>`CareersPageController@apply`<br>`Admin\CareersManagerController` | `resources/js/frontend/pages/Careers.jsx`<br>`resources/js/admin/pages/CareersManager.jsx` | **Partial / Security Risk** | Job openings listing and application submissions work. However, resumes (dossiers) are stored in public storage (`/storage/dossiers/`), exposing candidate PII. Response message has hardcoded "Titan HR" copy. |
| **FAQ Management** | `FaqController@index`<br>`Admin\FaqManagerController` | `resources/js/frontend/pages/FAQ.jsx`<br>`resources/js/admin/pages/FaqManager.jsx` | **Complete** | Paginated admin CRUD, public list with active filter. |
| **Clients & Partners** | `ClientPageController@index`<br>`Admin\ClientManagerController` (Clients, Testimonials, Partners, Settings) | `resources/js/frontend/pages/Clients.jsx`<br>`resources/js/admin/pages/ClientsManager.jsx` | **Complete / Inconsistent** | Seeder vs migration data duplication. Settings and testimonials functional. |
| **Operational Methodology** | Data provided in `HomeController` | `resources/js/frontend/pages/HowWeWork.jsx` | **Broken / Static** | `HowWeWork.jsx` does not fetch dynamic `home_processes` data from API; content is hardcoded static markup. |
| **Portfolio / Projects** | `HomeProject` models seeded | `resources/js/frontend/pages/Portfolio.jsx` | **Broken / Static** | `Portfolio.jsx` relies on a hardcoded 600-line static JavaScript array of projects instead of consuming the backend API. |
| **Pricing / Tenders** | None | `resources/js/frontend/pages/Pricing.jsx` | **Unlinked / Orphaned** | Static pricing card component exists in code but is not registered in `FrontendApp.jsx` routes or navigation menus. |
| **Project Demo Case Studies** | None | `resources/js/frontend/pages/ProjectDemo.jsx` | **Incomplete / Stub** | Displays a static "Working On It / Construction" placeholder page. |
| **Admin System Commands** | `Admin\CommandController@runCommand`<br>`Admin\CommandController@verifyPassword` | `resources/js/admin/pages/SystemCommands.jsx` | **Partial / Architectural Risk** | Allows running artisan commands and `npm run build` from web requests. Directly reads `env()` which breaks under `config:cache`. |
| **Admin Analytics** | None | `resources/js/admin/pages/Analytics.jsx` | **Broken / Mockup** | 100% hardcoded dummy mockup with SVG charts and fake metrics. No backend API. |
| **Admin Orders / Tenders** | None | `resources/js/admin/pages/Orders.jsx` | **Broken / Mockup** | 100% hardcoded dummy mockup table with fake tender values. No database table or model. |
| **Admin Products Inventory** | None | `resources/js/admin/pages/Products.jsx` | **Broken / Mockup** | 100% hardcoded dummy mockup table with fake component inventory. No backend table or model. |
| **Admin User Management** | `User` model exists | `resources/js/admin/pages/Users.jsx` | **Broken / Mockup** | Hardcoded dummy list ("David Richardson", "Dr. Elena Vance") with no CRUD operations or link to `users` table. |
| **Admin Notifications** | None | `resources/js/admin/pages/Notifications.jsx` | **Broken / Mockup** | Static list of 4 hardcoded notification items. |
| **Admin Settings & Profile** | None | `resources/js/admin/pages/Settings.jsx`<br>`resources/js/admin/pages/Profile.jsx` | **Broken / Mockup** | Static HTML inputs with dummy values (e.g. `https://backup-us-east.titanprecision-v2.com`). Form submit button does nothing. |
| **Shared-Hosting Symlink Route** | `routes/web.php` fallback route `{prefix}/{path}` | Public file requests | **Security / Memory Risk** | Loads entire files into PHP RAM with `File::get()` without caching headers or path traversal validation. |

# Screen & Page Inventory Baseline Audit

**Project:** AR Engineering Modernization (Laravel + React)  
**Audit Stage:** Phase 1 — Screen & Page Inventory  
**Date:** September 2026  

---

## 1. Public Frontend Screens

| Screen / Page Name | Route Path | React Component File | Backend Data Source | Status & Observations |
| :--- | :--- | :--- | :--- | :--- |
| **Home Screen** | `/` | [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx) | `GET /api/home` | Dynamic hero carousel, capability grid, processes, leadership, competency cards, project showcase, and partner marquee. |
| **About Us** | `/about` | [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx) | `GET /api/about` | Dynamic hero, CEO statement, strategic pillars, advisory board, leadership team, and corporate timeline. |
| **Services Catalog** | `/services` | [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx) | `GET /api/services` | Category tabs, service cards with tags and badges, zero-downtime commitment section, CTA banner. |
| **Service Detail Page** | `/services/:slug` | [ServiceDetail.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx) | `GET /api/services/{slug}` | Dynamic service hero, technical specs JSON table, metrics, badges, and inquiry sidebar. |
| **How We Work** | `/how-we-work` | [HowWeWork.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/HowWeWork.jsx) | **None (Hardcoded)** | Multi-phase operational framework with sticky HUD anchor navigation. Does not use backend `home_processes` data. |
| **Partners & Clients** | `/clients` | [Clients.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Clients.jsx) | `GET /api/clients` | Grid of client organizations, solution partners, testimonials slider, and partnership CTA. |
| **Careers & Vacancies** | `/careers` | [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx) | `GET /api/careers`<br>`POST /api/careers/apply` | Vacancy accordion list, culture highlights, application modal with resume upload form. |
| **Portfolio / Projects** | `/portfolio` | [Portfolio.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Portfolio.jsx) | **None (Hardcoded)** | Filterable project catalog with modal detail views. Relies on hardcoded JS array; ignores backend DB projects. |
| **Contact Us** | `/contact` | [Contact.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx) | `GET /api/contact`<br>`POST /api/contact/submit` | Dynamic office details, emergency protocol cards, and project inquiry submission form. |
| **FAQ Page** | `/faq` | [FAQ.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx) | `GET /api/faqs` | Searchable accordion list of frequently asked engineering questions. |
| **Project Demo Case Study**| `/project-demo` | [ProjectDemo.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ProjectDemo.jsx)| **None** | Static "Working On It / Construction" placeholder screen. |
| **Pricing / Tenders** | *(Unrouted)* | [Pricing.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Pricing.jsx) | **None** | Orphaned component. Not registered in `FrontendApp.jsx` routes or navigation menus. |

---

## 2. Authentication Screen

| Screen Name | Route Path | Implementation | Observations |
| :--- | :--- | :--- | :--- |
| **Admin Login** | `/admin-portal/login` | [resources/views/login.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/login.blade.php)<br>[AuthController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AuthController.php) | Server-rendered Blade form. Session-based authentication with CSRF token and `remember` cookie. Lacks rate limiting. |

---

## 3. Administrative Screens (Under `/admin-portal/*`)

| Admin Screen Name | Route Path | React Component File | Backend API Endpoints | Implementation Status & Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Admin Dashboard** | `/admin-portal` | [Dashboard.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Dashboard.jsx) | None | **Static Mockup** with hardcoded revenue numbers, fake audits, and dummy system security logs. |
| **Homepage Manager** | `/admin-portal/homepage` | [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx) | `GET /api/home?admin=1`<br>`POST /api/admin/home/*` | **Functional**: 1,400-line monolith managing Slides, Services, Processes, Leaders, Competencies, Projects, Settings. |
| **Services Manager** | `/admin-portal/services-manager` | [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx) | `GET /api/admin/services`<br>`POST /api/admin/services/*` | **Functional**: Manages service items, categories, rich text specs, and section settings. |
| **About Page Manager**| `/admin-portal/about-manager` | [AboutManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx) | `GET /api/admin/about`<br>`POST /api/admin/about/*` | **Functional**: Manages pillars, advisors, team members, milestones, and hero/CEO images. |
| **Contact Page Manager**| `/admin-portal/contact-manager` | [ContactManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ContactManager.jsx) | `GET /api/admin/contact`<br>`POST /api/admin/contact/*` | **Functional**: Manages contact information settings and displays submitted inquiries. |
| **Careers Page Manager**| `/admin-portal/careers-manager` | [CareersManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx) | `GET /api/admin/careers`<br>`POST /api/admin/careers/*` | **Functional**: Manages job vacancies, settings, and reviews/deletes submitted job applications with dossiers. |
| **FAQ Page Manager** | `/admin-portal/faq-manager` | [FaqManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/FaqManager.jsx) | `GET /api/admin/faqs`<br>`POST /api/admin/faqs/*` | **Functional**: Paginated FAQ questions and answers CRUD with order management. |
| **Clients Manager** | `/admin-portal/clients-manager` | [ClientsManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ClientsManager.jsx) | `GET /api/admin/clients/*`<br>`POST /api/admin/clients/*` | **Functional**: Manages clients, solution partners, testimonials, and page settings. |
| **System Commands** | `/admin-portal/system-commands` | [SystemCommands.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx) | `POST /api/admin/commands/*` | **Functional**: Console runner for `cache:clear`, `migrate`, `optimize`, `npm run build` with secondary password challenge. |
| **Products Inventory**| `/admin-portal/products` | [Products.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Products.jsx) | None | **Static Mockup**: Copied placeholder table. |
| **Orders / Tenders** | `/admin-portal/orders` | [Orders.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Orders.jsx) | None | **Static Mockup**: Copied placeholder table. |
| **Users Directory** | `/admin-portal/users` | [Users.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Users.jsx) | None | **Static Mockup**: Copied placeholder table. |
| **Analytics Dashboard**| `/admin-portal/analytics` | [Analytics.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Analytics.jsx) | None | **Static Mockup**: SVG charts and fake analytics. |
| **Notifications** | `/admin-portal/notifications` | [Notifications.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Notifications.jsx) | None | **Static Mockup**: Hardcoded notification cards. |
| **System Settings** | `/admin-portal/settings` | [Settings.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Settings.jsx) | None | **Static Mockup**: Unwired form inputs. |
| **Admin Profile** | `/admin-portal/profile` | [Profile.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Profile.jsx) | None | **Static Mockup**: Unwired form inputs. |

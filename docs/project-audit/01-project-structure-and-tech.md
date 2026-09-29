# Project Structure & Technology Stack Baseline Audit

**Project:** AR Engineering Modernization (Laravel + React)  
**Audit Stage:** Phase 1 — Comprehensive Baseline Audit  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  

---

## 1. Technology Stack Summary

| Layer | Technology | Declared / Detected Version | Notes / Verification |
| :--- | :--- | :--- | :--- |
| **PHP Runtime** | PHP | `^8.3` (platform: `8.3.0`) | Verified via [composer.json](file:///c:/Users/khademul/Herd/ar_frontend/composer.json#L9) |
| **Backend Framework** | Laravel | `^13.8` (`laravel/framework`) | Verified in [composer.json](file:///c:/Users/khademul/Herd/ar_frontend/composer.json#L10) |
| **Database Engine** | SQLite (Default Dev) / MySQL / PostgreSQL support | SQLite via config / MySQL & PgSQL drivers in Docker | Verified in [config/database.php](file:///c:/Users/khademul/Herd/ar_frontend/config/database.php) |
| **Frontend Library** | React | `^19.2.7` | Verified in [package.json](file:///c:/Users/khademul/Herd/ar_frontend/package.json#L19) |
| **DOM Renderer** | React DOM | `^19.2.7` | Verified in [package.json](file:///c:/Users/khademul/Herd/ar_frontend/package.json#L20) |
| **Client Router** | React Router DOM | `^7.18.1` | Verified in [package.json](file:///c:/Users/khademul/Herd/ar_frontend/package.json#L21) |
| **HTTP Client** | Axios | `^1.18.1` | Configured in [axios.js](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/api/axios.js) |
| **CSS Framework** | Tailwind CSS (v4) | `@tailwindcss/vite: ^4.0.0`, `tailwindcss: ^4.0.0` | Verified in [package.json](file:///c:/Users/khademul/Herd/ar_frontend/package.json#L10-L14) |
| **Build Bundler** | Vite | `^8.0.0` with `@vitejs/plugin-react: ^6.0.3` | Verified in [vite.config.js](file:///c:/Users/khademul/Herd/ar_frontend/vite.config.js) |
| **Font System** | Google Fonts / Bunny Fonts | `Baloo Tammudu 2`, `Space Grotesk`, Material Symbols | Linked in Blade views & Vite config |

---

## 2. Directory Structure Analysis

```
ar_frontend/
├── app/
│   ├── Http/
│   │   └── Controllers/
│   │       ├── Admin/               # 8 Admin Controller classes
│   │       │   ├── AboutManagerController.php
│   │       │   ├── CareersManagerController.php
│   │       │   ├── ClientManagerController.php
│   │       │   ├── CommandController.php
│   │       │   ├── ContactManagerController.php
│   │       │   ├── FaqManagerController.php
│   │       │   ├── HomeController.php
│   │       │   └── ServiceController.php
│   │       ├── AboutPageController.php
│   │       ├── AuthController.php
│   │       ├── CareersPageController.php
│   │       ├── ClientPageController.php
│   │       ├── ContactPageController.php
│   │       ├── Controller.php
│   │       ├── FaqController.php
│   │       ├── HomeController.php
│   │       └── ServiceController.php
│   ├── Models/                      # 25 Eloquent Models
│   └── Providers/
│       └── AppServiceProvider.php
├── bootstrap/
│   ├── app.php                      # Application bootstrap & middleware routing
│   └── providers.php
├── config/                          # 10 configuration files
├── database/
│   ├── factories/                   # UserFactory
│   ├── migrations/                  # 12 Migration files
│   └── seeders/                     # 7 Seeder classes
├── public/
│   ├── build/                       # Compiled assets
│   ├── favicon.ico
│   ├── logo.png
│   └── robots.txt
├── resources/
│   ├── css/
│   │   └── app.css                  # Tailwind v4 theme definitions
│   ├── js/
│   │   ├── admin/                   # React Admin Panel
│   │   │   ├── components/          # RichTextEditor.jsx
│   │   │   ├── pages/               # 16 Admin Page components
│   │   │   └── AdminApp.jsx         # Admin layout & router
│   │   ├── api/
│   │   │   └── axios.js             # Axios instance with CSRF interceptor
│   │   ├── components/              # Shared UI atoms (Badge, Button, Card, Input, Pagination, Table)
│   │   ├── frontend/                # React Public Frontend
│   │   │   ├── components/          # Footer, Navbar, ScrollToTop
│   │   │   ├── pages/               # 12 Public Page components
│   │   │   └── FrontendApp.jsx      # Frontend layout & router
│   │   ├── admin.jsx                # Entrypoint for admin mount (`#admin-app`)
│   │   ├── app.js                   # Empty 3-byte stub
│   │   └── frontend.jsx             # Entrypoint for frontend mount (`#frontend-app`)
│   └── views/
│       ├── admin.blade.php          # Admin shell Blade view
│       ├── frontend.blade.php       # Public shell Blade view
│       ├── login.blade.php          # Session-based Admin Login Blade view
│       └── welcome.blade.php        # 72KB legacy unused template
├── routes/
│   ├── api.php                      # 55-line unmounted legacy API definition
│   ├── console.php                  # Artisan console routes
│   └── web.php                      # 224-line master route file containing all APIs & SPA catches
└── tests/
    ├── Feature/ExampleTest.php      # 1 dummy test
    ├── Unit/ExampleTest.php         # 1 dummy test
    └── TestCase.php
```

---

## 3. Frontend & Backend Boundaries & Routing Architecture

### 3.1 Dual Single-Page Application (SPA) Mounted on Blade Shells
The application implements two completely separated React applications embedded within Laravel Blade container views:
1. **Public Frontend SPA:**
   - Blade Template: [resources/views/frontend.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/frontend.blade.php)
   - Entry point: [resources/js/frontend.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend.jsx) mounting `<FrontendApp />` to `#frontend-app`.
   - Client router: `<BrowserRouter>` handling public paths (`/`, `/about`, `/services`, `/contact`, etc.).
2. **Admin Portal SPA:**
   - Blade Template: [resources/views/admin.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/admin.blade.php)
   - Entry point: [resources/js/admin.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin.jsx) mounting `<AdminApp />` to `#admin-app`.
   - Client router: `<BrowserRouter basename="/admin-portal">` handling admin routes (`/`, `/homepage`, `/services-manager`, etc.).

### 3.2 Routing Separation & Unregistered `api.php` Architecture Concern
- In [bootstrap/app.php](file:///c:/Users/khademul/Herd/ar_frontend/bootstrap/app.php#L9-L13), routing is configured as:
  ```php
  ->withRouting(
      web: __DIR__.'/../routes/web.php',
      commands: __DIR__.'/../routes/console.php',
      health: '/up',
  )
  ```
- **Critical Finding:** `api: __DIR__.'/../routes/api.php'` is NOT declared in `bootstrap/app.php`. Consequently:
  - [routes/api.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/api.php) is completely inactive/dormant.
  - All public and admin API endpoints are manually defined inside [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php) under `/api/...` prefixes.
  - Because they are located in `web.php`, all API endpoints execute through the full `web` middleware stack (session cookies, CSRF verification, stateful sessions).
  - Exception handling in `bootstrap/app.php` uses `$exceptions->shouldRenderJsonWhen(fn ($request) => $request->is('api/*'))` to ensure API errors return JSON despite being in `web.php`.

---

## 4. Architectural Patterns in Use

1. **Monolithic Hybrid:** Single repository with unified Laravel backend and React frontend built via `@tailwindcss/vite` and `laravel-vite-plugin`.
2. **Thin Blade Container / Thick React Client:** Blade templates serve solely as lightweight HTML envelopes providing fonts, meta tags, and Vite assets; UI rendering is completely client-side in React 19.
3. **Session-Cookie Authenticated API:** Admin authentication relies on Laravel's standard session-based cookie guard rather than API tokens (Sanctum/Passport), with Axios passing `X-CSRF-TOKEN` extracted from meta tags.
4. **Key-Value Dynamic Configuration Store:** Multiple dedicated settings tables (`home_settings`, `service_settings`, `contact_settings`, `about_settings`, `client_settings`) store JSON-encoded or scalar configuration pairs.
5. **No Service/Repository Layer:** All database operations and business logic are executed directly inside Eloquent controllers.

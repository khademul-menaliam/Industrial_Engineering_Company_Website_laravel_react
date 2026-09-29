# Route & API Inventory Baseline Audit

**Project:** AR Engineering Modernization (Laravel + React)  
**Audit Stage:** Phase 1 — Route & API Inventory  
**Date:** September 2026  

---

## 1. Master Route Summary

All active web routes and API endpoints are loaded from [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php).  
*(Note: [routes/api.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/api.php) is dormant/unregistered in `bootstrap/app.php`)*.

---

## 2. Public API Endpoints

| HTTP Method | URI Pattern | Controller & Action | Middleware | Description / Payload | Issues & Concerns |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `GET` | `/api/home` | `HomeController@index` | `web` | Returns slides, services, processes, leaders, competencies, projects, settings, clients. | Supports `?admin=1` query parameter allowing unauthenticated users to view inactive/draft items. |
| `GET` | `/api/services` | `ServiceController@index` | `web` | Returns all active categories and grouped services. | Loads full records without field projection or pagination. |
| `GET` | `/api/services/{slug}` | `ServiceController@show` | `web` | Returns a single active service by slug. | Query lacks explicit index on `slug`. |
| `GET` | `/api/contact` | `ContactPageController@index` | `web` | Returns contact settings (email, phone, address). | No issues found. |
| `POST` | `/api/contact/submit` | `ContactPageController@submit` | `web` | Accepts `{ name, email, department, details }`. | **No Rate Limiting** (`throttle`), no CAPTCHA/honeypot, risk of form spam. |
| `GET` | `/api/careers` | `CareersPageController@index` | `web` | Returns active vacancies and career page settings. | No issues found. |
| `POST` | `/api/careers/apply` | `CareersPageController@apply` | `web` | Accepts `{ name, email, position, linkedin, dossier, summary }`. | **PII Security Risk**: Stores resumes in public disk (`/storage/dossiers/`). No rate limiting. |
| `GET` | `/api/about` | `AboutPageController@index` | `web` | Returns pillars, advisors, team members, milestones, settings. | Ignores `is_active` status on pillars, advisors, team members, and milestones. |
| `GET` | `/api/faqs` | `FaqController@index` | `web` | Returns active FAQs sorted by `order`. | No issues found. |
| `GET` | `/api/clients` | `ClientPageController@index` | `web` | Returns clients, solution partners, testimonials, settings. | No issues found. |

---

## 3. Public Media & Symlink Route

| HTTP Method | URI Pattern | Controller & Action | Middleware | Issues & Concerns |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `{prefix}/{path}` | Closure (`where prefix = storage\|app-media`) | `web` | Reads files from `storage/app/public/` using `File::get($filePath)`. **High Memory Risk** (loads whole file into RAM), lacks caching headers (`Cache-Control`, `ETag`), lacks path traversal sanitization. |

---

## 4. Authentication Routes

| HTTP Method | URI Pattern | Controller & Action | Middleware | Issues & Concerns |
| :--- | :--- | :--- | :--- | :--- |
| `GET` | `/admin-portal/login` | `AuthController@showLogin` | `web` | Renders Blade login view. Redirects if already authenticated. |
| `POST` | `/admin-portal/login` | `AuthController@login` | `web` | Authenticates email & password. **Lacks Rate Limiting** (`throttle:5,1`), brute-force risk. |
| `GET\|POST` | `/admin-portal/logout` | `AuthController@logout` | `web` | Logs out session. **CSRF Risk**: Allowing `GET` on logout enables simple image-tag CSRF logout attacks. |

---

## 5. Protected Administrative API Endpoints (Middleware: `auth`)

### 5.1 Homepage Manager (`/api/admin/home`)
| HTTP Method | URI Pattern | Controller & Action | Purpose |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/admin/home/settings` | `Admin\HomeController@updateSettings` | Bulk key-value settings update |
| `POST` | `/api/admin/home/slides` | `Admin\HomeController@storeSlide` | Create slide (multipart upload) |
| `POST` | `/api/admin/home/slides/{id}` | `Admin\HomeController@updateSlide` | Update slide (multipart upload) |
| `DELETE` | `/api/admin/home/slides/{id}` | `Admin\HomeController@destroySlide` | Delete slide |
| `POST` | `/api/admin/home/services` | `Admin\HomeController@storeService` | Create homepage service |
| `POST` | `/api/admin/home/services/{id}` | `Admin\HomeController@updateService` | Update homepage service |
| `DELETE` | `/api/admin/home/services/{id}` | `Admin\HomeController@destroyService` | Delete homepage service |
| `POST` | `/api/admin/home/processes` | `Admin\HomeController@storeProcess` | Create operational step |
| `POST` | `/api/admin/home/processes/{id}` | `Admin\HomeController@updateProcess` | Update operational step |
| `DELETE` | `/api/admin/home/processes/{id}` | `Admin\HomeController@destroyProcess` | Delete operational step |
| `POST` | `/api/admin/home/leaders` | `Admin\HomeController@storeLeader` | Create leader profile |
| `POST` | `/api/admin/home/leaders/{id}` | `Admin\HomeController@updateLeader` | Update leader profile |
| `DELETE` | `/api/admin/home/leaders/{id}` | `Admin\HomeController@destroyLeader` | Delete leader profile |
| `POST` | `/api/admin/home/competencies` | `Admin\HomeController@storeCompetency` | Create competency block |
| `POST` | `/api/admin/home/competencies/{id}` | `Admin\HomeController@updateCompetency` | Update competency block |
| `DELETE` | `/api/admin/home/competencies/{id}` | `Admin\HomeController@destroyCompetency` | Delete competency block |
| `POST` | `/api/admin/home/projects` | `Admin\HomeController@storeProject` | Create project showcase |
| `POST` | `/api/admin/home/projects/{id}` | `Admin\HomeController@updateProject` | Update project showcase |
| `DELETE` | `/api/admin/home/projects/{id}` | `Admin\HomeController@destroyProject` | Delete project showcase |

### 5.2 Services Manager (`/api/admin/services`)
| HTTP Method | URI Pattern | Controller & Action | Purpose |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/services` | `Admin\ServiceController@index` | Fetch all services, categories, settings |
| `POST` | `/api/admin/services/settings` | `Admin\ServiceController@updateSettings` | Bulk update services settings |
| `POST` | `/api/admin/services/categories` | `Admin\ServiceController@storeCategory` | Create service category |
| `POST` | `/api/admin/services/categories/{id}` | `Admin\ServiceController@updateCategory` | Update service category |
| `DELETE` | `/api/admin/services/categories/{id}` | `Admin\ServiceController@destroyCategory` | Delete service category |
| `POST` | `/api/admin/services` | `Admin\ServiceController@store` | Create service with specs & metrics |
| `POST` | `/api/admin/services/{id}` | `Admin\ServiceController@update` | Update service with specs & metrics |
| `DELETE` | `/api/admin/services/{id}` | `Admin\ServiceController@destroy` | Delete service |

### 5.3 Contact & Careers Managers
| HTTP Method | URI Pattern | Controller & Action | Purpose |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/contact` | `Admin\ContactManagerController@index` | Get contact settings and inquiry list |
| `POST` | `/api/admin/contact/settings` | `Admin\ContactManagerController@updateSettings` | Update contact settings |
| `DELETE` | `/api/admin/contact/inquiries/{id}` | `Admin\ContactManagerController@destroyInquiry` | Delete contact inquiry |
| `GET` | `/api/admin/careers` | `Admin\CareersManagerController@index` | Get vacancies and job applications |
| `POST` | `/api/admin/careers/settings` | `Admin\CareersManagerController@updateSettings` | Update careers settings & hero |
| `POST` | `/api/admin/careers/vacancies` | `Admin\CareersManagerController@storeVacancy` | Create vacancy opening |
| `POST` | `/api/admin/careers/vacancies/{id}` | `Admin\CareersManagerController@updateVacancy` | Update vacancy opening |
| `DELETE` | `/api/admin/careers/vacancies/{id}` | `Admin\CareersManagerController@destroyVacancy` | Delete vacancy opening |
| `DELETE` | `/api/admin/careers/applications/{id}` | `Admin\CareersManagerController@destroyApplication` | Delete application and dossier |

### 5.4 About Manager (`/api/admin/about`)
| HTTP Method | URI Pattern | Controller & Action | Purpose |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/about` | `Admin\AboutManagerController@index` | Get all about datasets |
| `POST` | `/api/admin/about/settings` | `Admin\AboutManagerController@updateSettings` | Update general settings & images |
| `POST` | `/api/admin/about/pillars` | `Admin\AboutManagerController@storePillar` | Create strategic pillar |
| `POST` | `/api/admin/about/pillars/{id}` | `Admin\AboutManagerController@updatePillar` | Update strategic pillar |
| `DELETE` | `/api/admin/about/pillars/{id}` | `Admin\AboutManagerController@destroyPillar` | Delete strategic pillar |
| `POST` | `/api/admin/about/advisors` | `Admin\AboutManagerController@storeAdvisor` | Create advisor profile |
| `POST` | `/api/admin/about/advisors/{id}` | `Admin\AboutManagerController@updateAdvisor` | Update advisor profile |
| `DELETE` | `/api/admin/about/advisors/{id}` | `Admin\AboutManagerController@destroyAdvisor` | Delete advisor profile |
| `POST` | `/api/admin/about/team` | `Admin\AboutManagerController@storeTeamMember` | Create team member |
| `POST` | `/api/admin/about/team/{id}` | `Admin\AboutManagerController@updateTeamMember` | Update team member |
| `DELETE` | `/api/admin/about/team/{id}` | `Admin\AboutManagerController@destroyTeamMember` | Delete team member |
| `POST` | `/api/admin/about/milestones` | `Admin\AboutManagerController@storeMilestone` | Create milestone |
| `POST` | `/api/admin/about/milestones/{id}` | `Admin\AboutManagerController@updateMilestone` | Update milestone |
| `DELETE` | `/api/admin/about/milestones/{id}` | `Admin\AboutManagerController@destroyMilestone` | Delete milestone |

### 5.5 FAQ & Clients Managers
| HTTP Method | URI Pattern | Controller & Action | Purpose |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/admin/faqs` | `Admin\FaqManagerController@index` | Get paginated FAQs |
| `POST` | `/api/admin/faqs` | `Admin\FaqManagerController@store` | Create FAQ item |
| `POST` | `/api/admin/faqs/{id}` | `Admin\FaqManagerController@update` | Update FAQ item |
| `DELETE` | `/api/admin/faqs/{id}` | `Admin\FaqManagerController@destroy` | Delete FAQ item |
| `GET` | `/api/admin/clients/settings` | `Admin\ClientManagerController@getSettings` | Get client page settings |
| `POST` | `/api/admin/clients/settings` | `Admin\ClientManagerController@updateSettings` | Update client settings & hero bg |
| `GET` | `/api/admin/clients/testimonials` | `Admin\ClientManagerController@getTestimonials` | Get paginated testimonials |
| `POST` | `/api/admin/clients/testimonials` | `Admin\ClientManagerController@storeTestimonial` | Create testimonial |
| `POST` | `/api/admin/clients/testimonials/{id}` | `Admin\ClientManagerController@updateTestimonial` | Update testimonial |
| `DELETE` | `/api/admin/clients/testimonials/{id}` | `Admin\ClientManagerController@destroyTestimonial` | Delete testimonial |
| `GET` | `/api/admin/clients/partners` | `Admin\ClientManagerController@getPartners` | Get paginated partners |
| `POST` | `/api/admin/clients/partners` | `Admin\ClientManagerController@storePartner` | Create partner |
| `POST` | `/api/admin/clients/partners/{id}` | `Admin\ClientManagerController@updatePartner` | Update partner |
| `DELETE` | `/api/admin/clients/partners/{id}` | `Admin\ClientManagerController@destroyPartner` | Delete partner |
| `GET` | `/api/admin/clients` | `Admin\ClientManagerController@index` | Get paginated clients |
| `POST` | `/api/admin/clients` | `Admin\ClientManagerController@store` | Create client |
| `POST` | `/api/admin/clients/{id}` | `Admin\ClientManagerController@update` | Update client |
| `DELETE` | `/api/admin/clients/{id}` | `Admin\ClientManagerController@destroy` | Delete client |

### 5.6 Command Runner (`/api/admin/commands`)
| HTTP Method | URI Pattern | Controller & Action | Middleware | Purpose / Risk |
| :--- | :--- | :--- | :--- | :--- |
| `POST` | `/api/admin/commands/run` | `Admin\CommandController@runCommand` | `auth`, `throttle:5,1` | Executes Artisan / Shell commands (`optimize:clear`, `migrate`, `npm run build`). |
| `POST` | `/api/admin/commands/verify-password`| `Admin\CommandController@verifyPassword` | `auth`, `throttle:5,1` | Verifies secondary console password. |

---

## 6. SPA Catch-All Routes

| HTTP Method | URI Pattern | Action | Notes |
| :--- | :--- | :--- | :--- |
| `GET` | `/admin-portal`, `/admin-portal/{any}` | `view('admin')` | Protected by `auth` middleware. Loads admin React application. |
| `GET` | `/`, `/{any}` | `view('frontend')` | Public. Matches `^(?!admin-portal).*$`. Loads public React application. |

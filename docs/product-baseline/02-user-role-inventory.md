# User and Role Inventory Baseline

**Project:** AR Engineering Modernization  
**Document:** User & Role Inventory (Baseline)  
**Status:** Baseline Documented (Phase 2.2)  
**Date:** September 2026  
**Evidence Source:** [config/auth.php](file:///c:/Users/khademul/Herd/ar_frontend/config/auth.php), [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php), [AuthController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AuthController.php), [User.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/User.php)  

---

## 1. Implemented Actors & Roles

```
+--------------------------------------------------------------------------------+
| IMPLEMENTED ACTOR HIERARCHY & BOUNDARIES                                       |
+--------------------------------------------------------------------------------+
| 1. Anonymous Public Visitor / Prospective Client                               |
|    - Unauthenticated                                                           |
|    - Access: Public Frontend routes (/, /about, /services, /contact, etc.)     |
|                                                                                |
| 2. Anonymous Job Applicant (Sub-type of Public Visitor)                        |
|    - Unauthenticated                                                           |
|    - Access: /careers (Vacancy list + Application submission)                  |
|                                                                                |
| 3. Authenticated System Administrator                                          |
|    - Authenticated via session cookie (/admin-portal/login)                    |
|    - Access: All /admin-portal/* screens + all /api/admin/* endpoints         |
|    - Secondary Auth Challenge: System Commands execution password              |
+--------------------------------------------------------------------------------+
```

---

### Actor 1: Public Visitor / Prospective Client
- **Role Status:** **IMPLEMENTED ROLE**
- **Authentication Required:** **No**
- **Purpose:** Prospective corporate clients, engineering partners, and general web users exploring AR Engineering capabilities and submitting project inquiries.
- **Accessible Areas:**
  - Public web views: `/`, `/{any}` (excluding `/admin-portal/*`).
  - Public API endpoints: `/api/home`, `/api/services`, `/api/services/{slug}`, `/api/about`, `/api/clients`, `/api/faqs`, `/api/contact`, `/api/contact/submit`.
- **Permissions & Actions:**
  - Read-only browsing of dynamic and static content (Homepage, About Us, Services, FAQ, Partners).
  - Download official company PDF profile (`/AR_Engineering_Profile.pdf`).
  - Submit contact inquiries with name, email, department, and message details (`POST /api/contact/submit`).
- **Restrictions:**
  - Cannot access `/admin-portal/*` routes (redirected to `/admin-portal/login`).
  - Cannot access `/api/admin/*` management APIs (blocked by `auth` middleware returning 401 or redirect).
- **Evidence:** [routes/web.php:L49-L68](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L49-L68), [routes/web.php:L217-L224](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L217-L224), [ContactPageController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/ContactPageController.php).

---

### Actor 2: Job Applicant
- **Role Status:** **IMPLEMENTED ROLE**
- **Authentication Required:** **No**
- **Purpose:** Candidates applying for open engineering and operational positions.
- **Accessible Areas:**
  - Public careers page: `/careers`.
  - Public API endpoints: `/api/careers` (GET vacancies), `/api/careers/apply` (POST application).
- **Permissions & Actions:**
  - Browse active vacancy listings and requirement specs.
  - Submit job application with personal info, LinkedIn profile URL, summary text, and uploaded resume document (`.pdf`, `.doc`, `.docx` up to 10MB).
- **Restrictions:**
  - Cannot view, edit, or delete submitted applications once sent.
  - Cannot view other applicants' submissions (though files in public storage can be fetched if direct URL is known — see Phase 1 finding `SEC-02`).
- **Evidence:** [CareersPageController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/CareersPageController.php), [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx).

---

### Actor 3: System Administrator
- **Role Status:** **IMPLEMENTED ROLE**
- **Authentication Required:** **Yes** (Laravel session authentication via `web` guard)
- **Purpose:** Internal administrators responsible for CMS content publishing, corporate information updates, inquiry reviews, application processing, and system diagnostics.
- **Accessible Areas:**
  - Authentication portal: `/admin-portal/login`.
  - Admin single-page application: `/admin-portal/*`.
  - Protected API routes: `/api/admin/*`.
- **Permissions & Actions:**
  - Full CRUD operations over Homepage slides, capability cards, processes, leadership profiles, competencies, project highlights, and general settings.
  - Full CRUD operations over Services, Service Categories, technical specs, and metrics.
  - Full CRUD operations over About Us pillars, advisors, team members, and milestones.
  - Full CRUD operations over Client logos, solution partners, testimonials, and FAQ entries.
  - Read and delete contact inquiries.
  - Read and delete job applications and associated dossier files.
  - Execute server-level maintenance commands (`optimize:clear`, `migrate`, `storage:link`, `npm run build`) via secondary console password authorization challenge.
- **Restrictions:**
  - Cannot execute arbitrary/custom bash commands outside the pre-approved whitelist ([CommandController.php:L125-L131](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php#L125-L131)).
  - Cannot run destructive `migrate:fresh` when `APP_ENV=production` ([CommandController.php:L140-L146](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php#L140-L146)).
- **Evidence:** [User.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/User.php), [AuthController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/AuthController.php), [routes/web.php:L75-L215](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L75-L215), [CommandController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php).

---

## 2. Potential / Future Roles (Not Implemented)

The following roles do **NOT** exist in the codebase and are documented strictly for baseline clarification:

| Potential / Proposed Role | Implementation State | Evidence / Current Reality | Status |
| :--- | :--- | :--- | :--- |
| **HR Manager / Recruiter** | **NOT IMPLEMENTED** | All admin users have global access to delete job applications; no HR-specific role or permission restriction exists. | **POTENTIAL ROLE** |
| **Content Editor / Marketing** | **NOT IMPLEMENTED** | No role hierarchy exists. Any authenticated user can modify settings or execute system commands. | **POTENTIAL ROLE** |
| **Client Portal User** | **NOT IMPLEMENTED** | No client login, contract repository, or project tracking portal exists (the `Orders` and `Products` tabs are non-functional static mockups). | **POTENTIAL ROLE** |
| **Super Admin vs Standard Admin** | **NOT IMPLEMENTED** | The database `users` table contains only `id, name, email, password, timestamps` without a `role`, `is_admin`, or permission pivot. | **POTENTIAL ROLE** |

# Database & Schema Baseline Audit

**Project:** AR Engineering Modernization (Laravel + React)  
**Audit Stage:** Phase 1 — Database & Schema Audit  
**Date:** September 2026  

---

## 1. Schema & Table Summary

| Table Name | Associated Eloquent Model | Migration File | Primary Purpose | Row Count / Seeding |
| :--- | :--- | :--- | :--- | :--- |
| `users` | [User.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/User.php) | `0001_01_01_000000_create_users_table.php` | Admin authentication accounts | Seeded with 1 default admin user |
| `password_reset_tokens`| None | `0001_01_01_000000_create_users_table.php` | Password resets | Empty |
| `sessions` | None | `0001_01_01_000000_create_users_table.php` | Database session driver storage | Dynamic |
| `cache` / `cache_locks`| None | `0001_01_01_000001_create_cache_table.php` | Database cache driver storage | Dynamic |
| `jobs` / `job_batches` / `failed_jobs` | None | `0001_01_01_000002_create_jobs_table.php` | Queue job management | Dynamic |
| `home_slides` | [HomeSlide.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeSlide.php) | `2026_07_10_000000_create_homepage_tables.php` | Hero carousel slides | 3 seeded records |
| `home_services` | [HomeService.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeService.php) | `2026_07_10_000000_create_homepage_tables.php` | Homepage service capability cards | 3 seeded records |
| `home_processes` | [HomeProcess.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeProcess.php) | `2026_07_10_000000_create_homepage_tables.php` | 5-step operational methodology | 5 seeded records |
| `home_leaders` | [HomeLeader.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeLeader.php) | `2026_07_10_000000_create_homepage_tables.php` | Executive leadership highlights | 2 seeded records |
| `home_competencies` | [HomeCompetency.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeCompetency.php) | `2026_07_10_000000_create_homepage_tables.php` | Strategic competency cards | 3 seeded records |
| `home_projects` | [HomeProject.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeProject.php) | `2026_07_10_000000_create_homepage_tables.php` | Homepage project cards | 3 seeded records |
| `home_settings` | [HomeSetting.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeSetting.php) | `2026_07_10_000000_create_homepage_tables.php` | Homepage key-value configurations | 15+ keys |
| `service_categories` | [ServiceCategory.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ServiceCategory.php) | `2026_07_10_000001_create_services_tables.php` | Service grouping categories | 3 seeded records |
| `services` | [Service.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Service.php) | `2026_07_10_000001_create_services_tables.php` | Full service offerings with specs/metrics | 9 seeded records |
| `service_settings` | [ServiceSetting.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ServiceSetting.php) | `2026_07_10_000001_create_services_tables.php` | Service page key-value configurations | 8 keys |
| `contact_settings` | [ContactSetting.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ContactSetting.php) | `2026_07_10_000002_create_contact_and_careers_tables.php` | Contact & careers page configurations | 10+ keys |
| `contact_inquiries` | [ContactInquiry.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ContactInquiry.php) | `2026_07_10_000002_create_contact_and_careers_tables.php` | Form submissions from contact page | Dynamic |
| `vacancies` | [Vacancy.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Vacancy.php) | `2026_07_10_000002_create_contact_and_careers_tables.php` | Open job positions | 4 seeded records |
| `applications` | [Application.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Application.php) | `2026_07_10_000002_create_contact_and_careers_tables.php` | Submitted candidate job applications | Dynamic |
| `about_settings` | [AboutSetting.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutSetting.php) | `2026_07_10_000003_create_about_tables.php` | About page configurations | 10+ keys |
| `about_pillars` | [AboutPillar.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutPillar.php) | `2026_07_10_000003_create_about_tables.php` | Strategic foundational pillars | 4 seeded records |
| `about_advisors` | [AboutAdvisor.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutAdvisor.php) | `2026_07_10_000003_create_about_tables.php` | Advisory board profiles | 3 seeded records |
| `about_team` | [AboutTeamMember.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutTeamMember.php) | `2026_07_10_000003_create_about_tables.php` | Executive leadership profiles | 4 seeded records |
| `about_milestones` | [AboutMilestone.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutMilestone.php) | `2026_07_10_000003_create_about_tables.php` | Historical timeline items | 5 seeded records |
| `faqs` | [Faq.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Faq.php) | `2026_07_11_062953_create_faqs_table.php` | FAQs | 5 seeded records |
| `clients` | [Client.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Client.php) | `2026_07_11_080236_create_clients_table.php` | Client organizations | 6 seeded records |
| `client_settings` | [ClientSetting.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ClientSetting.php) | `2026_07_11_082154_create_client_settings_table.php` | Client page configurations | 8 keys |
| `client_testimonials`| [ClientTestimonial.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ClientTestimonial.php) | `2026_07_11_082154_create_client_testimonials_table.php` | Client quotes & reviews | 3 seeded records |
| `solution_partners` | [SolutionPartner.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/SolutionPartner.php) | `2026_08_20_000000_create_solution_partners_table.php` | Solution & vendor partners | 6 seeded records |

---

## 2. Database Findings & Concerns

### [DB-01] Missing Foreign Key Constraints & Loose Relationship Design
- **Severity:** HIGH
- **Location:** [database/migrations/2026_07_10_000001_create_services_tables.php](file:///c:/Users/khademul/Herd/ar_frontend/database/migrations/2026_07_10_000001_create_services_tables.php#L28)
- **Description:** The `services` table defines `category` as a raw string (`$table->string('category')`) instead of a constrained foreign key (`category_id` referencing `service_categories.id` or `service_categories.slug` with `onDelete('cascade'/'restrict')`).
- **Impact:** Relies on application-level checks in `ServiceController::destroyCategory` to prevent orphaned records. If a category slug changes or a record is manipulated outside the controller, data integrity breaks.

### [DB-02] Missing Database Indexes on Queried Columns
- **Severity:** MEDIUM
- **Location:** Multiple migrations
- **Description:** The application frequently queries and sorts on the following unindexed columns:
  - `is_active` across 11 tables (`home_slides`, `home_services`, `home_processes`, `home_leaders`, `home_competencies`, `home_projects`, `services`, `service_categories`, `vacancies`, `faqs`, `clients`, `client_testimonials`, `solution_partners`).
  - `sort_order` / `order` across all entity tables.
  - `services.category` used in category filters (`where('category', $cat->slug)`).
  - `services.slug` has unique index, but composite index on `(slug, is_active)` is missing.
- **Impact:** Full table scans on production database when volume grows.

### [DB-03] Migration & Seeder Data Duplication Anti-Pattern
- **Severity:** MEDIUM
- **Location:** 
  - [database/migrations/2026_07_11_080236_create_clients_table.php](file:///c:/Users/khademul/Herd/ar_frontend/database/migrations/2026_07_11_080236_create_clients_table.php#L27-L94)
  - [database/migrations/2026_07_11_082154_create_client_settings_table.php](file:///c:/Users/khademul/Herd/ar_frontend/database/migrations/2026_07_11_082154_create_client_settings_table.php#L35-L42)
  - [database/migrations/2026_07_11_082154_create_client_testimonials_table.php](file:///c:/Users/khademul/Herd/ar_frontend/database/migrations/2026_07_11_082154_create_client_testimonials_table.php#L25-L56)
  - [database/migrations/2026_08_20_000000_create_solution_partners_table.php](file:///c:/Users/khademul/Herd/ar_frontend/database/migrations/2026_08_20_000000_create_solution_partners_table.php#L26-L87)
  - [database/seeders/ClientSeeder.php](file:///c:/Users/khademul/Herd/ar_frontend/database/seeders/ClientSeeder.php)
- **Description:** Migration files directly execute `\DB::table(...)->insert(...)` to seed static data. Concurrently, standalone seeders like `ClientSeeder.php` also insert duplicate data.
- **Impact:** Running `php artisan migrate --seed` causes unique constraint errors, duplicate entries, or corrupted data ordering.

### [DB-04] Inconsistent Column Naming Schema Across Tables
- **Severity:** LOW
- **Location:** Multiple models/migrations
- **Description:** Sorting and description column names differ across tables:
  - `sort_order` in `home_*`, `services`, `vacancies`, `about_*` vs `order` in `faqs`, `clients`, `client_testimonials`, `solution_partners`.
  - `description` in `home_services`, `home_processes`, `services` vs `desc` in `about_milestones`, `clients`, `solution_partners`.
  - `image` in `home_slides`, `services` vs `image_file`/`image_url` vs `logo` in `clients` vs `avatar` in `client_testimonials`.
- **Impact:** High cognitive load, prevents polymorphic components and reusable backend traits/services.

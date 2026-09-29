# Data & Entity Inventory Baseline

**Project:** AR Engineering Modernization  
**Document:** Data & Entity Inventory (Baseline)  
**Status:** Baseline Documented (Phase 2.9)  
**Date:** September 2026  
**Evidence Source:** Verified database migrations, Eloquent models, and seeders  

---

## 1. Group: Authentication & User Accounts

### ENT-01: User (`users`)
- **Entity ID:** `ENT-01`
- **Table Name:** `users`
- **Model:** [App\Models\User](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/User.php)
- **Business Purpose:** System administrator accounts authorized to access the CMS and maintenance console.
- **Primary Key:** `id` (BigIncrements)
- **Important Fields:** `name` (string), `email` (string, unique), `password` (hashed string), `remember_token` (string), `timestamps`.
- **Relationships:** None defined.
- **Related Modules / Screens:** `MOD-AUTH-01`, `SCR-AUTH-01`.
- **Visibility:** Internal / Admin only.
- **Lifecycle / Status:** Active upon creation; no `is_active` or soft-deletes column.
- **Seeded Data:** 1 default administrator (`admin@gmail.com` / `12345678`) via [DatabaseSeeder.php:L18-L24](file:///c:/Users/khademul/Herd/ar_frontend/database/seeders/DatabaseSeeder.php#L18-L24).
- **Current Status:** **COMPLETE**

---

## 2. Group: Services & Capabilities

### ENT-02: Service Category (`service_categories`)
- **Entity ID:** `ENT-02`
- **Table Name:** `service_categories`
- **Model:** [App\Models\ServiceCategory](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ServiceCategory.php)
- **Business Purpose:** Grouping engineering disciplines (e.g. Fire Protection, MEP Design, Industrial Automation).
- **Primary Key:** `id`
- **Important Fields:** `slug` (string, unique), `name` (string), `description` (text), `sort_order` (int), `is_active` (bool), `timestamps`.
- **Relationships:** Conceptual 1-to-Many with `services` via `slug` (No Eloquent relationship method defined in model).
- **Related Modules / Screens:** `MOD-SERV-01`, `MOD-SERV-02`, `SCR-PUB-03`, `SCR-ADM-03`.
- **Visibility:** Public & Admin.
- **Lifecycle / Status:** `is_active` (boolean).
- **Seeded Data:** 3 categories seeded via [ServiceSeeder.php](file:///c:/Users/khademul/Herd/ar_frontend/database/seeders/ServiceSeeder.php).
- **Current Status:** **COMPLETE**

### ENT-03: Service (`services`)
- **Entity ID:** `ENT-03`
- **Table Name:** `services`
- **Model:** [App\Models\Service](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Service.php)
- **Business Purpose:** Comprehensive engineering service offerings with deep technical specifications and performance metrics.
- **Primary Key:** `id`
- **Important Fields:** `category` (string slug), `slug` (string, unique), `title` (string), `short_description` (text), `image` (text), `icon` (string), `tag` (string), `is_featured` (bool), `sort_order` (int), `is_active` (bool), `hero_image` (text), `detail_title` (string), `detail_description` (text), `badges` (string), `technical_specs` (JSON array), `metrics` (JSON array), `timestamps`.
- **Relationships:** Unconstrained foreign slug binding to `service_categories.slug`.
- **Related Modules / Screens:** `MOD-SERV-01`, `MOD-SERV-02`, `SCR-PUB-03`, `SCR-PUB-04`, `SCR-ADM-03`.
- **Visibility:** Public & Admin.
- **Lifecycle / Status:** `is_active` (bool), `is_featured` (bool).
- **Seeded Data:** 9 complete service profiles with JSON specs and metrics seeded via [ServiceSeeder.php](file:///c:/Users/khademul/Herd/ar_frontend/database/seeders/ServiceSeeder.php).
- **Known Issues:** `[DB-01]` Missing foreign key constraint; missing composite index on `(slug, is_active)`.
- **Current Status:** **COMPLETE**

### ENT-04: Service Settings (`service_settings`)
- **Entity ID:** `ENT-04`
- **Table Name:** `service_settings`
- **Model:** [App\Models\ServiceSetting](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ServiceSetting.php)
- **Business Purpose:** Key-value store for service page intro banners and zero-downtime commitments.
- **Primary Key:** `id`
- **Important Fields:** `key` (string, unique), `value` (text), `group` (string), `timestamps`.
- **Current Status:** **COMPLETE**

---

## 3. Group: Homepage Content

### ENT-05: Home Slide (`home_slides`)
- **Entity ID:** `ENT-05`
- **Table Name:** `home_slides`
- **Model:** [App\Models\HomeSlide](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeSlide.php)
- **Business Purpose:** Hero carousel slides displaying primary value propositions and photography.
- **Fields:** `id`, `title`, `subtitle`, `image`, `sort_order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-06: Home Service / Capability (`home_services`)
- **Entity ID:** `ENT-06`
- **Table Name:** `home_services`
- **Model:** [App\Models\HomeService](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeService.php)
- **Business Purpose:** Homepage overview capability cards.
- **Fields:** `id`, `title`, `description`, `icon`, `image`, `sort_order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-07: Home Process (`home_processes`)
- **Entity ID:** `ENT-07`
- **Table Name:** `home_processes`
- **Model:** [App\Models\HomeProcess](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeProcess.php)
- **Business Purpose:** 5-step operational methodology overview.
- **Fields:** `id`, `step_number`, `title`, `description`, `sort_order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-08: Home Leader (`home_leaders`)
- **Entity ID:** `ENT-08`
- **Table Name:** `home_leaders`
- **Model:** [App\Models\HomeLeader](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeLeader.php)
- **Business Purpose:** Executive leadership quote cards on homepage.
- **Fields:** `id`, `name`, `title`, `quote`, `image`, `sort_order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-09: Home Competency (`home_competencies`)
- **Entity ID:** `ENT-09`
- **Table Name:** `home_competencies`
- **Model:** [App\Models\HomeCompetency](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeCompetency.php)
- **Business Purpose:** Strategic competency cards with JSON-encoded bullet items.
- **Fields:** `id`, `title`, `items` (JSON), `image`, `button_text`, `button_link`, `sort_order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-10: Home Project (`home_projects`)
- **Entity ID:** `ENT-10`
- **Table Name:** `home_projects`
- **Model:** [App\Models\HomeProject](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeProject.php)
- **Business Purpose:** Featured project showcase cards.
- **Fields:** `id`, `title`, `description`, `image`, `link`, `sort_order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-11: Home Setting (`home_settings`)
- **Entity ID:** `ENT-11`
- **Table Name:** `home_settings`
- **Model:** [App\Models\HomeSetting](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/HomeSetting.php)
- **Business Purpose:** Key-value configuration for global homepage text and client partner order.
- **Fields:** `id`, `key` (string, unique), `value` (text/JSON), `group` (string), `timestamps`.
- **Current Status:** **COMPLETE**

---

## 4. Group: Corporate Identity & About Us

### ENT-12: About Pillar (`about_pillars`)
- **Entity ID:** `ENT-12`
- **Table Name:** `about_pillars`
- **Model:** [App\Models\AboutPillar](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutPillar.php)
- **Fields:** `id`, `title`, `icon`, `description`, `sort_order`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-13: About Advisor (`about_advisors`)
- **Entity ID:** `ENT-13`
- **Table Name:** `about_advisors`
- **Model:** [App\Models\AboutAdvisor](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutAdvisor.php)
- **Fields:** `id`, `name`, `role`, `image`, `message`, `sort_order`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-14: About Team Member (`about_team`)
- **Entity ID:** `ENT-14`
- **Table Name:** `about_team`
- **Model:** [App\Models\AboutTeamMember](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutTeamMember.php)
- **Fields:** `id`, `name`, `role`, `image`, `bio`, `linkedin`, `email`, `sort_order`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-15: About Milestone (`about_milestones`)
- **Entity ID:** `ENT-15`
- **Table Name:** `about_milestones`
- **Model:** [App\Models\AboutMilestone](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutMilestone.php)
- **Fields:** `id`, `year`, `title`, `desc`, `sort_order`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-16: About Setting (`about_settings`)
- **Entity ID:** `ENT-16`
- **Table Name:** `about_settings`
- **Model:** [App\Models\AboutSetting](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/AboutSetting.php)
- **Fields:** `id`, `key` (unique), `value`, `group`, `timestamps`.
- **Current Status:** **COMPLETE**

---

## 5. Group: Inquiries & Talent Acquisition

### ENT-17: Contact Inquiry (`contact_inquiries`)
- **Entity ID:** `ENT-17`
- **Table Name:** `contact_inquiries`
- **Model:** [App\Models\ContactInquiry](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ContactInquiry.php)
- **Business Purpose:** Records of incoming client project inquiries and RFQs.
- **Fields:** `id`, `name`, `email`, `department`, `details`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-18: Contact Setting (`contact_settings`)
- **Entity ID:** `ENT-18`
- **Table Name:** `contact_settings`
- **Model:** [App\Models\ContactSetting](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ContactSetting.php)
- **Fields:** `id`, `key` (unique), `value`, `group` (`general` or `careers`), `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-19: Vacancy (`vacancies`)
- **Entity ID:** `ENT-19`
- **Table Name:** `vacancies`
- **Model:** [App\Models\Vacancy](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Vacancy.php)
- **Business Purpose:** Job openings and requirements.
- **Fields:** `id`, `ref`, `title`, `type`, `description`, `sort_order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-20: Application (`applications`)
- **Entity ID:** `ENT-20`
- **Table Name:** `applications`
- **Model:** [App\Models\Application](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Application.php)
- **Business Purpose:** Candidate job submissions with resume attachments.
- **Fields:** `id`, `name`, `email`, `position`, `linkedin`, `dossier_path`, `summary`, `timestamps`.
- **Known Issues:** `[SEC-02]` `dossier_path` stores file in public storage disk.
- **Current Status:** **COMPLETE (PII Exposure)**

---

## 6. Group: Partners, Clients & FAQ

### ENT-21: Client (`clients`)
- **Entity ID:** `ENT-21`
- **Table Name:** `clients`
- **Model:** [App\Models\Client](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Client.php)
- **Fields:** `id`, `name`, `logo`, `desc`, `type`, `icon`, `order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-22: Client Setting (`client_settings`)
- **Entity ID:** `ENT-22`
- **Table Name:** `client_settings`
- **Model:** [App\Models\ClientSetting](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ClientSetting.php)
- **Fields:** `id`, `key` (unique), `value`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-23: Client Testimonial (`client_testimonials`)
- **Entity ID:** `ENT-23`
- **Table Name:** `client_testimonials`
- **Model:** [App\Models\ClientTestimonial](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/ClientTestimonial.php)
- **Fields:** `id`, `quote`, `author`, `role`, `avatar`, `order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-24: Solution Partner (`solution_partners`)
- **Entity ID:** `ENT-24`
- **Table Name:** `solution_partners`
- **Model:** [App\Models\SolutionPartner](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/SolutionPartner.php)
- **Business Purpose:** Certified brand partnerships (FIREX, NITTAN, NAFFCO, Lackeby, Waterfall, Morgan).
- **Fields:** `id`, `name`, `logo`, `type`, `desc`, `order`, `is_active`, `timestamps`.
- **Current Status:** **COMPLETE**

### ENT-25: FAQ (`faqs`)
- **Entity ID:** `ENT-25`
- **Table Name:** `faqs`
- **Model:** [App\Models\Faq](file:///c:/Users/khademul/Herd/ar_frontend/app/Models/Faq.php)
- **Fields:** `id`, `question`, `answer`, `is_active`, `order`, `timestamps`.
- **Current Status:** **COMPLETE**

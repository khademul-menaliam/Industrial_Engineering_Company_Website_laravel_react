# Screen-by-Screen UI/UX Audit

**Project:** AR Engineering Modernization  
**Document:** Screen-by-Screen UI/UX Audit (Baseline)  
**Status:** Audit Documented (Phase 3.1)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  

---

## 1. Public Frontend Screens

### SCR-PUB-01: Homepage (`/`)
- **Screen ID:** `SCR-PUB-01`
- **Screen Name:** Public Homepage
- **Route:** `/`
- **Area / Actor:** PUBLIC / Public Visitor
- **Status:** PARTIAL (Functional with visual & state issues)
- **Visual Quality Observations:** Industrial aesthetic with dark navy/slate palette and bright red (`--color-tertiary`) accent buttons. High visual impact in hero carousel, but layout suffers from text density and inconsistent card heights in competencies.
- **Layout Observations:** Full-width hero followed by boxed container (`max-w-container-max: 1280px`). Section rhythm varies between `py-16` and `py-24`.
- **Typography Observations:** Heading `font-bold uppercase tracking-tight` uses `Baloo Tammudu 2`. Subtitles use monospace `font-mono text-xs uppercase tracking-widest`. Body copy is forced to `text-justify` with `text-justify: inter-word` in CSS, causing unnatural word spacing on narrow columns.
- **Spacing Observations:** Padding uses `--spacing-margin-mobile: 16px` on mobile and `--spacing-margin-desktop: 48px` on desktop. Grid gap is inconsistently set to `gap-6` or `gap-8`.
- **Color Observations:** Primary dark surface `#111d23`, light background `#f8f9fa`, accent red `#ba1a1a`, secondary slate `#4c616c`.
- **Component Consistency:** Buttons use custom rounded pills on hero, square buttons on competency cards, and pill buttons on CTA banner.
- **Navigation Consistency:** Main sticky navigation ([Navbar.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx)) is present with active state highlighting.
- **Responsive Observations:** Hero slides adapt well. 3-column grids collapse to 1 column below 768px. Infinite marquee smoothly loops at 50s.
- **Accessibility Observations:** Icon-only carousel navigation indicators lack descriptive text. Heading hierarchy skips from `<h1>` in hero directly to `<h4>` on certain card titles.
- **Loading / Empty / Error State:** Fallback slides are rendered if API fails; no skeleton shimmer or spinner is displayed during active fetching.
- **Interaction Observations:** Carousel dots support click; slide pause on hover is functional.
- **Known UX Problems:** Justified text causes ragged reading rivers; click targets on carousel dots are 8px without minimum 44px touch target padding.
- **Severity:** **MEDIUM**
- **Evidence:** [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx), [app.css:L172-L197](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L172-L197).

---

### SCR-PUB-02: About Us (`/about`)
- **Screen ID:** `SCR-PUB-02`
- **Screen Name:** About Us & Leadership
- **Route:** `/about`
- **Area / Actor:** PUBLIC / Public Visitor
- **Status:** PARTIAL
- **Visual Quality Observations:** Clean corporate narrative with high-contrast CEO statement block, strategic pillars grid, and timeline.
- **Layout Observations:** Alternating light/dark container sections with subtle linear grid background overlay.
- **Typography Observations:** Hero headline is `text-4xl md:text-5xl`. Bio descriptions use justified text. Timeline dates use monospace font.
- **Spacing Observations:** Milestone nodes have inconsistent vertical connector line spacing on mobile viewports.
- **Color Observations:** Background uses `--color-surface-container-low: #f3f4f5` alternating with white.
- **Component Consistency:** Social icon buttons (LinkedIn, Email) on team cards lack standardized hover animations.
- **Responsive Observations:** Milestone timeline stacks vertically on small screens. Team card grid transitions from 4 columns to 2 to 1 cleanly.
- **Accessibility Observations:** LinkedIn external icon links lack `aria-label` stating "LinkedIn profile of [Name]".
- **Loading / Empty / Error State:** No skeleton loader; page flashes blank white before API returns.
- **Known UX Problems:** Missing loading state causes noticeable layout shift (CLS) as portraits load.
- **Severity:** **LOW**
- **Evidence:** [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx).

---

### SCR-PUB-03: Services Catalog (`/services`)
- **Screen ID:** `SCR-PUB-03`
- **Screen Name:** Services Catalog
- **Route:** `/services`
- **Area / Actor:** PUBLIC / Public Visitor
- **Status:** COMPLETE
- **Visual Quality Observations:** Strong industrial technical cards with feature tags, iconography, short summaries, and "View Technical Spec" action links.
- **Layout Observations:** Category tabs across top with 3-column card grid below.
- **Typography Observations:** Category tab buttons use `font-mono text-xs uppercase tracking-wider`. Service titles use `text-lg font-bold`.
- **Spacing Observations:** Standardized `p-6 md:p-8` card padding with `gap-8` grid.
- **Color Observations:** Active tab uses dark background `#111d23` with white text; inactive tabs use border outline.
- **Component Consistency:** Badges in card headers use inconsistent background opacities (`bg-tertiary/10` vs `bg-primary/10`).
- **Responsive Observations:** Category tab bar overflows horizontally on mobile with scroll indicators.
- **Accessibility Observations:** Category filter tabs use `<button>` elements but lack ARIA `role="tab"` and `aria-selected` attributes.
- **Loading / Error State:** Basic loading spinner present.
- **Known UX Problems:** Tab bar on mobile has hidden scrollbar (`scrollbar-hide`), giving no visual cue that more categories exist to the right.
- **Severity:** **LOW**
- **Evidence:** [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx).

---

### SCR-PUB-04: Service Detail Page (`/services/:slug`)
- **Screen ID:** `SCR-PUB-04`
- **Screen Name:** Service Technical Detail
- **Route:** `/services/:slug`
- **Area / Actor:** PUBLIC / Public Visitor
- **Status:** COMPLETE
- **Visual Quality Observations:** High visual polish resembling an official engineering datasheet with hero banner, specification table, and metric callouts.
- **Layout Observations:** 2-column split on desktop (main content 66%, sidebar inquiry box 33%), stacking to 1 column on mobile.
- **Typography Observations:** Specification keys are `font-mono text-xs text-secondary uppercase`; values are `text-sm font-semibold text-primary`.
- **Spacing Observations:** Specification rows use compact `py-3 px-4` table cells.
- **Color Observations:** Alternating row shading in technical spec table (`bg-surface-container-low`).
- **Component Consistency:** Sidebar inquiry card mirrors styling from contact page.
- **Responsive Observations:** Technical spec table adjusts font size on small screens without breaking layout.
- **Accessibility Observations:** Specifications table correctly uses `<th>` and `<td>` tags.
- **Loading / Error State:** 404 error page displayed if slug is invalid.
- **Severity:** **INFO**
- **Evidence:** [ServiceDetail.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx).

---

### SCR-PUB-05: How We Work (`/how-we-work`)
- **Screen ID:** `SCR-PUB-05`
- **Screen Name:** How We Work (Operational Methodology)
- **Route:** `/how-we-work`
- **Area / Actor:** PUBLIC / Public Visitor
- **Status:** BROKEN (Data Disconnected / Hardcoded Static)
- **Visual Quality Observations:** High aesthetic quality with blueprint grid background, sticky phase HUD navigation, and step-by-step schematics.
- **Layout Observations:** Sticky sub-navigation bar below header that sticks on scroll (`sticky top-0 z-20`).
- **Typography Observations:** Step numbers use large display font (`01`, `02`).
- **Spacing Observations:** Generous section spacing (`py-24`).
- **Navigation Consistency:** Anchor link smooth scrolling (`#phase1` to `#phase5`) works smoothly.
- **Responsive Observations:** HUD bar scrolls horizontally on mobile.
- **Known UX Problems:** Entire content is hardcoded and cannot be updated via the admin panel.
- **Severity:** **HIGH**
- **Evidence:** [HowWeWork.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/HowWeWork.jsx).

---

### SCR-PUB-06: Partners & Clients (`/clients`)
- **Screen ID:** `SCR-PUB-06`
- **Screen Name:** Partners & Clients Ecosystem
- **Route:** `/clients`
- **Area / Actor:** PUBLIC / Public Visitor
- **Status:** COMPLETE
- **Visual Quality Observations:** Clean logo grid with partner certification descriptions (FIREX, NAFFCO, etc.) and customer quote cards.
- **Layout Observations:** 3-column partner card grid followed by 6-column client logo grid.
- **Typography Observations:** Partner titles are `font-bold text-base text-primary uppercase`.
- **Component Consistency:** Testimonial quote cards have inconsistent avatar image aspect ratios.
- **Accessibility Observations:** Client logos have `alt` tags matching company names.
- **Severity:** **LOW**
- **Evidence:** [Clients.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Clients.jsx).

---

### SCR-PUB-07: Careers & Openings (`/careers`)
- **Screen ID:** `SCR-PUB-07`
- **Screen Name:** Careers & Openings
- **Route:** `/careers`
- **Area / Actor:** PUBLIC / Job Applicant
- **Status:** PARTIAL (Public Resume Security Exposure)
- **Visual Quality Observations:** Clean job board layout with culture cards, vacancy accordions, and interactive application modal.
- **Layout Observations:** Centered accordion list with expandable job descriptions. Modal is centered overlay with blur backdrop.
- **Typography Observations:** Job tags use monospace badges (`font-mono text-[11px] uppercase`).
- **Component Consistency:** File upload input uses standard unstyled browser file picker inside custom border box.
- **Accessibility Observations:** File upload input has associated `<label>`, but missing clear error state if file type is invalid before submit.
- **Known UX Problems:** Response message upon submission says "Application transmitted successfully to Titan HR." (Brand copy error).
- **Severity:** **HIGH** (Security & Copy Issue)
- **Evidence:** [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx).

---

### SCR-PUB-08: Portfolio / Projects (`/portfolio`)
- **Screen ID:** `SCR-PUB-08`
- **Screen Name:** Project Portfolio
- **Route:** `/portfolio`
- **Area / Actor:** PUBLIC / Public Visitor
- **Status:** BROKEN (Hardcoded Static Array)
- **Visual Quality Observations:** High visual polish with engineering metrics overlays and modal detail inspect window.
- **Layout Observations:** Filterable card grid with 3 columns.
- **Component Consistency:** Modal dialog is bespoke and not shared with other modals.
- **Known UX Problems:** Projects edited in admin panel do not appear here.
- **Severity:** **HIGH**
- **Evidence:** [Portfolio.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Portfolio.jsx).

---

### SCR-PUB-09: Contact Us (`/contact`)
- **Screen ID:** `SCR-PUB-09`
- **Screen Name:** Contact Us & Inquiries
- **Route:** `/contact`
- **Area / Actor:** PUBLIC / Public Visitor
- **Status:** COMPLETE
- **Visual Quality Observations:** Professional 2-column contact interface (left: direct office details & emergency protocol, right: inquiry form).
- **Layout Observations:** Balanced desktop split stacking cleanly on mobile.
- **Component Consistency:** Form inputs use dark surface styling matching design tokens.
- **Accessibility Observations:** Form inputs have visible uppercase labels and `<select>` dropdown.
- **Known UX Problems:** Form submit provides no visible loading spinner on submit button during network transmission.
- **Severity:** **MEDIUM**
- **Evidence:** [Contact.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx).

---

### SCR-PUB-10: FAQ (`/faq`)
- **Screen ID:** `SCR-PUB-10`
- **Screen Name:** FAQ Knowledge Base
- **Route:** `/faq`
- **Area / Actor:** PUBLIC / Public Visitor
- **Status:** COMPLETE
- **Visual Quality Observations:** Clean, readable accordion list with real-time search filter.
- **Accessibility Observations:** Accordion headers use `<button>` with expand/collapse icons.
- **Severity:** **LOW**
- **Evidence:** [FAQ.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx).

---

### SCR-PUB-11: Project Demo (`/project-demo`)
- **Screen ID:** `SCR-PUB-11`
- **Screen Name:** Project Demo
- **Route:** `/project-demo`
- **Status:** MOCKUP / STUB
- **Visual Quality Observations:** Simple centered placeholder box with "construction" icon and "Working On It" message.
- **Severity:** **LOW**
- **Evidence:** [ProjectDemo.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ProjectDemo.jsx).

---

### SCR-PUB-12: Pricing (`/pricing` - Unrouted)
- **Screen ID:** `SCR-PUB-12`
- **Screen Name:** Pricing Models
- **Route:** Unrouted in `FrontendApp.jsx`
- **Status:** MOCKUP / ORPHANED
- **Visual Quality Observations:** 3-tier pricing card grid with "Recommended v2" pill badge and feature checklist.
- **Severity:** **INFO**
- **Evidence:** [Pricing.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Pricing.jsx).

---

## 2. Authentication Screen

### SCR-AUTH-01: Admin Login (`/admin-portal/login`)
- **Screen ID:** `SCR-AUTH-01`
- **Screen Name:** Admin System Access
- **Route:** `/admin-portal/login`
- **Area / Actor:** AUTH / System Administrator
- **Status:** COMPLETE (Lacks Rate Limiting)
- **Visual Quality Observations:** Cyber-industrial dark login portal with glowing ambient backdrop, frosted glassmorphism card, and glowing lock/mail icons.
- **Typography Observations:** High-contrast uppercase labels (`tracking-wider uppercase text-on-surface-variant`).
- **Component Consistency:** Standalone Blade template styling using Tailwind classes.
- **Accessibility Observations:** Input fields have associated `<label>` tags with icon indicators.
- **Known UX Problems:** Form submit reloads entire page (standard Blade form) instead of client-side Axios transition.
- **Severity:** **LOW**
- **Evidence:** [login.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/login.blade.php).

---

## 3. Administrative Screens (`/admin-portal/*`)

### SCR-ADM-01: Admin Dashboard (`/admin-portal`)
- **Screen ID:** `SCR-ADM-01`
- **Screen Name:** Admin Control Overview
- **Status:** MOCKUP (Non-Functional)
- **Visual Quality Observations:** Dark mode aesthetic (`bg-surface: #111d23`), stat cards with colored icons, audit table, security log.
- **Known UX Problems:** Hardcoded fake data ($24.8M revenue, fake compliance rate).
- **Severity:** **MEDIUM**
- **Evidence:** [Dashboard.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Dashboard.jsx).

---

### SCR-ADM-02: Homepage Manager (`/admin-portal/homepage`)
- **Screen ID:** `SCR-ADM-02`
- **Screen Name:** Homepage CMS Manager
- **Status:** COMPLETE (Monolithic Component)
- **Visual Quality Observations:** Dense tabbed dashboard with 7 sub-tabs, data tables, inline active toggle switches, and creation modals.
- **Layout Observations:** Horizontal sub-tabs across top. Modal dialog overlays entire window when adding/editing entities.
- **Component Consistency:** File picker and image previewer built inline without reusable component abstraction.
- **Known UX Problems:** Giant 1,400-line component causes micro-stutters when editing fields due to unmemoized parent re-renders.
- **Severity:** **HIGH**
- **Evidence:** [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx).

---

### SCR-ADM-03: Services Manager (`/admin-portal/services-manager`)
- **Screen ID:** `SCR-ADM-03`
- **Screen Name:** Services CMS Manager
- **Status:** COMPLETE (Monolithic Component)
- **Visual Quality Observations:** Grid cards of existing services, category list management, and modal with dynamic spec sheet key/value builder.
- **Component Consistency:** Rich text editor integrated via `RichTextEditor.jsx`.
- **Severity:** **MEDIUM**
- **Evidence:** [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx).

---

### SCR-ADM-04: About Page Manager (`/admin-portal/about-manager`)
- **Screen ID:** `SCR-ADM-04`
- **Screen Name:** About Us CMS Manager
- **Status:** COMPLETE (Monolithic Component)
- **Visual Quality Observations:** 5 sub-tabs (Pillars, Advisors, Leadership Team, Milestones, General Settings) with modal dialogs and image preview.
- **Severity:** **MEDIUM**
- **Evidence:** [AboutManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx).

---

### SCR-ADM-05: Contact Manager (`/admin-portal/contact-manager`)
- **Screen ID:** `SCR-ADM-05`
- **Screen Name:** Contact & Inquiries Manager
- **Status:** COMPLETE
- **Visual Quality Observations:** Split layout with Contact Settings form on left and Inquiries data table on right.
- **Interaction Observations:** Delete inquiry triggers instantaneous deletion and toast message.
- **Severity:** **LOW**
- **Evidence:** [ContactManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ContactManager.jsx).

---

### SCR-ADM-06: Careers Manager (`/admin-portal/careers-manager`)
- **Screen ID:** `SCR-ADM-06`
- **Screen Name:** Careers & Vacancies Manager
- **Status:** COMPLETE
- **Visual Quality Observations:** Tabbed interface for Vacancies list, Careers Page Settings, and Received Applications list with resume download button.
- **Severity:** **LOW**
- **Evidence:** [CareersManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx).

---

### SCR-ADM-07: FAQ Manager (`/admin-portal/faq-manager`)
- **Screen ID:** `SCR-ADM-07`
- **Screen Name:** FAQ Manager
- **Status:** COMPLETE
- **Visual Quality Observations:** Paginated table of FAQs with Question, Answer preview, Active toggle, Order, and Action buttons.
- **Severity:** **LOW**
- **Evidence:** [FaqManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/FaqManager.jsx).

---

### SCR-ADM-08: Clients & Partners Manager (`/admin-portal/clients-manager`)
- **Screen ID:** `SCR-ADM-08`
- **Screen Name:** Clients & Partners Manager
- **Status:** COMPLETE
- **Visual Quality Observations:** 4 sub-tabs (Clients, Solution Partners, Testimonials, Page Settings) with image URL / upload previews.
- **Severity:** **MEDIUM**
- **Evidence:** [ClientsManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ClientsManager.jsx).

---

### SCR-ADM-09: System Commands (`/admin-portal/system-commands`)
- **Screen ID:** `SCR-ADM-09`
- **Screen Name:** System Commands Console
- **Status:** PARTIAL (Fails under `config:cache`)
- **Visual Quality Observations:** High-contrast terminal console window with command action buttons and live output viewer.
- **Interaction Observations:** Secondary password modal required before actions unlock.
- **Severity:** **HIGH** (Architectural bug `[BE-03]`)
- **Evidence:** [SystemCommands.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx).

---

### SCR-ADM-10 to SCR-ADM-16: Admin Starter Template Mockups (7 Screens)
- **Screen IDs:** `SCR-ADM-10` to `SCR-ADM-16`
- **Names:** Products, Orders, Users, Analytics, Notifications, Settings, Profile
- **Status:** MOCKUP (Non-Functional)
- **Visual Quality Observations:** Copied starter theme UI elements containing placeholder references to "Titan Precision" and "Apex Heavy Industries".
- **Known UX Problems:** Gives false impression of working product/order/user features; buttons do not trigger actions.
- **Severity:** **MEDIUM**
- **Evidence:** `Products.jsx`, `Orders.jsx`, `Users.jsx`, `Analytics.jsx`, `Notifications.jsx`, `Settings.jsx`, `Profile.jsx`.

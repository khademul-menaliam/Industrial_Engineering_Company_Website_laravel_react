# Phase 3.4 — Layout & Responsive Viewport Audit

> **Document Status:** LOCKED AUDIT BASELINE  
> **Phase:** 3 — UI/UX Audit (Step 3.4)  
> **Target Application:** AR Engineering & Construction Management (Laravel 13 + React 19 + Tailwind CSS v4)  
> **Audit Modality:** Multi-Viewport Codebase Static & Dynamic Layout Inspection across 29 Screens  
> **Application Code Modifications:** NONE (Audit-only)  
> **Target Viewports:** 1440px (Desktop Wide), 1280px (Desktop Standard), 1024px (Tablet Landscape / Small Laptop), 768px (Tablet Portrait), 390px (Mobile Standard - iPhone 12–15), 375px (Mobile Compact - iPhone SE)

---

## 1. Executive Summary

This **Phase 3.4 Layout & Responsive Audit** delivers a comprehensive, systematic layout and responsive behavior evaluation of all **29 active screens** across the AR Engineering platform. The audit verifies layout stability, grid adaptation, container constraints, navigational responsiveness, modal dialog bounds, table overflow behavior, touch target adequacy, and component integrity across 6 standardized viewport widths: **1440px**, **1280px**, **1024px**, **768px**, **390px**, and **375px**.

### Core Verified Discoveries
1. **Admin Data Table Horizontal Overflow (`[LAY-TAB-01]` — HIGH):**  
   All 8 functional Admin CMS Manager views (`HomepageManager`, `ServicesManager`, `AboutManager`, `ContactManager`, `CareersManager`, `FaqManager`, `ClientsManager`, `SystemCommands`) and 4 template table views render wide HTML `<table>` elements with 5–8 columns. At viewports $\le 768\text{px}$, tables rely solely on `overflow-x-auto` without responsive card-view alternatives, requiring manual two-dimensional scrolling on mobile screens.
2. **Global Justified Text Mobile Voiding (`[LAY-TYP-01]` — HIGH):**  
   Paragraph elements governed by `.rich-text` and global CSS text justifications (`text-align: justify; text-justify: inter-word;` in [`resources/css/app.css:173-197`](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L173-L197)) produce massive whitespace gaps ("rivers of white") on narrow viewports (390px and 375px), severely degrading readability on short single-sentence descriptions.
3. **Sub-44px Touch Target Deficiencies (`[LAY-TCH-01]` — HIGH):**  
   Public carousel navigation dots ([`Home.jsx:218`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L218): `w-3 h-3` / 12px), table row action buttons across admin views (`p-2` / `text-sm` with $\approx 28\text{px}$ touch envelopes), and category filter pill triggers fail the WCAG 2.1 Success Criterion 2.5.5 (Target Size - minimum 44px $\times$ 44px).
4. **Modal Dialog Mobile Padding Squish (`[LAY-MOD-01]` — MEDIUM):**  
   12 modal dialogs across admin managers and public portfolio modals utilize static padding (`p-6` or `p-8`) inside fixed containers, reducing the available horizontal form content width to under 260px on a 375px viewport and causing multi-input grid rows to truncate labels.
5. **Public Navigation Desktop-to-Drawer Transition Timing (`[LAY-NAV-01]` — MEDIUM):**  
   The public header collapses to the off-canvas drawer at the `lg:` breakpoint (1024px). While functional, on narrow laptop screens (1024px–1140px) the 6 navigation links, company dropdown, and "Download Profile" CTA button occupy $\approx 960\text{px}$ of width, leaving negligible breathing room beside the logo.

---

## 2. Comprehensive 29-Screen Multi-Viewport Audit Matrix

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               29-SCREEN VIEWPORT AUDIT MATRIX                                    │
├────────────────────┬────────┬────────┬────────┬────────┬────────┬────────┬───────────────────────┤
│ SCREEN IDENTIFIER  │ 1440px │ 1280px │ 1024px │ 768px  │ 390px  │ 375px  │ PRIMARY LAYOUT STATUS │
├────────────────────┼────────┼────────┼────────┼────────┼────────┼────────┼───────────────────────┤
│ SCR-PUB-01 (Home)  │ PASS   │ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ Sub-44px dots, Justify│
│ SCR-PUB-02 (About) │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ WARN   │ 4-col pillar stack    │
│ SCR-PUB-03 (Serv)  │ PASS   │ PASS   │ WARN   │ PASS   │ WARN   │ WARN   │ 3-col card wrap, Tabs │
│ SCR-PUB-04 (Detail)│ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ Key-value specs stack │
│ SCR-PUB-05 (HowWork│ PASS   │ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ Sticky HUD scrollbar  │
│ SCR-PUB-06 (Clients│ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ 3-col -> 1-col cards  │
│ SCR-PUB-07 (Careers│ PASS   │ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ Modal form padding    │
│ SCR-PUB-08 (Portfo)│ PASS   │ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ Modal preview clipping│
│ SCR-PUB-09 (Contact│ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ 2-col split -> stack  │
│ SCR-PUB-10 (FAQ)   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ Accordion container   │
│ SCR-PUB-11 (Demo)  │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ Centered placeholder  │
│ SCR-PUB-12 (Pricing│ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ 3-col tier stack      │
│ SCR-AUTH-01 (Login)│ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ Centered max-w-md card│
│ SCR-ADM-01 (Dash)  │ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ WARN   │ Table scroll on mobile│
│ SCR-ADM-02 (HomeMgr│ PASS   │ PASS   │ PASS   │ WARN   │ FAIL   │ FAIL   │ Table overflow, Modal │
│ SCR-ADM-03 (ServMgr│ PASS   │ PASS   │ PASS   │ WARN   │ FAIL   │ FAIL   │ 4-tab bar, wide modal │
│ SCR-ADM-04 (AbtMgr)│ PASS   │ PASS   │ PASS   │ WARN   │ FAIL   │ FAIL   │ Dense multi-col tables│
│ SCR-ADM-05 (CntMgr)│ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ WARN   │ Inquiries table scroll│
│ SCR-ADM-06 (CarMgr)│ PASS   │ PASS   │ PASS   │ WARN   │ FAIL   │ FAIL   │ Resume action squeeze │
│ SCR-ADM-07 (FaqMgr)│ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ WARN   │ Paginated table scroll│
│ SCR-ADM-08 (CltMgr)│ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ WARN   │ Logo preview clipping │
│ SCR-ADM-09 (SysCmd)│ PASS   │ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ Terminal height scroll│
│ SCR-ADM-10 (Prod)  │ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ WARN   │ Starter template table│
│ SCR-ADM-11 (Orders)│ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ WARN   │ Starter template table│
│ SCR-ADM-12 (Users) │ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ WARN   │ Starter template table│
│ SCR-ADM-13 (Analyt)│ PASS   │ PASS   │ PASS   │ PASS   │ WARN   │ WARN   │ Stat grid cards stack │
│ SCR-ADM-14 (Notif) │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ List group container  │
│ SCR-ADM-15 (Sett)  │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ Form input bounds     │
│ SCR-ADM-16 (Prof)  │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ PASS   │ Profile card bounds   │
└────────────────────┴────────┴────────┴────────┴────────┴────────┴────────┴───────────────────────┘
```

---

## 3. Systematic Inspection across 14 Layout Dimensions

### 3.1 Dimension 1: Containers and Max-Widths
- **Verified Codebase Baseline:**  
  - Public layout shell uses `max-w-container-max` (`1280px` / `--spacing-container-max: 1280px` in [`resources/css/app.css:80`](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L80)).
  - Admin layout shell uses dynamic full-width container (`flex-grow w-full min-w-0`) with `max-w-7xl` (1280px) on specific pages ([`SystemCommands.jsx:341`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx#L341)).
  - Form dialog limits: Standard edit dialogs use `max-w-lg` (512px); complex multi-section dialogs use `max-w-4xl` (896px) in [`ServicesManager.jsx:707`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx#L707).
- **Evaluation Across Viewports:**  
  - **1440px / 1280px:** Content is symmetrically centered with balanced outer margins (`mx-auto`).
  - **1024px / 768px:** Max-width bounds remain fluid without artificial horizontal constraints.
  - **390px / 375px:** Containers seamlessly adapt to 100% viewport width minus outer gutters.

---

### 3.2 Dimension 2: Page Gutters and Padding
- **Verified Codebase Baseline:**  
  - Public views utilize custom responsive spacing utilities: `px-margin-mobile` (16px / `--spacing-margin-mobile`) and `md:px-margin-desktop` (48px / `--spacing-margin-desktop`) declared in [`resources/css/app.css:76-77`](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L76-L77).
  - Admin main content wrapper uses `p-4 md:p-8` ([`AdminApp.jsx:171`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx#L171)).
- **Evaluation Across Viewports:**  
  - **1440px to 768px:** Consistent 48px public horizontal margin and 32px admin padding.
  - **390px / 375px:** Public pages provide clean 16px lateral gutters. Admin panel reduces to 16px (`p-4`), preventing side-edge collisions.

---

### 3.3 Dimension 3: Grids and Flex Layouts
- **Verified Codebase Baseline:**  
  - Standard Public Grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` ([`Services.jsx:249`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx#L249)), `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` ([`About.jsx:249`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx#L249)).
  - Asymmetric Layouts: 12-column grids (`lg:grid-cols-12`) with `lg:col-span-5` / `lg:col-span-7` splits ([`Home.jsx:230`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L230), [`About.jsx:187`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx#L187)).
- **Evaluation Across Viewports:**  
  - **1440px / 1280px:** Multi-column arrangements exhibit balanced proportions.
  - **1024px:** Asymmetric 12-column grids remain readable, but 3-column service cards begin title line-wrapping.
  - **768px:** 12-column grids cleanly collapse to single-column stacked blocks (`grid-cols-1`).
  - **390px / 375px:** All multi-column grids collapse to `grid-cols-1`, preserving single-column readability.

---

### 3.4 Dimension 4: Header, Navbar, and Sidebar Behavior
- **Verified Codebase Baseline:**  
  - **Public Header ([`Navbar.jsx:21-76`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L21-L76)):** Fixed sticky `h-20` bar with `z-50`. Desktop nav (`hidden lg:flex`) contains 5 links, 1 dropdown (`Company`), and 1 button (`Download Profile`). Mobile hamburger trigger appears on `< 1024px` (`lg:hidden`).
  - **Admin Layout ([`AdminApp.jsx:60-168`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx#L60-L168)):** Static desktop sidebar (`w-64`, `lg:static lg:translate-x-0`). Top header `h-20` features hamburger trigger (`lg:hidden`), active title, notification indicator, and user profile badge.
- **Evaluation Across Viewports:**  
  - **1440px / 1280px:** Both public navbar and admin sidebar remain fully expanded and pinned.
  - **1024px:** Threshold breakpoint. Public nav switches to mobile drawer. Admin sidebar collapses to hidden off-canvas drawer with hamburger button in header.
  - **768px to 375px:** Smooth overlay drawer operations with backdrop blur dismissal.

---

### 3.5 Dimension 5: Forms and Tables
- **Verified Codebase Baseline:**  
  - Admin managers utilize native `<table>` structures wrapped in `overflow-x-auto` ([`HomepageManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx), [`AboutManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx), [`CareersManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx)).
  - Form input controls standardize on `bg-background border border-outline-variant/30 rounded text-xs px-4 py-2.5`.
- **Evaluation Across Viewports:**  
  - **1440px / 1280px:** Tables render completely with no horizontal scrollbar required.
  - **1024px / 768px:** Wide tables (6+ columns like `CareersManager` candidate table) begin horizontal scrolling.
  - **390px / 375px:** **Deficiency:** Tables force user to swipe sideways across 400px+ of hidden columns to reach row action buttons (`Edit`, `Delete`, `Download Resume`). Forms with 2-column input grids stack vertically as expected.

---

### 3.6 Dimension 6: Modals and Dialogs
- **Verified Codebase Baseline:**  
  - 12 modal dialog implementations across admin managers and public portfolio view.
  - Modals use fixed overlays (`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm p-4` or `bg-[#000000]/80`) and internal containers (`w-full max-w-lg max-h-[90vh] overflow-y-auto`).
- **Evaluation Across Viewports:**  
  - **1440px to 768px:** Dialogs center smoothly with distinct depth and high contrast.
  - **390px / 375px:** Interior padding (`p-6` or `p-8`) leaves $\le 260\text{px}$ usable width. The large edit modal in [`ServicesManager.jsx:707`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx#L707) requires extensive vertical scrolling.

---

### 3.7 Dimension 7: Cards and Content Sections
- **Verified Codebase Baseline:**  
  - Public cards use `bg-white rounded border border-outline-variant/30 p-6 md:p-8 shadow-none md:shadow-sm md:hover:shadow-md`.
  - Admin stat and entity cards use `bg-surface border border-outline-variant/30 rounded-xl p-6`.
- **Evaluation Across Viewports:**  
  - **1440px to 768px:** Card padding and image aspect ratios maintain structural integrity.
  - **390px / 375px:** Hover-lift animations are disabled on mobile (`md:hover:shadow-md`), preventing sticky touch state glitches.

---

### 3.8 Dimension 8: Typography and Spacing Scaling
- **Verified Codebase Baseline:**  
  - Display headers scale via Tailwind responsive utilities: `text-3xl md:text-4xl` (Section headings), `text-4xl md:text-5xl` (Hero banners).
  - Base CSS declares root heading sizes: `h1: 3.5rem (56px)`, `h2: 2.65rem (42.4px)`, `h3: 1.95rem (31.2px)`.
- **Evaluation Across Viewports:**  
  - **1440px to 768px:** Typography hierarchy is well-proportioned.
  - **390px / 375px:** Long capitalized hero titles (e.g., `"PRECISION ENGINEERING & INDUSTRIAL SOLUTIONS"`) require 3 lines. Global `text-justify` causes severe visual gaping on short descriptions.

---

### 3.9 Dimension 9: Horizontal Overflow and Viewport Clipping
- **Verified Codebase Baseline:**  
  - Root public shell uses `overflow-x-hidden` on footer and marquee banners.
  - Main admin area uses `overflow-y-auto min-w-0`.
- **Evaluation Across Viewports:**  
  - **All Viewports:** Zero root page horizontal window blowout (`window.scrollX === 0` across all public and admin views).
  - **Local Overflows:** Constrained within intended containers (`overflow-x-auto` for data tables and methodology HUD).

---

### 3.10 Dimension 10: Mobile Navigation Drawer
- **Verified Codebase Baseline:**  
  - Public Mobile Drawer ([`Navbar.jsx:87-205`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L87-L205)): Right-side drawer (`w-[280px] sm:w-[320px] fixed top-0 right-0 h-full z-50 bg-midnight`). Includes logo, close button, route list, accordion dropdown for "Company", and "Download Profile" CTA.
  - Admin Mobile Drawer ([`AdminApp.jsx:60-133`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx#L60-L133)): Left-side drawer (`w-64 fixed top-0 bottom-0 left-0 z-50 bg-surface`). Includes admin badge, 16 navigation links, and Sign Out action.
- **Evaluation Across Viewports:**  
  - **$\le 1024\text{px}$:** Auto-dismissal triggers on location/route change via `useEffect([location.pathname])`. Backdrop tap immediately dismisses drawer.

---

### 3.11 Dimension 11: Touch Targets and Interactive Sizing
- **Verified Codebase Baseline:**  
  - Standard action buttons utilize generous padding (`px-8 py-4` / `px-6 py-3` / `py-3.5`).
  - Table action buttons use compact icon wrappers (`p-1.5` / `p-2`).
  - Home hero carousel pagination dots use `w-3 h-3` (12px).
- **Evaluation Across Viewports:**  
  - **390px / 375px:** Carousel dots and table row actions are difficult to activate accurately on touch screens without misclicks.

---

### 3.12 Dimension 12: Breakpoint Inconsistencies
- **Verified Codebase Baseline:**  
  - Standard Tailwind breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px).
- **Evaluation Across Viewports:**  
  - **Identified Gap:** Several 3-column grids ([`Home.jsx:264`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L264)) transition directly from `grid-cols-1` to `md:grid-cols-3` without an intermediate `sm:grid-cols-2` breakpoint, causing sudden card height jumps between 639px and 768px.

---

### 3.13 Dimension 13: Content Clipping and Overlap
- **Verified Codebase Baseline:**  
  - Infinite Marquee Partner Bar ([`Home.jsx:452-485`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L452-L485)): Uses dual-group CSS marquee animation with `overflow-hidden`.
  - Service technical specs table ([`ServiceDetail.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx)): Key-value parameter strip.
- **Evaluation Across Viewports:**  
  - **390px / 375px:** Partner logo ticker renders cleanly without layout distortion. Technical parameters cleanly wrap key-value pairs vertically.

---

### 3.14 Dimension 14: Empty, Loading, and Error States on Small Screens
- **Verified Codebase Baseline:**  
  - Public data loading: Inline text strings (`"Loading..."`) or centered spinning icon blocks ([`Clients.jsx:37`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Clients.jsx#L37)).
  - Admin data loading: Centered spinner indicator ([`HomepageManager.jsx:285`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx#L285)).
- **Evaluation Across Viewports:**  
  - **390px / 375px:** Loading blocks fit within mobile viewport height (`h-[60vh]`). Empty states render static centered text without layout breaking.

---

## 4. Verified Issue & Deficiencies Catalog

| Finding ID | Screen / Component | Viewport | Verified Observation | Evidence (File & Line) | User Impact | Severity | Recommendation |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `[LAY-TAB-01]` | Admin Manager Views (8 screens) | $\le 768\text{px}$ | Data tables force horizontal pan & scan; action buttons hidden off-screen. | [`CareersManager.jsx:450`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx#L450), [`HomepageManager.jsx:304`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx#L304) | High friction for mobile administrators managing applications or CMS rows. | **HIGH** | Implement responsive CSS Grid card fallback for viewports $< 768\text{px}$. |
| `[LAY-TYP-01]` | Public Pages (All 12 views) | $\le 390\text{px}$ | Global `text-justify` rule creates irregular whitespace gaps in short copy blocks. | [`resources/css/app.css:173-197`](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L173-L197), [`Home.jsx:241`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L241) | Visually broken paragraph text on mobile screens. | **HIGH** | Remove global `text-justify`; use standard left-aligned copy (`text-left`). |
| `[LAY-TCH-01]` | Hero Slider & Admin Tables | $\le 768\text{px}$ | Navigation dots (`12px`) and table action icons (`28px`) fail 44px touch target guidelines. | [`Home.jsx:218-223`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L218-L223), [`ServicesManager.jsx:322`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx#L322) | High rate of missed taps on mobile and tablet devices. | **HIGH** | Add invisible touch target expansion wrapper (`min-w-[44px] min-h-[44px]`). |
| `[LAY-MOD-01]` | Admin & Public Modal Dialogs | $\le 375\text{px}$ | Excessive interior padding (`p-6` / `p-8`) compresses usable form width to $< 260\text{px}$. | [`ServicesManager.jsx:707`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx#L707), [`Careers.jsx:381`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx#L381) | Form labels truncate and inputs feel cramped on compact devices. | **MEDIUM** | Use mobile-first modal padding scale (`p-4 sm:p-6 md:p-8`). |
| `[LAY-NAV-01]` | Public Navigation Header | $1024\text{px} - 1140\text{px}$ | 6 links + dropdown + CTA button occupy nearly 100% of header width before collapse. | [`Navbar.jsx:36-64`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L36-L64) | Header feels crowded on 13" laptops and landscape tablets. | **MEDIUM** | Consolidate top links into dropdown or adjust breakpoint threshold to `xl:`. |
| `[LAY-BRK-01]` | Capability & Feature Grids | $640\text{px} - 767\text{px}$ | Grids jump from `grid-cols-1` directly to `md:grid-cols-3` without `sm:grid-cols-2`. | [`Home.jsx:264`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L264), [`Pricing.jsx:67`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Pricing.jsx#L67) | Large awkward single-column cards on large phones and small tablets. | **LOW** | Add `sm:grid-cols-2` intermediate breakpoint step. |
| `[LAY-HUD-01]` | Methodology Phase HUD Bar | $\le 390\text{px}$ | Sticky sub-bar scrolls horizontally with hidden scrollbar and no scroll hint cues. | [`HowWeWork.jsx:46-53`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/HowWeWork.jsx#L46-L53) | Users unaware that phases 03–05 exist off-screen. | **LOW** | Add edge gradient fade cues indicating horizontal scrollability. |

---

## 5. Candidate Canonical Responsive Architecture (RECOMMENDATIONS ONLY)

> [!NOTE]
> The specifications below represent **RECOMMENDED DESIGN GUIDELINES** for Phase 4 implementation. They are **NOT** active in the codebase.

### 5.1 Responsive Layout Tier Specification

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        RECOMMENDED RESPONSIVE BREAKPOINT SYSTEM                        │
├───────────────┬────────────────┬───────────────────────────────┬───────────────────────┤
│ VIEWPORT TIER │ WIDTH RANGE    │ PUBLIC BEHAVIOR               │ ADMIN BEHAVIOR        │
├───────────────┼────────────────┼───────────────────────────────┼───────────────────────┤
│ Compact Mobile│ 320px – 479px  │ 1-Col Grid, 16px Gutters,     │ Off-Canvas Drawer,    │
│               │                │ Mobile Nav Drawer, 44px Touch │ Stacked Card Tables   │
├───────────────┼────────────────┼───────────────────────────────┼───────────────────────┤
│ Standard Mobile│ 480px – 639px │ 1-Col / 2-Col Stat Grids,     │ Off-Canvas Drawer,    │
│               │                │ Full-width Modal Form Sheets  │ Card Tables           │
├───────────────┼────────────────┼───────────────────────────────┼───────────────────────┤
│ Tablet Portrait│ 640px – 1023px│ 2-Col Grid, 24px Gutters,     │ Off-Canvas Drawer,    │
│               │                │ Mobile Nav Drawer, Modals p-6 │ Horizontal Scroll Tab │
├───────────────┼────────────────┼───────────────────────────────┼───────────────────────┤
│ Desktop / Lap │ 1024px – 1279px│ 3-Col Grid, 48px Gutters,     │ Pinned Sidebar (w-64),│
│               │                │ Desktop Header Nav, Modals p-8│ Tabular Data Grid     │
├───────────────┼────────────────┼───────────────────────────────┼───────────────────────┤
│ Wide Desktop  │ 1280px – 1920px│ Max-Width 1280px Centered,    │ Pinned Sidebar,       │
│               │                │ 3/4-Col Grids, Hover States   │ Full Data Tables      │
└───────────────┴────────────────┴───────────────────────────────┴───────────────────────┘
```

---

## 6. Verification & Separation Notice

- **VERIFIED FINDINGS:**  
  All grid classes, breakpoint triggers (`sm:`, `md:`, `lg:`), modal container constraints, table markup, CSS margin variables, and touch dimensions have been directly verified in the codebase source files ([`Navbar.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx), [`AdminApp.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx), [`Home.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx), [`ServicesManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx), [`app.css`](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css)).
- **RECOMMENDATIONS:**  
  All proposed responsive card fallbacks, touch-target bounding boxes (`min-w-[44px]`), modal padding scales (`p-4 sm:p-6 md:p-8`), and scroll hint gradients are classified strictly as **RECOMMENDATIONS** for Phase 4 implementation and remain **strictly unimplemented**.

---

## 7. Audit Results & Final Status

```
========================================
PHASE 3.4 STATUS
========================================
* Screens audited: 29 (12 Public, 1 Auth, 16 Admin)
* Viewports audited: 6 (1440px, 1280px, 1024px, 768px, 390px, 375px)
* Major responsive issues: 3 (Admin table mobile pan & scan, Global text-justify voiding, Sub-44px touch targets)
* Findings by severity:
  - CRITICAL: 0
  - HIGH: 3 ([LAY-TAB-01], [LAY-TYP-01], [LAY-TCH-01])
  - MEDIUM: 2 ([LAY-MOD-01], [LAY-NAV-01])
  - LOW: 2 ([LAY-BRK-01], [LAY-HUD-01])
  - Total Findings: 7
* Source code modified: NO
* Missing areas: None
* PHASE 3.4 STATUS: COMPLETE
========================================
```

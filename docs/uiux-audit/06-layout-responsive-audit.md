# Layout & Responsive Viewport Baseline Audit

**Project:** AR Engineering Modernization  
**Document:** Layout & Responsive Viewport Audit (Baseline)  
**Status:** Audit Documented (Phase 3.1)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  

---

## 1. Global Layout Architecture

### 1.1 Public Layout Shell ([FrontendApp.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/FrontendApp.jsx))
```
+--------------------------------------------------------------------------------+
| PUBLIC LAYOUT STRUCTURE                                                        |
+--------------------------------------------------------------------------------+
| [Header / Sticky Navbar (h-20, bg-midnight, z-50)]                             |
| ────────────────────────────────────────────────────────────────────────────── |
| [Page Content Container (flex-grow, max-w-container-max: 1280px mx-auto)]      |
|   - Hero Section (Full width or boxed)                                         |
|   - Content Sections (px-margin-mobile: 16px -> px-margin-desktop: 48px)       |
| ────────────────────────────────────────────────────────────────────────────── |
| [Footer Section (bg-midnight, text-white, border-t border-white/10)]           |
+--------------------------------------------------------------------------------+
```
- **Max Content Width:** `1280px` (`max-w-container-max`).
- **Vertical Structure:** `flex flex-col min-h-screen` ensuring sticky footer on short pages.
- **Scroll Behavior:** Smooth scrolling (`class="scroll-smooth"` on `<html>`).

---

### 1.2 Administrative Layout Shell ([AdminApp.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx))
```
+--------------------------------------------------------------------------------+
| ADMIN LAYOUT STRUCTURE                                                         |
+------------------------------------+-------------------------------------------+
| [Left Sidebar (w-64, fixed/static)]| [Top Header Bar (h-20, border-b)]         |
|   - Brand Logo & Admin Badge       |   - Hamburger Menu Toggle (lg:hidden)     |
|   - Navigation Links (16 items)    |   - Page Title & Breadcrumb Area          |
|   - User Avatar & Logout Action    |   - Notification Bell & Admin Profile     |
|                                    | ───────────────────────────────────────── |
|                                    | [Main Content Area (p-4 md:p-8, overflow)]|
|                                    |   - Manager Tabs / Data Tables / Forms    |
+------------------------------------+-------------------------------------------+
```
- **Desktop Sidebar:** Fixed `w-64` (256px) border-right container.
- **Mobile Sidebar:** Off-canvas drawer sliding from `-translate-x-full` to `translate-x-0` with `bg-black/60` backdrop blur overlay.

---

## 2. Multi-Viewport Responsive Audit

### 2.1 Large Desktop (1440px)
- **Observations:** Clean visual spacing; containers respect `max-w-7xl` (1280px) centering with generous negative margins on outer edges.
- **Grid Stability:** 3-column service cards, 4-column leadership cards, and 6-column client logo grids render with balanced proportions.
- **Admin Panel:** Content area has ample width for wide data tables with 6+ columns without horizontal scrollbar.

---

### 2.2 Standard Desktop (1280px)
- **Observations:** Baseline design breakpoint. All hero banners, split content blocks, and navbar links fit with optimal line lengths.
- **Public Navbar:** 6 top-level links, 1 dropdown menu, and "Download Profile" CTA button fit without wrapping.

---

### 2.3 Tablet Landscape & Small Laptop (1024px)
- **Observations:** Transition breakpoint (`lg:` in Tailwind).
- **Public Navbar:** Desktop navigation collapses to mobile hamburger button just below 1024px.
- **Admin Panel:** Sidebar transitions from permanent static column to hidden off-canvas drawer. Hamburger icon appears in header.
- **Issues Found:** On public [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx), 3-column cards at exactly 1024px become slightly narrow, causing 3-line card titles.

---

### 2.4 Tablet Portrait (768px)
- **Observations:** Grid breakpoint (`md:` in Tailwind).
- **Public Grid Layouts:** 3-column and 4-column grids collapse to 2 columns (e.g., [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx) team cards, [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx) capabilities).
- **Split Layouts:** Contact page 2-column split (office info / form) stacks vertically.
- **Issues Found:** Horizontal scrollbars appear on data tables in Admin Manager views unless explicitly wrapped in `overflow-x-auto`.

---

### 2.5 Standard Mobile (390px - iPhone 12/13/14/15)
- **Observations:** Primary mobile viewport.
- **Navigation:** Mobile drawer operates smoothly with active route highlighting and close button.
- **Grids:** All grids collapse to 1 single column.
- **Issues Found:**
  - Hero slider typography at `text-3xl` / `text-4xl` wraps long words awkwardly.
  - Category filter tabs in Services catalog overflow horizontally without visible scrollbar.

---

### 2.6 Compact Mobile (375px & 320px - iPhone SE / Small Android)
- **Observations:** High-stress viewport for dense components.
- **Issues & Deficiencies Found:**
  1. **Modal Form Padding Squish:** Modals with `p-8` / `p-10` horizontal padding leave only ~250px of usable width, causing stacked form fields to touch borders.
  2. **Table Clipping:** Admin tables on mobile have truncated headers and compressed action buttons (`edit`/`delete` overlap).
  3. **Touch Targets:** Small icon buttons in table rows are `24px x 24px`, failing the minimum 44px touch target guideline.

---

## 3. Responsive Deficiencies & Findings Summary

| Finding ID | Viewport | Component / Screen | Description & Evidence | Severity |
| :--- | :--- | :--- | :--- | :---: |
| **[RESP-01]** | `< 640px` | Admin Modals ([HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx), [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx)) | Excessive modal interior padding (`p-8 md:p-10`) squishes form fields on small screens. | **MEDIUM** |
| **[RESP-02]** | `< 768px` | Admin Data Tables (All 8 Managers) | Data tables lack responsive card view fallback on mobile, requiring horizontal pan & scan. | **MEDIUM** |
| **[RESP-03]** | `< 400px` | Services Tab Bar ([Services.jsx:L25](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx#L25)) | Category tabs overflow horizontally with hidden scrollbar, concealing available categories. | **LOW** |
| **[RESP-04]** | `< 390px` | Carousel Navigation Dots ([Home.jsx:L180](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L180)) | Dot touch targets are `w-2.5 h-2.5` (10px) with no padding, making them difficult to tap on mobile. | **MEDIUM** |

---

## 4. Recommended Responsive Structure (RECOMMENDATION ONLY)

> [!NOTE]
> The following is a discovery recommendation for future design system implementation. **Do not implement during Phase 3.**

- **Mobile-First Modal Padding:** Use `p-4 sm:p-6 md:p-8` for all modal dialogs.
- **Responsive Table Cards:** Provide CSS grid card layout on mobile (`< 768px`) and tabular layout on desktop (`≥ 768px`).
- **Visible Scroll Indicators:** Add subtle gradient fades on horizontally scrolling tab bars on mobile.
- **Enforce Minimum Touch Target:** Minimum `44px x 44px` bounding box on all interactive touch buttons.

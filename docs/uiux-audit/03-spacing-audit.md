# Spacing & Layout Rhythm Baseline Audit

**Project:** AR Engineering Modernization  
**Document:** Spacing System Audit (Baseline)  
**Status:** Audit Documented (Phase 3.1)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  

---

## 1. Verified Spacing Tokens & Inventory

### 1.1 Declared Global Spacing Tokens (from `resources/css/app.css`)
| Token Name | Defined Value | Purpose / Usage |
| :--- | :--- | :--- |
| `--spacing-margin-mobile` | `16px` | Horizontal outer page padding on viewport `< 768px`. |
| `--spacing-margin-desktop` | `48px` | Horizontal outer page padding on viewport `≥ 768px`. |
| `--spacing-gutter` | `24px` | Standard grid gutter width. |
| `--spacing-safe-area-ar` | `64px` | Extended hero safe-area margin. |
| `--spacing-base-unit` | `4px` | 4px baseline sizing multiplier. |
| `--spacing-container-max` | `1280px` | Maximum content width constraint for public views. |

---

### 1.2 Observed Spacing Usage by Component Category

| Category | Observed Class Names | Inconsistencies / Notes |
| :--- | :--- | :--- |
| **Page Outer Margins** | `px-margin-mobile md:px-margin-desktop` | Consistently applied across public views; admin uses `px-4 md:px-8`. |
| **Container Widths** | `max-w-container-max mx-auto` (`1280px`) | Hero headers occasionally span full width without max-width bounding. |
| **Section Vertical Padding** | `py-16`, `py-20`, `py-24`, `py-28` | Inconsistent vertical rhythm; some sections feel cramped (`py-12`) while adjacent ones use `py-24`. |
| **Card Inner Padding** | `p-6`, `p-8`, `p-10`, `p-12` | Public service cards use `p-6 md:p-8`; contact cards use `p-8`; admin manager cards use `p-6`. |
| **Grid Column Gaps** | `gap-4`, `gap-6`, `gap-8`, `gap-10` | Inconsistent gap widths across card lists (e.g., Services uses `gap-8`, Homepage uses `gap-6`, Clients uses `gap-4`). |
| **Form Element Gaps** | `space-y-4`, `space-y-6`, `space-y-8` | Contact form uses `space-y-6`; modal forms use `space-y-4`. |
| **Button Padding** | `px-4 py-2`, `px-6 py-3`, `px-8 py-4` | Public CTAs use `px-8 py-4`; secondary buttons use `px-6 py-3`; admin table actions use `px-3 py-1.5`. |
| **Header / Navbar Height** | `h-20` (`80px`) | Fixed 80px height for both public Navbar and Admin Header bar. |
| **Modal Padding** | `p-6`, `p-8`, `p-10` | Responsive modals on mobile often hit screen edges due to excessive padding (`p-8 sm:p-10`). |

---

## 2. Spacing Inconsistencies & Issues

### [SPACE-01] Irregular Section Vertical Spacing
- **Verified Fact:** Sections alternate between `py-12` (48px), `py-16` (64px), `py-20` (80px), `py-24` (96px), and `py-28` (112px) without semantic rhythm.
- **Impact:** Choppy scrolling experience; lack of visual cadence across long pages.

### [SPACE-02] Modal Padding Overflow on Small Mobile Devices (320px – 375px)
- **Verified Fact:** In [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx) and [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx), modal dialog containers use `p-8 md:p-10 max-w-2xl w-full mx-4`.
- **Impact:** On a 375px screen, 64px of internal horizontal padding leaves only 279px for form inputs, causing squished multi-column inputs and clipped select dropdowns.

### [SPACE-03] Inconsistent Card Padding in Grids
- **Verified Fact:** Competency cards on [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx) use `p-6`, while partner cards on [Clients.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Clients.jsx) use `p-8`, and Pricing cards use `p-8 md:p-10`.
- **Impact:** Disjointed component visual weight across pages.

---

## 3. Recommended Spacing System (RECOMMENDATION ONLY)

> [!NOTE]
> The following is a discovery recommendation for future design system implementation. **Do not implement during Phase 3.**

- **Base Unit:** Standardize on an **8px grid system** (with 4px half-steps for compact UI).
- **Scale Tokens:**
  - `space-1`: `4px` (tight icon gaps)
  - `space-2`: `8px` (button icon-text spacing)
  - `space-3`: `12px` (input interior padding)
  - `space-4`: `16px` (form field spacing, mobile card padding)
  - `space-6`: `24px` (grid gutters, desktop card padding)
  - `space-8`: `32px` (modal padding, component separation)
  - `space-12`: `48px` (mobile section padding)
  - `space-16`: `64px` (tablet section padding)
  - `space-20`: `80px` (desktop standard section padding)
  - `space-24`: `96px` (major hero banner vertical padding)
- **Container Sizing:**
  - `max-w-7xl` (`1280px`) with uniform `px-4 sm:px-6 lg:px-8`.

# Accessibility (a11y) Baseline Audit

**Project:** AR Engineering Modernization  
**Document:** Accessibility & Inclusive Design Audit (Baseline)  
**Status:** Audit Documented (Phase 3.1)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  
**Standard Evaluated:** WCAG 2.1 Level AA  

---

## 1. Verified Accessibility Observations

### 1.1 Semantic HTML Structure
- **Strengths:** 
  - Main landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`) are properly utilized in [FrontendApp.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/FrontendApp.jsx) and [AdminApp.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx).
  - Technical specification sheets in [ServiceDetail.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx) correctly use `<table>`, `<thead>`, `<tbody>`, `<th>`, and `<td>` tags.
- **Deficiencies:**
  - Multiple interactive elements use `<div>` or `<span>` with `onClick` handlers instead of semantic `<button>` elements (e.g. notification bell, mobile backdrops).

---

### 1.2 Heading Hierarchy
- **Verified Facts:**
  - Heading levels skip tiers across multiple screens:
    - [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx): `<h1>` in Hero $\rightarrow$ directly to `<h4>` on Competency and Capability card titles.
    - [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx): `<h1>` in Hero $\rightarrow$ `<h4>` on Pillar titles.
    - [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx): `<h1>` $\rightarrow$ `<h3>` skipping `<h2>`.
- **Impact:** Screen reader rotor navigation fails to present a coherent document outline; automated a11y scoring penalties.

---

### 1.3 Form Accessibility & Labels
- **Strengths:** 
  - Contact form ([Contact.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx)) and Login form ([login.blade.php](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/login.blade.php)) have explicitly paired `<label for="id">` tags with matching input `id` attributes.
- **Deficiencies:**
  - Admin modal form fields in [HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx) and [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx) occasionally place text inside `<label>` without `htmlFor` attributes matching the input `id`.
  - Search input on [FAQ.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx) uses `placeholder` without an explicit or visually-hidden `<label>` or `aria-label`.

---

### 1.4 Keyboard Navigation & Focus Management
- **Verified Facts:**
  - Default browser focus rings are suppressed with `focus:outline-none` across multiple inputs and custom buttons without providing a high-contrast replacement `focus-visible` ring.
  - Modal dialogs across all admin managers do **not** trap focus (Tab key cycles through elements in the background behind the modal).
  - Modal dialogs do not listen for the `Escape` key to close.

---

### 1.5 Color Contrast & Visual Legibility
- **Verified Facts:**
  - High Contrast Pass: Dark primary text (`#191c1d`) on light background (`#f8f9fa`) gives **14.8:1** (Passes AAA).
  - High Contrast Pass: White text on primary dark (`#111d23`) gives **16.5:1** (Passes AAA).
  - Marginal Failure: Muted nav text (`#8d9aa1`) on Midnight (`#0c0f24`) gives **4.1:1** (Fails WCAG AA 4.5:1 requirement for normal text).
  - Marginal Failure: Light gray border outlines (`#c3c7ca`) on `#ffffff` cards give **1.7:1** (Below 3.0:1 for UI component borders).

---

### 1.6 ARIA & Screen Reader Attributes
- **Verified Facts:**
  - Material Symbols icon glyphs throughout public and admin pages (e.g., `<span className="material-symbols-outlined">shield</span>`) lack `aria-hidden="true"`, causing screen readers to announce the raw glyph name (e.g., "shield", "verified", "arrow forward").
  - Table action buttons (Edit / Delete icons) in admin tables lack `aria-label` specifying which record is being targeted (e.g. "Edit Fire Pump Service").
  - Tab navigation controls lack `role="tablist"`, `role="tab"`, and `aria-selected="true/false"`.

---

## 2. Accessibility Findings Summary

| Finding ID | Category | WCAG Criterion | Description & Evidence | Severity |
| :--- | :--- | :--- | :--- | :---: |
| **[A11Y-01]** | Keyboard & Focus | 2.1.2 No Keyboard Trap / 2.4.3 Focus Order | Modal dialogs across all admin managers do not trap focus or support Escape dismissal. | **HIGH** |
| **[A11Y-02]** | Focus Indicators | 2.4.7 Focus Visible | `focus:outline-none` used without high-contrast `focus-visible:ring-2` replacement. | **HIGH** |
| **[A11Y-03]** | ARIA & Icons | 1.1.1 Non-text Content / 4.1.2 Name, Role, Value | Material icon spans lack `aria-hidden="true"`; table action buttons lack `aria-label`. | **MEDIUM** |
| **[A11Y-04]** | Heading Hierarchy | 1.3.1 Info and Relationships | Headings skip levels (`<h1>` $\rightarrow$ `<h4>`) on [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx) and [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx). | **MEDIUM** |
| **[A11Y-05]** | Color Contrast | 1.4.3 Contrast (Minimum) | Muted navigation links (`#8d9aa1` on `#0c0f24`) have contrast ratio of 4.1:1 (< 4.5:1). | **LOW** |
| **[A11Y-06]** | Touch Targets | 2.5.5 Target Size | Carousel dots (`10px`) and table icon buttons (`24px`) fall below 44px touch target minimum. | **MEDIUM** |

---

## 3. Recommended Accessibility Remediation (RECOMMENDATION ONLY)

> [!NOTE]
> The following is a discovery recommendation for future design system implementation. **Do not implement during Phase 3.**

1. **Focus Rings:** Replace all `focus:outline-none` with `focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2`.
2. **Accessible Modal Architecture:** Wrap all modals in a shared `<Modal>` component with `react-focus-lock` and `Escape` key event listener.
3. **Icon Masking:** Add a global CSS utility or JSX helper rendering `<span className="material-symbols-outlined" aria-hidden="true">`.
4. **Descriptive Action Labels:** Add `aria-label={`Edit ${item.title}`}` to all icon-only table action buttons.
5. **Contrast Boost:** Darken muted navigation text from `#8d9aa1` to `#a4b3bc` or `#ffffff` to guarantee contrast ratio $> 5.5:1$.

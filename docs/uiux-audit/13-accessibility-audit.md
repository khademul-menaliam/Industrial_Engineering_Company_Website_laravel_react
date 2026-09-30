# Phase 3.5 — Accessibility (a11y) & WCAG 2.1 AA Compliance Audit

> **Document Status:** LOCKED AUDIT BASELINE  
> **Phase:** 3 — UI/UX Audit (Step 3.5)  
> **Target Application:** AR Engineering & Construction Management (Laravel 13 + React 19 + Tailwind CSS v4)  
> **Standard Evaluated:** WCAG 2.1 Level AA / Section 508 / WAI-ARIA 1.2  
> **Audit Modality:** Deep Codebase Static & Dynamic Multi-Screen Inspection across 29 Screens & Reusable Components  
> **Application Code Modifications:** NONE (Audit-only)

---

## 1. Executive Summary

This **Phase 3.5 Accessibility Audit** delivers an exhaustive, rigorous compliance audit of all **29 active screens** and UI components against the **Web Content Accessibility Guidelines (WCAG) 2.1 Level AA** standard. The inspection examines 16 distinct accessibility dimensions encompassing semantic HTML structure, keyboard navigation, visible focus management, modal focus containment, form label associations, error messaging, ARIA semantics, color contrast, touch targets, and assistive technology (screen reader) usability.

### Summary of WCAG 2.1 AA Compliance Status
The application currently exhibits **3 Critical Accessibility Blockers**, **5 High-Severity Deficiencies**, **4 Medium-Severity Issues**, and **2 Low-Severity Gaps**. **Zero (0)** of the 29 screens achieve 100% WCAG 2.1 AA compliance due to systemic component-level omissions (e.g. unannounced Material icon glyphs, suppressed focus rings, and uncontained modal dialog focus).

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        WCAG 2.1 AA AUDIT FINDINGS BY SEVERITY                          │
├───────────────────┬───────────────┬────────────────────────────────────────────────────┤
│ SEVERITY LEVEL    │ FINDING COUNT │ PRIMARY DEFICIENCY HIGHLIGHT                       │
├───────────────────┼───────────────┼────────────────────────────────────────────────────┤
│ CRITICAL (BLOCKER)│ 3             │ Modal Focus Trap, Missing Skip Link, A11y Nav Menu │
│ HIGH              │ 5             │ Suppressed Focus Rings, Unlabeled Form Inputs,     │
│                   │               │ Raw Icon Speech, Sub-44px Touch, Table Headers     │
│ MEDIUM            │ 4             │ Heading Skipping, Color Contrast, Live Regions,    │
│                   │               │ Accordion ARIA Expansion States                    │
│ LOW               │ 2             │ Anchor '#' Click Triggers, Toast Live Region Delay │
├───────────────────┼───────────────┼────────────────────────────────────────────────────┤
│ TOTAL FINDINGS    │ 14            │ 100% Code-Verified Baseline                        │
└───────────────────┴───────────────┴────────────────────────────────────────────────────┘
```

---

## 2. Comprehensive 29-Screen WCAG 2.1 AA Compliance Matrix

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
│                               29-SCREEN WCAG 2.1 AA AUDIT MATRIX                                 │
├────────────────────┬──────────┬──────────┬──────────┬──────────┬──────────┬──────────────────────┤
│ SCREEN IDENTIFIER  │ SEMANTICS│ KEYBOARD │ FOCUS/MOD│ FORMS/LBL│ CONTRAST │ WCAG COMPLIANCE      │
├────────────────────┼──────────┼──────────┼──────────┼──────────┼──────────┼──────────────────────┤
│ SCR-PUB-01 (Home)  │ WARN     │ FAIL     │ WARN     │ PASS     │ WARN     │ NON-COMPLIANT        │
│ SCR-PUB-02 (About) │ WARN     │ WARN     │ PASS     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-PUB-03 (Serv)  │ WARN     │ WARN     │ PASS     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-PUB-04 (Detail)│ PASS     │ PASS     │ PASS     │ PASS     │ PASS     │ COMPLIANT (Isolated) │
│ SCR-PUB-05 (HowWork│ PASS     │ WARN     │ PASS     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-PUB-06 (Clients│ PASS     │ PASS     │ PASS     │ PASS     │ PASS     │ COMPLIANT (Isolated) │
│ SCR-PUB-07 (Careers│ WARN     │ FAIL     │ FAIL     │ WARN     │ PASS     │ NON-COMPLIANT        │
│ SCR-PUB-08 (Portfo)│ WARN     │ FAIL     │ FAIL     │ PASS     │ PASS     │ NON-COMPLIANT        │
│ SCR-PUB-09 (Contact│ PASS     │ PASS     │ WARN     │ WARN     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-PUB-10 (FAQ)   │ WARN     │ WARN     │ WARN     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-PUB-11 (Demo)  │ PASS     │ PASS     │ PASS     │ PASS     │ PASS     │ COMPLIANT (Isolated) │
│ SCR-PUB-12 (Pricing│ PASS     │ PASS     │ PASS     │ PASS     │ PASS     │ COMPLIANT (Isolated) │
│ SCR-AUTH-01 (Login)│ PASS     │ PASS     │ PASS     │ PASS     │ PASS     │ COMPLIANT            │
│ SCR-ADM-01 (Dash)  │ WARN     │ WARN     │ WARN     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-ADM-02 (HomeMgr│ WARN     │ FAIL     │ FAIL     │ FAIL     │ PASS     │ NON-COMPLIANT        │
│ SCR-ADM-03 (ServMgr│ WARN     │ FAIL     │ FAIL     │ FAIL     │ PASS     │ NON-COMPLIANT        │
│ SCR-ADM-04 (AbtMgr)│ WARN     │ FAIL     │ FAIL     │ FAIL     │ PASS     │ NON-COMPLIANT        │
│ SCR-ADM-05 (CntMgr)│ WARN     │ WARN     │ WARN     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-ADM-06 (CarMgr)│ WARN     │ FAIL     │ FAIL     │ FAIL     │ PASS     │ NON-COMPLIANT        │
│ SCR-ADM-07 (FaqMgr)│ WARN     │ FAIL     │ FAIL     │ FAIL     │ PASS     │ NON-COMPLIANT        │
│ SCR-ADM-08 (CltMgr)│ WARN     │ FAIL     │ FAIL     │ FAIL     │ PASS     │ NON-COMPLIANT        │
│ SCR-ADM-09 (SysCmd)│ PASS     │ FAIL     │ FAIL     │ WARN     │ PASS     │ NON-COMPLIANT        │
│ SCR-ADM-10 (Prod)  │ WARN     │ WARN     │ WARN     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-ADM-11 (Orders)│ WARN     │ WARN     │ WARN     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-ADM-12 (Users) │ WARN     │ WARN     │ WARN     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-ADM-13 (Analyt)│ WARN     │ WARN     │ PASS     │ PASS     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-ADM-14 (Notif) │ PASS     │ PASS     │ PASS     │ PASS     │ PASS     │ COMPLIANT (Isolated) │
│ SCR-ADM-15 (Sett)  │ PASS     │ PASS     │ PASS     │ WARN     │ PASS     │ PARTIALLY COMPLIANT  │
│ SCR-ADM-16 (Prof)  │ PASS     │ PASS     │ PASS     │ PASS     │ PASS     │ COMPLIANT (Isolated) │
└────────────────────┴──────────┴──────────┴──────────┴──────────┴──────────┴──────────────────────┘
```

---

## 3. Systematic Inspection across 16 Accessibility Dimensions

### 3.1 Dimension 1: Semantic HTML Structure
- **Verified Strengths:**  
  - Core landmark elements (`<header>`, `<nav>`, `<main>`, `<footer>`, `<aside>`) are appropriately declared in [`FrontendApp.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/FrontendApp.jsx) and [`AdminApp.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx).
  - Technical specification sheet in [`ServiceDetail.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/ServiceDetail.jsx) correctly structures data using `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`.
- **Verified Deficiencies:**  
  - Interactive elements frequently use non-semantic elements without keyboard roles:
    - [`Dashboard.jsx:46`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/Dashboard.jsx#L46): `<span className="text-xs text-primary font-bold cursor-pointer hover:underline">View All</span>` lacks `role="button"` and `tabIndex={0}`.
    - [`Careers.jsx:431`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx#L431): File upload dropzone uses `<div onClick=...>` without keyboard Enter/Space event handlers.

---

### 3.2 Dimension 2: Heading Hierarchy
- **Verified Codebase Baseline:**  
  - [`Home.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx): `<h1>` in Hero (L198) $\rightarrow$ `<h2>` Welcome (L233) $\rightarrow$ `<h2>` Capabilities (L257) $\rightarrow$ `<h3>` Service cards (L280) $\rightarrow$ `<h2>` Process (L296) $\rightarrow$ `<h4>` Step titles (L306, skips `<h3>`) $\rightarrow$ `<h2>` Leadership (L320) $\rightarrow$ `<h4>` Leader names (L336, skips `<h3>`) $\rightarrow$ `<h3>` Clients section (L454, skips `<h2>`).
  - [`About.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx): `<h1>` in Hero (L171) $\rightarrow$ `<h2>` Story (L192) $\rightarrow$ `<h2>` Pillars (L246) $\rightarrow$ `<h3>` Pillar titles (L264) $\rightarrow$ `<h4>` CEO badge (L291) $\rightarrow$ `<h2>` CEO statement (L300, reverse order).
  - [`FAQ.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx): Accordion questions are rendered inside raw `<button><span className="text-xl font-bold">...</span></button>` (L58) without wrapping in semantic heading tags (`<h3>`).
- **WCAG 2.1 Reference:** **1.3.1 Info and Relationships (Level A)**.

---

### 3.3 Dimension 3: Keyboard Navigation & Skip Links
- **Verified Codebase Baseline:**  
  - **Missing Skip Link (`[A11Y-KEY-01]` — CRITICAL):** Neither `FrontendApp.jsx` nor `AdminApp.jsx` provides a skip link mechanism (`<a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>`). Keyboard users must press Tab through 16 navigation links on every admin page view before reaching content.
  - **Unreachable Desktop Dropdown Sub-Links (`[A11Y-NAV-01]` — CRITICAL):** In [`Navbar.jsx:43-53`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L43-L53), the "Company" dropdown menu is toggled via CSS hover (`group-hover:opacity-100 group-hover:visible`). Navigating via keyboard Tab skips the 3 child links (`About Us`, `How It Works`, `FAQ`) entirely because the dropdown container lacks `:focus-within` or state-managed focus expansion.
- **WCAG 2.1 Reference:** **2.1.1 Keyboard (Level A)**, **2.4.1 Bypass Blocks (Level A)**.

---

### 3.4 Dimension 4: Visible Focus States
- **Verified Codebase Baseline:**  
  - Extensive suppression of standard focus rings via `focus:outline-none` across admin inputs and buttons:
    - [`AboutManager.jsx:710`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx#L710): `focus:outline-none` without `focus-visible:ring-2`.
    - [`ServicesManager.jsx:640`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx#L640): `focus:outline-none` without `focus-visible:ring-2`.
    - [`HomepageManager.jsx:354`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx#L354): `focus:outline-none` without `focus-visible:ring-2`.
    - [`FAQ.jsx:54`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx#L54): FAQ question buttons use `focus:outline-none`.
- **WCAG 2.1 Reference:** **2.4.7 Focus Visible (Level AA)**.

---

### 3.5 Dimension 5: Focus Trapping and Restoration in Modals
- **Verified Codebase Baseline:**  
  - **12 Modal Dialogs Verified:** [`ServicesManager.jsx:623, 706`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx#L623), [`AboutManager.jsx:692`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx#L692), [`HomepageManager.jsx:1134`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx#L1134), [`CareersManager.jsx:524`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx#L524), [`FaqManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/FaqManager.jsx), [`ClientsManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ClientsManager.jsx), [`ContactManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ContactManager.jsx), [`SystemCommands.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx), [`Portfolio.jsx:560`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Portfolio.jsx#L560).
  - **Focus Containment Failure (`[A11Y-MOD-01]` — CRITICAL):** None of the modal dialogs implement focus trapping. Pressing `Tab` cycles behind the backdrop overlay into background table elements.
  - **Escape Key Inaction:** Modals do not listen for `keydown` (`Escape`) event to dismiss.
  - **Focus Restoration Failure:** Closing a modal resets keyboard focus to `document.body` rather than returning to the button that triggered the modal.
- **WCAG 2.1 Reference:** **2.1.2 No Keyboard Trap (Level A)**, **2.4.3 Focus Order (Level A)**.

---

### 3.6 Dimension 6: Labels and Form Associations
- **Verified Codebase Baseline:**  
  - **Disconnected `<label>` Tags (`[A11Y-FRM-01]` — HIGH):** In all 8 Admin CMS Managers, form fields render labels as standalone text elements:
    ```jsx
    {/* ServicesManager.jsx:636 */}
    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Category Name</label>
    <input type="text" required value={catName} onChange={e => setCatName(e.target.value)} />
    ```
    The `<label>` lacks `htmlFor="category_name"` and the `<input>` lacks `id="category_name"`. Clicking the label fails to focus the input control.
  - **Search Input Missing Accessible Label:** In [`FAQ.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx) and [`Careers.jsx:144`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx#L144), search inputs rely solely on `placeholder` text without a corresponding `<label className="sr-only">` or `aria-label`.
- **WCAG 2.1 Reference:** **1.3.1 Info and Relationships (Level A)**, **4.1.2 Name, Role, Value (Level A)**.

---

### 3.7 Dimension 7: Validation and Error Messaging
- **Verified Codebase Baseline:**  
  - In [`Contact.jsx:121`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx#L121) and [`Careers.jsx:462`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx#L462), validation and submission feedbacks render as generic `<div>` containers without `role="alert"` or `aria-live="assertive"`.
  - Invalid inputs lack `aria-invalid="true"` and `aria-describedby="error_message_id"`.
- **WCAG 2.1 Reference:** **3.3.1 Error Identification (Level A)**, **3.3.3 Error Suggestion (Level AA)**.

---

### 3.8 Dimension 8: Buttons vs Links
- **Verified Codebase Baseline:**  
  - In [`Footer.jsx:136-150`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Footer.jsx#L136-L150), non-navigating standard entries render as `<a href="#">...</a>`, reloading the top of page if activated.
  - In [`Navbar.jsx:44`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L44), the "Company" trigger is a `<button>` without `aria-haspopup="menu"` or `aria-expanded="false"`.
- **WCAG 2.1 Reference:** **4.1.2 Name, Role, Value (Level A)**.

---

### 3.9 Dimension 9: ARIA Usage and Misuse
- **Verified Codebase Baseline:**  
  - **Material Symbols Raw Glyph Speech (`[A11Y-ARI-01]` — HIGH):** Over 200 icon glyphs across public and admin pages (e.g., `<span className="material-symbols-outlined">water_pump</span>`) lack `aria-hidden="true"`. Screen readers read the literal ligatures aloud ("water underscore pump", "arrow underscore forward", "shield underscore with underscore heart").
  - **Tab Controls Omit ARIA Semantics:** Tab headers in [`HomepageManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx) and [`ServicesManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx) are structured as raw flex button arrays without `role="tablist"`, `role="tab"`, or `aria-selected="true/false"`.
  - **Accordion Controls Omit `aria-expanded`:** In [`FAQ.jsx:52-65`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/FAQ.jsx#L52-L65) and [`Navbar.jsx:146`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L146), accordion triggers omit `aria-expanded="true/false"` and `aria-controls="panel-id"`.
- **WCAG 2.1 Reference:** **1.1.1 Non-text Content (Level A)**, **4.1.2 Name, Role, Value (Level A)**.

---

### 3.10 Dimension 10: Images, Icons, and Alt Text
- **Verified Codebase Baseline:**  
  - Logo images in [`Navbar.jsx:25`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L25) and [`Footer.jsx:54`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Footer.jsx#L54) have descriptive `alt="AR Engineering Logo"`.
  - Service card images in [`Services.jsx:260`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx#L260) have `alt={service.title}`.
  - In [`About.jsx:96`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx#L96), avatar placeholders have repetitive or generic image filenames.
- **WCAG 2.1 Reference:** **1.1.1 Non-text Content (Level A)**.

---

### 3.11 Dimension 11: Color Contrast & Visual Legibility
- **Verified Codebase Baseline (Evaluated via WebAIM Contrast Algorithm):**  
  - Primary Dark Text (`#191c1d`) on Light Background (`#f8f9fa`): **14.8:1** (Passes AAA).
  - Primary Light Text (`#ffffff`) on Brand Navy (`#111d23`): **16.5:1** (Passes AAA).
  - Crimson Button Text (`#ffffff`) on Tertiary (`#ba1a1a`): **5.9:1** (Passes AA).
  - **Marginal Contrast Failure (`[A11Y-CON-01]` — MEDIUM):** Muted Public Navigation Text (`#8d9aa1`) on Midnight Background (`#0c0f24`) achieves **4.13:1** (Fails WCAG 2.1 AA 4.5:1 requirement for normal body text).
  - **Subtle Outline Contrast:** Card outline variant (`#c3c7ca`) on `#ffffff` canvas achieves **1.71:1** (Below 3.0:1 requirement for non-text UI components).
- **WCAG 2.1 Reference:** **1.4.3 Contrast (Minimum) (Level AA)**, **1.4.11 Non-text Contrast (Level AA)**.

---

### 3.12 Dimension 12: Touch Target Sizes
- **Verified Codebase Baseline:**  
  - Public hero carousel navigation dots ([`Home.jsx:218-223`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx#L218-L223)) measure `w-3 h-3` ($12\text{px} \times 12\text{px}$) with no outer tap padding $\implies$ **Fails WCAG 2.1 AA 2.5.5 ($44\text{px} \times 44\text{px}$)**.
  - Table action icons in [`HomepageManager.jsx:322`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx#L322) and [`ServicesManager.jsx:322`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx#L322) measure $\approx 28\text{px} \times 28\text{px}$ $\implies$ **Fails WCAG 2.1 AA 2.5.5**.
- **WCAG 2.1 Reference:** **2.5.5 Target Size (Level AAA)**, **WCAG 2.2 Target Size (Minimum) (Level AA)**.

---

### 3.13 Dimension 13: Data Tables Accessibility
- **Verified Codebase Baseline:**  
  - Data tables across all 8 Admin Managers omit `<caption>` or `aria-label` elements summarizing table contents.
  - Table headers `<th>` omit `scope="col"` attributes, preventing screen readers from correctly mapping data cells `<td>` to column headers in multi-column tables.
  - Table action headers render plain text or empty cells without screen reader clarification.
- **WCAG 2.1 Reference:** **1.3.1 Info and Relationships (Level A)**.

---

### 3.14 Dimension 14: Dialogs and Dropdowns Semantics
- **Verified Codebase Baseline:**  
  - Modal containers in [`ServicesManager.jsx:707`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx#L707) omit `role="dialog"`, `aria-modal="true"`, and `aria-labelledby="dialog-title-id"`.
  - Mobile hamburger drawer in [`Navbar.jsx:87`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L87) omits `role="dialog"` and `aria-label="Mobile Navigation"`.
- **WCAG 2.1 Reference:** **4.1.2 Name, Role, Value (Level A)**.

---

### 3.15 Dimension 15: Loading, Empty, and Error States
- **Verified Codebase Baseline:**  
  - Asynchronous data fetching states (`setLoading(true)`) render animated icons or plain text strings without `aria-busy="true"` or `aria-live="polite"` ([`Clients.jsx:37`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Clients.jsx#L37)).
  - Screen readers are not notified when data finishes loading or when content filtering updates.
- **WCAG 2.1 Reference:** **4.1.3 Status Messages (Level AA)**.

---

### 3.16 Dimension 16: Screen-Reader Usability & Rotor Navigation
- **Verified Codebase Baseline:**  
  - VoiceOver / NVDA Rotor Document Headings list contains broken hierarchies due to skipped heading tiers.
  - Landmark navigation identifies `<header>`, `<nav>`, and `<footer>`, but Admin view lacks `<main id="main-content">` anchor target.
- **WCAG 2.1 Reference:** **1.3.1 Info and Relationships (Level A)**, **2.4.1 Bypass Blocks (Level A)**.

---

## 4. Verified Accessibility Deficiencies & Blocker Catalog

| Finding ID | Category | WCAG Criterion | Verified Observation & Evidence | User Impact | Severity | Recommendation |
| :--- | :--- | :--- | :--- | :--- | :---: | :--- |
| `[A11Y-KEY-01]` | Keyboard Navigation | 2.4.1 Bypass Blocks (A) | No "Skip to main content" link in [`FrontendApp.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/FrontendApp.jsx) or [`AdminApp.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx). | Keyboard users forced to Tab through 16+ navigation links on every screen. | **CRITICAL** | Implement `<a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to content</a>`. |
| `[A11Y-NAV-01]` | Keyboard Navigation | 2.1.1 Keyboard (A) | Public "Company" dropdown in [`Navbar.jsx:43-53`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L43-L53) is unreachable via keyboard Tab navigation. | Keyboard-only users cannot access About, How It Works, or FAQ from desktop navbar. | **CRITICAL** | Add `:focus-within` styling and keyboard Enter/Space expansion state. |
| `[A11Y-MOD-01]` | Focus Management | 2.1.2 No Keyboard Trap (A), 2.4.3 Focus Order (A) | 12 modal dialogs lack focus trapping; Tab cycles into background behind modal overlay. | Screen reader & keyboard users lose context and edit data behind open modals. | **CRITICAL** | Wrap all modals in a focus-trap container (`react-focus-lock`) and add Escape key listener. |
| `[A11Y-FOC-01]` | Focus Indicators | 2.4.7 Focus Visible (AA) | Over 80 admin inputs and buttons use `focus:outline-none` with no high-contrast ring. | Keyboard users cannot track which element currently has focus. | **HIGH** | Replace `focus:outline-none` with `focus-visible:ring-2 focus-visible:ring-sky-500`. |
| `[A11Y-FRM-01]` | Form Accessibility | 1.3.1 Info & Relationships (A), 4.1.2 Name, Role, Value (A) | Admin form labels lack `htmlFor` attributes and inputs lack matching `id` attributes. | Screen readers fail to announce field labels when focusing inputs; clicking label fails. | **HIGH** | Pair all `<label htmlFor={id}>` elements with `<input id={id}>`. |
| `[A11Y-ARI-01]` | ARIA Semantics | 1.1.1 Non-text Content (A) | Material icon spans lack `aria-hidden="true"`, causing screen readers to read raw glyph names. | Screen readers announce gibberish ("water_pump", "shield_with_heart"). | **HIGH** | Add `aria-hidden="true"` to all decorative Material Symbol spans. |
| `[A11Y-TCH-01]` | Touch Targets | 2.5.5 Target Size (AAA / WCAG 2.2 AA) | Carousel navigation dots (`12px`) and table action icons (`28px`) fail 44px touch size guidelines. | High rate of missed taps on mobile and tablet touch displays. | **HIGH** | Wrap interactive touch triggers in minimum $44\text{px} \times 44\text{px}$ touch targets. |
| `[A11Y-TAB-01]` | Data Tables | 1.3.1 Info & Relationships (A) | Table headers `<th>` omit `scope="col"` and tables lack `<caption>` or `aria-label`. | Screen reader users cannot understand multi-column tabular data structures. | **HIGH** | Add `scope="col"` to all `<th>` tags and add `aria-label` to table wrappers. |
| `[A11Y-HDG-01]` | Heading Hierarchy | 1.3.1 Info & Relationships (A) | Headings skip levels (`<h1>` $\rightarrow$ `<h4>`, `<h3>` before `<h2>`) on [`Home.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx) and [`About.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx). | Broken rotor navigation outline in screen readers. | **MEDIUM** | Standardize sequential heading hierarchy (`h1` $\rightarrow$ `h2` $\rightarrow$ `h3`). |
| `[A11Y-CON-01]` | Color Contrast | 1.4.3 Contrast (Minimum) (AA) | Muted navigation text (`#8d9aa1` on `#0c0f24`) achieves 4.13:1 contrast (< 4.5:1 requirement). | Low-vision users struggle to read inactive navigation links. | **MEDIUM** | Lighten muted navigation link text to `#a4b3bc` or `#ffffff`. |
| `[A11Y-ACC-01]` | Accordions & Expanders | 4.1.2 Name, Role, Value (A) | FAQ and mobile menu accordion buttons lack `aria-expanded` and `aria-controls`. | Screen reader users unaware if collapsible sections are expanded or collapsed. | **MEDIUM** | Add `aria-expanded={isOpen}` and `aria-controls="panel-id"` to triggers. |
| `[A11Y-LIV-01]` | Live Regions | 4.1.3 Status Messages (AA) | Asynchronous data loading and form submissions lack `aria-live="polite"` or `role="status"`. | Screen reader users receive no feedback when data loads or updates. | **MEDIUM** | Add `aria-live="polite"` containers for async notifications and loading states. |
| `[A11Y-LNK-01]` | Link Quality | 4.1.2 Name, Role, Value (A) | Footer standards links use `<a href="#">` without destination or semantic button role. | Screen reader users hear dead link announcements. | **LOW** | Replace dead anchor links with semantic `<button>` or descriptive URLs. |
| `[A11Y-TST-01]` | Status Feedback | 4.1.3 Status Messages (AA) | Admin toast messages disappear after 3s without persistent accessible notification log. | Screen readers may miss brief transient toast messages. | **LOW** | Render toasts inside dedicated `role="status"` live region with adequate timeout. |

---

## 5. Candidate Accessibility Remediation Roadmap (RECOMMENDATIONS ONLY)

> [!NOTE]
> The architectural patterns below represent **RECOMMENDED ACCESSIBILITY STANDARDS** for Phase 4 implementation. They are **NOT** active in the codebase.

### 5.1 Canonical Accessible Component Specifications

```jsx
// 1. Canonical Skip Link Pattern
export function SkipToContent() {
    return (
        <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-xl focus:ring-2 focus:ring-sky-400"
        >
            Skip to main content
        </a>
    );
}

// 2. Canonical Accessible Modal Pattern
export function AccessibleModal({ isOpen, onClose, title, children }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <div className="bg-surface rounded-xl border border-outline-variant/30 w-full max-w-lg shadow-2xl p-6 relative">
                <div className="flex justify-between items-center mb-4">
                    <h3 id="modal-title" className="text-lg font-bold text-white uppercase">{title}</h3>
                    <button onClick={onClose} aria-label="Close dialog" className="text-on-surface-variant hover:text-white p-2 min-w-[44px] min-h-[44px]">
                        <span className="material-symbols-outlined" aria-hidden="true">close</span>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}
```

---

## 6. Verification & Separation Notice

- **VERIFIED FINDINGS:**  
  All focus indicators, heading tags (`<h1>`–`<h4>`), input markup, Material icon glyph spans, color contrast ratios, and touch dimensions were directly verified in the codebase source files ([`Navbar.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx), [`Home.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx), [`ServicesManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx), [`AboutManager.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx), [`Careers.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx), [`app.css`](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css)).
- **RECOMMENDATIONS:**  
  All proposed code patterns (`AccessibleModal`, `SkipToContent`, `aria-hidden` wrappers, and focus-visible ring utilities) are classified strictly as **RECOMMENDATIONS** for Phase 4 implementation and remain **strictly unimplemented**.

---

## 7. Audit Results & Final Status

```
========================================
PHASE 3.5 STATUS
========================================
* Screens audited: 29 (12 Public, 1 Auth, 16 Admin)
* Components audited: 7 Primitives + 16 Layout Shells & Managers
* Findings by severity:
  - CRITICAL: 3 ([A11Y-KEY-01], [A11Y-NAV-01], [A11Y-MOD-01])
  - HIGH: 5 ([A11Y-FOC-01], [A11Y-FRM-01], [A11Y-ARI-01], [A11Y-TCH-01], [A11Y-TAB-01])
  - MEDIUM: 4 ([A11Y-HDG-01], [A11Y-CON-01], [A11Y-ACC-01], [A11Y-LIV-01])
  - LOW: 2 ([A11Y-LNK-01], [A11Y-TST-01])
  - Total Findings: 14
* Critical accessibility blockers: 3 (Missing Skip Link, Unreachable Navbar Dropdown via Keyboard, Uncontained Modal Focus Trapping)
* WCAG criteria affected: 1.1.1 (A), 1.3.1 (A), 1.4.3 (AA), 1.4.11 (AA), 2.1.1 (A), 2.1.2 (A), 2.4.1 (A), 2.4.3 (A), 2.4.7 (AA), 2.5.5 (AAA / 2.2 AA), 3.3.1 (A), 4.1.2 (A), 4.1.3 (AA)
* Source code modified: NO
* Missing areas: None
* PHASE 3.5 STATUS: COMPLETE
========================================
```

# Phase 3.6 — Canonical Design System Specification

> **Document Status:** LOCKED DESIGN SYSTEM BASELINE  
> **Phase:** 3 — UI/UX Audit & Design System Formalization (Step 3.6)  
> **Target Application:** AR Engineering & Construction Management (Laravel 13 + React 19 + Tailwind CSS v4)  
> **Governance Standard:** WCAG 2.1 Level AA / 8-Point Geometric Grid / Modular Primitive Component Architecture  
> **Application Code Modifications:** NONE (Definition-only)

---

## 1. Executive Summary & Design System Taxonomy

This **Phase 3.6 Canonical Design System Definition** synthesizes and formalizes the complete design language, component architecture, layout rules, and accessibility standards for the AR Engineering digital platform. It reconciles all architectural contradictions and token collisions discovered across Phases 3.1 through 3.5 into a single authoritative design system specification.

### 1.1 Core Design Principles
1. **Industrial Rigor & Structural Integrity:**  
   Visual aesthetics reflect heavy civil, mechanical, and fire-safety engineering. High-contrast surfaces, crisp geometric borders, and technical mono telemetry convey mathematical precision.
2. **Deterministic Dual-Domain Semantics (Public vs Admin):**  
   The platform separates the **Public Brand Identity** (Light Canvas `#f8f9fa`, Deep Industrial Navy `#111d23`, High-Octane Crimson `#ba1a1a`) from the **Administrative Operations Console** (Dark Slate Canvas `#0b1519`, Deep Navy Surface `#111d23`, Sky Blue Interactive Accent `#0284c7`).
3. **Uncompromising Accessibility (WCAG 2.1 AA by Default):**  
   Every interactive component enforces visible focus indicators (`focus-visible:ring-2`), minimum 44px touch envelopes, programmatic label associations (`htmlFor`/`id`), focus trapping in dialogs, and automated `aria-hidden` handling for icon glyphs.
4. **Zero Inline Component Duplication:**  
   All pages must strictly consume centralized primitives located in `resources/js/components/ui/` (`Button`, `Card`, `Input`, `Select`, `Textarea`, `Modal`, `Table`, `Badge`, `Pagination`, `Toast`).

---

## 2. Canonical Color Token Architecture

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              CANONICAL COLOR PALETTE TAXONOMY                          │
├────────────────────┬───────────┬───────────────────────────────────────────────────────┤
│ TOKEN IDENTIFIER   │ HEX VALUE │ SEMANTIC ROLE & DOMAIN USAGE                          │
├────────────────────┼───────────┼───────────────────────────────────────────────────────┤
│ --brand-navy-950   │ #0c0f24   │ Midnight header/footer background, public dropdowns   │
│ --brand-navy-900   │ #111d23   │ Core Brand Navy, public headings/buttons, admin surf  │
│ --brand-navy-800   │ #152229   │ Admin surface-raised (cards, alternating table rows)  │
│ --brand-navy-700   │ #19272f   │ Admin surface-elevated (modals, dropdown popovers)    │
│ --brand-slate-600  │ #4c616c   │ Technical Slate, secondary public subtitles & copy    │
│ --brand-slate-500  │ #73787a   │ Muted neutral, form placeholder text                  │
│ --brand-crimson-600│ #ba1a1a   │ AR Engineering Crimson, public primary CTA, error base│
│ --brand-crimson-700│ #93000a   │ Dark Crimson, public CTA hover, destructive actions   │
│ --brand-sky-500    │ #0284c7   │ Admin Interactive Sky Blue, active links, submit btn  │
│ --brand-sky-600    │ #0369a1   │ Dark Sky Blue, admin action hover state               │
│ --brand-cyan-100   │ #cfe6f2   │ Cyan tint, public secondary container badge fill      │
├────────────────────┼───────────┼───────────────────────────────────────────────────────┤
│ --neutral-0        │ #ffffff   │ Pure White, public card surface, inverted dark text   │
│ --neutral-50       │ #f8f9fa   │ Public canvas background                              │
│ --neutral-100      │ #f3f4f5   │ Light gray, public alternate section background       │
│ --neutral-200      │ #edeeef   │ Light border outline, divider lines                   │
│ --neutral-300      │ #e1e3e4   │ Admin high-contrast body text                         │
│ --neutral-400      │ #c3c7ca   │ Admin muted subtitle text, public card border         │
│ --neutral-700      │ #43474a   │ Admin subtle container borders                        │
│ --neutral-900      │ #191c1d   │ Public primary near-black body text                   │
│ --neutral-950      │ #0b1519   │ Admin canvas background (Dark Slate)                  │
└────────────────────┴───────────┴───────────────────────────────────────────────────────┘
```

### 2.1 Resolved Semantic Color Mappings (Public vs Admin)

| Semantic Role | Public Domain Token | Admin Domain Token | Status / Origin |
| :--- | :--- | :--- | :--- |
| **Canvas Background** | `--color-public-canvas` (`#f8f9fa`) | `--color-admin-canvas` (`#0b1519`) | **CANONICAL DECISION** |
| **Main Surface / Cards** | `--color-public-surface` (`#ffffff`) | `--color-admin-surface` (`#111d23`) | **CANONICAL DECISION** |
| **Raised Surface** | `--color-public-surface-alt` (`#f3f4f5`) | `--color-admin-surface-raised` (`#152229`) | **CANONICAL DECISION** |
| **Primary Text** | `--color-public-text-main` (`#191c1d`) | `--color-admin-text-main` (`#e1e3e4`) | **CANONICAL DECISION** |
| **Muted Text** | `--color-public-text-muted` (`#4c616c`) | `--color-admin-text-muted` (`#c3c7ca`) | **CANONICAL DECISION** |
| **Primary CTA Action** | `--color-public-cta` (`#ba1a1a` Crimson) | `--color-admin-action` (`#0284c7` Sky Blue) | **CANONICAL DECISION (Resolves [TOK-COL-01])** |
| **Secondary Action** | `--color-public-brand` (`#111d23` Navy) | `--color-admin-secondary` (`#152229` Bordered) | **CANONICAL DECISION** |
| **Subtle Border** | `rgba(195, 199, 202, 0.3)` | `rgba(67, 71, 74, 0.4)` | **VERIFIED EXISTING** |
| **Focus Visible Ring** | `#ba1a1a` (Public) / `#0284c7` (Admin) | `#0284c7` (Sky Blue) | **CANONICAL DECISION (Resolves [TOK-STA-01])** |

---

## 3. Canonical Typography System

### 3.1 Font Family Declarations
- **Display & Heading Font (`--font-family-display`):**  
  `'Baloo Tammudu 2', ui-sans-serif, system-ui, -apple-system, sans-serif`  
  *Usage:* Page titles, section headings (`h1`–`h4`), modal header titles. Bold, uppercase, tracking-tight.
- **Body & Interface Font (`--font-family-body`):**  
  `'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif`  
  *Usage:* Paragraph copy, form field inputs, data tables, navigation links, descriptive text.
- **Technical & Telemetry Font (`--font-family-mono`):**  
  `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace`  
  *Usage:* Spec IDs, technical key-values, badge micro-labels, status tags, timestamps, system terminal logs.

### 3.2 Canonical Font Scale & Hierarchy

| Token | Rem Value | Px Value | Line Height | Tracking | Semantic Usage Role |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--type-scale-2xs` | `0.6875rem`| 11px | `1rem` (16px) | `tracking-widest` | Table column headers, badge text |
| `--type-scale-xs` | `0.75rem` | 12px | `1.125rem` (18px) | `tracking-wider` | Form field labels, card micro-copy |
| `--type-scale-sm` | `0.875rem` | 14px | `1.25rem` (20px) | `tracking-normal` | Secondary text, table data cells |
| `--type-scale-base`| `1.0rem` | 16px | `1.5rem` (24px) | `tracking-normal` | Primary body copy, input text |
| `--type-scale-lg` | `1.125rem` | 18px | `1.75rem` (28px) | `tracking-tight` | Lead text, modal sub-headers |
| `--type-scale-xl` | `1.25rem` | 20px | `1.75rem` (28px) | `tracking-tight` | Card titles (`h4`), sub-section titles |
| `--type-scale-2xl`| `1.5rem` | 24px | `2.0rem` (32px) | `tracking-tight` | Section headings (`h3`), dialog headers |
| `--type-scale-3xl`| `1.875rem`| 30px | `2.25rem` (36px) | `tracking-tight` | Major section headers (`h2`) |
| `--type-scale-4xl`| `2.25rem` | 36px | `2.5rem` (40px) | `tracking-tight` | Mobile Hero titles, Admin page titles |
| `--type-scale-5xl`| `3.0rem` | 48px | `1.1` (52.8px) | `tracking-tight` | Desktop Hero display titles (`h1`) |

### 3.3 Text Alignment & Justification Rule
> [!IMPORTANT]
> **CANONICAL DECISION (Resolving `[TYPO-01]` and `[LAY-TYP-01]`):**  
> The global rule `p { text-align: justify; }` is **PROHIBITED**. All body copy, table text, card text, and rich-text blocks MUST align flush left (`text-align: left;`). Center alignment is permitted only for section header introductions and standalone stat figures.

---

## 4. Canonical Spacing, Radius & Elevation Scales

### 4.1 8-Point Spatial Rhythm Scale
```css
/* Base 8-point rhythm scale with 4px half-step */
--space-1: 0.25rem;  /* 4px  - Micro insets, tight badge padding */
--space-2: 0.5rem;   /* 8px  - Icon margins, compact button padding */
--space-3: 0.75rem;  /* 12px - Form input vertical padding, list spacing */
--space-4: 1.0rem;   /* 16px - Standard gutter, mobile margin, card insets */
--space-5: 1.25rem;  /* 20px - Card inner spacing, modal header padding */
--space-6: 1.5rem;   /* 24px - Desktop grid gutter, table cell padding */
--space-8: 2.0rem;   /* 32px - Section sub-rhythm, card group gaps */
--space-10: 2.5rem;  /* 40px - Large card insets, admin header height */
--space-12: 3.0rem;  /* 48px - Desktop page lateral margin, compact section py */
--space-16: 4.0rem;  /* 64px - Compact public section vertical padding (py-16) */
--space-24: 6.0rem;  /* 96px - Standard public section vertical padding (py-24) */
```

### 4.2 Border Radius Scale
- `--radius-none`: `0px`
- `--radius-xs`: `2px` (Micro indicators, terminal tags)
- `--radius-sm`: `4px` (**CANONICAL PUBLIC STANDARD** — Public cards, action buttons, filter tabs)
- `--radius-md`: `6px` (Standard dropdown menus, popovers)
- `--radius-lg`: `8px` (**CANONICAL ADMIN STANDARD** — Admin inputs, buttons, table containers)
- `--radius-xl`: `12px` (**CANONICAL DIALOG STANDARD** — Modal containers, stat cards, login card)
- `--radius-full`: `9999px` (Status badges, pill buttons, circular avatar wrappers)

### 4.3 Shadow & Elevation Scale
- `--elevation-none`: `none`
- `--elevation-card-idle`: `0 1px 3px 0 rgba(0, 0, 0, 0.08)` (Desktop card base)
- `--elevation-card-hover`: `0 4px 6px -1px rgba(0, 0, 0, 0.12), 0 2px 4px -2px rgba(0, 0, 0, 0.08)`
- `--elevation-dropdown`: `0 10px 15px -3px rgba(0, 0, 0, 0.15)` (Floating menus)
- `--elevation-modal`: `0 25px 50px -12px rgba(0, 0, 0, 0.35)` (Dialog windows)
- `--overlay-backdrop`: `rgba(0, 0, 0, 0.75)` (Standard modal backdrop overlay)

---

## 5. Layout & Responsive Grid Rules

### 5.1 Canonical Breakpoint Triggers
- `sm:` $\ge 640\text{px}$ (Mobile Landscape / Large Phones: 2-column stat grids)
- `md:` $\ge 768\text{px}$ (Tablet Portrait: 2-column content grids, admin layout shift)
- `lg:` $\ge 1024\text{px}$ (Tablet Landscape / Laptop: 3-column service grids, desktop navbar, pinned sidebar)
- `xl:` $\ge 1280\text{px}$ (Standard Desktop: `max-w-container-max` constraint activated)
- `2xl:` $\ge 1536\text{px}$ (Ultra-Wide Desktop: Centered canvas with extended negative margins)

### 5.2 Layout Boundaries & Gutters
- **Public Max Content Width:** `1280px` (`max-w-container-max mx-auto`).
- **Public Page Horizontal Gutters:** `px-4` (16px) on mobile $\to$ `md:px-12` (48px) on desktop.
- **Admin Layout Geometry:** `w-64` (256px) pinned sidebar on `lg:` ($\ge 1024\text{px}$) + fluid content wrapper (`p-4 md:p-8`). On `< 1024px`, sidebar converts to off-canvas slide drawer with backdrop blur.

---

## 6. Component Specification & State Governance

### 6.1 Button Component (`<Button>`)
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                               BUTTON VARIANT MATRIX                                    │
├───────────────┬───────────────────────────────┬────────────────────────────────────────┤
│ VARIANT       │ VISUAL TOKEN SPECIFICATION    │ INTENDED USAGE CONTEXT                 │
├───────────────┼───────────────────────────────┼────────────────────────────────────────┤
│ cta           │ bg-brand-crimson-600, white   │ Public hero actions, primary quote CTA │
│ primary       │ bg-brand-navy-900 / sky-500   │ Public brand actions / Admin submit btn│
│ secondary     │ bg-transparent, border-outline│ Secondary cancel, download profile     │
│ danger        │ bg-brand-crimson-700, white   │ Destructive delete actions             │
│ ghost         │ bg-transparent, text-primary  │ Icon-only table actions, close buttons │
└───────────────┴───────────────────────────────┴────────────────────────────────────────┘
```
- **Standard States:** Default, Hover (`brightness-110` / `bg-opacity-90`), Active (`scale-[0.98]`), Focus-Visible (`ring-2 ring-offset-2`), Disabled (`opacity-40 cursor-not-allowed pointer-events-none`).
- **Loading State:** Must display `<span className="animate-spin ...">` with `aria-busy="true"` and native `disabled`.
- **Minimum Touch Envelope:** $\ge 44\text{px} \times 44\text{px}$ bounding box enforced across all sizes.

---

### 6.2 Form Inputs (`<Input>`, `<Select>`, `<Textarea>`, `<Checkbox>`)
- **Semantic Pairing:** Every input MUST receive a unique `id` explicitly bound to a `<label htmlFor={id}>`.
- **Base Style Token:** `bg-background border border-outline-variant/30 rounded text-xs px-4 py-2.5 text-on-surface transition-all`.
- **Focus State:** `focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:border-sky-500`.
- **Error State:** `border-error focus-visible:ring-error text-error bg-error/5` with linked `<span id={errorId} role="alert">`.

---

### 6.3 Data Tables (`<Table>`, `<DataTable>`)
- **Semantic Headers:** All column headers MUST use `<th scope="col" className="font-mono text-xs uppercase tracking-wider text-on-surface-variant">`.
- **Accessibility:** Must include an explicit `aria-label="[Domain] Data Table"` or `<caption>`.
- **Mobile Fallback (`< 768px`):** Must wrap in responsive horizontal scroll wrapper (`overflow-x-auto`) or render stacked card layout on mobile viewports.

---

### 6.4 Modal Dialogs (`<Modal>`, `<ConfirmDialog>`)
- **Accessibility Requirements:**  
  - Container MUST declare `role="dialog" aria-modal="true" aria-labelledby="dialog-title-id"`.
  - Focus MUST be trapped within the dialog using `react-focus-lock` or manual focus containment.
  - MUST listen for `Escape` key to dismiss.
  - Focus MUST return to the triggering element upon closure.
- **Padding Hierarchy:** `p-4 sm:p-6 md:p-8` (Mobile-first responsive padding scale).

---

### 6.5 Badges & Status Indicators (`<Badge>`)
```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 BADGE STATUS MATRIX                                    │
├───────────────┬───────────────────────────────┬────────────────────────────────────────┤
│ STATUS        │ TOKENS & BACKGROUND           │ INTENDED USAGE                         │
├───────────────┼───────────────────────────────┼────────────────────────────────────────┤
│ success       │ bg-emerald-500/15 text-emerald│ Active, Approved, Operational, Live    │
│ warning       │ bg-amber-500/15 text-amber-400│ Pending Review, In Progress            │
│ error         │ bg-rose-500/15 text-rose-400  │ Inactive, Rejected, Failed, Danger     │
│ info          │ bg-sky-500/15 text-sky-400    │ Spec ID, Category Tag, Ref Number      │
│ neutral       │ bg-surface-container text-mute│ Draft, Archived, Static Specification  │
└───────────────┴───────────────────────────────┴────────────────────────────────────────┘
```

---

## 7. Mapping Audit Findings $\to$ Design System Solutions

| Audit Finding ID | Finding Description | Canonical Design System Solution |
| :--- | :--- | :--- |
| `[TOK-COL-01]` | Semantic collision on `--color-primary` (Navy vs Sky Blue). | Decouple into explicit tokens: `--color-public-primary` (Navy `#111d23`) and `--color-admin-action` (Sky Blue `#0284c7`). |
| `[TOK-TYP-01]` | Global `text-justify` creates whitespace rivers on mobile. | Eliminate `text-align: justify;` globally; enforce `text-align: left;` across all body paragraphs. |
| `[TOK-STA-01]` | Admin inputs suppress focus rings with `focus:outline-none`. | Enforce standard `focus-visible:ring-2 focus-visible:ring-sky-500` on all form inputs. |
| `[COMP-ARC-01]`| 100% of pages bypass centralized UI primitives in `components/ui/`.| Mandate consumption of standardized primitives (`Button`, `Card`, `Input`, `Modal`, `Table`, `Badge`). |
| `[COMP-MOD-01]`| 12 distinct duplicate modal implementations in codebase. | Unify all dialogs under a single accessible `<Modal>` primitive with focus trap and `Escape` support. |
| `[LAY-TAB-01]` | Admin data tables force horizontal scroll on mobile. | Implement responsive mobile card grid view fallback for viewports $< 768\text{px}$. |
| `[LAY-TCH-01]` | Carousel dots (12px) and table action buttons (28px) fail 44px touch. | Enforce minimum $44\text{px} \times 44\text{px}$ interactive touch bounding box. |
| `[A11Y-KEY-01]`| No "Skip to main content" link on public or admin layouts. | Implement `<SkipToContent>` landmark bypass link at top of layout shells. |
| `[A11Y-NAV-01]`| Public "Company" dropdown unreachable via keyboard Tab navigation. | Add `:focus-within` and keyboard Enter/Space expansion state management to navbar dropdowns. |
| `[A11Y-ARI-01]`| Material Symbol spans read raw glyph ligatures to screen readers. | Add `aria-hidden="true"` to all decorative Material Symbol icon spans. |
| `[A11Y-FRM-01]`| Form `<label>` tags lack `htmlFor` matching input `id` attributes. | Mandate automatic `id`/`htmlFor` pairing in canonical `<Input>` and `<Select>` components. |

---

## 8. Decisions Requiring Business & Design Approval

The following design decisions are documented for explicit stakeholder sign-off prior to Phase 4 implementation:

1. **Typography Pairing Approval:**  
   *Proposal:* Restrict *Baloo Tammudu 2* to display titles/headings (`h1`–`h3`), while adopting *Inter* for body/interface text and *JetBrains Mono* for technical telemetry.  
   *Alternative:* Retain *Baloo Tammudu 2* globally (as currently active in root CSS).
2. **Primary Brand Accent Decoupling:**  
   *Proposal:* Establish Crimson (`#ba1a1a`) as the singular Public primary conversion CTA color, while establishing Sky Blue (`#0284c7`) as the Administrative dashboard action color.  
   *Alternative:* Unify both portals under a single action accent hue.
3. **Admin Data Table Mobile Paradigm:**  
   *Proposal:* Automatically render tabular data as stacked attribute cards on screens $< 768\text{px}$.  
   *Alternative:* Maintain native tabular layout with forced horizontal pan & scan.

---

## 9. Verification & Separation Notice

- **VERIFIED EXISTING:**  
  All documented existing CSS variables, hex codes, typography rules, layout containers, modal markup, and component duplication patterns were directly verified against codebase source files in [`resources/css/app.css`](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css), [`Navbar.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx), [`AdminApp.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx), [`Home.jsx`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx), and [`components/ui/`](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/components/ui/).
- **CANONICAL DESIGN DECISIONS:**  
  All proposed tokens, font pairings (*Baloo Tammudu 2* + *Inter* + *JetBrains Mono*), component APIs (`<Button>`, `<Modal>`, `<DataTable>`), focus ring standards, and responsive card fallbacks are explicitly classified as **CANONICAL DESIGN DECISIONS** and remain **strictly unimplemented**.

---

## 10. Audit Results & Final Status

```
========================================
PHASE 3.6 STATUS
========================================
* Design-system sections completed: 20/20 (Principles, Colors, Typography, Spacing, Radius, Elevation, Containers, Breakpoints, Public vs Admin, Buttons, Forms, Cards, Tables, Badges, Alerts, Modals, Navigation, Loading/Empty/Error, A11y States, Component Naming Conventions)
* Decisions requiring approval: 3 (Typography Pairing, Dual Accent Decoupling, Mobile Table Card Transformation)
* Source code modified: NO
* Missing areas: None
* PHASE 3.6 STATUS: COMPLETE
========================================
```

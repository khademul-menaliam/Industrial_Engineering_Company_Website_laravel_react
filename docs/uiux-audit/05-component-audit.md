# Component Inventory & Pattern Consistency Baseline Audit

**Project:** AR Engineering Modernization  
**Document:** Component Pattern Audit (Baseline)  
**Status:** Audit Documented (Phase 3.1)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  

---

## 1. Recurring UI Components Inventory

### 1.1 Buttons & Interactive Actions
| Variant Name | Visual Style | Where It Appears | Inconsistencies / Duplicate Code |
| :--- | :--- | :--- | :--- |
| **Primary Brand CTA** | `bg-tertiary text-white font-mono font-bold text-xs uppercase tracking-widest px-8 py-4 rounded hover:bg-opacity-90` | Public Hero sections, Careers apply, Contact submit, HowWeWork CTA. | Padding varies between `py-3`, `py-3.5`, `py-4`. Radius varies from `rounded` (4px) to `rounded-lg` (8px). |
| **Secondary Outline** | `border border-primary text-primary font-mono font-bold text-xs uppercase px-6 py-3 rounded hover:bg-surface-container` | Public hero secondary action, Service details back button. | Outline border color switches between `border-primary` and `border-outline-variant/50`. |
| **Admin Action Primary**| `bg-primary text-on-primary font-bold text-xs uppercase px-6 py-2.5 rounded-lg hover:brightness-110 shadow-lg shadow-primary/20` | Admin manager modals, Save settings buttons, Table "Add New" buttons. | Completely different styling from public primary CTA (Sky Blue `#0284c7` vs Crimson `#ba1a1a`). |
| **Admin Table Actions**| Icon button (`edit`, `delete`) with `p-1.5 rounded hover:bg-surface-container` | All admin data tables across 8 managers. | Some managers use text buttons ("Edit" / "Delete"), while others use icon-only glyphs without `aria-label`. |
| **Shared UI Button** | `resources/js/components/ui/Button.jsx` | Created in shared UI library. | **Orphaned:** Rarely imported or utilized in actual page components. |

---

### 1.2 Form Controls & Inputs
| Component | Visual Pattern | Where It Appears | Inconsistencies & Issues |
| :--- | :--- | :--- | :--- |
| **Text Inputs** | `w-full px-4 py-3 bg-surface-container/50 border border-outline-variant/50 rounded-lg text-white text-sm focus:outline-none focus:border-primary` | Admin modals, Login page, Contact form. | Contact page uses light theme inputs; Admin uses dark container inputs with inline variations. |
| **Select Dropdowns** | Custom Tailwind styled `<select>` with border and arrow icon. | Admin category picker, Contact department picker, Products category filter. | Options styling uses default browser OS styling; inconsistent padding. |
| **Textareas** | `w-full px-4 py-3 bg-surface-container/50 border border-outline-variant/50 rounded-lg text-sm focus:border-primary` | Contact form, modal descriptions. | Textarea minimum heights vary between `rows="4"`, `rows="5"`, `min-h-[120px]`. |
| **Rich Text Editor** | [RichTextEditor.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/components/RichTextEditor.jsx) (Custom `contentEditable` toolbar with bold, italic, lists, link). | Admin Services Manager, Homepage Manager. | Bespoke implementation using `document.execCommand` (deprecated browser API). |
| **File Uploaders** | Custom dashed container with icon + native `<input type="file">`. | Careers modal, Admin image uploads. | Inconsistent file upload preview; some show thumbnail previews, others show raw file path strings. |
| **Checkboxes** | `rounded bg-surface-container/50 border-outline-variant/50 text-primary focus:ring-primary` | Admin login "Remember me", Active toggle switches. | Some pages use checkbox inputs, others use custom animated pill toggle switches. |

---

### 1.3 Data Display: Cards, Tables & Badges
| Component | Visual Pattern | Where It Appears | Inconsistencies & Issues |
| :--- | :--- | :--- | :--- |
| **Service Cards** | `bg-white rounded p-8 border border-outline-variant/30 hover:border-primary transition-all duration-300` | Services catalog, Homepage capabilities. | Card heights vary when description lengths differ; missing uniform flex-grow fill. |
| **Data Tables** | `w-full text-left text-sm border-collapse divide-y divide-outline-variant/10 font-mono` | All 8 Admin Managers, Admin Dashboard. | Column alignments, padding (`py-3` vs `py-4`), and row hover classes vary slightly across managers. |
| **Status Badges** | `px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider` | Admin tables, service tags, vacancy tags. | Success status uses `bg-green-500/10 text-green-400` in some tables and `bg-emerald-500/10 text-emerald-400` in others. |

---

### 1.4 Modals, Drawers & Overlays
| Component | Visual Pattern | Where It Appears | Inconsistencies & Issues |
| :--- | :--- | :--- | :--- |
| **Admin CRUD Modals** | Fixed overlay `fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4` containing scrollable form box. | HomepageManager, ServicesManager, AboutManager, CareersManager, ClientsManager, FaqManager. | Each manager implements its own bespoke modal markup and state; no shared `<Modal>` component is used. |
| **Public Application Modal**| Centered modal dialog with blurred backdrop. | Careers page (`Careers.jsx`). | Bespoke modal implementation duplicate to admin modals. |
| **Mobile Drawer** | Off-canvas sliding drawer (`fixed top-0 right-0 h-full w-[280px] bg-midnight z-50 transition-all duration-300`). | Public Navbar, Admin Sidebar. | Public drawer slides from right; Admin drawer slides from left. |

---

### 1.5 Feedback & Notification States
| State Component | Current Implementation | Where It Appears | Inconsistencies & Issues |
| :--- | :--- | :--- | :--- |
| **Toast Notifications** | Absolute/fixed alert banner top-right (`bg-green-600 text-white px-6 py-3 rounded-lg shadow-xl`) with 4-second timeout. | Admin manager pages. | Implemented via ad-hoc `showToast()` helper duplicated inside every admin manager component. |
| **Loading Indicators** | Material symbol `progress_activity` or SVG spinner with `animate-spin`. | Public pages during API fetch. | Inconsistent spinner sizes, colors, and placement (some center-screen, some inline). |
| **Empty States** | Simple text (`No records found`) in table rows. | Admin inquiries, vacancies, FAQ. | Missing illustrations or clear call-to-action buttons on empty tables. |
| **Error Banners** | `p-4 bg-error-container/20 border border-error-container/40 rounded-lg text-error text-sm`. | Admin Login page, manager error banners. | Inconsistent border and text color classes across pages. |

---

## 2. Component Duplication & Fragmented Architecture

### [COMP-01] Complete Disconnection of Shared UI Library (`resources/js/components/ui/`)
- **Verified Fact:** A dedicated UI atom directory exists in [resources/js/components/ui/](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/components/ui/) containing `Button.jsx`, `Input.jsx`, `Badge.jsx`, `Card.jsx`, `Pagination.jsx`, and `Table.jsx`. However, almost all public and admin pages write raw inline Tailwind markup instead of importing these atoms.
- **Impact:** Massive code duplication; changing a button or input style requires editing 20+ individual JSX files.

### [COMP-02] Duplicate Modal Implementations Across 8 Components
- **Verified Fact:** Every single admin manager component ([HomepageManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/HomepageManager.jsx), [ServicesManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ServicesManager.jsx), [AboutManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/AboutManager.jsx), [CareersManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/CareersManager.jsx), [ClientsManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/ClientsManager.jsx), [FaqManager.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/FaqManager.jsx), [SystemCommands.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/pages/SystemCommands.jsx)) and public [Careers.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Careers.jsx) rewrites identical modal backdrop, close button, transition, and scroll wrapper markup.
- **Impact:** Inflates component sizes by hundreds of lines each; inconsistent keyboard Esc-key and click-outside dismissal behavior.

---

## 3. Recommended Component System (RECOMMENDATION ONLY)

> [!NOTE]
> The following is a discovery recommendation for future design system implementation. **Do not implement during Phase 3.**

- **Atomic Design Structure:**
  - `Atoms`: Standardized `Button`, `Input`, `Select`, `Textarea`, `Badge`, `Checkbox`, `Spinner`.
  - `Molecules`: `FormField` (Label + Input + Error), `Toast`, `Breadcrumb`, `SearchBar`, `PaginationControl`.
  - `Organisms`: `Modal`, `DataTable`, `Navbar`, `Footer`, `Sidebar`, `RichTextEditor`.
- **Global Toast Manager:** Replace per-page `showToast` state with a unified lightweight context or library (e.g., Sonner or React Hot Toast).
- **Reusable Modal Wrapper:** Extract backdrop, escape listener, focus trap, and animation into a single `<Modal isOpen onClose title>` container.

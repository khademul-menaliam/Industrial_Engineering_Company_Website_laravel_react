# Design System

## 1. Design System Overview

* **Purpose & Scope:** This document defines the single source of truth for the approved design system across the AR Engineering web platform (`ar_vibe_laravel_react`). Its purpose is to guarantee visual, spatial, and structural consistency across all frontend public pages and backend administration modules.
* **Approved Direction:** The overall visual identity, color scheme, and architectural aesthetic have been approved by the project owner and client. Future development must strictly implement the design specifications and tokens documented herein.
* **Governance Rule:** No new colors, font families, ad-hoc font sizes, spacing dimensions, border radii, shadow styles, or component variations may be introduced into the codebase without explicit, documented approval from the project owner.

---

# 2. Color System

The platform intentionally operates two distinct visual areas:
1. **Public Frontend:** Light architectural background paired with dark charcoal navy, crisp white surfaces, slate accents, and crimson CTAs.
2. **Admin Control Panel:** Dedicated dark-mode control center with dark minimal slate backgrounds, deep container surfaces, and sky-blue primary highlights.

```
+-----------------------------------------------------------------------------------+
|                              COLOR ARCHITECTURE                                   |
+------------------------------------+----------------------------------------------+
| Public Frontend Environment        | Admin Control Panel Environment              |
+------------------------------------+----------------------------------------------+
| Primary:    #111d23 (Dark Navy)   | Primary:    #0284c7 (Sky Blue)               |
| Background: #f8f9fa (Neutral)      | Background: #0b1519 (Dark Slate)           |
| Surface:    #ffffff (White Card)   | Surface:    #111d23 / #152229 (Containers)   |
| Topnav/Foot:#0c0f24 (Midnight)     | Text:       #e1e3e4 (Light Neutral)          |
+------------------------------------+----------------------------------------------+
```

## 2.1 Primary Color

### Frontend Primary
* **HEX Value:** `#111d23` (Charcoal Dark Navy)
* **Token:** `--color-primary` (Global Light Scope)
* **Where to Use:** Public page headings (`h1`, `h2`, `h3`), hero background overlays, prominent dark action CTA buttons (e.g., Contact submit), dark header blocks, and footer section backgrounds.
* **Where NOT to Use:** Do NOT use as active link highlights in the Admin Control Panel.

### Admin Primary
* **HEX Value:** `#0284c7` (Sky Blue)
* **Token:** `--color-primary` (Scoped under `.admin-body`)
* **Where to Use:** Admin sidebar active state navigation pills, admin primary action buttons ("Save", "Update", "Add Item"), active tab indicators, and admin interactive controls.
* **Where NOT to Use:** Do NOT use as the primary text or heading color in the public frontend.

### Public Navigation & Footer Custom Color
* **HEX Value:** `#0c0f24` (Deep Midnight Blue)
* **Where to Use:** Public top navigation bar (`<header>`), public mobile drawer (`<aside>`), and public full-width footer (`<footer>`).
* **Where NOT to Use:** Do NOT use as standard card backgrounds or section backgrounds in main body content.

## 2.2 Secondary Color
* **HEX Value:** `#4c616c` (Slate Gray)
* **Token:** `--color-secondary`
* **Where to Use:** Eyebrow subtitles, descriptive subheadings, supporting metadata, and secondary icon container borders.

## 2.3 Accent / Tertiary Color
* **Approved Direction:** Darker shade variation of `#38bdf8` (Darker Sky-Blue Accent).
* **Current Status:** `TBD — requires explicit color selection before implementation.`
* **Note:** The exact HEX value will be specified by the project owner prior to component implementation. Do NOT invent or substitute an arbitrary HEX value.
* **Where to Use (Once Finalized):** Interactive filter toggles ("See All"), timeline year badges, and telemetry accents.

## 2.4 Background
* **Main Frontend Background:** `#f8f9fa` (`--color-background`).
* **Section Layering (Visual Identity Rule):** Alternating light and slightly deeper neutral tints (`#f8f9fa` to `#f3f4f5` / `#edeeef`) are **intentionally approved** between consecutive body sections to create depth, section separation, and visual rhythm. Do not flatten all sections into a single background tone.
* **Admin Portal Background:** `#0b1519` (`--color-background` in `.admin-body`).

## 2.5 Surface / Cards
* **Card Surfaces:** `#ffffff` (`bg-white` / `--color-surface-container-lowest`). All standard content cards, feature containers, and form containers use pure white.
* **Section Layering Tints:** `#f3f4f5` (`--color-surface-container-low`) and `#edeeef` (`--color-surface-container`) for background structural containers.
* **Admin Portal Surfaces:** `#111d23` (`--color-surface`), `#152229` (`--color-surface-container-low`), and `#19272f` (`--color-surface-container`).
* **Hover State:** White cards retain clean white backgrounds while elevating via subtle border color shifts and desktop shadow reveals.

## 2.6 Text Hierarchy
* **Primary Body Text:** `#191c1d` (`--color-on-background` / `--color-on-surface`) for high legibility on light backgrounds.
* **Secondary / Muted Text:** `#43474a` (`--color-on-surface-variant`) for paragraph descriptions, card body copy, and metadata.
* **Dark Navbar & Footer Custom Text:** `#8d9aa1` default text color, transitioning to `#ffffff` on hover and active states.
* **High-Contrast Text on Dark Sections:** `#ffffff` (`text-white` / `--color-on-primary`) exclusively on dark hero overlays, dark cards, and midnight headers.

## 2.7 Borders & Outlines
* **Standard Subtle Outline:** `border-outline-variant/30` (`rgba(195, 199, 202, 0.30)`). Used on standard frontend cards, form inputs, and section boundaries.
* **Solid Outline (Intentional High-Emphasis):** `border-outline-variant` (`#c3c7ca`) used where sharp boundary distinction is required.
* **Low-Alpha Outline:** `border-outline-variant/10` for table row dividers and delicate inner boundaries.
* **Translucent Dark-Section Outlines:** `border-white/10`, `border-white/20`, and `border-white/30` for containers situated on dark backgrounds.

## 2.8 Status & Feedback Colors
* **Success (Option A):** `text-green-400` with `bg-green-500/10`.
* **Warning (Option A):** `text-yellow-400` with `bg-yellow-500/10`.
* **Error / Critical (Option B):** `bg-error-container/20 border-error-container/40 text-error` (`#ba1a1a` error text on light red tinted container).

---

# 3. Typography

```
+-----------------------------------------------------------------------------------+
|                             TYPOGRAPHY SPECIFICATION                             |
+-------------------+---------------------------------------------------------------+
| Font Family       | Baloo Tammudu 2, ui-sans-serif, system-ui, sans-serif         |
| Monospace Font    | font-mono / font-mono-data (Technical specs, badges, tables)  |
+-------------------+---------------------------------------------------------------+
| Heading 1 (H1)    | text-3xl md:text-4xl font-bold uppercase tracking-tight      |
| Heading 2 (H2)    | text-2xl md:text-3xl font-bold uppercase tracking-tight      |
| Heading 3 (H3)    | text-base font-bold uppercase tracking-tight                  |
| Micro / Eyebrow A | text-[10px] font-bold uppercase font-mono tracking-wider      |
| Micro / Eyebrow B | text-[11px] font-bold uppercase font-mono tracking-wider      |
+-------------------+---------------------------------------------------------------+
```

## 3.1 Font Family
* **Primary Typography:** `'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif`
* **Fallback Stack:** `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
* **Technical / Monospace:** `font-mono` / `font-mono-data` (System monospace stack). Used for technical reference IDs (`REF: AR-204`), step numbers (`01`, `02`), dates, tabular data, code badges, and technical CTA labels.

## 3.2 Heading 1 (H1)
* **Approved Style:** Compact Technical Header
* **Tailwind Classes:** `text-3xl md:text-4xl font-bold uppercase tracking-tight`
* **Usage:** Primary page hero titles across all public pages (`Services`, `About`, `How We Work`, `Careers`, `Clients`, `Contact`, `FAQ`).

## 3.3 Heading 2 (H2)
* **Approved Style:** Standard Section Title
* **Tailwind Classes:** `text-2xl md:text-3xl font-bold uppercase tracking-tight`
* **Usage:** Major section titles on landing pages and content headers.

## 3.4 Heading 3 (H3)
* **Approved Style:** Standard Card Title
* **Tailwind Classes:** `text-base font-bold uppercase tracking-tight`
* **Usage:** Content card titles, service capability headers, feature block headings.

## 3.5 Body Text
* **Lead Paragraph:** `TBD — requires explicit confirmation.` (Approved direction: smaller than the existing 18px/20px lead copy, approximately 16px).
* **Standard Body Text:** `TBD — requires explicit confirmation.` (Approved direction: slightly larger than the existing 12px compact copy, approximately 14px).
* **Leading:** `leading-relaxed` on all multi-line body paragraphs.

## 3.6 Small / Micro Text
Both variants are approved for distinct contexts:
* **Variant A (10px Monospace):** `text-[10px] font-bold uppercase font-mono tracking-wider`.
  * **Context:** Form input labels, image verification tags, table column sub-labels.
* **Variant B (11px Monospace):** `text-[11px] font-bold uppercase font-mono tracking-wider`.
  * **Context:** "Read Case Study" links, footer copyright line, directive labels, section phase numbers.

---

# 4. Spacing & Layout

## 4.1 Page Container
* **Standard Responsive Container Classes:** `max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop`
* **Max Width:** `1280px` (`--spacing-container-max: 1280px`).
* **Mobile Horizontal Padding:** `16px` (`--spacing-margin-mobile: 16px`).
* **Desktop Horizontal Padding:** `48px` (`--spacing-margin-desktop: 48px`).
* **Rule:** All page wrappers must use this standardized container. Do not use ad-hoc `max-w-7xl` or custom inline container widths unless explicitly documented under Intentional Exceptions.

## 4.2 Section Vertical Padding
* **Standard Section Padding:** `py-24` (96px top and bottom) where suitable for major thematic sections.
* **Compact Section Padding:** `py-16` (64px) or `py-12` (48px) for compact utility sections (e.g., logo marquees, sub-headers, brief CTA blocks).
* **Rule:** Choose between `py-24` (major narrative sections) and `py-16` (compact utility sections) based on content density.

## 4.3 Card Padding
* **Standard Card Padding:** `p-6` (24px all sides).
* **Large Feature Card Exception:** `p-8 md:p-12` is permitted exclusively for high-density primary cards (e.g., Contact inquiry form card, About CEO spotlight statement).

---

# 5. Components

## 5.1 Primary Buttons
Two approved variants are intentionally maintained for specific contexts:

### Variant 1: Crimson Flat Action (Public CTAs)
* **Tailwind Classes:** `bg-tertiary text-white text-xs font-mono font-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors`
* **Context:** Main public call-to-actions, hero action triggers, service exploration links.

### Variant 2: Dark Primary Action (Form Transmissions)
* **Tailwind Classes:** `py-4 bg-primary text-white rounded font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0`
* **Context:** Form submit actions (`Contact`, `Careers Application`), primary system triggers.

## 5.2 Secondary / Outline Button
* **Approved Style:** Single Border Outline
* **Tailwind Classes:** `border border-primary text-primary hover:bg-surface-container font-mono font-bold text-xs px-6 py-3 rounded uppercase tracking-wider transition-all`
* **Context:** Secondary actions, alternative choices ("View Details", "Technical Standards").

## 5.3 Form Inputs & Controls
* **Approved Style:** Compact Input (38px Height)
* **Tailwind Classes:** `w-full rounded border border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2 text-on-surface transition-all`
* **Labels:** `text-[10px] font-mono font-bold text-primary mb-1 uppercase tracking-wider block`
* **Context:** All form text inputs, email fields, and select controls across frontend modules.

## 5.4 Cards
* **Approved Style:** Elevated White Card with Border
* **Tailwind Classes:** `bg-white p-6 rounded border border-outline-variant/30 hover:border-primary transition-all duration-300` (with desktop hover shadow).
* **Context:** Capabilities, competencies, leadership profiles, pillar blocks, job vacancy listings.

## 5.5 Badges & Tags
* **Approved Style:** Monospace Solid Pill with Charcoal Dark Navy Background
* **Tailwind Classes:** `bg-primary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded font-mono tracking-wider shadow-sm`
* **Background Color:** `#111d23` (Charcoal Dark Navy).
* **Context:** Category badges, role pills, spec tags, and technical reference indicators.

## 5.6 Tables
* **Approved Style:** Monospace Technical Table
* **Header Classes:** `border-b border-outline-variant/30 text-on-surface-variant font-mono text-xs pb-3 font-bold uppercase tracking-wider`
* **Body Row Classes:** `divide-y divide-outline-variant/10 text-on-surface font-mono text-xs hover:bg-surface-container-low transition-all`
* **Context:** Admin compliance logs, order registers, product catalogs, and personnel tables.

## 5.7 Pagination
* **Approved Style:** Text-Based Prev / Next with Page Counter
* **Structure:** `[ < PREV ] Page X of Y [ NEXT > ]`
* **Button Classes:** `px-4 py-2.5 rounded border border-outline-variant hover:border-primary text-primary disabled:opacity-30 disabled:hover:border-outline-variant transition-colors flex items-center gap-1 font-bold uppercase tracking-wider bg-white font-mono text-xs cursor-pointer`
* **Context:** Public client directories, portfolio archives, and search results.

## 5.8 Modals & Dialogs
* **Approved Style:** Native Browser Dialogs (`window.alert` / `window.confirm`)
* **Context:** Critical deletion confirmations, priority submission alerts.
* **Rule:** Native dialogs remain approved for current milestone. Custom React modal frameworks will not be injected during visual consistency alignment.

---

# 6. Shapes & Surfaces

## 6.1 Border Radius
* **Standard Global Radius:** `4px` (`rounded` / `0.25rem` / `--radius-base`).
* **Approved Application:** Applied to standard buttons, input fields, badges, cards, and image frames.
* **Note on Legacy Components:** Existing components using `rounded-xl` or `rounded-lg` must be transitioned to `4px` (`rounded`) unless explicitly designated as an intentional exception.

## 6.2 Shadows & Elevation
* **Desktop Rules:**
  * **Flat Surfaces:** `shadow-none` for standard inline cards and alternating section strips.
  * **Subtle Elevation:** `shadow-sm` on rest, transitioning to `shadow-md` or `shadow-lg` on desktop hover.
  * **Elevated Surfaces:** `shadow-lg` / `shadow-xl` for sticky topbars, modal dialogs, and high-priority callout banners.
* **Mobile Rules:**
  * All card-level drop shadows must be disabled on mobile viewports (`shadow-none` on `< 768px`) to prevent visual clutter and maintain clean vertical scrolling. Elevation is conveyed via `border` outlines and layered background fills.

---

# 7. Navigation

## 7.1 Public Navbar
* **Approved Style:** Sticky Midnight Blue with Text Links
* **Container:** `w-full top-0 sticky shadow-lg bg-[#0c0f24] z-50`
* **Height:** `h-20` (80px)
* **Default Link Style:** `text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap`
* **Active / Hover Link Style:** `text-white`
* **Mobile Drawer:** Slide-out right panel (`bg-[#0c0f24] border-l border-white/10`) with backdrop blur overlay (`bg-black/60 backdrop-blur-sm`).

## 7.2 Admin Sidebar
* **Approved Style:** Collapsible Responsive Sidebar with Mobile Drawer
* **Desktop Layout:** `w-64 bg-surface border-r border-outline-variant/30 flex flex-col justify-between shrink-0` (256px width).
* **Active Navigation Link:** `bg-primary text-on-primary shadow-lg shadow-primary/20` (`#0284c7` sky blue in Admin).
* **Inactive Navigation Link:** `text-on-surface-variant hover:text-white hover:bg-surface-container`
* **Mobile / Tablet Requirement:** Must collapse off-canvas on screens `< 1024px` with a toggleable header hamburger button.

---

# 8. Responsive Design Rules

| Breakpoint | Viewport Width | Layout & Spacing Behavior | Component & Navigation Behavior |
|---|---|---|---|
| **Desktop (`lg`)** | `1024px+` | Container padding: `48px` (`px-margin-desktop`). Multi-column grids (2, 3, 4 cols). Section padding: `py-24`. | Full horizontal topbar with dropdowns. Fixed 256px admin sidebar. Desktop hover drop shadows enabled. |
| **Tablet (`md`)** | `768px - 1023px` | Container padding: `32px` - `48px`. 2-column grid collapses. Section padding: `py-16` / `py-20`. | Collapsible mobile navigation drawer. Admin sidebar collapses to toggleable drawer. |
| **Mobile (`sm` / base)** | `< 768px` | Container padding: `16px` (`px-margin-mobile`). 1-column stacked layouts. Section padding: `py-12` / `py-16`. | Full-width stacked buttons (`w-full`). Card shadows disabled (`shadow-none`). Mobile drawer navigation. |

---

# 9. Component Variants Matrix

| Component | Standard Implementation | Approved Variant | Primary Context |
|---|---|---|---|
| **Primary Button** | Variant 1: Flat Crimson Monospace (`bg-tertiary font-mono text-xs px-8 py-4 rounded uppercase`) | Variant 2: Dark Navy Action (`bg-primary text-white font-bold text-xs py-4 rounded uppercase`) | Public CTAs (Var 1) vs Form Submissions (Var 2) |
| **Secondary Button** | Single Border Outline (`border border-primary text-primary font-mono text-xs px-6 py-3 rounded`) | Translucent White Ghost (`border border-white/30 text-white font-bold text-xs px-8 py-4 rounded`) | Standard content vs Dark hero sections |
| **Form Input** | Compact Input 38px (`w-full rounded border-outline-variant/30 bg-background text-sm px-4 py-2`) | None | All frontend forms & inquiries |
| **Card** | Elevated White Card (`bg-white p-6 rounded border border-outline-variant/30 hover:border-primary`) | Layered Neutral Container (`bg-surface-container-low border border-outline-variant/20 p-6 rounded`) | Content cards vs Background feature cards |
| **Badge** | Charcoal Dark Navy Monospace Pill (`bg-primary text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded`) | None | Tech references, roles, and status tags |
| **Table** | Monospace Technical Table (`border-b border-outline-variant/30 font-mono text-xs text-on-surface`) | None | Admin logs, registers, and inventories |
| **Pagination** | Text-Based Prev/Next (`px-4 py-2.5 rounded border border-outline-variant font-mono text-xs uppercase`) | None | Client directory & search listings |
| **Modal** | Native Browser Dialog (`window.alert` / `window.confirm`) | None | Deletion and priority confirmation prompts |
| **Navbar** | Sticky Midnight Blue Header (`bg-[#0c0f24] text-[#8d9aa1] h-20 top-0 sticky`) | None | Global public site header |
| **Admin Sidebar** | Responsive Collapsible Drawer (`w-64 bg-surface`, sky-blue active highlights) | None | Admin control center |

---

# 10. Design Tokens

The following design tokens represent the authoritative, centralized variables for the platform:

```css
@theme {
    /* Fonts */
    --font-sans: 'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif;
    --font-heading: 'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif;
    --font-body: 'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif;
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

    /* Global Colors (Frontend Light Scope) */
    --color-primary: #111d23;
    --color-on-primary: #ffffff;
    --color-secondary: #4c616c;
    --color-on-secondary: #ffffff;
    --color-tertiary: #ba1a1a;
    --color-on-tertiary: #ffffff;

    --color-background: #f8f9fa;
    --color-on-background: #191c1d;
    --color-surface: #f8f9fa;
    --color-on-surface: #191c1d;
    --color-surface-container-lowest: #ffffff;
    --color-surface-container-low: #f3f4f5;
    --color-surface-container: #edeeef;
    --color-surface-container-high: #e7e8e9;
    --color-surface-container-highest: #e1e3e4;

    --color-on-surface-variant: #43474a;
    --color-outline: #73787a;
    --color-outline-variant: #c3c7ca;
    --color-error: #ba1a1a;
    --color-error-container: #ffdad6;

    /* Spacing */
    --spacing-margin-mobile: 16px;
    --spacing-gutter: 24px;
    --spacing-margin-desktop: 48px;
    --spacing-base-unit: 4px;
    --spacing-container-max: 1280px;

    /* Border Radius */
    --radius-standard: 4px;
    --radius-full: 9999px;
}

/* Admin Portal Theme Override */
.admin-body {
    --color-primary: #0284c7;
    --color-on-primary: #ffffff;
    --color-background: #0b1519;
    --color-on-background: #e1e3e4;
    --color-surface: #111d23;
    --color-on-surface: #e1e3e4;
    --color-surface-container-lowest: #0b1519;
    --color-surface-container-low: #152229;
    --color-surface-container: #19272f;
    --color-surface-container-high: #1d2c35;
    --color-surface-container-highest: #22323c;
    --color-on-surface-variant: #c3c7ca;
    --color-outline: #8d9aa1;
    --color-outline-variant: #43474a;
}
```

---

# 11. Intentional Exceptions

The following visual differences are **intentionally approved** and must NOT be normalized or eliminated during consistency refactoring:

1. **Frontend vs Admin Color System:** The public frontend utilizes Charcoal Dark Navy (`#111d23`) and Crimson (`#ba1a1a`), whereas the Admin Control Panel utilizes Sky Blue (`#0284c7`) and Dark Minimal Slate (`#0b1519`).
2. **Deep Midnight Topbar & Footer (`#0c0f24`):** The public Navbar, mobile drawer, and Footer intentionally use `#0c0f24` with `#8d9aa1` text, establishing a distinct framed header/footer identity.
3. **Layered Section Backgrounds:** Alternating between light neutral tones (`#f8f9fa`) and slightly deeper neutral tints (`#f3f4f5` / `#edeeef`) across landing page sections is intentionally preserved for visual rhythm.
4. **Desktop vs Mobile Shadow Elevation:** Desktop cards utilize subtle drop shadows (`shadow-sm` on rest, `shadow-md` on hover), while mobile cards intentionally disable shadows (`shadow-none`) for clean, responsive vertical rhythm.
5. **Monospace Typography in Technical Elements:** Step badges (`01`, `02`), reference IDs (`REF: AR-204`), timestamps, table records, and primary CTA labels intentionally employ `font-mono` to reflect engineering precision.
6. **Dual Primary Button Styles:** Public exploration CTAs use Flat Crimson (`bg-tertiary`), while form transmission triggers use Dark Navy (`bg-primary`).
7. **Translucent Borders on Dark Sections:** Hero headers and dark callouts intentionally use `border-white/10`, `border-white/20`, or `border-white/30` rather than standard neutral outlines.

---

# 12. Implementation Rules

1. **Reuse Existing Design Tokens:** All styling must reference the CSS variables or Tailwind classes defined in Section 10.
2. **No Arbitrary Hardcoded Colors:** Do not write ad-hoc hex values (`#...`) in template files when an approved token exists.
3. **Eliminate Duplicate Component Styles:** Replace one-off button, input, or card variations with the approved standard implementations.
4. **Adhere to the Spacing System:** Do not introduce random padding or margin scales outside the standard scale (`4px`, `8px`, `16px`, `24px`, `48px`, `64px`, `96px`).
5. **Standardize Border Radius:** Apply the standard `4px` (`rounded`) radius across all standard UI controls.
6. **Maintain Typography Consistency:** Use the approved `h1` (`text-3xl md:text-4xl`), `h2` (`text-2xl md:text-3xl`), and `h3` (`text-base`) class definitions across all pages.
7. **Preserve Frontend vs Admin Separation:** Keep the light frontend theme and dark admin control center distinct as scoped in Section 2.
8. **Honor Section Layering:** Maintain subtle background shifts between consecutive sections without flattening.
9. **Enforce Mobile Shadow Reduction:** Ensure card shadows are stripped on mobile screens (`shadow-none`).
10. **Verify Existing Functionality:** Test all interactive state changes, form submissions, and modals after visual alignment.
11. **Do Not Modify Business Logic:** Never alter state variables, validation logic, API payloads, or backend controller bindings during visual refactoring.
12. **Do Not Alter API Behavior:** Maintain all existing endpoint structures (`/api/home`, `/api/services`, etc.).
13. **Do Not Modify Database Schema:** Preserve all model attributes, migration tables, and database fields.
14. **Do Not Alter Application Routes:** Leave existing React Router and Laravel route declarations intact.

---

# 13. Remaining Decisions / TBD

The following items contain open parameters that require explicit final selection from the project owner before code implementation begins:

1. **Darker Accent Sky-Blue:**
   * **Status:** `TBD — requires explicit color selection before implementation.`
   * **Context:** A darker shade variation to replace the existing `#38bdf8` accent in badges and toggles.
2. **Exact Lead Paragraph Typography Scale:**
   * **Status:** `TBD — requires explicit confirmation.`
   * **Context:** Target size between current 18px (`text-lg`) and standard 14px (`text-sm`), tentatively `16px` (`text-base`).
3. **Exact Standard Body Typography Scale:**
   * **Status:** `TBD — requires explicit confirmation.`
   * **Context:** Target size between current 12px (`text-xs`) and 16px (`text-base`), tentatively `14px` (`text-sm`).
4. **Section-by-Section Vertical Padding Allocation:**
   * **Status:** `TBD — contextual selection during implementation.`
   * **Context:** Determining which specific secondary sections utilize compact `py-16` / `py-12` vs standard `py-24`.

---

*End of Design System Specification.*

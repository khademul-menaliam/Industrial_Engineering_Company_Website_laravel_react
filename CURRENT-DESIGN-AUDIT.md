# Current Design Audit

## 1. Executive Summary

This document provides a strict, objective, and exhaustive inventory of the design system, components, tokens, layout structures, and visual implementations across the entire **AR Engineering** website codebase (`ar_vibe_laravel_react`). 

In accordance with audit requirements, **no source code has been modified, refactored, or redesigned**. The goal of this audit is to catalog what currently exists, identifying every discrete variation of colors, typography, spacing, components, shapes, layouts, responsive rules, animations, and hardcoded values across all frontend pages, admin views, and shared layout files.

### Key Audit Metrics
* **Total Public Pages Audited:** 12 (`Home`, `About`, `Services`, `ServiceDetail`, `HowWeWork`, `Clients`, `Careers`, `Portfolio`, `Contact`, `FAQ`, `Pricing`, `ProjectDemo`)
* **Total Admin Modules Audited:** 16 (`Dashboard`, `HomepageManager`, `ServicesManager`, `AboutManager`, `ContactManager`, `CareersManager`, `FaqManager`, `ClientsManager`, `SystemCommands`, `Analytics`, `Notifications`, `Orders`, `Products`, `Users`, `Profile`, `Settings`)
* **Blade Entry Templates:** 4 (`frontend.blade.php`, `admin.blade.php`, `login.blade.php`, `welcome.blade.php`)
* **Core Styling Engine:** Tailwind CSS v4 (`@theme` token configuration in `resources/css/app.css` + `@tailwindcss/vite`)

---

## 2. Color System

### 2.1 Primary Brand Colors
* **Token Name:** `--color-primary`
  * **Defined Value (Global Light Theme):** `#111d23` (`resources/css/app.css:L24`)
  * **Defined Value (Admin Control Panel Theme):** `#0284c7` (`resources/css/app.css:L139`)
  * **Usage Locations:** Page headings, dark hero headers, main CTA backgrounds on select pages (`Contact.jsx`, `Careers.jsx`), and active sidebar items in Admin.
* **Token Name:** `--color-on-primary`
  * **Defined Value:** `#ffffff` (`resources/css/app.css:L25, L140`)

### 2.2 Secondary Colors
* **Token Name:** `--color-secondary`
  * **Defined Value:** `#4c616c` (`resources/css/app.css:L29`)
  * **Usage Locations:** Eyebrow subtitles (`Home.jsx`, `Pricing.jsx`, `Clients.jsx`), descriptive subheadings, and icon backgrounds.
* **Token Name:** `--color-secondary-container`
  * **Defined Value:** `#cfe6f2` (`resources/css/app.css:L31`)
* **Token Name:** `--color-on-secondary-container`
  * **Defined Value:** `#526772` (`resources/css/app.css:L32`)

### 2.3 Accent / Tertiary Colors
* **Token Name:** `--color-tertiary`
  * **Defined Value:** `#ba1a1a` (`resources/css/app.css:L34`)
  * **Usage Locations:** Primary action buttons across public pages (`Home.jsx`, `About.jsx`, `Services.jsx`, `Careers.jsx`, `HowWeWork.jsx`), accent icons, and section divider pills.
* **Token Name:** `--color-tertiary-container`
  * **Defined Value:** `#680008` (`resources/css/app.css:L36`)
* **Token Name:** `--color-on-tertiary-container`
  * **Defined Value:** `#ff655c` (`resources/css/app.css:L37`)

### 2.4 Background & Surface Palette
* **Token Name:** `--color-background`
  * **Global Light Value:** `#f8f9fa` (`resources/css/app.css:L39`)
  * **Admin Dark Value:** `#0b1519` (`resources/css/app.css:L125`)
* **Token Name:** `--color-surface`
  * **Global Light Value:** `#f8f9fa` (`resources/css/app.css:L42`)
  * **Admin Dark Value:** `#111d23` (`resources/css/app.css:L127`)
* **Surface Container Scale:**
  * `--color-surface-container-lowest`: `#ffffff` (Light) / `#0b1519` (Admin Dark) (`app.css:L47, L129`)
  * `--color-surface-container-low`: `#f3f4f5` (Light) / `#152229` (Admin Dark) (`app.css:L48, L130`)
  * `--color-surface-container`: `#edeeef` (Light) / `#19272f` (Admin Dark) (`app.css:L49, L131`)
  * `--color-surface-container-high`: `#e7e8e9` (Light) / `#1d2c35` (Admin Dark) (`app.css:L50, L132`)
  * `--color-surface-container-highest`: `#e1e3e4` (Light) / `#22323c` (Admin Dark) (`app.css:L51, L133`)

### 2.5 Text Colors
* **Default Body Text:**
  * Global: `--color-on-background: #191c1d` / `--color-on-surface: #191c1d` (`app.css:L40, L43`)
  * Admin: `--color-on-background: #e1e3e4` / `--color-on-surface: #e1e3e4` (`app.css:L126, L128`)
* **Muted / Secondary Text:**
  * Global: `--color-on-surface-variant: #43474a` (`app.css:L53`)
  * Admin: `--color-on-surface-variant: #c3c7ca` (`app.css:L134`)
  * Hardcoded Header/Footer text: `#8d9aa1` (`Navbar.jsx:L25`, `Footer.jsx:L55`)

### 2.6 Border & Outline Colors
* **Token Name:** `--color-outline`
  * Global: `#73787a` (`app.css:L54`) / Admin: `#8d9aa1` (`app.css:L135`)
* **Token Name:** `--color-outline-variant`
  * Global: `#c3c7ca` (`app.css:L55`) / Admin: `#43474a` (`app.css:L136`)
* **Ad-hoc Opacities Used in Markup:**
  * `border-outline-variant/10`, `border-outline-variant/20`, `border-outline-variant/30`, `border-outline-variant/50`, `border-outline-variant/80`, `border-white/10`, `border-white/20`, `border-white/30`

### 2.7 Status & Feedback Colors
* **Success:**
  * Text: `text-green-400` / `text-emerald-400` / `text-green-600` (`Dashboard.jsx:L32`, `SystemCommands.jsx:L87`, `HomepageManager.jsx:L310`)
  * Background / Fill: `bg-green-500/10` / `bg-emerald-500/10` / `bg-green-600/90`
* **Warning:**
  * Text: `text-yellow-400` / `text-amber-400` (`Dashboard.jsx:L75`, `SystemCommands.jsx:L78`)
  * Background: `bg-yellow-500/10` / `bg-amber-500/10`
* **Error / Critical:**
  * Token: `--color-error: #ba1a1a` (`app.css:L57`)
  * Token: `--color-error-container: #ffdad6` (`app.css:L58`)
  * Hardcoded Classes: `bg-error/10`, `text-error`, `border-error/30` (`HomepageManager.jsx:L257`, `login.blade.php:L36`)
* **Info / Notice:**
  * Text: `text-sky-400` / `text-blue-400` (`About.jsx:L436`, `Careers.jsx:L308`, `SystemCommands.jsx:L96`)
  * Background: `bg-[#cfe6f2]` with border `border-[#b4cad6]` (`Home.jsx:L524`, `Contact.jsx:L121`, `HomepageManager.jsx:L252`)

### 2.8 Gradients & Dark Overlays
* **Gradient A (Hero Image Vignette):** `bg-gradient-to-r from-primary/95 via-primary/80 to-transparent` (`About.jsx:L164`)
* **Gradient B (Hero Bottom Fade):** `bg-gradient-to-t from-primary/95 via-primary/50 to-transparent` (`Services.jsx:L368`, `About.jsx:L280`)
* **Gradient C (Login Overlay):** `bg-gradient-to-br from-surface-container-lowest/90 to-primary-container/30` (`login.blade.php:L23`)
* **Gradient D (Background Grid Pattern):** `linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)` with `background-size: 20px 20px` (`HowWeWork.jsx:L10`)

---

## 3. Typography

### 3.1 Font Families
* **Primary Sans:** `'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif` (`app.css:L8`)
* **Heading Family:** `'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif` (`app.css:L9`)
* **Body Family:** `'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif` (`app.css:L10`)
* **Code / Technical / Monospace:** `font-mono` / `font-mono-data` (system monospace font) used in `Navbar`, `Home`, `About`, `Services`, `HowWeWork`, `Careers`, `Contact`, `FAQ`, and all `Admin` tables.

### 3.2 Heading Styles & Sizes
* **HTML Element Base Scale (`app.css` Base Layer):**
  * `h1`: `3.366rem` (53.85px)
  * `h2`: `2.525rem` (40.40px)
  * `h3`: `1.894rem` (30.30px)
  * `h4`: `1.421rem` (22.74px)
  * `h5`: `1.066rem` (17.06px)
  * `small`: `0.600rem` (9.60px)
* **Actual Component Implementations:**
  * **H1 Variations:**
    * `text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight` (`Home.jsx:L198`)
    * `text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none` (`About.jsx:L171`)
    * `text-3xl md:text-4xl font-bold uppercase tracking-tight` (`Services.jsx:L225`)
    * `text-4xl md:text-5xl font-bold uppercase tracking-tight` (`HowWeWork.jsx:L18`, `Clients.jsx:L53`, `Careers.jsx:L152`)
    * `text-4xl md:text-5xl font-bold uppercase tracking-tight` (`Contact.jsx:L92`)
    * `text-3xl md:text-5xl font-bold uppercase tracking-tight` (`FAQ.jsx:L34`, `Pricing.jsx:L59`)
  * **H2 Section Titles:**
    * `text-2xl md:text-3xl font-bold uppercase tracking-tight` (`Home.jsx:L257, L296, L320, L354, L415, L490, L566`)
    * `text-3xl font-bold uppercase tracking-tight` (`About.jsx:L191, L246, L427`)
    * `text-2xl md:text-3xl font-bold uppercase` (`HowWeWork.jsx:L68, L98, L143, L173, L223`)
    * `text-2xl font-bold uppercase` (`Clients.jsx:L64, L98`)
    * `text-3xl font-bold uppercase tracking-tight` (`Careers.jsx:L163, L204, L325, L349`)
  * **H3 Subheadings:**
    * `text-base font-bold uppercase tracking-tight` (`Home.jsx:L280, L380, L429`)
    * `text-lg font-bold uppercase tracking-tight` (`About.jsx:L255, L380, L441`)
    * `text-base font-bold uppercase tracking-tight` (`Services.jsx:L267, L290, L429, L503`)
    * `text-xl font-bold uppercase tracking-tight` (`Careers.jsx:L238`, `Pricing.jsx:L82`, `Contact.jsx:L118, L205`)
    * `text-lg md:text-xl font-bold uppercase tracking-tight` (`ServiceDetail.jsx:L117`)

### 3.3 Body, Paragraph & Descriptive Text
* **Hero Lead Text:** `text-base md:text-lg font-light leading-relaxed` (`About.jsx:L174`, `FAQ.jsx:L35`)
* **Standard Body Paragraph:** `text-sm sm:text-base leading-relaxed` (`About.jsx:L195`, `HowWeWork.jsx:L21`)
* **Compact Card Body:** `text-xs text-secondary leading-relaxed` (`Services.jsx:L268`, `Home.jsx:L283`, `Careers.jsx:L239`)
* **Microcopy / Legal / Captions:** `text-[10px]`, `text-[11px]`, `text-xs font-mono` (`Footer.jsx:L138`, `Home.jsx:L341`, `About.jsx:L210`)

### 3.4 Eyebrows & Section Badges
* **Variation A:** `text-xs font-bold text-tertiary uppercase tracking-widest font-mono` (`Home.jsx:L232, L564`, `About.jsx:L245`, `FAQ.jsx:L33`)
* **Variation B:** `text-xs font-bold uppercase tracking-[0.2em] font-mono` (`Services.jsx:L224`, `HowWeWork.jsx:L16`)
* **Variation C:** `text-xs font-bold tracking-[.3em] uppercase` (`Clients.jsx:L52`, `Careers.jsx:L151`)
* **Variation D:** `text-[10px] font-bold uppercase tracking-wider font-mono` (`Home.jsx:L531`, `ServiceDetail.jsx:L88`)

---

## 4. Spacing

### 4.1 Global Spacing Tokens (`resources/css/app.css:L70-L76`)
* `--spacing-base-unit`: `4px`
* `--spacing-margin-mobile`: `16px`
* `--spacing-gutter`: `24px`
* `--spacing-margin-desktop`: `48px`
* `--spacing-safe-area-ar`: `64px`
* `--spacing-container-max`: `1280px`

### 4.2 Page Padding & Containers
* **Standard Frontend Container:** `max-w-container-max mx-auto px-margin-desktop` (`Home.jsx:L197`, `About.jsx:L186`, `Services.jsx:L222`, `Clients.jsx:L62`, `Careers.jsx:L158`)
* **Responsive Frontend Container:** `max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop` (`Services.jsx:L241`, `FAQ.jsx:L31`, `Pricing.jsx:L56`)
* **Tailwind Max-Width Container:** `max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop` (`Contact.jsx:L88`)
* **Narrow Form Containers:** `max-w-4xl mx-auto` (`Careers.jsx:L346`, `About.jsx:L423`), `max-w-3xl mx-auto` (`FAQ.jsx:L40`)

### 4.3 Section Vertical Padding
* `py-8 pb-12` (`Home.jsx:L445`)
* `py-12` (`ServiceDetail.jsx:L73`, `Services.jsx:L518`)
* `py-16` (`Services.jsx:L241, L476`)
* `py-20` (`Home.jsx:L229, L255, L294, L318, L350, L413, L487, L598`, `Services.jsx:L344, L413`, `Footer.jsx:L43`)
* `py-24` (`Home.jsx:L561`, `About.jsx:L186, L242, L268, L337, L422`, `HowWeWork.jsx:L8, L53`, `Clients.jsx:L94, L179`, `Careers.jsx:L158`, `FAQ.jsx:L31`, `Pricing.jsx:L56`)
* `py-24 md:py-32` (`Clients.jsx:L61`)

### 4.4 Grid Gaps & Form Spacing
* **Grid Card Gaps:** `gap-4` (`AdminApp.jsx:L60`), `gap-6` (`Home.jsx:L264, L570`, `About.jsx:L249`, `Clients.jsx:L67`, `Careers.jsx:L223`), `gap-8` (`Home.jsx:L327, L362`, `About.jsx:L308, L350`, `Services.jsx:L249`, `Pricing.jsx:L65`), `gap-10` (`Home.jsx:L422`), `gap-12` (`Home.jsx:L230`), `gap-16` (`About.jsx:L187`, `HowWeWork.jsx:L55`, `Careers.jsx:L160`, `Footer.jsx:L43`)
* **Form Field Gaps:** `gap-4` (`Home.jsx:L528`), `gap-6` (`Contact.jsx:L127`), `space-y-4` (`FaqManager.jsx:L97`), `space-y-6` (`login.blade.php:L45`, `Settings.jsx:L10`), `space-y-12` (`Careers.jsx:L359`)

---

## 5. Components

### 5.1 Buttons

#### Button Variation 1 (Hero Accent Action)
* **HTML/JSX:** `<Link className="bg-tertiary text-white text-xs font-mono font-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors mt-4" to="/services">`
* **File:** `resources/js/frontend/pages/Home.jsx:L206`
* **Properties:** Background: `#ba1a1a`, Text: `#ffffff`, Font Size: `0.75rem` (12px), Weight: `700`, Radius: `4px`, Padding: `16px 32px`, Letter Spacing: `0.1em`.

#### Button Variation 2 (Elevated Transform Accent)
* **HTML/JSX:** `<Link to="/services" className="bg-tertiary text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0">`
* **File:** `resources/js/frontend/pages/About.jsx:L178`
* **Properties:** Background: `#ba1a1a`, Text: `#ffffff`, Shadow: `shadow-lg`, Transform: `translateY(-2px)` on hover, Radius: `4px`, Padding: `16px 32px`.

#### Button Variation 3 (Compact Font-Mono CTA)
* **HTML/JSX:** `<Link to="/contact" className="w-full md:w-auto text-center bg-tertiary text-white px-8 py-4 rounded font-mono font-bold text-[11px] uppercase tracking-widest shadow-md hover:brightness-110 transition-all">`
* **File:** `resources/js/frontend/pages/Services.jsx:L525`
* **Properties:** Font Size: `11px`, Background: `#ba1a1a`, Shadow: `shadow-md`, Padding: `16px 32px`.

#### Button Variation 4 (Dark Primary Form Submit)
* **HTML/JSX:** `<button className="w-full py-4 bg-primary text-white rounded-lg font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0" type="submit">`
* **File:** `resources/js/frontend/pages/Contact.jsx:L185`
* **Properties:** Background: `#111d23`, Text: `#ffffff`, Radius: `8px` (`rounded-lg`), Padding: `16px`, Hover: `-translate-y-0.5`.

#### Button Variation 5 (Outline Dark Primary)
* **HTML/JSX:** `<Link to="/contact" className="w-full md:w-auto text-center border-2 border-primary text-primary px-8 py-4 rounded font-mono font-bold text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all">`
* **File:** `resources/js/frontend/pages/Services.jsx:L528`
* **Properties:** Border: `2px solid #111d23`, Text: `#111d23`, Hover Background: `#111d23`, Hover Text: `#ffffff`.

#### Button Variation 6 (Outline Light / Hero Ghost)
* **HTML/JSX:** `<Link to="/portfolio" className="border border-white/30 text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all">`
* **File:** `resources/js/frontend/pages/About.jsx:L179`
* **Properties:** Border: `1px solid rgba(255,255,255,0.3)`, Text: `#ffffff`, Hover Background: `rgba(255,255,255,0.1)`.

#### Button Variation 7 (High-Contrast White on Red Urgent)
* **HTML/JSX:** `<button className="whitespace-nowrap bg-white text-tertiary px-8 py-4 rounded-lg font-bold text-xs tracking-widest hover:bg-gray-100 transition-colors shadow-lg">`
* **File:** `resources/js/frontend/pages/Contact.jsx:L107`
* **Properties:** Background: `#ffffff`, Text: `#ba1a1a`, Radius: `8px`, Shadow: `shadow-lg`.

#### Button Variation 8 (Secondary Theme Button)
* **HTML/JSX:** `<button type="submit" className="w-full py-4 rounded-lg bg-secondary-container text-on-secondary-container font-bold hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-secondary-container/20 flex justify-center items-center gap-2">`
* **File:** `resources/views/login.blade.php:L78`
* **Properties:** Background: `#cfe6f2`, Text: `#526772`, Radius: `8px`, Shadow: `shadow-secondary-container/20`.

#### Button Variation 9 (Terminal Dark "See All" Filter)
* **HTML/JSX:** `<button className="bg-[#0b1519] border border-outline-variant/30 text-sky-400 hover:text-white hover:bg-sky-950/20 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest font-mono transition-all shadow-md flex items-center gap-1.5">`
* **File:** `resources/js/frontend/pages/Careers.jsx:L308`
* **Properties:** Background: `#0b1519`, Text: `#38bdf8` (sky-400), Border: `1px solid rgba(195,199,202,0.3)`.

#### Button Variation 10 (Admin Sky-Blue Primary Action)
* **HTML/JSX:** `<button type="submit" className="px-6 py-2 bg-primary text-on-primary rounded-lg font-semibold hover:bg-primary/90 transition-colors">`
* **File:** `resources/js/admin/pages/FaqManager.jsx:L147`
* **Properties:** Background: `#0284c7`, Text: `#ffffff`, Radius: `8px`, Padding: `8px 24px`.

#### Button Variation 11 (Admin Danger Action)
* **HTML/JSX:** `<button className="px-5 py-2.5 rounded-lg font-semibold text-white bg-error hover:bg-error/90 transition-colors shadow-lg shadow-error/20">`
* **File:** `resources/js/admin/pages/FaqManager.jsx:L260`
* **Properties:** Background: `#ba1a1a`, Text: `#ffffff`, Shadow: `shadow-error/20`, Radius: `8px`.

---

### 5.2 Cards & Surface Containers

#### Card Variation 1 (Standard Light Card with Hover Border)
* **Structure:** `bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden group hover:border-primary transition-colors duration-300`
* **Used in:** `Home.jsx:L272`, `Home.jsx:L329`
* **Attributes:** Background: `#ffffff`, Border: `1px solid rgba(195,199,202,0.30)`, Radius: `8px`.

#### Card Variation 2 (Elevated White Card with Heavy Border & Shadow)
* **Structure:** `bg-white border border-outline-variant p-8 md:p-12 rounded-xl shadow-sm space-y-8 divide-y divide-outline-variant/30`
* **Used in:** `About.jsx:L202`, `About.jsx:L251`
* **Attributes:** Background: `#ffffff`, Border: `1px solid #c3c7ca`, Radius: `12px`, Shadow: `shadow-sm` (hover: `shadow-xl`).

#### Card Variation 3 (Featured Full-Bleed Hero Stack Card)
* **Structure:** `group relative rounded-lg overflow-hidden shadow-sm border border-outline-variant/20 flex flex-col justify-end w-full min-h-[360px] lg:min-h-[380px]`
* **Used in:** `Services.jsx:L361`
* **Attributes:** Background Image + Gradient Overlay (`bg-gradient-to-t from-primary/95 via-primary/50 to-transparent`), Radius: `8px`.

#### Card Variation 4 (Dark High-Contrast Inverted Card)
* **Structure:** `bg-primary p-8 rounded-lg text-white shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[300px]`
* **Used in:** `Services.jsx:L424`
* **Attributes:** Background: `#111d23`, Text: `#ffffff`, Radius: `8px`, Shadow: `shadow-xl`.

#### Card Variation 5 (Technical Grayscale Image Card)
* **Structure:** `bg-white border border-outline-variant p-8 rounded flex flex-col h-full cursor-pointer group hover:border-primary hover:-translate-y-1 transition-all duration-300`
* **Used in:** `Careers.jsx:L228`
* **Attributes:** Background: `#ffffff`, Border: `1px solid #c3c7ca`, Radius: `4px`, Hover: `-translate-y-1`.

#### Card Variation 6 (Admin Dark Panel Card)
* **Structure:** `bg-surface rounded-xl border border-outline-variant/30 p-6 space-y-6`
* **Used in:** `Dashboard.jsx:L23, L43, L90`, `FaqManager.jsx:L93`, `Orders.jsx:L13`, `Products.jsx:L13`
* **Attributes:** Background: `#111d23`, Border: `1px solid rgba(67,71,74,0.30)`, Radius: `12px`, Padding: `24px`.

---

### 5.3 Inputs, Selects & Form Controls

#### Input Variation 1 (Compact 38px Form Input)
* **Markup:** `<input className="w-full rounded border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2" />`
* **File:** `resources/js/frontend/pages/Home.jsx:L532`
* **Attributes:** Padding: `8px 16px`, Radius: `4px`, Background: `#f8f9fa`.

#### Input Variation 2 (Tall 56px Styled Field)
* **Markup:** `<input className="w-full h-14 px-4 bg-background border border-outline-variant/30 rounded-lg focus:outline-none focus:border-[#4c616c] focus:ring-1 focus:ring-[#4c616c] text-on-surface text-sm transition-all" />`
* **File:** `resources/js/frontend/pages/Contact.jsx:L134`
* **Attributes:** Height: `56px`, Radius: `8px`, Background: `#f8f9fa`, Focus Border: `#4c616c`.

#### Input Variation 3 (Standard 46px White Field)
* **Markup:** `<input className="w-full px-4 py-3 bg-white border border-outline-variant rounded text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary" />`
* **File:** `resources/js/frontend/pages/Careers.jsx:L364`
* **Attributes:** Padding: `12px 16px`, Radius: `4px`, Background: `#ffffff`.

#### Input Variation 4 (Icon-Prefixed Glass Input)
* **Markup:** `<input className="w-full pl-10 pr-4 py-3 bg-surface-container/50 border border-outline-variant/50 rounded-lg text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" />`
* **File:** `resources/views/login.blade.php:L54`
* **Attributes:** Padding: `12px 16px 12px 40px`, Radius: `8px`, Background: `rgba(237,238,239,0.5)`.

#### Input Variation 5 (Admin Dark Theme Field)
* **Markup:** `<input className="w-full bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors" />`
* **File:** `resources/js/admin/pages/FaqManager.jsx:L106`, `HomepageManager.jsx`
* **Attributes:** Background: `#19272f`, Border: `1px solid rgba(67,71,74,0.5)`, Text: `#ffffff`, Radius: `8px`.

#### Select Variations
* **Frontend Native Select:** `<select className="w-full rounded border-outline-variant/30 bg-background text-sm px-4 py-2">` (`Home.jsx:L541`)
* **Frontend Framed Select (No Arrow Indicator):** `<select className="w-full h-14 px-4 bg-background border border-outline-variant/30 rounded-lg text-sm appearance-none">` (`Contact.jsx:L160`)
* **Admin Dark Select:** `<select className="px-4 py-2.5 bg-surface-container border border-outline-variant/50 rounded-lg text-white text-sm focus:outline-none focus:border-primary">` (`Products.jsx:L28`)

---

### 5.4 Badges & Status Indicators

* **Badge Variation 1 (Red Pill Monospace):** `bg-tertiary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded font-mono tracking-wider shadow-sm` (`About.jsx:L375`, `Services.jsx:L371`)
* **Badge Variation 2 (Subtle Outline Pill):** `text-[10px] font-bold text-tertiary border border-tertiary px-2 py-0.5 rounded uppercase tracking-tighter` (`Careers.jsx:L231`)
* **Badge Variation 3 (Light Tint Pill):** `bg-tertiary/10 text-tertiary border border-tertiary/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-mono` (`ServiceDetail.jsx:L88`)
* **Badge Variation 4 (Terminal Dark Sky-Blue Badge):** `bg-[#0b1519] border border-outline-variant/30 text-sky-400 font-bold font-mono text-xs px-3 py-1 rounded-md uppercase` (`About.jsx:L436`)
* **Badge Variation 5 (Admin Success Status):** `px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-green-500/10 text-green-400` (`Dashboard.jsx:L74`, `Orders.jsx:L41`)
* **Badge Variation 6 (Admin Error / High Priority):** `px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-error/15 text-error` (`Dashboard.jsx:L66`, `Orders.jsx:L43`)
* **Badge Variation 7 (Admin Inactive Badge):** `px-2 py-0.5 rounded text-[10px] font-bold bg-error/20 text-error uppercase tracking-wider` (`FaqManager.jsx:L184`)

---

### 5.5 Alerts & Toasts

* **Alert Variation 1 (Light Blue Transient Banner):**
  * `mb-6 p-4 bg-[#cfe6f2] border border-[#b4cad6] rounded-lg text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2`
  * Used in: `Home.jsx:L524`, `Contact.jsx:L121`, `HomepageManager.jsx:L252`
* **Alert Variation 2 (Dark Transient Banner):**
  * `mb-8 p-4 bg-primary text-white rounded text-xs font-bold uppercase tracking-widest flex items-center gap-3`
  * Used in: `Careers.jsx:L354`
* **Alert Variation 3 (Blade Red Validation Box):**
  * `mb-6 p-4 bg-error-container/20 border border-error-container/40 rounded-lg text-error text-sm`
  * Used in: `resources/views/login.blade.php:L36`
* **Alert Variation 4 (Admin Red Error Alert):**
  * `p-4 bg-error/10 border border-error/30 rounded-lg text-error text-xs font-bold uppercase tracking-widest flex items-center gap-2`
  * Used in: `HomepageManager.jsx:L257`

---

### 5.6 Modals & Confirmation Dialogs

* **Modal Variation 1 (Admin Delete Confirmation Modal):**
  * Overlay: `fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4`
  * Dialog: `bg-surface border border-outline-variant/30 rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-in fade-in zoom-in-95 duration-200`
  * Used in: `resources/js/admin/pages/FaqManager.jsx:L242`
* **Modal Variation 2 (Admin Entity Edit Modal):**
  * Dialog: `bg-surface border border-outline-variant/30 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto`
  * Used in: `HomepageManager.jsx`, `ServicesManager.jsx`, `AboutManager.jsx`, `CareersManager.jsx`
* **Modal Variation 3 (System Commands Auth Prompt):**
  * Modal with password input field and key validation.
  * Used in: `resources/js/admin/pages/SystemCommands.jsx:L43`
* **Native Browser Alerts (Anti-pattern):**
  * `window.alert(...)` used in `Contact.jsx:L108`, `Careers.jsx:L118`, `SystemCommands.jsx`.

---

### 5.7 Navigation & Headers

* **Desktop Topbar:**
  * Container: `header className="w-full top-0 sticky shadow-lg bg-[#0c0f24] z-50"`
  * Height: `h-20` (80px)
  * Links: `text-[#8d9aa1] font-medium hover:text-white transition-colors duration-200 text-xs uppercase tracking-widest whitespace-nowrap`
  * Used in: `resources/js/frontend/components/Navbar.jsx:L9-L64`
* **Mobile Drawer:**
  * Container: `fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-[#0c0f24] border-l border-white/10 z-50 shadow-2xl p-6`
  * Backdrop: `fixed inset-0 bg-black/60 backdrop-blur-sm z-40`
  * Links: `text-[#8d9aa1] font-semibold hover:text-white py-2 text-sm uppercase tracking-widest border-b border-white/5`
  * Used in: `resources/js/frontend/components/Navbar.jsx:L75-L193`
* **Sub-Navigation HUD Bar (Phase Bar):**
  * Container: `bg-white border-b border-outline-variant h-14 flex items-center`
  * Links: `font-mono text-[11px] text-tertiary font-bold uppercase py-4 border-b-2 border-tertiary`
  * Used in: `resources/js/frontend/pages/HowWeWork.jsx:L33-L50`
* **Admin Navigation Sidebar:**
  * Container: `w-64 bg-surface border-r border-outline-variant/30 flex flex-col justify-between shrink-0`
  * Active Item: `bg-primary text-on-primary shadow-lg shadow-primary/20`
  * Inactive Item: `text-on-surface-variant hover:text-white hover:bg-surface-container`
  * Used in: `resources/js/admin/AdminApp.jsx:L45-L102`

---

### 5.8 Tables

* **Table Variation 1 (Admin Compliance Table):**
  * Header: `border-b border-outline-variant/30 text-on-surface-variant font-mono-data text-xs`
  * Body Rows: `divide-y divide-outline-variant/10 text-white font-mono-data hover:bg-surface-container-low transition-all`
  * Used in: `resources/js/admin/pages/Dashboard.jsx:L49-L85`, `Orders.jsx:L20-L52`, `Products.jsx:L38-L70`, `Users.jsx:L20-L50`
* **Table Variation 2 (Admin Stacked Row List):**
  * Rows: `p-6 flex items-start gap-4 hover:bg-surface-container/30 transition-colors divide-y divide-outline-variant/30`
  * Used in: `resources/js/admin/pages/FaqManager.jsx:L177-L211`

---

### 5.9 Pagination

* **Pagination Variation 1 (Text-Based Prev / Next):**
  * Structure: `[ < Prev ] Page X of Y [ Next > ]`
  * Button Style: `px-4 py-2.5 rounded border border-outline-variant hover:border-primary text-primary disabled:opacity-30 bg-white font-bold font-mono text-xs`
  * Used in: `resources/js/frontend/pages/Clients.jsx:L114-L141`
* **Pagination Variation 2 (Numbered Buttons + "See All" Toggle):**
  * Structure: `[ < Prev ] [ 1 ] [ 2 ] [ 3 ] [ Next > ]  [ See All / Paginated View ]`
  * Active Button: `w-10 h-10 rounded font-bold bg-primary text-white shadow-md`
  * Inactive Button: `w-10 h-10 rounded font-bold bg-white border border-outline-variant hover:border-primary text-primary`
  * Used in: `resources/js/frontend/pages/Careers.jsx:L256-L315`
* **Pagination Variation 3 (Laravel Array Pagination):**
  * Structure: `px-3 py-1 rounded text-sm bg-surface-container text-white`
  * Used in: `resources/js/admin/pages/FaqManager.jsx:L214-L237`, `ClientsManager.jsx`

---

## 6. Borders / Radius / Shadows

### 6.1 Border Widths and Styles
* `border` (1px solid): Standard on 90% of cards and inputs.
* `border-2`: Used on step badges (`Home.jsx:L302`), advisor avatar frames (`About.jsx:L311`), and outline buttons (`Services.jsx:L528`).
* `border-l-4`: Used as decorative accent strips on `About.jsx:L168`, `Services.jsx:L223`, `HowWeWork.jsx:L103`, `Contact.jsx:L193`.
* `border-dashed`: Used on file upload zones in `Careers.jsx:L410` and BIM placeholders in `HowWeWork.jsx:L120`.

### 6.2 Border Radius Distribution
* **0px (`rounded-none` / unrounded):** `HowWeWork.jsx:L58` (Phase cards), `Home.jsx` (certain raw image frames).
* **2px (`rounded-sm`):** `Services.jsx:L371` (Tag badges).
* **4px (`rounded`):** `Navbar.jsx:L36`, `Home.jsx:L207`, `Services.jsx:L254`, `Careers.jsx:L228`, `Clients.jsx:L69`.
* **6px (`rounded-md`):** `About.jsx:L436` (Timeline year pills).
* **8px (`rounded-lg`):** `Home.jsx:L272`, `About.jsx:L329`, `Services.jsx:L254`, `Contact.jsx:L99, L117`, `login.blade.php:L54`, `FaqManager.jsx:L106`.
* **12px (`rounded-xl`):** `About.jsx:L202, L251`, `Contact.jsx:L88, L204`, `FAQ.jsx:L44`, `Pricing.jsx:L68`, `Dashboard.jsx:L23`.
* **16px (`rounded-2xl`):** `FaqManager.jsx:L93, L167, L243`.
* **Full (9999px / `rounded-full`):** `Home.jsx:L220` (Carousel dots), `Navbar.jsx` (avatar rings), `Pricing.jsx:L76` (Recommended badge).

### 6.3 Shadows & Elevation Tokens
* `shadow-sm`: Used on standard content cards (`Home.jsx:L329`, `About.jsx:L202`, `Clients.jsx:L105`).
* `shadow-md`: Used on secondary action buttons, step badges, and image badges (`Home.jsx:L303`, `ServiceDetail.jsx:L107`).
* `shadow-lg`: Used on primary sticky header (`Navbar.jsx:L9`), contact cards, and feature highlights (`About.jsx:L178`, `Services.jsx:L254`).
* `shadow-xl`: Used on elevated cards (`About.jsx:L251, L354`, `Services.jsx:L424`, `Navbar.jsx:L36`).
* `shadow-2xl`: Used on CEO leadership card (`About.jsx:L271`), urgent callout (`Contact.jsx:L99`), and modal popups (`FaqManager.jsx:L243`, `login.blade.php:L26`).
* `shadow-inner`: Used on embedded map placeholder (`Contact.jsx:L237`).

---

## 7. Layout

### 7.1 Page Max-Width Constraints
* `1280px` (`max-w-container-max` / `max-w-7xl`): Standard across all primary public landing pages.
* `1024px` (`max-w-4xl`): Milestones on `About.jsx:L423`, Application Form on `Careers.jsx:L346`.
* `768px` (`max-w-3xl`): FAQ list on `FAQ.jsx:L40`, Careers Internship on `Careers.jsx:L324`.
* `672px` (`max-w-2xl`): Admin profile and system parameter forms (`Profile.jsx:L5`, `Settings.jsx:L5`).

### 7.2 Header & Navigation Dimensions
* Public Top Navbar: Height = `h-20` (80px), Sticky top positioning (`sticky top-0 z-50`).
* Public Sub-bar (Phase Nav): Height = `h-14` (56px), Static border-bottom.
* Admin Topbar: Height = `h-20` (80px), Border-bottom, flex justify-between.
* Admin Sidebar: Width = `w-64` (256px), Height = `min-h-screen`, Fixed column flex.

### 7.3 Grid Structures
* **1-Column:** Mobile views, single form cards (`FAQ`, `ServiceDetail` main text).
* **2-Column Equal (`md:grid-cols-2` / `lg:grid-cols-2`):** `About.jsx:L350` (Team), `Home.jsx:L422` (Projects), `Careers.jsx:L360` (Form fields), `Contact.jsx:L115` (Form vs Info).
* **3-Column Equal (`md:grid-cols-3` / `lg:grid-cols-3`):** `Home.jsx:L264` (Services), `Home.jsx:L327` (Leaders), `Services.jsx:L249` (Consulting), `Pricing.jsx:L65` (Plans), `Clients.jsx:L67` (Partners).
* **4-Column (`lg:grid-cols-4` / `sm:grid-cols-2 lg:grid-cols-4`):** `About.jsx:L249` (Pillars), `Footer.jsx:L43` (Footer links), `Dashboard.jsx:L21` (Stats), `Analytics.jsx:L14` (Metrics).
* **5-Column (`lg:grid-cols-5`):** `Home.jsx:L570` (Why Choose Us — 10 items in 2 rows).
* **12-Column Split Grid (`lg:grid-cols-12`):**
  * `lg:col-span-5` + `lg:col-span-7`: `Home.jsx:L230` (Welcome section), `About.jsx:L187` (Story vs Stats), `Careers.jsx:L160` (Why Join Us).
  * `lg:col-span-7` + `lg:col-span-5`: `Services.jsx:L354` (Featured DSI vs 2 stacked cards).
  * `lg:col-span-8` + `lg:col-span-4`: `ServiceDetail.jsx:L84` (Main article vs Sidebar), `Services.jsx:L421` (Maintenance grid vs Panel).

---

## 8. Responsive Design

### 8.1 Breakpoints Used in Markup
* `sm` (`640px`): Used for small tablet column expansion, avatar layout realignment.
* `md` (`768px`): Primary breakpoint for desktop horizontal menus, form 2-column splitting, hero headline scaling.
* `lg` (`1024px`): Main layout structural breakpoint for 3-column / 4-column grids, sidebar splits, and desktop navigation display.

### 8.2 Mobile vs Desktop Navigation
* **Desktop (`hidden lg:flex`):** Horizontal inline links + hover dropdown menu (`group-hover`).
* **Mobile (`lg:hidden`):** Hamburger button triggering slide-out right drawer (`w-[280px] sm:w-[320px]`) with backdrop blur overlay and accordion dropdown toggle.

### 8.3 Hero Height Scaling
* `Home.jsx:L185`: Hardcoded `h-[600px]` across all screen sizes.
* `About.jsx:L162`: Responsive scaling `h-[450px] md:h-[550px]`.
* `Clients.jsx:L46`: Responsive scaling `h-[350px] md:h-[400px]`.
* `Careers.jsx:L145`: Responsive scaling `h-[350px] md:h-[400px]`.

### 8.4 Admin Responsive Limitations
* [AdminApp.jsx:L45](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/admin/AdminApp.jsx#L45) maintains fixed `w-64 shrink-0` with no mobile drawer toggle. Tables rely on `overflow-x-auto`.

---

## 9. Animations & Interactions

### 9.1 Keyframe Animations (`resources/css/app.css:L144-L161`)
* **Marquee Infinite Scroll:**
  * Animation: `animation: marquee 50s linear infinite`
  * Applied in: `Home.jsx:L452-L478` (Client partner logo carousel)
  * Hover State: `animation-play-state: paused` on `.marquee-container:hover`

### 9.2 Transitions & Hover Feedback
* **Transform Shifts on Hover:**
  * `hover:-translate-y-0.5 active:translate-y-0` (Buttons in `About.jsx:L178`, `Contact.jsx:L185`, `login.blade.php:L79`)
  * `hover:-translate-y-1` (Cards in `Careers.jsx:L228`, `Clients.jsx:L69`, `HowWeWork.jsx`)
  * `hover:-translate-y-2` (Pricing cards in `Pricing.jsx:L69`)
* **Image Zoom & Grayscale Reveals:**
  * `grayscale group-hover:grayscale-0 transition-all duration-300` / `duration-500` / `duration-700` (Used in `Home.jsx:L331, L426, L458`, `About.jsx:L276, L313, L360`, `Services.jsx:L259, L325`, `HowWeWork.jsx:L59`, `Clients.jsx:L79, L106`, `Careers.jsx:L195`)
  * `group-hover:scale-105 transition-transform duration-700` (Used in `Home.jsx:L377`, `Services.jsx:L259, L365`)
* **Hero Slider Fade:**
  * `transition-opacity duration-1000` (`Home.jsx:L189`) driven by 5-second interval timer.
* **Accordion Disclosure Animation:**
  * `transition-all duration-300 ease-in-out` with inline `maxHeight: activeIndex === index ? '200px' : '0px'` and `opacity: activeIndex === index ? 1 : 0` (`FAQ.jsx:L56-L61`).

---

## 10. Design Variations (Component-by-Component)

### Summary of Component Variations

```
1. BUTTONS (11 Variations)
   ├── Var 1: Hero Accent Action (bg-tertiary, font-mono, text-xs, px-8 py-4, rounded)
   ├── Var 2: Elevated Transform Accent (bg-tertiary, text-xs, shadow-lg, -translate-y-0.5)
   ├── Var 3: Compact Mono CTA (bg-tertiary, font-mono, text-[11px], px-8 py-4, shadow-md)
   ├── Var 4: Dark Primary Submit (bg-primary, text-xs, rounded-lg, py-4)
   ├── Var 5: Outline Dark Primary (border-2 border-primary, text-primary, text-[11px])
   ├── Var 6: Outline Light Ghost (border border-white/30, text-white, px-8 py-4)
   ├── Var 7: High-Contrast Urgent (bg-white, text-tertiary, rounded-lg, shadow-lg)
   ├── Var 8: Secondary Theme Action (bg-secondary-container, text-on-secondary-container)
   ├── Var 9: Terminal Dark Filter (bg-[#0b1519], text-sky-400, font-mono, text-xs)
   ├── Var 10: Admin Sky-Blue Primary (bg-primary #0284c7, px-6 py-2, rounded-lg)
   └── Var 11: Admin Danger Action (bg-error #ba1a1a, px-5 py-2.5, rounded-lg)

2. CARDS (6 Variations)
   ├── Var 1: Standard Light Border Card (bg-surface-container-lowest, border-outline-variant/30, rounded-lg)
   ├── Var 2: Elevated White Card (bg-white, border-outline-variant, rounded-xl, shadow-sm / hover:shadow-xl)
   ├── Var 3: Full-Bleed Image Gradient Card (relative, gradient overlay, min-h-[380px], rounded-lg)
   ├── Var 4: Dark Inverted Surface Card (bg-primary #111d23, text-white, shadow-xl, rounded-lg)
   ├── Var 5: Technical Grayscale Card (bg-white, border-outline-variant, rounded, hover:-translate-y-1)
   └── Var 6: Admin Dark Panel (bg-surface #111d23, border-outline-variant/30, rounded-xl, p-6)

3. INPUTS & FORMS (5 Variations)
   ├── Var 1: Compact 38px Input (bg-background, px-4 py-2, rounded, text-sm)
   ├── Var 2: Tall 56px Field (bg-background, h-14, px-4, rounded-lg, text-sm)
   ├── Var 3: Standard 46px Field (bg-white, px-4 py-3, rounded, text-sm)
   ├── Var 4: Icon-Prefixed Glass Field (bg-surface-container/50, pl-10 pr-4 py-3, rounded-lg, text-white)
   └── Var 5: Admin Dark Field (bg-surface-container #19272f, px-4 py-2, rounded-lg, text-white)

4. BADGES (7 Variations)
   ├── Var 1: Red Pill Monospace (bg-tertiary text-white, text-[10px], font-mono)
   ├── Var 2: Subtle Outline Pill (border border-tertiary, text-tertiary, text-[10px])
   ├── Var 3: Light Tint Pill (bg-tertiary/10, text-tertiary, border-tertiary/20, text-[10px])
   ├── Var 4: Terminal Sky-Blue Pill (bg-[#0b1519], text-sky-400, border-outline-variant/30)
   ├── Var 5: Admin Green Success (bg-green-500/10, text-green-400, text-[10px])
   ├── Var 6: Admin Red Critical (bg-error/15, text-error, text-[10px])
   └── Var 7: Admin Inactive Status (bg-error/20, text-error, text-[10px])

5. PAGINATION (3 Variations)
   ├── Var 1: Text-Based Prev/Next (Page X of Y, text-primary, bg-white)
   ├── Var 2: Numbered Page Buttons + "See All" Toggle (bg-primary active, bg-white inactive, sky-blue toggle)
   └── Var 3: Laravel Array Links (bg-surface-container, text-white, bg-primary active)
```

---

## 11. Pages Using Each Variation

| Component Variation | Pages / Views Utilizing the Variation |
|---|---|
| **Button Var 1 (Hero Accent)** | `Home.jsx` |
| **Button Var 2 (Elevated Accent)** | `About.jsx` |
| **Button Var 3 (Compact Mono CTA)** | `Services.jsx`, `ServiceDetail.jsx` |
| **Button Var 4 (Dark Primary Submit)** | `Contact.jsx` |
| **Button Var 5 (Outline Dark)** | `Services.jsx` |
| **Button Var 6 (Outline Light Ghost)** | `Home.jsx`, `About.jsx`, `HowWeWork.jsx` |
| **Button Var 7 (Urgent White/Red)** | `Contact.jsx` |
| **Button Var 8 (Secondary Theme)** | `login.blade.php`, `Pricing.jsx` |
| **Button Var 9 (Terminal Sky-Blue)** | `Careers.jsx` |
| **Button Var 10 (Admin Sky-Blue)** | `FaqManager.jsx`, `HomepageManager.jsx`, `ServicesManager.jsx`, `AboutManager.jsx`, `ContactManager.jsx`, `CareersManager.jsx`, `ClientsManager.jsx`, `Settings.jsx`, `Profile.jsx` |
| **Button Var 11 (Admin Danger)** | `FaqManager.jsx`, `HomepageManager.jsx`, `ClientsManager.jsx`, `ContactManager.jsx` |
| **Card Var 1 (Standard Light)** | `Home.jsx` |
| **Card Var 2 (Elevated White)** | `About.jsx`, `Contact.jsx`, `Careers.jsx`, `FAQ.jsx`, `Pricing.jsx` |
| **Card Var 3 (Image Gradient)** | `Services.jsx`, `About.jsx` |
| **Card Var 4 (Dark Inverted)** | `Services.jsx`, `HowWeWork.jsx`, `Careers.jsx`, `About.jsx` |
| **Card Var 5 (Technical Grayscale)** | `Careers.jsx`, `Clients.jsx`, `HowWeWork.jsx` |
| **Card Var 6 (Admin Dark Panel)** | All 16 admin pages in `resources/js/admin/pages/*` |
| **Input Var 1 (Compact 38px)** | `Home.jsx` |
| **Input Var 2 (Tall 56px)** | `Contact.jsx` |
| **Input Var 3 (Standard 46px)** | `Careers.jsx` |
| **Input Var 4 (Glass Icon Input)** | `login.blade.php` |
| **Input Var 5 (Admin Dark)** | All admin management forms |
| **Badge Var 1 (Red Pill)** | `About.jsx`, `Services.jsx`, `Portfolio.jsx` |
| **Badge Var 2 (Outline Pill)** | `Careers.jsx` |
| **Badge Var 3 (Light Tint Pill)** | `ServiceDetail.jsx` |
| **Badge Var 4 (Terminal Pill)** | `About.jsx` |
| **Badge Var 5-7 (Admin Status)** | `Dashboard.jsx`, `Orders.jsx`, `Products.jsx`, `Users.jsx`, `FaqManager.jsx` |
| **Pagination Var 1 (Text Prev/Next)** | `Clients.jsx` |
| **Pagination Var 2 (Numbered + All)** | `Careers.jsx` |
| **Pagination Var 3 (Laravel Array)** | `FaqManager.jsx`, `ClientsManager.jsx` |

---

## 12. Design Tokens Already Existing

The following design tokens are formally registered in `resources/css/app.css` via Tailwind v4 `@theme`:

```css
@theme {
    /* Typography Tokens */
    --font-sans: 'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif;
    --font-heading: 'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif;
    --font-body: 'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif;
    
    --text-sm: 0.8rem;
    --text-base: 0.9rem;
    --text-xl: 1.066rem;
    --text-2xl: 1.421rem;
    --text-3xl: 1.894rem;
    --text-4xl: 2.525rem;
    --text-5xl: 3.366rem;

    --font-weight-normal: 400;
    --font-weight-bold: 700;
    
    /* Global Colors (Light Base) */
    --color-primary: #111d23;
    --color-on-primary: #ffffff;
    --color-primary-container: #111d23;
    --color-on-primary-container: #8d9aa1;
    
    --color-secondary: #4c616c;
    --color-on-secondary: #ffffff;
    --color-secondary-container: #cfe6f2;
    --color-on-secondary-container: #526772;

    --color-tertiary: #ba1a1a;
    --color-on-tertiary: #ffffff;
    --color-tertiary-container: #680008;
    --color-on-tertiary-container: #ff655c;

    --color-background: #f8f9fa;
    --color-on-background: #191c1d;

    --color-surface: #f8f9fa;
    --color-on-surface: #191c1d;
    --color-surface-dim: #d9dadb;
    --color-surface-bright: #f8f9fa;
    
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
    --color-on-error: #ffffff;
    --color-on-error-container: #93000a;

    --color-tertiary-fixed-dim: #ffb3ac;
    --color-secondary-fixed-dim: #b4cad6;
    --color-primary-fixed-dim: #bbc8d0;
    --color-secondary-fixed: #cfe6f2;
    --color-tertiary-fixed: #ffdad6;
    --color-primary-fixed: #d7e4ec;

    /* Spacing Tokens */
    --spacing-margin-mobile: 16px;
    --spacing-gutter: 24px;
    --spacing-safe-area-ar: 64px;
    --spacing-margin-desktop: 48px;
    --spacing-base-unit: 4px;
    --spacing-container-max: 1280px;

    /* Border Radius Tokens */
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --radius-full: 9999px;
}
```

---

## 13. Hardcoded Values Found

### 13.1 Hardcoded Colors
* `#0c0f24`: Deep midnight blue used in `Navbar.jsx:L9, L36, L75` and `Footer.jsx:L42`.
* `#8d9aa1`: Slate gray used directly in `Navbar.jsx:L25, L27, L28, L37`, `Footer.jsx:L55, L60, L112, L138`, `app.css:L27, L135`.
* `#4c616c`: Slate dark color hardcoded in `Contact.jsx:L91, L129, L134, L209, L218, L227` and `app.css:L194`.
* `#fafbfc`: Light background tint hardcoded in `About.jsx:L160, L357, L366`.
* `#0b1519`: Terminal dark background hardcoded in `About.jsx:L311, L436` and `Careers.jsx:L308`.
* `#cfe6f2` / `#b4cad6`: Notice box light blue background and border hardcoded in `Home.jsx:L524`, `Contact.jsx:L121`, `HomepageManager.jsx:L252`.
* `#152229` / `#19272f`: RichText editor container and toolbar background hardcoded in `RichTextEditor.jsx:L39, L41`.

### 13.2 Hardcoded Dimensions
* Hero slider height: `h-[600px]` (`Home.jsx:L185`).
* Secondary hero heights: `h-[450px] md:h-[550px]` (`About.jsx:L162`), `h-[350px] md:h-[400px]` (`Clients.jsx:L46`, `Careers.jsx:L145`).
* Mobile menu drawer widths: `w-[280px] sm:w-[320px]` (`Navbar.jsx:L75`).
* Input fixed height: `h-14` (56px) (`Contact.jsx:L134, L147, L160`).
* FAQ accordion fixed max-height: `maxHeight: 200px` (`FAQ.jsx:L58`).
* Watermark decorative icon size: `text-[240px]` (`Careers.jsx:L322`), `text-[120px]` (`Services.jsx:L426`).

---

## 14. Existing Reusable Components

The following shared reusable React components currently exist in the codebase:

1. **`Navbar`** (`resources/js/frontend/components/Navbar.jsx`)
   * Implements responsive public navigation bar, brand logo, desktop dropdown, mobile drawer, and profile download trigger.
2. **`Footer`** (`resources/js/frontend/components/Footer.jsx`)
   * Implements multi-column corporate footer, dynamic settings integration via API (`/api/home`), social media links, and copyright text.
3. **`ScrollToTop`** (`resources/js/frontend/components/ScrollToTop.jsx`)
   * Handles scroll position restoration, history pop/push listeners, and smooth hash scrolling.
4. **`RichTextEditor`** (`resources/js/admin/components/RichTextEditor.jsx`)
   * Implements contentEditable WYSIWYG editor with bold, italic, underline, list, and alignment formatting commands for Admin Manager pages.

---

## 15. Duplicate / Similar Components

The following UI components are duplicated across multiple files with slight differences in markup, classes, or behavior:

1. **Section Headers (Eyebrow + Title + Subtitle + Divider Bar):**
   * Implemented separately with differing class combinations in `Home.jsx:L256`, `About.jsx:L244`, `Services.jsx:L222`, `Clients.jsx:L63`, `Careers.jsx:L163`, `FAQ.jsx:L32`, `Pricing.jsx:L57`.
2. **Hero Banners:**
   * Implemented with different heights and markup across `Home.jsx:L185`, `About.jsx:L162`, `Services.jsx:L222`, `Clients.jsx:L46`, `Careers.jsx:L145`.
3. **Contact / Inquiry Submission Forms:**
   * Implemented separately in `Home.jsx:L528` and `Contact.jsx:L126` with different input heights, label structures, and submission handlers.
4. **Delete Confirmation Dialogs:**
   * Implemented independently with different state variables in `FaqManager.jsx:L241`, `ClientsManager.jsx:L33`, `ServicesManager.jsx:L24`, `AboutManager.jsx:L40`, `CareersManager.jsx:L24`, `ContactManager.jsx:L25`.
5. **Toast / Status Notification Banners:**
   * Implemented independently with different CSS classes in `HomepageManager.jsx:L56`, `ServicesManager.jsx:L93`, `AboutManager.jsx:L71`, `ClientsManager.jsx:L72`, `ContactManager.jsx:L56`, `CareersManager.jsx:L51`.
6. **Data Tables & List Views:**
   * `Dashboard.jsx`, `Orders.jsx`, `Products.jsx`, and `Users.jsx` implement distinct tables with varying padding and font rules instead of using a unified table component.
7. **Pagination Controls:**
   * `Clients.jsx:L114`, `Careers.jsx:L256`, and `FaqManager.jsx:L214` each have custom, incompatible pagination implementations.
8. **Stat Counters / Metrics Cards:**
   * `About.jsx:L202` (History stats), `Dashboard.jsx:L21` (Admin KPI stats), and `Analytics.jsx:L14` (Telemetry metrics) use three different card architectures for metric displays.

---

*End of Audit Report.*

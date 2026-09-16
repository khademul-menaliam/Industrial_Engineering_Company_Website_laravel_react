# Design System Decisions

This document presents the existing design variations found across the project. Use this document to select which existing implementation will serve as the standardized design token or component pattern.

---

# 1. Color System

## 1.1 Primary Color

(for frontend this is correct, no need to change)

### Option A: Charcoal Dark Navy 
* **Value:** `#111d23` (`--color-primary`)
* **Used in:** Global theme base, page titles, dark hero sections, footer background, primary buttons on Contact
* **Files:** 
  * `resources/css/app.css:L24`
  * `resources/js/frontend/pages/Home.jsx:L185, L598`
  * `resources/js/frontend/pages/About.jsx:L164, L268`
  * `resources/js/frontend/pages/Contact.jsx:L185`

(for admin portal this is correct, no need to change)

### Option B: Sky Blue (Admin Accent)
* **Value:** `#0284c7` (`--color-primary` in `.admin-body`)
* **Used in:** Admin sidebar active links, admin primary action buttons, admin headings
* **Files:**
  * `resources/css/app.css:L139`
  * `resources/js/admin/AdminApp.jsx:L68`
  * `resources/js/admin/pages/FaqManager.jsx:L147`
  * `resources/js/admin/pages/HomepageManager.jsx:L296`

(for frontend custom for top nav bar, mobile nav drawer and footer only this is correct, no need to change)

### Option C: Deep Midnight Blue
* **Value:** `#0c0f24` (Hardcoded)
* **Used in:** Public Top Navigation Bar, Mobile Navigation Drawer, Public Footer
* **Files:**
  * `resources/js/frontend/components/Navbar.jsx:L9, L36, L75`
  * `resources/js/frontend/components/Footer.jsx:L42`

### Decision
[ ]

---

## 1.2 Secondary Color

(this is correct, no need to change)
### Option A: Slate Gray
* **Value:** `#4c616c` (`--color-secondary`)
* **Used in:** Subtitles, descriptive paragraphs, secondary badges, icon borders
* **Files:**
  * `resources/css/app.css:L29`
  * `resources/js/frontend/pages/Home.jsx:L236, L260`
  * `resources/js/frontend/pages/Pricing.jsx:L58`

### Option B: Light Slate Blue Container
* **Value:** `#cfe6f2` (`--color-secondary-container`) / `#526772` (`--color-on-secondary-container`)
* **Used in:** Login submit button, Featured pricing badge, notice boxes
* **Files:**
  * `resources/css/app.css:L31, L32`
  * `resources/views/login.blade.php:L78`
  * `resources/js/frontend/pages/Pricing.jsx:L76, L104`

### Decision
[ Option A: Slate Gray ]

---

## 1.3 Accent / Tertiary Color

### Option A: Crimson Red
* **Value:** `#ba1a1a` (`--color-tertiary`)
* **Used in:** Main CTA buttons, brand highlight text ("Engineering"), section divider bars, active icons
* **Files:**
  * `resources/css/app.css:L34`
  * `resources/js/frontend/components/Navbar.jsx:L19`
  * `resources/js/frontend/pages/Home.jsx:L207, L552`
  * `resources/js/frontend/pages/About.jsx:L178, L190`
  * `resources/js/frontend/pages/Services.jsx:L525`
  * `resources/js/frontend/pages/Careers.jsx:L440`

### Option B: Terminal Sky-Blue Accent
* **Value:** `#38bdf8` (`text-sky-400`) on `#0b1519`
* **Used in:** Milestones year badges, "See All" button in Careers, command terminal
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L436`
  * `resources/js/frontend/pages/Careers.jsx:L308`
  * `resources/js/admin/pages/SystemCommands.jsx`

### Decision
[ Option B: but little more darker shade]

---

## 1.4 Background Color

### Option A: Light Neutral Surface
* **Value:** `#f8f9fa` (`--color-background`)
* **Used in:** Public page main container, form backgrounds, alternating sections
* **Files:**
  * `resources/css/app.css:L39`
  * `resources/js/frontend/FrontendApp.jsx:L20`
  * `resources/js/frontend/pages/Services.jsx:L220`
  * `resources/js/frontend/pages/Contact.jsx:L87`

### Option B: Pure White
* **Value:** `#ffffff` (`bg-white`)
* **Used in:** Contact form card, Careers application panel, About story cards, Services DSI section
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L202, L251`
  * `resources/js/frontend/pages/Services.jsx:L344`
  * `resources/js/frontend/pages/Careers.jsx:L228, L347`
  * `resources/js/frontend/pages/Contact.jsx:L117`

### Option C: Off-White Cool Tint
* **Value:** `#fafbfc` (Hardcoded)
* **Used in:** About page wrapper, team member image containers
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L160, L357, L366`

(for admin portal this is correct, no need to change)
### Option D: Dark Minimal Slate (Admin)
* **Value:** `#0b1519` (`--color-background` in `.admin-body`)
* **Used in:** Admin dashboard root container, Admin card lowest container
* **Files:**
  * `resources/css/app.css:L125, L129`
  * `resources/js/admin/AdminApp.jsx:L43`

### Decision
[ Option A: Light Neutral Surface but the little difference section wise is good like a ligh & the next slightly darker, this is very good for visual identity]

---

## 1.5 Surface / Card Color

### Option A: Pure White Surface
* **Value:** `#ffffff` (`--color-surface-container-lowest` / `bg-white`)
* **Used in:** Home capability cards, Home competency cards, About cards, Careers cards
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L272, L329, L372, L424, L522`
  * `resources/js/frontend/pages/About.jsx:L202, L251, L354`
  * `resources/js/frontend/pages/Careers.jsx:L228, L347`

### Option B: Layered Neutral Tints
* **Value:** `--color-surface-container-low: #f3f4f5` / `--color-surface-container: #edeeef`
* **Used in:** Home Welcome section, Home Process section, Home Why Choose Us section, How We Work background
* **Files:**
  * `resources/css/app.css:L48, L49`
  * `resources/js/frontend/pages/Home.jsx:L229, L294, L561`
  * `resources/js/frontend/pages/HowWeWork.jsx:L8`

(for admin portal this is correct, no need to change)
### Option C: Dark Admin Surface
* **Value:** `#111d23` (`--color-surface`) / `#152229` (`--color-surface-container-low`) / `#19272f` (`--color-surface-container`)
* **Used in:** Admin sidebar, Admin panel cards, Admin table rows
* **Files:**
  * `resources/css/app.css:L127, L130, L131`
  * `resources/js/admin/AdminApp.jsx:L45, L107`
  * `resources/js/admin/pages/Dashboard.jsx:L23, L43`

### Decision
[Option A: Pure White Surface after hover  Option B: Layered Neutral Tints]

---

## 1.6 Text Color

### Option A: Deep Charcoal Body Text
* **Value:** `#191c1d` (`--color-on-background` / `--color-on-surface`)
* **Used in:** Default body typography, main headings, list items
* **Files:**
  * `resources/css/app.css:L40, L43`
  * `resources/views/frontend.blade.php:L20`

### Option B: Medium Neutral Muted Text
* **Value:** `#43474a` (`--color-on-surface-variant`)
* **Used in:** Subtitles, paragraph descriptions, captions, specs
* **Files:**
  * `resources/css/app.css:L53`
  * `resources/js/frontend/pages/Home.jsx:L240, L283, L336`
  * `resources/js/frontend/pages/About.jsx:L195, L258`
  * `resources/js/frontend/pages/Careers.jsx:L167, L239`

(this is correct for the custom those section)
### Option C: Hardcoded Slate Gray Text
* **Value:** `#8d9aa1`
* **Used in:** Navbar navigation links, Footer descriptions, office addresses, copyright
* **Files:**
  * `resources/js/frontend/components/Navbar.jsx:L25, L27, L28, L32, L37`
  * `resources/js/frontend/components/Footer.jsx:L55, L60, L98, L112, L138`

(also this is correct)
### Option D: High-Contrast White Text (on Dark Sections)
* **Value:** `#ffffff` (`text-white` / `--color-on-primary`)
* **Used in:** Hero titles, CEO leadership section, Phase 5 section, Footer titles
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L198`
  * `resources/js/frontend/pages/About.jsx:L171, L268`
  * `resources/js/frontend/pages/HowWeWork.jsx:L211`

### Decision
[Option A: Deep Charcoal Body Text,  ]

---

## 1.7 Border Color

### Option A: Subtle Outline Variant (30% Alpha)
* **Value:** `border-outline-variant/30` (`rgba(195, 199, 202, 0.3)`)
* **Used in:** 80% of frontend cards, section dividers, input fields
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L229, L272, L294, L329, L372, L424, L522, L532`
  * `resources/js/frontend/pages/About.jsx:L242, L251, L354, L422`
  * `resources/js/frontend/pages/Contact.jsx:L117, L134`
  * `resources/js/frontend/pages/FAQ.jsx:L44`

### Option B: Solid Outline Variant (100% Solid)
* **Value:** `border-outline-variant` (`#c3c7ca`)
* **Used in:** About story card, How We Work Phase cards, Careers job cards, Careers input fields
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L202`
  * `resources/js/frontend/pages/HowWeWork.jsx:L8, L58, L114`
  * `resources/js/frontend/pages/Careers.jsx:L172, L228, L347, L364`

### Option C: Low-Alpha Outline Variant (10% - 20% Alpha)
* **Value:** `border-outline-variant/10` / `border-outline-variant/20`
* **Used in:** Table row dividers, subtle card boundaries
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L583`
  * `resources/js/frontend/pages/Services.jsx:L241, L361, L476`
  * `resources/js/frontend/pages/FAQ.jsx:L62`
  * `resources/js/admin/pages/Dashboard.jsx:L59`

(this is correct for the custom section)
### Option D: Translucent White Border (Dark Sections)
* **Value:** `border-white/10` / `border-white/20` / `border-white/30`
* **Used in:** Navbar drawer, Footer dividers, About CEO card, About Advisor cards
* **Files:**
  * `resources/js/frontend/components/Navbar.jsx:L36, L75`
  * `resources/js/frontend/components/Footer.jsx:L42, L127, L136`
  * `resources/js/frontend/pages/About.jsx:L268, L274, L308`

### Decision
[ Option A: Subtle Outline Variant (30% Alpha)  ]

---

## 1.8 Status Colors (Success, Warning, Error)

### Success
* **Option A:** `text-green-400` with `bg-green-500/10` (`Dashboard.jsx:L32, L74`)
* **Option B:** `text-emerald-400` with `bg-emerald-500/10` (`SystemCommands.jsx:L87`)
* **Option C:** `text-green-600` with `bg-green-600/90` (`HomepageManager.jsx:L310`)
* **Decision:** [ Option A ]

### Warning
* **Option A:** `text-yellow-400` with `bg-yellow-500/10` (`Dashboard.jsx:L75`, `Notifications.jsx:L27`)
* **Option B:** `text-amber-400` with `bg-amber-500/10` (`SystemCommands.jsx:L78`)
* **Decision:** [ Option A]

### Error
* **Option A:** `text-error` (`#ba1a1a`) with `bg-error/10` / `bg-error/15` (`Dashboard.jsx:L66`, `HomepageManager.jsx:L257`)
* **Option B:** `bg-error-container/20 border-error-container/40 text-error` (`login.blade.php:L36`)
* **Decision:** [Option B ]

---

# 2. Typography

## 2.1 Font Family

### Option A: Baloo Tammudu 2
* **Value:** `'Baloo Tammudu 2', ui-sans-serif, system-ui, sans-serif`
* **Used in:** Registered globally for sans, heading, and body across all views
* **Files:**
  * `resources/css/app.css:L1, L8-L10, L89, L94`
  * `resources/views/frontend.blade.php:L11`
  * `resources/views/admin.blade.php:L12`

### Option B: System UI Sans-Serif
* **Value:** `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
* **Used in:** Fallback stack in app.css
* **Files:**
  * `resources/css/app.css:L8-L10`

### Option C: Monospace Code Font
* **Value:** `font-mono` / `font-mono-data` (System monospace)
* **Used in:** Step numbers, dates, tech specs, ref codes, table cells, buttons in Services & Home
* **Files:**
  * `resources/js/frontend/components/Footer.jsx:L112, L138`
  * `resources/js/frontend/pages/Home.jsx:L207, L304, L381`
  * `resources/js/frontend/pages/About.jsx:L168, L204, L375`
  * `resources/js/frontend/pages/HowWeWork.jsx:L16, L36`
  * `resources/js/frontend/pages/Careers.jsx:L235`
  * `resources/js/admin/pages/Dashboard.jsx:L51`

### Decision
[ Option A: Baloo Tammudu 2]

---

## 2.2 Heading 1 (H1) Style

### Option A: Large Responsive Display Header
* **Classes:** `text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight`
* **Used in:** Home Hero Slider
* **Files:** `resources/js/frontend/pages/Home.jsx:L198`

### Option B: Compressed Line-Height Display Header
* **Classes:** `text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none`
* **Used in:** About Page Hero
* **Files:** `resources/js/frontend/pages/About.jsx:L171`

### Option C: Mid-Scale Section Header
* **Classes:** `text-4xl md:text-5xl font-bold uppercase tracking-tight`
* **Used in:** How We Work Hero, Clients Hero, Careers Hero, Contact Hero, FAQ Hero
* **Files:**
  * `resources/js/frontend/pages/HowWeWork.jsx:L18`
  * `resources/js/frontend/pages/Clients.jsx:L53`
  * `resources/js/frontend/pages/Careers.jsx:L152`
  * `resources/js/frontend/pages/Contact.jsx:L92`
  * `resources/js/frontend/pages/FAQ.jsx:L34`

### Option D: Compact Technical Header
* **Classes:** `text-3xl md:text-4xl font-bold uppercase tracking-tight`
* **Used in:** Services Intro Hero, Service Detail Hero
* **Files:**
  * `resources/js/frontend/pages/Services.jsx:L225`
  * `resources/js/frontend/pages/ServiceDetail.jsx:L91`

### Decision
[Option D: Compact Technical Header ]

---

## 2.3 Heading 2 (H2) Style

### Option A: Standard Section Title (Responsive 2xl to 3xl)
* **Classes:** `text-2xl md:text-3xl font-bold uppercase tracking-tight`
* **Used in:** Capabilities, Process, Leadership, Competencies, Projects, Contact, Why Choose Us in Home
* **Files:** `resources/js/frontend/pages/Home.jsx:L257, L296, L320, L354, L415, L490, L566`

### Option B: Large Section Title (Fixed 3xl)
* **Classes:** `text-3xl font-bold uppercase tracking-tight`
* **Used in:** About Story, About Strategic Pillars, Careers Why Join Us, Careers Job Vacancies, Careers Application Portal
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L191, L246, L427`
  * `resources/js/frontend/pages/Careers.jsx:L163, L204, L325, L349`

### Option C: Uppercase Without Tracking Constraint
* **Classes:** `text-2xl md:text-3xl font-bold uppercase`
* **Used in:** How We Work Phase titles, Clients Solution Partners title
* **Files:**
  * `resources/js/frontend/pages/HowWeWork.jsx:L68, L98, L143, L173, L223`
  * `resources/js/frontend/pages/Clients.jsx:L64`

### Decision
[ Option A: Standard Section Title (Responsive 2xl to 3xl) ]

---

## 2.4 Heading 3 (H3) Style

### Option A: Card Title (Base Font Bold)
* **Classes:** `text-base font-bold uppercase tracking-tight`
* **Used in:** Home capability cards, Home competency cards, Home project cards, Services consulting cards
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L280, L380, L429`
  * `resources/js/frontend/pages/Services.jsx:L267, L290`

### Option B: Elevated Card Title (18px / lg)
* **Classes:** `text-lg font-bold uppercase tracking-tight`
* **Used in:** About Strategic Pillar cards, About Team cards, About Milestone titles
* **Files:** `resources/js/frontend/pages/About.jsx:L255, L380, L441`

### Option C: Prominent Section Subhead (20px / xl)
* **Classes:** `text-xl font-bold uppercase tracking-tight`
* **Used in:** Careers job vacancy cards, Pricing plan names, Contact section titles
* **Files:**
  * `resources/js/frontend/pages/Careers.jsx:L238`
  * `resources/js/frontend/pages/Pricing.jsx:L82`
  * `resources/js/frontend/pages/Contact.jsx:L118, L205`

### Decision
[ Option A: Card Title (Base Font Bold) ]

---

## 2.5 Body Typography Style

### Option A: Large Lead Paragraph
* **Classes:** `text-base md:text-lg font-light leading-relaxed`
* **Used in:** About hero description, FAQ intro description, Services intro
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L174`
  * `resources/js/frontend/pages/FAQ.jsx:L35`
  * `resources/js/frontend/pages/Services.jsx:L226`

### Option B: Standard Body Text
* **Classes:** `text-sm sm:text-base text-on-surface-variant leading-relaxed`
* **Used in:** About story paragraphs, How We Work introductory copy, Contact descriptions
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L195`
  * `resources/js/frontend/pages/HowWeWork.jsx:L21`
  * `resources/js/frontend/pages/Contact.jsx:L94`

### Option C: Compact Card Description
* **Classes:** `text-xs text-on-surface-variant leading-relaxed`
* **Used in:** Services card descriptions, Home capability card descriptions, Careers vacancy cards
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L283`
  * `resources/js/frontend/pages/Services.jsx:L268, L335`
  * `resources/js/frontend/pages/Careers.jsx:L239`

### Decision
[Option A: Large Lead Paragraph smaller then it and  Option B: Standard Body Text larger then it]

---

## 2.6 Small / Micro Text Style

### Option A: 10px Uppercase Monospace
* **Classes:** `text-[10px] uppercase font-mono font-bold tracking-wider`
* **Used in:** Form field labels, image verified badges, status metadata
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L531`
  * `resources/js/frontend/pages/ServiceDetail.jsx:L88, L111`
  * `resources/js/frontend/pages/Careers.jsx:L362`

### Option B: 11px Uppercase Monospace
* **Classes:** `text-[11px] font-mono font-bold uppercase tracking-wider`
* **Used in:** "Read Case Study" links, footer copyright, directive titles
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L434`
  * `resources/js/frontend/components/Footer.jsx:L97, L138`
  * `resources/js/frontend/pages/HowWeWork.jsx:L36`

### Option C: 12px / xs Uppercase Tracking Widest
* **Classes:** `text-xs font-bold uppercase tracking-widest font-mono`
* **Used in:** Eyebrows across Home, About, Services, FAQ
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L232, L564`
  * `resources/js/frontend/pages/About.jsx:L168, L245`
  * `resources/js/frontend/pages/FAQ.jsx:L33`

### Decision
[ Option A: 10px Uppercase Monospace or Option B: 11px Uppercase Monospace]

---

# 3. Spacing & Layout

## 3.1 Page Container Max-Width

### Option A: CSS Token 1280px Container
* **Classes:** `max-w-container-max mx-auto px-margin-desktop` (1280px with 48px padding)
* **Used in:** Home, About, Services, Clients, Careers
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L197, L230`
  * `resources/js/frontend/pages/About.jsx:L166, L186`
  * `resources/js/frontend/pages/Services.jsx:L222, L242`
  * `resources/js/frontend/pages/Clients.jsx:L62`

### Option B: Responsive Padding Container
* **Classes:** `max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop` (1280px with 16px mobile / 48px desktop)
* **Used in:** Services sections, FAQ, Pricing, Navbar
* **Files:**
  * `resources/js/frontend/components/Navbar.jsx:L10`
  * `resources/js/frontend/pages/Services.jsx:L241, L344, L413`
  * `resources/js/frontend/pages/FAQ.jsx:L31`
  * `resources/js/frontend/pages/Pricing.jsx:L56`

### Option C: Tailwind Max-Width 7xl Container
* **Classes:** `max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop` (1280px Tailwind constraint)
* **Used in:** Contact Page
* **Files:** `resources/js/frontend/pages/Contact.jsx:L88`

### Decision
[ use which is beetter & what is propely responsive and match formating ]

---

## 3.2 Section Vertical Padding

### Option A: Fixed 80px (py-20)
* **Classes:** `py-20` (80px top & bottom)
* **Used in:** Most Home sections, Services DSI, Services Maintenance, Footer
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L229, L255, L294, L318, L350, L413, L487, L598`
  * `resources/js/frontend/pages/Services.jsx:L344, L413`
  * `resources/js/frontend/components/Footer.jsx:L43`

### Option B: Generous 96px (py-24)
* **Classes:** `py-24` (96px top & bottom)
* **Used in:** Home Why Choose Us, all About sections, How We Work, Clients, Careers, FAQ, Pricing
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L561`
  * `resources/js/frontend/pages/About.jsx:L186, L242, L268, L337, L422`
  * `resources/js/frontend/pages/HowWeWork.jsx:L8, L53`
  * `resources/js/frontend/pages/Clients.jsx:L94, L179`
  * `resources/js/frontend/pages/Careers.jsx:L158`
  * `resources/js/frontend/pages/FAQ.jsx:L31`
  * `resources/js/frontend/pages/Pricing.jsx:L56`

### Option C: Compact 64px (py-16)
* **Classes:** `py-16` (64px top & bottom)
* **Used in:** Services category sections, Contact header
* **Files:**
  * `resources/js/frontend/pages/Services.jsx:L241, L476`
  * `resources/js/frontend/pages/Contact.jsx:L88`

### Decision
[ Option B: Generous 96px (py-24) only if suitable ]

---

## 3.3 Card Padding

### Option A: Compact 24px (p-6)
* **Classes:** `p-6` (24px all sides)
* **Used in:** Home capability cards, Home competency cards, Home project cards, Home why choose cards, Admin panels
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L275, L379, L428, L583`
  * `resources/js/frontend/pages/Services.jsx:L289`
  * `resources/js/admin/pages/Dashboard.jsx:L23, L43`

### Option B: Standard 32px (p-8)
* **Classes:** `p-8` (32px all sides)
* **Used in:** Home leaders cards, About pillar cards, About advisors, Careers cards, Pricing cards
* **Files:**
  * `resources/js/frontend/pages/Home.jsx:L329, L522`
  * `resources/js/frontend/pages/About.jsx:L251, L310`
  * `resources/js/frontend/pages/Careers.jsx:L228`
  * `resources/js/frontend/pages/Pricing.jsx:L68`

### Option C: Generous 48px (p-8 md:p-12 / p-12)
* **Classes:** `p-8 md:p-12` or `p-12` (32px to 48px)
* **Used in:** About stats card, Contact form card, Contact headquarters card, How We Work Phase 5 card
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L202`
  * `resources/js/frontend/pages/Contact.jsx:L117, L204`
  * `resources/js/frontend/pages/HowWeWork.jsx:L211`

### Decision
[ Option A: Compact 24px (p-6) ]

---

# 4. Components

## 4.1 Primary Button Style

### Option A: Flat Crimson with Monospace Font
* **Classes:** `bg-tertiary text-white text-xs font-mono font-bold px-8 py-4 rounded uppercase tracking-widest hover:bg-opacity-90 transition-colors`
* **Used in:** Home Hero
* **Files:** `resources/js/frontend/pages/Home.jsx:L207`

### Option B: Elevated Crimson with Transform Hover
* **Classes:** `bg-tertiary text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0`
* **Used in:** About Hero
* **Files:** `resources/js/frontend/pages/About.jsx:L178`

### Option C: Compact Shadowed Crimson
* **Classes:** `bg-tertiary text-white px-8 py-4 rounded font-mono font-bold text-[11px] uppercase tracking-widest shadow-md hover:brightness-110 transition-all`
* **Used in:** Services CTA
* **Files:** `resources/js/frontend/pages/Services.jsx:L525`

### Option D: Dark Primary Action (8px Radius)
* **Classes:** `py-4 bg-primary text-white rounded-lg font-bold text-xs tracking-widest uppercase hover:brightness-110 shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0`
* **Used in:** Contact Submit Form
* **Files:** `resources/js/frontend/pages/Contact.jsx:L185`

### Decision
[Option A: Flat Crimson with Monospace Font and Option D: Dark Primary Action (8px Radius)]

---

## 4.2 Secondary / Outline Button Style

### Option A: Dark Double-Border
* **Classes:** `border-2 border-primary text-primary px-8 py-4 rounded font-mono font-bold text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all`
* **Used in:** Services CTA
* **Files:** `resources/js/frontend/pages/Services.jsx:L528`

### Option B: Translucent White Border (Ghost)
* **Classes:** `border border-white/30 text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all`
* **Used in:** About Hero Ghost Button, How We Work Hero Ghost Button
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L179`
  * `resources/js/frontend/pages/HowWeWork.jsx:L26`

### Option C: Single Border Outline
* **Classes:** `border border-primary text-primary hover:bg-surface-container font-mono font-bold text-xs px-6 py-3 rounded uppercase tracking-wider`
* **Used in:** Home Competencies Cards
* **Files:** `resources/js/frontend/pages/Home.jsx:L393`

### Decision
[ Option C: Single Border Outline ]

---

## 4.3 Form Inputs

### Option A: Compact 38px Input
* **Classes:** `w-full rounded border-outline-variant/30 focus:border-primary focus:ring-1 focus:ring-primary bg-background text-sm px-4 py-2`
* **Used in:** Home Contact Form
* **Files:** `resources/js/frontend/pages/Home.jsx:L532`

### Option B: Medium 46px White Input
* **Classes:** `w-full px-4 py-3 bg-white border border-outline-variant rounded text-sm transition-all focus:border-primary focus:ring-1 focus:ring-primary`
* **Used in:** Careers Application Portal
* **Files:** `resources/js/frontend/pages/Careers.jsx:L364`

### Option C: Tall 56px Styled Input
* **Classes:** `w-full h-14 px-4 bg-background border border-outline-variant/30 rounded-lg focus:outline-none focus:border-[#4c616c] focus:ring-1 focus:ring-[#4c616c] text-on-surface text-sm transition-all`
* **Used in:** Contact Page Form
* **Files:** `resources/js/frontend/pages/Contact.jsx:L134`

### Decision
[ Option A: Compact 38px Input ]

---

## 4.4 Card Style

### Option A: Standard 8px Radius Card with Border
* **Classes:** `bg-surface-container-lowest border border-outline-variant/30 rounded-lg overflow-hidden group hover:border-primary transition-colors duration-300`
* **Used in:** Home Capabilities, Home Competencies, Home Projects
* **Files:** `resources/js/frontend/pages/Home.jsx:L272, L372, L424`

### Option B: Elevated 12px Radius White Card with Hover Shadow
* **Classes:** `bg-white p-8 rounded-xl border border-outline-variant/30 hover:shadow-xl flex flex-col group transition-all duration-300 hover:border-primary`
* **Used in:** About Strategic Pillars, About Leadership Team, FAQ questions
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L251, L354`
  * `resources/js/frontend/pages/FAQ.jsx:L44`

### Option C: 4px Radius Card with Transform Hover
* **Classes:** `bg-white border border-outline-variant p-8 rounded flex flex-col h-full cursor-pointer group hover:border-primary hover:-translate-y-1 transition-all duration-300`
* **Used in:** Careers Job Cards, Clients Solution Partners
* **Files:**
  * `resources/js/frontend/pages/Careers.jsx:L228`
  * `resources/js/frontend/pages/Clients.jsx:L69`

### Decision
[ Option B: Elevated 12px Radius White Card with Hover Shadow ]

---

## 4.5 Badge / Tag Style

### Option A: Solid Crimson Monospace Pill
* **Classes:** `bg-tertiary text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded font-mono tracking-wider shadow-sm`
* **Used in:** About Team roles, Services DSI tags, Portfolio tags
* **Files:**
  * `resources/js/frontend/pages/About.jsx:L375`
  * `resources/js/frontend/pages/Services.jsx:L371`

### Option B: Outline Crimson Pill
* **Classes:** `text-[10px] font-bold text-tertiary border border-tertiary px-2 py-0.5 rounded uppercase tracking-tighter`
* **Used in:** Careers Vacancy Type (Immediate / Full-Time)
* **Files:** `resources/js/frontend/pages/Careers.jsx:L231`

### Option C: Translucent Red Tint Pill
* **Classes:** `bg-tertiary/10 text-tertiary border border-tertiary/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider font-mono`
* **Used in:** Service Detail Operational Profile
* **Files:** `resources/js/frontend/pages/ServiceDetail.jsx:L88`

### Option D: Dark Background Sky-Blue Pill
* **Classes:** `bg-[#0b1519] border border-outline-variant/30 text-sky-400 font-bold font-mono text-xs px-3 py-1 rounded-md uppercase shadow-sm`
* **Used in:** About Milestone Timeline
* **Files:** `resources/js/frontend/pages/About.jsx:L436`

### Decision
[ Option A: Solid Crimson Monospace Pill but the bg color Charcoal Dark Navy will be better ]

---

## 4.6 Table Style

### Option A: Monospace Technical Table
* **Classes:** 
  * Header: `border-b border-outline-variant/30 text-on-surface-variant font-mono-data text-xs`
  * Body: `divide-y divide-outline-variant/10 text-white font-mono-data hover:bg-surface-container-low transition-all`
* **Used in:** Admin Compliance Table, Orders Table, Products Table, Users Table
* **Files:**
  * `resources/js/admin/pages/Dashboard.jsx:L49-L85`
  * `resources/js/admin/pages/Orders.jsx:L21-L52`
  * `resources/js/admin/pages/Products.jsx:L39-L70`
  * `resources/js/admin/pages/Users.jsx:L21-L50`

### Option B: Stacked Card Row List
* **Classes:** `p-6 flex items-start gap-4 hover:bg-surface-container/30 transition-colors divide-y divide-outline-variant/30`
* **Used in:** FAQ Manager list
* **Files:** `resources/js/admin/pages/FaqManager.jsx:L177-L211`

### Decision
[ Option A: Monospace Technical Table ]

---

## 4.7 Pagination Style

### Option A: Text-Based Prev / Next with Page Counter
* **Classes:** `px-4 py-2.5 rounded border border-outline-variant hover:border-primary text-primary disabled:opacity-30 font-bold uppercase tracking-wider bg-white font-mono text-xs`
* **Used in:** Clients Directory
* **Files:** `resources/js/frontend/pages/Clients.jsx:L114-L141`

### Option B: Numbered Square Buttons + "See All" Toggle
* **Classes:** 
  * Active: `w-10 h-10 rounded font-bold bg-primary text-white shadow-md`
  * Inactive: `w-10 h-10 rounded font-bold bg-white border border-outline-variant hover:border-primary text-primary`
  * Toggle: `bg-[#0b1519] text-sky-400 px-5 py-2.5 rounded text-xs font-bold font-mono`
* **Used in:** Careers Job Vacancies
* **Files:** `resources/js/frontend/pages/Careers.jsx:L256-L315`

### Option C: Laravel HTML Link Pills
* **Classes:** `px-3 py-1 rounded text-sm bg-surface-container text-white active:bg-primary`
* **Used in:** Admin FAQ Manager, Admin Clients Manager
* **Files:** `resources/js/admin/pages/FaqManager.jsx:L214-L237`

### Decision
[ Option A: Text-Based Prev / Next with Page Counter ]

---

## 4.8 Modal / Dialog Style

### Option A: Centered Backdrop Blur Dialog (16px Radius)
* **Classes:** 
  * Backdrop: `fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4`
  * Card: `bg-surface border border-outline-variant/30 rounded-2xl p-6 max-w-sm w-full shadow-2xl`
* **Used in:** Admin Delete Confirmation
* **Files:** `resources/js/admin/pages/FaqManager.jsx:L241-L267`

### Option B: Wide Multi-Field Entity Modal (12px Radius)
* **Classes:** `bg-surface border border-outline-variant/30 rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto`
* **Used in:** Admin Homepage Manager, Services Manager, About Manager
* **Files:** `resources/js/admin/pages/HomepageManager.jsx`

### Option C: Native Browser Dialog (`window.alert` / `window.confirm`)
* **Used in:** Contact urgent button, Careers form validation, Delete fallbacks
* **Files:**
  * `resources/js/frontend/pages/Contact.jsx:L108`
  * `resources/js/frontend/pages/Careers.jsx:L118`

### Decision
[ Option C: Native Browser Dialog (`window.alert` / `window.confirm`) ]

---

# 5. Shapes & Surfaces

## 5.1 Border Radius

### Option A: 4px Minimal System (`rounded`)
* **Value:** `4px` (`0.25rem`)
* **Used in:** Navbar dropdown, Home hero buttons, Careers cards, Clients cards, Service detail cards
* **Files:** `resources/js/frontend/components/Navbar.jsx:L36`, `Home.jsx:L207`, `Careers.jsx:L228`

### Option B: 8px Standard System (`rounded-lg`)
* **Value:** `8px` (`0.5rem` / `--radius-lg`)
* **Used in:** Home capability cards, Service DSI cards, Contact inputs, Admin form inputs, Admin action buttons
* **Files:** `resources/js/frontend/pages/Home.jsx:L272`, `Contact.jsx:L134`, `FaqManager.jsx:L106`

### Option C: 12px Elevated System (`rounded-xl`)
* **Value:** `12px` (`0.75rem` / `--radius-xl`)
* **Used in:** About story stats, About pillars, FAQ accordions, Pricing cards, Admin panel containers
* **Files:** `resources/js/frontend/pages/About.jsx:L202, L251`, `FAQ.jsx:L44`, `Pricing.jsx:L68`, `Dashboard.jsx:L23`

### Decision
[Option A: 4px Minimal System (`rounded`) ]

---

## 5.2 Shadows

### Option A: Flat System (Borders Only, No Shadows)
* **Classes:** `border border-outline-variant/30` with `shadow-none`
* **Used in:** Home process section, Services grid cards, Admin form cards
* **Files:** `resources/js/frontend/pages/Home.jsx:L272`, `Services.jsx:L278`

### Option B: Subtle Depth (`shadow-sm` on rest, `shadow-lg` on hover)
* **Classes:** `shadow-sm hover:shadow-lg transition-all duration-300`
* **Used in:** About story card, About team cards, Services consulting cards, Clients cards
* **Files:** `resources/js/frontend/pages/About.jsx:L202, L354`, `Services.jsx:L254`, `Clients.jsx:L105`

### Option C: High Elevation (`shadow-md` on rest, `shadow-xl` / `shadow-2xl` on hover)
* **Classes:** `shadow-md hover:shadow-xl` or `shadow-xl`
* **Used in:** About pillars, About CEO message, Services maintenance panel, Contact urgent callout, Modals
* **Files:** `resources/js/frontend/pages/About.jsx:L251, L271`, `Services.jsx:L424`, `Contact.jsx:L99`

### Decision
[different section different is reuired & little more adjustment like in the shadow in desktop view is okey but in mobile view no shadow ]

---

# 6. Navigation & Sidebar

## 6.1 Top Navbar

### Option A: Sticky Midnight Blue with Text Links
* **Classes:** `bg-[#0c0f24] text-[#8d9aa1] hover:text-white h-20 top-0 sticky shadow-lg z-50`
* **Used in:** Frontend Global Header
* **Files:** `resources/js/frontend/components/Navbar.jsx:L9-L64`

### Option B: Clean White Header with Dark Links
* **Classes:** `bg-white text-primary border-b border-outline-variant/30 h-20 top-0 sticky z-50`
* **Used in:** Alternative light layout concept
* **Files:** Conceptual alternative matching public page surfaces

### Decision
[Option A: Sticky Midnight Blue with Text Links ]

---

## 6.2 Admin Sidebar

### Option A: Fixed 256px Dark Sidebar with Sky-Blue Active Highlights
* **Classes:** `w-64 bg-surface border-r border-outline-variant/30 flex flex-col shrink-0` (Active: `bg-primary text-on-primary shadow-lg shadow-primary/20`)
* **Used in:** Admin Control Panel
* **Files:** `resources/js/admin/AdminApp.jsx:L45-L102`

### Option B: Collapsible Responsive Sidebar with Mobile Drawer
* **Classes:** Responsive sidebar with hamburger toggle on mobile/tablet viewports
* **Used in:** Required responsive improvement

### Decision
[Option B: Collapsible Responsive Sidebar with Mobile Drawer ]

---

# My Design Decisions

Please fill in your chosen Option (e.g., "Option A", "Option B") for each category below:

Primary Color:
[ ]

Secondary Color:
[ ]

Accent Color:
[ ]

Background:
[ ]

Surface:
[ ]

Text:
[ ]

Border:
[ ]

Heading Font:
[ ]

Body Font:
[ ]

Heading 1 (H1) Style:
[ ]

Heading 2 (H2) Style:
[ ]

Heading 3 (H3) Style:
[ ]

Body Text Style:
[ ]

Small / Micro Text:
[ ]

Primary Button Style:
[ ]

Secondary / Outline Button Style:
[ ]

Form Input Style:
[ ]

Card Style:
[ ]

Badge Style:
[ ]

Table Style:
[ ]

Pagination Style:
[ ]

Modal Style:
[ ]

Border Radius:
[ ]

Shadows & Elevation:
[ ]

Page Container Max-Width:
[ ]

Section Vertical Padding:
[ ]

Card Padding:
[ ]

Navbar Style:
[ ]

Sidebar Style:
[ ]

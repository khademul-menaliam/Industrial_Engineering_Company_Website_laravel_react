# Typography Baseline Audit

**Project:** AR Engineering Modernization  
**Document:** Typography System Audit (Baseline)  
**Status:** Audit Documented (Phase 3.1)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  

---

## 1. Verified Typography Inventory

### 1.1 Declared Font Families
| Token | Declared Family | Fallback Stack | Declared Location | Actual Usage |
| :--- | :--- | :--- | :--- | :--- |
| `--font-sans` | `'Baloo Tammudu 2'` | `ui-sans-serif, system-ui, sans-serif` | [app.css:L8](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L8) | Applied globally to `body`, headings, paragraphs, and inputs. |
| `--font-heading` | `'Baloo Tammudu 2'` | `ui-sans-serif, system-ui, sans-serif` | [app.css:L9](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L9) | Applied to all `h1-h6` tags via `@layer base`. |
| `--font-body` | `'Baloo Tammudu 2'` | `ui-sans-serif, system-ui, sans-serif` | [app.css:L10](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L10) | Global body text font. |
| `--font-mono` | `ui-monospace` | `SFMono-Regular, Menlo, Monaco, Consolas` | [app.css:L11](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L11) | Applied to technical badges, dates, ref codes, HUD indicators. |
| `bunny('Space Grotesk')`| `'Space Grotesk'` | `sans-serif` | [vite.config.js:L17](file:///c:/Users/khademul/Herd/ar_frontend/vite.config.js#L17) | Imported in Vite config but overridden by `app.css` base layer. |
| `Material Symbols`| `'Material Symbols Outlined'` | System glyphs | [frontend.blade.php:L38](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/frontend.blade.php#L38) | Global icon glyphs throughout UI. |

---

### 1.2 Font Size Scale (from `resources/css/app.css`)
| Scale Token | REM Value | Approximate Pixel Size | Observed Element Types |
| :--- | :--- | :--- | :--- |
| `--text-xs` | `0.8125rem` | `~13px` | Badges, small tags, sub-navigation, footer copyright, table headers. |
| `--text-sm` | `0.9375rem` | `~15px` | Standard body copy, table data cells, form input text, secondary notes. |
| `--text-base` | `1.0625rem` | `~17px` | Hero intro paragraphs, lead text, card headers. |
| `--text-lg` | `1.1875rem` | `~19px` | Card section titles, modal headers, service titles. |
| `--text-xl` | `1.25rem` | `~20px` | Section subheadings, logo brandmark text. |
| `--text-2xl` | `1.55rem` | `~24.8px` | `<h3>` headings, stat metric numbers. |
| `--text-3xl` | `2.05rem` | `~32.8px` | `<h2>` section titles, major metric values. |
| `--text-4xl` | `2.75rem` | `~44px` | `<h1>` sub-hero titles, page banners. |
| `--text-5xl` | `3.5rem` | `~56px` | `<h1>` primary landing hero display typography. |

---

### 1.3 Element-Specific Typography Patterns

| Element Category | Observed Classes | Font Weight | Text Transform | Letter Spacing |
| :--- | :--- | :---: | :---: | :---: |
| **Page Titles (`h1`)** | `text-3xl md:text-4xl lg:text-5xl font-bold` | `700` | `uppercase` | `tracking-tight` (`-0.025em`) |
| **Section Headings (`h2`)** | `text-2xl md:text-3xl font-bold` | `700` | `uppercase` | `tracking-tight` (`-0.025em`) |
| **Card Titles (`h3`)** | `text-lg md:text-xl font-bold` | `700` | `uppercase` | `tracking-tight` (`-0.025em`) |
| **Eyebrow Subtitles** | `font-mono text-xs font-bold` | `700` | `uppercase` | `tracking-widest` (`0.1em`) |
| **Body Paragraphs** | `text-sm md:text-base leading-relaxed` | `400` | Normal | Normal |
| **Buttons (Primary CTA)** | `font-mono font-bold text-xs` | `700` | `uppercase` | `tracking-widest` (`0.1em`) |
| **Buttons (Secondary)** | `font-mono font-bold text-xs` | `700` | `uppercase` | `tracking-wider` (`0.05em`) |
| **Navbar Links** | `font-medium text-xs` | `500` | `uppercase` | `tracking-widest` (`0.1em`) |
| **Table Headers** | `font-mono text-xs font-bold` | `700` | `uppercase` | `tracking-wider` (`0.05em`) |
| **Form Labels** | `text-xs md:text-sm font-semibold` | `600` | `uppercase` | `tracking-wider` (`0.05em`) |

---

## 2. Verified Typography Inconsistencies & Issues

### [TYPO-01] Universal Text Justification Forcing Unnatural Word Spacing
- **Verified Fact:** [resources/css/app.css:L172-L197](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L172-L197) and multiple page components enforce `text-justify: inter-word` and `text-justify` on body text.
- **Impact:** Causes severe "rivers of whitespace" and awkward word spacing on narrow columns, mobile screens, and multi-line descriptions.

### [TYPO-02] Font Selection Mismatch (Space Grotesk vs. Baloo Tammudu 2)
- **Verified Fact:** [vite.config.js:L17-L19](file:///c:/Users/khademul/Herd/ar_frontend/vite.config.js#L17-L19) downloads `Space Grotesk` from Bunny Fonts, but [app.css:L1](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L1) and [frontend.blade.php:L35](file:///c:/Users/khademul/Herd/ar_frontend/resources/views/frontend.blade.php#L35) load and enforce `Baloo Tammudu 2`.
- **Impact:** Redundant font file download overhead; `Space Grotesk` is never rendered.

### [TYPO-03] Inconsistent Heading Level Hierarchy
- **Verified Fact:** Across [Home.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Home.jsx), [About.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/About.jsx), and [Services.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Services.jsx), card headings frequently jump from `<h1>` in hero sections directly to `<h4>` on cards without intermediate `<h2>` or `<h3>` parent structures.
- **Impact:** Screen reader navigation broken; SEO heading hierarchy penalties.

---

## 3. Recommended Typography Structure (RECOMMENDATION ONLY)

> [!NOTE]
> The following is a discovery recommendation to guide future design system implementation. **Do not implement during Phase 3.**

- **Primary Font Family:** Adopt a high-legibility geometric/technical sans-serif (e.g. `Inter` or `Space Grotesk`) for UI, body, and headings.
- **Monospace Accent:** Standardize on `JetBrains Mono` or system monospace for technical specs, ref codes, and metric units.
- **Text Alignment:** Eliminate `text-justify` globally; use natural `text-left` alignment with `leading-relaxed` (`1.625`).
- **Standardized Scale:**
  - `Display / Hero`: `2.75rem` (`44px`) / `3.5rem` (`56px`), weight `700`, tracking `-0.02em`
  - `H1`: `2.25rem` (`36px`), weight `700`, tracking `-0.02em`
  - `H2`: `1.75rem` (`28px`), weight `700`, tracking `-0.01em`
  - `H3`: `1.375rem` (`22px`), weight `600`
  - `Body`: `1rem` (`16px`), line-height `1.6`, weight `400`
  - `Small / Badge`: `0.8125rem` (`13px`), weight `600`, tracking `0.05em`

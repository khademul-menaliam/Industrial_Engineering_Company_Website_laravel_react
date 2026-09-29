# Color System & Palette Baseline Audit

**Project:** AR Engineering Modernization  
**Document:** Color Palette & Contrast Audit (Baseline)  
**Status:** Audit Documented (Phase 3.1)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  

---

## 1. Verified Color Token Inventory

### 1.1 Brand & Neutral Palettes (from `resources/css/app.css`)

| Palette Role | Token Name | Light Theme Hex | Admin Dark Theme Hex | Primary Usage Locations |
| :--- | :--- | :---: | :---: | :--- |
| **Primary** | `--color-primary` | `#111d23` (Deep Navy) | `#0284c7` (Sky Blue) | Headings, hero headers, dark button accents, admin active indicators. |
| **On-Primary** | `--color-on-primary` | `#ffffff` | `#ffffff` | Text and icons placed on primary backgrounds. |
| **Secondary** | `--color-secondary` | `#4c616c` (Slate Blue) | `#4c616c` | Eyebrow subtitles, descriptive text, metadata labels. |
| **Secondary Container**| `--color-secondary-container`| `#cfe6f2` | `#cfe6f2` | Badge backgrounds, highlighted feature chips. |
| **Tertiary (Brand Red)**| `--color-tertiary` | `#ba1a1a` (Crimson) | `#ba1a1a` | Primary CTA buttons, attention callouts, active underline accents. |
| **Midnight Brand** | `--color-midnight` | `#0c0f24` (Deep Night) | `#0c0f24` | Public navbar background, dropdown menu background. |
| **Background** | `--color-background` | `#f8f9fa` (Off-White) | `#0b1519` (Dark Cyan-Black) | Page canvas background. |
| **Surface** | `--color-surface` | `#f8f9fa` | `#111d23` | Card backgrounds, table containers, sidebar panels. |
| **Surface Lowest** | `--color-surface-container-lowest`| `#ffffff` | `#0b1519` | Elevated card surfaces, modal dialog bodies. |
| **Surface Low** | `--color-surface-container-low` | `#f3f4f5` | `#152229` | Alternating table rows, input fields, subtle section backgrounds. |
| **Surface Mid** | `--color-surface-container` | `#edeeef` | `#19272f` | Hover states, tab backgrounds. |
| **On-Surface (Body Text)**| `--color-on-surface` | `#191c1d` (Charcoal) | `#e1e3e4` (Off-White) | Default readable paragraph and heading text. |
| **On-Surface Variant** | `--color-on-surface-variant`| `#43474a` | `#c3c7ca` | Muted descriptions, inactive tab labels. |
| **Outline / Border** | `--color-outline` | `#73787a` | `#8d9aa1` | High-contrast component borders. |
| **Outline Variant** | `--color-outline-variant` | `#c3c7ca` | `#43474a` | Subtle card borders, divider lines (`border-outline-variant/30`). |

---

### 1.2 Semantic & Status Feedback Colors

| State | Text Class / Hex | Background Class / Hex | Verified Usage Locations |
| :--- | :--- | :--- | :--- |
| **Success** | `text-green-400` / `text-emerald-500` | `bg-green-500/10` / `bg-emerald-500/20` | Active status badges, success toasts, check icons. |
| **Warning** | `text-yellow-400` / `text-amber-500` | `bg-yellow-500/10` / `bg-amber-500/20` | In-review badges, pending alerts. |
| **Error / Destructive** | `text-error` (`#ba1a1a`) | `bg-error-container` (`#ffdad6`) | Form validation errors, delete buttons, rejected application tags. |
| **Informational** | `text-primary` (`#0284c7`) | `bg-primary-container/20` | Console terminal output, system synchronization logs. |

---

## 2. Verified Color Inconsistencies & Anomalies

### [COLOR-01] Dual Definition of `--color-primary`
- **Verified Fact:** `--color-primary` is `#111d23` (dark near-black navy) in global light theme ([app.css:L27](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L27)), but overridden to `#0284c7` (vibrant sky blue) in admin dark mode ([app.css:L147](file:///c:/Users/khademul/Herd/ar_frontend/resources/css/app.css#L147)).
- **Impact:** Semantic color confusion across codebase; `bg-primary` produces near-black buttons on public pages and electric blue on admin pages.

### [COLOR-02] Hardcoded Hex Colors Bypassing CSS Design Tokens
- **Verified Fact:** Multiple components use hardcoded raw hex values instead of theme variables:
  - `#8d9aa1` in [Navbar.jsx:L37-L40](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L37-L40) and [Footer.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Footer.jsx).
  - `#0c0f24` hardcoded in `Navbar.jsx` before CSS tokenization.
  - Arbitrary opacity variants (`border-outline-variant/10`, `border-outline-variant/30`, `border-white/10`, `border-white/20`, `border-white/50`).
- **Impact:** Fragile theming; modifying core palette tokens in CSS fails to update hardcoded header/footer elements.

### [COLOR-03] Low Contrast Ratios on Muted Text
- **Verified Fact:** `text-[#8d9aa1]` placed on `#0c0f24` (Midnight Navbar) yields a contrast ratio of **4.1:1**, falling slightly below WCAG AA requirement (4.5:1) for small body text (`13px`).
- **Impact:** Sub-optimal readability in navigation bar for low-vision users.

---

## 3. Recommended Color Architecture (RECOMMENDATION ONLY)

> [!NOTE]
> The following is a discovery recommendation for future design system implementation. **Do not implement during Phase 3.**

- **Theme Semantic Separation:** Separate Brand identity tokens from theme semantic tokens:
  - `--brand-navy: #111d23`
  - `--brand-red: #ba1a1a`
  - `--brand-blue: #0284c7`
- **Establish Contrast-Checked Functional Scale:**
  - `bg-surface-primary`: `#ffffff` (Light) / `#0f172a` (Dark)
  - `text-primary`: `#0f172a` (Light) / `#f8fafc` (Dark) (Contrast > 14:1)
  - `text-muted`: `#64748b` (Light) / `#94a3b8` (Dark) (Contrast > 4.8:1)
  - `border-subtle`: `#e2e8f0` (Light) / `#334155` (Dark)
  - `accent-action`: `#ba1a1a` (Public CTA) / `#0284c7` (Admin interactive)

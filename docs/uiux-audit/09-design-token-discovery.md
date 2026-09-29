# Design Token Discovery & Candidate Taxonomy

**Project:** AR Engineering Modernization  
**Document:** Design Token Discovery (Baseline)  
**Status:** Discovery Documented (Phase 3.1)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  

---

## 1. Candidate Color Design Tokens

### 1.1 Brand Identity Tokens (Constant across themes)
```css
/* Core Brand Hues */
--brand-navy-950: #0c0f24;  /* Midnight Header/Footer */
--brand-navy-900: #111d23;  /* Primary Deep Industrial Navy */
--brand-slate-600: #4c616c; /* Secondary Technical Slate */
--brand-crimson-600: #ba1a1a; /* Tertiary AR Engineering Crimson */
--brand-crimson-700: #93000a; /* Dark Crimson / Error */
--brand-blue-500: #0284c7;  /* Admin Interactive Sky Blue */
--brand-cyan-100: #cfe6f2;  /* Secondary Container Tint */
```

---

### 1.2 Theme-Specific Semantic Tokens

#### Public Light Theme (Default)
```css
--color-bg-canvas: #f8f9fa;
--color-bg-surface-primary: #ffffff;
--color-bg-surface-secondary: #f3f4f5;
--color-bg-surface-tertiary: #edeeef;

--color-text-primary: #191c1d;
--color-text-secondary: #4c616c;
--color-text-muted: #73787a;
--color-text-inverse: #ffffff;

--color-border-subtle: rgba(195, 199, 202, 0.3); /* border-outline-variant/30 */
--color-border-strong: #73787a;
--color-border-focus: #111d23;

--color-action-primary: #ba1a1a;
--color-action-primary-hover: #93000a;
--color-action-secondary: #111d23;
```

#### Admin Dark Theme
```css
--admin-bg-canvas: #0b1519;
--admin-bg-surface: #111d23;
--admin-bg-surface-raised: #152229;
--admin-bg-surface-elevated: #19272f;

--admin-text-primary: #e1e3e4;
--admin-text-secondary: #c3c7ca;
--admin-text-muted: #8d9aa1;

--admin-border-subtle: rgba(67, 71, 74, 0.4);
--admin-border-strong: #8d9aa1;
--admin-border-focus: #0284c7;

--admin-action-primary: #0284c7;
--admin-action-primary-hover: #0369a1;
--admin-action-danger: #ba1a1a;
```

---

## 2. Candidate Typography Design Tokens

### 2.1 Font Family Tokens
```css
--font-family-primary: 'Inter', ui-sans-serif, system-ui, sans-serif;
--font-family-display: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
--font-family-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
```

---

### 2.2 Font Size & Line Height Tokens
```css
--font-size-xs: 0.8125rem;  /* 13px */  --line-height-xs: 1.125rem; /* 18px */
--font-size-sm: 0.9375rem;  /* 15px */  --line-height-sm: 1.375rem; /* 22px */
--font-size-base: 1rem;     /* 16px */  --line-height-base: 1.625rem;/* 26px */
--font-size-lg: 1.125rem;   /* 18px */  --line-height-lg: 1.75rem;  /* 28px */
--font-size-xl: 1.25rem;    /* 20px */  --line-height-xl: 1.875rem; /* 30px */
--font-size-2xl: 1.5rem;    /* 24px */  --line-height-2xl: 2rem;    /* 32px */
--font-size-3xl: 2rem;      /* 32px */  --line-height-3xl: 2.5rem;  /* 40px */
--font-size-4xl: 2.5rem;    /* 40px */  --line-height-4xl: 3rem;    /* 48px */
--font-size-5xl: 3.5rem;    /* 56px */  --line-height-5xl: 4rem;    /* 64px */
```

---

### 2.3 Font Weight & Letter Spacing Tokens
```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

--letter-spacing-tight: -0.02em;
--letter-spacing-normal: 0em;
--letter-spacing-wide: 0.05em;
--letter-spacing-widest: 0.1em;
```

---

## 3. Candidate Spacing & Dimension Tokens

### 3.1 Spacing Scale (8px Grid with 4px Sub-step)
```css
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem;  /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem;    /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem;  /* 24px */
--space-8: 2rem;    /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem;   /* 48px */
--space-16: 4rem;   /* 64px */
--space-20: 5rem;   /* 80px */
--space-24: 6rem;   /* 96px */
--space-32: 8rem;   /* 128px */
```

---

### 3.2 Layout Sizing Tokens
```css
--container-max-width: 1280px;
--header-height: 80px;
--sidebar-width: 256px;
--modal-max-width-sm: 480px;
--modal-max-width-md: 640px;
--modal-max-width-lg: 800px;
```

---

## 4. Candidate Shape, Border & Elevation Tokens

### 4.1 Border Radius Tokens
```css
--radius-none: 0px;
--radius-xs: 2px;
--radius-sm: 4px;   /* Standard card & input radius */
--radius-md: 6px;
--radius-lg: 8px;   /* Admin modal & card radius */
--radius-xl: 12px;  /* Login container radius */
--radius-full: 9999px; /* Pill badges and circular avatars */
```

---

### 4.2 Elevation & Shadow Tokens
```css
--shadow-none: none;
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
--shadow-glow-crimson: 0 10px 25px -5px rgba(186, 26, 26, 0.3);
--shadow-glow-blue: 0 10px 25px -5px rgba(2, 132, 199, 0.3);
```

---

## 5. Candidate Responsive Breakpoints
```css
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet portrait */
--breakpoint-lg: 1024px;  /* Tablet landscape / Small laptop */
--breakpoint-xl: 1280px;  /* Standard Desktop */
--breakpoint-2xl: 1536px; /* High-res Large Desktop */
```

# User Experience (UX) Flow & Interaction Baseline Audit

**Project:** AR Engineering Modernization  
**Document:** UX Flow & Usability Friction Audit (Baseline)  
**Status:** Audit Documented (Phase 3.1)  
**Date:** September 2026  
**Auditor:** Antigravity AI Engineering Suite  
**Reference Baseline:** [06-user-flow-inventory.md](file:///c:/Users/khademul/Herd/ar_frontend/docs/product-baseline/06-user-flow-inventory.md)  

---

## 1. Flow-by-Flow Usability & Interaction Friction Analysis

### FLOW-PUB-01: Public Homepage Discovery & Navigation
- **Documented Flow:** User loads `/`, views hero slides, scans capabilities, leadership, and partners, then clicks outbound links or downloads PDF profile.
- **Usability Observations:**
  - **Strengths:** Smooth infinite marquee, responsive hero carousel, clean card layout.
  - **Friction Points:**
    1. *Abrupt Carousel Transition:* Hero carousel transitions without progress bar indicator showing when the next slide will change.
    2. *Competency Links Ambiguity:* Competency cards have a generic "View Details" button linking vaguely to `/services` instead of deep-linking to the specific service discipline.
    3. *Marquee Interaction:* Marquee pauses on hover on desktop, but cannot be dragged or paused on touch devices.
- **UX Rating:** **GOOD (Minor visual polish needed)**

---

### FLOW-PUB-02: Service Discovery & Specification Inspection
- **Documented Flow:** User visits `/services`, filters by category, clicks a card, lands on `/services/:slug`, reviews specs, and clicks "Inquire About This Service".
- **Usability Observations:**
  - **Strengths:** High technical fidelity on detail page; clean specification table.
  - **Friction Points:**
    1. *Context Loss on Inquiry Redirect:* When user clicks "Inquire About This Service" on `/services/fire-pump-systems`, they are redirected to `/contact` with a completely blank form. The target service is **not** pre-selected in the department dropdown or subject field, forcing the user to re-type the service name manually.
    2. *Mobile Category Filter Concealment:* Category filter buttons on mobile overflow horizontally with a hidden scrollbar, meaning users may not realize other categories exist.
- **UX Rating:** **FAIR (Context loss on inquiry transition)**

---

### FLOW-PUB-03: Corporate Inquiry Submission
- **Documented Flow:** User completes name, email, department, details, and clicks "Transmit Inquiry".
- **Usability Observations:**
  - **Strengths:** Clear validation feedback; immediate success confirmation alert.
  - **Friction Points:**
    1. *Missing Loading State on Submit Button:* While the network request is in flight, the "Transmit Inquiry" button remains active without a spinner or disabled state, allowing users to accidentally double-click and submit duplicate inquiries.
    2. *Lack of Expected Follow-up Timeline:* The success message ("Your safety or project inquiry has been transmitted successfully.") does not state expected response turnaround (e.g. "Our engineering team will respond within 24–48 hours").
- **UX Rating:** **GOOD (Minor submission feedback improvements needed)**

---

### FLOW-PUB-04: Job Vacancy Application Submission
- **Documented Flow:** User visits `/careers`, opens a vacancy, clicks "Apply Now", fills modal form, attaches resume, and submits.
- **Usability Observations:**
  - **Strengths:** Modal smoothly pre-populates target position title.
  - **Friction Points:**
    1. *Branding Copy Confusion:* The success dialog reads: *"Application transmitted successfully to Titan HR."* This starter-theme copy error confuses applicants expecting confirmation from AR Engineering.
    2. *File Upload Drag-and-Drop Absence:* File input is a standard native file picker without drag-and-drop zone or visual file size/progress indicator.
- **UX Rating:** **FAIR (Brand copy error & basic file upload interaction)**

---

### FLOW-PUB-08: Portfolio / Case Study Exploration
- **Documented Flow:** User navigates to `/portfolio`, filters projects, and opens inspection modal.
- **Usability Observations:**
  - **Friction Points:**
    1. *Dead End in Navigation:* Navbar commented out the Projects link (`{/* <Link ... to="/portfolio">Projects</Link> */}`) in [Navbar.jsx:L38](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L38), making `/portfolio` an orphaned route only reachable if a user clicks a project card from the homepage.
    2. *Disconnected Data:* All projects in the modal are static text that cannot be updated from the admin CMS.
- **UX Rating:** **POOR (Orphaned navigation link & static data)**

---

### FLOW-ADM-01: Admin Login & Session Initiation
- **Documented Flow:** Admin navigates to `/admin-portal/login`, submits credentials, and is redirected to dashboard.
- **Usability Observations:**
  - **Friction Points:**
    1. *Full Page Reload on Submit:* Login form is a classic Blade POST form rather than a seamless client-side SPA authentication transition, causing a full page white flash.
- **UX Rating:** **GOOD**

---

### FLOW-ADM-02: Homepage Dynamic CMS Management
- **Documented Flow:** Admin selects tab, updates settings or opens modal to edit slides/leaders/competencies, and saves.
- **Usability Observations:**
  - **Strengths:** Live updates reflected on public pages; inline active status toggles.
  - **Friction Points:**
    1. *Monolithic UI Lag:* Managing 7 tabs in a single 1,400-line component causes typing input latency in textareas.
    2. *Toast Obscuration:* Success toast banner appears top-right and occasionally overlaps the modal close button.
    3. *Image Upload Feedback:* When selecting a new image file, there is no thumbnail preview before submitting the form.
- **UX Rating:** **FAIR (Component lag & missing image preview)**

---

### FLOW-ADM-05: System Maintenance Console
- **Documented Flow:** Admin opens `/admin-portal/system-commands`, enters secondary password, and clicks maintenance buttons.
- **Usability Observations:**
  - **Strengths:** High-contrast terminal output stream.
  - **Friction Points:**
    1. *Password Re-prompting:* Password must be re-entered on page reload because verification state is stored purely in React component local memory.
    2. *Heavy Build Lockup:* Clicking `Build Assets (Vite)` runs synchronous `npm run build`, causing the browser tab to hang for 30–60 seconds before terminal output appears.
- **UX Rating:** **FAIR (Long-running process UI freeze)**

---

## 2. Usability & Interaction Findings Summary

| Finding ID | Category | Flow / Screen | Description & Evidence | Severity |
| :--- | :--- | :--- | :--- | :---: |
| **[UX-01]** | Data Context Loss | `FLOW-PUB-02` $\rightarrow$ `SCR-PUB-09` | Clicking "Inquire About This Service" on service detail page leaves contact form blank with no pre-selected service context. | **HIGH** |
| **[UX-02]** | Brand Copy Error | `FLOW-PUB-04` $\rightarrow$ `SCR-PUB-07` | Application submission confirmation message references "Titan HR" instead of "AR Engineering". | **HIGH** |
| **[UX-03]** | Orphaned Navigation | `FLOW-PUB-08` $\rightarrow$ [Navbar.jsx:L38](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/components/Navbar.jsx#L38) | Projects nav link is commented out in desktop and mobile header navigation. | **MEDIUM** |
| **[UX-04]** | Missing Double-Click Guard | `FLOW-PUB-03` $\rightarrow$ [Contact.jsx](file:///c:/Users/khademul/Herd/ar_frontend/resources/js/frontend/pages/Contact.jsx) | Submit button lacks spinner / disabled state during API transit. | **MEDIUM** |
| **[UX-05]** | Missing Image Upload Preview | Admin CMS Managers | Image file inputs in admin modals show raw filename strings without visual thumbnail preview before saving. | **MEDIUM** |
| **[UX-06]** | Non-Functional Admin Tabs | `SCR-ADM-10` to `SCR-ADM-16` | 8 admin navigation items (`Products`, `Orders`, `Users`, etc.) lead to non-functional dummy screens. | **MEDIUM** |

---

## 3. Recommended UX Improvements (RECOMMENDATION ONLY)

> [!NOTE]
> The following is a discovery recommendation for future design system implementation. **Do not implement during Phase 3.**

1. **Contextual Inquiry Forwarding:** Pass service name as URL query parameter (`/contact?service=fire-pump-systems`) and pre-populate the Contact form subject and department automatically.
2. **Branding Normalization:** Correct all leftover starter template copy ("Titan HR", "Titan Precision", "Apex Heavy Industries").
3. **Form Submitting State:** Disable submit buttons and display inline spinner animation (`Submitting...`) on all form submissions.
4. **Image Upload Dropzones:** Implement drag-and-drop file upload zones with instant local object URL thumbnail previews (`URL.createObjectURL(file)`).
5. **Navigational Cleanliness:** Either implement real backend support for the 8 dummy admin tabs or cleanly remove them from the sidebar.

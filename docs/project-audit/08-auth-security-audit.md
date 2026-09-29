# Authentication & Security Baseline Audit

**Project:** AR Engineering Modernization (Laravel + React)  
**Audit Stage:** Phase 1 — Authentication & Security Audit  
**Date:** September 2026  

---

## 1. Authentication & Authorization Mechanism

- **Authentication Guard:** Laravel default `web` session guard ([config/auth.php](file:///c:/Users/khademul/Herd/ar_frontend/config/auth.php)).
- **Session Storage:** Database driver ([config/session.php](file:///c:/Users/khademul/Herd/ar_frontend/config/session.php)).
- **Protection Mechanism:** `auth` middleware applied to `/admin-portal` and `/api/admin/*` routes in [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L75).
- **Secondary Challenge:** Secondary password challenge in [CommandController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/Admin/CommandController.php) for running shell commands.
- **Roles & Permissions:** None implemented. Any authenticated user in `users` table possesses full unrestricted root administrative privileges across all endpoints.

---

## 2. Security Findings & Vulnerabilities

### [SEC-01] Information Disclosure / Draft Bypass via Unauthenticated `?admin=1` Query
- **Severity:** HIGH
- **Location:** [app/Http/Controllers/HomeController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/HomeController.php#L22-L38)
- **Description:** 
  ```php
  $isAdmin = $request->has('admin');
  if (!$isAdmin) {
      $slidesQuery->where('is_active', true);
      // ...
  }
  ```
  The endpoint checks solely if the URL contains the `admin` query parameter (`?admin=1`) without verifying whether the user is actually authenticated via `Auth::check()`.
- **Impact:** Any public unauthenticated user or automated scraper can access hidden, unreleased, or deactivated slides, leaders, services, and projects by appending `?admin=1`.

### [SEC-02] Insecure File Storage of Sensitive Job Applications (PII Exposure)
- **Severity:** HIGH
- **Location:** [app/Http/Controllers/CareersPageController.php](file:///c:/Users/khademul/Herd/ar_frontend/app/Http/Controllers/CareersPageController.php#L47-L50)
- **Description:** 
  ```php
  $path = $request->file('dossier')->store('dossiers', 'public');
  $dossierPath = '/storage/' . $path;
  ```
  Uploaded resume files (dossiers) containing sensitive personal identifiable information (full names, phone numbers, home addresses, employment histories) are stored in the publicly accessible disk (`storage/app/public/dossiers/`).
- **Impact:** Anyone who knows or discovers the URL can download candidates' resumes directly without authentication.
- **Remediation Direction:** Store resumes on the private disk (`local` or private S3 bucket) and stream them to authenticated administrators via a secure download endpoint with authorization checks.

### [SEC-03] Missing Rate Limiting on Authentication & Public Submission Forms
- **Severity:** MEDIUM
- **Location:** 
  - Login Route: [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L71) (`/admin-portal/login`)
  - Contact Submit: [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L56) (`/api/contact/submit`)
  - Career Apply: [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L58) (`/api/careers/apply`)
- **Description:** None of these endpoints have `throttle` middleware attached.
- **Impact:** Susceptible to brute-force credential stuffing attacks against the admin portal and automated spam bots flooding the database with fake inquiries and multi-megabyte file uploads.

### [SEC-04] CSRF Vulnerability on Administrative Logout
- **Severity:** LOW
- **Location:** [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L72)
- **Description:**
  ```php
  Route::match(['get', 'post'], '/admin-portal/logout', [AuthController::class, 'logout'])->name('logout');
  ```
  Accepting HTTP `GET` requests on logout allows attackers to trigger unwanted logout of logged-in administrators via embedded `<img>` or `<iframe>` tags.
- **Remediation Direction:** Restrict logout strictly to HTTP `POST` with valid CSRF tokens.

### [SEC-05] Path Traversal & Uncapped Memory in Shared Hosting Media Route
- **Severity:** MEDIUM
- **Location:** [routes/web.php](file:///c:/Users/khademul/Herd/ar_frontend/routes/web.php#L33-L47)
- **Description:**
  ```php
  Route::get('{prefix}/{path}', function ($prefix, $path) {
      $filePath = storage_path('app/public/' . $path);
      if (!File::exists($filePath)) {
          abort(404);
      }
      $file = File::get($filePath);
      // ...
  })->where('prefix', '(storage|app-media)')->where('path', '.*');
  ```
  The closure uses `File::get($filePath)` which reads entire binary files into PHP process memory before returning a response, rather than streaming with `response()->file()`.
- **Impact:** Memory exhaustion when streaming large PDF catalogs or high-res images, plus potential directory traversal risks if `$path` is not canonicalized.

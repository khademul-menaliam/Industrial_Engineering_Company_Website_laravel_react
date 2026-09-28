# AR Engineering — Deployment & Search Console SEO Guide

This guide provides step-by-step instructions for completing post-deployment SEO configuration, domain verification, sitemap submission, and indexing monitoring for the AR Engineering platform.

---

## 1. Project & Current Audit Summary

- **Project Name**: AR Engineering
- **Framework & Architecture**: Laravel + React (Single Page Application - CSR)
- **Total Discovered Routes**: 22
- **Verified SEO Page Candidates**: 11
- **Excluded Routes**: 11 (API Endpoints, Admin Portal, Authentication, Storage Assets)
- **Production Domain Status**: `UNRESOLVED` (Pending User Input)
- **Sitemap File Status**: `pending_domain` (Deferred until production website domain is configured)

---

## 2. Domain Resolution & Sitemap Generation Protocol

Currently, the production domain is set to `UNRESOLVED` because the environment contains a local development URL (`http://ar_frontend.test`).

### Step A: Configure Production Domain
Update `system-docs/seo-config.json` with your production domain once established:
```json
{
  "project": {
    "domain": "https://www.arengineering.com"
  }
}
```

### Step B: Generate Production Sitemap
Once the domain is set in `seo-config.json`, run the SEO Audit tool again. It will automatically build and validate `public/sitemap.xml` containing absolute URLs for all 11 verified SEO page candidates:
- `https://www.arengineering.com/`
- `https://www.arengineering.com/about`
- `https://www.arengineering.com/services`
- `https://www.arengineering.com/services/:slug` (expanded with production DB records)
- `https://www.arengineering.com/how-we-work`
- `https://www.arengineering.com/clients`
- `https://www.arengineering.com/careers`
- `https://www.arengineering.com/portfolio`
- `https://www.arengineering.com/contact`
- `https://www.arengineering.com/faq`
- `https://www.arengineering.com/project-demo`

---

## 3. Domain Ownership Verification

### Google Search Console (GSC)
1. Navigate to [Google Search Console](https://search.google.com/search-console).
2. Select **Domain** property type and enter your domain (e.g. `arengineering.com`).
3. Add the provided DNS `TXT` record to your domain registrar (e.g. Namecheap, Cloudflare, GoDaddy):
   - **Type**: `TXT`
   - **Host/Name**: `@`
   - **Value**: `google-site-verification=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`
4. Click **Verify**.

### Bing Webmaster Tools
1. Access [Bing Webmaster Tools](https://www.bing.com/webmasters).
2. Choose **Import from Google Search Console** for instant verification, or add DNS TXT record manually.

---

## 4. Sitemap Submission Protocol

Once domain ownership is verified and `public/sitemap.xml` is generated:

1. **Submit in Google Search Console**:
   - Go to **Indexing -> Sitemaps**.
   - Enter: `sitemap.xml`
   - Click **Submit** and verify status shows **Success**.

2. **Submit in Bing Webmaster Tools**:
   - Go to **Sitemaps -> Submit Sitemap**.
   - Enter full URL: `https://www.arengineering.com/sitemap.xml`

---

## 5. Post-Deployment Audit Checklist

Perform these checks 24 to 48 hours after launching to production:

| Category | Verification Item | Method / Tool | Expected Result |
| :--- | :--- | :--- | :--- |
| **Crawl Control** | `robots.txt` access | Visit `/robots.txt` | HTTP 200; disallows `/admin-portal/` & `/api/` |
| **Sitemap** | `sitemap.xml` access | Visit `/sitemap.xml` | HTTP 200; valid XML listing 11 SEO candidates |
| **Canonical Tags** | Canonical URL verification | Inspect HTML `<head>` | Canonical tags match production URLs |
| **Indexing** | Coverage check | GSC -> Indexing -> Pages | No unexpected indexing exclusions |
| **Structured Data** | JSON-LD schema check | [Rich Results Test](https://search.google.com/test/rich-results) | Valid `Organization` schema |
| **Core Web Vitals** | Performance check | [PageSpeed Insights](https://pagespeed.web.dev/) | Good scores for LCP, CLS, INP |

---

## 6. Continuous Health & Search Performance Monitoring

- **Weekly**: Check GSC Page Indexing reports for crawl errors or missing pages.
- **Monthly**: Review Search Console Performance metrics (Impressions, Clicks, Average Position).
- **On Content Changes**: Re-run the SEO audit tool whenever routes or page content change.

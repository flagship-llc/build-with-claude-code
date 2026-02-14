# Pre-Deployment Checklist

Before publishing your app, check two things: security and infrastructure.

---

## Security Check

If you're deploying your app publicly, a security review is essential. Ask Claude Code to perform a security audit.

**Example prompt for Claude Code**:

```
Please perform a comprehensive security audit of this application.
Check the following areas and list any issues found, ranked by severity (Critical / High / Medium / Low):

- Authentication and authorization flaws
- Input validation issues (XSS, SQL injection, etc.)
- Hardcoded API keys or secrets
- CORS configuration problems
- Known vulnerabilities in dependencies
- Any other OWASP Top 10 items
```

**When you get the results**:

1. Address **Critical / High** issues first
2. Tell Claude Code "Please fix this issue" and it will suggest the fix
3. If short on time, at least resolve all Critical issues
4. Medium / Low issues can often be addressed after launch

**Common findings and fixes**:

| Finding | Fix |
|---------|-----|
| API keys hardcoded in source | Move to environment variables (`.env`) and add to `.gitignore` |
| User input rendered without escaping | Add sanitization (XSS prevention) |
| Stack traces shown in error messages | Show user-friendly messages only in production |
| API endpoints accessible without authentication | Add authentication middleware |

---

## Repository Hygiene

Before pushing code to GitHub, make sure no unnecessary files or sensitive information are included.

### Check `.gitignore`

Verify that the following files are excluded from Git tracking.

```
Please check this project's .gitignore file.
Verify that .env files, API keys, node_modules, and build artifacts
are excluded from Git tracking.
Fix any gaps you find.
```

**Files to watch out for**:
- `.env` / `.env.local` — Contains API keys and secrets
- `node_modules/` — Dependencies (very large)
- `.next/` / `dist/` / `build/` — Build artifacts

If you've already committed these files, ask Claude Code: "Remove the .env file from Git history."

### Create a README

Write a basic README for your future self and others.

```
Please create a README.md for this project.
Include:
- Project overview (what the app does)
- Setup instructions (npm install, environment variables, etc.)
- How to run it
```

---

## Pre-Launch Quality Check

### Error Handling

Make sure your app doesn't show blank screens or stack traces in production.

```
Please review this app's error handling.
- Are user-friendly messages shown when API errors occur?
- Are stack traces hidden in production?
- Is there a fallback screen for unexpected errors?
```

### Responsive Design

Important for demos too. Check that the layout doesn't break on phones or tablets.

```
Please check this app's responsive design.
Verify that the layout looks correct at mobile (375px),
tablet (768px), and desktop (1280px) widths.
```

### License Check

Review the licenses of libraries you're using. This is especially important for commercial or internal use.

```
Please list the licenses of all packages used in this project.
Flag any that have restrictions on commercial use.
```

**Common licenses**:

| License | Commercial Use | Notes |
|---------|---------------|-------|
| MIT | OK | Almost no restrictions. Most common |
| Apache 2.0 | OK | Includes patent grant |
| GPL | Caution | Derivative works must also be GPL |
| AGPL | Caution | Source disclosure required even for server-side use |

---

## Choosing a Deployment Platform

Choose the right platform based on your app type.

| App Type | Recommended Platform | Notes |
|----------|---------------------|-------|
| Static site / SPA | Vercel, Cloudflare Pages | Free tier is sufficient. Vercel requires Pro plan (paid) for private repos |
| Full-stack (Next.js, etc.) | Vercel, Railway | Vercel has excellent Next.js integration |
| Backend API | Railway, Render | Free tiers available. GCP / AWS for production |
| With database | Supabase, PlanetScale | BaaS eliminates server management |

**Deployment tips**:

- **Environment variables**: Register your local `.env` values in the deployment platform's settings
- **Build check**: Make sure `npm run build` succeeds locally before deploying
- **Domain**: Each service automatically provides a URL (custom domains can be configured later)

**Example prompt to get help with deployment**:

```
I want to deploy this app to Vercel.
Please check the required configuration files and walk me through the deployment steps.
```

---

## Platform Guide

### Vercel

Best integration with Next.js. Zero-config deployment.

**Best for**: Next.js / React frontends, full-stack apps

**If you need a database**:
- **Vercel Postgres** (powered by Neon) — Create directly from the Vercel dashboard with auto-configured environment variables. Easiest option
- **Supabase** — PostgreSQL + auth + realtime features bundled. Generous free tier (500MB)
- **PlanetScale** — Serverless MySQL. Branch-based schema changes for safe migrations

**Deployment steps**:
1. Push your repo to GitHub
2. Import your repo at [vercel.com](https://vercel.com)
3. Configure environment variables
4. Click Deploy

**Note**: The Hobby plan (free) only supports public repos. Private repos require the Pro plan ($20/month).

### Cloudflare Pages

Ideal for static sites and edge-powered web apps. Very generous free tier.

**Best for**: Static sites, SPAs, lightweight web apps

**If you need a database**:
- **Cloudflare D1** — SQLite-based DB running on Cloudflare's edge. Stays within the same ecosystem for easy setup. Free tier available
- **Turso** — Edge-compatible SQLite (libSQL). Works well with Cloudflare Workers
- **Supabase** — Connect as an external service via REST API

**Deployment steps**:
1. Push your repo to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → "Create a project"
3. Connect your repo and configure build settings
4. Click Deploy

### Railway

Best for backend APIs and apps that need databases. Docker-compatible and flexible.

**Best for**: Backend APIs, full-stack apps, apps requiring a database

**If you need a database**:
- **Railway's built-in PostgreSQL / MySQL / Redis** — Add with one click. Managed within the same project, connection details auto-configured
- Rarely need to use external DB services

**Deployment steps**:
1. Connect GitHub at [railway.app](https://railway.app)
2. Select your repo
3. Add a database via "+ New" if needed
4. Configure environment variables for auto-deploy

**Note**: Free credit ($5/month) then paid. Hobby plan is $5/month.

### Render

Simple setup, popular Heroku alternative.

**Best for**: Backend APIs, static sites, cron jobs

**If you need a database**:
- **Render PostgreSQL** — Create from the dashboard. Free tier available (90 days, 256MB)
- **Supabase / Neon** — Use external free DB services for long-term projects

**Deployment steps**:
1. Connect GitHub at [render.com](https://render.com)
2. "New +" → Web Service (API) or Static Site
3. Configure build and start commands
4. Set environment variables and deploy

### Google Cloud (GCP)

Enterprise-grade cloud platform. Offers an Always Free tier, scaling from small to large.

**Best for**: Production business systems, large-scale apps, apps with ML components

**Main deployment options**:
- **Cloud Run** — Run containers serverlessly. Just provide a Docker image and it auto-scales. Most recommended
- **App Engine** — PaaS. Just push code to deploy. Supports Node.js, Python, etc.
- **Firebase Hosting** — For static sites and SPAs. Fast CDN delivery

**If you need a database**:
- **Cloud SQL** (PostgreSQL / MySQL) — Managed relational DB. Production-grade. No Always Free tier but highly reliable
- **Firestore** — NoSQL document DB. Generous free tier (1GB storage, 50,000 reads/day). Easy Firebase integration
- **AlloyDB** — High-performance PostgreSQL-compatible DB for large-scale data

**Deployment steps (Cloud Run)**:
1. Create a project at [Google Cloud Console](https://console.cloud.google.com)
2. Install `gcloud` CLI (ask Claude Code: "Install the gcloud CLI")
3. Prepare a Dockerfile (ask Claude Code to create one)
4. Deploy with `gcloud run deploy`

**Note**: Always Free tier includes Cloud Run (2M requests/month) and Firestore (1GB), but misconfiguration can incur charges. Always set up budget alerts.

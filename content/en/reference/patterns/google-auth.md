# Google Authentication Guide

If you want to add login functionality to your app, Google Auth (OAuth 2.0) is one of the easiest options. This guide covers GCP setup steps and sample prompts for implementing it with Claude Code.

---

## Preparing Your GCP Account

### For Company Apps

If you're building an app for work, use your **company's GCP project**.

- Ask an admin (or mentor) for project access
- Use an existing project if available
- Otherwise, ask an admin to create a new project

### For Personal Apps

For personal projects, you can **sign up for GCP for free** with your personal Google account.

**Free tier overview**:

| Resource | Free Tier |
|----------|-----------|
| OAuth 2.0 Authentication | Free (no API call limits) |
| Cloud Run | 2 million requests/month |
| Firestore | 1GB storage, 50,000 reads/day |
| Cloud SQL | No Always Free tier (paid) |

OAuth authentication itself is free. Authentication alone does not incur GCP charges.

**How to sign up**:
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Sign in with your Google account
3. Accept terms of service
4. Create a new project

---

## Setting Up Google OAuth 2.0

### 1. Configure OAuth Consent Screen

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. From the left menu, select "APIs & Services" > "OAuth consent screen"
3. Choose User Type:
   - **Internal**: Only users in your Google Workspace (company Google accounts). For internal tools
   - **External**: Anyone can log in. For public-facing apps
4. Enter app name, support email, and developer contact
5. Scopes: Add `email` and `profile` (needed for basic user info)

### 2. Create OAuth Client ID

1. Select "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Select application type:
   - **Web application**: Standard web apps
4. Set redirect URIs:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://your-app.vercel.app/api/auth/callback/google`
5. Note down the **Client ID** and **Client Secret**

### 3. Save as Environment Variables

Save the client information in your project's `.env.local` file:

```
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_SECRET=your-client-secret-here
```

Make sure `.env.local` is included in `.gitignore`.

---

## Designing Access Control

When implementing Google Auth, you need to decide **who can log in**.

### Pattern 1: Open Signup

Anyone with a Google account can sign up and log in.

**Best for**: Public apps, personal projects

**Sample prompt for Claude Code**:

```
Add Google authentication to this app.
Use NextAuth.js (Auth.js) so that anyone with a Google account can sign up and log in.
Use GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables.
```

### Pattern 2: Domain Restriction

Only accounts from your company's Google Workspace domain (e.g., `@example.com`) can log in.

**Best for**: Internal tools, team apps

**Sample prompt for Claude Code**:

```
Add Google authentication to this app.
Use NextAuth.js (Auth.js).
Restrict login to Google accounts from the @example.com domain only.
If someone tries to log in with a different domain, show an error message and deny login.
Use GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables.
Set the allowed domain via an ALLOWED_DOMAIN environment variable.
```

### Pattern 3: Email Whitelist

Only pre-registered email addresses can log in (whitelist approach).

**Best for**: Limited-user apps, invitation-only services

**Sample prompt for Claude Code**:

```
Add Google authentication to this app.
Use NextAuth.js (Auth.js).
Control which users can log in using a whitelist.
The list of allowed email addresses is set in the ALLOWED_EMAILS environment variable, comma-separated.
Example: ALLOWED_EMAILS=user1@gmail.com,user2@example.com
If an email not on the list tries to log in, display "Access not authorized".
```

### Pattern Comparison

| Pattern | Pros | Cons | Implementation Effort |
|---------|------|------|----------------------|
| Open signup | Easy to set up | Unwanted users can also log in | Low |
| Domain restriction | Automatically limits to internal users | Requires Google Workspace | Low |
| Email whitelist | Fine-grained control | Need to update config when adding users | Medium |

---

## Implementation Tips

### Choosing a Library

For Next.js, **NextAuth.js (Auth.js)** is the most popular choice.

```
Add NextAuth.js v5 to this Next.js app and set up Google OAuth authentication.
Add sign-in and sign-out buttons, and toggle the display based on login state.
```

### Deployment Notes

When deploying to production, don't forget these steps:

1. **Add redirect URI**: In GCP OAuth settings, add the production callback URI
2. **Set environment variables**: Register `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` in your deployment platform (Vercel, etc.)
3. **Set NEXTAUTH_URL**: Add `NEXTAUTH_URL=https://your-app.vercel.app` to environment variables
4. **Set NEXTAUTH_SECRET**: Generate a random string with `openssl rand -base64 32` and set it as `NEXTAUTH_SECRET`

**Sample prompt for Claude Code**:

```
I plan to deploy this app to Vercel.
Check the NextAuth production configuration and list all required environment variables.
```

### OAuth Consent Screen Publishing

For external users:

- **Testing mode**: You can manually add up to 100 test users. For development/testing
- **Production mode**: Requires Google review (relatively smooth for basic scopes only)

If you selected "Internal" for internal tools, no review is needed.

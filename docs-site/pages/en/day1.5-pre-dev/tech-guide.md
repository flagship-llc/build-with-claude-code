# Tech Stack Guide

Reference information for technology choices when building your project.
Mentors will provide advice during Day 2's "what to build" discussion or in the Slack channel beforehand.

---

## Servers & Hosting

Choose an appropriate hosting service based on your project's purpose.

### Company/Work Projects

For work tools, select services that comply with your company's security policies.

| Service | Features | Best For |
|---------|----------|----------|
| **Heroku** | Easy setup, good documentation | Internal tools, prototypes |
| **Google Cloud Platform (GCP)** | High reliability, rich features | Production business systems |
| **Vercel** | Frontend-focused, easy deployment | Web apps, dashboards |
| **AWS** | Most comprehensive services | Large-scale systems |

### Personal Projects

For personal tools, services with free tiers are recommended.

| Service | Free Tier | Features |
|---------|-----------|----------|
| **Vercel** | Hobby plan (free) | Excellent Next.js integration, easy deploy |
| **GCP Always Free** | Monthly quota free forever | Permanent free tier, wide range of services |
| **Cloudflare Pages** | Free | Static sites & web apps |
| **Railway** | $5/month free credit | Popular Heroku alternative |
| **Render** | Free tier available | Good for simple setups |

---

## Recommended Tech Stack

### Flagship's Recommended Stack

At Flagship, we use **Nest.js** as the foundation for applications with server-side processing.

| Layer | Technology | Reason |
|-------|------------|--------|
| Backend | **Nest.js** (TypeScript) | Structured architecture, TypeScript by default |
| Frontend | **Next.js** / **React** | Vercel compatibility, rich ecosystem |
| Database | **PostgreSQL** | Reliability, Supabase integration |
| ORM | **Prisma** | Type-safe, migration management |

### Recommended Stacks by Use Case

**Frontend Only (Static Sites / SPA)**
```
Next.js + Vercel
```
If you don't need server-side processing, this is sufficient.

**With Server-Side Processing**
```
Next.js (frontend) + Nest.js (API) + PostgreSQL
```
Use this when you need authentication, database operations, or external API integration.

**Simple Scripts & Automation**
```
Python
```
Ideal for data processing, file operations, and scheduled tasks.

---

## AI-Compatible Languages & Frameworks

The following languages and frameworks work especially well with Claude Code.

### High Compatibility

| Language/FW | Reason |
|-------------|--------|
| **Python** | Simple syntax, rich libraries, AI/ML standard |
| **TypeScript** | Type information helps Claude generate accurate code |
| **Next.js** | Clear structure, extensive documentation |
| **React** | Easy to give component-level instructions |

### Why These Work Well

1. **Rich Documentation**: Claude's training data includes many code samples
2. **Simple Syntax**: Less complex notation, generated code is readable
3. **Type Information**: Languages like TypeScript help Claude generate more accurate code
4. **Large Community**: Solutions for errors and best practices are easy to find

### When Compatibility is Challenging

More detailed instructions may be needed for:

- **Very new frameworks**: Features released after 2024
- **Niche languages/libraries**: Those with limited documentation
- **Complex configurations**: Detailed Webpack/Vite settings

---

## Database Recommendation

### Why PostgreSQL

We recommend **PostgreSQL** as your database for the workshop.

**Selection Reasons**:

1. **Reliability**: Years of proven track record, enterprise adoption
2. **Rich Features**: JSON type, full-text search, geospatial data
3. **Supabase Integration**: Free-to-start BaaS (Backend as a Service)
4. **AI Support**: Vector search with pgvector (useful for RAG)
5. **Learning Curve**: Close to SQL standard, easy migration to other DBs

### Supabase Recommendation

**Supabase** is a PostgreSQL-based BaaS with these free features:

| Feature | Description |
|---------|-------------|
| **Database** | PostgreSQL database (up to 500MB free) |
| **Auth** | User authentication (email, OAuth) |
| **Storage** | File storage (up to 1GB free) |
| **Realtime** | Real-time data sync |
| **Edge Functions** | Serverless functions |

**Getting Started**:
1. Create an account at [Supabase](https://supabase.com/)
2. Create a project (Tokyo region recommended)
3. Copy connection info and configure your app

### Other Database Options

| DB | Use Case | Features |
|----|----------|----------|
| **SQLite** | Local development, small tools | File-based, no setup needed |
| **MongoDB** | Document-style data | Schemaless, stores JSON directly |
| **Firebase** | Mobile apps | Real-time sync, Google integration |

---

## When You're Unsure About Tech Choices

### Consult with Mentors

Mentors will advise during Day 2's "what to build" discussion.
You can also ask in the Slack channel beforehand.

When asking, please share:
- **What you want to build**: Purpose and features
- **Usage**: Work or personal
- **Users**: Just you or team use
- **Duration**: Temporary or long-term operation

### Start Simple

Avoid complex setups at first - start simple:

1. **Start with frontend only** to build something that works
2. **Add Supabase** when you need a database
3. **Add an API** when you need server-side processing

Gradually adding features is the most efficient approach when developing with Claude Code.

---

## Next Steps

Once you've decided on your tech stack, check out the [Sample Templates](./templates) for similar project examples.

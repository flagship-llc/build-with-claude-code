# Project Guidelines for Claude

## Internationalization (i18n)

This project supports both Japanese (ja) and English (en).

**Important**: When editing or adding content in `content/`, always update **both language versions**:
- Content files use `_meta.ts` for navigation in each directory
- English content is in `content/en/` subdirectories (when applicable)

This includes:
- Content pages (`.md`, `.mdx`)
- Navigation files (`_meta.ts`)
- Links in index pages

## Project Structure

```
├── app/              # Next.js App Router
│   ├── (ja)/         # Japanese routes (default locale)
│   ├── en/           # English routes
│   └── layout.tsx
├── content/          # MDX/MD content files
│   ├── _meta.ts
│   ├── day1-setup/
│   ├── day1.5-pre-dev/
│   ├── day2-camp/
│   └── reference/
├── components/
├── public/
├── styles/
└── next.config.mjs
```

## Tech Stack

- **Framework**: Nextra v3 with Next.js 16 (App Router)
- **i18n**: Folder-based (`/ja/`, `/en/`)
- **Meta files**: Use `_meta.ts` (not `.json`)

## Coding Standards

- Commit messages: English
- Code comments: English
- Documentation: Match the existing language of each file

## Links

Internal links should include the locale prefix:
- Japanese: `/ja/day1-setup/environment-setup`
- English: `/en/day1-setup/environment-setup`

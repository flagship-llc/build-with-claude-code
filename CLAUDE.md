# Project Guidelines for Claude

## Internationalization (i18n)

This project supports both Japanese (ja) and English (en).

**Important**: When editing or adding content in `docs-site/pages/`, always update **both language versions**:
- `pages/ja/` - Japanese content
- `pages/en/` - English content

This includes:
- Content pages (`.md`, `.mdx`)
- Navigation files (`_meta.ts`)
- Links in index pages

## Documentation Site Structure

```
docs-site/
├── pages/
│   ├── ja/           # Japanese pages (default locale)
│   │   ├── _meta.ts
│   │   ├── index.mdx
│   │   ├── day1-setup/
│   │   ├── day1.5-pre-dev/
│   │   ├── day2-camp/
│   │   └── reference/
│   └── en/           # English pages
│       ├── _meta.ts
│       ├── index.mdx
│       └── ... (same structure as ja/)
├── public/
├── styles/
└── theme.config.tsx
```

## Tech Stack

- **Framework**: Nextra v3 with Next.js 14
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

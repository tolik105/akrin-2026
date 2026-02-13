# CLAUDE.md — AI Assistant Guide for AKRIN K.K. Website

## Project Overview

**AKRIN K.K. Website** (codename "Radiant") — a bilingual (English/Japanese) B2B marketing and blog website for a managed IT services, cybersecurity, and cloud infrastructure company operating in Japan and APAC.

- **Live site:** https://akrin.jp
- **CMS Studio:** https://akrin.jp/studio
- **Blog:** https://akrin.jp/blog

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 15.x |
| Language | TypeScript (strict mode) | 5.x |
| UI Library | React | 19.x |
| Styling | Tailwind CSS v4 | 4.1.x |
| CMS | Sanity | 4.x (via next-sanity 10.x) |
| UI Primitives | Headless UI, Heroicons | 2.x |
| Animation | Framer Motion, Rive | 12.x, 4.x |
| Utilities | clsx, dayjs, feed | — |
| Linting | ESLint 9 (flat config) | 9.x |
| Formatting | Prettier | 3.x |

## Quick Reference — Commands

```bash
npm run dev        # Start development server (port 3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typegen    # Generate Sanity TypeScript types from schema
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages & API routes
│   ├── layout.tsx          # Root layout (metadata, fonts, structured data)
│   ├── page.tsx            # Homepage (English)
│   ├── ja/                 # Japanese locale mirror of all English pages
│   ├── blog/               # Blog listing, [slug], feed.xml
│   ├── case-studies/       # Case studies listing and [slug]
│   ├── services/           # Service pages (11 services + [slug] catch-all)
│   ├── contact/            # Contact page
│   ├── about/              # About page
│   ├── pricing/            # Pricing page
│   ├── api/contact/        # HubSpot form submission endpoint
│   ├── studio/[[...tool]]/ # Embedded Sanity Studio
│   └── ...                 # login, terms, privacy, cookies, company, etc.
├── components/             # React components
│   ├── ui/                 # Reusable UI components (CTA sections, related links)
│   ├── sections/           # Page section components (see sections/README.md)
│   ├── navbar.tsx          # Navigation with language switcher
│   ├── footer.tsx          # Site footer
│   ├── home-page.tsx       # Full homepage composition
│   └── ...                 # Buttons, hero, logos, testimonials, etc.
├── lib/                    # Data, utilities, SEO helpers
│   ├── service-catalog.ts  # All service definitions (EN/JA)
│   ├── case-studies-data.ts# Case study data (EN/JA)
│   ├── blog-fallback-data.ts # Fallback blog content when CMS is down
│   ├── seo.ts              # SEO utility functions
│   ├── metadata-helpers.ts # Next.js metadata generation helpers
│   ├── route-map.ts        # Route and language alternate mapping
│   └── utils.ts            # cn() — class name merging via clsx
├── sanity/                 # Sanity CMS layer
│   ├── schema.ts           # Schema index (post, author, category, caseStudy, blockContent)
│   ├── queries.ts          # GROQ queries with fallback mechanisms
│   ├── client.ts           # Sanity client (CDN in prod, direct in dev)
│   ├── image.ts            # Image URL builder
│   ├── live.ts             # Real-time content via next-sanity
│   ├── env.ts              # Environment variable accessors
│   └── types/              # Generated + manual type definitions
└── styles/
    └── tailwind.css        # Global Tailwind CSS, @font-face, @theme overrides
```

### Key directories outside `src/`

```
public/
├── fonts/          # Inter.var.woff2, Lora.var.woff2
├── images/         # Logos, hero images, company photos
├── logo-cloud/     # Client/partner logos
└── map/            # Map assets
```

## Architecture & Conventions

### Next.js App Router

- Uses the **App Router** (not Pages Router). All routes are in `src/app/`.
- Server Components are the default. Client Components are marked with `'use client'`.
- Dynamic routes use `[slug]` folders. Sanity Studio uses `[[...tool]]` catch-all.
- Separate build output directories: `.next` (production) and `.next-dev` (development) to avoid chunk-manifest corruption.

### TypeScript

- **Strict mode** is enabled in `tsconfig.json`.
- Path alias: `@/*` maps to `./src/*`. Always use `@/` imports.
- `verbatimModuleSyntax` is on — use `import type` for type-only imports.

### Styling with Tailwind CSS v4

- Tailwind v4 uses a CSS-first configuration approach (not `tailwind.config.ts` for content/plugins).
- Global styles and theme customizations live in `src/styles/tailwind.css`.
- Custom fonts: **Inter** (sans-serif) and **Lora** (serif), with Noto Sans JP / Noto Serif JP fallbacks for Japanese.
- Use `clsx` (via the `cn()` helper in `src/lib/utils.ts`) for conditional class composition.
- Prettier auto-sorts Tailwind classes via `prettier-plugin-tailwindcss`.

### Code Style

- **Single quotes**, **no semicolons** (Prettier config).
- **Prettier** with `prettier-plugin-organize-imports` auto-sorts imports.
- ESLint extends `next/core-web-vitals` and `next/typescript`.
- `no-img-element` and `prefer-const` rules are disabled.

### Internationalization (i18n)

- **Route-based localization**: English at `/`, Japanese at `/ja/`.
- No i18n library — translations are handled via:
  - Duplicate page files under `src/app/ja/`.
  - Bilingual data in `src/lib/service-catalog.ts` and `src/lib/case-studies-data.ts`.
  - Locale-aware components detect the pathname to select content.
- Language switcher is in the navbar and footer.
- SEO: `hreflang` tags and `alternates` configured in metadata.

### Sanity CMS

- **Content types**: post, author, category, caseStudy, blockContent.
- **Queries** are in `src/sanity/queries.ts` using GROQ.
- **All queries have fallback data** in `src/lib/blog-fallback-data.ts` so the site works if Sanity is unavailable.
- Sanity Studio is embedded at `/studio` (configured in `sanity.config.ts`).
- Run `npm run typegen` after modifying Sanity schemas to regenerate TypeScript types.

### API Routes

- `POST /api/contact` — Contact form submission to HubSpot Forms API.
  - Required server env vars: `HUBSPOT_PORTAL_ID`, `HUBSPOT_FORM_GUID`.
  - Includes Cloudflare Turnstile CAPTCHA validation.

## Environment Variables

| Variable | Scope | Purpose |
|----------|-------|---------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Public | Sanity project identifier |
| `NEXT_PUBLIC_SANITY_DATASET` | Public | Sanity dataset (typically "production") |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Public | Sanity API version (default: "2025-07-10") |
| `HUBSPOT_PORTAL_ID` | Server | HubSpot account ID for contact form |
| `HUBSPOT_FORM_GUID` | Server | HubSpot form GUID for contact form |

## Development Workflow

1. **Install dependencies**: `npm install`
2. **Start dev server**: `npm run dev` (runs at http://localhost:3000)
3. **Lint**: `npm run lint`
4. **Build**: `npm run build`
5. **Sanity type generation**: `npm run typegen` (after schema changes)

### No test framework

There is currently no test suite (no Jest, Vitest, or similar). Validation is done through linting and manual testing.

## Key Patterns to Follow

### Adding a new page

1. Create a new directory under `src/app/` with a `page.tsx` file.
2. Create the Japanese version under `src/app/ja/` with the same structure.
3. Add metadata exports for SEO (title, description, alternates).
4. Update `src/lib/route-map.ts` if the page needs language alternate links.

### Adding a new service

1. Add the service definition to `src/lib/service-catalog.ts` with both EN and JA content.
2. Create the page under `src/app/services/[service-name]/page.tsx`.
3. Create the Japanese version under `src/app/ja/services/[service-name]/page.tsx`.
4. Add metadata with `src/lib/service-metadata.ts` helpers.

### Adding a new Sanity content type

1. Define the schema in `src/sanity/` (follow existing patterns in `post.ts`, `case-study.ts`).
2. Register it in `src/sanity/schema.ts`.
3. Add GROQ queries in `src/sanity/queries.ts` with fallback data.
4. Run `npm run typegen` to generate TypeScript types.

### Creating components

- Place reusable UI primitives in `src/components/ui/`.
- Place page-specific sections in `src/components/` or `src/components/sections/`.
- Use `'use client'` only when the component needs interactivity (event handlers, hooks, browser APIs).
- Use `cn()` from `@/lib/utils` for class name merging.
- Reference `src/components/sections/README.md` for section component conventions.

## Files of Note

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout — global metadata, fonts, structured data, SanityLive |
| `src/lib/service-catalog.ts` | Central service definitions (EN/JA) |
| `src/lib/case-studies-data.ts` | All case study data (EN/JA) |
| `src/lib/blog-fallback-data.ts` | Fallback blog data when Sanity is down (~112KB) |
| `src/sanity/queries.ts` | All GROQ queries with fallback handling |
| `src/styles/tailwind.css` | Theme customization, custom fonts, Tailwind config |
| `next.config.mjs` | Separate dev/prod build directories |
| `sanity.config.ts` | Sanity Studio configuration |

## Common Pitfalls

- **Tailwind v4 syntax**: This project uses Tailwind CSS v4, which has a different configuration model than v3. Theme values are defined in CSS (`@theme`) not in `tailwind.config.ts`.
- **Import types explicitly**: With `verbatimModuleSyntax` enabled, always use `import type { ... }` for type-only imports.
- **Fallback data**: When modifying Sanity queries, update the corresponding fallback data in `src/lib/` to keep offline functionality intact.
- **Dual build directories**: Dev uses `.next-dev/`, production uses `.next/`. Both are gitignored.
- **No test suite**: There are no automated tests. Run `npm run lint` and `npm run build` to verify changes.

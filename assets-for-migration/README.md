# Assets for Migration

This folder contains copies of all **logos**, **icons**, **favicons**, **OG/hero images**, and **decorative shapes** used across the AKRIN website. Use this as a single reference when migrating or rebranding.

**Teal only — no purple:** All assets here are from **`public/`** (what’s on the live site). Purple-only variants from **`assets/`** are not included.

---

## Folder structure

| Folder | Contents | Source(s) |
|--------|----------|-----------|
| **logos/** | Brand logos (teal, from public) | `public/` |
| **favicons/** | Favicons and apple-touch icons | `public/` |
| **icons/** | UI icons (WhatsApp, partner logos) | `public/` |
| **og-and-hero/** | OG image and hero image assets | `public/` |
| **shapes/** | Backgrounds, grids, decorative SVGs | `public/` |

---

## Contents summary

### logos/ (5 files)
- `akrin-logo.svg` – Main site logo (teal #50B0A0), navbar/footer
- `Akrin-header.svg` – Header graphic
- `Mask group.svg` – Hero/video mask
- `Container -- 2.svg` – Layout/container graphic

### favicons/ (16 files) — all TEAL (#50B0A0)
- `favicon.svg` – teal accent; PNGs below were generated from this SVG
- `favicon.ico` – (unchanged; replace manually if needed)
- `favicon-16x16.png` through `favicon-512x512.png` – generated from teal SVG
- `favicon-*-.v3.png` – v3 variants, generated from teal SVG
- `apple-touch-icon.png`, `apple-touch-icon-120x120.png`, `apple-touch-icon-152x152.png`, `apple-touch-icon-180.png` – generated from teal SVG  
- To regenerate PNGs: `node scripts/generate-teal-favicons.mjs`

### icons/ (3 files)
- `whatsapp.svg` – WhatsApp float button
- `nist_logo.webp` – NIST partner logo (ITAD page)
- `r-2logo.webp` – R2 partner logo (ITAD page)

### og-and-hero/ (2 unique files)
- `og-image.png`, `og-image.svg` – Default OG/social and hero image

### shapes/ (8 files)
- `grid.svg` – Grid background
- `hero-background.svg` – Hero section background
- `cycle.svg` – Cycle/decorative graphic
- `shape.svg`, `shape-1.svg` – Banner shapes
- `background test.svg` – Background test asset
- `Mask group.svg` – (also in logos)

---

## Note

- **logo.png** is referenced in code (`app/contact/page.tsx`, `lib/seo.ts`) but does not exist in the repo; it was not copied.
- Only assets from **public/** are included; purple-only variants from **assets/** are not in this folder.

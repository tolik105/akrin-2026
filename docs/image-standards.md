# Image Standards (Phase 1: Non-Breaking)

## Goals
- Keep existing image URLs stable.
- Prevent missing-image deploy/runtime errors.
- Organize new assets under canonical folders without risky mass moves.

## Canonical Folders
- Service page source images: `src/assets/images/services/<service>/`
- Blog source images: `assets/images/blog/posts/<post>/hero.jpg`
- Blog generated images: `public/blog-images/posts/`
- Blog legacy/static images: `public/blog-images/`
- Service banners: `public/images/banners/<service>/`
- Case study images: `public/images/case-studies/<case-study>/`
- Open Graph compatibility assets: `public/images/og/`
- Root compatibility aliases (only when required): `public/`

## Format Guidance
- Prefer AVIF for photos and banners.
- Keep SVG for logos/icons.
- Keep JPG/PNG only for compatibility aliases or when source constraints require it.

## Naming Rules
- Use lowercase kebab-case for new files.
- Keep existing legacy names unchanged if currently referenced.
- For service-page imports, colocate images under the owning service slug.
- For blog source images, use one folder per post with `hero.jpg` as the canonical source name.
- For generated blog AVIF files, keep the existing public output names stable.

## Workflow
1. Add or generate files in canonical folders.
2. Run `npm run images:audit` to verify all static local image paths resolve.
3. Run app checks/build before deploy.

## Phase 1 Constraint
- Do not bulk move/rename existing in-use files in this phase.
- Add compatibility files/aliases where needed to avoid breakage.

# AKRIN Homepage — Premium Dark + Cream Color System Overhaul

## Overview

Transform the AKRIN homepage from an all-dark flat design into a premium dual-tone editorial layout by introducing warm cream/paper sections that alternate with the existing dark navy. This creates the same high-end contrast seen on premium SaaS sites. The page rhythm becomes: dark hero → dark trust → cream services → dark case studies (with cream cards) → cream expertise → dark FAQ → cream CTA → dark footer.

## Critical Constraints

- Do NOT change any HTML semantic tags (h1–h6, section, article, nav, footer, header, main)
- Do NOT change any text content, link href values, alt text, aria labels, or meta tags
- Do NOT add any images, SVGs, JavaScript bundles, fonts, or external dependencies
- Do NOT change the existing responsive breakpoint structure (sm:, md:, lg:, xl:)
- ONLY change Tailwind CSS utility classes
- The ONLY new HTML elements allowed are thin `<div>` section dividers with `aria-hidden="true"`
- Hero section and footer MUST remain dark
- All existing interactive behaviors (hover states, FAQ accordion, scroll reveal) must keep working

## Color Palette Reference
```
DARK TONES (existing — keep):
  Page bg:           #17100E   rgb(2, 9, 23)
  Dark card bg:      #0F1219   rgb(15, 18, 25)
  Dark border:       #1E2330
  Dark footer:       #010812

NEW CREAM/PAPER TONES (introduce):
  Cream section bg:  #F4F3EC   rgb(244, 243, 236)
  White card bg:     #FFFFFF
  Cream border:      #C5C5C1   rgb(197, 197, 193)

TEXT ON CREAM:
  Heading:           #0A0A0A   near-black
  Body:              #3D3D3B   dark gray
  Label/subtle:      #626260   rgb(98, 98, 96)
  Link accent:       #0D7367   dark teal (readable on light bg)
  Link hover:        #0A5C52   darker teal

TEXT ON DARK (keep existing, one upgrade):
  Heading:           text-gray-100
  Hero subtitle:     text-gray-300 (UPGRADE from text-gray-400)
  Body:              text-gray-400
  Label:             text-gray-500

ACCENT:
  Teal on dark bg:   teal-500 / teal-400 (keep)
  Teal dot on cream: #0D7367
```

---

## Section-by-Section Changes

### 1. Hero Section — id="hero"

Keep dark. Add ambient glow and upgrade subtitle.

#### Section tag — no change
```
KEEP: <section id="hero" class="bg-[#17100E]">
```

#### First child div — add gradient pseudo-elements
```
CURRENT: <div class="relative isolate overflow-hidden">

CHANGE TO: <div class="relative isolate overflow-hidden before:content-[''] before:absolute before:top-0 before:right-0 before:w-[60%] before:h-[70%] before:bg-[radial-gradient(ellipse_at_70%_20%,rgba(45,212,191,0.07)_0%,transparent_65%)] before:pointer-events-none before:z-0 after:content-[''] after:absolute after:top-0 after:left-0 after:w-[50%] after:h-[60%] after:bg-[radial-gradient(ellipse_at_20%_30%,rgba(100,130,180,0.04)_0%,transparent_60%)] after:pointer-events-none after:z-0">
```

#### Hero subtitle paragraph
```
CURRENT:  <p class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
CHANGE TO: <p class="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
```
Change: `text-gray-400` → `text-gray-300`

#### "Get started" button — add glow + wider padding
```
CURRENT class includes: !bg-teal-500 !text-white hover:!bg-teal-400 ... px-4 ...

ADD these classes: shadow-[0_0_20px_-4px_rgba(45,212,191,0.35)] hover:shadow-[0_0_30px_-4px_rgba(45,212,191,0.5)] transition-shadow duration-300
CHANGE: px-4 → px-6
```

#### Dashboard mockup container
```
CURRENT:  <div class="shadow-lg md:rounded-3xl">
CHANGE TO: <div class="shadow-lg shadow-teal-500/[0.03] md:rounded-3xl ring-1 ring-white/[0.06]">
```

---

### 2. Trust Section — id="trust"

Keep dark. Reduce excessive vertical padding.
```
CURRENT:  <section id="trust" class="bg-[#17100E] py-24 sm:py-32">
CHANGE TO: <section id="trust" class="bg-[#17100E] py-16 sm:py-20">
```
Change: `py-24 sm:py-32` → `py-16 sm:py-20`

---

### 3. ADD DIVIDER — between trust and services

Insert this HTML element after the closing `</section>` of `#trust` and before the opening `<section>` of `#services`:
```html
<div class="h-px bg-gradient-to-r from-transparent via-[#C5C5C1]/30 to-transparent" aria-hidden="true"></div>
```

---

### 4. Core Services Section — id="services" ⭐ CONVERT TO CREAM

#### Section tag
```
CURRENT:  <section id="services" class="bg-[#17100E]">
CHANGE TO: <section id="services" class="bg-[#F4F3EC]">
```

#### Section label dot
```
CURRENT:  <span class="inline-block h-2 w-2 rounded-sm bg-teal-400">
CHANGE TO: <span class="inline-block h-2 w-2 rounded-sm bg-[#0D7367]">
```

#### Section label text
```
CURRENT:  <span class="font-mono text-xs uppercase tracking-[0.15em] text-gray-400">
CHANGE TO: <span class="font-mono text-xs uppercase tracking-[0.15em] text-[#626260]">
```

#### Section heading "Core Services"
```
CURRENT:  <h2 class="font-serif text-4xl font-normal tracking-tight text-gray-100 sm:text-5xl">
CHANGE TO: <h2 class="font-serif text-4xl font-normal tracking-tight text-[#0A0A0A] sm:text-5xl">
```

#### All 4 service cards (apply to EVERY article in this section)
```
CURRENT:  <article class="rounded-xl border border-[#1E2330] bg-[#0F1219] p-8">
CHANGE TO: <article class="rounded-xl border border-[#C5C5C1] bg-white p-8 hover:shadow-md transition-shadow duration-300">
```

#### Card heading (h3) inside each service card
```
CURRENT:  <h3 class="text-lg font-semibold text-gray-100">
CHANGE TO: <h3 class="text-lg font-semibold text-[#0A0A0A]">
```

#### Card description (p) inside each service card
```
CURRENT:  <p class="mt-3 text-base leading-relaxed text-gray-400">
CHANGE TO: <p class="mt-3 text-base leading-relaxed text-[#3D3D3B]">
```

#### "Learn More" link inside each service card
```
CURRENT:  <a class="text-sm font-semibold text-teal-400 hover:text-teal-300" ...>
CHANGE TO: <a class="text-sm font-semibold text-[#0D7367] hover:text-[#0A5C52]" ...>
```

---

### 5. ADD DIVIDER — between services and case-studies

Insert after `</section>` of `#services`, before `<section>` of `#case-studies`:
```html
<div class="h-px bg-gradient-to-r from-transparent via-[#1E2330]/50 to-transparent" aria-hidden="true"></div>
```

---

### 6. Case Studies Section — id="case-studies"

Keep section dark. Convert cards to cream.

#### Section tag — no change
```
KEEP: <section id="case-studies" class="bg-[#17100E]">
```

#### Section label dot — no change (stays on dark bg)
```
KEEP: <span class="inline-block h-2 w-2 rounded-sm bg-teal-400">
```

#### Section label text — no change
```
KEEP: <span class="font-mono text-xs uppercase tracking-[0.15em] text-gray-400">
```

#### Section heading "Case Studies" — no change
```
KEEP: <h2 class="font-serif text-4xl font-normal tracking-tight text-gray-100 sm:text-5xl">
```

#### All 3 case study cards — CONVERT TO CREAM
```
CURRENT:  <article class="rounded-xl border border-[#1E2330] bg-[#0F1219] p-8">
CHANGE TO: <article class="rounded-xl border border-[#C5C5C1] bg-[#F4F3EC] p-8 hover:shadow-md transition-shadow duration-300">
```

#### Card heading (h3) inside each case study card
```
CURRENT:  <h3 class="text-lg font-semibold text-gray-100">
CHANGE TO: <h3 class="text-lg font-semibold text-[#0A0A0A]">
```

#### Card description (p) inside each case study card
```
CURRENT:  <p class="mt-3 text-base leading-relaxed text-gray-400">
CHANGE TO: <p class="mt-3 text-base leading-relaxed text-[#3D3D3B]">
```

#### "View Case Study" link inside each card
```
CURRENT:  <a class="text-sm font-semibold text-teal-400 hover:text-teal-300" ...>
CHANGE TO: <a class="text-sm font-semibold text-[#0D7367] hover:text-[#0A5C52]" ...>
```

---

### 7. ADD DIVIDER — between case-studies and expertise

Insert after `</section>` of `#case-studies`, before `<section>` of `#expertise`:
```html
<div class="h-px bg-gradient-to-r from-transparent via-[#C5C5C1]/30 to-transparent" aria-hidden="true"></div>
```

---

### 8. Industry Expertise Section — id="expertise" ⭐ CONVERT TO CREAM

#### Section tag
```
CURRENT:  <section id="expertise" class="bg-[#17100E]">
CHANGE TO: <section id="expertise" class="bg-[#F4F3EC]">
```

#### Section label dot
```
CURRENT:  <span class="inline-block h-2 w-2 rounded-sm bg-teal-400">
CHANGE TO: <span class="inline-block h-2 w-2 rounded-sm bg-[#0D7367]">
```

#### Section label text
```
CURRENT:  <span class="font-mono text-xs uppercase tracking-[0.15em] text-gray-400">
CHANGE TO: <span class="font-mono text-xs uppercase tracking-[0.15em] text-[#626260]">
```

#### Section heading
```
CURRENT:  <h2 class="font-serif text-4xl font-normal tracking-tight text-gray-100 sm:text-5xl">
CHANGE TO: <h2 class="font-serif text-4xl font-normal tracking-tight text-[#0A0A0A] sm:text-5xl">
```

#### Section description paragraph
```
CURRENT:  <p class="mt-6 max-w-3xl text-base leading-relaxed text-gray-400">
CHANGE TO: <p class="mt-6 max-w-3xl text-base leading-relaxed text-[#3D3D3B]">
```

#### Large stat numbers (40%, 25%, 20%, 15%)
```
CURRENT:  <p class="text-6xl font-bold text-gray-100 tabular-nums sm:text-7xl lg:text-8xl">
CHANGE TO: <p class="text-6xl font-bold text-[#0A0A0A] tabular-nums sm:text-7xl lg:text-8xl">
```

#### Stat industry labels (FINANCIAL SERVICES, HEALTHCARE etc.)
```
CURRENT:  <p class="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-gray-400">
CHANGE TO: <p class="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-[#626260]">
```

---

### 9. ADD DIVIDER — between expertise and faq

Insert after `</section>` of `#expertise`, before `<section>` of `#faq`:
```html
<div class="h-px bg-gradient-to-r from-transparent via-[#1E2330]/50 to-transparent" aria-hidden="true"></div>
```

---

### 10. FAQ Section — id="faq"

Keep dark. Improve dividers and hover.

#### Section tag — no change
```
KEEP: <section id="faq" class="bg-[#17100E]">
```

#### FAQ list wrapper (dl element)
```
CURRENT:  <dl class="mt-16 divide-y divide-dashed divide-[#1E2330]">
CHANGE TO: <dl class="mt-16 divide-y divide-[#1E2330]/60">
```
Change: remove `divide-dashed`, add opacity `/60`

#### Each FAQ item wrapper (div inside dl)
```
CURRENT:  <div class="py-6 first:pt-0 last:pb-0">
CHANGE TO: <div class="py-6 first:pt-0 last:pb-0 px-4 -mx-4 rounded-lg hover:bg-white/[0.02] transition-colors duration-200">
```

---

### 11. ADD DIVIDER — between faq and cta

Insert after `</section>` of `#faq`, before `<section>` of `#cta`:
```html
<div class="h-px bg-gradient-to-r from-transparent via-[#C5C5C1]/30 to-transparent" aria-hidden="true"></div>
```

---

### 12. CTA Section — id="cta" ⭐ CONVERT TO CREAM

#### Section tag
```
CURRENT:  <section id="cta" class="bg-[#17100E]">
CHANGE TO: <section id="cta" class="bg-[#F4F3EC]">
```

#### Inner card container
```
CURRENT:  <div class="rounded-xl border border-[#1E2330] bg-[#0F1219] px-6 py-12 text-center text-white sm:px-10">
CHANGE TO: <div class="rounded-xl border border-[#C5C5C1] bg-white px-6 py-16 text-center sm:px-10">
```
Changes: border color, bg to white, remove `text-white`, increase `py-12` → `py-16`

#### CTA heading
```
CURRENT:  <h2 class="font-serif text-3xl font-normal tracking-tight text-gray-100 sm:text-4xl">
CHANGE TO: <h2 class="font-serif text-3xl font-normal tracking-tight text-[#0A0A0A] sm:text-4xl">
```

#### CTA description
```
CURRENT:  <p class="mx-auto mt-4 max-w-2xl text-base/7 text-gray-400">
CHANGE TO: <p class="mx-auto mt-4 max-w-2xl text-base/7 text-[#3D3D3B]">
```

#### "Schedule Consultation" button — keep teal, add glow
```
CURRENT class includes: !bg-teal-500 !text-white hover:!bg-teal-400 ... px-4 ...

ADD these classes: shadow-[0_0_20px_-4px_rgba(13,115,103,0.3)] hover:shadow-[0_0_30px_-4px_rgba(13,115,103,0.4)] transition-shadow duration-300
CHANGE: px-4 → px-6
```

---

### 13. Footer

Keep dark. Darken slightly for visual grounding.
```
CURRENT:  <footer class="border-t border-[#1E2330] bg-[#17100E]">
CHANGE TO: <footer class="border-t border-[#1E2330] bg-[#010812]">
```

---

### 14. Sticky Sidebar Navigation

The sidebar nav (`<nav aria-label="Page sections">`) floats over both dark and cream sections. Give it a semi-transparent dark backdrop so it stays readable on both.
```
CURRENT:  <nav class="hidden w-40 shrink-0 self-start lg:sticky lg:top-32 lg:block lg:h-fit" aria-label="Page sections">
CHANGE TO: <nav class="hidden w-40 shrink-0 self-start lg:sticky lg:top-32 lg:block lg:h-fit bg-[#17100E]/80 backdrop-blur-sm rounded-lg px-3 py-2" aria-label="Page sections">
```
Added: `bg-[#17100E]/80 backdrop-blur-sm rounded-lg px-3 py-2`

---

## Final Visual Rhythm Summary
```
SECTION              BACKGROUND     TEXT COLORS
─────────────────────────────────────────────────
Header/Nav           transparent    white
Hero                 DARK #17100E   gray-100/300
Trust Logos          DARK #17100E   gray-500
── gradient divider ──
Core Services        CREAM #F4F3EC  #0A0A0A / #3D3D3B
── gradient divider ──
Case Studies         DARK #17100E   gray-100 (heading)
  └ Cards            CREAM #F4F3EC  #0A0A0A / #3D3D3B
── gradient divider ──
Industry Expertise   CREAM #F4F3EC  #0A0A0A / #3D3D3B
── gradient divider ──
FAQ                  DARK #17100E   gray-100/400
── gradient divider ──
CTA                  CREAM #F4F3EC  #0A0A0A / #3D3D3B
Footer               DARK #010812   gray-300/400/500
```

## Key Rules

1. `#F4F3EC` is a warm off-white with a subtle yellow/olive undertone — NOT pure white. This is what creates the premium paper feel.
2. Text on cream backgrounds MUST use dark colors (`#0A0A0A` headings, `#3D3D3B` body). NEVER use gray-100/200/300/400 on cream — those are for dark backgrounds only.
3. Teal accent on cream backgrounds MUST use `#0D7367` (dark teal). NEVER use `teal-400` on cream — it is too bright and looks washed out on light backgrounds.
4. The border color on cream cards is `#C5C5C1` — a warm neutral gray. NOT the dark `#1E2330` border.
5. All gradient dividers use `aria-hidden="true"` for zero SEO impact.
6. Hero and footer MUST stay dark — the contrast comes from the middle sections alternating.
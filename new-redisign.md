# AKRIN Homepage Redesign — Fin.ai-Inspired Dark Theme

## Critical Constraints (DO NOT VIOLATE)

- **ZERO new npm dependencies** — no Framer Motion, no GSAP, no AOS, no animation libraries
- **All animations use ONLY CSS transforms + opacity** — these are GPU-composited, cause zero layout shift, zero CLS
- **All content must be server-rendered** — only interactive wrappers (`CountUp`, `RevealOnScroll`, `SectionNav`) are `'use client'`
- **Do not change the heading hierarchy** — H1 → H2 → H3 must stay as-is
- **Do not remove or change any meta tags, structured data, canonical links, or Open Graph tags**
- **Do not add any external fonts** — use only the existing self-hosted `Inter Var` and `Lora Var`
- **Do not add images larger than 5 KB**
- **Respect `prefers-reduced-motion: reduce`** — disable all animations when this is set
- **Keep total new JS under 2 KB gzipped** across all new client components
- **Do not modify the FAQ HeadlessUI Disclosure logic** — only restyle it with class changes
- **Update `theme-color` meta to `#17100E`** in `layout.tsx`

---

## Current Tech Stack

- **Framework**: Next.js (App Router, `src/` directory)
- **Styling**: Tailwind CSS v4 (with `@layer theme`, `@layer base`, `@layer utilities`)
- **Fonts**: Self-hosted variable fonts via `@font-face` in CSS:
  - `Inter Var` (weight 100–900) → mapped to `--font-sans`
  - `Lora Var` (weight 400–700) → loaded but **NOT mapped to any Tailwind utility**
- **Font files**: `/public/fonts/Inter.var.woff2`, `/public/fonts/Lora.var.woff2` (both preloaded)
- **CSS file**: Single file at `_next/static/css/app/layout.css` (~184 KB uncompressed, includes all Tailwind)
- **Existing animations**: `@keyframes move-x` (for logo marquee), `@keyframes pulse`
- **Existing transitions**: `transition-all duration-300` (header), `transition-colors` (links)
- **Interactive components**: HeadlessUI `Disclosure` for FAQ accordion, mobile menu button
- **Logo**: Inline SVG in header

---

## Current Page Sections (in `page.tsx`)

| Index | Heading | Current Classes | Section ID |
|-------|---------|----------------|------------|
| 0 | "What's the next bold step for your IT?" (H1) | `bg-white` | none |
| 1 | "Trusted by the world's most innovative teams" (H2) | `bg-white py-24 sm:py-32` | none |
| 2 | "Core Services" (H2) | (none) | none |
| 3 | "Case Studies" (H2) | `bg-gray-50` | none |
| 4 | "Industry expertise that drives measurable results" (H2) | (none) | none |
| 5 | "Frequently Asked Questions" (H2) | `bg-white` | none |
| 6 | "Ready to transform your IT infrastructure?" (H2) | (none) | none |

**Header**: `fixed inset-x-0 top-0 z-50 isolate transition-all duration-300 bg-transparent`
**Footer**: `bg-white` with container `mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32`

---

## Design Tokens (derived from Fin.ai reference)

### Colors
```
Page Background:     #17100E  (rgb(2, 9, 23))       → Tailwind: bg-[#17100E]
Card Background:     #0F1219  (slightly lighter)     → Tailwind: bg-[#0F1219]
Card Border:         #1E2330  (subtle border)        → Tailwind: border-[#1E2330]
Primary Text:        #F0F0F0  (near-white)           → Tailwind: text-gray-100
Secondary Text:      #8A8F98  (muted)                → Tailwind: text-gray-400
Accent Color:        #2DD4BF  (teal-400, matches AKRIN logo) → Tailwind: text-teal-400
Accent Dot:          #2DD4BF                         → Tailwind: bg-teal-400
Section Label Text:  #8A8F98  (uppercase, monospace)  → Tailwind: text-gray-400
Active Nav:          #2DD4BF  with bottom border     → Tailwind: text-teal-400 border-teal-400
Inactive Nav:        #6B7280                         → Tailwind: text-gray-500
```

### Typography
```
H1 (Hero):          font-serif (Lora Var), text-5xl sm:text-7xl, font-normal (weight 400), tracking-tight, text-gray-100
H2 (Sections):      font-serif (Lora Var), text-4xl sm:text-5xl, font-normal (weight 400), tracking-tight, text-gray-100
H3 (Cards):         font-sans (Inter Var), text-lg, font-semibold, text-gray-100
Body:               font-sans (Inter Var), text-base, font-normal, text-gray-400, leading-relaxed
Section Labels:     font-mono, text-xs, uppercase, tracking-[0.15em], text-gray-400
Nav Numbers:        font-mono, text-[11px], uppercase, tracking-[0.15em]
Stat Numbers:       font-sans (Inter Var), text-7xl sm:text-8xl, font-bold, text-gray-100
Stat Labels:        font-mono, text-xs, uppercase, tracking-[0.15em], text-gray-400
```

### Layout
```
Sidebar+Content grid (desktop): grid-cols-12, sidebar = col-span-2, content = col-span-10
Max-width container:            max-w-[1400px] mx-auto
Sidebar:                        sticky top-32, hidden below lg breakpoint
Section vertical padding:       py-20 sm:py-28
Card border-radius:             rounded-xl (8px)
Card padding:                   p-8 sm:p-10
Section gap:                    gap-4 between content cards
```

---

## Step-by-Step Implementation

### Step 1: Add `--font-serif` to Tailwind CSS Config

In your main CSS file (where `@font-face` declarations live), add inside the `@layer theme` block:
```css
@layer theme {
  --font-serif: 'Lora Var', ui-serif, Georgia, Cambria, 'Times New Roman', serif;
}
```

This enables the `font-serif` utility class in Tailwind. The font is already loaded and preloaded — this costs 0 bytes.

---

### Step 2: Add Section IDs

In `page.tsx`, add `id` attributes to each `<section>`:
```
Section 0 (Hero):        id="hero"
Section 1 (Trust):       id="trust"
Section 2 (Services):    id="services"
Section 3 (Case Studies): id="case-studies"
Section 4 (Expertise):   id="expertise"
Section 5 (FAQ):         id="faq"
Section 6 (CTA):         id="cta"
```

This costs 0 bytes JS, and adds internal anchor targets which improves SEO (Google understands page sections).

---

### Step 3: Dark Theme — Class Swaps Only

#### 3a. `<body>` in `layout.tsx`
```
BEFORE: className="text-gray-950 antialiased"
AFTER:  className="bg-[#17100E] text-gray-100 antialiased"
```

#### 3b. `<header>`
```
BEFORE: bg-transparent (with text-gray-900 on links)
AFTER:  bg-transparent (keep as-is — it's already over dark bg)
        Change nav link classes: text-gray-900 → text-gray-300 hover:text-white
        Change mobile menu button text/icon color to text-gray-300
```

#### 3c. Section 0 (Hero)
```
BEFORE: <section class="bg-white">
          <div class="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20">
AFTER:  <section class="bg-[#17100E]">
          <div class="relative isolate overflow-hidden">
          (Remove the bg-linear-to-b from-indigo-100/20 gradient)

H1 BEFORE: class="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl"
H1 AFTER:  class="font-serif text-5xl font-normal tracking-tight text-pretty text-gray-100 sm:text-7xl"

Subtitle BEFORE: class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8"
Subtitle AFTER:  class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"

CTA "Get started" button: keep current style but change bg to teal:
  bg-gray-950 → bg-teal-500 hover:bg-teal-400 text-white

CTA "View Case Studies" link:
  text-gray-900 → text-gray-300 hover:text-white

Hero dashboard mockup:
  Remove the skewed white background div (class: "absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white ...")
  Remove the bottom gradient div (class: "absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32")
  The dark dashboard mockup cards already have dark bg — they will blend naturally
```

#### 3d. Section 1 (Trust/Logos)
```
BEFORE: <section class="bg-white py-24 sm:py-32">
AFTER:  <section class="bg-[#17100E] py-24 sm:py-32">

H2 BEFORE: class="text-center text-lg/8 font-semibold text-gray-900"
H2 AFTER:  class="text-center text-lg/8 font-semibold text-gray-400"

Logo images: Add class "opacity-50 hover:opacity-100 transition-opacity" to each <img>
  Also add CSS filter to make them white: class="brightness-0 invert opacity-50 hover:opacity-100 transition-opacity"
```

#### 3e. Section 2 (Core Services)
```
BEFORE: <section> (no bg) with container "py-16 sm:py-20 px-6 lg:px-8"
AFTER:  <section class="bg-[#17100E]"> same container

H2 BEFORE: class="text-2xl font-semibold text-gray-950 sm:text-3xl"
H2 AFTER:  class="font-serif text-4xl font-normal tracking-tight text-gray-100 sm:text-5xl"

Add a section label ABOVE the H2:
  <p class="font-mono text-xs uppercase tracking-[0.15em] text-gray-400 mb-4 flex items-center gap-2">
    <span class="inline-block w-2 h-2 rounded-sm bg-teal-400"></span>
    CORE SERVICES
  </p>

Service cards BEFORE: class="rounded-2xl border border-gray-200 bg-white p-6"
Service cards AFTER:  class="rounded-xl border border-[#1E2330] bg-[#0F1219] p-8"

Card H3 BEFORE: text-gray-950 → AFTER: text-gray-100
Card <p> BEFORE: text-gray-700 → AFTER: text-gray-400
Card "Learn More" button: change to text-teal-400 hover:text-teal-300
```

#### 3f. Section 3 (Case Studies)
```
BEFORE: <section class="bg-gray-50">
AFTER:  <section class="bg-[#17100E]">

H2: same serif treatment as Services above
Add section label: "CASE STUDIES" with teal dot

Case study cards:
  BEFORE: class="rounded-2xl border border-gray-200 bg-white p-6"
  AFTER:  class="rounded-xl border border-[#1E2330] bg-[#0F1219] p-8"

Card headings: text-gray-100
Card descriptions: text-gray-400
"View Case Study" button: text-teal-400 hover:text-teal-300
```

#### 3g. Section 4 (Industry Expertise / Stats)
```
BEFORE: <section> (no bg)
AFTER:  <section class="bg-[#17100E]" id="expertise">

H2: font-serif treatment
Add section label: "INDUSTRY EXPERTISE" with teal dot

Stat cards BEFORE: class="rounded-2xl border border-gray-200 bg-gray-50 p-5"
Stat cards AFTER:  class="rounded-xl border border-[#1E2330] bg-[#0F1219] p-8"

Stat numbers: change to text-7xl sm:text-8xl font-bold text-gray-100
Stat labels: change to font-mono text-xs uppercase tracking-[0.15em] text-gray-400 mt-3
```

#### 3h. Section 5 (FAQ)
```
BEFORE: <section class="bg-white">
AFTER:  <section class="bg-[#17100E]" id="faq">

H2: font-serif treatment, text-gray-100
Add section label: "FAQS" with teal dot

FAQ dividers: Change border-gray-200 → border-dashed border-[#1E2330]
FAQ question buttons: text-gray-900 → text-gray-100
FAQ answer text: text-gray-600 → text-gray-400
FAQ expand icon (+ / ×): text-gray-400
```

#### 3i. Section 6 (CTA)
```
BEFORE: <section> with dark card inside
AFTER:  <section class="bg-[#17100E]" id="cta">

The dark card (rounded-3xl border border-gray-200 bg-gray-950):
  AFTER: rounded-xl border border-[#1E2330] bg-[#0F1219]

H2 inside CTA card: font-serif, text-gray-100
"Schedule Consultation" button: bg-teal-500 hover:bg-teal-400 text-white (remove !border-white !bg-white !text-gray-950)
```

#### 3j. Footer
```
BEFORE: <footer class="bg-white">
AFTER:  <footer class="bg-[#17100E] border-t border-[#1E2330]">

Footer heading colors: text-gray-900 → text-gray-200
Footer link colors: text-gray-600 → text-gray-400 hover:text-gray-200
Footer description text: text-gray-600 → text-gray-500
Copyright text: text-gray-500 → text-gray-600
LinkedIn icon: text-gray-400 → text-gray-500 hover:text-gray-300
Logo SVG: ensure fill is white/light
```

---

### Step 4: Create `RevealOnScroll` Component

**File**: `src/components/RevealOnScroll.tsx`
```tsx
'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export function RevealOnScroll({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
}
```

**Add to global CSS** (in the same file as your `@font-face` declarations or a `globals.css`):
```css
.reveal-section {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal-section {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

**Usage** — wrap each section's content container (NOT the `<section>` itself — keep `<section>` visible for SSR/SEO):
```tsx
<section id="services" className="bg-[#17100E]">
  <RevealOnScroll>
    <div className="py-16 sm:py-20 px-6 lg:px-8">
      {/* section content */}
    </div>
  </RevealOnScroll>
</section>
```

**SEO note**: The `<section>` and all its HTML content is fully server-rendered. The `opacity: 0` is a CSS class that search engines ignore. Googlebot renders with CSS but has confirmed that `opacity: 0` content is still indexed.

---

### Step 5: Create `CountUp` Component

**File**: `src/components/CountUp.tsx`
```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  target: number;
  suffix?: string;
  duration?: number;
}

export function CountUp({ target, suffix = '%', duration = 1800 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setCount(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // easeOutExpo for punchy deceleration
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return (
    <span ref={ref} aria-label={`${target}${suffix}`}>
      {count}{suffix}
    </span>
  );
}
```

**Usage in the Industry Expertise section**:
```tsx
<div className="text-7xl sm:text-8xl font-bold text-gray-100">
  <CountUp target={40} suffix="%" />
</div>
<p className="font-mono text-xs uppercase tracking-[0.15em] text-gray-400 mt-3">
  Financial Services
</p>
```

**SSR/SEO note**: The `aria-label="40%"` ensures accessibility tools and search engines get the real value. The initial render shows "0%" which hydrates immediately. For additional SSR safety, you can use a `<noscript>` tag:
```tsx
<noscript><span>40%</span></noscript>
<CountUp target={40} suffix="%" />
```

---

### Step 6: Create `SectionNav` Component (Sticky Sidebar)

**File**: `src/components/SectionNav.tsx`
```tsx
'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { id: 'services', label: 'SERVICES', num: '01' },
  { id: 'case-studies', label: 'CASE STUDIES', num: '02' },
  { id: 'expertise', label: 'EXPERTISE', num: '03' },
  { id: 'faq', label: 'FAQ', num: '04' },
] as const;

export function SectionNav() {
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    for (const { id } of NAV_ITEMS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="hidden lg:block sticky top-32 self-start w-40 shrink-0"
      aria-label="Page sections"
    >
      <ul className="space-y-1">
        {NAV_ITEMS.map(({ id, label, num }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block py-2.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors duration-200 ${
                active === id
                  ? 'text-teal-400 border-b border-teal-400'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {num}&ensp;{label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
```

**Layout integration in `page.tsx`** — wrap sections 2–5 in a flex container with the sidebar:
```tsx
{/* HERO (Section 0) — full width, no sidebar */}
<section id="hero" className="bg-[#17100E]">
  {/* ... hero content unchanged ... */}
</section>

{/* TRUST BAR (Section 1) — full width, no sidebar */}
<section id="trust" className="bg-[#17100E] py-24 sm:py-32">
  {/* ... logos ... */}
</section>

{/* SIDEBAR LAYOUT — wraps sections 2-5 */}
<div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
  <div className="lg:flex lg:gap-12">
    {/* Sticky sidebar nav */}
    <SectionNav />

    {/* Main content column */}
    <div className="flex-1 min-w-0">
      <section id="services" className="bg-[#17100E]">
        <RevealOnScroll>
          {/* ... services content ... */}
        </RevealOnScroll>
      </section>

      <section id="case-studies" className="bg-[#17100E]">
        <RevealOnScroll>
          {/* ... case studies content ... */}
        </RevealOnScroll>
      </section>

      <section id="expertise" className="bg-[#17100E]">
        <RevealOnScroll>
          {/* ... expertise/stats content ... */}
        </RevealOnScroll>
      </section>

      <section id="faq" className="bg-[#17100E]">
        <RevealOnScroll>
          {/* ... FAQ content ... */}
        </RevealOnScroll>
      </section>
    </div>
  </div>
</div>

{/* CTA (Section 6) — full width, no sidebar */}
<section id="cta" className="bg-[#17100E]">
  {/* ... CTA content ... */}
</section>
```

**Key**: The sidebar nav is hidden on mobile (`hidden lg:block`). On desktop it uses `sticky top-32` within a flex parent. The content column gets `flex-1 min-w-0` to fill remaining space. No CSS Grid needed — simpler and equally performant.

---

### Step 7: Add Section Labels to Each Content Section

Each section (services, case studies, expertise, FAQ) gets a label above the heading:
```tsx
{/* Pattern for every section label */}
<div className="flex items-center gap-2 mb-4">
  <span className="inline-block w-2 h-2 rounded-sm bg-teal-400" aria-hidden="true" />
  <span className="font-mono text-xs uppercase tracking-[0.15em] text-gray-400">
    CORE SERVICES
  </span>
</div>
<h2 className="font-serif text-4xl font-normal tracking-tight text-gray-100 sm:text-5xl">
  ...heading...
</h2>
```

Labels for each section:
- Section 2: `CORE SERVICES`
- Section 3: `CASE STUDIES`
- Section 4: `INDUSTRY EXPERTISE`
- Section 5: `FAQS`

---

### Step 8: Logo Marquee (Pure CSS)

Replace the static logo grid in Section 1 with a CSS-animated marquee.

**CSS to add** (global):
```css
.marquee {
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track {
  display: flex;
  gap: 4rem;
  width: max-content;
  animation: marquee-scroll 35s linear infinite;
}

@keyframes marquee-scroll {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
  }
}
```

**HTML structure** — duplicate the logo set once for seamless looping:
```tsx
<div className="marquee mt-10">
  <div className="marquee-track">
    {/* First set */}
    <img src="/logos/transistor.svg" alt="Transistor" className="h-8 brightness-0 invert opacity-50" width="165" height="32" />
    <img src="/logos/laravel.svg" alt="Laravel" className="h-8 brightness-0 invert opacity-50" width="165" height="32" />
    <img src="/logos/tuple.svg" alt="Tuple" className="h-8 brightness-0 invert opacity-50" width="165" height="32" />
    <img src="/logos/savvycal.svg" alt="SavvyCal" className="h-8 brightness-0 invert opacity-50" width="165" height="32" />
    <img src="/logos/statamic.svg" alt="Statamic" className="h-8 brightness-0 invert opacity-50" width="165" height="32" />
    {/* Duplicate set for seamless loop */}
    <img src="/logos/transistor.svg" alt="" className="h-8 brightness-0 invert opacity-50" width="165" height="32" aria-hidden="true" />
    <img src="/logos/laravel.svg" alt="" className="h-8 brightness-0 invert opacity-50" width="165" height="32" aria-hidden="true" />
    <img src="/logos/tuple.svg" alt="" className="h-8 brightness-0 invert opacity-50" width="165" height="32" aria-hidden="true" />
    <img src="/logos/savvycal.svg" alt="" className="h-8 brightness-0 invert opacity-50" width="165" height="32" aria-hidden="true" />
    <img src="/logos/statamic.svg" alt="" className="h-8 brightness-0 invert opacity-50" width="165" height="32" aria-hidden="true" />
  </div>
</div>
```

**Important**: Duplicated logos get `alt=""` and `aria-hidden="true"` to prevent screenreaders from reading them twice. Original logos keep real alt text.
**Important**: Add explicit `width` and `height` attributes to prevent CLS.

---

### Step 9: Restyle Stats Section for Big Numbers

In the Industry Expertise section (index 4), change the stats grid from 4-column cards to a more dramatic layout:
```tsx
<div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
  {stats.map((stat) => (
    <div key={stat.label} className="text-center sm:text-left">
      <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-100 tabular-nums">
        <CountUp target={stat.value} suffix={stat.suffix} />
      </div>
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-gray-400 mt-3">
        {stat.label}
      </p>
    </div>
  ))}
</div>
```

Remove the card wrappers (`rounded-2xl border border-gray-200 bg-gray-50 p-5`) — let the numbers breathe directly on the dark background without card borders. This is cleaner and matches the Fin.ai stat presentation.

---

### Step 10: Update `layout.tsx` Meta
```tsx
// Update theme-color meta tag
<meta name="theme-color" content="#17100E" />
```

If you have an OG image with a light background, consider updating it to match the dark theme — but this is optional and not a code change.

---

## Files Changed Summary

| File | Change Type | Description |
|------|------------|-------------|
| `src/app/layout.tsx` | Modify | Body classes: dark bg, update theme-color meta |
| `src/app/page.tsx` | Modify | All section class swaps (dark theme), section IDs, sidebar layout wrapper, section labels, serif headings, CountUp usage, RevealOnScroll wrapping |
| `src/components/CountUp.tsx` | **New file** | ~40 lines, `'use client'`, ~350 bytes gzipped |
| `src/components/RevealOnScroll.tsx` | **New file** | ~30 lines, `'use client'`, ~250 bytes gzipped |
| `src/components/SectionNav.tsx` | **New file** | ~50 lines, `'use client'`, ~450 bytes gzipped |
| Global CSS (where @font-face lives) | Modify | Add `--font-serif`, `.reveal-section` classes, `.marquee` classes (~400 bytes) |
| Header component | Modify | Nav link colors light, logo color if needed |
| Footer component | Modify | Dark bg, light text colors |

## Performance Budget Verification

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| New JS dependencies | 0 | 0 | ✅ Zero |
| New client components | 0 | 3 | +3 tiny (~1 KB gzip total) |
| New CSS | 0 | ~400 bytes | Negligible |
| New fonts | 0 | 0 | ✅ Zero (Lora already loaded) |
| DOM nodes | 359 | ~380 | +21 (sidebar nav + section labels) |
| CLS | 0 | 0 | ✅ Zero (only transform/opacity) |
| LCP impact | — | — | None (hero is still SSR, no blocking resources added) |
| FCP impact | — | — | None (no render-blocking additions) |
| New images | 0 | 0 | ✅ Zero (logos duplicated for marquee use same SVG files) |

## What NOT To Do

- ❌ Do NOT install `framer-motion` (22 KB gz)
- ❌ Do NOT install `gsap` or `@gsap/react` (28 KB gz)
- ❌ Do NOT install `aos` (6 KB gz)
- ❌ Do NOT install `react-countup` or `countup.js` (4 KB gz)
- ❌ Do NOT use `useLayoutEffect` (causes hydration warnings in SSR)
- ❌ Do NOT add `will-change` CSS property (causes GPU memory bloat)
- ❌ Do NOT animate `height`, `width`, `top`, `left`, `margin`, or `padding` (causes layout thrash)
- ❌ Do NOT wrap `<section>` elements inside client components (breaks SSR streaming)
- ❌ Do NOT change heading hierarchy (H1 → H2 → H3 is correct)
- ❌ Do NOT remove any existing meta tags, OG tags, or structured data
- ❌ Do NOT add external script tags or third-party resources
- ❌ Do NOT use `dangerouslySetInnerHTML` for any animations
- ❌ Do NOT use `position: fixed` for the sidebar (use `sticky`)

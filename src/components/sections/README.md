# Sections Components

This directory contains page sections built with Tailwind UI components.

## Structure

```
sections/
├── HeroSection.tsx          # Homepage hero
├── ServicesSection.tsx      # Services overview
├── TestimonialsSection.tsx  # Client testimonials
├── CTASection.tsx           # Call-to-action sections
├── StatsSection.tsx         # Statistics/metrics
├── ContactSection.tsx       # Contact form
└── README.md               # This file
```

## Usage

Import and use in your pages:

```tsx
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
    </main>
  )
}
```

## Creating New Sections

1. Browse Tailwind UI (https://tailwindui.com)
2. Copy the React component code
3. Create a new file here
4. Customize for AKRIN branding
5. Import and use in your pages

## Naming Convention

- Use descriptive names: `HeroSection`, not `Hero`
- Use PascalCase for component names
- One component per file
- Export as default


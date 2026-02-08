# How to Use Tailwind UI Components - Step by Step Guide

## 🎯 Quick Overview

You have Tailwind CSS Plus lifetime license, which gives you access to **ALL** Tailwind UI components. Here's how to use them effectively.

---

## 📖 Step-by-Step Process

### Step 1: Access Tailwind UI

1. Go to **https://tailwindui.com**
2. Click "Sign In" (top right)
3. Login with your Tailwind CSS Plus account
4. You'll see the component library

---

### Step 2: Browse Components

**Main Categories:**
- **Marketing** - Perfect for AKRIN website (hero sections, features, testimonials, CTAs)
- **Application UI** - For dashboards/admin panels (if needed later)
- **Ecommerce** - For product pages (probably not needed)

**For AKRIN, focus on Marketing:**
- Hero Sections
- Feature Sections
- CTA Sections
- Testimonials
- Contact Sections
- Stats
- Logo Clouds
- Team Sections
- FAQ Sections

---

### Step 3: Select a Component

**Example: Let's add a Hero Section**

1. Go to: Marketing → Hero Sections
2. Browse the options (there are ~20 different hero designs)
3. Click on one you like
4. You'll see a preview

**Recommended for AKRIN:**
- "With background image and overlapping cards" - Professional, modern
- "Split with screenshot" - Shows your product/service
- "With angled image on right" - Clean, corporate

---

### Step 4: Copy the Code

1. Click the **"React"** tab (we're using React/Next.js)
2. Click **"Copy"** button
3. The component code is now in your clipboard

**Example code you'll get:**
```jsx
export default function Example() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Data to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt...
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5...">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

### Step 5: Create Component File

1. Create a new file in your project:
   ```
   src/components/sections/HeroSection.tsx
   ```

2. Paste the code

3. Customize the content for AKRIN:
   - Change headline to AKRIN's message
   - Update description
   - Change button text and links
   - Adjust colors to match brand

---

### Step 6: Customize for AKRIN

**Example customization:**

```tsx
export default function HeroSection() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Enterprise IT Solutions for Modern Businesses in Japan
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              24/7 Managed Services, Cybersecurity, and Cloud Migration. 
              Trusted by leading companies across Tokyo and beyond.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a 
                href="/contact" 
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Get Started
              </a>
              <a 
                href="/services" 
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Our Services <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

### Step 7: Import and Use

In your page file (e.g., `src/app/page.tsx`):

```tsx
import HeroSection from '@/components/sections/HeroSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      {/* Other sections */}
    </main>
  )
}
```

---

## 🎨 Customization Tips

### 1. Colors
Replace Tailwind UI's default colors with AKRIN's brand:
- `bg-indigo-600` → `bg-blue-600` (or your brand color)
- `text-indigo-600` → `text-blue-600`

### 2. Fonts
The components use Tailwind's default fonts. Your project uses:
- `font-sans` (currently Switzer)
- Update in `src/styles/tailwind.css` to use your brand font

### 3. Spacing
Adjust padding/margin if needed:
- `py-32` → `py-24` (reduce vertical padding)
- `px-6` → `px-4` (reduce horizontal padding)

### 4. Images
Replace placeholder images:
- Use Next.js `<Image>` component
- Optimize images (WebP/AVIF)
- Add proper alt text

---

## 🚀 Recommended Components for AKRIN

### Homepage:
1. **Hero**: "With background image and overlapping cards"
2. **Services**: "Feature grid with offset icons"
3. **Stats**: "Simple in card"
4. **Testimonials**: "Side-by-side on brand"
5. **CTA**: "Simple centered"

### Service Pages:
1. **Hero**: "Simple centered"
2. **Features**: "With feature list"
3. **FAQ**: "Two columns"
4. **CTA**: "Brand panel with overlapping image"

### About Page:
1. **Team**: "With large images"
2. **Stats**: "With background image"
3. **Values**: "With large icons"

### Contact Page:
1. **Contact**: "Split with pattern"
2. **Map**: Custom Google Maps integration

---

## 💡 Pro Tips

### 1. Don't Copy Everything
- Only copy the components you need
- Avoid bloating your codebase

### 2. Create Reusable Components
- Extract common patterns (buttons, cards, etc.)
- Store in `src/components/ui/`

### 3. Maintain Consistency
- Use the same button styles across all pages
- Keep spacing consistent
- Use a limited color palette

### 4. Mobile-First
- All Tailwind UI components are responsive
- Test on mobile devices
- Adjust breakpoints if needed

### 5. Accessibility
- Tailwind UI components are accessible by default
- Keep ARIA labels
- Maintain keyboard navigation

---

## 📝 Next Steps

**Ready to start? Here's what I recommend:**

1. **Browse Tailwind UI now**: Go to https://tailwindui.com
2. **Pick 3 components**:
   - One hero section for homepage
   - One feature section for services
   - One testimonial section
3. **Share with me**: Tell me which ones you picked (or send screenshots)
4. **I'll implement**: I'll integrate them into your project with AKRIN branding

**Want me to show you a specific example? Just ask!**

For example:
- "Show me how to add the hero section with background image"
- "Create a services section with 6 service cards"
- "Add a testimonials section with client reviews"

I'm ready to help you build an amazing website! 🚀


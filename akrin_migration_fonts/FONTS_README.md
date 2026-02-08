# AKRIN Website Fonts

This folder contains the professional fonts used on the AKRIN website.

---

## Font Files

| File | Font | Type | Size |
|------|------|------|------|
| `Inter.var.woff2` | Inter Variable | Web (WOFF2) | 225 KB |
| `Inter-VariableFont_slnt,wght.ttf` | Inter Variable | Desktop (TTF) | 275 KB |
| `Lora.var.woff2` | Lora Variable | Web (WOFF2) | 82 KB |
| `Lora-VariableFont_wght.ttf` | Lora Variable | Desktop (TTF) | 275 KB |

---

## Font Details

### Inter Variable
- **Type:** Sans-serif
- **Weight Range:** 100-900
- **Slant Range:** -10deg to 0deg
- **Usage:** Body text, UI elements, navigation
- **License:** SIL Open Font License 1.1
- **Source:** https://rsms.me/inter/

### Lora Variable
- **Type:** Serif
- **Weight Range:** 400-700
- **Usage:** Headlines, titles (premium look)
- **License:** SIL Open Font License 1.1
- **Source:** https://fonts.google.com/specimen/Lora

---

## Implementation

### CSS (@font-face)

```css
/* Inter Variable */
@font-face {
  font-family: 'Inter Var';
  src: url('/fonts/Inter.var.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* Lora Variable */
@font-face {
  font-family: 'Lora Var';
  src: url('/fonts/Lora.var.woff2') format('woff2');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}
```

### HTML Preload (Recommended for Performance)

```html
<link rel="preload" href="/fonts/Inter.var.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/fonts/Lora.var.woff2" as="font" type="font/woff2" crossorigin />
```

### Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Var', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Lora Var', 'Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
}
```

---

## Usage Guidelines

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Headlines (H1) | Lora Var | 700 | 48-72px |
| Subheadlines (H2-H3) | Inter Var | 600-700 | 24-36px |
| Body Text | Inter Var | 400 | 16-18px |
| Navigation | Inter Var | 500 | 14-16px |
| Buttons | Inter Var | 600 | 14-16px |
| Captions | Inter Var | 400 | 12-14px |

---

## Japanese Text Support

For Japanese text, add fallback fonts:

```css
font-family: 'Inter Var', 'Noto Sans JP', 'Hiragino Sans', 'Yu Gothic', sans-serif;
font-family: 'Lora Var', 'Noto Serif JP', 'Yu Mincho', serif;
```

---

*Fonts included in AKRIN Migration Package*

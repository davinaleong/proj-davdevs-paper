# 📄 Dav/Devs Paper

> **A premium paper-inspired design system that brings the warmth and elegance of real paper to your digital interfaces.**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

## ✨ **What Makes Paper Special?**

Dav/Devs Paper transforms cold, digital interfaces into warm, inviting experiences that feel like working with real paper. Every shadow, texture, and interaction is crafted to bring the tactile joy of paper to your web applications.

### 🎯 **Perfect For**
- **SaaS Applications** - Make dashboards feel approachable
- **Content Sites** - Reading experiences that don't strain the eyes  
- **Documentation** - Technical content that feels human
- **E-commerce** - Product pages with tangible appeal
- **Portfolios** - Creative work that stands out

---

## 🚀 **Quick Start**

### Basic Tier (Free)
Clean, accessible components using Tailwind's default palette.

```bash
npm install @davdevs/paper-basic
```

```css
/* In your CSS */
@import "@davdevs/paper-basic/css";
```

```jsx
import { Card, Button, Text } from '@davdevs/paper-basic'

export default function App() {
  return (
    <Card className="paper-md">
      <Text variant="lead">Welcome to Paper UI</Text>
      <Button variant="primary">Get Started</Button>
    </Card>
  )
}
```

### Premium Tier (Commercial)
Unlock paper textures, advanced shadows, and signature components.

```bash
npm install @davdevs/paper-premium
```

```css
/* In your CSS */
@import "@davdevs/paper-premium/css";
```

```jsx
import { PaperCard, Notebook, PaperHero } from '@davdevs/paper-premium'

export default function PremiumApp() {
  return (
    <div className="paper-base paper-texture-grain">
      <PaperHero elevation="float">
        <Notebook pages={3}>
          <PaperCard torn="top-right">
            Premium paper magic ✨
          </PaperCard>
        </Notebook>
      </PaperHero>
    </div>
  )
}
```

---

## 📦 **Two Tiers, One Philosophy**

### 🟦 **Basic Tier** - *Free & Open Source*

**What's Included:**
- ✅ Complete component library (50+ components)
- ✅ Typography system with Montserrat + Playfair Display
- ✅ Layout primitives (Stack, Grid, Container)
- ✅ Form components with validation states
- ✅ Dark mode support
- ✅ Tailwind-native styling
- ✅ React + Next.js + Astro compatible
- ✅ MIT License

**Color Palette:**
- Primary: `blue-600` (Tailwind blue)
- Secondary: `slate-600` (Tailwind slate)  
- Text: `gray-800` / `gray-200`
- Background: `white` / `slate-950`

### 🟨 **Premium Tier** - *Commercial License*

**Everything in Basic, Plus:**
- ✨ Authentic paper textures and grain effects
- ✨ Advanced paper shadows with realistic depth
- ✨ Premium paper color palette (`#FAF9F7`, `#121212`)
- ✨ Signature components (Notebook, PaperStack, PaperHero)
- ✨ Torn paper effects and stacked variants
- ✨ Enhanced dark paper theme
- ✨ Advanced animation presets
- ✨ Priority support & updates

---

## 🎨 **Design Philosophy**

### **Paper-First Thinking**
Every component starts with a simple question: *"How would this look on real paper?"*

- **Shadows** mimic natural paper depth
- **Colors** are warm and inviting, never harsh
- **Spacing** follows paper proportions  
- **Typography** balances readability with character
- **Interactions** feel tactile and responsive

### **Framework Agnostic**
While built for React, Paper degrades gracefully:

```html
<!-- Pure HTML/CSS usage -->
<div class="paper paper-md paper-elevated">
  <h2 class="text-heading-lg">Pure HTML Works Too</h2>
  <p class="text-body">No JavaScript required for basic styling.</p>
</div>
```

---

## 🛠 **Technical Stack**

- **TypeScript** - Type-safe component APIs
- **React 18+** - Modern React with hooks
- **Tailwind v4** - Utility-first styling  
- **Vite** - Lightning-fast builds
- **CSS Variables** - Dynamic theming
- **ESM + CJS** - Universal compatibility

---

## 📚 **Documentation & Examples**

- 📖 **[Component Docs](https://paper-ui.davina.dev/docs)** - Complete API reference
- 🎨 **[Design Tokens](https://paper-ui.davina.dev/tokens)** - Colors, spacing, typography
- 🧪 **[Storybook](https://paper-ui.davina.dev/storybook)** - Interactive examples
- 🏗 **[Templates](https://paper-ui.davina.dev/templates)** - Production-ready layouts

---

## 🚦 **Framework Support**

| Framework | Basic | Premium | Status |
|-----------|-------|---------|--------|
| **React** | ✅ | ✅ | Full support |
| **Next.js** | ✅ | ✅ | App Router + Pages |
| **Astro** | ✅ | ✅ | SSR + Islands |
| **Vite** | ✅ | ✅ | Native |
| **HTML/CSS** | ✅ | ✅ | Class-based |

---

## 📄 **License & Pricing**

### Basic Tier
- **License:** MIT
- **Price:** Free forever
- **Commercial use:** ✅ Allowed

### Premium Tier  
- **License:** Commercial
- **Price:** Coming soon
- **Enterprise:** Custom licensing available

---

## 🤝 **Contributing**

We welcome contributions to the Basic tier! 

```bash
git clone https://github.com/davinaleong/proj-davdevs-paper.git
cd proj-davdevs-paper
pnpm install
pnpm dev
```

---

## 🎯 **Roadmap**

- [ ] **Q1 2026** - Basic tier public release
- [ ] **Q2 2026** - Premium tier launch  
- [ ] **Q3 2026** - Vue.js support
- [ ] **Q4 2026** - Figma plugin

---

**Made with ❤️ by [Davina Leong](https://github.com/davinaleong)**

*Transform your interfaces from digital to delightful.*
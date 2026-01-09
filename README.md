# 📄 DavDevs Paper Design System

> **A premium paper-inspired design system that brings the warmth and elegance of real paper to your digital interfaces.**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![npm](https://img.shields.io/npm/v/@davdevs/paper-basic)](https://npmjs.com/package/@davdevs/paper-basic)

## ✨ What Makes Paper Special?

DavDevs Paper transforms cold, digital interfaces into warm, inviting experiences that feel like working with real paper. Every shadow, texture, and interaction is crafted to bring the tactile joy of paper to your web applications.

### 🎯 Perfect For
- **SaaS Applications** - Make dashboards feel approachable
- **Content Sites** - Reading experiences that don't strain the eyes  
- **Documentation** - Technical content that feels human
- **E-commerce** - Product pages with tangible appeal
- **Portfolios** - Creative work that stands out

---

## 📦 Packages

### Core Packages (Free)

| Package | Description | Version |
|---------|-------------|---------|
| [`@davdevs/paper-foundations`](./packages/foundations) | Design tokens and primitives | ![npm](https://img.shields.io/npm/v/@davdevs/paper-foundations) |
| [`@davdevs/paper-core`](./packages/core) | Core CSS foundation | ![npm](https://img.shields.io/npm/v/@davdevs/paper-core) |
| [`@davdevs/paper-basic`](./packages/basic) | Basic React components | ![npm](https://img.shields.io/npm/v/@davdevs/paper-basic) |
| [`@davdevs/paper-react`](./packages/react) | React hooks and utilities | ![npm](https://img.shields.io/npm/v/@davdevs/paper-react) |
| [`@davdevs/paper-styles`](./packages/styles) | Framework-agnostic CSS | ![npm](https://img.shields.io/npm/v/@davdevs/paper-styles) |

### Premium Package (Commercial)

| Package | Description | License |
|---------|-------------|---------|
| [`@davdevs/paper-premium`](./packages/premium) | Premium components & effects | Commercial |

---

## 🚀 Quick Start

### Option 1: Basic Tier (Free)
Clean, accessible components perfect for getting started:

```bash
npm install @davdevs/paper-basic @davdevs/paper-foundations
```

```tsx
import { Card, Button, Heading } from '@davdevs/paper-basic';
import '@davdevs/paper-basic/css';

export default function App() {
  return (
    <Card elevation="medium">
      <Heading level={1}>Welcome to Paper UI</Heading>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

### Option 2: Premium Tier (Commercial)
Advanced paper textures, effects, and exclusive components:

```bash
npm install @davdevs/paper-premium
# Requires license key - see packages/premium/README.md
```

```tsx
import { PaperCanvas, TexturedCard } from '@davdevs/paper-premium';
import '@davdevs/paper-premium/css';

export default function App() {
  return (
    <PaperCanvas texture="parchment">
      <TexturedCard texture="linen" effect="letterpress">
        <h1>Premium Paper Experience</h1>
      </TexturedCard>
    </PaperCanvas>
  );
}
```

### Option 3: Pure CSS (Framework Agnostic)
Use with any framework or vanilla HTML:

```bash
npm install @davdevs/paper-styles
```

```html
<link rel="stylesheet" href="node_modules/@davdevs/paper-styles/dist/index.css">

<div class="paper-container">
  <div class="paper-card paper-elevation-2">
    <h1 class="paper-heading-1">Paper Design</h1>
    <button class="paper-button paper-button--primary">Click Me</button>
  </div>
</div>
```

---

## 📚 Documentation

- 📖 **[Full Documentation](https://davdevs-paper.com/docs)** - Complete guides and API reference
- 🎨 **[Storybook](https://davdevs-paper.com/storybook)** - Interactive component gallery  
- 🧪 **[Playground](https://davdevs-paper.com/playground)** - Try components online
- 📝 **[Blog](https://davdevs-paper.com/blog)** - Design insights and updates

### Quick Links
- [Getting Started Guide](https://davdevs-paper.com/docs/getting-started)
- [Component Library](https://davdevs-paper.com/docs/components)
- [Design Tokens](https://davdevs-paper.com/docs/tokens)
- [Theming Guide](https://davdevs-paper.com/docs/theming)
- [Premium Features](https://davdevs-paper.com/docs/premium)

---

## 🏗️ Development

### Prerequisites
- Node.js 18+
- npm, yarn, or pnpm

### Setup
```bash
git clone https://github.com/davinaleong/proj-davdevs-paper.git
cd proj-davdevs-paper
npm install
```

### Development Commands
```bash
npm run dev          # Start docs dev server
npm run build        # Build all packages
npm run test         # Run tests
npm run clean        # Clean build artifacts
```

### Package Management
```bash
# Using npm workspaces
npm run build --workspaces
npm run test --workspace=packages/basic

# Using pnpm (recommended)
pnpm install
pnpm run build --filter @davdevs/paper-basic

# Using yarn
yarn install
yarn workspace @davdevs/paper-basic build
```

### Publishing
See [PUBLISHING_GUIDE.md](./PUBLISHING_GUIDE.md) for detailed publishing instructions.

---

## 🎨 Design Philosophy

### Paper-Inspired Aesthetics
- **Warm Color Palettes**: Creams, beiges, and muted earth tones
- **Natural Textures**: Subtle paper grain and texture overlays (Premium)
- **Organic Shadows**: Soft, realistic drop shadows and elevations
- **Typography**: Reading-optimized fonts with proper contrast

### Accessibility First
- **WCAG 2.1 AA Compliance**: All components meet accessibility standards
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Reader Support**: Proper ARIA labels and semantic markup
- **Color Contrast**: Sufficient contrast ratios for all text

### Developer Experience
- **TypeScript**: Full type definitions for everything
- **Tree Shaking**: Import only what you need
- **Framework Agnostic**: Use with React, Vue, Angular, or vanilla HTML
- **Customizable**: Easy theming with CSS custom properties

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

### Ways to Contribute
- 🐛 **Bug Reports**: Found an issue? Let us know!
- 💡 **Feature Requests**: Have an idea? Share it with us!
- 📝 **Documentation**: Help improve our docs
- 🧩 **Components**: Contribute new components or improvements
- 🎨 **Design**: Help refine the design system

---

## 📄 License

- **Core Packages**: MIT License - free for personal and commercial use
- **Premium Package**: Commercial License - see [packages/premium/LICENSE.md](./packages/premium/LICENSE.md)

---

## 🌟 Showcase

Built something amazing with Paper UI? We'd love to feature it!

- [Submit your project](https://davdevs-paper.com/showcase/submit)
- [View showcase gallery](https://davdevs-paper.com/showcase)

---

## 💬 Community

- 💬 **Discord**: [Join our community](https://discord.gg/davdevs-paper)
- 🐦 **Twitter**: [@davdevspaper](https://twitter.com/davdevspaper)
- 📧 **Email**: hello@davdevs-paper.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/davinaleong/proj-davdevs-paper/issues)

---

**Made with ❤️ by [Davina Leong](https://github.com/davinaleong)**

*Bringing the warmth of paper to the digital world.*
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
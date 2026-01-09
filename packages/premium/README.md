# @davdevs/paper-premium

🎨 **Premium Components for DavDevs Paper Design System**

Premium tier components featuring paper textures, advanced effects, and exclusive UI elements for professional applications.

## ⚡ Features

- **Paper Textures**: Authentic paper backgrounds and textures
- **Advanced Effects**: Shadows, gradients, and interactive animations  
- **Premium Components**: Exclusive components not available in basic tier
- **Enhanced Styling**: Advanced CSS properties and custom designs
- **TypeScript Support**: Full type definitions included

## 🔐 License & Installation

This is a **commercial package** that requires a valid license to use.

### Step 1: Purchase License

Visit [davdevs-paper.com/pricing](https://davdevs-paper.com/pricing) to purchase:

- **Individual** ($99/year) - Single developer
- **Team** ($299/year) - Up to 10 developers  
- **Enterprise** ($999/year) - Unlimited developers

### Step 2: Configure Environment

Set your license credentials:

```bash
# Add to your .env file or shell profile
export DAVDEVS_PAPER_LICENSE_KEY="your-license-key"
export DAVDEVS_PAPER_LICENSE_EMAIL="your-email@example.com"
```

### Step 3: Install Package

```bash
# npm
npm install @davdevs/paper-premium

# yarn
yarn add @davdevs/paper-premium

# pnpm
pnpm add @davdevs/paper-premium
```

## 🚀 Quick Start

```tsx
import { PaperCanvas, TexturedButton, PremiumCard } from '@davdevs/paper-premium';
import '@davdevs/paper-premium/css';

function App() {
  return (
    <PaperCanvas texture="parchment">
      <PremiumCard elevation="high" texture="linen">
        <h1>Premium Content</h1>
        <TexturedButton variant="embossed" texture="leather">
          Click Me
        </TexturedButton>
      </PremiumCard>
    </PaperCanvas>
  );
}
```

## 📚 Components

### Paper Canvas
Full-page paper backgrounds with texture support:
- Parchment, linen, canvas, cardboard textures
- Customizable grain intensity and color

### Textured Buttons  
Enhanced buttons with paper-like textures:
- Embossed, letterpress, and raised effects
- Multiple texture options

### Premium Cards
Advanced card components:
- Multiple elevation levels
- Texture overlays
- Shadow and lighting effects

### Interactive Elements
- Animated page turns
- Folding effects  
- Paper-inspired transitions

## 🔧 Configuration

### Tailwind CSS Plugin

```js
// tailwind.config.js
module.exports = {
  plugins: [
    require('@davdevs/paper-premium/plugin'),
  ],
}
```

### CSS Import

```css
/* Import base styles */
@import '@davdevs/paper-premium/css';
```

## 🎯 Usage Examples

### Paper Textures

```tsx
import { PaperCanvas } from '@davdevs/paper-premium';

<PaperCanvas 
  texture="vintage" 
  grain="medium"
  tint="#f5f5dc"
>
  {/* Your content */}
</PaperCanvas>
```

### Textured Components

```tsx
import { TexturedCard, EmbossedText } from '@davdevs/paper-premium';

<TexturedCard texture="canvas" depth="raised">
  <EmbossedText variant="letterpress">
    Premium Typography
  </EmbossedText>
</TexturedCard>
```

## 🛠️ Development

### Prerequisites
- Valid license key and email
- Node.js 18+
- React 16.8+

### Local Development

```bash
git clone <your-repo>
cd packages/premium
npm install
npm run dev
```

## 🔒 License Validation

The package includes automatic license validation:

- ✅ Validates license on installation
- ✅ Caches validation for offline use (72 hours)
- ✅ Skips validation in CI/development environments
- ✅ Graceful fallback for network issues

### Troubleshooting License Issues

If you encounter license validation errors:

1. **Check Credentials**: Ensure `DAVDEVS_PAPER_LICENSE_KEY` and `DAVDEVS_PAPER_LICENSE_EMAIL` are set correctly

2. **Network Issues**: License validation requires internet access. Cached licenses work offline for 72 hours.

3. **CI/CD**: Set `CI=true` or `NODE_ENV=development` to skip validation in automated environments

4. **Expired License**: Renew your license at [davdevs-paper.com/pricing](https://davdevs-paper.com/pricing)

## 📖 Documentation

- [Component API Reference](https://davdevs-paper.com/docs/premium/api)
- [Design Guidelines](https://davdevs-paper.com/docs/premium/design)
- [Migration Guide](https://davdevs-paper.com/docs/premium/migration)

## 💬 Support

Premium license holders get priority support:

- 📧 **Email**: support@davdevs-paper.com
- 🐛 **GitHub Issues**: Include license email for verification
- 💬 **Discord**: Premium channel access
- 📞 **Enterprise**: Dedicated support contact

## 📦 Related Packages

- [`@davdevs/paper-basic`](https://npmjs.com/package/@davdevs/paper-basic) - Free tier components
- [`@davdevs/paper-foundations`](https://npmjs.com/package/@davdevs/paper-foundations) - Design tokens
- [`@davdevs/paper-react`](https://npmjs.com/package/@davdevs/paper-react) - React utilities

## 📄 License

Commercial License - See [LICENSE.md](./LICENSE.md) for details.

---

**Made with ❤️ by [Davina Leong](https://github.com/davinaleong)**
# @davdevs/paper-core

🎨 **Core CSS Foundation for DavDevs Paper Design System**

Essential CSS foundations including paper-inspired themes, typography, and core styling primitives.

## Features

- **Paper Theme**: Core paper-inspired color schemes and textures
- **Typography System**: Consistent text styling and hierarchy
- **CSS Variables**: Customizable theming system
- **Responsive Design**: Mobile-first responsive utilities
- **Print Styles**: Optimized for print media

## Installation

```bash
npm install @davdevs/paper-core
# or
yarn add @davdevs/paper-core
# or  
pnpm add @davdevs/paper-core
```

## Usage

### Import Styles

```css
/* Import all core styles */
@import '@davdevs/paper-core/css';

/* Or import individual files */
@import '@davdevs/paper-core/src/paper.css';
@import '@davdevs/paper-core/src/theme.css';  
@import '@davdevs/paper-core/src/typography.css';
```

### CSS Custom Properties

```css
:root {
  --paper-bg: #fdfdf8;
  --paper-text: #2c2c2c;
  --paper-accent: #8b7355;
  /* Many more variables available */
}
```

## Included Styles

### Paper Theme (`paper.css`)
- Paper-inspired background colors
- Subtle texture effects
- Elevation and shadow system

### Typography (`typography.css`)  
- Font family definitions
- Heading and body text styles
- Reading-optimized line heights
- Responsive text scaling

### Theme System (`theme.css`)
- CSS custom property definitions
- Light/dark theme support
- Brand color variations

## Customization

Override CSS custom properties to customize the theme:

```css
:root {
  /* Override paper background */
  --paper-bg: #f9f9f4;
  
  /* Override accent color */
  --paper-accent: #6b5b73;
  
  /* Override typography */
  --paper-font-serif: 'Crimson Text', serif;
}
```

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties support required
- Graceful fallbacks for older browsers

## License

MIT License - see [LICENSE](https://github.com/davinaleong/proj-davdevs-paper/blob/main/LICENSE) for details.

## Links

- [Documentation](https://davdevs-paper.com/docs/core)
- [GitHub](https://github.com/davinaleong/proj-davdevs-paper)
- [npm](https://npmjs.com/package/@davdevs/paper-core)
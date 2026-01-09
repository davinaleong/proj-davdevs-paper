# @davdevs/paper-styles

🎨 **Pure CSS Styles for DavDevs Paper Design System**

Framework-agnostic CSS styles that can be used with any JavaScript framework or vanilla HTML. Perfect for projects that don't use React or prefer pure CSS solutions.

## Features

- **Framework Agnostic**: Works with any JS framework or vanilla HTML
- **Pure CSS**: No JavaScript runtime required
- **PostCSS Processed**: Optimized and autoprefixed
- **Modular**: Import only the styles you need
- **Customizable**: CSS custom properties for theming

## Installation

```bash
npm install @davdevs/paper-styles
# or
yarn add @davdevs/paper-styles
# or
pnpm add @davdevs/paper-styles
```

## Usage

### Full Import

```css
/* Import all styles */
@import '@davdevs/paper-styles';
```

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="node_modules/@davdevs/paper-styles/dist/index.css">
</head>
<body>
  <div class="paper-container">
    <div class="paper-card paper-elevation-2">
      <h1 class="paper-heading-1">Paper Design System</h1>
      <p class="paper-body-text">Beautiful paper-inspired styles.</p>
      <button class="paper-button paper-button--primary">Get Started</button>
    </div>
  </div>
</body>
</html>
```

### Selective Imports

```css
/* Import only specific modules */
@import '@davdevs/paper-styles/foundations';
@import '@davdevs/paper-styles/components/buttons';  
@import '@davdevs/paper-styles/components/cards';
```

## Available CSS Classes

### Layout
```css
.paper-container        /* Responsive container */
.paper-grid            /* CSS Grid layout */
.paper-stack           /* Vertical spacing */
.paper-inline          /* Horizontal spacing */
.paper-surface         /* Basic surface styling */
```

### Typography
```css
.paper-heading-1       /* H1 styling */
.paper-heading-2       /* H2 styling */
.paper-heading-3       /* H3 styling */
.paper-body-text       /* Paragraph text */
.paper-body-small      /* Small text */
.paper-label           /* Form labels */
```

### Components
```css
.paper-button          /* Base button */
.paper-button--primary /* Primary button variant */
.paper-button--secondary /* Secondary button variant */
.paper-card            /* Card component */
.paper-input           /* Input styling */
.paper-badge           /* Badge component */
```

### Utilities
```css
.paper-elevation-1     /* Subtle shadow */
.paper-elevation-2     /* Medium shadow */
.paper-elevation-3     /* Strong shadow */
.paper-rounded         /* Border radius */
.paper-text-center     /* Center text */
```

## Customization

Override CSS custom properties to customize the design:

```css
:root {
  /* Colors */
  --paper-color-primary: #8b7355;
  --paper-color-secondary: #6b5b73;
  --paper-color-background: #fdfdf8;
  
  /* Typography */
  --paper-font-serif: 'Crimson Text', serif;
  --paper-font-sans: 'Inter', sans-serif;
  
  /* Spacing */
  --paper-space-xs: 0.25rem;
  --paper-space-sm: 0.5rem;
  --paper-space-md: 1rem;
  --paper-space-lg: 1.5rem;
  
  /* Borders */
  --paper-border-radius: 0.375rem;
  --paper-border-width: 1px;
}
```

## Build Process

The CSS is processed with PostCSS including:

- **Autoprefixer**: Automatic vendor prefixes
- **CSS Import**: Resolve `@import` statements  
- **Custom Properties**: CSS variable support
- **Minification**: Optimized file size

## Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties support required
- Fallbacks provided for older browsers where possible

## Framework Integration

### Vue.js
```vue
<template>
  <div class="paper-container">
    <div class="paper-card">
      <h1 class="paper-heading-1">{{ title }}</h1>
      <button class="paper-button paper-button--primary">
        Click me
      </button>
    </div>
  </div>
</template>

<style>
@import '@davdevs/paper-styles';
</style>
```

### Angular
```scss
// styles.scss
@import '~@davdevs/paper-styles';
```

```html
<!-- component.html -->
<div class="paper-container">
  <div class="paper-card">
    <h1 class="paper-heading-1">{{ title }}</h1>
    <button class="paper-button paper-button--primary">
      Click me  
    </button>
  </div>
</div>
```

### Svelte
```svelte
<style>
  @import '@davdevs/paper-styles';
</style>

<div class="paper-container">
  <div class="paper-card">
    <h1 class="paper-heading-1">{title}</h1>
    <button class="paper-button paper-button--primary">
      Click me
    </button>
  </div>
</div>
```

## CDN Usage

For quick prototyping, use the CDN version:

```html
<link rel="stylesheet" href="https://unpkg.com/@davdevs/paper-styles@latest/dist/index.css">
```

## Development

To modify and build the styles:

```bash
git clone <repository>
cd packages/styles
npm install
npm run build
```

## License

MIT License - see [LICENSE](https://github.com/davinaleong/proj-davdevs-paper/blob/main/LICENSE) for details.

## Links

- [Documentation](https://davdevs-paper.com/docs/styles)
- [Class Reference](https://davdevs-paper.com/docs/styles/classes)
- [GitHub](https://github.com/davinaleong/proj-davdevs-paper)
- [npm](https://npmjs.com/package/@davdevs/paper-styles)
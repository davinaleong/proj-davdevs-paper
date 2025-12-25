# Box Component

The Box component is the foundational primitive for creating paper-inspired containers with consistent spacing, borders, and elevation effects.

## Features

- 🎨 **Multiple Variants** - default, secondary, tertiary, inverse, transparent
- 📏 **Flexible Sizing** - Configurable padding and border radius
- ⬆️ **Elevation System** - Paper-style shadows (none to 2xl)
- ♿ **Accessibility** - Built-in focus management and ARIA support
- 📱 **Responsive** - Mobile-optimized spacing
- 🎯 **Polymorphic** - Render as any HTML element or React component

## Usage

```tsx
import { Box } from '@davdevs/paper-foundations';

// Basic usage
<Box>
  <p>Simple paper container</p>
</Box>

// With elevation and styling
<Box 
  variant="secondary" 
  elevation="md" 
  padding="lg" 
  radius="lg"
  border
>
  <h2>Elevated Paper Card</h2>
  <p>Content with medium elevation and large padding</p>
</Box>

// Interactive box
<Box 
  elevation="sm"
  padding="md"
  radius="base"
  onClick={() => console.log('Clicked!')}
  className="cursor-pointer"
>
  <p>Click me!</p>
</Box>

// Polymorphic usage
<Box as="section" variant="inverse" padding="xl">
  <h1>This renders as a section element</h1>
</Box>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Content to render inside the box |
| `variant` | `'default' \| 'secondary' \| 'tertiary' \| 'inverse' \| 'transparent'` | `'default'` | Visual style variant |
| `elevation` | `'none' \| 'sm' \| 'base' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'none'` | Shadow depth level |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Internal padding amount |
| `radius` | `'none' \| 'sm' \| 'base' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| 'full'` | `'base'` | Border radius |
| `border` | `boolean` | `false` | Whether to show border |
| `as` | `ElementType` | `'div'` | HTML element or React component to render |
| `className` | `string` | - | Additional CSS classes |

## Variants

### Default
Clean white background suitable for most content.

### Secondary  
Subtle gray background for secondary content areas.

### Tertiary
Light gray background for less prominent sections.

### Inverse
Dark background with light text for emphasis.

### Transparent
No background, useful for layout containers.

## Elevation Levels

- `none` - No shadow (flat)
- `sm` - Subtle shadow
- `base` - Standard shadow
- `md` - Medium shadow  
- `lg` - Large shadow
- `xl` - Extra large shadow
- `2xl` - Maximum shadow depth

## Accessibility

- Automatic focus ring for keyboard navigation
- Proper ARIA roles when used interactively
- High contrast mode support
- Reduced motion support

## Design Tokens

The Box component uses design tokens from the theme system:

```css
/* Surface colors */
--surface-primary: var(--color-white);
--surface-secondary: var(--color-gray-50);
--surface-tertiary: var(--color-gray-100);
--surface-inverse: var(--color-gray-900);

/* Shadows */
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-base: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
/* ... etc */

/* Motion */
--transition-shadow: box-shadow var(--motion-duration-base) var(--ease-out);
--hover-lift: translateY(-2px);
```
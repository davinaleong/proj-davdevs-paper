# Divider Component

> **Paper-style separators for visual content division**

The Divider component provides clean, paper-inspired visual separation between content sections. It supports both horizontal and vertical orientations with various styling options and optional text labels.

## Basic Usage

```tsx
import { Divider } from '@davdevs/paper-foundations';

<Divider />
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Divider orientation |
| `variant` | `'default' \| 'dashed' \| 'dotted' \| 'double' \| 'thick' \| 'subtle'` | `'default'` | Visual style |
| `size` | `'thin' \| 'base' \| 'thick'` | `'base'` | Line thickness |
| `spacing` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Margin around divider |
| `color` | `'default' \| 'muted' \| 'accent' \| 'primary' \| 'secondary'` | `'default'` | Color variant |
| `label` | `string` | - | Optional text label |
| `labelPosition` | `'left' \| 'center' \| 'right'` | `'center'` | Label position |
| `as` | `React.ElementType` | `'hr'` | HTML element to render |

## Examples

### Basic Horizontal Divider
```tsx
<Stack gap="lg">
  <div>Content above</div>
  <Divider />
  <div>Content below</div>
</Stack>
```

### With Label
```tsx
<Stack gap="lg">
  <div>Section 1</div>
  <Divider label="OR" />
  <div>Section 2</div>
</Stack>
```

### Vertical Divider
```tsx
<Inline gap="none" align="center">
  <div>Left content</div>
  <Divider orientation="vertical" spacing="md" />
  <div>Right content</div>
</Inline>
```

### Style Variants
```tsx
<Stack gap="md">
  <Divider variant="default" />
  <Divider variant="dashed" />
  <Divider variant="dotted" />
  <Divider variant="double" />
  <Divider variant="thick" />
  <Divider variant="subtle" />
</Stack>
```

### Color Variants
```tsx
<Stack gap="md">
  <Divider color="default" />
  <Divider color="muted" />
  <Divider color="accent" />
  <Divider color="primary" />
  <Divider color="secondary" />
</Stack>
```

### Spacing Control
```tsx
<Stack gap="none">
  <div>Tight spacing above</div>
  <Divider spacing="xs" />
  <div>Content</div>
  <Divider spacing="xl" />
  <div>Loose spacing below</div>
</Stack>
```

### Form Section Separators
```tsx
<Stack gap="lg">
  <div>
    <h3>Personal Information</h3>
    <input placeholder="Name" />
    <input placeholder="Email" />
  </div>
  
  <Divider label="Contact Details" />
  
  <div>
    <input placeholder="Phone" />
    <input placeholder="Address" />
  </div>
</Stack>
```

## Common Use Cases

- **Content Sections**: Separate different content areas
- **Form Groups**: Divide form sections with optional labels
- **Navigation**: Separate menu items vertically
- **Cards**: Add subtle separation within cards
- **Lists**: Separate list items visually
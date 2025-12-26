# Inline Component

> **Horizontal layout primitive for creating inline arrangements with gaps**

The Inline component is a foundational layout primitive specifically designed for horizontal layouts. It provides consistent spacing between child elements while maintaining a horizontal flow with flexible wrapping and alignment options.

## Basic Usage

```tsx
import { Inline } from '@davdevs/paper-foundations';

<Inline gap="md">
  <Button>Save</Button>
  <Button>Cancel</Button>
  <Button>Help</Button>
</Inline>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | `'md'` | Spacing between items |
| `align` | `'start' \| 'center' \| 'end' \| 'baseline' \| 'stretch'` | `'center'` | Vertical alignment |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Horizontal distribution |
| `wrap` | `boolean` | `true` | Whether items should wrap |
| `responsive` | `boolean` | `true` | Enable responsive stacking on mobile |
| `as` | `React.ElementType` | `'div'` | HTML element to render |

## Examples

### Button Group
```tsx
<Inline gap="sm" align="center">
  <Button variant="secondary">Cancel</Button>
  <Button variant="primary">Save Changes</Button>
</Inline>
```

### Badge List
```tsx
<Inline gap="xs" wrap>
  <Badge>React</Badge>
  <Badge>TypeScript</Badge>
  <Badge>Tailwind CSS</Badge>
  <Badge>Vite</Badge>
</Inline>
```

### Navigation Items
```tsx
<Inline gap="lg" align="baseline" as="nav">
  <Link href="/home">Home</Link>
  <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
</Inline>
```

### Form Actions
```tsx
<Inline gap="md" justify="end">
  <Button variant="ghost">Cancel</Button>
  <Button variant="primary">Submit</Button>
</Inline>
```

### Responsive Content
```tsx
<Inline gap="md" justify="between" responsive>
  <div>Left content</div>
  <div>Right content</div>
</Inline>
```

## Differences from Stack

- **Inline**: Always horizontal by default, optimized for inline content
- **Stack**: Vertical by default, can be horizontal
- **Inline**: Better for buttons, badges, navigation items
- **Stack**: Better for page sections, form fields, content blocks
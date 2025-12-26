# Stack Component

> **Layout primitive for creating consistent spacing between elements**

The Stack component is a foundational layout primitive that provides consistent spacing between child elements. It supports both vertical and horizontal layouts with flexible alignment options.

## Basic Usage

```tsx
import { Stack } from '@davdevs/paper-foundations';

<Stack gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stack>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Stack direction |
| `gap` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl'` | `'md'` | Spacing between items |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | `'stretch'` | Cross-axis alignment |
| `justify` | `'start' \| 'center' \| 'end' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Main-axis alignment |
| `wrap` | `boolean` | `false` | Whether items should wrap |
| `as` | `React.ElementType` | `'div'` | HTML element to render |

## Examples

### Vertical Stack (Default)
```tsx
<Stack gap="lg">
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</Stack>
```

### Horizontal Stack
```tsx
<Stack direction="horizontal" gap="md" align="center">
  <Button>Cancel</Button>
  <Button variant="primary">Save</Button>
</Stack>
```

### Centered Content
```tsx
<Stack align="center" justify="center" className="h-screen">
  <h1>Welcome</h1>
  <p>Get started with our design system</p>
</Stack>
```

### Responsive Layout
```tsx
<Stack direction="horizontal" wrap gap="md">
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Stack>
```
# Tooltip

Floating paper hints with smart positioning and accessibility support.

## Usage

```tsx
import { Tooltip, Button } from '@davdevs/paper-basic';

// Basic tooltip
<Tooltip content="This is a helpful tooltip">
  <Button>Hover me</Button>
</Tooltip>

// Different placements
<Tooltip content="Top tooltip" placement="top">
  <Button>Top</Button>
</Tooltip>
<Tooltip content="Bottom tooltip" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>
<Tooltip content="Left tooltip" placement="left">
  <Button>Left</Button>
</Tooltip>
<Tooltip content="Right tooltip" placement="right">
  <Button>Right</Button>
</Tooltip>

// Different variants
<Tooltip content="Info tooltip" variant="info">
  <Button>Info</Button>
</Tooltip>
<Tooltip content="Success message" variant="success">
  <Button>Success</Button>
</Tooltip>
<Tooltip content="Warning message" variant="warning">
  <Button>Warning</Button>
</Tooltip>
<Tooltip content="Error message" variant="danger">
  <Button>Error</Button>
</Tooltip>

// Different triggers
<Tooltip content="Click to toggle" trigger="click">
  <Button>Click trigger</Button>
</Tooltip>
<Tooltip content="Focus to show" trigger="focus">
  <input placeholder="Focus trigger" />
</Tooltip>

// Manual control
<Tooltip 
  content="Manually controlled"
  trigger="manual"
  open={isOpen}
  onOpenChange={setIsOpen}
>
  <Button onClick={() => setIsOpen(!isOpen)}>Manual</Button>
</Tooltip>

// Rich content
<Tooltip
  content={
    <div>
      <strong>Rich Tooltip</strong>
      <p>You can put any React content here!</p>
    </div>
  }
  maxWidth={250}
>
  <Button>Rich content</Button>
</Tooltip>

// Custom delays
<Tooltip 
  content="Custom timing" 
  showDelay={1000} 
  hideDelay={500}
>
  <Button>Slow tooltip</Button>
</Tooltip>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` | `React.ReactNode` | - | Tooltip content |
| `children` | `React.ReactElement` | - | Trigger element |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right' \| 'top-start' \| 'top-end' \| 'bottom-start' \| 'bottom-end'` | `'top'` | Tooltip position |
| `variant` | `'default' \| 'dark' \| 'light' \| 'info' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tooltip size |
| `trigger` | `'hover' \| 'click' \| 'focus' \| 'manual'` | `'hover'` | How to trigger tooltip |
| `showDelay` | `number` | `500` | Show delay in ms |
| `hideDelay` | `number` | `200` | Hide delay in ms |
| `showArrow` | `boolean` | `true` | Show arrow pointer |
| `disabled` | `boolean` | `false` | Disable tooltip |
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Open state change handler |
| `maxWidth` | `number \| string` | `320` | Maximum tooltip width |
| `zIndex` | `number` | `1000` | Z-index value |
| `portal` | `Element \| null` | `document.body` | Portal container |

## Features

- **Smart positioning**: Automatically flips to stay in viewport
- **Multiple triggers**: Hover, click, focus, or manual control
- **Rich content**: Support for any React content
- **Accessibility**: ARIA attributes and keyboard navigation
- **Portal rendering**: Renders in document body to avoid clipping
- **Customizable delays**: Configure show and hide timing
- **Arrow indicators**: Optional arrow pointing to trigger
- **Responsive**: Adapts to screen size changes

## Accessibility

- Uses `role="tooltip"` for screen readers
- Provides `aria-describedby` relationship
- Supports keyboard navigation
- Proper focus management
- Respects `prefers-reduced-motion`

## Positioning

The tooltip automatically adjusts its position to stay within the viewport:
- Falls back to opposite side if no space
- Adjusts horizontal/vertical alignment
- Maintains consistent spacing from trigger
- Accounts for arrow size in calculations
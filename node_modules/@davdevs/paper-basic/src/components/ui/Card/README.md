# Card

Basic paper cards with elevation and interactive states.

## Usage

```tsx
import { Card } from '@davdevs/paper-basic';

// Basic card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

// Interactive card with elevation
<Card interactive elevation="md" onClick={() => console.log('clicked')}>
  <h3>Clickable Card</h3>
  <p>This card responds to hover and click.</p>
</Card>

// Outlined variant
<Card variant="outlined" padding="lg">
  <h3>Outlined Card</h3>
  <p>Card with outline style.</p>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'outlined' \| 'filled' \| 'ghost'` | `'default'` | Visual variant |
| `elevation` | `'none' \| 'sm' \| 'base' \| 'md' \| 'lg' \| 'xl'` | `'sm'` | Shadow depth |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Internal padding |
| `radius` | `'none' \| 'sm' \| 'base' \| 'md' \| 'lg' \| 'xl'` | `'base'` | Border radius |
| `interactive` | `boolean` | `false` | Enable hover/click effects |
| `as` | `React.ElementType` | `'div'` | HTML element or component |

## Variants

- **default**: Standard card with background and border
- **outlined**: Transparent background with prominent border
- **filled**: Subtle background fill, no border
- **ghost**: Transparent with no border or shadow
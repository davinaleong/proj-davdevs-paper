# Button

Paper-style buttons with elevation and interactive states.

## Usage

```tsx
import { Button } from '@davdevs/paper-basic';

// Primary button
<Button onClick={() => console.log('clicked')}>
  Click me
</Button>

// Secondary with icon
<Button variant="secondary" startIcon={<PlusIcon />}>
  Add Item
</Button>

// Loading state
<Button loading disabled>
  Saving...
</Button>

// Full width
<Button fullWidth size="lg">
  Submit Form
</Button>

// Custom as link
<Button as="a" href="/dashboard" variant="outline">
  Go to Dashboard
</Button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Button size |
| `elevation` | `'none' \| 'sm' \| 'base' \| 'md' \| 'lg'` | `'sm'` | Shadow depth |
| `radius` | `'none' \| 'sm' \| 'base' \| 'md' \| 'lg' \| 'full'` | `'base'` | Border radius |
| `disabled` | `boolean` | `false` | Disable the button |
| `loading` | `boolean` | `false` | Show loading spinner |
| `startIcon` | `React.ReactNode` | - | Icon before text |
| `endIcon` | `React.ReactNode` | - | Icon after text |
| `fullWidth` | `boolean` | `false` | Full width button |
| `as` | `React.ElementType` | `'button'` | HTML element or component |

## Variants

- **primary**: Main call-to-action button
- **secondary**: Less prominent secondary actions
- **outline**: Outlined style for subtle actions
- **ghost**: Minimal style with no background
- **danger**: For destructive actions
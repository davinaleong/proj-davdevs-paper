# Badge

Small paper labels for status, categories, and metadata.

## Usage

```tsx
import { Badge } from '@davdevs/paper-basic';

// Basic badge
<Badge>New</Badge>

// Status badges
<Badge variant="success">Active</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="danger">Error</Badge>

// With icons
<Badge variant="primary" startIcon={<StarIcon />}>
  Featured
</Badge>

// Dismissible badge
<Badge dismissible onDismiss={() => console.log('dismissed')}>
  Removable
</Badge>

// Subtle and outline styles
<Badge variant="info" subtle>Info</Badge>
<Badge variant="primary" outline>Outlined</Badge>

// Different sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `'default'` | Color variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Badge size |
| `shape` | `'rounded' \| 'pill'` | `'rounded'` | Badge shape |
| `subtle` | `boolean` | `false` | Subtle background style |
| `outline` | `boolean` | `false` | Outline style |
| `startIcon` | `React.ReactNode` | - | Icon before text |
| `endIcon` | `React.ReactNode` | - | Icon after text |
| `dismissible` | `boolean` | `false` | Show dismiss button |
| `onDismiss` | `() => void` | - | Dismiss callback |
| `as` | `React.ElementType` | `'span'` | HTML element or component |

## Variants

- **default**: Neutral gray badge
- **primary**: Primary brand color
- **secondary**: Secondary color
- **success**: Green for positive states
- **warning**: Yellow/orange for warnings
- **danger**: Red for errors or critical states
- **info**: Blue for informational content

## Modifiers

- **subtle**: Lighter background with colored text
- **outline**: Transparent background with colored border
# Icon

Paper-friendly iconography with consistent sizing and colors.

## Usage

```tsx
import { Icon } from '@davdevs/paper-basic';

// Built-in icons
<Icon name="check" />
<Icon name="x" size="lg" />
<Icon name="user" variant="primary" />

// Custom SVG icons
<Icon size="md" variant="success">
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
</Icon>

// Interactive icons
<Icon 
  name="search"
  interactive
  onClick={() => console.log('Search clicked')}
  label="Search"
/>

// Animated icons
<Icon name="loading" spin />
<Icon name="arrow" rotate={45} />

// Different sizes
<Icon name="check" size="xs" />
<Icon name="check" size="sm" />
<Icon name="check" size="md" />
<Icon name="check" size="lg" />
<Icon name="check" size="xl" />
<Icon name="check" size="2xl" />

// Color variants
<Icon name="info" variant="primary" />
<Icon name="warning" variant="warning" />
<Icon name="error" variant="danger" />
<Icon name="success" variant="success" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Icon size |
| `variant` | `'current' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' \| 'muted'` | `'current'` | Color variant |
| `name` | `string` | - | Built-in icon name |
| `children` | `React.ReactNode` | - | Custom icon content (overrides name) |
| `spin` | `boolean` | `false` | Rotate/spin animation |
| `rotate` | `number` | - | Custom rotation in degrees |
| `interactive` | `boolean` | `false` | Make icon clickable |
| `onClick` | `(event: React.MouseEvent) => void` | - | Click handler |
| `decorative` | `boolean` | `false` | Hide from screen readers |
| `label` | `string` | - | Accessible label |
| `as` | `React.ElementType` | `'span'` (or `'button'` when interactive) | HTML element |

## Built-in Icons

- **x**: Close/dismiss icon
- **check**: Checkmark/success icon  
- **chevron-down**: Down arrow
- **chevron-up**: Up arrow
- **chevron-left**: Left arrow
- **chevron-right**: Right arrow
- **plus**: Add/plus icon
- **minus**: Subtract/minus icon
- **search**: Search/magnifying glass
- **user**: User/person icon
- **info**: Information icon
- **warning**: Warning/alert icon
- **error**: Error/exclamation icon

## Color Variants

- **current**: Inherits text color
- **primary**: Primary brand color
- **secondary**: Secondary gray color
- **success**: Green for success states
- **warning**: Orange for warnings
- **danger**: Red for errors
- **muted**: Subtle gray for secondary content

## Accessibility

- Use `decorative={true}` for purely decorative icons
- Provide `label` for meaningful icons
- Interactive icons automatically get proper ARIA roles
- Focus management for keyboard navigation
- Screen reader support

## Custom Icons

When using custom SVG icons:
- Use `fill="none"` and `stroke="currentColor"` for consistent theming
- Provide `viewBox="0 0 24 24"` for proper scaling
- Use `strokeLinecap="round"` and `strokeLinejoin="round"` for paper aesthetic
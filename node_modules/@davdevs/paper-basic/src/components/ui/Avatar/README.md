# Avatar

User representation with support for images, initials, icons, and status indicators.

## Usage

```tsx
import { Avatar } from '@davdevs/paper-basic';

// Image avatar
<Avatar 
  src="/user-profile.jpg" 
  alt="John Doe" 
  name="John Doe"
/>

// Initials avatar
<Avatar name="Jane Smith" />
<Avatar initials="JS" />

// Icon avatar
<Avatar icon={<UserIcon />} />

// With status indicator
<Avatar 
  name="John Doe"
  showStatus
  status="online"
/>

// Different sizes
<Avatar size="xs" name="XS" />
<Avatar size="sm" name="SM" />
<Avatar size="md" name="MD" />
<Avatar size="lg" name="LG" />
<Avatar size="xl" name="XL" />
<Avatar size="2xl" name="2XL" />

// Different variants
<Avatar variant="primary" name="Primary" />
<Avatar variant="success" name="Success" />
<Avatar variant="warning" name="Warning" />

// Interactive avatar
<Avatar 
  interactive
  onClick={() => console.log('Avatar clicked')}
  name="Clickable"
/>

// Square shape
<Avatar shape="square" name="Square" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Avatar size |
| `shape` | `'circle' \| 'square'` | `'circle'` | Avatar shape |
| `src` | `string` | - | Image source URL |
| `alt` | `string` | - | Image alt text |
| `name` | `string` | - | Name for auto-generating initials |
| `initials` | `string` | - | Custom initials (overrides name) |
| `icon` | `React.ReactNode` | - | Custom icon fallback |
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Color variant |
| `showStatus` | `boolean` | `false` | Show status indicator |
| `status` | `'online' \| 'offline' \| 'away' \| 'busy'` | `'online'` | Status type |
| `interactive` | `boolean` | `false` | Make avatar clickable |
| `onClick` | `() => void` | - | Click handler |
| `fallback` | `React.ReactNode` | - | Custom fallback content |
| `as` | `React.ElementType` | `'div'` (or `'button'` when interactive) | HTML element |

## Fallback Order

1. **Image**: Shows if `src` is provided and loads successfully
2. **Initials**: Generated from `name` or uses `initials` prop
3. **Custom Fallback**: Uses `fallback` prop if provided
4. **Icon**: Shows custom `icon` or default user icon

## Status Indicators

- **online**: Green indicator for active users
- **offline**: Gray indicator for inactive users
- **away**: Orange indicator for away status
- **busy**: Red indicator for busy/do-not-disturb status

## Accessibility

- Proper alt text for images
- Focus management for interactive avatars
- Screen reader support for status indicators
- Keyboard navigation support
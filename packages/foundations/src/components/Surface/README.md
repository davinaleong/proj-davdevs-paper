# Surface Component

> **Theme-aware background surfaces for consistent visual hierarchy**

The Surface component provides theme-aware background surfaces that automatically adapt to light and dark modes. It's perfect for creating cards, panels, modals, and other content containers with consistent visual hierarchy.

## Basic Usage

```tsx
import { Surface } from '@davdevs/paper-foundations';

<Surface level="primary" padding="md" radius="base">
  <p>Content goes here</p>
</Surface>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'primary' \| 'secondary' \| 'tertiary' \| 'elevated' \| 'overlay' \| 'inverse'` | `'primary'` | Surface hierarchy level |
| `appearance` | `'default' \| 'subtle' \| 'muted' \| 'accent' \| 'transparent'` | `'default'` | Visual appearance |
| `elevation` | `'none' \| 'xs' \| 'sm' \| 'base' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'none'` | Shadow elevation |
| `radius` | `'none' \| 'xs' \| 'sm' \| 'base' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'none'` | Border radius |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'none'` | Internal padding |
| `border` | `'none' \| 'subtle' \| 'default' \| 'accent' \| 'primary'` | `'none'` | Border style |
| `interactive` | `boolean` | `false` | Enable hover/focus effects |
| `as` | `React.ElementType` | `'div'` | HTML element to render |

## Examples

### Surface Hierarchy
```tsx
<Stack gap="md">
  <Surface level="primary" padding="md" radius="base">
    <h2>Primary Surface</h2>
    <p>Main content area</p>
  </Surface>
  
  <Surface level="secondary" padding="md" radius="base">
    <h3>Secondary Surface</h3>
    <p>Supporting content</p>
  </Surface>
  
  <Surface level="tertiary" padding="sm" radius="base">
    <p>Tertiary information</p>
  </Surface>
</Stack>
```

### Card Component
```tsx
<Surface 
  level="elevated" 
  padding="lg" 
  radius="lg" 
  border="subtle"
  interactive
>
  <Stack gap="md">
    <h3>Card Title</h3>
    <p>Card content with elevated background</p>
    <Inline gap="sm" justify="end">
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Save</Button>
    </Inline>
  </Stack>
</Surface>
```

### Modal/Dialog Background
```tsx
<Surface 
  level="overlay" 
  padding="xl" 
  radius="xl" 
  elevation="2xl"
>
  <Stack gap="lg">
    <h2>Dialog Title</h2>
    <p>Modal content with overlay styling</p>
    <Divider />
    <Inline gap="md" justify="end">
      <Button>Close</Button>
    </Inline>
  </Stack>
</Surface>
```

### Navigation Sidebar
```tsx
<Surface 
  level="secondary" 
  padding="md" 
  className="h-screen w-64"
  as="nav"
>
  <Stack gap="lg">
    <h2>Navigation</h2>
    <Stack gap="sm">
      <Surface level="primary" padding="sm" radius="base" interactive>
        Home
      </Surface>
      <Surface level="primary" padding="sm" radius="base" interactive>
        About
      </Surface>
      <Surface level="primary" padding="sm" radius="base" interactive>
        Contact
      </Surface>
    </Stack>
  </Stack>
</Surface>
```

### Appearance Variants
```tsx
<Stack gap="md">
  <Surface appearance="default" padding="md" radius="base">
    Default appearance
  </Surface>
  
  <Surface appearance="subtle" padding="md" radius="base">
    Subtle (80% opacity)
  </Surface>
  
  <Surface appearance="accent" padding="md" radius="base">
    Accent background
  </Surface>
  
  <Surface appearance="transparent" padding="md">
    Transparent background
  </Surface>
</Stack>
```

### Interactive Surface
```tsx
<Surface 
  level="primary" 
  padding="lg" 
  radius="md" 
  border="subtle"
  interactive
  onClick={() => console.log('Surface clicked!')}
>
  <Stack gap="sm">
    <h3>Interactive Card</h3>
    <p>Hover me for lift effect</p>
  </Stack>
</Surface>
```

## Design System Integration

### Surface Hierarchy
- **Primary**: Main content areas, cards
- **Secondary**: Supporting panels, sidebars
- **Tertiary**: Background areas, subtle sections
- **Elevated**: Floating elements, dropdowns
- **Overlay**: Modals, tooltips, popovers
- **Inverse**: Dark surfaces, highlights

### Dark Mode
All surface levels automatically adapt to dark mode when the parent has the `.dark` class, ensuring consistent theming across light and dark environments.

## Common Use Cases

- **Cards and Panels**: Content containers with elevation
- **Navigation**: Sidebars and menu backgrounds
- **Modals**: Overlay surfaces for dialogs
- **Forms**: Section backgrounds
- **Dashboards**: Widget containers
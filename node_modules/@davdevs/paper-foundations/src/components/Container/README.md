# Container Component

> **Responsive content containers for consistent layout structure**

The Container component provides responsive content containers with configurable max-widths, padding, and centering behavior. It's perfect for creating consistent page layouts and content sections.

## Basic Usage

```tsx
import { Container } from '@davdevs/paper-foundations';

<Container>
  <p>Your content goes here</p>
</Container>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' \| '6xl' \| '7xl' \| 'full' \| 'none'` | `'lg'` | Maximum width |
| `padding` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Horizontal padding |
| `centered` | `boolean` | `true` | Center the container |
| `fluid` | `boolean` | `false` | Remove max-width constraint |
| `breakpoint` | `'responsive' \| 'static'` | `'responsive'` | Responsive behavior |
| `as` | `React.ElementType` | `'div'` | HTML element to render |

## Examples

### Basic Page Container
```tsx
<Container size="lg" padding="md">
  <Stack gap="xl">
    <h1>Page Title</h1>
    <p>Main content goes here with consistent max-width and centering.</p>
  </Stack>
</Container>
```

### Different Container Sizes
```tsx
<Stack gap="lg">
  <Container size="sm">
    <p>Small container for forms or narrow content</p>
  </Container>
  
  <Container size="lg">
    <p>Large container for main content areas</p>
  </Container>
  
  <Container size="2xl">
    <p>Extra large container for wide layouts</p>
  </Container>
</Stack>
```

### Fluid Container
```tsx
<Container fluid padding="lg">
  <div className="bg-blue-50 p-4 rounded">
    <p>This container takes the full width of its parent</p>
  </div>
</Container>
```

### Non-centered Container
```tsx
<Container centered={false} size="md" padding="md">
  <p>This container is not centered, useful for sidebar content</p>
</Container>
```

### Semantic HTML Elements
```tsx
<Container as="main" size="xl" padding="lg">
  <h1>Main Content</h1>
  <p>Using semantic main element for better accessibility</p>
</Container>

<Container as="section" size="lg" padding="md">
  <h2>Section Content</h2>
  <p>Using semantic section element</p>
</Container>

<Container as="article" size="md" padding="sm">
  <h3>Article Content</h3>
  <p>Using semantic article element</p>
</Container>
```

### Different Padding Options
```tsx
<Stack gap="md">
  <Container size="lg" padding="none">
    <div className="bg-gray-100 p-4">No padding - content touches edges</div>
  </Container>
  
  <Container size="lg" padding="sm">
    <div className="bg-gray-100 p-4">Small padding</div>
  </Container>
  
  <Container size="lg" padding="xl">
    <div className="bg-gray-100 p-4">Extra large padding</div>
  </Container>
</Stack>
```

### Responsive vs Static Behavior
```tsx
<Stack gap="lg">
  <Container breakpoint="responsive" size="lg" padding="md">
    <div className="bg-blue-50 p-4 rounded">
      <p>Responsive: Padding adjusts on mobile devices</p>
    </div>
  </Container>
  
  <Container breakpoint="static" size="lg" padding="md">
    <div className="bg-green-50 p-4 rounded">
      <p>Static: Consistent padding across all screen sizes</p>
    </div>
  </Container>
</Stack>
```

### Page Layout Example
```tsx
<Stack gap="none">
  {/* Header */}
  <Container as="header" size="full" padding="md" className="bg-gray-50 border-b">
    <Inline justify="between" align="center">
      <h1>Site Logo</h1>
      <nav>
        <Inline gap="lg">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </Inline>
      </nav>
    </Inline>
  </Container>
  
  {/* Main Content */}
  <Container as="main" size="xl" padding="lg" className="min-h-screen">
    <Stack gap="xl">
      <h2>Welcome to Our Site</h2>
      <p>Main content with consistent container sizing</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Surface level="elevated" padding="lg" radius="lg">
          <h3>Feature 1</h3>
          <p>Content in elevated surface</p>
        </Surface>
        
        <Surface level="elevated" padding="lg" radius="lg">
          <h3>Feature 2</h3>
          <p>More content in elevated surface</p>
        </Surface>
      </div>
    </Stack>
  </Container>
  
  {/* Footer */}
  <Container as="footer" size="full" padding="md" className="bg-gray-900 text-white">
    <div className="text-center">
      <p>&copy; 2025 Your Site Name</p>
    </div>
  </Container>
</Stack>
```

## Container Sizes Reference

| Size | Max Width | Best For |
|------|-----------|----------|
| `xs` | 20rem (320px) | Very narrow content, mobile alerts |
| `sm` | 24rem (384px) | Forms, small cards |
| `md` | 28rem (448px) | Medium forms, single-column content |
| `lg` | 64rem (1024px) | Main content areas, articles |
| `xl` | 80rem (1280px) | Wide layouts, dashboards |
| `2xl` | 96rem (1536px) | Extra wide content |
| `3xl` | 112rem (1792px) | Very wide layouts |
| `full` | 100% | Full width sections |
| `none` | No limit | Unrestricted width |

## Responsive Behavior

When `breakpoint="responsive"` (default):
- **Mobile (< 640px)**: 1rem horizontal padding
- **Tablet (641px - 768px)**: 1.5rem horizontal padding  
- **Desktop (> 769px)**: Full specified padding

When `breakpoint="static"`:
- Consistent padding across all screen sizes

## Common Use Cases

- **Page Layouts**: Main content areas with consistent max-width
- **Article Content**: Reading-optimized container widths
- **Form Sections**: Appropriate widths for form elements
- **Dashboard Layouts**: Flexible container sizing
- **Marketing Pages**: Various container sizes for different sections
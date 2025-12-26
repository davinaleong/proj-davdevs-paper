# Typography Component

A comprehensive typography system for the Dav/Devs Paper design system, providing semantic components for headings, text, lists, and blockquotes with paper-inspired styling.

## Features

- 🎨 **Paper-inspired design** - Warm, readable typography that feels like content on paper
- 📱 **Responsive typography** - Fluid scaling across device sizes
- 🌙 **Dark mode support** - Automatic color adjustments for dark themes
- ♿ **Accessibility focused** - Semantic HTML with proper ARIA attributes
- 🎯 **TypeScript support** - Full type safety and IntelliSense
- 🔧 **Polymorphic components** - Render as any HTML element or React component
- 📐 **Flexible sizing** - Multiple size variants and custom overrides

## Components

### Heading

Semantic headings with paper-appropriate typography:

```tsx
import { Heading, H1, H2, H3, H4, H5, H6 } from '@davdevs/paper-foundations';

// Generic heading with level prop
<Heading level={1}>Page Title</Heading>
<Heading level={2} size="3xl">Custom sized heading</Heading>

// Convenience components
<H1>Main Title</H1>
<H2>Section Title</H2>
<H3>Subsection</H3>

// Display headings for heroes
<H1 display size="7xl">Hero Title</H1>

// Different fonts and weights
<H2 font="sans" weight="bold">Sans Serif Title</H2>
```

### Text

Flexible text component for body content:

```tsx
import { Text, Lead, Small, Caption, Overline, Code } from '@davdevs/paper-foundations';

// Basic text
<Text>Regular paragraph text with paper-friendly styling.</Text>

// Size variants
<Text size="lg">Larger body text</Text>
<Text size="sm">Smaller body text</Text>

// Specialized variants
<Lead>Opening paragraph with emphasis</Lead>
<Small>Fine print and disclaimers</Small>
<Caption>Image captions and metadata</Caption>
<Overline>Section labels and categories</Overline>
<Code>inline code snippets</Code>

// Color variants
<Text color="muted">Secondary text</Text>
<Text color="subtle">Tertiary text</Text>

// Text utilities
<Text truncate>This text will be truncated...</Text>
<Text clamp={3}>This text will be clamped to 3 lines...</Text>
```

### List

Semantic lists with paper styling:

```tsx
import { List } from '@davdevs/paper-foundations';

// Unordered list (default)
<List>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</List>

// Ordered list
<List type="ordered">
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</List>

// Paper variant with custom bullets
<List variant="paper">
  <li>Paper-styled bullet</li>
  <li>Another item</li>
</List>

// Custom spacing
<List spacing="lg">
  <li>Item with larger spacing</li>
  <li>Another item</li>
</List>
```

### Blockquote

Styled blockquotes with citations:

```tsx
import { Blockquote } from '@davdevs/paper-foundations';

// Basic blockquote
<Blockquote>
  The best design is as little design as possible.
</Blockquote>

// With attribution
<Blockquote author="Dieter Rams" source="Ten Principles for Good Design">
  Good design is as little design as possible.
</Blockquote>

// Different sizes and variants
<Blockquote size="lg" variant="paper">
  Large blockquote with paper styling
</Blockquote>

// With cite URL
<Blockquote cite="https://example.com/quote" author="Author Name">
  Quote with citation URL
</Blockquote>
```

## Props

### Common Props

All typography components share these base props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `color` | `'primary' \| 'secondary' \| 'muted' \| 'subtle' \| 'inverse' \| 'inherit'` | `'primary'` | Text color variant |
| `align` | `'left' \| 'center' \| 'right' \| 'justify'` | `'left'` | Text alignment |
| `font` | `'sans' \| 'serif' \| 'mono'` | varies | Font family |
| `weight` | `'light' \| 'regular' \| 'medium' \| 'semibold' \| 'bold' \| 'black'` | varies | Font weight |
| `balance` | `boolean` | `false` | Enable text balance for better line wrapping |
| `truncate` | `boolean` | `false` | Truncate text with ellipsis |
| `clamp` | `number` | - | Clamp text to specific number of lines |
| `as` | `React.ElementType` | varies | Element or component to render as |

### Heading Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `1 \| 2 \| 3 \| 4 \| 5 \| 6` | - | Semantic heading level (required) |
| `size` | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl' \| '5xl' \| '6xl' \| '7xl' \| '8xl' \| '9xl'` | - | Override default size for level |
| `display` | `boolean` | `false` | Use display styling for large headings |

### Text Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'base' \| 'lg' \| 'xl' \| '2xl'` | `'base'` | Text size |
| `variant` | `'body' \| 'lead' \| 'small' \| 'caption' \| 'overline'` | `'body'` | Text style variant |
| `code` | `boolean` | `false` | Style as inline code |

### List Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'ordered' \| 'unordered'` | `'unordered'` | List type |
| `variant` | `'default' \| 'paper' \| 'minimal'` | `'default'` | List style variant |
| `spacing` | `'none' \| 'xs' \| 'sm' \| 'md' \| 'lg'` | `'sm'` | Spacing between items |

### Blockquote Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `cite` | `string` | - | Citation URL |
| `author` | `string` | - | Quote author |
| `source` | `string` | - | Quote source |
| `variant` | `'default' \| 'paper' \| 'minimal'` | `'default'` | Blockquote style |
| `size` | `'sm' \| 'base' \| 'lg' \| 'xl'` | `'base'` | Blockquote size |

## Font Configuration

The Typography system uses three font families:

- **Sans Serif** (`font="sans"`): Montserrat with system font fallbacks
- **Serif** (`font="serif"`): Playfair Display with system serif fallbacks  
- **Monospace** (`font="mono"`): Source Code Pro with monospace fallbacks

Configure fonts in your CSS:

```css
:root {
  --font-sans: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-mono: 'Source Code Pro', 'Fira Code', Consolas, monospace;
}
```

## Responsive Typography

Typography scales fluidly across screen sizes using CSS custom properties:

```css
:root {
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  --text-6xl: 3.75rem;   /* 60px */
  --text-7xl: 4.5rem;    /* 72px */
  --text-8xl: 6rem;      /* 96px */
  --text-9xl: 8rem;      /* 128px */
}
```

## Dark Mode

Typography automatically adapts to dark mode using CSS custom properties:

```css
/* Light mode colors */
:root {
  --text-primary: theme('colors.gray.900');
  --text-secondary: theme('colors.gray.700');
  --text-muted: theme('colors.gray.600');
  --text-subtle: theme('colors.gray.400');
}

/* Dark mode colors */
.dark {
  --text-primary: theme('colors.gray.100');
  --text-secondary: theme('colors.gray.200');
  --text-muted: theme('colors.gray.300');
  --text-subtle: theme('colors.gray.400');
}
```

## Accessibility

The Typography system prioritizes accessibility:

- ✅ Semantic HTML elements (`h1-h6`, `p`, `ul`, `ol`, `blockquote`)
- ✅ Proper contrast ratios for all color variants
- ✅ Scalable text that respects user preferences
- ✅ Readable line heights and spacing
- ✅ Support for screen readers and assistive technologies

## Polymorphic Usage

All components support the `as` prop for flexible rendering:

```tsx
// Render heading as different element
<H1 as="div">Styled as H1 but div element</H1>

// Render text as different element  
<Text as="span">Inline text</Text>

// Render with custom component
<Text as={CustomComponent}>Text with custom component</Text>
```

## Best Practices

1. **Use semantic levels**: Match heading levels to document structure
2. **Consistent hierarchy**: Maintain logical heading progression (h1 → h2 → h3)
3. **Appropriate variants**: Use `Lead` for opening paragraphs, `Small` for disclaimers
4. **Color purpose**: Use `muted` for secondary info, `subtle` for metadata
5. **Balance performance**: Use `balance` prop judiciously for important headings
6. **Test dark mode**: Ensure readability in both light and dark themes

## Integration

Import and use Typography components in your React app:

```tsx
import {
  H1, H2, H3, H4, H5, H6,
  Text, Lead, Small, Caption, Code,
  List, Blockquote
} from '@davdevs/paper-foundations';

function BlogPost() {
  return (
    <article>
      <H1>Blog Post Title</H1>
      <Lead>
        This is the opening paragraph that introduces the topic...
      </Lead>
      
      <Text>
        Regular paragraph content with paper-inspired typography
        that's comfortable to read.
      </Text>
      
      <H2>Section Heading</H2>
      
      <List>
        <li>Key point one</li>
        <li>Key point two</li>
        <li>Key point three</li>
      </List>
      
      <Blockquote author="Author Name">
        An inspiring quote that adds value to the content.
      </Blockquote>
    </article>
  );
}
```
# @davdevs/paper-foundations

🎨 **Foundation Design Tokens for DavDevs Paper Design System**

Core design tokens, utilities, and foundational components that power the entire Paper design system.

## Features

- **Design Tokens**: Colors, spacing, typography scales, and sizing
- **Utility Functions**: `cn()` for className merging with Tailwind
- **Base Components**: Container, Stack, Inline, Box, Surface, and Typography primitives
- **CSS Custom Properties**: CSS variables for consistent theming
- **TypeScript Support**: Full type definitions included

## Installation

```bash
npm install @davdevs/paper-foundations
# or
yarn add @davdevs/paper-foundations
# or
pnpm add @davdevs/paper-foundations
```

## Usage

### Import Design Tokens

```css
/* Import CSS tokens */
@import '@davdevs/paper-foundations/tokens.css';
```

```ts
// Import utility functions
import { cn } from '@davdevs/paper-foundations';

// Usage
const className = cn('base-class', conditionalClass && 'conditional', 'another-class');
```

### Base Components

```tsx
import { Container, Stack, Box } from '@davdevs/paper-foundations';

function App() {
  return (
    <Container>
      <Stack spacing="md">
        <Box padding="lg">Content here</Box>
      </Stack>
    </Container>
  );
}
```

## Design Tokens

### Colors
- Primary palette (paper whites, creams, beiges)
- Accent colors (muted earth tones)
- Semantic colors (success, warning, error, info)

### Spacing
- Consistent scale from `xs` (0.25rem) to `3xl` (3rem)
- Based on 4px grid system

### Typography
- Font families (serif, sans-serif, mono)
- Font weights and sizes
- Line heights optimized for readability

## Components

- **Container**: Responsive layout container
- **Stack**: Vertical spacing component  
- **Inline**: Horizontal spacing component
- **Box**: Generic layout primitive
- **Surface**: Styled surface with elevation
- **Typography**: Text styling components

## License

MIT License - see [LICENSE](https://github.com/davinaleong/proj-davdevs-paper/blob/main/LICENSE) for details.

## Links

- [Documentation](https://davdevs-paper.com/docs/foundations)
- [GitHub](https://github.com/davinaleong/proj-davdevs-paper)
- [npm](https://npmjs.com/package/@davdevs/paper-foundations)
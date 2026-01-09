# @davdevs/paper-react

🎨 **React Components and Hooks for DavDevs Paper Design System**

React-specific utilities, hooks, and higher-order components that work with the entire Paper design system ecosystem.

## Features

- **React Hooks**: Custom hooks for theming, responsive design, and state management
- **Component Utilities**: Higher-order components and render props
- **Context Providers**: Theme and configuration providers
- **TypeScript Support**: Full type definitions included  
- **Universal Integration**: Works with basic and premium tiers

## Installation

```bash
npm install @davdevs/paper-react
# or
yarn add @davdevs/paper-react
# or
pnpm add @davdevs/paper-react
```

## Peer Dependencies

```bash
npm install react react-dom
```

## Usage

### Theme Provider

```tsx
import { PaperThemeProvider, usePaperTheme } from '@davdevs/paper-react';

function App() {
  return (
    <PaperThemeProvider theme={{ variant: 'warm', texture: 'linen' }}>
      <MyComponents />
    </PaperThemeProvider>
  );
}

function MyComponent() {
  const { theme, setTheme } = usePaperTheme();
  
  return (
    <div>
      Current theme: {theme.variant}
      <button onClick={() => setTheme({ variant: 'cool' })}>
        Switch Theme
      </button>
    </div>
  );
}
```

### Responsive Hooks

```tsx
import { useBreakpoint, useMediaQuery } from '@davdevs/paper-react';

function ResponsiveComponent() {
  const breakpoint = useBreakpoint();
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div>
      <p>Current breakpoint: {breakpoint}</p>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
}
```

### Component State Hooks

```tsx
import { useToggle, useLocalStorage, useDebounce } from '@davdevs/paper-react';

function StatefulComponent() {
  const [isOpen, toggleOpen] = useToggle(false);
  const [value, setValue] = useLocalStorage('myKey', 'default');
  const debouncedValue = useDebounce(value, 500);
  
  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
      <p>Debounced: {debouncedValue}</p>
    </div>
  );
}
```

## Available Hooks

### Theme & Styling
- `usePaperTheme()`: Access and modify current theme
- `useColorMode()`: Light/dark mode management
- `usePaperTexture()`: Paper texture utilities (requires premium)

### Layout & Responsive
- `useBreakpoint()`: Current Tailwind breakpoint
- `useMediaQuery()`: Media query matching
- `useWindowSize()`: Window dimensions
- `useElementSize()`: Element dimensions with ResizeObserver

### State Management
- `useToggle()`: Boolean state toggle
- `useLocalStorage()`: Persistent local storage state
- `useSessionStorage()`: Session storage state  
- `useDebounce()`: Debounced value updates
- `useThrottle()`: Throttled value updates

### Form Utilities
- `useForm()`: Form state and validation
- `useInput()`: Input field state management
- `useValidation()`: Field validation logic

### Effects & Interactions
- `useClickOutside()`: Detect clicks outside element
- `useKeyPress()`: Keyboard event handling
- `useFocus()`: Focus management utilities
- `useHover()`: Hover state detection

## Context Providers

### PaperThemeProvider
Provides theme context to all child components:

```tsx
<PaperThemeProvider 
  theme={{
    variant: 'warm' | 'cool' | 'neutral',
    texture: 'smooth' | 'linen' | 'canvas', // Premium feature
    colorMode: 'light' | 'dark' | 'auto'
  }}
>
  <App />
</PaperThemeProvider>
```

### PaperConfigProvider  
Provides configuration context:

```tsx
<PaperConfigProvider 
  config={{
    animations: true,
    reducedMotion: false,
    premiumFeatures: true // Requires premium license
  }}
>
  <App />
</PaperConfigProvider>
```

## Higher-Order Components

### withPaperTheme
Inject theme props into any component:

```tsx
import { withPaperTheme } from '@davdevs/paper-react';

const ThemedComponent = withPaperTheme(({ theme, ...props }) => (
  <div className={theme.variant === 'warm' ? 'text-amber-900' : 'text-slate-900'}>
    Themed content
  </div>
));
```

## Premium Integration

When `@davdevs/paper-premium` is installed, additional hooks become available:

```tsx
import { usePaperTexture, usePaperEffects } from '@davdevs/paper-react';

function PremiumComponent() {
  const texture = usePaperTexture('parchment');
  const effects = usePaperEffects(['shadow', 'grain']);
  
  return (
    <div className={`${texture} ${effects}`}>
      Premium paper effects
    </div>
  );
}
```

## TypeScript

Full TypeScript support with detailed type definitions:

```tsx
import type { 
  PaperTheme, 
  PaperConfig, 
  UseToggleReturn 
} from '@davdevs/paper-react';
```

## License

MIT License - see [LICENSE](https://github.com/davinaleong/proj-davdevs-paper/blob/main/LICENSE) for details.

## Links

- [Documentation](https://davdevs-paper.com/docs/react)
- [API Reference](https://davdevs-paper.com/docs/react/api)
- [GitHub](https://github.com/davinaleong/proj-davdevs-paper)
- [npm](https://npmjs.com/package/@davdevs/paper-react)
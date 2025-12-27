# Input Component

A versatile text input component with paper-inspired styling, icons, and various states.

## Features

- **Variants**: Default, filled, and outlined styles
- **Sizes**: Small, medium, and large options
- **States**: Error, success, warning, and loading states
- **Icons**: Leading and trailing icon support
- **Accessibility**: Full keyboard navigation and screen reader support
- **Paper Design**: Subtle shadows and paper-like appearance

## Usage

```tsx
import { Input } from '@davdevs/paper-basic';

// Basic usage
<Input placeholder="Enter text..." />

// With icons and helper text
<Input 
  startIcon={<SearchIcon />}
  placeholder="Search..."
  helperText="Start typing to search"
/>

// Error state
<Input 
  error="This field is required"
  placeholder="Required field"
/>
```

## Props

- `variant`: 'default' | 'filled' | 'outlined'
- `size`: 'sm' | 'md' | 'lg'
- `state`: 'default' | 'error' | 'success' | 'warning'
- `startIcon`: ReactNode - Leading icon
- `endIcon`: ReactNode - Trailing icon
- `helperText`: string - Helper text below input
- `error`: string - Error message (overrides helperText)
- `loading`: boolean - Show loading spinner
- `fullWidth`: boolean - Take full width of container
- `elevation`: 'none' | 'sm' | 'md' | 'lg' - Paper shadow depth
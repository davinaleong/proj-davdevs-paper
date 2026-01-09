# @davdevs/paper-basic

🎨 **Basic Tier Components for DavDevs Paper Design System**

Clean, accessible, and Tailwind-native React components with paper-inspired styling. This is the free tier of the DavDevs Paper design system.

## Features

- **Free & Open Source**: MIT licensed basic components
- **React Components**: Button, Card, Input, Badge, and more
- **Tailwind Integration**: Built with Tailwind CSS classes
- **Accessibility**: WCAG compliant components
- **TypeScript**: Full type definitions included
- **Tree Shakeable**: Import only what you need

## Installation

```bash
npm install @davdevs/paper-basic
# or
yarn add @davdevs/paper-basic
# or
pnpm add @davdevs/paper-basic
```

## Peer Dependencies

```bash
npm install react tailwindcss lucide-react
```

## Usage

### Import Components

```tsx
import { Button, Card, Input, Badge } from '@davdevs/paper-basic';
import '@davdevs/paper-basic/css';

function App() {
  return (
    <Card>
      <h1>Welcome to Paper UI</h1>
      <Input placeholder="Enter your name" />
      <Badge variant="success">New</Badge>
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}
```

## Components

### UI Components
- **Button**: Primary, secondary, outline, ghost variants
- **Badge**: Status indicators and labels
- **Card**: Content containers with elevation
- **Input**: Text inputs with validation states
- **Tooltip**: Contextual help and information
- **Tag**: Removable labels and categories
- **Icon**: Lucide icon wrapper

### Layout Components  
- **Container**: Responsive page containers
- **Grid**: CSS Grid layout primitives
- **Stack**: Vertical spacing layouts
- **Inline**: Horizontal spacing layouts

### Typography Components
- **Heading**: H1-H6 with consistent sizing
- **BodyText**: Paragraph text with variants
- **Label**: Form labels and captions

### Form Components
- **FormField**: Complete form field with label and validation
- **Checkbox**: Checkboxes with custom styling
- **Radio**: Radio buttons with proper grouping
- **Select**: Dropdown select components

### Navigation Components
- **Navbar**: Application navigation bars
- **Breadcrumb**: Hierarchical navigation
- **Pagination**: Page navigation controls

### Feedback Components
- **Alert**: Status messages and notifications
- **Progress**: Progress indicators and loading states
- **Modal**: Dialog and overlay components
- **Drawer**: Slide-out panels

## Tailwind Configuration

Add to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './node_modules/@davdevs/paper-basic/**/*.{js,ts,jsx,tsx}',
    // your app content...
  ],
  // your config...
}
```

## Customization

Components accept Tailwind classes via `className` prop:

```tsx
<Button className="w-full bg-emerald-500 hover:bg-emerald-600">
  Custom Styled Button
</Button>
```

## Upgrade to Premium

For advanced paper textures, effects, and exclusive components, consider upgrading to [`@davdevs/paper-premium`](https://npmjs.com/package/@davdevs/paper-premium).

## License

MIT License - see [LICENSE](https://github.com/davinaleong/proj-davdevs-paper/blob/main/LICENSE) for details.

## Links

- [Documentation](https://davdevs-paper.com/docs/basic)
- [Storybook](https://davdevs-paper.com/storybook)
- [GitHub](https://github.com/davinaleong/proj-davdevs-paper)
- [npm](https://npmjs.com/package/@davdevs/paper-basic)
# Tag

Content categorization and filtering tags.

## Usage

```tsx
import { Tag } from '@davdevs/paper-basic';

// Basic tag
<Tag>Design System</Tag>

// Different variants
<Tag variant="primary">Featured</Tag>
<Tag variant="category">Technology</Tag>
<Tag variant="keyword">React</Tag>

// With icons
<Tag icon={<HashIcon />}>Programming</Tag>

// Removable tags
<Tag removable onRemove={() => console.log('removed')}>
  Removable Tag
</Tag>

// Selectable tags
<Tag 
  selectable 
  selected={isSelected}
  onToggle={(selected) => setSelected(selected)}
>
  Toggle Tag
</Tag>

// Different sizes
<Tag size="sm">Small</Tag>
<Tag size="md">Medium</Tag>
<Tag size="lg">Large</Tag>

// Tag group example
<div className="flex gap-2 flex-wrap">
  {tags.map(tag => (
    <Tag 
      key={tag.id}
      variant={tag.type}
      removable
      onRemove={() => removeTag(tag.id)}
    >
      {tag.name}
    </Tag>
  ))}
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'category' \| 'keyword'` | `'default'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tag size |
| `removable` | `boolean` | `false` | Show remove button |
| `selectable` | `boolean` | `false` | Make tag selectable |
| `selected` | `boolean` | `false` | Selected state (when selectable) |
| `icon` | `React.ReactNode` | - | Icon before text |
| `onRemove` | `() => void` | - | Remove callback |
| `onToggle` | `(selected: boolean) => void` | - | Toggle callback |
| `as` | `React.ElementType` | `'span'` (or `'button'` when selectable) | HTML element |

## Variants

- **default**: Neutral gray tag
- **primary**: Primary brand color
- **secondary**: Secondary color
- **category**: Orange for content categories
- **keyword**: Green for keywords/skills

## Use Cases

- **Content categorization**: Blog categories, product tags
- **Filtering**: Search filters, faceted search
- **Skills/Keywords**: User profiles, job listings
- **Status indicators**: Lightweight status labels
- **User input**: Tag input components, multi-select
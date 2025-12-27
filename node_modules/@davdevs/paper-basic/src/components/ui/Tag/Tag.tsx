import React from 'react';
import { cn } from '../../../utils/cn';
import type { TagProps, TagRef } from './Tag.types';

/**
 * Tag - Content categorization
 * 
 * Interactive tags for categorizing content, filtering, and user selection
 * with paper-inspired design.
 */
export const Tag = React.forwardRef<TagRef, TagProps>((
  {
    children,
    className,
    variant = 'default',
    size = 'md',
    removable = false,
    selectable = false,
    selected = false,
    icon,
    onRemove,
    onToggle,
    as,
    onClick,
    ...props
  },
  ref
) => {
  const Component = as || (selectable ? 'button' : 'span');
  
  const baseClasses = [
    'paper-tag',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'transition-all',
    'duration-200',
    'ease-out',
    'rounded-full',
    'border'
  ];

  // Size classes
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-sm gap-2'
  };

  // State classes
  const stateClasses = [
    selectable && 'cursor-pointer hover:shadow-sm',
    selectable && selected && 'tag-selected',
    selectable && 'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500'
  ].filter(Boolean);

  const handleClick = (e: React.MouseEvent) => {
    if (selectable && onToggle) {
      onToggle(!selected);
    }
    onClick?.(e);
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove?.();
  };

  return (
    <Component
      ref={ref}
      className={cn(
        baseClasses,
        sizeClasses[size],
        stateClasses,
        className
      )}
      data-variant={variant}
      data-size={size}
      data-selected={selected}
      onClick={selectable ? handleClick : onClick}
      {...props}
    >
      {icon && (
        <span className="tag-icon">{icon}</span>
      )}
      
      <span className="tag-content">{children}</span>
      
      {removable && (
        <button
          type="button"
          className="tag-remove ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
          onClick={handleRemove}
          aria-label="Remove tag"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </Component>
  );
});

Tag.displayName = 'Tag';
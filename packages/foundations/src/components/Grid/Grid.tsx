import React from 'react';
import { cn } from '../../utils/cn';
import type { GridProps, GridRef } from './Grid.types';

/**
 * Grid - CSS Grid with paper gaps and responsive layout
 * 
 * Provides flexible grid layouts with consistent spacing, responsive
 * behavior, and paper-appropriate styling.
 */
export const Grid = React.forwardRef<GridRef, GridProps>(({
  children,
  className,
  columns = 'auto',
  rows = 'auto',
  gap = 'md',
  gapX,
  gapY,
  placeItems = 'stretch',
  placeContent = 'stretch',
  responsive,
  equalHeight = false,
  autoFit = false,
  minColWidth = '250px',
  as,
  ...props
}, ref) => {
  const Component = as || 'div';

  const baseClasses = [
    'paper-grid',
  ];

  const classes = cn(
    baseClasses,
    className
  );

  // Build data attributes
  const dataAttributes: Record<string, any> = {
    'data-columns': columns,
    'data-rows': rows,
    'data-gap': gap,
    'data-place-items': placeItems,
    'data-place-content': placeContent,
    'data-equal-height': equalHeight,
    'data-auto-fit': autoFit,
  };

  // Add gap overrides if specified
  if (gapX) dataAttributes['data-gap-x'] = gapX;
  if (gapY) dataAttributes['data-gap-y'] = gapY;

  // Add responsive attributes
  if (responsive) {
    Object.entries(responsive).forEach(([breakpoint, cols]) => {
      dataAttributes[`data-responsive-${breakpoint}`] = cols;
    });
  }

  // Custom CSS properties
  const style: React.CSSProperties = {
    '--min-col-width': minColWidth,
    ...props.style,
  };

  return (
    <Component
      ref={ref}
      className={classes}
      style={style}
      {...dataAttributes}
      {...props}
    >
      {children}
    </Component>
  );
});

Grid.displayName = 'Grid';
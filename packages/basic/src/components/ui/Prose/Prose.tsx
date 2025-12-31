import React from 'react';
import { cn } from '../../../utils/cn';

export interface ProseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The prose content - typically markdown/MDX content
   */
  children: React.ReactNode;
  /**
   * Size variant for typography scale
   * @default "base"
   */
  size?: 'sm' | 'base' | 'lg' | 'xl';
  /**
   * Whether to use a narrower max-width for better readability
   * @default true
   */
  narrow?: boolean;
}

export const Prose = React.forwardRef<HTMLDivElement, ProseProps>(
  ({ 
    children, 
    className, 
    size = 'base', 
    narrow = true,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base prose styles
          'prose prose-paper',
          
          // Size variants
          {
            'prose-sm': size === 'sm',
            'prose-base': size === 'base',
            'prose-lg': size === 'lg', 
            'prose-xl': size === 'xl',
          },
          
          // Width control
          {
            'max-w-2xl': narrow && size === 'sm',
            'max-w-3xl': narrow && size === 'base',
            'max-w-4xl': narrow && (size === 'lg' || size === 'xl'),
            'max-w-none': !narrow,
          },
          
          // Dark mode support
          'dark:prose-invert',
          
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Prose.displayName = 'Prose';
import React, { forwardRef } from 'react';
import { cn } from '../../../utils';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Label size */
  size?: 'sm' | 'md' | 'lg';
  /** Required indicator */
  required?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Label variant */
  variant?: 'default' | 'subtle' | 'bold';
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>((
  {
    className,
    size = 'md',
    required = false,
    disabled = false,
    variant = 'default',
    children,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const variantClasses = {
    default: 'font-medium text-gray-900',
    subtle: 'font-normal text-gray-700',
    bold: 'font-semibold text-gray-900'
  };

  return (
    <label
      ref={ref}
      className={cn(
        'block',
        sizeClasses[size],
        variantClasses[variant],
        {
          'opacity-50 cursor-not-allowed': disabled,
          'cursor-pointer': !disabled
        },
        className
      )}
      {...props}
    >
      {children}
      {required && (
        <span className="text-red-500 ml-1" aria-label="required">
          *
        </span>
      )}
    </label>
  );
});

Label.displayName = 'Label';

export type { LabelProps };
import React, { forwardRef } from 'react';
import { cn } from '../../../utils';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'onChange'> {
  /** Switch size */
  size?: 'sm' | 'md' | 'lg';
  /** Label text */
  label?: React.ReactNode;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  /** Paper elevation */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  /** Change handler - supports both standard and function-based patterns */
  onChange?: ((checked: boolean) => void) | ((event: React.ChangeEvent<HTMLInputElement>) => void);
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>((
  {
    className,
    size = 'md',
    label,
    helperText,
    error,
    color = 'primary',
    elevation = 'none',
    disabled,
    checked,
    onChange,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    sm: {
      track: 'w-8 h-4',
      thumb: 'w-3 h-3',
      translate: 'translate-x-4'
    },
    md: {
      track: 'w-10 h-5',
      thumb: 'w-4 h-4',
      translate: 'translate-x-5'
    },
    lg: {
      track: 'w-12 h-6',
      thumb: 'w-5 h-5',
      translate: 'translate-x-6'
    }
  };

  const colorClasses = {
    primary: 'bg-blue-600',
    secondary: 'bg-gray-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600'
  };

  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  const labelSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={cn(
      'flex items-start',
      elevationClasses[elevation],
      className
    )}>
      <label className="relative inline-flex cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          className="sr-only peer"
          disabled={disabled}
          checked={checked}
          onChange={(e) => {
            if (onChange) {
              // Check if it's the function-based pattern by checking the length
              if (onChange.length === 1) {
                (onChange as (checked: boolean) => void)(e.target.checked);
              } else {
                (onChange as (event: React.ChangeEvent<HTMLInputElement>) => void)(e);
              }
            }
          }}
          {...props}
        />
        
        <div className={cn(
          'relative rounded-full transition-colors duration-200',
          sizeClasses[size].track,
          {
            [colorClasses[color]]: checked,
            'bg-gray-300 dark:bg-gray-600': !checked,
            'opacity-50 cursor-not-allowed': disabled
          }
        )}>
          <div className={cn(
            'absolute top-0.5 left-0.5 bg-white dark:bg-gray-200 rounded-full shadow-md transition-transform duration-200',
            sizeClasses[size].thumb,
            {
              [sizeClasses[size].translate]: checked
            }
          )} />
        </div>
      </label>
      
      {label && (
        <div className="ml-3">
          <span className={cn(
            'font-medium text-gray-900 dark:text-gray-100',
            labelSizeClasses[size],
            {
              'opacity-50': disabled
            }
          )}>
            {label}
          </span>
          
          {(error || helperText) && (
            <p className={cn(
              'mt-1 text-sm',
              error ? 'text-red-600 dark:text-red-400' : 'text-gray-500 dark:text-gray-400'
            )}>
              {error || helperText}
            </p>
          )}
        </div>
      )}
    </div>
  );
});

Switch.displayName = 'Switch';

export type { SwitchProps };
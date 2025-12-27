import React, { forwardRef } from 'react';
import { cn } from '../../../utils';

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
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
          {...props}
        />
        
        <div className={cn(
          'relative rounded-full transition-colors duration-200',
          sizeClasses[size].track,
          {
            [colorClasses[color]]: checked,
            'bg-gray-300': !checked,
            'opacity-50 cursor-not-allowed': disabled
          }
        )}>
          <div className={cn(
            'absolute top-0.5 left-0.5 bg-white rounded-full shadow-md transition-transform duration-200',
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
            'font-medium text-gray-900',
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
              error ? 'text-red-600' : 'text-gray-500'
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
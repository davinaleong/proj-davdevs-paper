import React, { forwardRef } from 'react';
import { cn } from '../../../utils';
import { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>((
  {
    className,
    variant = 'default',
    size = 'md',
    state = 'default',
    options = [],
    placeholder,
    startIcon,
    helperText,
    error,
    fullWidth = false,
    elevation = 'none',
    children,
    ...props
  },
  ref
) => {
  const finalState = error ? 'error' : state;

  const baseClasses = 'w-full px-3 py-2 text-gray-900 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed transition-colors duration-200';
  
  const variantClasses = {
    default: '',
    filled: 'bg-gray-50 border-gray-200',
    outlined: 'bg-transparent border-2 border-gray-300'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  };

  const stateClasses = {
    default: '',
    error: 'border-red-300 focus:border-red-500 focus:ring-red-500',
    success: 'border-green-300 focus:border-green-500 focus:ring-green-500',
    warning: 'border-yellow-300 focus:border-yellow-500 focus:ring-yellow-500'
  };

  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };

  return (
    <div className={cn(
      'relative',
      { 'w-full': fullWidth },
      elevationClasses[elevation],
      className
    )}>
      {startIcon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
          {startIcon}
        </div>
      )}
      
      <select
        ref={ref}
        className={cn(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          stateClasses[finalState],
          {
            'pl-10': startIcon
          }
        )}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
        
        {children}
      </select>
      
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      
      {(error || helperText) && (
        <div className={`mt-1 text-sm ${error ? 'text-red-600' : 'text-gray-600'}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';
import { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../utils';
import { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>((
  {
    className,
    variant = 'default',
    size = 'md',
    state = 'default',
    options = [],
    optgroups = [],
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

  const baseClasses = 'w-full px-3 py-2 pr-10 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:text-gray-500 dark:disabled:text-gray-400 disabled:cursor-not-allowed transition-colors duration-200 appearance-none';
  
  const variantClasses = {
    default: '',
    filled: 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600',
    outlined: 'bg-transparent border-2 border-gray-300 dark:border-gray-600'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  };

  const stateClasses = {
    default: '',
    error: 'border-red-300 dark:border-red-500 focus:border-red-500 dark:focus:border-red-400 focus:ring-red-500 dark:focus:ring-red-400',
    success: 'border-green-300 dark:border-green-500 focus:border-green-500 dark:focus:border-green-400 focus:ring-green-500 dark:focus:ring-green-400',
    warning: 'border-yellow-300 dark:border-yellow-500 focus:border-yellow-500 dark:focus:border-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-400'
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
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
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
        
        {/* Render flat options if provided */}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
        
        {/* Render optgroups if provided */}
        {optgroups.map((optgroup, groupIndex) => (
          <optgroup
            key={groupIndex}
            label={optgroup.label}
            disabled={optgroup.disabled}
          >
            {optgroup.options.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </optgroup>
        ))}
        
        {children}
      </select>
      
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none">
        <ChevronDown className="w-4 h-4" />
      </div>
      
      {(error || helperText) && (
        <div className={`mt-1 text-sm ${error ? 'text-red-600 dark:text-red-400' : 'text-gray-600 dark:text-gray-400'}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
});

Select.displayName = 'Select';
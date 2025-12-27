import React, { forwardRef } from 'react';
import { cn } from '../../../utils';
import { RadioProps, RadioGroupProps } from './Radio.types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>((
  {
    className,
    size = 'md',
    label,
    helperText,
    error,
    color = 'primary',
    elevation = 'none',
    disabled,
    ...props
  },
  ref
) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const colorClasses = {
    primary: 'text-blue-600 focus:ring-blue-500',
    secondary: 'text-gray-600 focus:ring-gray-500',
    success: 'text-green-600 focus:ring-green-500',
    warning: 'text-yellow-600 focus:ring-yellow-500',
    danger: 'text-red-600 focus:ring-red-500'
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
      <div className="flex items-center">
        <input
          ref={ref}
          type="radio"
          className={cn(
            'border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200',
            sizeClasses[size],
            colorClasses[color]
          )}
          disabled={disabled}
          {...props}
        />
      </div>
      
      {label && (
        <div className="ml-3">
          <label className={cn(
            'font-medium text-gray-900 cursor-pointer',
            labelSizeClasses[size],
            {
              'opacity-50 cursor-not-allowed': disabled
            }
          )}>
            {label}
          </label>
          
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

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  options,
  size = 'md',
  color = 'primary',
  error,
  disabled,
  orientation = 'vertical',
  className
}) => {
  return (
    <div className={cn(
      'space-y-3',
      {
        'flex flex-wrap gap-6': orientation === 'horizontal',
        'space-y-0': orientation === 'horizontal'
      },
      className
    )}>
      {options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={() => onChange?.(option.value)}
          label={option.label}
          helperText={option.helperText}
          size={size}
          color={color}
          disabled={disabled || option.disabled}
        />
      ))}
      
      {error && (
        <p className="text-sm text-red-600 mt-2">
          {error}
        </p>
      )}
    </div>
  );
};

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';
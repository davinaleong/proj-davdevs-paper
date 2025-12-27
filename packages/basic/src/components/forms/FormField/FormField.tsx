import React from 'react';
import { cn } from '../../../utils';
import { Label } from '../Label/Label';

interface FormFieldProps {
  /** Field label */
  label?: string;
  /** Required indicator */
  required?: boolean;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Field ID for accessibility */
  fieldId?: string;
  /** Custom className */
  className?: string;
  /** Form field children */
  children: React.ReactNode;
  /** Disabled state */
  disabled?: boolean;
  /** Field size */
  size?: 'sm' | 'md' | 'lg';
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  required = false,
  helperText,
  error,
  fieldId,
  className,
  children,
  disabled = false,
  size = 'md'
}) => {
  const spacingClasses = {
    sm: 'space-y-1',
    md: 'space-y-2',
    lg: 'space-y-3'
  };

  return (
    <div className={cn(
      'w-full',
      spacingClasses[size],
      className
    )}>
      {label && (
        <Label
          htmlFor={fieldId}
          required={required}
          disabled={disabled}
          size={size}
        >
          {label}
        </Label>
      )}
      
      <div className="relative">
        {children}
      </div>
      
      {(error || helperText) && (
        <p className={cn(
          'text-sm',
          error ? 'text-red-600' : 'text-gray-600'
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  );
};

FormField.displayName = 'FormField';

export type { FormFieldProps };
import { forwardRef } from 'react';
import { cn } from '../../../utils';
import { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>((
  {
    className,
    variant = 'default',
    size = 'md',
    state = 'default',
    startIcon,
    endIcon,
    helperText,
    error,
    loading = false,
    fullWidth = false,
    elevation = 'none',
    disabled,
    ...props
  },
  ref
) => {
  const finalState = error ? 'error' : state;
  const isDisabled = disabled || loading;

  return (
    <div className={cn(
      'paper-input',
      {
        'paper-input--full-width': fullWidth,
        [`paper-input--elevated-${elevation}`]: elevation !== 'none'
      },
      className
    )}>
      <div className="relative">
        {startIcon && (
          <div className="paper-input__start-icon">
            {startIcon}
          </div>
        )}
        
        <input
          ref={ref}
          className={cn(
            'paper-input__field',
            `paper-input__field--${variant}`,
            `paper-input__field--${size}`,
            {
              [`paper-input__field--${finalState}`]: finalState !== 'default',
              'paper-input__field--with-start-icon': startIcon,
              'paper-input__field--with-end-icon': endIcon || loading
            }
          )}
          disabled={isDisabled}
          {...props}
        />
        
        {(endIcon || loading) && (
          <div className="paper-input__end-icon">
            {loading ? (
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : endIcon}
          </div>
        )}
      </div>
      
      {(error || helperText) && (
        <div className={error ? 'paper-input__error' : 'paper-input__helper'}>
          {error || helperText}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';
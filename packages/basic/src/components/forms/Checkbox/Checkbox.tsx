import React, { forwardRef, useEffect, useRef } from 'react';
import { cn } from '../../../utils';
import { CheckboxProps } from './Checkbox.types';
import './Checkbox.styles.css';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((
  {
    className,
    size = 'md',
    label,
    helperText,
    error,
    indeterminate = false,
    color = 'primary',
    elevation = 'none',
    disabled,
    checked,
    onChange,
    ...props
  },
  ref
) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const inputRef = ref || checkboxRef;

  // Handle indeterminate state
  useEffect(() => {
    if (inputRef && 'current' in inputRef && inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate, inputRef]);

  const handleClick = () => {
    if (disabled) return;
    
    if (inputRef && 'current' in inputRef && inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  // Icons for different states
  const CheckIcon = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const IndeterminateIcon = () => (
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );

  return (
    <div className={cn(
      'paper-checkbox',
      {
        [`paper-checkbox--elevated-${elevation}`]: elevation !== 'none'
      },
      className
    )}>
      <div className="flex items-start">
        {/* Hidden native input for form integration and accessibility */}
        <input
          ref={inputRef}
          type="checkbox"
          className="paper-checkbox__input"
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        
        {/* Custom visual checkbox */}
        <div
          className={cn(
            'paper-checkbox__control',
            `paper-checkbox__control--${size}`,
            `paper-checkbox__control--${color}`,
            {
              'paper-checkbox__control--checked': checked && !indeterminate,
              'paper-checkbox__control--indeterminate': indeterminate,
              'paper-checkbox__control--disabled': disabled
            }
          )}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="checkbox"
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-disabled={disabled}
        >
          <div className="paper-checkbox__checkmark">
            {indeterminate ? <IndeterminateIcon /> : <CheckIcon />}
          </div>
        </div>
        
        {/* Label and helper text */}
        {label && (
          <div className="paper-checkbox__label-container">
            <label
              className={cn(
                'paper-checkbox__label',
                `paper-checkbox__label--${size}`,
                {
                  'paper-checkbox__label--disabled': disabled
                }
              )}
              onClick={handleClick}
            >
              {label}
            </label>
            
            {(error || helperText) && (
              <p className={error ? 'paper-checkbox__error' : 'paper-checkbox__helper'}>
                {error || helperText}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

Checkbox.displayName = 'Checkbox';
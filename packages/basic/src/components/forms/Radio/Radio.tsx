import React, { forwardRef } from 'react';
import { cn } from '../../../utils';
import { RadioProps, RadioGroupProps } from './Radio.types';
import './Radio.styles.css';

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
    checked,
    onChange,
    ...props
  },
  ref
) => {
  const handleClick = () => {
    if (disabled) return;
    
    if (ref && 'current' in ref && ref.current) {
      ref.current.click();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div className={cn(
      'paper-radio',
      {
        [`paper-radio--elevated-${elevation}`]: elevation !== 'none'
      },
      className
    )}>
      <div className="flex items-start">
        {/* Hidden native input for form integration and accessibility */}
        <input
          ref={ref}
          type="radio"
          className="paper-radio__input"
          disabled={disabled}
          checked={checked}
          onChange={onChange}
          {...props}
        />
        
        {/* Custom visual radio */}
        <div
          className={cn(
            'paper-radio__control',
            `paper-radio__control--${size}`,
            `paper-radio__control--${color}`,
            {
              'paper-radio__control--checked': checked,
              'paper-radio__control--disabled': disabled
            }
          )}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={disabled ? -1 : 0}
          role="radio"
          aria-checked={checked}
          aria-disabled={disabled}
        >
          <div className="paper-radio__dot"></div>
        </div>
        
        {/* Label and helper text */}
        {label && (
          <div className="paper-radio__label-container">
            <label
              className={cn(
                'paper-radio__label',
                `paper-radio__label--${size}`,
                {
                  'paper-radio__label--disabled': disabled
                }
              )}
              onClick={handleClick}
            >
              {label}
            </label>
            
            {(error || helperText) && (
              <p className={error ? 'paper-radio__error' : 'paper-radio__helper'}>
                {error || helperText}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  options = [],
  size = 'md',
  color = 'primary',
  error,
  disabled,
  orientation = 'vertical',
  className,
  children,
  label,
  description
}) => {
  return (
    <fieldset className={cn(
      'paper-radio-group',
      {
        'paper-radio-group--horizontal': orientation === 'horizontal'
      },
      className
    )}>
      {label && (
        <legend className="font-medium text-gray-900 dark:text-gray-100 mb-2">
          {label}
        </legend>
      )}
      
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
          {description}
        </p>
      )}
      {/* Render options if provided */}
      {options.length > 0 && options.map((option) => (
        <Radio
          key={option.value}
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={(_e) => onChange?.(option.value)}
          label={option.label}
          helperText={option.helperText}
          size={size}
          color={color}
          disabled={disabled || option.disabled}
        />
      ))}
      
      {/* Render children if provided */}
      {children && React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === Radio) {
          return React.cloneElement(child as React.ReactElement<RadioProps>, {
            name: name,
            checked: child.props.value === value,
            onChange: (_e) => onChange?.(child.props.value),
            size: size,
            color: color,
            disabled: disabled || child.props.disabled
          });
        }
        return child;
      })}
      
      {error && (
        <p className="paper-radio-group__error">
          {error}
        </p>
      )}
    </fieldset>
  );
};

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';
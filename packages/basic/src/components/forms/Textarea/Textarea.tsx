import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { cn } from '../../../utils';
import { TextareaProps } from './Textarea.types';
import './Textarea.styles.css';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((
  {
    className,
    variant = 'default',
    size = 'md',
    state = 'default',
    helperText,
    error,
    autoResize = false,
    minRows = 3,
    maxRows = 10,
    showCount = false,
    maxLength,
    fullWidth = false,
    elevation = 'none',
    value,
    onChange,
    ...props
  },
  ref
) => {
  const finalState = error ? 'error' : state;
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState(0);

  // Auto resize functionality
  useEffect(() => {
    if (autoResize && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      const scrollHeight = textarea.scrollHeight;
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
      const maxHeight = lineHeight * maxRows;
      const minHeight = lineHeight * minRows;
      
      textarea.style.height = `${Math.max(minHeight, Math.min(scrollHeight, maxHeight))}px`;
    }
  }, [value, autoResize, minRows, maxRows]);

  // Character count
  useEffect(() => {
    if (showCount && typeof value === 'string') {
      setCharCount(value.length);
    }
  }, [value, showCount]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (showCount) {
      setCharCount(e.target.value.length);
    }
    onChange?.(e);
  };

  const isOverLimit = maxLength && charCount > maxLength;

  return (
    <div className={cn(
      'paper-textarea',
      {
        'paper-textarea--full-width': fullWidth,
        [`paper-textarea--elevated-${elevation}`]: elevation !== 'none'
      },
      className
    )}>
      <textarea
        ref={ref || textareaRef}
        className={cn(
          'paper-textarea__field',
          `paper-textarea__field--${variant}`,
          `paper-textarea__field--${size}`,
          {
            [`paper-textarea__field--${finalState}`]: finalState !== 'default'
          }
        )}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        rows={autoResize ? undefined : minRows}
        {...props}
      />
      
      {(error || helperText || showCount) && (
        <div className="paper-textarea__footer">
          <div>
            {error && <div className="paper-textarea__error">{error}</div>}
            {!error && helperText && <div className="paper-textarea__helper">{helperText}</div>}
          </div>
          {showCount && (
            <div className={cn(
              'paper-textarea__count',
              {
                'paper-textarea__count--over': isOverLimit
              }
            )}>
              {charCount}{maxLength ? `/${maxLength}` : ''}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';
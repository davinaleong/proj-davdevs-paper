import { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  /** Textarea variant */
  variant?: 'default' | 'filled' | 'outlined';
  /** Textarea size */
  size?: 'sm' | 'md' | 'lg';
  /** Textarea state */
  state?: 'default' | 'error' | 'success' | 'warning';
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Auto resize based on content */
  autoResize?: boolean;
  /** Minimum rows */
  minRows?: number;
  /** Maximum rows */
  maxRows?: number;
  /** Show character count */
  showCount?: boolean;
  /** Maximum character count */
  maxLength?: number;
  /** Full width */
  fullWidth?: boolean;
  /** Paper elevation */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
}
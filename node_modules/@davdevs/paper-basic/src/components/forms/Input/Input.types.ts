import { InputHTMLAttributes, ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Input variant */
  variant?: 'default' | 'filled' | 'outlined';
  /** Input size */
  size?: 'sm' | 'md' | 'lg';
  /** Input state */
  state?: 'default' | 'error' | 'success' | 'warning';
  /** Leading icon */
  startIcon?: ReactNode;
  /** Trailing icon */
  endIcon?: ReactNode;
  /** Helper text */
  helperText?: string;
  /** Error message */
  error?: string;
  /** Show loading state */
  loading?: boolean;
  /** Full width */
  fullWidth?: boolean;
  /** Paper elevation */
  elevation?: 'none' | 'sm' | 'md' | 'lg';
}
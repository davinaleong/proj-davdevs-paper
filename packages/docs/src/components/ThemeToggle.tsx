import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { mode, tier, toggleMode, toggleTier } = useTheme();

  return (
    <div className="flex flex-col space-y-3 p-4 border-t border-gray-200 dark:border-gray-700">
      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
        Theme Settings
      </div>
      
      {/* Mode Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700 dark:text-gray-200">
          Dark Mode
        </span>
        <button
          onClick={toggleMode}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            ${mode === 'dark' 
              ? 'bg-blue-600' 
              : 'bg-gray-200'
            }
          `}
          role="switch"
          aria-checked={mode === 'dark'}
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white transition-transform
              ${mode === 'dark' ? 'translate-x-6' : 'translate-x-1'}
            `}
          />
        </button>
      </div>

      {/* Tier Toggle */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700 dark:text-gray-200">
          Premium Theme
        </span>
        <button
          onClick={toggleTier}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2
            ${tier === 'premium' 
              ? 'bg-amber-600' 
              : 'bg-gray-200'
            }
          `}
          role="switch"
          aria-checked={tier === 'premium'}
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white transition-transform
              ${tier === 'premium' ? 'translate-x-6' : 'translate-x-1'}
            `}
          />
        </button>
      </div>

      {/* Theme Info */}
      <div className="text-xs text-gray-500 space-y-1">
        <div>Mode: <span className="font-medium">{mode}</span></div>
        <div>Tier: <span className="font-medium">{tier}</span></div>
      </div>
    </div>
  );
};
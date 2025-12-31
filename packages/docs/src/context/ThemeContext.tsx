import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';
export type ThemeTier = 'basic' | 'premium';

interface ThemeContextType {
  mode: ThemeMode;
  tier: ThemeTier;
  setMode: (mode: ThemeMode) => void;
  setTier: (tier: ThemeTier) => void;
  toggleMode: () => void;
  toggleTier: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [tier, setTier] = useState<ThemeTier>('basic');

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('paper-theme-mode') as ThemeMode;
    const savedTier = localStorage.getItem('paper-theme-tier') as ThemeTier;
    
    if (savedMode) setMode(savedMode);
    if (savedTier) setTier(savedTier);
  }, []);

  // Apply theme classes to document
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark', 'basic-tier', 'premium-tier');
    
    // Apply current theme classes
    root.classList.add(mode, `${tier}-tier`);
    
    // Save to localStorage
    localStorage.setItem('paper-theme-mode', mode);
    localStorage.setItem('paper-theme-tier', tier);
  }, [mode, tier]);

  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleTier = () => {
    setTier(prev => prev === 'basic' ? 'premium' : 'basic');
  };

  const value = {
    mode,
    tier,
    setMode,
    setTier,
    toggleMode,
    toggleTier,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
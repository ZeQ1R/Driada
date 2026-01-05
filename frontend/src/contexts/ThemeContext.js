import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [season, setSeason] = useState('winter'); // 'winter' or 'summer'
  const [language, setLanguage] = useState('en');
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Season themes
  const themes = {
    winter: {
      primary: '#1a3c34', // Deep forest green
      secondary: '#2d2d2d', // Charcoal gray
      accent: '#8b6914', // Warm wood brown
      light: '#f5f0e6', // Soft cream
      snow: true,
      particles: 'snow'
    },
    summer: {
      primary: '#2d5a4a', // Lighter forest green
      secondary: '#3d3d3d', // Lighter charcoal
      accent: '#a67c00', // Golden brown
      light: '#fff9ed', // Warmer cream
      snow: false,
      particles: 'leaves'
    }
  };

  const currentTheme = themes[season];

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', currentTheme.primary);
    document.documentElement.style.setProperty('--color-secondary', currentTheme.secondary);
    document.documentElement.style.setProperty('--color-accent', currentTheme.accent);
    document.documentElement.style.setProperty('--color-light', currentTheme.light);
  }, [season, currentTheme]);

  const toggleSeason = () => {
    setSeason(prev => prev === 'winter' ? 'summer' : 'winter');
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{
      season,
      setSeason,
      toggleSeason,
      language,
      setLanguage,
      soundEnabled,
      toggleSound,
      theme: currentTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

/**
 * Dark Mode Toggle with localStorage Persistence
 * Aqua Avenue - Theme Switcher
 */

(function() {
  'use strict';
  
  // Configuration
  const STORAGE_KEY = 'aqua-avenue-theme';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  const ICON_LIGHT = '☀️';
  const ICON_DARK = '🌙';
  
  // DOM Elements
  let themeToggleButton = null;
  let themeToggleIcon = null;
  
  /**
   * Get the user's preferred theme from system settings
   */
  function getSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }
    return THEME_LIGHT;
  }
  
  /**
   * Get the current theme from localStorage or system preference
   */
  function getSavedTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    
    if (savedTheme === THEME_LIGHT || savedTheme === THEME_DARK) {
      return savedTheme;
    }
    
    // If no saved preference, use system preference
    return getSystemPreference();
  }
  
  /**
   * Apply the theme to the document
   */
  function applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === THEME_DARK) {
      root.setAttribute('data-theme', 'dark');
      if (themeToggleIcon) {
        themeToggleIcon.textContent = ICON_LIGHT;
      }
    } else {
      root.removeAttribute('data-theme');
      if (themeToggleIcon) {
        themeToggleIcon.textContent = ICON_DARK;
      }
    }
    
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, theme);
  }
  
  /**
   * Toggle between light and dark themes
   */
  function toggleTheme() {
    const currentTheme = getSavedTheme();
    const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
    applyTheme(newTheme);
  }
  
  /**
   * Initialize the theme on page load
   */
  function initTheme() {
    // Apply saved theme immediately to prevent flash
    const savedTheme = getSavedTheme();
    applyTheme(savedTheme);
  }
  
  /**
   * Initialize the theme toggle button
   */
  function initToggleButton() {
    themeToggleButton = document.getElementById('theme-toggle');
    
    if (!themeToggleButton) {
      console.warn('Theme toggle button not found');
      return;
    }
    
    themeToggleIcon = themeToggleButton.querySelector('.theme-toggle-icon');
    
    if (!themeToggleIcon) {
      console.warn('Theme toggle icon not found');
      return;
    }
    
    // Set initial icon
    const currentTheme = getSavedTheme();
    themeToggleIcon.textContent = currentTheme === THEME_DARK ? ICON_LIGHT : ICON_DARK;
    
    // Add click event listener
    themeToggleButton.addEventListener('click', toggleTheme);
    
    // Add keyboard support (Enter and Space)
    themeToggleButton.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleTheme();
      }
    });
  }
  
  /**
   * Listen for system theme changes
   */
  function initSystemThemeListener() {
    if (!window.matchMedia) return;
    
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Modern browsers
    if (darkModeQuery.addEventListener) {
      darkModeQuery.addEventListener('change', function(e) {
        // Only apply system preference if user hasn't manually set a preference
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
      });
    }
    // Older browsers
    else if (darkModeQuery.addListener) {
      darkModeQuery.addListener(function(e) {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
        }
      });
    }
  }
  
  /**
   * Main initialization
   */
  function init() {
    // Apply theme immediately (before DOM is ready to prevent flash)
    initTheme();
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initToggleButton();
        initSystemThemeListener();
      });
    } else {
      // DOM is already ready
      initToggleButton();
      initSystemThemeListener();
    }
  }
  
  // Start the initialization
  init();
  
  // Expose methods for debugging (optional)
  window.AquaAvenueTheme = {
    getTheme: getSavedTheme,
    setTheme: applyTheme,
    toggle: toggleTheme,
    reset: function() {
      localStorage.removeItem(STORAGE_KEY);
      initTheme();
    }
  };
  
})();

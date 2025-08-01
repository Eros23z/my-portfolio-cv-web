import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Crea el Contexto
export const ThemeContext = createContext();

// 2. Crea el Proveedor del Contexto
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark'; 
  });

  // Efecto para aplicar la clase al body y guardar en localStorage
  useEffect(() => {
    document.body.className = theme; 
    localStorage.setItem('theme', theme); 
  }, [theme]); 

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
import React, { createContext, useState, useContext } from 'react';
import es from '../lang/es.json';
import en from '../lang/en.json';

// 1. Crear el Contexto
const LanguageContext = createContext();

// 2. Crear un Proveedor (Provider) para el Contexto
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es'); // Estado para el idioma actual ('es' o 'en')
  const [text, setText] = useState(es); // Estado para el objeto de texto actual
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleLanguage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setLang(currentLang => {
      const newLang = currentLang === 'es' ? 'en' : 'es';
      setText(newLang === 'es' ? es : en);
      return newLang;
    });
    setIsAnimating(false); // 3. Desactiva la animación al finalizar
    }, 300);
    
  };

  const value = { lang, text, toggleLanguage, isAnimating };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// 3. Crear un Hook personalizado para usar el Contexto fácilmente
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
  }
  return context;
}
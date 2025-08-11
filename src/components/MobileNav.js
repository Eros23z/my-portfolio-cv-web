import React, { useState } from 'react';
import './MobileNav.css';
// import { useLanguage } from '../context/LanguageContext'; // ELIMINA ESTA LÍNEA
import { useTheme } from '../context/ThemeContext';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  // const { text, lang, toggleLanguage } = useLanguage(); // ELIMINA ESTA LÍNEA
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';

    if (id === 'app-top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // Las secciones ahora son texto fijo en español
  const sections = [
    { id: 'app-top', label: 'Inicio' },
    { id: 'about', label: 'Sobre Mí' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'education', label: 'Educación' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'projects', label: 'Proyectos' },
  ];

  return (
    <div className="mobile-nav">
      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Abrir menú de navegación">
        <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>

      {isOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMenu}>
          <nav className="mobile-nav-content" onClick={(e) => e.stopPropagation()}>
            <ul>
              {sections.map((section) => (
                <li key={section.id}>
                  <button onClick={() => scrollToSection(section.id)}>
                    {section.label} 
                  </button>
                </li>
              ))}
              <li>
                <button onClick={toggleTheme}>
                  {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
                  {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
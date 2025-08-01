import React from 'react';
import './FloatingNavbar.css';
import { useTheme } from '../context/ThemeContext';

function FloatingNavbar() {
  const { theme, toggleTheme } = useTheme();

  const sections = [
    { id: 'app-top', icon: 'fas fa-home', label: 'Header' },
    { id: 'about', icon: 'fas fa-user', label: 'About me' },
    { id: 'education', icon: 'fas fa-graduation-cap', label: 'Education' },
    { id: 'experience', icon: 'fas fa-briefcase', label: 'Experience' },
    { id: 'projects', icon: 'fas fa-project-diagram', label: 'Projects' },
    { id: 'skills', icon: 'fas fa-code', label: 'Skills' },
    // { id: 'contact', icon: 'fas fa-envelope', label: 'Contacto' },
  ];

  
  const scrollToSection = (id) => {
    if (id === 'app-top') {
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
      }
    }
  };

  return (
    <nav className="floating-navbar">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              aria-label={section.label}
              title={section.label} 
            >
              <i className={section.icon}></i>
              <span className="navbar-label">{section.label}</span> 
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={toggleTheme}
            aria-label={`Cambiar a ${theme === 'dark' ? 'modo claro' : 'modo oscuro'}`}
            title={`Cambiar a ${theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}`}
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun"></i> 
            ) : (
              <i className="fas fa-moon"></i> 
            )}
            <span className="navbar-label">
              {theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default FloatingNavbar;
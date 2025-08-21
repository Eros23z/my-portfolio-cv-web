import React from 'react';
import './FloatingNavbar.css';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

function FloatingNavbar() {
  const { theme, toggleTheme } = useTheme();
  const { text } = useLanguage();
  const { lang, toggleLanguage } = useLanguage();

  const sections = [
    { id: 'app-top', icon: 'fas fa-home', label: text.navbar.home },
    { id: 'about', icon: 'fas fa-user', label: text.navbar.about },
    { id: 'education', icon: 'fas fa-graduation-cap', label: text.navbar.education },
    { id: 'experience', icon: 'fas fa-briefcase', label: text.navbar.experience },
    { id: 'projects', icon: 'fas fa-project-diagram', label: text.navbar.projects },
    { id: 'skills', icon: 'fas fa-code', label: text.navbar.skills },
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
            aria-label={`Change to ${theme === 'dark' ? 'Light mode' : 'Dark mode'}`}
            title={`Change to ${theme === 'dark' ? 'Light mode' : 'Dark mode'}`}
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun"></i> 
            ) : (
              <i className="fas fa-moon"></i> 
            )}
            <span className="navbar-label">
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </span>
          </button>
          <br/>
          <button
            onClick={toggleLanguage}
            aria-label={`Change to ${lang === 'en' ? 'Spanish' : 'English'}`}
            title={`Change to ${lang === 'en' ? 'Spanish' : 'English'}`}
          >
            {lang === 'en' ? (
              <i className="fas fa-globe"></i>
            ) : (
              <i className="fas fa-globe"></i>
            )}
            <span className="navbar-label">
              {lang === 'en' ? 'Spanish' : 'English'}
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default FloatingNavbar;
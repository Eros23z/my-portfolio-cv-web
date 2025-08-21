import React, { useState } from 'react';
import './MobileNav.css';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { text } = useLanguage();
  const { lang, toggleLanguage } = useLanguage();

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

  const sections = [
    { id: 'app-top', label: text.navbar.home },
    { id: 'about', label: text.navbar.about },
    { id: 'skills', label: text.navbar.skills },
    { id: 'education', label: text.navbar.education },
    { id: 'experience', label: text.navbar.experience },
    { id: 'projects', label: text.navbar.projects },
  ];

  return (
    <div className="mobile-nav">
      <button className="hamburger-menu" onClick={toggleMenu} aria-label="Open navigation menu">
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
                  {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                  {theme === 'dark' ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
                </button>
                <br />
                <button onClick={toggleLanguage}>
                  {lang === 'en' ? 'Spanish' : 'English'}
                  {lang === 'en' ? <i className="fas fa-globe"></i> : <i className="fas fa-globe"></i>}
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
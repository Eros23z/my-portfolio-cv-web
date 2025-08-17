import React, { useState } from 'react';
import './MobileNav.css';
import { useTheme } from '../context/ThemeContext';

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
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

  const sections = [
    { id: 'app-top', label: 'Profile' },
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
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
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
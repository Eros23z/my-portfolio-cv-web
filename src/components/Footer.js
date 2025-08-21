import React from 'react';
import './Footer.css';
import './LanguageAnimationChange.css';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { text, isAnimating } = useLanguage();
  return (
    <footer className="app-footer">
      <div className={isAnimating ? 'fade-out' : 'fade-in'}>
          <p className="footer-copyright">
          © {currentYear} {text.footer.allRightsReserved}
        </p>
        <p className="footer-message">
          {text.footer.builtWithLove}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
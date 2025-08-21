import React from 'react';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { text } = useLanguage();
  return (
    <footer className="app-footer">
      <p className="footer-copyright">
        © {currentYear} {text.footer.allRightsReserved}
      </p>
      <p className="footer-message">
        {text.footer.builtWithLove}
      </p>
    </footer>
  );
}

export default Footer;
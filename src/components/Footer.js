import React from 'react';
import './Footer.css';


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p className="footer-copyright">
        © {currentYear} Eros Daniel Zamora. Todos los derechos reservados.
      </p>
      <p className="footer-message">
        Diseñado y desarrollado con pasión. 
      </p>
    </footer>
  );
}

export default Footer;
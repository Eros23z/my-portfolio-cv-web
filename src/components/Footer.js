import React from 'react';
import './Footer.css';


function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <p className="footer-copyright">
        © {currentYear} Eros Daniel Zamora. All rights reserved.
      </p>
      <p className="footer-message">
        Designed and developed with passion.
      </p>
    </footer>
  );
}

export default Footer;
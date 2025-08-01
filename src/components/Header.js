import React from 'react';
import './Header.css';

function Header() {
  const whatsappNumber = '5492664486818'; 
  const emailAddress = 'energycs23@live.com';
  const linkedinUrl = 'https://www.linkedin.com/in/eros-zamora/';
  const githubUrl = 'https://github.com/Eros23z';

  return (
    <header className="cv-header fade-in-slide-up">
      <div className="header-content-wrapper">
        <div className="header-top-info">
          <img src="/images/eros.jpg" alt="Tu Foto de Perfil" className="profile-pic" />
          <p className="job-title">Desarrollador de Software</p>
        </div>
        <div className="main-name-section">
          <h1>Eros Daniel Zamora</h1>
        </div>
        <div className="contact-icons-large"> 
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="fab fa-whatsapp"></i> 
          </a>
          <a href={`mailto:${emailAddress}`} aria-label="Email">
            <i className="fas fa-envelope"></i> 
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i> 
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i> 
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
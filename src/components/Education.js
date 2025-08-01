import React from 'react';
import './Education.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const educationData = [
  {
    institution: 'Instituto Educativo Cristo Rey',
    logo: '/images/Cristo Rey Instituto Emblem.png', 
    backgroundText: 'COLEGIO', 
    details: [
      'Ciencias Sociales y Humanidades',
      'Año de Graduación: 2016',
    ],
    alignment: 'left' 
  },
  {
    institution: 'Universidad de La Punta San Luis',
    logo: '/images/ulp.png', 
    backgroundText: 'UNIVERSIDAD', 
    details: [
      'Carrera: Tecnicatura de Desarrollo de Software',
      'Año de Inicio: 2018',
      'Estado: Cursando',
    ],
    alignment: 'right' 
  }
];

function Education() {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  return (
    <section id='education' ref={domRef} className={`education-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <h2 className="education-title">Educación</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className={`education-item education-item-${edu.alignment}`}>
            <div className={`education-content education-content-${edu.alignment}`}>
              <h3>{edu.institution}</h3>
              <ul>
                {edu.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="education-background">
              <img src={edu.logo} alt={`${edu.institution} logo`} className="education-logo" />
              <span className="background-text">{edu.backgroundText}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
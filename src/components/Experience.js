import React from 'react';
import './Experience.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const experienceData = [
  {
    company: 'Axxon Consulting',
    logo: '/images/axxon.png', 
    backgroundText: '', 
    position: 'Desarrollador de Software',
    duration: 'Jul 2023 - Feb 2025',
    responsibilities: [
      'Fuí integrante del equipo de desarrollo y personalización de soluciones dentro del ecosistema de Dynamics 365, con especializacion en X++. Implementé funcionalidades específicas para optimizar los procesos operativos de los clientes. Trabajé en equipos multidisciplinarios bajo metodologías ágiles (Scrum/Kanban). Manejo de PowerShell y Queries en Postman',
    ],
  }
];

function Experience() {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  return (
    <section id='experience' ref={domRef} className={`experience-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <h2 className="experience-title">Experiencia</h2>
      <div className="experience-container">
        {experienceData.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-background">
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
              <span className="background-text">{exp.backgroundText}</span>
            </div>
            <div className="experience-content">
              <h3>{exp.position}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
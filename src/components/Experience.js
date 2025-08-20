import React from 'react';
import './Experience.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const experienceData = [
  {
    company: 'Axxon Consulting',
    logo: '/images/axxon.png', 
    backgroundText: '', 
    position: 'Software Developer',
    duration: 'Jul 2023 - Feb 2025',
    responsibilities: [
      'I was involved in developing customizations in Dynamics 365 Finance and Operations using X++. I implemented custom entities, forms, tables, and fields for billing and project management processes. Creation and optimization of queries in SQL Server for internal reports. I collaborated with multidisciplinary teams to improve operational flows for clients in different industries. My impact: reduction of errors in advance billing and optimization of expense recording in projects.',
    ],
  }
];

function Experience() {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  return (
    <section id='experience' ref={domRef} className={`experience-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <h2 className="experience-title">Experience</h2>
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
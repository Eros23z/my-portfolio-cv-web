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
      'I was a member of the development and customization team within the Dynamics 365 ecosystem, specializing in X++. I implemented specific functionalities to optimize clients operational processes. I worked in multidisciplinary teams using agile methodologies (Scrum/Kanban). Proficient in PowerShell and Queries in Postman.',
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
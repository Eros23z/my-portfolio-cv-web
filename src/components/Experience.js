import React from 'react';
import './Experience.css';
import './LanguageAnimationChange.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

function Experience() {
  const { text, isAnimating } = useLanguage();
  const [domRef, isVisible] = useScrollAnimation(0.2);
  const experienceData = text.experience.jobs;
  return (
    <section id='experience' ref={domRef} className={`experience-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <div className={isAnimating ? 'fade-out' : 'fade-in'}>
          <h2 className="experience-title">{text.experience.title}</h2>
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
                    <li>{exp.responsibilities}</li>
                </ul>
             </div>
           </div>
         ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
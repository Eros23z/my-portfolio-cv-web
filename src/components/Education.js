import React from 'react';
import './Education.css';
import './LanguageAnimationChange.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

const educData = [
  {
    logo: 'images/Cristo Rey Instituto Emblem.png',
  },
  {
    logo: 'images/ulp.png',
  }
]

function Education() {
  const { text, isAnimating } = useLanguage();
  const educationData = text.education.institutions;
  const [domRef, isVisible] = useScrollAnimation(0.2);
  return (
    <section id='education' ref={domRef} className={`education-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <div className={isAnimating ? 'fade-out' : 'fade-in'}>
        <h2 className="education-title">{text.education.title}</h2>
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
                <img src={educData[index].logo} alt={`${edu.institution} logo`} className="education-logo" />
                <span className="background-text">{edu.backgroundText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
import React from 'react';
import './Skills.css';
import './LanguageAnimationChange.css';
import useScrollAnimation from '../hooks/useScrollAnimation'; 
import { useLanguage } from '../context/LanguageContext';

const skillsData = {
  frontend: [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  ],
  backend: [
    { name: '.NET / ASP.NET', icon: 'devicon-dot-net-plain' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'EF Core', icon: 'fas fa-database' },
    { name: 'Sequelize', icon: 'fas fa-database' },
    { name: 'C#', icon: 'devicon-csharp-plain' }, 
    { name: 'Express.js', icon: 'devicon-express-original' },
  ],
  databases: [
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Oracle', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-leaf' },
    { name: 'SQL Server', icon: 'fas fa-database' },
  ],
  goodPractices: [
    { name: 'Clean Architecture', icon: 'fas fa-laptop-code' },
    { name: 'SOLID Principles', icon: 'fas fa-shield-alt' },
    { name: 'Dependency Injection', icon: 'fas fa-plug' },

  ],
  Extras: [
    { name: 'ERP Microsoft Dynamics 365 F&O', icon: 'fas fa-cloud' },
    { name: 'X++', icon: 'fas fa-code' }, 
  ],
  conceptsArchitecture: [
    { name: 'API RESTful', icon: 'fas fa-exchange-alt' },
  ],
  toolsVersionControl: [
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'GitHub', icon: 'fab fa-github' },
  ],
  methodologies: [
    { name: 'Agile', icon: 'fas fa-users' },
    { name: 'Scrum', icon: 'fas fa-running' },
    { name: 'Kanban', icon: 'fas fa-columns' },
  ],
  languagesSpoken: [
    { name: 'Spanish (Native)', icon: 'fas fa-language' },
    { name: 'English (B2)', icon: 'fas fa-language' },
  ],
};

function Skills() {
  const { text, isAnimating } = useLanguage();
  const [domRef, isVisible] = useScrollAnimation(0.2); 
  return (
    <section id='skills' ref={domRef} className={`skills-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <div className={isAnimating ? 'fade-out' : 'fade-in'}>
        <h2 className="skills-title">{text.skills.title}</h2>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{text.skills[category]}</h3> 
             <div className="skill-items">
                {skills.map((skill) => (
                 <div key={skill.name} className="skill-item">
                   <i className={`${skill.icon} skill-icon`}></i>
                   <span className="skill-name">{skill.name}</span>
                 </div>
                ))}
             </div>
           </div>
         ))}
        </div>
        <div className="skills-section">
          <h2 className='skills-title'>{text.skills.downloadTitle}</h2>
          <div className='skill-category'>
           <a href="/CV-Eros.pdf" download className="download-button">
            <i className="fas fa-file-pdf"></i> Descargar CV
            </a>
            &nbsp;
            <a href="/CV_Eros_English.pdf" download className="download-button">
              <i className="fas fa-file-pdf"></i> Download CV (English)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
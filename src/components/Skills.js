import React from 'react';
import './Skills.css';
import useScrollAnimation from '../hooks/useScrollAnimation'; 

const skillsData = {
  languages: [
    { name: 'HTML5', icon: 'fab fa-html5' },
    { name: 'CSS3', icon: 'fab fa-css3-alt' },
    { name: 'JavaScript', icon: 'fab fa-js' },
    { name: 'C#', icon: 'devicon-csharp-plain' }, 
    { name: 'C++', icon: 'devicon-cplusplus-plain' },
    { name: 'X++', icon: 'fas fa-code' }, 
    { name: 'TypeScript', icon: 'devicon-typescript-plain' },
    { name: 'Java', icon: 'fab fa-java' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Python', icon: 'fab fa-python' },
  ],
  frameworks: [
    { name: '.NET / ASP.NET', icon: 'devicon-dot-net-plain' },
    { name: 'EF Core', icon: 'fas fa-database' },
    { name: 'Sequelize', icon: 'fas fa-database' },
    { name: 'REST APIs', icon: 'fas fa-exchange-alt' },
    { name: 'Dynamics 365', icon: 'fas fa-cloud' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
  ],
  databases: [
    { name: 'MySQL', icon: 'fas fa-database' },
    { name: 'Oracle', icon: 'fas fa-database' },
    { name: 'MongoDB', icon: 'fas fa-leaf' },
    { name: 'SQL Server', icon: 'fas fa-database' },
  ],
  methodologies: [
    { name: 'Agile', icon: 'fas fa-users' },
    { name: 'Scrum', icon: 'fas fa-running' },
    { name: 'Kanban', icon: 'fas fa-columns' },
  ],
};

function Skills() {
  const [domRef, isVisible] = useScrollAnimation(0.2); 
  return (
    <section id='skills' ref={domRef} className={`skills-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <h2 className="skills-title">Habilidades</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h3> 
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
    </section>
  );
}

export default Skills;
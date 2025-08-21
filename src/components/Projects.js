import React from 'react';
import './Projects.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

function Projects() {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  const { text } = useLanguage();
  const projectsData = text.projects.allProjects;
  return (
    <section id='projects' ref={domRef} className={`projects-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <h2 className="projects-title">{text.projects.title}</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}> 
            <div className="project-image-wrapper">
              <div className="project-image-background" style={{ backgroundImage: `url(${project.image})` }}></div>
            </div>
            <div className="project-info-visible">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              {project.link && ( 
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-view-button">
                  {text.projects.viewProject} <i className="fas fa-external-link-alt"></i> 
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
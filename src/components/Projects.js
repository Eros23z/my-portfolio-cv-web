import React from 'react';
import './Projects.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const projectsData = [
  {
    title: 'Event organizer',
    image: '/images/agenda.png', 
    description: 'University personal development for an event organizer with ABM for contacts, clients, and events.',
    technologies: ['C#'],
  },
  {
    title: 'Website',
    image: '/images/ulp.png',
    description: 'Personal university development of a static website using HTML, CSS, and JavaScript.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Axxon Consulting',
    image: '/images/axxon.png',
    description: 'An evolving project that required advance invoicing. All expenses charged to the project in Dynamics had to be made available so that they could be invoiced from the invoicing verticals.',
    technologies: ['X++', 'SQL Server', 'Dynamics 365', 'Git'],
  },
  {
    title: 'Student manager',
    image: '/images/studentsmanager.png',
    description: 'Complete CRUD desktop application for student management. Implements layered architecture, validations, data access with EF Core, and best practice patterns.',
    technologies: ['C#', '.NET', 'EF Core', 'SQL Server', 'Git'],
    link: 'https://github.com/Eros23z/Student-Management-.Net',
  },
  {
    title: 'Trombosis y trombofilia Argentina',
    image: '/images/ong.png',
    description: 'Development and optimization of an interactive contact module, incorporating form validation (HTML5) and anti-spam protection with Google reCAPTCHA v2. Formsubmit.co was integrated as a backendless service for efficient email management, overcoming challenges in configuring redirects and excluding sensitive data from emails.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git'],
    link: 'https://trombofiliaytrombosisargentina.netlify.app/',
  },
  {
    title: 'Curriculum Vitae Web',
    image: '/images/cv.png',
    description: 'Development of my own interactive and dynamic resume, built from scratch. This project showcases my skills in front-end development, UI/UX design, and performance optimization. It features smooth navigation, scroll animations, and a modern, responsive design.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git'],
  },
];

function Projects() {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  return (
    <section id='projects' ref={domRef} className={`projects-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <h2 className="projects-title">Featured Projects</h2>
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
                  See Project <i className="fas fa-external-link-alt"></i> 
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
import React from 'react';
import './Projects.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const projectsData = [
  {
    title: 'Organizador de eventos',
    image: '/images/agenda.png', 
    description: 'Desarrollo personal universitario de un organizador de eventos con ABM de contactos, clientes y eventos.',
    technologies: ['C#'],
  },
  {
    title: 'Página web',
    image: '/images/ulp.png',
    description: 'Desarrollo personal universitario de una página web estática con HTML, CSS y JavaScript.',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Axxon Consulting',
    image: '/images/axxon.png',
    description: 'Proyecto evolutivo en el que se solicitaba facturar por anticipado. Se requería disponibilizar todos los gastos cargados a proyecto en Dynamics para poder ser facturados desde los verticales de facturación.',
    technologies: ['X++', 'SQL Server', 'Dynamics 365', 'Git'],
  },
  {
    title: 'Gestor de estudiantes',
    image: '/images/studentsmanager.png',
    description: 'Aplicación de escritorio CRUD completa para gestión de estudiantes. Implementa arquitectura por capas, validaciones, acceso a datos con EF Core y patrones de buenas prácticas.',
    technologies: ['C#', '.NET', 'EF Core', 'SQL Server', 'Git'],
    link: 'https://github.com/Eros23z/Student-Management-.Net',
  },
  {
    title: 'Trombosis y trombofilia Argentina',
    image: '/images/ong.png',
    description: 'Desarrollo y optimizacion de un modulo de contacto interactivo, incorporando validacion de formulario (HTML5) y proteccion anti-spam con Google reCAPTCHA v2. Se integro Formsubmit.co como servicio backendless para la gestion eficiente del envio de correos, superando desafios en la configuracion de redirecciones y exclusion de datos sensibles del email.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Git'],
    link: 'https://trombofiliaytrombosisargentina.netlify.app/',
  },
  {
    title: 'Curriculum Vitae Web',
    image: '/images/cv.png',
    description: 'Desarrollo de mi propio Curriculum Vitae interactivo y dinámico, construido desde cero. Este proyecto demuestra mis habilidades en el desarrollo Front-end, diseño UI/UX, y optimización de rendimiento. Incluye navegación fluida, animaciones al scroll y un diseño moderno y responsivo.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Git'],
    link: 'https://trombofiliaytrombosisargentina.netlify.app/',
  },
];

function Projects() {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  return (
    <section id='projects' ref={domRef} className={`projects-section fade-in-slide-up ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <h2 className="projects-title">Proyectos Destacados</h2>
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
                  Ver Proyecto <i className="fas fa-external-link-alt"></i> 
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
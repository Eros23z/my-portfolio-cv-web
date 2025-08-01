import React, { useState } from 'react';
import './About.css'; 
import useScrollAnimation from '../hooks/useScrollAnimation';

function About() {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section id='about' ref={domRef} className={`about-section ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <h2>Sobre Mí</h2>
      <p>
        Soy un desarrollador de software con solida formacion tecnica y experiencia en la creacion de aplicaciones
        y soluciones tecnologicas. Me apasiona aprender nuevas tecnologias y aportar en un entorno colaborativo,
        buscando siempre mejorar mis habilidades y entregar soluciones eficientes
      </p>
      {showMore && (
        <div extra-details>
          <p>
            Tengo experiencia en el desarrollo de aplicaciones web, así como en la implementación de soluciones
            personalizadas para clientes. Me destaco por mi capacidad para resolver problemas complejos y mi atención al detalle.
          </p>
          <p>
            Me considero una persona proactiva, con habilidades de comunicación efectiva y un fuerte compromiso con la calidad del trabajo.
            Estoy siempre dispuesto a aprender y adaptarme a nuevas tecnologías y metodologías de trabajo.
          </p>
          <p><span>¡Listo para enfrentar nuevos desafíos y contribuir en proyectos innovadores!</span></p>
        </div>
      )}
      <button onClick={toggleShowMore} className="toggle-button">
        {showMore ? 'Mostrar Menos' : 'Mostrar Más'}
      </button>
    </section>
  );
}

export default About;
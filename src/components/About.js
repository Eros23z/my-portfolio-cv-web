import React, { useState } from 'react';
import './About.css'; 
import './LanguageAnimationChange.css';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { useLanguage } from '../context/LanguageContext';

function About() {
  const [domRef, isVisible] = useScrollAnimation(0.2);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const { text, isAnimating } = useLanguage();

  return (
    <section id='about' ref={domRef} className={`about-section ${isVisible ? 'scroll-animate is-visible' : 'scroll-animate'}`}>
      <div className={isAnimating ? 'fade-out' : 'fade-in'}>
        <h2>{text.about.title}</h2>
      <p>
        {text.about.paragraph1}
      </p>
      {showMore && (
        <div extra-details>
          <p>{text.about.paragraph2} </p>
          <p>{text.about.paragraph3}</p>
          <p><span>{text.about.paragraph4}</span></p>
        </div>
      )}
      <button onClick={toggleShowMore} className="toggle-button">
        {showMore ? text.about.showLess : text.about.showMore}
      </button>
      <p/>
      <a
        href="/CV-Eros.pdf"
        download
        className="download-button"
      >
        <i className="fas fa-file-pdf"></i> Descargar CV
      </a>
      &nbsp;
      &nbsp;
      <a
        href="/Your-CV-in-english.pdf"
        download
        className="download-button"
      >
        <i className="fas fa-file-pdf"></i> Download CV 
      </a>
      </div>
    </section>
  );
}

export default About;
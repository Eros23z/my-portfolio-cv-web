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
      <h2>ABOUT ME</h2>
      <p>
        I am a software developer with solid technical training and experience in creating applications
        and technological solutions. I am passionate about learning new technologies and contributing in a collaborative environment,
        always seeking to improve my skills and deliver efficient solutions.
      </p>
      {showMore && (
        <div extra-details>
          <p>
            I have experience in web application development, as well as in implementing customized solutions
            customized solutions for clients. I stand out for my ability to solve complex problems and my attention to detail.
          </p>
          <p>
            I consider myself a proactive person with effective communication skills and a strong commitment to quality work.
            I am always willing to learn and adapt to new technologies and work methodologies.
          </p>
          <p><span>Ready to take on new challenges and contribute to innovative projects!</span></p>
        </div>
      )}
      <button onClick={toggleShowMore} className="toggle-button">
        {showMore ? 'Mostrar Menos' : 'Mostrar Más'}
      </button>
    </section>
  );
}

export default About;
import React, { useState } from 'react';
import './App.css'; 
import Header from './components/Header.js'; 
import About from './components/About'; 
import Education from './components/Education'; 
import Experience from './components/Experience'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import FloatingNavbar from './components/FloatingNavbar';
import MobileNav from './components/MobileNav';
import Chatbot from './components/Chatbot.js';
import {ThemeProvider} from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import LoadingScreen from './components/LoadingScreen';
import './components/animations.css'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
  const [isLoading, setIsLoading] = useState(true); // 2. Nuevo estado para controlar la carga

  const handleLoadingComplete = () => {
    setIsLoading(false); // 3. Función que actualiza el estado cuando la carga termina
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* 4. Muestra la pantalla de carga de forma condicional */}
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

        {/* 5. Muestra el contenido principal solo si la carga ha terminado */}
        {!isLoading && (
          <div className="App">
            <FloatingNavbar />
            <MobileNav />
            <Chatbot />
            <Header />
            <div className="App-content-wrapper">
              <About id="about" />
              <Education id="education" />
              <Experience id="experience" />
              <Projects id="projects" />
              <Skills id="skills" />
            </div>
            <Footer />
          </div>
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}


export default App;

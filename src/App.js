import React from 'react';
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
import './components/animations.css'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

function App() {
  return (
    <ThemeProvider> 
      <LanguageProvider>
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
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

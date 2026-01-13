import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import './App.css'; // Puedes dejarlo por ahora, pero Tailwind irá tomando el control
import Header from './components/Header'; 
import About from './components/About'; 
import Education from './components/Education'; 
import Experience from './components/Experience'; 
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Dock from './components/ui/Dock'; // Importamos el nuevo Dock
import Chatbot from './components/Chatbot';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import LoadingScreen from './components/LoadingScreen';

// Librerías de FontAwesome (Manténlas si las usas dentro de otros componentes viejos, 
// pero en los nuevos usaremos Lucide)
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <AnimatePresence mode="wait">
            {isLoading && (
                <LoadingScreen key="loader" onLoadingComplete={handleLoadingComplete} />
            )}
        </AnimatePresence>

        {!isLoading && (
          // Quitamos bg-background y ponemos relative
          <div className="relative min-h-screen text-foreground transition-colors duration-300 overflow-x-hidden">
            
            {/* --- FONDO GLOBAL UNIFICADO --- */}
            <div className="fixed inset-0 -z-10 h-full w-full bg-background">
                {/* Círculo de luz ambiental (se mueve o queda fijo) */}
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
            </div>

            <Dock />
            <Chatbot />
            
            {/* Header tiene su propio fondo transparente ahora */}
            <Header />
            
            {/* Wrapper principal */}
            <div className="max-w-7xl mx-auto w-full relative">
              

              <About />
              <SectionDivider /> {/* Nuevo componente separador */}
              
              <Education />
              <SectionDivider />
              
              <Experience />
              <SectionDivider />
              
              <Projects />
              <SectionDivider />
              
              <Skills />
            </div>
            
            <Footer />
          </div>
        )}
      </LanguageProvider>
    </ThemeProvider>
  );
}

// Componente pequeño para suavizar transiciones
const SectionDivider = () => (
    <div className="relative w-full h-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
        {/* Pequeño punto brillante en el centro */}
        <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
    </div>
);

export default App;
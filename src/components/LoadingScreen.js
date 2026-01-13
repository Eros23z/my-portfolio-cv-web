import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulamos la carga
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          // Esperamos un momento antes de avisar que terminó
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        // Hacemos que la carga sea "aleatoria" para que parezca real
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      // CAMBIO CLAVE: En lugar de "y: -100%" (subir), usamos "opacity: 0" (desvanecer)
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground"
    >
      <div className="w-64 flex flex-col gap-4">
        {/* Nombre Sutil */}
        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase"
        >
            Eros Daniel Zamora
        </motion.p>

        {/* Barra de Progreso Fina y Elegante */}
        <div className="h-[2px] w-full bg-secondary overflow-hidden rounded-full">
            <motion.div 
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                // Layout spring para que el movimiento de la barra sea suave
                layoutId="progress-bar" 
            />
        </div>

        {/* Porcentaje (Opcional, si quieres que sea ultra minimalista puedes quitar esto) */}
        <p className="text-right text-xs text-muted-foreground font-mono">
            {Math.round(progress)}%
        </p>
      </div>
    </motion.div>
  );
}

export default LoadingScreen;
import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const messages = [
    "Desarrollador Full-Stack apasionado por crear soluciones innovadoras.",
    "Experiencia probada en React, .NET y bases de datos robustas.",
    "Enfoque en código limpio, eficiente y de alto rendimiento.",
    "Colaborador entusiasta y solucionador de problemas creativo.",
    "Listo para aportar valor inmediato a tu equipo.",
];

function LoadingScreen({ onLoadingComplete }) {
    const [currentMessage, setCurrentMessage] = useState('');
    const [isMessageVisible, setIsMessageVisible] = useState(true);
    const [isLoadingScreenVisible, setIsLoadingScreenVisible] = useState(true);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setCurrentMessage(messages[randomIndex]);

        // 1. Oculta el mensaje después de 2 segundos (ajusta si es necesario)
        const messageTimer = setTimeout(() => {
            setIsMessageVisible(false);
        }, 2000);

        // 2. Oculta la pantalla completa después de 3 segundos (0.5s de animación + 0.5s de buffer)
        const screenTimer = setTimeout(() => {
            setIsLoadingScreenVisible(false);
            onLoadingComplete();
        }, 3000);

        return () => {
            clearTimeout(messageTimer);
            clearTimeout(screenTimer);
        };
    }, [onLoadingComplete]);

    return isLoadingScreenVisible ? (
        <div className="loading-screen">
            <div className='my-name'>
                <h1 className={`loading-message ${isMessageVisible ? 'fade-in' : 'fade-out'}`}>Eros Daniel Zamora</h1>
            </div>
            <h2 className={`loading-message ${isMessageVisible ? 'fade-in' : 'fade-out'}`}>Software Developer</h2>
            <p className={`loading-message ${isMessageVisible ? 'fade-in' : 'fade-out'}`}>
                {currentMessage}
            </p>
            <div className="loading-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    ) : null;
}

export default LoadingScreen;
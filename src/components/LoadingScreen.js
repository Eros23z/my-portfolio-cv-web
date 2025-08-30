import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const messages = [
    {
        es: "Desarrollador Full-Stack apasionado por crear soluciones innovadoras.",
        en: "Passionate Full-Stack Developer creating innovative solutions."
    },
    {
        es: "Experiencia probada en React, .NET y bases de datos robustas.",
        en: "Proven experience in React, .NET, and robust databases."
    },
    {
        es: "Enfoque en código limpio, eficiente y de alto rendimiento.",
        en: "Focused on clean, efficient, and high-performance code."
    },
    {
        es: "Colaborador entusiasta y solucionador de problemas creativo.",
        en: "An enthusiastic collaborator and creative problem-solver."
    },
    {
        es: "Listo para aportar valor inmediato a tu equipo.",
        en: "Ready to add immediate value to your team."
    }
];

function LoadingScreen({ onLoadingComplete }) {
    const [currentMessage, setCurrentMessage] = useState('');
    const [isMessageVisible, setIsMessageVisible] = useState(true);
    const [isLoadingScreenVisible, setIsLoadingScreenVisible] = useState(true);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * messages.length);
        setCurrentMessage(messages[randomIndex]);

        // 1. Oculta el mensaje después de 2 segundos 
        const messageTimer = setTimeout(() => {
            setIsMessageVisible(false);
        }, 2500);

        // 2. Oculta la pantalla completa después de 3 segundos
        const screenTimer = setTimeout(() => {
            setIsLoadingScreenVisible(false);
            onLoadingComplete();
        }, 3500);

        return () => {
            clearTimeout(messageTimer);
            clearTimeout(screenTimer);
        };
    }, [onLoadingComplete]);

    return isLoadingScreenVisible ? (
        <div className="loading-screen">
            <h1 className="my-name">Eros Daniel Zamora</h1>
            <p className="job-title-loading">Software Developer</p> 
            {currentMessage && (
                <div className={`loading-messages-container ${isMessageVisible ? 'fade-in' : 'fade-out'}`}>
                    <p className="loading-message-es">{currentMessage.es}</p>
                    <p className="loading-message-en">{currentMessage.en}</p>
                </div>
            )}
            <div className="loading-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    ) : null;
}

export default LoadingScreen;
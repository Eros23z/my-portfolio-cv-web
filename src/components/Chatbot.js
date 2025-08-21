import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css'; 
import { useLanguage } from '../context/LanguageContext';

function Chatbot() {
  // 1. estado de la ventana del chatbot
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. estado de la conversación (lista de mensajes)
  const [messages, setMessages] = useState([]);
  
  // 3. valor del input del usuario
  const [input, setInput] = useState('');
  
  // 4. scroll automático al final del chat
  const messagesEndRef = useRef(null);

  // El motor de diálogo
  
  const { text, lang } = useLanguage();

  // Función para procesar el input del usuario
  const handleSendMessage = (e) => {
    const chatbotResponses = text.chatbot;

    e.preventDefault();
    if (input.trim() === '') return;

    // Agregar el mensaje del usuario a la conversación
    const userMessage = { text: input, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]); 

    // Lógica del motor de diálogo con el Map
    // Convertimos el input a minúsculas y lo limpiamos
    const processedInput = input.toLowerCase().trim();
    let botResponse = chatbotResponses['default']; // Respuesta por defecto

    // Buscamos palabras clave en el input del usuario
    const keywordMap = {
      'es': {
        'experiencia': ['experiencia', 'trabajo'],
        'proyectos': ['proyectos', 'portfolio', 'desarrollos'],
        'habilidades': ['habilidades', 'skills', 'conocimientos'],
        'salario': 'salario',
        'contacto': 'contacto',
        'tecnologías': 'tecnologias',
        'github': 'github',
        'por qué': 'por que',
        'futuro': ['futuro', 'que aspiras?', 'que deseas lograr?', '¿que aspiras?'],
        'hola': ['hola', 'hello', 'que tal', 'qué tal', 'buenos días', 'buenas tardes'],
        'adiós': ['adiós', 'bye', 'chao'],
        'gracias': ['gracias', 'muchas gracias'],
      },
      'en': {
        'experience': ['experience', 'job', 'work'],
        'projects': ['projects', 'portfolio', 'developments'],
        'skills': ['skills', 'abilities'],
        'salary': 'salary',
        'contact': 'contact',
        'technologies': 'technologies',
        'github': 'github',
        'why': 'why',
        'future': 'future',
        'hi': ['hi', 'hello', 'what\'s up', 'good morning', 'good afternoon'],
        'bye': ['bye', 'goodbye', 'see you later'],
        'thanks': ['thanks', 'thank you'],
      }
    };
    const currentKeywords = keywordMap[lang];
    for (const keyword in currentKeywords) {
      if (processedInput.includes(keyword)) {
        const responseKey = currentKeywords[keyword];
        botResponse = chatbotResponses[responseKey];
        break;
      }
    }
    
    // Agregar el mensaje del bot 
    setTimeout(() => {
      const botMessage = { text: botResponse, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }, 750);
    setInput('');
  };

  // Hook para hacer scroll automático al final de la ventana de chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // Se ejecuta cada vez que se añaden nuevos mensajes

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-comments"></i>}
      </div>
      <div className="chatbot-window">
        <div className="chatbot-header">
          <h3>{text.chatbot.title}</h3>
        </div>
        <div className="chatbot-messages">
          {messages.length === 0 && (
            <div className="chatbot-message bot-message initial-message">
              <span>{text.chatbot.presentation}</span>
              <p>{text.chatbot.help}</p>
            </div>
          )}
          {messages.map((msg, index) => (
            <div key={index} className={`chatbot-message ${msg.sender}-message`}>
              <span>{msg.text}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="chatbot-input-area" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={text.chatbot.write}
          />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
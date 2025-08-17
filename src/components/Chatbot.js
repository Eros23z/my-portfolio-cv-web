import React, { useState, useEffect, useRef } from 'react';
import './Chatbot.css'; // Crearemos este archivo de CSS en el siguiente paso

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
  const chatbotResponses = {
    'experiencia': "Tengo 2 años de experiencia como desarrollador de software, con un enfoque en React y C# .NET.",
    'proyectos': "He trabajado en proyectos destacados como el desarrollo de una página web para una ONG, desarrollo de mi cv web, CRUD con .NET, etc. Puedes verlos en la sección 'Proyectos' de mi CV.",
    'habilidades': "Mis habilidades principales son React.js, C#/.NET, y SQL Server. También tengo conocimiento de Node.js, Express, y metodologías ágiles.",
    'salario': "Prefiero discutir el tema salarial durante la entrevista para entender mejor las responsabilidades del puesto.",
    'contacto': "Puedes contactarme a través de LinkedIn, GitHub o por email. Encontrarás los enlaces en la parte superior de la página.",
    'tecnologias': "Mi stack tecnológico principal incluye React.js, C#/.NET, SQL Server, Node.js y Express. También he trabajado con TypeScript y bases de datos como MongoDB y MySQL.",
    'github': "Puedes ver mi código y proyectos en mi perfil de GitHub. El enlace está en la parte superior de la página.",
    'por que': "Me apasiona resolver problemas y crear productos de software. Soy una persona proactiva y orientada a los resultados.",
    'futuro': "Busco un puesto que me permita crecer profesionalmente y continuar aprendiendo de un equipo de expertos. Mi objetivo es aplicar mis habilidades para crear soluciones de software innovadoras y escalables, contribuyendo de manera significativa al éxito de la empresa.",
    // Saludos y despedidas
    'hola': "¡Hola! Bienvenido a mi CV interactivo. ¿Tienes alguna pregunta sobre mi experiencia, proyectos o habilidades?",
    'adios': "¡Adiós! Gracias por tu interés. Espero hablar contigo pronto.",
    'gracias': "De nada. ¿Hay algo más en lo que pueda ayudarte?",
    // Pregunta por defecto
    'default': "Lo siento, no entendí tu pregunta. Puedes intentar preguntar sobre 'experiencia', 'proyectos', 'habilidades', 'contacto' o 'tecnologias'."
  };

  // Función para procesar el input del usuario
  const handleSendMessage = (e) => {
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
    const keywords = Object.keys(chatbotResponses).filter(key => key !== 'default');
    for (const keyword of keywords) {
      if (processedInput.includes(keyword)) {
        botResponse = chatbotResponses[keyword];
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
          <h3>Assistant</h3>
        </div>
        <div className="chatbot-messages">
          {messages.length === 0 && (
            <div className="chatbot-message bot-message initial-message">
              <span>¡Hola! Soy el chatbot de Eros. ¿Tienes alguna pregunta sobre mi CV?</span>
              <p>Puedes preguntar sobre:  <br />"Experiencia" <br />"Proyectos" <br />"Habilidades" <br />"Contacto" <br />"Tecnologías" <br />"Futuro" <br />etc.</p>
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
            placeholder="Escribe tu pregunta..."
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
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

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

    // Buscamos palabras clave en el input del usuario
    const keywordMap = {
      'es': {
        'experience': ['experiencia', 'trabajo'],
        'projects': ['proyectos', 'portfolio', 'desarrollos'],
        'skills': ['habilidades', 'skills', 'conocimientos'],
        'salary': ['salario', 'sueldo', 'remuneracion'],
        'contact': ['contacto', 'contactame'],
        'technologies': ['tecnologias', 'tecnologia', 'stack'],
        'github': ['github', 'git', 'repositorio'],
        'why': ['por que', 'porque', 'razon'],
        'future': ['futuro', 'carrera', 'posicion'],
        'hi': ['hola', 'hello', 'que tal', 'que tal', 'buenos dias', 'buenas tardes'],
        'bye': ['adios', 'bye', 'chao'],
        'thanks': ['gracias', 'muchas gracias', 'gracias'],
      },
      'en': {
        'experience': ['experience', 'job', 'work'],
        'projects': ['projects', 'portfolio', 'developments'],
        'skills': ['skills', 'abilities'],
        'salary': ['salary', 'pay', 'compensation'],
        'contact': ['contact', 'reach out'],
        'technologies': ['technologies', 'technology', 'stack'],
        'github': ['github', 'git', 'repository'],
        'why': ['why', 'reason'],
        'future': ['future', 'career', 'position'],
        'hi': ['hi', 'hello', 'whats up', 'good morning', 'good afternoon'],
        'bye': ['bye', 'goodbye', 'see you later'],
        'thanks': ['thanks', 'thank you'],
      }
    };
    let foundMatch = false; 
    let botText = chatbotResponses['default'];
    for (const responseKey in keywordMap[lang]) {
      for (const synonym of keywordMap[lang][responseKey]) {
        if (processedInput.includes(synonym)) {
          botText = chatbotResponses[responseKey];
          foundMatch = true; 
          break; 
        }
      }
      if (foundMatch) {
        break; 
      }
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botText, sender: 'bot' }]);
    }, 600);

    setInput('');
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-80 md:w-96 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[500px]"
          >
            {/* Header del Chat */}
            <div className="bg-primary p-4 flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">{text.chatbot.title}</h3>
                <p className="text-white/70 text-xs">Online</p>
              </div>
            </div>

            {/* Área de Mensajes */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/30 min-h-[300px]">
              {messages.length === 0 && (
                <div className="bg-card p-4 rounded-xl border border-border text-sm text-muted-foreground shadow-sm">
                  <p className="mb-2 font-semibold text-foreground">👋 {text.chatbot.presentation}</p>
                  <p>{text.chatbot.help}</p>
                </div>
              )}
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary text-primary-foreground rounded-br-none' 
                      : 'bg-card border border-border text-foreground rounded-bl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-3 bg-card border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={text.chatbot.write}
                className="flex-1 bg-secondary text-foreground text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 border-none"
              />
              <button 
                type="submit" 
                disabled={!input.trim()}
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Flotante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </motion.button>
    </div>
  );
}

export default Chatbot;
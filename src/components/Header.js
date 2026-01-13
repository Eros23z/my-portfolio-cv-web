import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Download, MessageCircle } from 'lucide-react';

function Header() {
  const { text } = useLanguage();
  
  const whatsappNumber = '5492664486818'; 
  const emailAddress = 'energycs23@live.com';
  const linkedinUrl = 'https://www.linkedin.com/in/eros-zamora/';
  const githubUrl = 'https://github.com/Eros23z';

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="app-top" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 pb-32">
      
      {/* Fondo Animado */}
      <div className="absolute inset-0 w-full h-full bg-background">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute left-0 right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] opacity-50 mx-auto pointer-events-none" />
      </div>

      <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        
        {/* Badge de Estado */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border backdrop-blur-md shadow-sm hover:bg-secondary/80 transition-colors cursor-default"
        >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-foreground/80">
                {text.header.status}
            </span>
        </motion.div>

        {/* Hero Text */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground/90 to-foreground/50"
        >
          {text.header.name}
        </motion.h1>

        {/* Descripción con partes coloreadas según el idioma */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
        >
          <span className="block mb-2 font-semibold text-foreground">{text.header.role}</span>
          
          {text.header.descriptionPart1}
          <span className="text-primary font-semibold">{text.header.descriptionBlue1}</span>
          {text.header.descriptionPart2}
          <span className="text-primary font-semibold">{text.header.descriptionBlue2}</span>
          {text.header.descriptionPart3}
          <span className="text-primary font-semibold">{text.header.descriptionBlue3}</span>
          {text.header.descriptionPart4}
        </motion.p>

        {/* Botones CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 items-center mb-16"
        >
            <button 
                onClick={scrollToProjects}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-105"
            >
                <span className="mr-2">{text.header.btnCheck}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a 
                href="/CV-Eros.pdf" 
                download
                className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
                <Download className="mr-2 w-4 h-4" />
                {text.header.btnCV}
            </a>
        </motion.div>

        {/* ICONOS SOCIALES */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-6 text-muted-foreground"
        >
            <SocialLink href={githubUrl} icon={<Github className="w-6 h-6" />} label="GitHub" />
            <SocialLink href={linkedinUrl} icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" />
            <SocialLink href={`mailto:${emailAddress}`} icon={<Mail className="w-6 h-6" />} label="Email" />
            <SocialLink href={`https://wa.me/${whatsappNumber}`} icon={<MessageCircle className="w-6 h-6" />} label="WhatsApp" />
        </motion.div>

      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}

const SocialLink = ({ href, icon, label }) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label={label}
        className="hover:text-primary transition-colors hover:scale-110 transform duration-200"
    >
        {icon}
    </a>
);

export default Header;
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

function Experience() {
  const { text } = useLanguage();
  const experienceData = text.experience.jobs;

  return (
    <section id="experience" className="py-20 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Título de la sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            {text.experience.title}
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full opacity-80" />
        </motion.div>

        {/* Línea vertical del Timeline (Conector) */}
        <div className="absolute left-6 md:left-1/2 top-32 bottom-20 w-0.5 bg-border md:-translate-x-1/2" />

        <div className="flex flex-col gap-12">
          {experienceData.map((job, index) => (
            <TimelineItem key={index} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const TimelineItem = ({ job, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row items-center md:justify-between ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Punto central del Timeline */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10 md:-translate-x-1/2 translate-y-1.5 md:translate-y-0 flex items-center justify-center">
        <div className="w-full h-full rounded-full animate-ping opacity-20 bg-primary absolute" />
      </div>

      {/* Espacio vacío para alinear en desktop */}
      <div className="hidden md:block w-1/2" />

      {/* Tarjeta de Contenido */}
      <div className={`w-full md:w-[45%] pl-8 md:pl-0 ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
        <div className="p-6 bg-card border border-border rounded-2xl shadow-sm hover:shadow-md hover:border-primary/30 transition-all group">
          
          <div className={`flex flex-col gap-1 mb-4 ${isEven ? "md:items-end" : "md:items-start"}`}>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {job.position}
            </h3>
            <h4 className="text-lg font-medium text-muted-foreground flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {job.company}
            </h4>
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit mt-1">
              <Calendar className="w-3 h-3" />
              {job.duration}
            </span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {job.responsibilities}
          </p>
          
          {/* Si quieres convertir las responsabilidades en lista (opcional, si el texto lo permite) */}
          {/* <ul className={`space-y-2 mt-4 ${isEven ? "md:items-end" : ""}`}>
             <li className="flex items-start gap-2 text-sm text-muted-foreground">
               <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
               <span>Logró mejorar X en Y%</span>
             </li>
          </ul> 
          */}
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
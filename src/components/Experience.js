import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronUp, Code2, CheckCircle2 } from 'lucide-react';

function Experience() {
  const { text } = useLanguage();
  const experienceData = text.experience.jobs;

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-medium mb-4 text-muted-foreground">
             <Briefcase className="w-4 h-4 text-primary" />
             <span>Career Path</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
            {text.experience.title}
          </h2>
        </motion.div>

        {/* Lista de Trabajos (Accordion) */}
        <div className="flex flex-col gap-6">
          {experienceData.map((job, index) => (
            <ExperienceCard key={index} job={job} index={index} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ job, index, text }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // El primero abierto por defecto

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-card border-primary/30 shadow-lg' : 'bg-card/40 border-border hover:border-primary/20'}`}
    >
      {/* Cabecera (Siempre visible) */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div className="flex items-start gap-4">
            <div className={`p-3 rounded-xl transition-colors ${isOpen ? 'bg-primary/20 text-primary' : 'bg-secondary text-muted-foreground'}`}>
                <Briefcase className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-xl font-bold text-foreground">{job.position}</h3>
                <p className="text-lg text-muted-foreground">{job.company}</p>
            </div>
        </div>

        <div className="flex flex-col md:items-end gap-2">
            <span className="flex items-center gap-2 text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                <Calendar className="w-3 h-3" /> {job.duration}
            </span>
            {/* Badges de tecnología visibles en modo colapsado */}
            {!isOpen && (
                <div className="flex gap-2 mt-1">
                    {job.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded-md bg-secondary text-muted-foreground border border-border">
                            {tech}
                        </span>
                    ))}
                    {job.technologies.length > 3 && <span className="text-xs text-muted-foreground">+{job.technologies.length - 3}</span>}
                </div>
            )}
        </div>
      </div>

      {/* Cuerpo Expandible */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 pt-0 border-t border-border/50">
                
                {/* Stack Tecnológico Completo */}
                <div className="flex flex-wrap gap-2 my-4">
                    {job.technologies.map((tech, i) => (
                        <span key={i} className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                            <Code2 className="w-3 h-3" /> {tech}
                        </span>
                    ))}
                </div>

                {/* Responsabilidades */}
                <div className="space-y-3 pl-2 border-l-2 border-primary/10">
                    {job.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-3">
                             <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                             <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
                                {resp}
                             </p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex justify-center md:justify-end">
                    <button 
                        onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                        className="text-xs font-medium text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
                    >
                        {text.experience.hideDetails} <ChevronUp className="w-3 h-3" />
                    </button>
                </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Experience;
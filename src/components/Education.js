import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

function Education() {
  const { text } = useLanguage();
  const educationData = text.education.institutions;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Título alineado al centro */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-3 rounded-full bg-secondary mb-4 border border-border">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            {text.education.title}
          </h2>
        </motion.div>

        {/* Lista conectada */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // Glassmorphism para que se vea el fondo global a través
              className="group relative bg-card/40 backdrop-blur-md border border-border p-6 rounded-2xl hover:bg-card/60 transition-all hover:border-primary/30"
            >
              <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-5 h-5" />
                  </div>
                  {/* Si tienes fechas en tu JSON, úsalas aquí. Si no, quita este span */}
                  <span className="text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded-md border border-border">
                    2020 - 2023
                  </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {edu.institution}
              </h3>
              
              <div className="space-y-2 mt-4">
                {edu.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
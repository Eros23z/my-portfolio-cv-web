import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { RenderIconCloud } from './ui/IconCloud';
import { motion } from 'framer-motion';

// Lista actualizada de tecnologías para la esfera 3D (basada en tu CV)
const slugs = [
  "typescript", "javascript", "react", "html5", "css3", "nodedotjs", 
  "express", "postgresql", "prisma", "microsoftsqlserver", "mysql", "mongodb", 
  "git", "github", "visualstudiocode", "csharp", "dotnet", "blazor", 
  "bootstrap", "tailwindcss", "postman", "azuredevops", "socketdotio", 
  "powershell"
];

function Skills() {
  const { text } = useLanguage();

  return (
    <section id="skills" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 py-20">
      
      {/* Título animado */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="z-10 flex flex-col items-center text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          {text.skills.title}
        </h2>
        <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
      </motion.div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-6xl">
          
          {/* Columna Izquierda: Categorías de Texto (Actualizadas con tu Stack Real) */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
               <SkillCategory 
                  title={text.skills.frontend || "Frontend"} 
                  items={["React.js", "Blazor", "MudBlazor", "HTML5", "CSS3", "Bootstrap", "Tailwind"]} 
                  delay={0.1} 
               />
               <SkillCategory 
                  title={text.skills.backend || "Backend"} 
                  items={[".NET 9", "C#", "ASP.NET Core", "Node.js", "Express", "TypeScript", "Prisma ORM"]} 
                  delay={0.2} 
               />
               <SkillCategory 
                  title={text.skills.databases || "Databases"} 
                  items={["SQL Server", "PostgreSQL", "MongoDB", "MySQL", "EF Core"]} 
                  delay={0.3} 
               />
               <SkillCategory 
                  title={text.skills.toolsVersionControl || "Tools"} 
                  items={["Git", "GitHub", "PowerShell", "Postman", "IIS", "Powershell", "Mercado Pago SDK"]} 
                  delay={0.4} 
               />
               <SkillCategory 
                  title={text.skills.methodologies || "Architecture"} 
                  items={["Clean Arch", "SOLID", "Scrum", "REST API", "WebSockets"]} 
                  delay={0.5} 
               />
               
               {/* Botón de descarga de CV */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.6 }}
                 className="col-span-1 sm:col-span-2 mt-4 flex flex-wrap gap-4 justify-center sm:justify-start"
               >
                 <a href="/CV_Eros.pdf" download className="px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary/80 transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2">
                     Descargar CV (Español)
                 </a>
                 <a href="/CV_Eros_English.pdf" download className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-bold hover:bg-accent hover:text-white transition-all shadow-lg flex items-center gap-2">
                     Download CV (English)
                 </a>
               </motion.div>
          </div>

          {/* Columna Derecha: Nube Interactiva */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
              <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-full bg-background/50 border border-white/10 shadow-2xl pb-10 pt-10">
                  <RenderIconCloud iconSlugs={slugs} />
              </div>
          </motion.div>
      </div>
    </section>
  );
}

// Componente auxiliar para las tarjetas de categorías
const SkillCategory = ({ title, items, delay }) => (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="p-5 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group"
    >
        <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-primary/80">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {items.map(item => (
                <span key={item} className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground border border-border/50">
                    {item}
                </span>
            ))}
        </div>
    </motion.div>
);

export default Skills;
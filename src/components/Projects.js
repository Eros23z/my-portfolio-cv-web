import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Code2, Layers, X, Github, Check, ChevronLeft, ChevronRight, Plus, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const { text } = useLanguage();
  const projectsData = text.projects.allProjects;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Layers className="w-4 h-4" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
            {text.projects.title}
          </h2>
        </motion.div>

        {/* LISTA ZIG-ZAG */}
        <div className="flex flex-col gap-24 md:gap-32">
          {projectsData.map((project, index) => (
            <ProjectItem 
                key={index} 
                project={project} 
                index={index} 
                onClick={() => setSelectedProject(project)}
                text={text} 
            />
          ))}
        </div>
      </div>

      {/* --- MODAL DETALLADO (REDISEÑADO) --- */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
            text={text}
          />
        )}
      </AnimatePresence>

    </section>
  );
}

// --- COMPONENTE INDIVIDUAL ZIG-ZAG ---
const ProjectItem = ({ project, index, onClick, text }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16 group`}
    >
      {/* 1. MOCKUP DE IMAGEN - CLICKABLE */}
      <div 
        className="w-full lg:w-3/5 cursor-pointer perspective-1000"
        onClick={onClick}
      >
        <div className="relative rounded-xl bg-gray-900/5 dark:bg-white/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 lg:rounded-2xl lg:p-3 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-2xl">
            {/* Barra de navegador falsa */}
            <div className="flex items-center gap-1.5 px-2 pb-2 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            
            {/* Imagen del proyecto */}
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-900/20 shadow-2xl">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Overlay "Ver más" al hacer hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                     <span className="bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <Plus className="w-5 h-5" /> {text.projects.viewMore}
                     </span>
                </div>
            </div>
        </div>
      </div>

      {/* 2. INFORMACIÓN DEL PROYECTO */}
      <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
        
        <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors cursor-pointer" onClick={onClick}>
            {project.title}
        </h3>
        
        {/* Descripción en caja de vidrio */}
        <div 
            className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-sm mb-6 relative hover:border-primary/50 transition-colors cursor-pointer"
            onClick={onClick}
        >
             <p className="text-muted-foreground leading-relaxed">
                {project.description}
             </p>
        </div>

        {/* Stack Tecnológico */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
            {project.technologies.slice(0, 4).map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground border border-border flex items-center gap-1.5">
                    <Code2 className="w-3 h-3 text-primary" /> {tech}
                </span>
            ))}
            {project.technologies.length > 4 && (
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground border border-border">
                    +{project.technologies.length - 4}
                </span>
            )}
        </div>

        {/* Botón de Acción Principal */}
        <button 
            onClick={onClick}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
        >
            {text.projects.viewMore} <ExternalLink className="w-4 h-4" />
        </button>
      </div>

    </motion.div>
  );
};

// --- MODAL COMPLETO (REDISEÑADO PREMIUM/MINIMALISTA) ---
const ProjectModal = ({ project, onClose, text }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

    const descriptions = Array.isArray(project.fullDescriptions) 
        ? project.fullDescriptions 
        : [project.fullDescriptions || project.descriptions];

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            <motion.div 
                layoutId={`project-${project.title}`}
                initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-5xl bg-card border border-border rounded-[2rem] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
                {/* Botón Cerrar (Más grande y claro) */}
                <button onClick={onClose} className="absolute top-6 right-6 z-50 p-2.5 bg-black/20 text-white backdrop-blur-md rounded-full hover:bg-red-500/80 transition-all">
                    <X className="w-6 h-6" />
                </button>

                <div className="overflow-y-auto custom-scrollbar flex-1 bg-background/50">
                    
                    {/* --- SECCIÓN 1: CARRUSEL DE IMAGENES (Limpio, sin título encima) --- */}
                    <div className="relative w-full aspect-video bg-black group">
                        <AnimatePresence mode="wait">
                            <motion.img 
                                key={currentImageIndex} src={images[currentImageIndex]} 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }} className="w-full h-full object-contain bg-center" 
                            />
                        </AnimatePresence>
                        
                        {/* Controles Carrusel */}
                        {images.length > 1 && (
                            <>
                                <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100">
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/30 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100">
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                                {/* Indicadores */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 p-2 rounded-full bg-black/20 backdrop-blur-md">
                                    {images.map((_, idx) => (
                                        <div key={idx} className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-white w-5' : 'bg-white/50'}`} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    {/* --- SECCIÓN 2: CONTENIDO (Con mucho espaciado) --- */}
                    <div className="p-8 md:p-12 lg:p-16 space-y-12">

                        {/* CABECERA: Título y Tecnologías */}
                        <div className="space-y-6 border-b border-border/50 pb-10">
                             <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">{project.title}</h2>
                             
                             {/* Tecnologías (Movidas aquí arriba para dar contexto inmediato) */}
                             <div className="flex flex-wrap gap-3">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 text-sm font-semibold rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center gap-2">
                                        <Code2 className="w-4 h-4" /> {tech}
                                    </span>
                                ))}
                             </div>
                        </div>

                        {/* GRID DE DETALLES (2 columnas con mucho aire) */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start">
                            
                            {/* COLUMNA PRINCIPAL (Descripción y Features) */}
                            <div className="lg:col-span-2 space-y-12">
                                
                                {/* About */}
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 text-primary" /> About the Project
                                    </h3>
                                    
                                    {/* Renderizado de la lista de descripciones */}
                                    <div className="space-y-6">
                                        {descriptions.map((desc, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border/40 hover:border-primary/20 transition-colors"
                                            >
                                                {/* Número o Icono elegante */}
                                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-sm border border-border">
                                                    {i + 1}
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                                    {desc}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                                
                                {/* Features (En grid para que respire mejor) */}
                                {project.features && (
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                            <Check className="w-5 h-5 text-primary" /> Key Features
                                        </h3>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {project.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 text-foreground/90">
                                                    <Check className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                                    <span className="text-base font-medium leading-snug">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* COLUMNA LATERAL (Links y CTA) - Sticky */}
                            <div className="space-y-8 lg:sticky lg:top-6">
                                 <div className="p-6 rounded-3xl bg-secondary/20 border border-border/50 space-y-6">
                                    <h4 className="font-bold text-sm uppercase text-muted-foreground tracking-wider mb-2">Project Links</h4>
                                    <div className="flex flex-col gap-4">
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:scale-[1.02]">
                                                Visit Live Site <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </a>
                                        )}
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-card text-foreground font-bold border border-border/80 hover:bg-secondary/50 hover:border-primary/30 transition-all hover:scale-[1.02]">
                                                View Code <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                            </a>
                                        )}
                                     </div>
                                 </div>
                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
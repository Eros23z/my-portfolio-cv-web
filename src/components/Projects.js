import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, Code2, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

function Projects() {
  const { text } = useLanguage();
  const projectsData = text.projects.allProjects;

  return (
    <section id="projects" className="py-32 bg-background relative overflow-hidden">
      {/* Fondo decorativo sutil */}
      

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
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">
             Una colección de soluciones digitales diseñadas con precisión.
          </p>
        </motion.div>

        {/* Lista de Proyectos (Zig-Zag) */}
        <div className="flex flex-col gap-20 md:gap-32">
          {projectsData.map((project, index) => (
            <ProjectItem key={index} project={project} index={index} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectItem = ({ project, index, text }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
    >
      {/* 1. MOCKUP DE IMAGEN (Ventana de navegador) */}
      <div className="w-full lg:w-3/5 group">
        <div className="relative rounded-xl bg-gray-900/5 dark:bg-white/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-white/10 lg:rounded-2xl lg:p-3 transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
            {/* Barra de navegador falsa */}
            <div className="flex items-center gap-1.5 px-2 pb-2 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            
            {/* Imagen del proyecto */}
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-800 shadow-2xl">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                {/* Overlay al hacer hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        </div>
      </div>

      {/* 2. INFORMACIÓN DEL PROYECTO */}
      <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start text-center lg:text-left">
        
        {/* Título */}
        <h3 className="text-3xl font-bold text-foreground mb-4">
            {project.title}
        </h3>
        
        {/* Descripción en caja de vidrio (Glassmorphism) */}
        <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl shadow-sm mb-6 relative hover:border-primary/50 transition-colors">
             <p className="text-muted-foreground leading-relaxed">
                {project.description}
             </p>
        </div>

        {/* Stack Tecnológico */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
            {project.technologies.map((tech, i) => (
                <span key={i} className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground border border-border flex items-center gap-1.5">
                    <Code2 className="w-3 h-3 text-primary" /> {tech}
                </span>
            ))}
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center gap-4">
            {project.link && (
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
                >
                    {text.projects.viewProject} <ExternalLink className="w-4 h-4" />
                </a>
            )}
            {/* Botón de GitHub (Opcional, si tienes link al repo en tu JSON o hardcodeado) */}
            {/* <a href="#" className="p-3 rounded-full border border-border hover:bg-secondary transition-colors">
                <Github className="w-5 h-5" />
            </a> 
            */}
        </div>
      </div>

    </motion.div>
  );
};

export default Projects;
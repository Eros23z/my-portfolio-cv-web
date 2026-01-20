import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Download, User, Sparkles, Rocket, FileText } from 'lucide-react';

function About() {
  const { text } = useLanguage();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      
      {/* Círculos decorativos */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 relative z-10">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </div>
          {/* Título con fondo para tapar la línea conectora */}
          <div className="relative">
             <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50 inline-block px-4 py-2 bg-background/80 backdrop-blur-md rounded-xl">
                {text.about.title}
             </h2>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* TARJETA 1: FOTO + BIOGRAFÍA (Modificada) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 p-6 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group flex flex-col sm:flex-row items-center gap-6"
          >
            {/* Tu Foto */}
            <div className="relative shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="/images/eros.jpg" 
                        alt="Eros Zamora" 
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Elemento decorativo detrás de la foto */}
                <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-lg -z-10"></div>
            </div>

            <div className="relative z-10 text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-4 flex items-center justify-center sm:justify-start gap-2">
                    👋 <span className="text-primary">Hello World!</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                    {text.about.paragraph1}
                </p>
            </div>
          </motion.div>

          {/* TARJETA 2: Enfoque Técnico */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 p-8 rounded-3xl bg-secondary/50 border border-border flex flex-col justify-center relative overflow-hidden group hover:border-primary/30 transition-colors"
          >
             <div className="mb-4 p-3 bg-background rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-8 h-8 text-blue-500" />
             </div>
             <h4 className="text-xl font-bold mb-3">Tech Focus</h4>
             <p className="text-sm text-muted-foreground">
                {text.about.paragraph2}
             </p>
          </motion.div>

          {/* TARJETA 3: Soft Skills */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-blue-600/5 border border-border flex flex-col justify-center"
          >
             <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                Mindset <Sparkles className="w-4 h-4 text-yellow-500" />
             </h4>
             <p className="text-sm text-muted-foreground mb-4">
                {text.about.paragraph3}
             </p>
          </motion.div>

          {/* TARJETA 4: Descargas */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 p-8 rounded-3xl bg-primary text-primary-foreground relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">
                    {text.about.paragraph4}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                   {text.skills.downloadTitle || "Download my Resume to see the full picture."}
                </p>
            </div>

            <div className="relative z-10 flex flex-wrap justify-center gap-3">
                <CVButton 
                    href="/Cv_Eros.pdf" 
                    label="CV Español" 
                    icon={<FileText className="w-4 h-4" />} 
                />
                <CVButton 
                    href="/CV_Eros_English.pdf" 
                    label="CV English" 
                    icon={<Download className="w-4 h-4" />} 
                    variant="outline"
                />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

const CVButton = ({ href, label, icon, variant = "solid" }) => {
    const baseClass = "flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:-translate-y-1";
    const variants = {
        solid: "bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl text-black", // Force text-black for visibility
        outline: "bg-primary-foreground/10 text-white border border-white/20 hover:bg-white/20"
    };

    return (
        <a href={href} download className={`${baseClass} ${variants[variant]}`}>
            {icon}
            {label}
        </a>
    );
};

export default About;
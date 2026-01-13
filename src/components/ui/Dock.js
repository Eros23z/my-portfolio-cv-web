import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import { 
  Home, 
  User, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Wrench, 
  Sun, 
  Moon, 
  Languages 
} from "lucide-react";
import { cn } from "../../lib/utils";

export default function Dock() {
  let mouseX = useMotionValue(Infinity);
  const { theme, toggleTheme } = useTheme();
  const { toggleLanguage, lang, text } = useLanguage();

  const scrollToSection = (id) => {
    if (id === 'app-top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        const element = document.getElementById(id);
        if (element) {
            // Ajuste para el offset del header si fuera necesario
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="mx-auto flex h-16 items-end gap-4 rounded-2xl bg-white/20 dark:bg-black/20 border border-white/20 dark:border-white/10 px-4 pb-3 backdrop-blur-xl shadow-2xl"
      >
        {/* --- SECCIÓN DE NAVEGACIÓN --- */}
        <DockIcon mouseX={mouseX} onClick={() => scrollToSection('app-top')} icon={Home} label={text.navbar.home} />
        <DockIcon mouseX={mouseX} onClick={() => scrollToSection('about')} icon={User} label={text.navbar.about} />
        <DockIcon mouseX={mouseX} onClick={() => scrollToSection('education')} icon={GraduationCap} label={text.navbar.education} />
        <DockIcon mouseX={mouseX} onClick={() => scrollToSection('experience')} icon={Briefcase} label={text.navbar.experience} />
        <DockIcon mouseX={mouseX} onClick={() => scrollToSection('projects')} icon={FolderGit2} label={text.navbar.projects} />
        <DockIcon mouseX={mouseX} onClick={() => scrollToSection('skills')} icon={Wrench} label={text.navbar.skills} />

        {/* --- SEPARADOR VERTICAL --- */}
        <div className="w-[1px] h-8 bg-black/10 dark:bg-white/10 mx-1 self-center" />

        {/* --- SECCIÓN DE CONFIGURACIÓN --- */}
        <DockIcon 
            mouseX={mouseX} 
            onClick={toggleTheme} 
            icon={theme === 'dark' ? Sun : Moon} 
            label={theme === 'dark' ? text.navbar.toggleThemeLight : text.navbar.toggleThemeDark} 
        />
        <DockIcon 
            mouseX={mouseX} 
            onClick={toggleLanguage} 
            icon={Languages} 
            label={lang === 'en' ? text.navbar.toggleLangSpanish : text.navbar.toggleLangEnglish} 
        />
      </motion.div>
    </div>
  );
}

// Subcomponente para cada icono individual
function DockIcon({ mouseX, icon: Icon, onClick, label }) {
  let ref = useRef(null);

  // Matemáticas para calcular la distancia del ratón al icono
  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Transformar la distancia en ancho (efecto magnificación)
  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  // Estado para el tooltip
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="aspect-square w-10 rounded-full bg-gray-200/50 dark:bg-neutral-800/50 flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white transition-colors relative group border border-transparent hover:border-white/20"
    >
      <Icon className="w-full h-full p-2.5 sm:p-3" />
      
      {/* Tooltip Animado */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 dark:bg-white/90 text-white dark:text-black text-[10px] rounded border border-white/10 whitespace-nowrap pointer-events-none z-50 font-medium"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
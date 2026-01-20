import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle2, MapPin } from 'lucide-react';

function Education() {
  const { text } = useLanguage();
  const university = text.education.institutions[0]; // Tomamos la única universidad

  return (
    <section id="education" className="py-32 relative flex flex-col items-center justify-center">
      
      {/* --- FONDO DECORATIVO DE LA SECCIÓN --- */}
      {/* Un resplandor grande y sutil para llenar el "vacío" negro */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] opacity-50" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        
        {/* Encabezado */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-sm font-medium mb-4 text-muted-foreground">
            <BookOpen className="w-4 h-4 text-primary" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            {text.education.title}
          </h2>
        </motion.div>

        {/* --- LA CREDENCIAL PRINCIPAL (Diseño Creativo) --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative w-full"
        >
            {/* Contenedor estilo "Cristal" */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl shadow-2xl">
                
                {/* Decoración: Patrón de cuadrícula interno */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-12 items-center">
                    
                    {/* COLUMNA IZQUIERDA: Logo y Estado */}
                    <div className="lg:col-span-4 flex flex-col items-center text-center lg:items-start lg:text-left lg:border-r lg:border-white/10 lg:pr-8">
                        {/* Círculo del Logo */}
                        <div className="relative w-40 h-40 ml-8 mb-6 group">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                            <div className="relative w-full h-full bg-background rounded-full border-2 border-primary/20 flex items-center justify-center p-4 shadow-xl overflow-hidden">
                                {university.logo ? (
                                    <img src={university.logo} alt="Logo" className="w-full h-full object-contain opacity-90" />
                                ) : (
                                    <GraduationCap className="w-12 h-12 text-primary" />
                                )}
                            </div>
                        </div>

                        {/* Etiqueta de Estado */}
                        <div className="flex flex-col gap-2 w-full">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estado Actual / Status</span>
                            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-xl text-green-500 font-medium justify-center lg:justify-start">
                                <span className="relative flex h-2.5 w-2.5 mr-1">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                En Curso / In Progress
                            </div>
                            
                            {/* Barra de progreso visual (Decorativa) */}
                            <div className="w-full h-1.5 bg-secondary rounded-full mt-2 overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-primary to-blue-400 w-[85%] rounded-full animate-pulse" />
                            </div>
                            <p className="text-[10px] text-muted-foreground text-right mt-1">85% Complete</p>
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Información Detallada */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        
                        <div>
                            <div className="flex items-center gap-2 text-primary font-bold mb-2">
                                <GraduationCap className="w-5 h-5" />
                                <span className="uppercase tracking-wide text-sm">University Degree</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 leading-tight">
                                {university.details[0]} {/* Título de la carrera */}
                            </h3>
                            <h4 className="text-xl text-muted-foreground font-light">
                                {university.institution}
                            </h4>
                        </div>

                        {/* Grid de detalles */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <InfoItem icon={<Calendar className="w-4 h-4" />} label="Inicio / Start" value="2018" />
                            <InfoItem icon={<MapPin className="w-4 h-4" />} label="Ubicación / Location" value="San Luis, Argentina" />
                        </div>

                        {/* Lista de logros / detalles adicionales */}
                        <div className="bg-secondary/30 rounded-2xl p-6 border border-white/5 mt-2">
                            <h5 className="font-semibold mb-4 flex items-center gap-2 text-sm uppercase text-muted-foreground">
                                <Award className="w-4 h-4" /> Highlights
                            </h5>
                            <div className="space-y-3">
                                {university.details.slice(1).map((detail, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="mt-1 p-1 bg-primary/20 rounded-full">
                                            <CheckCircle2 className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-foreground/80 leading-relaxed">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Elementos decorativos flotantes detrás */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-primary to-purple-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
}

// Pequeño componente para los items de info
const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border">
        <div className="p-2.5 bg-secondary rounded-lg text-foreground">
            {icon}
        </div>
        <div>
            <p className="text-xs text-muted-foreground uppercase font-bold">{label}</p>
            <p className="text-sm font-semibold text-foreground">{value}</p>
        </div>
    </div>
);

export default Education;
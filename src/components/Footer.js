import React from 'react';
import { useLanguage } from '../context/LanguageContext';

function Footer() {
  const currentYear = new Date().getFullYear();
  const { text } = useLanguage();

  return (
    <footer className="w-full py-10 pb-40 md:pb-32 flex flex-col items-center justify-center text-center bg-background border-t border-border/30 relative z-0">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-foreground font-semibold mb-2">
          © {currentYear} {text.footer.allRightsReserved}
        </p>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          {text.footer.builtWithLove} 
          <span className="text-red-500 animate-pulse">❤</span> 
          using React & Tailwind
        </p>
      </div>
    </footer>
  );
}

export default Footer;
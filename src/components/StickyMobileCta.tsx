import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { EXPERT_INFO } from '../data';

export const StickyMobileCta: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece após rolar 350px (após a primeira dobra)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="sticky-mobile-whatsapp-bar"
      className="fixed bottom-0 inset-x-0 z-40 p-3 sm:hidden transition-transform duration-300 transform translate-y-0"
    >
      <div className="rounded-2xl p-2.5 bg-[#0B2F21]/95 backdrop-blur-lg border border-[#CDAE71]/50 shadow-[0_-8px_24px_rgba(5,25,15,0.85)] flex items-center justify-between gap-3">
        
        {/* Info do Expert */}
        <div className="flex items-center gap-2.5 min-w-0 pl-1">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#CDAE71]/60 shrink-0">
            <img
              src={EXPERT_INFO.heroImage}
              alt="Kaick Mauro"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-[#0B2F21]" />
          </div>
          
          <div className="min-w-0">
            <p className="text-xs font-bold text-white truncate flex items-center gap-1">
              <span>Kaick Mauro</span>
              <Sparkles className="w-3 h-3 text-[#CDAE71] shrink-0" />
            </p>
            <p className="text-[10px] text-[#CDAE71] font-semibold truncate">
              1ª Avaliação Gratuita
            </p>
          </div>
        </div>

        {/* Botão de Ação Imediata */}
        <a
          id="sticky-mobile-cta-btn"
          href={EXPERT_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold-cta shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Agendar WhatsApp</span>
        </a>

      </div>
    </div>
  );
};

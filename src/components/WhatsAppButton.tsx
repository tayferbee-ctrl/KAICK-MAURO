import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { EXPERT_INFO } from '../data';

interface WhatsAppButtonProps {
  text?: string;
  subtext?: string;
  className?: string;
  size?: 'default' | 'large' | 'compact';
  showArrow?: boolean;
  id?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  text = 'Agendar primeira avaliação gratuita no WhatsApp',
  subtext = 'Resposta rápida • 100% gratuita • Sem compromisso',
  className = '',
  size = 'default',
  showArrow = true,
  id,
}) => {
  const isLarge = size === 'large';
  const isCompact = size === 'compact';

  return (
    <div className={`flex flex-col items-center w-full sm:w-auto ${className}`}>
      <a
        id={id}
        href={EXPERT_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text}
        className={`group btn-gold-cta inline-flex items-center justify-center gap-3 w-full sm:w-auto text-center rounded-xl cursor-pointer ${
          isLarge
            ? 'px-7 py-4 sm:px-9 sm:py-5 text-base sm:text-lg'
            : isCompact
            ? 'px-5 py-3 text-sm font-semibold'
            : 'px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base'
        }`}
      >
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#05190F]/15 text-[#05190F] shrink-0 transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="w-5 h-5 fill-current" />
        </span>
        <span className="tracking-tight font-bold whitespace-normal sm:whitespace-nowrap leading-tight">
          {text}
        </span>
        {showArrow && (
          <ArrowRight className="w-5 h-5 text-[#05190F] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </a>

      {subtext && (
        <span className="mt-2.5 text-xs text-[#AF8B52] font-medium tracking-wide text-center flex items-center gap-1.5 opacity-90">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#CDAE71] animate-pulse" />
          {subtext}
        </span>
      )}
    </div>
  );
};

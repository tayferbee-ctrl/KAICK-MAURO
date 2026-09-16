import React from 'react';
import {
  ClipboardCheck,
  UserCheck,
  Sparkles,
  Dumbbell,
  MessageCircle,
  CalendarCheck,
  ShieldCheck,
} from 'lucide-react';
import { DIFFERENTIALS } from '../data';

export const WhyTrustSection: React.FC = () => {
  // Mapeamento dinâmico de ícones minimalistas
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-[#CDAE71]" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-[#CDAE71]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#CDAE71]" />;
      case 'Dumbbell':
        return <Dumbbell className="w-6 h-6 text-[#CDAE71]" />;
      case 'MessageCircle':
        return <MessageCircle className="w-6 h-6 text-[#CDAE71]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-[#CDAE71]" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-[#CDAE71]" />;
    }
  };

  return (
    <section id="diferenciais" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4230]/80 border border-[#AF8B52]/30 text-[#CDAE71] text-xs font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Compromisso Profissional</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Por que confiar no meu acompanhamento?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-300">
          Entenda os pilares que garantem que você não seja apenas mais um número em uma sala de musculação.
        </p>
      </div>

      {/* Grid de 6 cards com diferenciais em alto contraste */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {DIFFERENTIALS.map((diff) => (
          <div
            key={diff.id}
            className="p-6 rounded-2xl bg-gradient-to-b from-[#0F4230]/70 to-[#0B2F21]/90 gold-border hover:border-[#CDAE71]/50 transition-all duration-300 shadow-md group flex flex-col justify-between"
          >
            <div>
              {/* Ícone Minimalista Dourado */}
              <div className="w-12 h-12 rounded-xl bg-[#05190F]/80 border border-[#AF8B52]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {getIcon(diff.iconName)}
              </div>

              <h3 className="font-display text-lg font-bold text-white group-hover:text-[#DFCA95] transition-colors">
                {diff.title}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {diff.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#AF8B52]/15 flex items-center justify-between text-[11px] text-[#AF8B52]">
              <span>Pilar de Excelência</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CDAE71]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

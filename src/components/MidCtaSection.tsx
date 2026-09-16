import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { CheckCircle, Clock, Award } from 'lucide-react';

export const MidCtaSection: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0F4230] via-[#0B2F21] to-[#05190F] p-8 sm:p-12 gold-border-glow text-center">
        
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#CDAE71]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#CDAE71]">
            Chega de adiar sua saúde
          </span>

          <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Você não precisa morar na academia ou passar fome para transformar seu físico
          </h2>

          <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Seja você um iniciante que nunca pisou numa sala de musculação ou alguém que já treina mas não vê evolução, a primeira avaliação serve para tirar todas as suas dúvidas e traçar um caminho claro.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#CDAE71]" />
              <span>Sem compromisso financeiro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#CDAE71]" />
              <span>Apenas 15 minutos de conversa</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#CDAE71]" />
              <span>Diagnóstico honesto</span>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <WhatsAppButton
              id="mid-section-cta"
              text="Agendar primeira avaliação gratuita no WhatsApp"
              subtext="Resposta rápida direta comigo no WhatsApp"
              size="large"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

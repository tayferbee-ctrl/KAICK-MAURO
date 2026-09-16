import React from 'react';
import { HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { EVALUATION_STEPS } from '../data';

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="como-funciona" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4230]/80 border border-[#AF8B52]/30 text-[#CDAE71] text-xs font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Simples e Transparente</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Como funciona a sua primeira avaliação?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-300">
          Sem burocracia ou processos complicados. Em 3 passos rápidos nós iniciamos o seu planejamento.
        </p>
      </div>

      {/* Grid com 3 Passos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        
        {EVALUATION_STEPS.map((step, idx) => (
          <div
            key={step.number}
            className="relative p-6 sm:p-7 rounded-2xl bg-[#0B2F21]/80 gold-border flex flex-col justify-between hover:border-[#CDAE71]/50 transition-all duration-300 shadow-lg group"
          >
            <div>
              {/* Número do Passo em Dourado Metálico */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#CDAE71] to-[#8A6A3D] opacity-90">
                  {step.number}
                </span>
                <span className="text-[11px] text-[#CDAE71] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#05190F]/70 border border-[#AF8B52]/20">
                  Passo {idx + 1}
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-[#DFCA95] transition-colors leading-snug">
                {step.title}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#AF8B52]/15 flex items-center justify-between">
              <span className="text-xs text-[#AF8B52] font-medium">
                {idx === 0 ? 'Fácil contato' : idx === 1 ? 'Alinhamento direto' : 'Plano de ação'}
              </span>
              {idx < 2 && (
                <ArrowRight className="w-4 h-4 text-[#AF8B52]/60 hidden md:block" />
              )}
            </div>
          </div>
        ))}

      </div>

      {/* Box de Reforço: Gratuita e Sem Compromisso */}
      <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-[#05190F]/90 border border-[#CDAE71]/40 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto shadow-md">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#0F4230] text-[#CDAE71] flex items-center justify-center shrink-0 border border-[#AF8B52]/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-sm font-bold text-white">100% Gratuita e Sem Qualquer Compromisso</p>
            <p className="text-xs text-zinc-400">Você só dá continuidade se sentir total confiança na metodologia proposta.</p>
          </div>
        </div>
      </div>

    </section>
  );
};

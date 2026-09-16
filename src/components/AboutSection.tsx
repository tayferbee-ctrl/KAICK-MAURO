import React from 'react';
import { Target, HeartPulse, Check, User, MapPin } from 'lucide-react';
import { EXPERT_INFO } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      {/* Linha divisória sutil com brilho */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#AF8B52]/30 to-transparent mb-16" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Foto do Expert em Moldura Elegante */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[300px] sm:max-w-[340px]">
            <div className="rounded-2xl overflow-hidden gold-border bg-[#0B2F21] p-2">
              <div className="rounded-xl overflow-hidden aspect-[4/5] relative">
                <img
                  src={EXPERT_INFO.heroImage}
                  alt="Kaick Mauro Personal Trainer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05190F]/80 via-transparent to-transparent" />
              </div>
            </div>

            {/* Badge de Localização / Atendimento */}
            <div className="mt-3 flex items-center justify-center gap-1.5 text-xs text-[#DFCA95] bg-[#0F4230]/70 border border-[#AF8B52]/30 py-1.5 px-3 rounded-xl text-center">
              <MapPin className="w-3.5 h-3.5 text-[#CDAE71]" />
              <span>Poços de Caldas - MG &amp; Online</span>
            </div>
          </div>
        </div>

        {/* Texto em 1ª Pessoa */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start text-center md:text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F4230]/70 border border-[#AF8B52]/30 text-[#CDAE71] text-xs font-semibold mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Autoridade &amp; Compromisso</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Quem sou eu e por que meu método funciona?
          </h2>

          <p className="mt-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Olá! Sou o <strong className="text-white font-semibold">Kaick Mauro</strong>. Minha missão não é te entregar uma ficha de exercícios para você se virar sozinho na academia, nem te fazer perder tempo com treinos ineficazes que geram dor nas articulações em vez de resultados no espelho.
          </p>

          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Eu trabalho com <strong className="text-[#CDAE71] font-semibold">treino inteligente</strong>: analisando a sua postura, sua mecânica e sua rotina real para prescrever exatamente os estímulos que seu corpo precisa para evoluir com velocidade e segurança.
          </p>

          {/* Bullets com Diferenciais Humanos */}
          <div className="mt-6 space-y-3.5 w-full text-left">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B2F21]/60 border border-[#AF8B52]/20">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#AF8B52]/20 text-[#CDAE71] shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Acompanhamento 100% comigo</p>
                <p className="text-xs text-zinc-400 mt-0.5">Sem intermediários. Cada correção e planejamento passa diretamente por mim.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B2F21]/60 border border-[#AF8B52]/20">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#AF8B52]/20 text-[#CDAE71] shrink-0 mt-0.5">
                <Target className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Estética sem abrir mão da saúde</p>
                <p className="text-xs text-zinc-400 mt-0.5">Construímos um físico denso, simétrico e alinhado, preservando sua coluna e articulações.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0B2F21]/60 border border-[#AF8B52]/20">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#AF8B52]/20 text-[#CDAE71] shrink-0 mt-0.5">
                <HeartPulse className="w-3.5 h-3.5 stroke-[3]" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Ajustado à sua rotina, e não o contrário</p>
                <p className="text-xs text-zinc-400 mt-0.5">Você não precisa morar na academia. O plano é desenhado para caber na sua agenda real.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

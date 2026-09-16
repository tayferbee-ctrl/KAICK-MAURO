import React from 'react';
import { Camera, CheckCircle2, ShieldCheck, Activity, Award } from 'lucide-react';
import { EXPERT_INFO, METHOD_PILLARS } from '../data';

export const BehindTheScenesSection: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4230]/80 border border-[#AF8B52]/30 text-[#CDAE71] text-xs font-semibold mb-3">
          <Camera className="w-3.5 h-3.5" />
          <span>Bastidores &amp; Metodologia</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
          O padrão de excelência em cada treino
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-300">
          Entenda por que o acompanhamento individualizado com Kaick Mauro entrega resultados consistentes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Card Visual com Foto do Expert e Legenda Técnica */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[360px] rounded-2xl overflow-hidden gold-border bg-[#0B2F21] shadow-2xl p-2">
            <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#05190F]">
              <img
                src={EXPERT_INFO.heroImage}
                alt="Kaick Mauro Personal Trainer - Bastidores do Treino"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05190F] via-transparent to-transparent opacity-90" />
              
              {/* Legenda em destaque sobre a imagem */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#0B2F21]/90 backdrop-blur-md border border-[#AF8B52]/40">
                <div className="flex items-center gap-2 text-xs font-bold text-[#CDAE71] uppercase tracking-wider mb-1">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Atendimento Personalizado</span>
                </div>
                <p className="text-xs text-zinc-300">
                  Atenção milimétrica a cada execução: amplitude correta, cadência e postura impecável.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pilares da Metodologia do Expert */}
        <div className="lg:col-span-7 space-y-4">
          
          <div className="mb-4">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
              Treino que respeita sua individualidade biológica
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              Não existe treino mágico: existe o treino certo para a sua estrutura óssea, nível de mobilidade e meta física.
            </p>
          </div>

          {METHOD_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#0B2F21]/70 gold-border hover:border-[#CDAE71]/40 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#CDAE71] shrink-0" />
                  <span className="font-display font-bold text-white text-base">
                    {pillar.title}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 pl-6">
                  {pillar.description}
                </p>
              </div>
              <span className="self-start sm:self-center shrink-0 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-[#0F4230] text-[#DFCA95] border border-[#AF8B52]/30">
                {pillar.tag}
              </span>
            </div>
          ))}

          {/* Selo de Garantia de Qualidade */}
          <div className="mt-6 flex items-center gap-3 p-4 rounded-xl bg-[#05190F]/70 border border-[#AF8B52]/20">
            <Award className="w-5 h-5 text-[#CDAE71] shrink-0" />
            <p className="text-xs text-zinc-300">
              <strong className="text-white">Presencial em Poços de Caldas - MG</strong> com horários selecionados e <strong className="text-white">Consultoria Online</strong> para qualquer lugar do Brasil e do mundo.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

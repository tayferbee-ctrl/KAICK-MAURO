import React from 'react';
import { MapPin, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { EXPERT_INFO } from '../data';
import { WhatsAppButton } from './WhatsAppButton';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative pt-6 pb-16 sm:pt-10 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      {/* Topo discreto: Tag de Localização e Autoridade */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#AF8B52]/20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#CDAE71] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#DFCA95]">
            Kaick Mauro
          </span>
          <span className="text-[#8A6A3D] text-xs">•</span>
          <span className="text-xs sm:text-sm text-zinc-300 font-medium">
            Personal Trainer
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-[#DFCA95] bg-[#0B2F21]/80 border border-[#AF8B52]/30 px-3 py-1 rounded-full">
          <MapPin className="w-3.5 h-3.5 text-[#CDAE71] shrink-0" />
          <span>Poços de Caldas - MG & Online</span>
        </div>
      </div>

      {/* Conteúdo Principal do Hero: Grid Mobile-First */}
      <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Lado do Texto & CTA (Mobile-First) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Badge de Destaque */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4230]/90 border border-[#AF8B52]/40 text-[#CDAE71] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <Award className="w-4 h-4 text-[#CDAE71]" />
            <span>Consultoria Presencial e Online</span>
          </div>

          {/* Headline em 1ª Pessoa */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
            Sou <span className="text-gold-metallic">Kaick Mauro</span>, personal trainer, e te ajudo a transformar seu corpo e sua rotina através do{' '}
            <span className="relative inline-block">
              <span className="text-[#F1F5F2]">treino inteligente.</span>
              <span className="absolute bottom-1 left-0 w-full h-1 bg-[#AF8B52]/40 -z-10 rounded-full" />
            </span>
          </h1>

          {/* Subheadline orientada a benefícios e resultados */}
          <p className="mt-5 text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
            Treino individualizado focado em <strong className="text-[#CDAE71] font-semibold">estética e funcionalidade</strong>. Sem métodos mirabolantes ou fichas genéricas: uma estratégia biomecânica precisa para você queimar gordura, ganhar densidade muscular e ter disposição diária.
          </p>

          {/* Bullets Rápidos de Confiança */}
          <div className="mt-6 flex flex-col sm:flex-row gap-2.5 sm:gap-4 text-xs sm:text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CDAE71] shrink-0" />
              <span>Atendimento Direto com o Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CDAE71] shrink-0" />
              <span>Avaliação Física Detalhada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#CDAE71] shrink-0" />
              <span>Poços de Caldas - MG</span>
            </div>
          </div>

          {/* CTA Principal de Alta Conversão */}
          <div className="mt-8 w-full sm:w-auto">
            <WhatsAppButton
              id="hero-main-cta"
              text="Agendar primeira avaliação gratuita no WhatsApp"
              subtext="Resposta rápida • 100% gratuita • Sem compromisso"
              size="large"
            />
          </div>

        </div>

        {/* Lado da Foto Grande do Expert (Visual Cinematográfico com Borda Metálica) */}
        <div className="lg:col-span-5 flex justify-center order-first lg:order-last">
          <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
            {/* Glow dourado suave atrás da foto */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-b from-[#CDAE71]/30 via-[#AF8B52]/20 to-transparent blur-xl opacity-70" />
            
            {/* Moldura da Foto */}
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#0F4230] to-[#05190F] p-1.5 gold-border-glow shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#0B2F21]">
                <img
                  src={EXPERT_INFO.heroImage}
                  alt="Kaick Mauro - Personal Trainer em Poços de Caldas"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 hover:scale-[1.02]"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Sombra gradiente inferior na foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05190F]/90 via-transparent to-transparent" />

                {/* Tag flutuante sobre a foto */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0B2F21]/90 backdrop-blur-md border border-[#AF8B52]/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#AF8B52] font-semibold tracking-wider uppercase">
                        Metodologia Comprovada
                      </p>
                      <p className="text-sm font-bold text-white">
                        Estética &amp; Funcionalidade
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] bg-[#05190F]/80 text-[#CDAE71] px-2.5 py-1 rounded-full border border-[#AF8B52]/30">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>1ª Gratuita</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};

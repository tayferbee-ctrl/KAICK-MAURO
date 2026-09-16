import React from 'react';
import { WhatsAppButton } from './WhatsAppButton';
import { Sparkles, CheckCircle, Shield, AlertCircle } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section id="agendamento" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10">
      
      {/* Moldura de Decisão de Alta Conversão */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0F4230] via-[#0B2F21] to-[#05190F] p-8 sm:p-14 gold-border-glow shadow-2xl text-center">
        
        {/* Glow Superior Dourado */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#CDAE71]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#05190F]/80 border border-[#AF8B52]/40 text-[#CDAE71] text-xs sm:text-sm font-semibold mb-5 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#CDAE71]" />
            <span>Dê o Primeiro Passo Agora</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            Pronto para conquistar o físico e a saúde que você sempre quis?
          </h2>

          <p className="mt-5 text-base sm:text-lg text-zinc-200 leading-relaxed">
            Não espere a próxima segunda-feira para começar. Sua <strong className="text-[#CDAE71] font-bold">primeira avaliação é 100% gratuita</strong> e vai te dar clareza total sobre o que fazer no seu treino a partir de agora.
          </p>

          {/* Aviso de Vagas Limitadas */}
          <div className="mt-5 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#05190F]/70 border border-[#AF8B52]/30 text-xs text-[#DFCA95]">
            <AlertCircle className="w-4 h-4 text-[#CDAE71] shrink-0" />
            <span>Vagas para acompanhamento próximo são limitadas por mês para manter o padrão de excelência.</span>
          </div>

          {/* Botão de WhatsApp Principal */}
          <div className="mt-8 w-full sm:w-auto">
            <WhatsAppButton
              id="final-section-cta"
              text="Agendar primeira avaliação gratuita no WhatsApp"
              subtext="Resposta rápida • Sem nenhum compromisso"
              size="large"
            />
          </div>

          {/* Micro-Garantias */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg text-xs text-zinc-300 text-center">
            <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#05190F]/40 border border-[#AF8B52]/10">
              <CheckCircle className="w-3.5 h-3.5 text-[#CDAE71]" />
              <span>Sem cobrança inicial</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#05190F]/40 border border-[#AF8B52]/10">
              <Shield className="w-3.5 h-3.5 text-[#CDAE71]" />
              <span>Privacidade garantida</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 p-2 rounded-lg bg-[#05190F]/40 border border-[#AF8B52]/10">
              <CheckCircle className="w-3.5 h-3.5 text-[#CDAE71]" />
              <span>Presencial e Online</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

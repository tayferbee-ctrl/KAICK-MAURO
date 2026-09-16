import React from 'react';
import { MapPin, Instagram, MessageCircle, ShieldCheck } from 'lucide-react';
import { EXPERT_INFO } from '../data';

export const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[#AF8B52]/20 bg-[#05190F] pt-12 pb-24 sm:pb-14 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Identidade do Expert */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-white tracking-tight">
              Kaick Mauro
            </span>
            <span className="text-[#8A6A3D]">•</span>
            <span className="text-xs text-[#CDAE71] font-semibold uppercase tracking-wider">
              Personal Trainer
            </span>
          </div>
          
          <p className="mt-1.5 text-xs text-zinc-400 max-w-sm">
            Treino inteligente para quem busca estética e funcionalidade. Consultoria Presencial e Online.
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-xs text-[#DFCA95]">
            <MapPin className="w-3.5 h-3.5 text-[#CDAE71]" />
            <span>Endereço: Poços de Caldas - MG</span>
          </div>
        </div>

        {/* Links Sociais e Contato */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              id="footer-instagram-link"
              href={EXPERT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B2F21] border border-[#AF8B52]/30 text-xs font-semibold text-[#CDAE71] hover:bg-[#1E3B2C] hover:text-white transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>@kaickmpersonal</span>
            </a>

            {/* WhatsApp */}
            <a
              id="footer-whatsapp-link"
              href={EXPERT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B2F21] border border-[#AF8B52]/30 text-xs font-semibold text-[#CDAE71] hover:bg-[#1E3B2C] hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-zinc-500">
            <ShieldCheck className="w-3 h-3 text-[#8A6A3D]" />
            <span>Atendimento Personalizado e Ético</span>
          </div>
        </div>

      </div>

      {/* Linha de Copyright */}
      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-[#1E3B2C]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
        <p>© {currentYear} Kaick Mauro Personal Trainer. Todos os direitos reservados.</p>
        <p className="text-zinc-400">Poços de Caldas - MG • Consultoria Presencial e Online</p>
      </div>
    </footer>
  );
};

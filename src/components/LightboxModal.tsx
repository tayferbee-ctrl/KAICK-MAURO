import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { TestimonialImage } from '../types';
import { EXPERT_INFO } from '../data';

interface LightboxModalProps {
  images: TestimonialImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  if (currentIndex === null) return null;

  const current = images[currentIndex];
  if (!current) return null;

  return (
    <div
      id="lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#05190F]/95 backdrop-blur-md p-4 sm:p-6 select-none animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Imagem em tela cheia"
    >
      {/* Botão Fechar */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        aria-label="Fechar visualização"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-[#0B2F21]/80 border border-[#AF8B52]/40 text-[#CDAE71] hover:bg-[#1E3B2C] hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Botão Anterior */}
      <button
        id="lightbox-prev-btn"
        onClick={onPrev}
        aria-label="Resultado anterior"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B2F21]/80 border border-[#AF8B52]/40 text-[#CDAE71] hover:bg-[#1E3B2C] hover:text-white transition-colors shadow-lg"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Botão Próximo */}
      <button
        id="lightbox-next-btn"
        onClick={onNext}
        aria-label="Próximo resultado"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0B2F21]/80 border border-[#AF8B52]/40 text-[#CDAE71] hover:bg-[#1E3B2C] hover:text-white transition-colors shadow-lg"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Conteúdo Central */}
      <div className="flex flex-col items-center max-w-4xl max-h-[90vh] w-full">
        <div className="relative rounded-2xl overflow-hidden border border-[#AF8B52]/40 bg-[#0B2F21] shadow-2xl max-h-[75vh] flex items-center justify-center">
          <img
            src={current.url}
            alt={current.title || 'Resultado de aluno - Kaick Mauro'}
            referrerPolicy="no-referrer"
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
          />
        </div>

        {/* Legenda & CTA rápido */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 w-full px-2">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-[#F1F5F2] tracking-wide">
              {current.title}
            </p>
            {current.subtitle && (
              <p className="text-xs text-[#AF8B52]">{current.subtitle}</p>
            )}
            <p className="text-[11px] text-zinc-400 mt-0.5">
              Foto {currentIndex + 1} de {images.length}
            </p>
          </div>

          <a
            id="lightbox-whatsapp-cta"
            href={EXPERT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-cta inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            Quero resultados assim
          </a>
        </div>
      </div>
    </div>
  );
};

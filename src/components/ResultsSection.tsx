import React, { useState, useRef } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight, Flame, ShieldAlert } from 'lucide-react';
import { CLIENT_RESULTS } from '../data';
import { LightboxModal } from './LightboxModal';
import { WhatsAppButton } from './WhatsAppButton';

export const ResultsSection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Resultados' },
    { id: 'definicao', label: 'Definição & Secagem' },
    { id: 'hipertrofia', label: 'Hipertrofia' },
    { id: 'emagrecimento', label: 'Emagrecimento' },
  ];

  const filteredResults = activeCategory === 'todos'
    ? CLIENT_RESULTS
    : CLIENT_RESULTS.filter(item => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleOpenLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredResults.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredResults.length) % filteredResults.length);
  };

  return (
    <section id="resultados" className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      
      {/* Cabeçalho da Seção */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4230]/80 border border-[#AF8B52]/30 text-[#CDAE71] text-xs font-semibold mb-3">
          <Flame className="w-3.5 h-3.5 text-[#CDAE71]" />
          <span>Transformações Reais de Alunos</span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Resultados que falam mais alto que promessas
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-300">
          Veja a evolução de pessoas com rotinas reais que aplicaram o método de treino inteligente e individualizado.
        </p>

        {/* Filtros de Categoria */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#CDAE71] text-[#05190F] shadow-md font-bold'
                  : 'bg-[#0B2F21] text-zinc-300 border border-[#AF8B52]/20 hover:border-[#CDAE71]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Controles de Navegação do Carrossel / Scroll Horizontal */}
      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-xs text-[#AF8B52] font-medium">
          Toque em uma foto para ampliar em tela cheia
        </span>
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            aria-label="Rolar para esquerda"
            className="w-9 h-9 rounded-full bg-[#0B2F21] border border-[#AF8B52]/30 text-[#CDAE71] flex items-center justify-center hover:bg-[#1E3B2C] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Rolar para direita"
            className="w-9 h-9 rounded-full bg-[#0B2F21] border border-[#AF8B52]/30 text-[#CDAE71] flex items-center justify-center hover:bg-[#1E3B2C] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Galeria em Scroll Horizontal Suave (Mobile Friendly) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: 'thin' }}
      >
        {filteredResults.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleOpenLightbox(index)}
            className="group relative flex-none w-[260px] sm:w-[280px] rounded-2xl overflow-hidden bg-[#0B2F21] gold-border cursor-pointer snap-start transition-all duration-300 hover:scale-[1.02] hover:border-[#CDAE71]/60 shadow-lg"
            role="button"
            tabIndex={0}
            aria-label={`Ver resultado: ${item.title}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleOpenLightbox(index);
              }
            }}
          >
            {/* Foto do Aluno */}
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#05190F]">
              <img
                src={item.url}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay suave com ícone de zoom */}
              <div className="absolute inset-0 bg-[#05190F]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-[#05190F]/80 text-[#CDAE71] border border-[#AF8B52]/40 shadow-md">
                  <ZoomIn className="w-5 h-5" />
                </span>
              </div>

              {/* Sombra de texto na base da imagem */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B2F21] to-transparent" />
            </div>

            {/* Informações do Card */}
            <div className="p-4 bg-[#0B2F21]">
              <p className="text-sm font-bold text-white group-hover:text-[#CDAE71] transition-colors line-clamp-1">
                {item.title}
              </p>
              {item.subtitle && (
                <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                  {item.subtitle}
                </p>
              )}
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#AF8B52] bg-[#05190F]/60 px-2 py-0.5 rounded border border-[#AF8B52]/20 uppercase tracking-wider">
                  Caso Real
                </span>
                <span className="text-[11px] text-[#CDAE71] flex items-center gap-1 font-medium group-hover:underline">
                  Ver detalhes
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Aviso legal discreto obrigatório */}
      <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-zinc-400 bg-[#0B2F21]/40 border border-[#AF8B52]/15 py-2.5 px-4 rounded-xl max-w-xl mx-auto">
        <ShieldAlert className="w-4 h-4 text-[#8A6A3D] shrink-0" />
        <span>Aviso: Resultados podem variar de pessoa para pessoa. A disciplina e a adesão ao plano são fundamentais para o sucesso.</span>
      </div>

      {/* CTA rápido para quem viu os resultados */}
      <div className="mt-8 flex justify-center">
        <WhatsAppButton
          id="results-section-cta"
          text="Quero alcançar resultados como esses"
          subtext="Agende sua primeira avaliação gratuita no WhatsApp"
          size="default"
        />
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredResults}
        currentIndex={selectedImageIndex}
        onClose={() => setSelectedImageIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};

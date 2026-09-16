import React from 'react';

export const BackgroundEffects: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Sombreamento radial suave nos cantos e centro (profundidade cinematográfica) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(15,66,48,0.35)_0%,transparent_70%)] blur-2xl" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[radial-gradient(circle,rgba(30,59,44,0.4)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[radial-gradient(circle,rgba(138,106,61,0.12)_0%,transparent_70%)] blur-3xl" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom,rgba(11,47,33,0.6)_0%,transparent_80%)]" />

      {/* Vinheta nas bordas da tela */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,25,15,0.7)_100%)]" />

      {/* Leve granulado cinematográfico */}
      <div className="absolute inset-0 film-grain opacity-40 mix-blend-overlay" />
    </div>
  );
};

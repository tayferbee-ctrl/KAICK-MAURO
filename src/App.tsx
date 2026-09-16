/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResultsSection } from './components/ResultsSection';
import { WhyTrustSection } from './components/WhyTrustSection';
import { MidCtaSection } from './components/MidCtaSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BehindTheScenesSection } from './components/BehindTheScenesSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { FooterSection } from './components/FooterSection';
import { StickyMobileCta } from './components/StickyMobileCta';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05190F] text-[#F1F5F2] font-sans antialiased selection:bg-[#AF8B52]/30 selection:text-[#CDAE71] overflow-x-hidden">
      {/* Efeitos Visuais de Fundo (Textura Cinematográfica, Gradientes Radiais e Vinheta) */}
      <BackgroundEffects />

      {/* Conteúdo Principal (Mobile First) */}
      <main className="relative z-10">
        {/* 1. HERO (Primeira dobra) */}
        <HeroSection />

        {/* 2. BLOCO "QUEM SOU EU" (Autoridade Pessoal) */}
        <AboutSection />

        {/* 3. BLOCO "RESULTADOS REAIS" (Prova Visual Forte) */}
        <ResultsSection />

        {/* 4. BLOCO "POR QUE CONFIAR EM MIM?" (Diferenciais) */}
        <WhyTrustSection />

        {/* 5. CTA INTERMEDIÁRIO (Quebra de Objeção) */}
        <MidCtaSection />

        {/* 6. BLOCO "COMO FUNCIONA A PRIMEIRA AVALIAÇÃO" (3 Passos) */}
        <HowItWorksSection />

        {/* 7. BLOCO "MAIS PROVAS & BASTIDORES" (Metodologia e Foco) */}
        <BehindTheScenesSection />

        {/* 8. CTA FINAL (Decisão) */}
        <FinalCtaSection />
      </main>

      {/* 9. RODAPÉ SIMPLES */}
      <FooterSection />

      {/* Barra de CTA Flutuante para Dispositivos Móveis */}
      <StickyMobileCta />
    </div>
  );
}


import React from 'react';
import Hero from './components/Hero.tsx';
import PainPleasure from './components/PainPleasure.tsx';
import VideoSection from './components/VideoSection.tsx';
import AccessSection from './components/AccessSection.tsx';
import ToolboxSection from './components/ToolboxSection.tsx';
import DiscountTicker from './components/DiscountTicker.tsx';
import Offer from './components/Offer.tsx';
import Guarantee from './components/Guarantee.tsx';
import FAQ from './components/FAQ.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#c8a178] selection:text-[#1a120b] bg-[#1a120b]">
      {/* Navigation Bar - Glass Effect Optimized */}
      <nav className="sticky top-0 w-full bg-[#1a120b]/60 backdrop-blur-xl text-[#f2f0ed] py-3 md:py-4 px-4 text-center border-b border-white/5 z-[100] shadow-2xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-1 md:gap-4">
          <span className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] uppercase font-bold text-[#c8a178]">
            WORKSHOP CEO DA CLÍNICA 2026
          </span>
          <span className="hidden md:inline text-[#c8a178]/40">•</span>
          <span className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.5em] uppercase font-bold text-[#f2f0ed]">
            Dra. Bruna Mello
          </span>
        </div>
      </nav>

      <Hero />
      <PainPleasure />
      <VideoSection />
      
      <DiscountTicker />
      <AccessSection />
      
      <ToolboxSection />
      
      {/* Bio Section */}
      <section className="py-24 md:py-40 bg-[#1a120b] border-y border-[#c8a178]/10 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
          <div className="order-2 lg:order-1 aspect-[3/4] md:aspect-square lg:aspect-[3/4] max-w-lg mx-auto w-full bg-[#241b14] relative shadow-[0_30px_60px_rgba(0,0,0,0.8)] group overflow-hidden rounded-[4.5rem]">
             <img 
               src="assets/dra-bruna-bio.webp" 
               alt="Dra. Bruna Mello" 
               className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-1000"
               onError={(e) => { e.currentTarget.style.display = 'none'; }}
             />
             <div className="absolute inset-0 border border-[#c8a178]/20 group-hover:scale-95 transition-transform duration-1000 pointer-events-none rounded-[4.5rem]"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent opacity-60"></div>
             <div className="absolute bottom-10 left-10">
                <p className="text-[#c8a178] uppercase tracking-[0.5em] text-[8px] md:text-[10px] font-bold mb-2">The Founder</p>
                <h3 className="font-serif text-2xl md:text-3xl text-[#f2f0ed]">Dra. Bruna Mello</h3>
             </div>
          </div>
          <div className="order-1 lg:order-2 max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-5xl xl:text-6xl text-[#f2f0ed] mb-8 md:mb-12 leading-tight">
              De "embaixo da escada" à <span className="italic text-[#c8a178]">CEO</span> de Múltiplas Clínicas.
            </h2>
            <div className="space-y-6 md:space-y-10 text-[#f2f0ed]/70 text-base md:text-lg font-light leading-relaxed">
              <p>
                Biomédica, Médica e CEO de 2 clínicas de alta performance. Eu nasci literalmente embaixo da escada de um salão de beleza, fali aos 26 anos e tive burnout por tentar carregar o mundo nas costas.
              </p>
              <p>
                A virada aconteceu quando entendi que <span className="italic text-[#c8a178]">amor pela estética não paga conta. Gestão paga.</span> Hoje, minha missão é poupar você de 10 anos de erros através de uma gestão sólida e validada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div id="offer">
        <Offer />
      </div>
      
      <Guarantee />
      <FAQ />
      
      <footer className="bg-[#1a120b] py-20 md:py-32 px-6 border-t border-[#c8a178]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-2 tracking-[0.3em] uppercase text-[#f2f0ed]">WORKSHOP CEO</h3>
            <p className="text-[#c8a178] text-[8px] tracking-[0.5em] uppercase font-bold">The Gold Standard in Strategy</p>
          </div>
          <div className="text-[#f2f0ed]/20 text-[8px] tracking-[0.2em] text-center md:text-right">
            DRA. BRUNA MELLO - ACELERA CLÍNICAS © 2026.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

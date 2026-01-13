
import React from 'react';

const Hero: React.FC = () => {
  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a120b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,#4a3728_0%,#1a120b_80%)] opacity-40"></div>
      
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 py-16 md:py-32">
        <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
          <div className="mb-8 md:mb-12 inline-flex items-center gap-4">
            <div className="hidden sm:block h-px w-12 bg-[#c8a178]/40"></div>
            <span className="text-[#c8a178] uppercase tracking-[0.6em] text-[8px] md:text-[10px] font-bold">ESTRATÉGIA DE ALTA PERFORMANCE 2026</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 text-[#f2f0ed] tracking-tight uppercase">
            WORKSHOP CEO <br/><span className="italic text-[#c8a178]">DA CLÍNICA 2026</span>
          </h1>

          <h2 className="text-[#f2f0ed] font-medium text-lg md:text-xl tracking-widest mb-8 max-w-xl">
            PLANEJAMENTO ESTRATÉGICO PARA CLÍNICAS QUE QUEREM LUCRO, NÃO CAOS
          </h2>
          
          <p className="text-[#f2f0ed]/60 text-base md:text-lg leading-relaxed max-w-xl mb-12 font-light italic">
            3 dias para transformar sua clínica em uma empresa previsível, lucrativa e que funcione sem você no operacional.
          </p>

          <div className="bg-[#9b6d4b]/10 border border-[#c8a178]/20 p-8 rounded-[3.5rem] mb-12 flex flex-wrap gap-8 items-center backdrop-blur-md justify-center lg:justify-start">
            {/* Data Icon */}
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a178" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="text-[#c8a178] text-[10px] md:text-xs font-bold uppercase tracking-wider">20 a 22 de Janeiro</span>
            </div>
            
            {/* Hour Icon */}
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a178" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span className="text-[#c8a178] text-[10px] md:text-xs font-bold uppercase tracking-wider">20h (ao vivo)</span>
            </div>
            
            {/* Format Icon */}
            <div className="flex items-center gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c8a178" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <path d="M23 7l-7 5 7 5V7z"></path>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
              </svg>
              <span className="text-[#c8a178] text-[10px] md:text-xs font-bold uppercase tracking-wider">Online + gravações</span>
            </div>
          </div>
          
          <a 
            href="#offer"
            onClick={scrollToOffer}
            className="bg-[#c8a178] text-[#1a120b] px-12 py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[11px] shadow-2xl hover:bg-[#f2f0ed] transition-all transform hover:-translate-y-1 inline-block"
          >
            👉 Garantir minha vaga agora
          </a>
        </div>

        <div className="relative flex items-center justify-center order-1 lg:order-2">
           <div className="w-full max-w-md aspect-[4/5] bg-[#241b14] rounded-[5rem] border border-[#c8a178]/10 shadow-2xl overflow-hidden relative group">
              <img 
                src="assets/dra-bruna-hero.webp" 
                alt="Dra. Bruna Mello" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent opacity-60"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

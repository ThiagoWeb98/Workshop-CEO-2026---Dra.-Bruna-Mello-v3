
import React from 'react';

const Hero: React.FC = () => {
  const checkoutUrl = "https://payfast.greenn.com.br/pre-checkout/153010";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a120b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,#4a3728_0%,#1a120b_80%)] opacity-40"></div>
      
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 py-16 md:py-32">
        <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
          <div className="mb-8 md:mb-12 inline-flex items-center gap-4">
            <div className="hidden sm:block h-px w-12 bg-[#c8a178]/40"></div>
            <span className="text-[#c8a178] uppercase tracking-[0.6em] text-[8px] md:text-[10px] font-bold">ESTRATÉGIA DE ALTA PERFORMANCE 2026</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.1] mb-8 text-[#f2f0ed] tracking-tight">
            Planejamento <span className="italic text-[#c8a178]">Estratégico</span> para sua clínica.
          </h1>
          
          <p className="text-[#f2f0ed]/60 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light italic">
            3 Encontros ao vivo para definir suas metas e romper a barreira dos 6 dígitos mensais com gestão sólida.
          </p>

          <div className="bg-[#9b6d4b]/10 border border-[#c8a178]/20 p-8 rounded-[3.5rem] mb-12 flex flex-wrap gap-10 items-center backdrop-blur-md justify-center lg:justify-start">
            <div className="flex items-center gap-4">
              <span className="text-xl">🗓️</span>
              <span className="text-[#c8a178] text-[10px] md:text-xs font-bold uppercase tracking-wider">20-22 JAN</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xl">⏰</span>
              <span className="text-[#c8a178] text-[10px] md:text-xs font-bold uppercase tracking-wider">19h30</span>
            </div>
          </div>
          
          <a 
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c8a178] text-[#1a120b] px-12 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-[#f2f0ed] transition-all transform hover:-translate-y-1 inline-block"
          >
            Garantir Minha Vaga
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


import React from 'react';

const Hero: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden bg-[#1a120b]">
      <div className="absolute inset-0 bg-luxury-gradient opacity-40"></div>
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-[#9b6d4b]/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 py-16 md:py-32">
        <div className="flex flex-col justify-center text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
          <div className="mb-8 md:mb-12 inline-flex items-center gap-4 md:gap-6 slide-reveal active">
            <div className="hidden sm:block h-px w-8 md:w-16 bg-[#c8a178]/40"></div>
            <span className="text-[#c8a178] uppercase tracking-[0.4em] md:tracking-[0.8em] text-[7px] md:text-[10px] font-bold">ESTRATÉGIA DE ALTA PERFORMANCE PARA 2026</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] md:leading-[1.05] mb-8 md:mb-12 text-[#f2f0ed] tracking-tight max-w-2xl">
            Como fazer o <span className="italic text-[#c8a178] transition-premium hover:text-white cursor-default">Planejamento Estratégico</span> da sua clínica para 2026
          </h1>
          
          <p className="text-[#f2f0ed]/60 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mb-10 md:mb-16 font-light italic">
            3 Encontros ao vivo para definir suas Metas Financeiras, Organizar sua Equipe e Traçar o Plano de Ação para romper a barreira dos 6 dígitos mensais.
          </p>

          <div className="bg-[#9b6d4b]/10 border border-[#c8a178]/20 p-6 md:p-8 rounded-3xl mb-12 md:mb-16 flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-12 items-center backdrop-blur-md w-full max-w-xl lg:max-w-none justify-center lg:justify-start transition-premium hover:bg-[#9b6d4b]/15">
            <div className="flex items-center gap-4">
              <span className="text-xl opacity-80">🗓️</span>
              <div className="flex flex-col text-left">
                <span className="text-[#f2f0ed] text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-40">Datas</span>
                <span className="text-[#c8a178] text-[10px] md:text-xs font-medium uppercase tracking-wider">20, 21 e 22 de Jan</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#c8a178]/10"></div>
            <div className="flex items-center gap-4">
              <span className="text-xl opacity-80">⏰</span>
              <div className="flex flex-col text-left">
                <span className="text-[#f2f0ed] text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-40">Horário</span>
                <span className="text-[#c8a178] text-[10px] md:text-xs font-medium uppercase tracking-wider">19h30</span>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#c8a178]/10"></div>
            <div className="flex items-center gap-4">
              <span className="text-xl opacity-80">💻</span>
              <div className="flex flex-col text-left">
                <span className="text-[#f2f0ed] text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-40">Local</span>
                <span className="text-[#c8a178] text-[10px] md:text-xs font-medium uppercase tracking-wider">Online via Zoom</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
            <button 
              onClick={scrollToOffer}
              className="w-full sm:w-auto bg-[#c8a178] text-[#1a120b] px-10 md:px-14 py-5 md:py-6 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] md:text-[11px] shadow-soft hover:bg-[#f2f0ed] transform hover:-translate-y-1 transition-premium group overflow-hidden relative"
            >
               <span className="relative z-10">Garantir Minha Vaga</span>
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
            <span className="text-[#c8a178]/60 text-[8px] md:text-[9px] uppercase tracking-[0.4em] italic font-medium">Vagas limitadas por sessão</span>
          </div>
        </div>

        <div className="relative flex items-center justify-center order-1 lg:order-2 slide-reveal active">
           <div className="w-full max-w-xs md:max-w-md lg:max-w-lg aspect-[4/5] bg-[#241b14] rounded-[2.5rem] border border-[#c8a178]/10 shadow-2xl relative group overflow-hidden">
              <img 
                src="assets/dra-bruna-hero.webp" 
                alt="Dra. Bruna Mello - CEO" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 pointer-events-none">
                 <div className="w-px h-16 md:h-32 bg-gradient-to-b from-[#c8a178] to-transparent mb-8 opacity-40"></div>
                 <span className="font-serif italic text-xl md:text-2xl text-[#c8a178]/30 tracking-[0.3em] uppercase">Dra. Bruna Mello</span>
              </div>
           </div>
           {/* Decorative blurred orbit */}
           <div className="absolute -z-10 w-[120%] h-[120%] bg-[#c8a178]/5 rounded-full blur-[120px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

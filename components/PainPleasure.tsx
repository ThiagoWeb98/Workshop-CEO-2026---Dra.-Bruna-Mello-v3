
import React from 'react';

const PainPleasure: React.FC = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const personas = [
    {
      num: "01",
      title: "A Centralizadora Exausta",
      desc: "Você não consegue delegar porque sente que se virar as costas, a qualidade cai e o faturamento despenca."
    },
    {
      num: "02",
      title: "O Sócio Oculto",
      desc: "O faturamento bruto cresce, mas quando paga impostos e fornecedores, o lucro líquido é frustrante."
    },
    {
      num: "03",
      title: "A Bombeira de Luxo",
      desc: "Passa o dia resolvendo problemas operacionais e tem zero tempo para pensar no futuro da empresa."
    }
  ];

  return (
    <section className="py-24 md:py-48 relative bg-[#f2ede7] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.02] pointer-events-none select-none hidden sm:block">
        <span className="font-serif italic text-[30vw] text-[#1a120b] leading-none">CLARITY</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto mb-20 md:mb-40 text-center">
          <div className="flex flex-col items-center mb-16 md:mb-24">
            <span className="text-[#9b6d4b] uppercase tracking-[0.8em] text-[8px] md:text-[10px] mb-8 block font-bold">O Diagnóstico Estratégico</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-8xl text-[#1a120b] mb-12 leading-[1.05] tracking-tight max-w-4xl">
              Você já tem a clínica. <br/>
              Já fatura alto. <br/>
              <span className="italic text-[#c8a178]">Então por que a conta não fecha?</span>
            </h2>
            <div className="w-px h-20 md:h-28 bg-gradient-to-b from-[#c8a178] to-transparent"></div>
          </div>
          
          <div className="bg-[#1a120b] border border-[#c8a178]/20 p-10 md:p-20 rounded-[3rem] relative overflow-hidden group shadow-soft transition-premium hover:shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c8a178]/10 blur-[100px] rounded-full pointer-events-none"></div>
            <p className="text-[#f2f0ed] text-2xl md:text-3xl lg:text-5xl font-serif italic leading-[1.2] text-center relative z-10 max-w-5xl mx-auto">
              "Sua rotina é um caos silencioso. Você não está cansada de trabalhar. <span className="text-[#c8a178] not-italic font-sans font-bold uppercase tracking-tight block md:inline mt-4 md:mt-0">Você está cansada de trabalhar errado.</span>"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 md:mb-40">
          {personas.map((p, i) => (
            <div key={i} className="bg-white/40 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] border border-[#c8a178]/10 group transition-premium hover:bg-white/80 hover:shadow-xl relative overflow-hidden">
              <span className="absolute -right-8 -bottom-12 font-serif italic text-[15rem] text-[#c8a178]/5 group-hover:text-[#c8a178]/10 transition-premium pointer-events-none">
                {p.num}
              </span>
              <div className="relative z-10">
                <span className="text-[#c8a178] font-serif text-3xl md:text-4xl mb-8 block opacity-40">/</span>
                <h3 className="text-[#1a120b] font-serif text-2xl md:text-3xl mb-6 tracking-tight uppercase italic leading-tight">{p.title}</h3>
                <p className="text-[#1a120b]/60 text-base md:text-lg leading-relaxed font-light">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto bg-[#1a120b] border border-[#c8a178]/30 p-12 md:p-24 rounded-[3.5rem] relative shadow-2xl overflow-hidden transition-premium hover:shadow-3xl">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#c8a17811,transparent)] pointer-events-none"></div>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="text-center lg:text-left">
                 <span className="text-[#c8a178] text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-bold mb-8 block">The Transformation</span>
                 <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-10 tracking-tight italic text-[#f2f0ed]">Workshop Planejamento 2026</h3>
                 <p className="text-[#f2f0ed]/70 text-lg md:text-xl leading-relaxed mb-12 font-light">
                   Uma <span className="text-[#c8a178] font-medium">Imersão Executiva</span> para blindar sua gestão e escalar seu faturamento com elegância.
                 </p>
                 <button 
                  onClick={scrollToOffer}
                  className="text-[#c8a178] border-b border-[#c8a178]/30 pb-2 text-xs uppercase tracking-[0.5em] font-bold hover:text-[#f2f0ed] hover:border-[#f2f0ed] transition-premium"
                 >
                    Acessar o Método
                 </button>
              </div>
              <div className="space-y-6 lg:pl-16 lg:border-l border-[#c8a178]/10">
                 {[
                   "Metas Financeiras Inegociáveis",
                   "Equipe Autogerenciável",
                   "Escala de Alto Ticket",
                   "Mapa da Liberdade 2026"
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-6 group">
                      <div className="w-2 h-2 bg-[#c8a178] rounded-full group-hover:scale-150 transition-premium"></div>
                      <span className="text-[#f2f0ed] text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-bold">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default PainPleasure;

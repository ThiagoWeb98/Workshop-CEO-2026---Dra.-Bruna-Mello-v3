
import React from 'react';

const Offer: React.FC = () => {
  const benefits = [
    "3 Encontros Ao Vivo (Estratégico)",
    "Acesso às Gravações por 1 Ano",
    "Calculadora de Precificação Master",
    "Kit Contratação Blindada",
    "Mapa de Funis de Vendas",
    "Checklist Ralos Invisíveis"
  ];

  return (
    <section className="py-32 md:py-60 bg-[#1a120b] relative overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-[450px]">
            
            {/* Ticket Flutuante Ultra-Rounded */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-44 z-30">
               <div 
                 className="w-full h-full rounded-[3.5rem] shadow-2xl flex flex-col p-10 relative overflow-hidden border border-white/10"
                 style={{
                   background: 'linear-gradient(135deg, #c8a178 0%, #9b6d4b 100%)',
                   boxShadow: '0 30px 60px rgba(0,0,0,0.6)'
                 }}
               >
                  <span className="text-[#1a120b] font-serif italic text-sm">CEO Summit 2026</span>
                  <div className="mt-auto">
                    <h4 className="font-serif text-[#1a120b] text-3xl tracking-tight uppercase">Smart Pass</h4>
                  </div>
               </div>
            </div>

            {/* Card Principal Ultra-Rounded */}
            <div className="bg-[#f2ede7] rounded-[6rem] shadow-2xl p-12 md:p-16 pt-32 md:pt-40 relative overflow-hidden border border-[#c8a178]/20">
               <div className="text-center">
                  <span className="text-[#9b6d4b] text-[9px] uppercase tracking-[0.8em] font-bold block mb-8">Investimento Premium</span>
                  <h3 className="font-serif text-3xl md:text-5xl text-[#1a120b] mb-12 tracking-tight">Ingresso Workshop</h3>
                  
                  <ul className="space-y-6 mb-16 text-left border-y border-[#1a120b]/5 py-10">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-5">
                        <div className="w-6 h-6 rounded-full bg-[#c8a178] flex items-center justify-center">
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#1a120b]/70 text-base font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-12">
                    <span className="text-[#1a120b] text-6xl md:text-8xl font-serif tracking-tighter block">R$ 147,00</span>
                    <p className="text-[#1a120b]/60 text-xs mt-6 font-bold tracking-widest uppercase">
                      OU 12X DE <span className="text-[#9b6d4b] text-lg">R$ 15,11</span>
                    </p>
                  </div>

                  <button className="w-full bg-[#1a120b] text-[#f2ede7] py-8 rounded-full font-bold uppercase tracking-[0.5em] text-[11px] shadow-2xl hover:bg-[#c8a178] transition-all">
                    Garantir Meu Acesso
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

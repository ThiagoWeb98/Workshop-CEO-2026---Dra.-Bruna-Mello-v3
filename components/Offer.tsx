
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
      {/* Softer background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,#9b6d4b22,transparent_70%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          <div className="relative w-full max-w-[340px] md:max-w-[450px] perspective-[3000px]">
            
            {/* 3D Floating Ticket - Rounded corners (rounded-[2.5rem]) */}
            <div className="absolute -top-16 md:-top-28 left-1/2 -translate-x-1/2 w-64 md:w-80 h-36 md:h-52 z-30 transition-premium hover:scale-105">
               <div 
                 className="w-full h-full rounded-[2.5rem] shadow-2xl flex flex-col p-6 md:p-10 relative overflow-hidden border border-white/10 animate-float"
                 style={{
                   background: 'linear-gradient(135deg, #c8a178 0%, #9b6d4b 50%, #c8a178 100%)',
                   transform: 'rotateY(-12deg) rotateX(8deg)',
                   boxShadow: 'inset 0 0 30px rgba(255,255,255,0.3), 0 30px 60px rgba(0,0,0,0.6)'
                 }}
               >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 pointer-events-none"></div>
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex flex-col">
                      <span className="text-[#1a120b]/50 text-[8px] uppercase tracking-[0.5em] font-bold">Elite Member</span>
                      <span className="text-[#1a120b] font-serif italic text-sm">CEO Summit 2026</span>
                    </div>
                  </div>
                  <div className="mt-auto relative z-10">
                    <h4 className="font-serif text-[#1a120b] text-2xl md:text-4xl tracking-tight mb-2 uppercase">Smart Pass</h4>
                    <p className="text-[#1a120b]/70 text-[8px] uppercase tracking-[0.6em] font-light">Dra. Bruna Mello</p>
                  </div>
               </div>
            </div>

            {/* Elegant Card - Soft Pearl Background (#f2ede7) - Rounded-[4.5rem] */}
            <div className="bg-[#f2ede7] rounded-[5.5rem] shadow-2xl p-10 md:p-16 pt-28 md:pt-40 relative overflow-hidden border border-[#c8a178]/20 transition-premium hover:shadow-3xl">
               <div className="absolute inset-0 opacity-[0.05] bg-[url('assets/texture-paper.png')] pointer-events-none"></div>
               
               <div className="text-center">
                  <span className="text-[#9b6d4b] text-[9px] uppercase tracking-[0.8em] font-bold block mb-6">Investimento Premium</span>
                  <h3 className="font-serif text-3xl md:text-5xl text-[#1a120b] mb-12 tracking-tight">Ingresso Smart Pass</h3>
                  
                  <ul className="space-y-6 mb-16 text-left border-y border-[#1a120b]/5 py-12">
                    {benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-5 group">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#c8a178] to-[#9b6d4b] flex items-center justify-center shadow-lg transition-premium group-hover:scale-110">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-[#1a120b]/70 text-base font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-12 md:mb-20">
                    <div className="flex flex-col items-center justify-center">
                       {/* Preço Principal: 147.00 Grande */}
                       <span className="text-[#1a120b] text-6xl md:text-8xl font-serif tracking-tighter leading-none">R$ 147,00</span>
                       {/* Preço Parcelado: 15.11 Pequeno/Elegante */}
                       <p className="text-[#1a120b]/60 text-xs md:text-sm mt-6 font-medium tracking-wide uppercase">
                         ou em até <span className="text-[#9b6d4b] font-bold">12x de R$ 15,11</span>
                       </p>
                    </div>
                  </div>

                  <button className="w-full bg-[#1a120b] text-[#f2ede7] py-6 md:py-8 rounded-full font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px] shadow-2xl hover:bg-[#9b6d4b] transition-premium transform hover:-translate-y-1 relative group overflow-hidden">
                    <span className="relative z-10">Garantir Meu Acesso</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
                  
                  <div className="mt-10 flex items-center justify-center gap-6 opacity-30">
                    <span className="text-[#1a120b] text-[8px] uppercase tracking-widest font-bold">Compra 100% Segura</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

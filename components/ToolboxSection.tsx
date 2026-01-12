
import React from 'react';

const ToolboxSection: React.FC = () => {
  const tools = [
    {
      title: "Calculadora de Precificação Simplificada",
      type: "Planilha Editável",
      desc: "Pare de 'chutar' preços. Descubra a margem exata de lucro de cada protocolo em segundos.",
      value: "Vendido por: R$ 197,00",
      icon: "📊"
    },
    {
      title: "Kit Contratação Blindada",
      type: "Manual PDF",
      desc: "Filtre os melhores talentos e blinde sua equipe com processos de seleção validados.",
      value: "Vendido por: R$ 97,00",
      icon: "🤝"
    },
    {
      title: "Mapa de Funis High Ticket",
      type: "Fluxograma Visual",
      desc: "Atraia pacientes qualificados e converta protocolos de alto valor com facilidade.",
      value: "Exclusivo",
      icon: "🌪️"
    },
    {
      title: "Checklist Ralos Invisíveis",
      type: "Guia Estratégico",
      desc: "Estanque desperdícios financeiros imediatamente e resgate o lucro do seu caixa.",
      value: "Bônus",
      icon: "💎"
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#f2ede7] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-20 md:mb-32 gap-12 text-center lg:text-left">
          <div className="max-w-4xl">
            <span className="text-[#9b6d4b] uppercase tracking-[0.8em] text-[8px] md:text-[10px] mb-8 block font-bold">Ancoragem de Valor</span>
            <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#1a120b] mb-10 tracking-tight">
              Toolbox <span className="italic text-[#c8a178]">Digital</span>.
            </h2>
            <p className="text-[#1a120b]/70 text-xl md:text-2xl font-light leading-relaxed italic border-none lg:border-l lg:border-[#c8a178]/30 lg:pl-10">
              "Ferramentas executivas prontas para aplicar e colher resultados imediatos."
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end bg-white/60 p-8 px-12 rounded-full border border-[#c8a178]/20 backdrop-blur-sm">
            <span className="text-[#1a120b] font-serif text-4xl mb-2">R$ 391,00</span>
            <span className="text-[#9b6d4b] text-[9px] uppercase tracking-[0.4em] font-bold opacity-60">Valor total incluso</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {tools.map((tool, i) => (
            <div key={i} className="group bg-white/80 p-10 md:p-16 rounded-[4.5rem] border border-[#c8a178]/10 hover:border-[#c8a178]/40 transition-premium relative overflow-hidden shadow-soft hover:shadow-2xl">
              <div className="absolute top-12 right-12 text-6xl opacity-10 group-hover:scale-125 transition-premium grayscale group-hover:grayscale-0 pointer-events-none">
                {tool.icon}
              </div>
              
              <div className="relative z-10">
                <span className="text-[#9b6d4b] text-[9px] uppercase tracking-[0.5em] font-bold mb-6 block">{tool.type}</span>
                <h3 className="text-[#1a120b] font-serif text-2xl md:text-3xl mb-6 tracking-tight group-hover:text-[#c8a178] transition-premium">{tool.title}</h3>
                <p className="text-[#1a120b]/60 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md">
                  {tool.desc}
                </p>
                
                <div className="pt-8 border-t border-[#1a120b]/5 flex justify-between items-center">
                  <span className="text-[#c8a178] text-[10px] uppercase tracking-[0.4em] font-bold">Lote Especial</span>
                  <span className="text-[#1a120b]/30 text-[10px] uppercase tracking-widest italic">{tool.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolboxSection;

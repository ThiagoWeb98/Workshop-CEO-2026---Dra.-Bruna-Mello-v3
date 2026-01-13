
import React from 'react';

const PainPleasure: React.FC = () => {
  const personas = [
    { num: "01", title: "A Centralizadora Exausta", desc: "Você não consegue delegar porque sente que a qualidade cai sem você." },
    { num: "02", title: "O Sócio Oculto", desc: "O faturamento cresce, mas o lucro líquido que sobra é frustrante." },
    { num: "03", title: "A Bombeira de Luxo", desc: "Passa o dia resolvendo problemas operacionais e não pensa no futuro." }
  ];

  return (
    <section className="py-16 md:py-32 lg:py-40 bg-[#f2ede7]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto mb-16 md:mb-24 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a120b] mb-12 md:mb-16 leading-[1.2] tracking-tight">
            Você não tem um <span className="text-[#c8a178]">problema</span> de trabalho. <br className="hidden sm:block"/>
            Você tem um problema de <span className="text-[#c8a178]">gestão</span>.
          </h2>
          
          <div className="bg-[#1a120b] p-8 sm:p-12 md:p-16 lg:p-20 rounded-[2.5rem] md:rounded-[5rem] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8a178]/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <p className="text-[#f2f0ed] text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic leading-snug md:leading-relaxed relative z-10">
              “60% das Clínicas quebram por falta de <span className="text-[#c8a178] not-italic font-bold">gestão</span>, não por falta de pacientes.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {personas.map((p, i) => (
            <div key={i} className="bg-white/60 p-8 md:p-10 rounded-[2.5rem] md:rounded-[4rem] border border-[#c8a178]/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <span className="text-[#c8a178] font-serif text-3xl md:text-4xl mb-6 block opacity-40">/ {p.num}</span>
              <h3 className="text-[#1a120b] font-serif text-xl md:text-2xl mb-4 italic">{p.title}</h3>
              <p className="text-[#1a120b]/60 text-base md:text-lg leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPleasure;

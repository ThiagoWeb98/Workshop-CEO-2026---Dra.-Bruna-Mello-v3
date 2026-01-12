
import React from 'react';

const PainPleasure: React.FC = () => {
  const personas = [
    { num: "01", title: "A Centralizadora Exausta", desc: "Você não consegue delegar porque sente que a qualidade cai sem você." },
    { num: "02", title: "O Sócio Oculto", desc: "O faturamento cresce, mas o lucro líquido que sobra é frustrante." },
    { num: "03", title: "A Bombeira de Luxo", desc: "Passa o dia resolvendo problemas operacionais e não pensa no futuro." }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#f2ede7]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto mb-20 text-center">
          <h2 className="font-serif text-4xl md:text-7xl text-[#1a120b] mb-16 leading-tight">
            Você tem a clínica, <br/> faturar alto. <br/>
            <span className="italic text-[#c8a178]">Por que a conta não fecha?</span>
          </h2>
          
          <div className="bg-[#1a120b] p-12 md:p-24 rounded-[6rem] shadow-2xl">
            <p className="text-[#f2f0ed] text-2xl md:text-4xl font-serif italic leading-relaxed">
              "Você não está cansada de trabalhar. Você está cansada de <span className="text-[#c8a178]">trabalhar errado</span>."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {personas.map((p, i) => (
            <div key={i} className="bg-white/60 p-12 rounded-[4.5rem] border border-[#c8a178]/10 hover:shadow-xl transition-all">
              <span className="text-[#c8a178] font-serif text-4xl mb-8 block opacity-40">/ {p.num}</span>
              <h3 className="text-[#1a120b] font-serif text-2xl mb-6 italic">{p.title}</h3>
              <p className="text-[#1a120b]/60 text-lg leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPleasure;

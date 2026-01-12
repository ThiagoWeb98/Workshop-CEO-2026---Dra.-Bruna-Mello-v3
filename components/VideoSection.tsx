
import React from 'react';

const VideoSection: React.FC = () => {
  const scrollToOffer = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Dra. Juliana Silveira",
      role: "Clínica Harmonize (SP)",
      quote: "Saí de um faturamento de 80k para 350k mensais em apenas 4 meses de aplicação. A liberdade geográfica que a Bruna ensina é real.",
      result: "+R$ 270k/mês"
    },
    {
      name: "Renata Mendes",
      role: "Instituto BioEsthetic",
      quote: "O maior ganho não foi só o lucro, foi a paz. Hoje minha equipe roda processos sem eu precisar estar no operacional 12h por dia.",
      result: "Liberdade Operacional"
    },
    {
      name: "Dra. Camila Farias",
      role: "Dermatologia Avançada",
      quote: "A imersão mudou meu posicionamento. Parei de atrair curiosos e passei a atrair clientes de alto ticket que valorizam meu trabalho.",
      result: "Ticket Médio 3x Maior"
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-[#1a120b] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-24 md:mb-32">
          <span className="text-[#c8a178] uppercase tracking-[0.8em] text-[8px] md:text-[10px] mb-8 block font-bold">The Gold Standard</span>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#f2f0ed] mb-4 leading-tight">
            Resultados de quem <br/>
            <span className="italic text-[#c8a178]">tornou-se CEO</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#f2ede7] p-10 md:p-14 rounded-[4.5rem] relative group border border-[#c8a178]/10 shadow-soft flex flex-col justify-between transition-premium hover:-translate-y-3 hover:shadow-2xl">
              <div>
                <div className="text-5xl font-serif text-[#c8a178]/30 group-hover:text-[#c8a178]/50 transition-premium mb-6">“</div>
                <p className="text-[#1a120b]/80 text-base md:text-lg leading-relaxed mb-10 font-light italic relative z-10">
                  {t.quote}
                </p>
              </div>
              
              <div>
                <div className="flex flex-col border-t border-[#1a120b]/10 pt-8">
                  <span className="text-[#1a120b] font-serif text-xl tracking-wide">{t.name}</span>
                  <span className="text-[#9b6d4b] text-[9px] uppercase tracking-[0.4em] font-bold mt-2">{t.role}</span>
                </div>
                <div className="mt-8 flex justify-between items-center bg-white/50 p-4 rounded-full px-8 border-l-4 border-[#c8a178]">
                  <span className="text-[#9b6d4b] text-[8px] uppercase tracking-widest font-bold">KPI:</span>
                  <span className="text-[#1a120b] text-[11px] font-bold tracking-tight">{t.result}</span>
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-br from-[#9b6d4b] to-[#1a120b] p-10 md:p-16 rounded-[5.5rem] text-center shadow-2xl flex flex-col items-center justify-center border border-[#c8a178]/30 relative overflow-hidden group md:col-span-2 lg:col-span-3 lg:mt-12">
             <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
             <h4 className="font-serif text-[#f2ede7] text-3xl md:text-5xl italic mb-8 relative z-10 max-w-2xl mx-auto">Sua clínica será a próxima história de sucesso.</h4>
             <a 
              href="#offer"
              onClick={scrollToOffer}
              className="relative z-10 bg-[#c8a178] text-[#1a120b] px-14 py-6 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-[#f2f0ed] transition-premium shadow-xl inline-block"
             >
                👉 Garantir minha vaga agora
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

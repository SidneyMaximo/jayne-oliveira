import { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Sun, Activity, ClipboardCheck, Smile, Sparkles } from 'lucide-react';

const PILLARS = [
  {
    title: 'Saúde Física, Mental e Hormonal',
    subtitle: 'Sintonia Completa',
    description: 'Equilíbrio fisiológico e saúde da mente andando juntas para o bom funcionamento do organismo.',
    icon: Activity
  },
  {
    title: 'Regulação de Fome e Saciedade',
    subtitle: 'Escuta Ativa',
    description: 'Reescrever sua relação com as mensagens químicas do corpo para comer sem exagero de forma natural.',
    icon: Heart
  },
  {
    title: 'Ajuste de Rotina e Sono',
    subtitle: 'Ciclo Circadiano',
    description: 'Protocolos inteligentes de sono e rotinas para baixar o cortisol e regularizar o metabolismo.',
    icon: Sun
  },
  {
    title: 'Construção de Hábitos',
    subtitle: 'Micro-metas Sustentáveis',
    description: 'Inserir pequenas ações lógicas no seu dia a dia que se consolidam sem esforço excessivo.',
    icon: ClipboardCheck
  },
  {
    title: 'Melhor Relação com a Comida',
    subtitle: 'Comer Sem Culpa',
    description: 'Fazer as pazes com o seu prato. Sem restrições de grupos alimentares ou neuras de calorias.',
    icon: Smile
  },
  {
    title: 'Práticas de Bem-Estar',
    subtitle: 'Metodologia Humanizada',
    description: 'Gerenciamento estruturado de estresse, autocuidado diário e suporte emocional contínuo.',
    icon: Sparkles
  }
];

export default function Pillars() {
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <section id="metodo" className="py-20 md:py-32 bg-[#FCFAF6] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Title Context */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs uppercase font-semibold text-[#7E8F7C] tracking-[0.25em] mb-3 block">
            Metodologia Integrativa
          </span>
          <h2 className="font-serif text-[#2E2E2C] text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
            Pilares do Método <br />
            <span className="font-serif italic font-normal text-[#384236]">Além do prato</span>
          </h2>
          <p className="text-[#2E2E2C]/70 font-light mt-4 text-sm sm:text-base">
            O tratamento é baseado em um modelo de seis pilares que investigam além do que você consome, cuidando de toda a sua rotina e comportamento mental.
          </p>
        </div>

        {/* Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16" id="pillars-listing">
          {PILLARS.map((pillar, index) => {
            const IconComponent = pillar.icon;
            const isHovered = activePillar === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActivePillar(index)}
                onMouseLeave={() => setActivePillar(null)}
                onClick={() => setActivePillar(activePillar === index ? null : index)}
                className="relative cursor-pointer transition-all duration-300 p-8 rounded-xl bg-white border border-[#7E8F7C]/15 hover:border-[#7E8F7C]/40 shadow-xs hover:shadow-md h-full flex flex-col justify-between overflow-hidden group min-h-64"
                id={`pillar-card-${index}`}
              >
                {/* Decorative hover bg color fade */}
                <span className="absolute inset-0 bg-radial from-[#7E8F7C]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Top Row: Icon + Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-11 w-11 rounded-lg bg-[#7E8F7C]/8 flex items-center justify-center text-[#384236] group-hover:bg-[#7E8F7C] group-hover:text-white transition-all duration-300">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#2E2E2C]/50 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Body Text */}
                  <span className="text-[11px] uppercase tracking-wider text-[#7E8F7C] font-semibold block mb-1">
                    {pillar.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-[#2E2E2C] text-lg font-medium tracking-tight mb-3">
                    {pillar.title}
                  </h3>
                </div>

                <div className="relative z-10 mt-4">
                  {/* High quality dynamic description display */}
                  <p className="text-xs sm:text-sm text-[#2E2E2C]/75 leading-relaxed font-light transition-all duration-300">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Study Table Graphic Banner below cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-60 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-[#7E8F7C]/10"
          id="pillars-sub-banner"
        >
          {/* Unsplash books and reading overlay */}
          <img
            src="https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=1200"
            alt="Mesa de estudos com livros e chá de autocuidado"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-700 opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2E2E2C]/80 via-[#2E2E2C]/40 to-[#2E2E2C]/10" />
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="max-w-lg">
              <span className="text-[10px] tracking-[0.2em] font-bold text-[#EADDC9] uppercase block mb-1.5">
                Investimento Intelectual e Empatia
              </span>
              <h4 className="font-serif text-white text-xl md:text-2xl font-light leading-snug">
                Estilo de vida, cognição e autocompaixão caminham lado a lado.
              </h4>
            </div>
            
            <p className="text-xs md:text-sm text-[#EADDC9]/80 font-light max-w-xs md:text-right leading-relaxed">
              Estudando constantemente o comportamento humano para traduzir a fisiologia em rituais leves e prazerosos no seu cotidiano.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

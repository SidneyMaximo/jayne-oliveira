import { motion } from 'motion/react';
import { Globe, MapPin, ArrowUpRight } from 'lucide-react';
import { ServiceMode } from '../types';

interface ServiceModesProps {
  onOpenScheduling: (mode: ServiceMode) => void;
}

export default function ServiceModes({ onOpenScheduling }: ServiceModesProps) {
  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden bg-[#3C413D]"
      id="modalidades"
    >
      {/* Background shadow overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1600"
          alt="Sombra de coqueiros e folhas"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 saturate-0 scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3C413D]/90 via-[#3C413D] to-[#3C413D]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs uppercase font-semibold text-[#A4B3A2] tracking-[0.25em] mb-3 block">
            Modalidades de Atendimento
          </span>
          <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl font-light">
            Como iniciar a sua <br />
            <span className="font-serif italic font-normal text-[#EADDC9]">jornada de mudança?</span>
          </h2>
          <p className="text-[#EADDC9]/70 font-light mt-4 text-sm sm:text-base">
            Escolha o formato que melhor se adapta à sua rotina. Ambas as modalidades contam com a mesma entrega completa e acompanhamento próximo.
          </p>
        </div>

        {/* Dual Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" id="service-options-grid">
          
          {/* Online Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl flex flex-col justify-between items-center text-center group border border-[#7E8F7C]/10 h-full min-h-80 relative overflow-hidden"
            id="online-delivery-card"
          >
            {/* Soft decorative visual shape */}
            <span className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#7E8F7C]/5 transition-transform duration-500 group-hover:scale-150" />
            
            <div className="flex flex-col items-center flex-1 relative z-10">
              <div className="h-16 w-16 rounded-full bg-[#7E8F7C]/10 text-[#384236] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#7E8F7C] group-hover:text-white">
                <Globe className="h-7 w-7" />
              </div>
              
              <h3 className="font-serif text-[#2E2E2C] text-2xl font-normal mb-4">
                Consulta Online
              </h3>
              
              <p className="text-sm md:text-base text-[#2E2E2C]/75 font-light leading-relaxed max-w-xs mb-8">
                Acompanhamento individualizado com toda a praticidade de ser atendida por videoconferência, de onde você estiver.
              </p>
            </div>

            <button
              onClick={() => onOpenScheduling('online')}
              className="w-full py-4 px-6 bg-[#7E8F7C] hover:bg-[#6C7C6B] text-white font-medium text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 group-hover:shadow-md transition-all duration-300 relative z-10 cursor-pointer"
              id="select-online-action"
            >
              <span>ENTRAR EM CONTATO</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* Presencial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-white rounded-2xl p-8 md:p-10 shadow-xl flex flex-col justify-between items-center text-center group border border-[#7E8F7C]/10 h-full min-h-80 relative overflow-hidden"
            id="presencial-delivery-card"
          >
            {/* Soft decorative visual shape */}
            <span className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#7E8F7C]/5 transition-transform duration-500 group-hover:scale-150" />

            <div className="flex flex-col items-center flex-1 relative z-10">
              <div className="h-16 w-16 rounded-full bg-[#7E8F7C]/10 text-[#384236] flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-[#7E8F7C] group-hover:text-white">
                <MapPin className="h-7 w-7" />
              </div>

              <h3 className="font-serif text-[#2E2E2C] text-2xl font-normal mb-4">
                Consulta Presencial
              </h3>

              <p className="text-sm md:text-base text-[#2E2E2C]/75 font-light leading-relaxed max-w-xs mb-8">
                Os atendimentos presenciais acontecem em Maceió - AL, em um consultório estruturado, acolhedor e tranquilo para sua total privacidade.
              </p>
            </div>

            <button
              onClick={() => onOpenScheduling('presencial')}
              className="w-full py-4 px-6 bg-[#3C413D] hover:bg-[#2E312E] text-white font-medium text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 group-hover:shadow-md transition-all duration-300 relative z-10 cursor-pointer"
              id="select-presencial-action"
            >
              <span>ENTRAR EM CONTATO</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

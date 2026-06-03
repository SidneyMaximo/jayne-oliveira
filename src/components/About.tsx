import { motion } from 'motion/react';
import { Sparkles, Calendar } from 'lucide-react';
import aboutImg1 from '@/assets/images/jayne-2.png';

interface AboutProps {
  onOpenScheduling: () => void;
}

export default function About({ onOpenScheduling }: AboutProps) {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#FCFAF6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Portrait wrapper with animation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
            id="about-portrait-grid"
          >
            {/* Background decorative float board */}
            <div className="absolute -inset-4 bg-[#7E8F7C]/10 rounded-3xl -rotate-2 scale-[0.98] -z-10" />
            
            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl relative">
              <img
                src={aboutImg1}
                alt="Nutricionista Jayne Oliveira sorrindo com Jaleco no consultório"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
              />

              {/* secondary portrait removed per request */}
            </div>
          </motion.div>

          {/* Description biography wrapper */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
            id="about-bio-text"
          >
            <span className="text-xs uppercase font-semibold text-[#7E8F7C] tracking-[0.25em] mb-2 inline-flex items-center gap-1.5">
              <Sparkles className="h-3 w-3" /> INTRODUÇÃO
            </span>
            
            <h2 className="font-serif text-[#2E2E2C] font-light text-3xl sm:text-4xl md:text-5xl leading-tight mb-2">
              Prazer, sou <br />
              <span className="font-normal font-serif italic text-[#384236] text-4xl sm:text-5xl md:text-6xl">Jayne Oliveira</span>
            </h2>
            
            <span className="text-xs font-mono font-medium tracking-wide text-[#7E8F7C] uppercase bg-[#7E8F7C]/5 px-3 py-1 rounded-sm w-fit mb-8 border border-[#7E8F7C]/10">
              CRN 50020
            </span>

            <div className="space-y-6 text-[#2E2E2C]/85 font-light text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                Sou nutricionista e acredito que cuidar da alimentação e do corpo não deve ser algo complicado, restritivo ou frustrante. Nutrição não se resume a calorias ou dietas prontas, mas sim em entender o que o corpo realmente precisa.
              </p>
              <p>
                Existem fatores que muitas vezes são deixados de lado, mas impactam no peso, no ganho de massa magra, na qualidade de vida, na saúde física e mental. É preciso olhar para todas essas questões e seguir um caminho mais real, equilibrado e sustentável.
              </p>
            </div>

            {/* Underlined elegant booking link */}
            <div className="mt-10 self-start">
              <button
                onClick={onOpenScheduling}
                className="group relative inline-flex items-center gap-2 text-[#384236] hover:text-[#7E8F7C] font-serif font-semibold tracking-wider text-sm transition-colors uppercase cursor-pointer"
                id="about-consultation-trigger"
              >
                <Calendar className="h-4 w-4 text-[#7E8F7C]" />
                <span>AGENDAR CONSULTA</span>
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#7E8F7C] scale-x-100 group-hover:scale-x-105 duration-300 transition-transform origin-left" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

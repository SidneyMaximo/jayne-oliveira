import { motion } from 'motion/react';
import { Calendar, Compass } from 'lucide-react';
import visionImg from '@/assets/images/jayne-3.png';

interface PhilosophyProps {
  onOpenScheduling: () => void;
}

export default function Philosophy({ onOpenScheduling }: PhilosophyProps) {
  return (
    <section id="filosofia" className="py-20 md:py-32 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Symmetrical Left Side: Core Message Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1"
            id="philosophy-core-text"
          >
            <span className="text-xs uppercase font-semibold text-[#7E8F7C] tracking-[0.25em] mb-2 inline-flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5" /> VISÃO INTEGRAL
            </span>

            <h2 className="font-serif text-[#2E2E2C] font-light text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
              Pronta para mudar <br />
              <span className="font-normal font-serif italic text-[#384236]">além do prato?</span>
            </h2>

            <div className="space-y-6 text-[#2E2E2C]/85 font-light text-base md:text-lg leading-relaxed max-w-2xl">
              <p>
                O excesso de peso, as queixas clínicas, patologias e até questões de saúde mental não podem ser resolvidos apenas com uma dieta. Fatores como comer impulsivo, falta de rotina, privação de sono, hábitos ruins e até o estresse impactam diretamente no peso, na composição corporal e na saúde.
              </p>
              <p>
                Cuidar do comportamento e do estilo de vida, além da alimentação, é um dos caminhos mais consistentes para promover resultados. Quando trabalhamos de maneira integrativa, entendendo que tudo em nós está interligado, o corpo encontra equilíbrio e funciona de maneira adequada.
              </p>
              <p>
                Por isso é tão importante trabalhar também além do prato para finalmente promover os resultados de saúde e autoimagem que você tanto busca, mas nunca conseguiu.
              </p>
              <p>
                Se você sente que está pronta para, finalmente, olhar e trabalhar pilares que você sempre ignorou, mas que irão te ajudar a ter os resultados que tanto deseja, esse é exatamente o caminho que o meu método propõe: cuidar de você por completo — corpo, mente e estilo de vida.
              </p>
            </div>

            {/* Book trigger link */}
            <div className="mt-10 self-start">
              <button
                onClick={onOpenScheduling}
                className="group relative inline-flex items-center gap-2 text-[#384236] hover:text-[#7E8F7C] font-serif font-semibold tracking-wider text-sm transition-colors uppercase cursor-pointer"
                id="philosophy-cta"
              >
                <Calendar className="h-4 w-4 text-[#7E8F7C]" />
                <span>AGENDAR CONSULTA</span>
                <span className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#7E8F7C] scale-x-100 group-hover:scale-x-105 duration-300 transition-transform origin-left" />
              </button>
            </div>
          </motion.div>

          {/* Symmetrical Right Side: Warm workspace portrait image with laptop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative order-1 lg:order-2"
            id="philosophy-image-grid"
          >
            {/* Background decorative float board */}
            <div className="absolute -inset-4 bg-[#7E8F7C]/10 rounded-3xl rotate-2 scale-[0.98] -z-10" />

            <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-xl">
              <img
                src={visionImg}
                alt="Nutricionista Jayne Oliveira sorridente no computador"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const BULLET_ITEMS = [
  'Comer mais saudável, porém sem restrição e neura',
  'Ter mais autonomia e entendimento das escolhas alimentares',
  'Ter uma rotina mais alinhada com o seu corpo',
  'Ter melhor percepção dos sinais de fome e saciedade',
  'Comer sem impulsividade e sem exageros',
  'Melhorar sua relação com a comida',
  'Emagrecer com saúde',
  'Melhorar a composição corporal',
  'Melhorar o funcionamento da saúde gastrointestinal',
  'Melhorar a imunidade e exames bioquímicos',
  'Melhorar de todos os aspectos da saúde da mulher',
  'Criar hábitos para a vida, e não apenas por uma fase'
];

export default function CareList() {
  return (
    <section id="atendimento" className="py-20 md:py-32 bg-[#FCFAF6] scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Aesthetic Food Plate Image on the Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex items-center"
            id="carelist-presentation-img"
          >
            {/* Background floating decor shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 w-4/5 rounded-full bg-[#7E8F7C]/8 blur-2xl -z-10" />
            
            <div className="w-full aspect-square overflow-hidden rounded-3xl shadow-lg border border-[#7E8F7C]/10 max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800"
                alt="Prato de comida saudável com salada, sementes e legumes frescos"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center hover:scale-[1.04] transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Core Structured Checklist Target Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
            id="carelist-text-layout"
          >
            <span className="text-xs uppercase font-semibold text-[#7E8F7C] tracking-[0.25em] mb-3 block">
              Para Quem É o Método?
            </span>
            
            <h2 className="font-serif text-[#2E2E2C] text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-8">
              Meu atendimento é <br />
              <span className="font-serif italic font-normal text-[#384236]">voltado para você que quer:</span>
            </h2>

            {/* List with styled green checkmarks in list column boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5" id="bullets-container">
              {BULLET_ITEMS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#7E8F7C]/8 shadow-xs hover:border-[#7E8F7C]/20 transition-all duration-200"
                >
                  <div className="h-5 w-5 rounded-full bg-[#7E8F7C]/15 flex items-center justify-center text-[#384236] shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  
                  <p className="text-sm text-[#2E2E2C]/85 font-light leading-tight">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

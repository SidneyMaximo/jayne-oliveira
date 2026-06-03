import { ChevronDown, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenScheduling: () => void;
}

export default function Hero({ onOpenScheduling }: HeroProps) {
  const scrollToNext = () => {
    const nextSection = document.getElementById('sobre');
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2D312E]"
    >
      {/* Background with Darkened Layer overlay for high-contrast accessibility */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1600"
          alt="Sessão Nutrição Cozinha Plantas Café"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D312E] via-[#2D312E]/70 to-[#2D312E]/40" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white mt-16 md:mt-24">
        
        {/* Subtle Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span className="h-[1px] w-6 bg-[#7E8F7C]" />
          <span className="text-xs md:text-sm font-medium tracking-[0.2em] text-[#A4B3A2] uppercase">
            Nutrição Clínica e Comportamental
          </span>
          <span className="h-[1px] w-6 bg-[#7E8F7C]" />
        </motion.div>

        {/* Breathtaking Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl font-light leading-[1.12] tracking-tight mb-8"
        >
          Pronta para mudar de <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#EADDC9]">verdade</span> e ter resultados?
        </motion.h1>

        {/* Description subtext */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base md:text-lg text-[#EADDC9]/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Vá além de dietas restritivas e passageiras. Encontre o equilíbrio saudável entre o seu corpo, mente e estilo de vida que você consegue manter.
        </motion.p>

        {/* Instant Interactive CTA Trigger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenScheduling}
            className="w-full sm:w-auto bg-[#7E8F7C] hover:bg-[#8CA28A] text-white font-medium text-xs px-8 py-4 rounded-full uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            id="hero-book-btn"
          >
            Agendar Minha Consulta
          </button>
          
          <button
            onClick={scrollToNext}
            className="w-full sm:w-auto text-[#EADDC9] hover:text-white font-medium text-xs px-6 py-4 rounded-full uppercase tracking-widest transition-all duration-300 border border-[#7E8F7C]/30 hover:border-[#7E8F7C] cursor-pointer"
            id="hero-about-btn"
          >
            Conhecer Método
          </button>
        </motion.div>
      </div>

      {/* Bottom arrow anchor */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={scrollToNext}
          className="text-[#EADDC9]/60 hover:text-[#EADDC9] transition-colors p-2"
          aria-label="Ir para baixo"
          id="hero-scroll-down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}

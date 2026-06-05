import { motion } from 'motion/react';
import { Instagram, MessageCircle, Mail, Clock, Calendar, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenScheduling: () => void;
}

export default function Footer({ onOpenScheduling }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleInstagramClick = () => {
    window.open('https://instagram.com/jayneoliveiranutri', '_blank', 'noopener,noreferrer');
  };

  const handleEmailClick = () => {
    window.open('mailto:nutrijayneoliveira@gmail.com', '_blank');
  };

  return (
    <footer id="contato" className="bg-[#FAF7F2] text-[#2E2E2C]">
      
      {/* 1. Main Info Footer Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pb-12 border-b border-[#7E8F7C]/20">
          
          {/* Left Block: Call-out Heading */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase font-semibold text-[#7E8F7C] tracking-[0.25em] mb-3 block">
                Próximo Passo
              </span>
              <h2 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl leading-tight text-[#384236] max-w-md">
                Vamos juntas construir sua <br />
                <span className="font-serif italic font-normal text-[#2E2E2C]">melhor versão?</span>
              </h2>
            </div>
            
            {/* Social Badges Icons Group */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={handleInstagramClick}
                className="h-10 w-10 rounded-full border border-[#7E8F7C]/20 flex items-center justify-center text-[#2E2E2C]/70 hover:bg-[#7E8F7C] hover:text-white hover:border-[#7E8F7C] transition-all duration-300 cursor-pointer"
                aria-label="Acessar Instagram"
                id="footer-insta-btn"
              >
                <Instagram className="h-4 w-4" />
              </button>
              <button
                onClick={onOpenScheduling}
                className="h-10 w-10 rounded-full border border-[#7E8F7C]/20 flex items-center justify-center text-[#2E2E2C]/70 hover:bg-[#7E8F7C] hover:text-white hover:border-[#7E8F7C] transition-all duration-300 cursor-pointer"
                aria-label="Iniciar Conversa no WhatsApp"
                id="footer-whats-btn"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
              <button
                onClick={handleEmailClick}
                className="h-10 w-10 rounded-full border border-[#7E8F7C]/20 flex items-center justify-center text-[#2E2E2C]/70 hover:bg-[#7E8F7C] hover:text-white hover:border-[#7E8F7C] transition-all duration-300 cursor-pointer"
                aria-label="Enviar Email"
                id="footer-email-btn"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Block: Structured Details (Contact & Operation Hours) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12" id="footer-contact-blocks">
            
            {/* Contact details */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7E8F7C] border-b border-[#7E8F7C]/15 pb-2">
                Contato
              </h3>
              <div className="space-y-2">
                <p className="text-[#2E2E2C]/80 font-light text-sm">
                  Email profissional:
                </p>
                <a
                  href="mailto:nutrijayneoliveira@gmail.com"
                  className="font-mono text-xs text-[#384236] hover:text-[#7E8F7C] transition-colors block"
                  id="contact-email-link"
                >
                  nutrijayneoliveira@gmail.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[#2E2E2C]/80 font-light text-sm">
                  Maceió - AL
                </p>
                <p className="text-xs text-[#2E2E2C]/65 font-light">
                  Atendimento Online & Presencial
                </p>
              </div>
            </div>

            {/* Operating Hours details */}
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7E8F7C] border-b border-[#7E8F7C]/15 pb-2">
                Funcionamento
              </h3>
              <div className="space-y-3 font-light text-sm text-[#2E2E2C]/80">
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#7E8F7C] shrink-0" />
                  <span>Segunda a sexta: 9h - 18h</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#7E8F7C] shrink-0" />
                  <span>Sábado: 10h - 14h</span>
                </div>
                <div className="flex items-center gap-2 text-[#2E2E2C]/50">
                  <Clock className="h-3.5 w-3.5 text-[#7E8F7C]/40 shrink-0" />
                  <span>Domingo: Fechado</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Brand Copyright disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#2E2E2C]/60 font-light font-mono">
          <p>© {currentYear} Desenvolvido por Sidney Maximo. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1 text-[#7E8F7C]">
            <ShieldCheck className="h-4 w-4" />
            <span>Nutrição ética regulamentada pelo CRN / CFN</span>
          </div>
        </div>
      </div>

      {/* 2. Scenic Immersive Pre-Footer Beach Section with Floating Action Card */}
      <section className="relative h-96 w-full overflow-hidden flex items-center justify-center">
        {/* Soft sand oats beach scene */}
        <img
          src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1600"
          alt="Foto da praia ao entardecer"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none select-none"
        />
        {/* Warm light ambient vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FCFAF6] via-transparent to-[#FAF7F2]/60" />
        
        {/* Absolute floating luxury card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.8 }}
          className="relative z-10 bg-[#FCFAF6]/90 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl max-w-md w-[90%] text-center border border-[#7E8F7C]/20"
          id="beach-bottom-cta"
        >
          <span className="text-[10px] tracking-widest font-bold uppercase text-[#7E8F7C] block mb-2">
            Iniciar Tratamento
          </span>
          <h3 className="font-serif text-[#2E2E2C] text-xl md:text-2xl font-light mb-6">
            Vamos juntas alcançar o seu verdadeiro potencial saudável?
          </h3>
          <button
            onClick={onOpenScheduling}
            className="w-full bg-[#7E8F7C] hover:bg-[#6C7C6B] text-white py-3.5 px-6 rounded-full font-medium text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-px cursor-pointer"
            id="last-footer-cta-btn"
          >
            Agendar consulta
          </button>
        </motion.div>
      </section>

    </footer>
  );
}

import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenScheduling: () => void;
}

export default function Header({ onOpenScheduling }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of sticking nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FCFAF6]/90 backdrop-blur-md shadow-xs py-3 border-b border-[#7E8F7C]/10'
            : 'bg-transparent py-5'
        }`}
        id="main-app-header"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="flex items-center gap-2 group cursor-pointer"
            id="nav-logo"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7E8F7C]/15 text-[#384236] transition-transform duration-300 group-hover:rotate-12">
              <Sparkles className="h-4.5 w-4.5" />
            </div>
            <span className="font-serif font-semibold text-lg tracking-wide text-[#2E2E2C] hover:text-[#7E8F7C] transition-colors duration-200">
              Jayne Oliveira
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium" id="desktop-menu">
            <a
              href="#sobre"
              onClick={(e) => handleNavClick(e, 'sobre')}
              className="text-[#2E2E2C]/70 hover:text-[#2E2E2C] transition-colors duration-200 uppercase tracking-widest text-[11px]"
            >
              Sobre
            </a>
            <a
              href="#metodo"
              onClick={(e) => handleNavClick(e, 'metodo')}
              className="text-[#2E2E2C]/70 hover:text-[#2E2E2C] transition-colors duration-200 uppercase tracking-widest text-[11px]"
            >
              Método e Pilares
            </a>
            <a
              href="#atendimento"
              onClick={(e) => handleNavClick(e, 'atendimento')}
              className="text-[#2E2E2C]/70 hover:text-[#2E2E2C] transition-colors duration-200 uppercase tracking-widest text-[11px]"
            >
              Atendimento
            </a>
            <a
              href="#contato"
              onClick={(e) => handleNavClick(e, 'contato')}
              className="text-[#2E2E2C]/70 hover:text-[#2E2E2C] transition-colors duration-200 uppercase tracking-widest text-[11px]"
            >
              Contato
            </a>
          </nav>

          {/* Appointment Call-to-Action (desktop) */}
          <div className="hidden md:block">
            <button
              onClick={onOpenScheduling}
              className="bg-[#7E8F7C] hover:bg-[#6C7C6B] text-white font-medium text-xs px-5 py-2.5 rounded-full uppercase tracking-wider transition-all duration-300 shadow-xs hover:-translate-y-px cursor-pointer"
              id="header-cta-btn"
            >
              Agendar consulta
            </button>
          </div>

          {/* Responsive Hamburger Switch */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#2E2E2C] p-1.5 rounded-lg hover:bg-[#2E2E2C]/5 transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-hud-btn"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-30 transform transition-transform duration-300 md:hidden flex flex-col bg-[#FCFAF6] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-drawer"
      >
        <div className="flex-1 flex flex-col justify-center items-center gap-8 px-6 pt-24 pb-8 text-center">
          <a
            href="#sobre"
            onClick={(e) => handleNavClick(e, 'sobre')}
            className="text-lg font-serif font-medium text-[#2E2E2C] hover:text-[#7E8F7C] transition-colors duration-200 tracking-wide"
          >
            Sobre Mim
          </a>
          <a
            href="#metodo"
            onClick={(e) => handleNavClick(e, 'metodo')}
            className="text-lg font-serif font-medium text-[#2E2E2C] hover:text-[#7E8F7C] transition-colors duration-200 tracking-wide"
          >
            O Método Além do Prato
          </a>
          <a
            href="#atendimento"
            onClick={(e) => handleNavClick(e, 'atendimento')}
            className="text-lg font-serif font-medium text-[#2E2E2C] hover:text-[#7E8F7C] transition-colors duration-200 tracking-wide"
          >
            Como Funciona o Atendimento
          </a>
          <a
            href="#contato"
            onClick={(e) => handleNavClick(e, 'contato')}
            className="text-lg font-serif font-medium text-[#2E2E2C] hover:text-[#7E8F7C] transition-colors duration-200 tracking-wide"
          >
            Contato
          </a>

          <div className="w-full max-w-xs pt-8 border-t border-[#7E8F7C]/15">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenScheduling();
              }}
              className="w-full bg-[#7E8F7C] hover:bg-[#6C7C6B] text-white font-medium py-3 px-6 rounded-full text-sm uppercase tracking-wider transition-all shadow-md cursor-pointer"
              id="mobile-drawer-cta"
            >
              Agendar consulta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

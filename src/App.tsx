import { useState } from 'react';
import { motion } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import LeafBanner from './components/LeafBanner';
import Pillars from './components/Pillars';
import CareList from './components/CareList';
import ServiceModes from './components/ServiceModes';
import Footer from './components/Footer';
import SchedulingModal from './components/SchedulingModal';
import { ServiceMode } from './types';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ServiceMode>('online');

  const handleOpenScheduling = (mode: ServiceMode = 'online') => {
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const handleDirectWhatsAppQuickContact = () => {
    // Standard direct instant greeting link to whatsapp
    const message = encodeURIComponent("Olá Nutri Jayne Oliveira! Vim pelo seu site e tenho interesse em agendar uma consulta. Como funcionam suas vagas disponíveis?");
    window.open(`https://wa.me/5582996899565?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#7E8F7C]/30 select-none overflow-x-hidden" id="app-wrapper">
      
      {/* 1. Header Navigation Bar */}
      <Header onOpenScheduling={() => handleOpenScheduling('online')} />

      {/* 2. Page Content Blocks Grid */}
      <main className="flex-1">
        
        {/* Banner Segment */}
        <Hero onOpenScheduling={() => handleOpenScheduling('online')} />
        
        {/* About Profile segment */}
        <About onOpenScheduling={() => handleOpenScheduling('online')} />
        
        {/* Deep behavioral coaching insight segment */}
        <Philosophy onOpenScheduling={() => handleOpenScheduling('online')} />
        
        {/* Foliage decoration transition banner */}
        <LeafBanner />
        
        {/* Methodology Pillars Interactive lists */}
        <Pillars />
        
        {/* Target customer goals list */}
        <CareList />
        
        {/* Modality cards selection */}
        <ServiceModes onOpenScheduling={(mode) => handleOpenScheduling(mode)} />

      </main>

      {/* 3. Footer contacts block & Beach bottom display */}
      <Footer onOpenScheduling={() => handleOpenScheduling('online')} />

      {/* 4. Scheduling Form Popup Modal */}
      <SchedulingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMode={modalMode}
      />

      {/* 5. Floating Quick-Action WhatsApp Badge (bottom right) */}
      <div className="fixed bottom-6 right-6 z-30" id="quick-floating-badge">
        <motion.button
          onClick={handleDirectWhatsAppQuickContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-colors hover:bg-[#128C7E] cursor-pointer"
          aria-label="Falar conosco no WhatsApp instantaneamente"
          title="Falar com a Nutri"
          id="floating-whats-badge"
        >
          <MessageSquare className="h-6 w-6 stroke-[2.2]" />
        </motion.button>
      </div>

    </div>
  );
}

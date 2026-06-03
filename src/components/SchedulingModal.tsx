import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, MessageSquare, Shield, CheckCircle, Smartphone } from 'lucide-react';
import { SchedulingData, ServiceMode } from '../types';

interface SchedulingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: ServiceMode;
}

const GOALS = [
  'Emagrecimento Saudável',
  'Reeducação Alimentar e Comportamental',
  'Nutrição Clínica (Doenças, Alergias, Saúde Gut)',
  'Saúde da Mulher (SOP, Endometriose, Fertilidade)',
  'Hipertrofia e Desempenho Esportivo',
  'Melhorar Relação com a Comida'
];

export default function SchedulingModal({ isOpen, onClose, initialMode = 'online' }: SchedulingModalProps) {
  const [formData, setFormData] = useState<SchedulingData>({
    name: '',
    phone: '',
    mode: initialMode,
    goal: GOALS[0],
    customMessage: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Default WhatsApp link: standard Brazillian code for Maceió (82)
  const defaultWhatsAppNumber = '5582996899565'; 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleModeChange = (mode: ServiceMode) => {
    setFormData(prev => ({ ...prev, mode }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Build ultra polished client message
    const formattedMessage = encodeURIComponent(
      `Olá Nutri Jayne Oliveira! ✨\n\n` +
      `Gostaria de solicitar informações para agendar uma consulta:\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `🎯 *Objetivo:* ${formData.goal}\n` +
      `📍 *Modalidade:* ${formData.mode === 'online' ? 'Online (Praticidade)' : 'Presencial (Maceió - AL)'}\n` +
      (formData.customMessage?.trim() ? `💬 *Mensagem:* ${formData.customMessage}\n` : '') +
      `\nAguardo as datas disponíveis para darmos início! 🌱`
    );

    const whatsappUrl = `https://wa.me/${defaultWhatsAppNumber}?text=${formattedMessage}`;
    
    // Open in a new tab with no-referrer protection
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop screen */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2E2E2C]/60 backdrop-blur-xs"
            id="modal-backdrop"
          />

          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#FCFAF6] p-6 shadow-2xl md:p-8"
            id="scheduling-form-modal"
          >
            {/* Top Close icon */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#2E2E2C]/50 transition-colors hover:text-[#2E2E2C]"
              aria-label="Fechar"
              id="close-modal-btn"
            >
              <X className="h-5 w-5" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center" id="success-screen">
                <CheckCircle className="h-16 w-16 text-[#7E8F7C] mb-4 animate-bounce" />
                <h3 className="font-serif text-2xl font-semibold text-[#384236] mb-2">
                  Mensagem Preparada!
                </h3>
                <p className="text-sm text-[#2E2E2C]/80 max-w-sm">
                  Estamos te redirecionando para o WhatsApp da Nutri Jayne para finalizar o seu agendamento.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" id="appointment-form">
                <div>
                  <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-wider text-[#384236] uppercase bg-[#7E8F7C]/10 rounded-full mb-2">
                    Nutrição Integrativa
                  </span>
                  <h2 className="font-serif text-2xl font-semibold text-[#2E2E2C]">
                    Agendar Minha Consulta
                  </h2>
                  <p className="text-xs text-[#2E2E2C]/70 mt-1">
                    Preencha os dados abaixo e entraremos em contato via WhatsApp com os horários disponíveis.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#2E2E2C]/80 uppercase tracking-wider">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Maria Silveira"
                    className="w-full px-4 py-3 rounded-lg border border-[#7E8F7C]/30 bg-white text-[#2E2E2C] text-sm focus:border-[#7E8F7C] focus:ring-1 focus:ring-[#7E8F7C] outline-none transition duration-200"
                  />
                </div>

                {/* Service Mode Selection Tabs */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#2E2E2C]/80 uppercase tracking-wider">
                    Modalidade Desejada
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#2E2E2C]/5 rounded-lg">
                    <button
                      type="button"
                      onClick={() => handleModeChange('online')}
                      className={`py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                        formData.mode === 'online'
                          ? 'bg-white text-[#384236] shadow-xs font-semibold'
                          : 'text-[#2E2E2C]/60 hover:text-[#2E2E2C]'
                      }`}
                    >
                      Online (Videoconferência)
                    </button>
                    <button
                      type="button"
                      onClick={() => handleModeChange('presencial')}
                      className={`py-2 text-xs font-medium rounded-md transition-all duration-200 ${
                        formData.mode === 'presencial'
                          ? 'bg-white text-[#384236] shadow-xs font-semibold'
                          : 'text-[#2E2E2C]/60 hover:text-[#2E2E2C]'
                      }`}
                    >
                      Presencial (Maceió)
                    </button>
                  </div>
                </div>

                {/* Main Client Goal */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#2E2E2C]/80 uppercase tracking-wider">
                    Qual seu principal objetivo?
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#7E8F7C]/30 bg-white text-[#2E2E2C] text-sm focus:border-[#7E8F7C] outline-none transition duration-200"
                  >
                    {GOALS.map((goal, index) => (
                      <option key={index} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Custom Message */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-[#2E2E2C]/80 uppercase tracking-wider">
                    Mensagem Adicional (Opcional)
                  </label>
                  <textarea
                    name="customMessage"
                    rows={2}
                    value={formData.customMessage}
                    onChange={handleInputChange}
                    placeholder="Conte brevemente sobre sua rotina, dores ou expectativas..."
                    className="w-full px-4 py-3 rounded-lg border border-[#7E8F7C]/30 bg-white text-[#2E2E2C] text-sm focus:border-[#7E8F7C] outline-none transition duration-200"
                  />
                </div>

                {/* Practicality Notice */}
                <div className="flex items-start gap-3 p-3 bg-[#7E8F7C]/5 rounded-lg border border-[#7E8F7C]/15">
                  <Shield className="h-4 w-4 text-[#7E8F7C] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-[#2E2E2C]/70 leading-relaxed">
                    A Nutri preza pela segurança de seus dados. Ao clicar abaixo, a conversa iniciará diretamente no aplicativo seguro do WhatsApp.
                  </p>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-[#7E8F7C] hover:bg-[#6C7C6B] text-white py-3.5 px-6 rounded-lg font-medium text-sm transition-all duration-200 shadow-md flex items-center justify-center gap-2 hover:-translate-y-px cursor-pointer"
                  id="submit-whatsapp-btn"
                >
                  <Smartphone className="h-4 w-4" />
                  Confirmar e Enviar via WhatsApp
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

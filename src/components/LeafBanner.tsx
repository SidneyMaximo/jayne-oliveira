import { motion } from 'motion/react';

export default function LeafBanner() {
  return (
    <section className="relative h-64 md:h-96 overflow-hidden bg-[#222523]" id="leaf-banner">
      {/* Absolute Background image */}
      <img
        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1600"
        alt="Folhas verdes escuras tropicais close up"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover opacity-45 select-none"
      />
      {/* Elegant dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#222523]/80 via-transparent to-[#222523]/85" />
      
      {/* Content for visual accent */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <span className="block h-[1px] w-12 bg-[#7E8F7C]/40 mx-auto mb-4" />
          <p className="font-serif text-[#EADDC9] italic font-light text-lg md:text-2xl leading-relaxed">
            "A nutrição que transforma respeita a sua história, o seu tempo e a sua individualidade."
          </p>
          <span className="block h-[1px] w-12 bg-[#7E8F7C]/40 mx-auto mt-4" />
        </motion.div>
      </div>
    </section>
  );
}

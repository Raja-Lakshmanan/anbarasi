import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function AboutImageReveal() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative rounded-sm overflow-hidden premium-image-frame group border border-[#C8A45D]/20 shadow-2xl">
      {/* FULL COLOR Photograph — NO GRAYSCALE FILTER */}
      <motion.img
        src="/photo/anbarasi2.jpeg"
        alt="Anbarasi - MBA Professional"
        initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 1.03, opacity: 0.95 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="w-full aspect-[4/6] object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
      />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-50 pointer-events-none z-10" />

      {/* Subtle Top Glass Ambient Highlight */}
      <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none z-10" />

      {/* Gold Corner Accents */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#C8A45D]/60 z-10" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#C8A45D]/60 z-10" />

      {/* Liquid Glass Cover Layer — Editorial Curtain Reveal */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: 'top' }}
          className="absolute inset-0 z-20 pointer-events-none bg-[#0F0F0F]/90 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center p-6 text-center"
        >
          {/* Subtle Liquid Gold Ambient Flare */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#C8A45D]/[0.08] via-transparent to-[#C8A45D]/[0.04]" />
          <div className="w-12 h-[1px] bg-[#C8A45D]/50 mb-3" />
          <span className="text-[10px] tracking-[0.3em] font-medium text-[#C8A45D]/70 uppercase">ANBARASI</span>
        </motion.div>
      )}

      {/* Glass Reflection Sweep (Plays once after curtain lifts) */}
      {!shouldReduceMotion && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          whileInView={{ x: '200%', opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.3, delay: 0.35, ease: 'easeInOut' }}
          className="absolute inset-0 z-15 bg-gradient-to-r from-transparent via-white/[0.14] to-transparent transform -skew-x-12 pointer-events-none"
        />
      )}
    </div>
  );
}

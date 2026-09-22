import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ number, title, subtitle, centered = false }) {
  return (
    <div className={`mb-14 md:mb-20 ${centered ? 'text-center' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="flex items-center gap-3 text-xs tracking-[0.3em] font-semibold text-[#C8A45D]/80 uppercase mb-4"
      >
        <span>{number}</span>
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="h-[1px] bg-[#C8A45D]/40 inline-block"
        />
        <span>EXECUTIVE PORTFOLIO</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="font-serif-editorial text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F2F0EA] font-normal leading-tight"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-[#B8B8B8] text-base sm:text-lg mt-4 max-w-2xl font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BarChart3, Megaphone, Users } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Compass: Compass,
  BarChart3: BarChart3,
  Megaphone: Megaphone,
  Users: Users
};

export default function Expertise() {
  const { expertise } = portfolioData;

  return (
    <section id="expertise" className="py-28 bg-[#080808] border-b border-[#171717] relative grain-texture bg-depth-layer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <SectionHeader
          number="04 / EXPERTISE"
          title="What I Bring"
          subtitle="Core executive competencies across strategic management, analytics, and leadership."
        />

        {/* 4-Card Editorial Grid (2x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Compass;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card p-8 rounded-sm relative group glass-light-reflection flex flex-col justify-between overflow-hidden"
              >
                {/* Top Animated Gold Line */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#C8A45D] to-[#E1C37A] group-hover:w-full transition-all duration-500" />

                <div className="space-y-6">
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-serif-editorial text-3xl font-bold text-gold-gradient">
                      {item.number}
                    </span>
                    <div className="p-3 glass-surface rounded-sm text-[#C8A45D] group-hover:bg-[#C8A45D]/90 group-hover:text-[#080808] transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-serif-editorial text-2xl text-[#F2F0EA] group-hover:text-[#C8A45D] group-hover:translate-x-1 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#B8B8B8] font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Subtle Bottom Gold Bar indicator */}
                <div className="pt-6 mt-6 border-t border-white/[0.05] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#777777] group-hover:text-[#C8A45D] transition-colors">
                  <span>EXECUTIVE PILLAR</span>
                  <span>CORE COMPETENCY</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

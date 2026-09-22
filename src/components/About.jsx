import React from 'react';
import { motion } from 'framer-motion';
import { Quote, CheckCircle2, GraduationCap } from 'lucide-react';
import SectionHeader from './SectionHeader';
import AboutImageReveal from './AboutImageReveal';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about, profile } = portfolioData;

  return (
    <section id="about" className="py-28 bg-[#080808] border-b border-[#171717] relative grain-texture bg-depth-layer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <SectionHeader
          number={`${about.sectionNumber} / ABOUT`}
          title={about.title}
          subtitle={about.headline}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: Lifestyle Portrait + Quote Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Image Container — SPECIAL EDITORIAL REVEAL */}
            <AboutImageReveal />

            {/* Editorial Quote Box — Glass Treatment */}
            <div className="p-6 glass-card rounded-sm relative border-[#C8A45D]/20">
              <Quote className="w-8 h-8 text-[#C8A45D]/20 absolute top-4 right-4" />
              <p className="font-serif-editorial text-xl text-[#F2F0EA] italic leading-relaxed">
                "{about.quote}"
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#C8A45D]" />
                <span className="text-xs tracking-widest text-[#C8A45D] uppercase font-semibold">
                  {profile.name} — LEADERSHIP PHILOSOPHY
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Professional Bio & Career Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-5 text-[#B8B8B8] text-base sm:text-lg leading-relaxed font-light">
              {about.bioParagraphs.map((para, idx) => (
                <p key={idx} className={idx === 0 ? 'text-[#F2F0EA] font-normal text-lg sm:text-xl' : ''}>
                  {para}
                </p>
              ))}
            </div>

            {/* Core Values / Strategic Focus Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#242424]">
              <div className="p-5 glass-card rounded-sm space-y-2 glass-light-reflection">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F2F0EA]">
                  <CheckCircle2 className="w-4 h-4 text-[#C8A45D]" />
                  <span>Analytical Rigor</span>
                </div>
                <p className="text-xs text-[#777777] font-light leading-relaxed">
                  Grounded in statistical validation, dynamic financial modeling, and evidence-driven frameworks.
                </p>
              </div>

              <div className="p-5 glass-card rounded-sm space-y-2 glass-light-reflection">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F2F0EA]">
                  <GraduationCap className="w-4 h-4 text-[#C8A45D]" />
                  <span>Strategic Vision</span>
                </div>
                <p className="text-xs text-[#777777] font-light leading-relaxed">
                  Connecting macro industry trends to operational execution for long-term value creation.
                </p>
              </div>
            </div>

            {/* Statistics Metric Row */}
            <div className="pt-6 border-t border-[#242424]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {about.stats.map((stat) => (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                    className="space-y-1"
                  >
                    <div className="font-serif-editorial text-3xl sm:text-4xl font-bold text-gold-gradient">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#777777] uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

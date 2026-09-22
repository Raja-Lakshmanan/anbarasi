import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Briefcase, Award, ShieldCheck, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { hero, profile } = portfolioData;
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-[#080808] grain-texture">
      {/* Background Accent Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C8A45D]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT COLUMN: Editorial Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 z-10">
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full border border-[#C8A45D]/30 bg-[#0D0D0D]/80 text-[11px] tracking-[0.25em] font-semibold text-[#C8A45D] uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-[#C8A45D] animate-pulse" />
              {hero.eyebrow}
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl text-[#F2F0EA] font-normal leading-[1.05] tracking-tight">
                {hero.headlinePart1} <br />
                <span className="italic text-gold-gradient font-light">{hero.headlinePart2}</span> <br />
                {hero.headlinePart3}
              </h1>
            </motion.div>

            {/* Supporting Sub-line */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[#B8B8B8] text-base sm:text-lg max-w-xl font-light leading-relaxed border-l-2 border-[#C8A45D]/40 pl-4 py-1"
            >
              {hero.supportingLine}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('work')}
                className="px-7 py-3.5 text-xs font-semibold tracking-widest text-[#080808] bg-gradient-to-r from-[#C8A45D] to-[#E1C37A] rounded-sm hover:brightness-110 transition-all flex items-center gap-2 group shadow-lg shadow-[#C8A45D]/15"
              >
                <span>{hero.primaryCTA}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('credentials')}
                className="px-7 py-3.5 text-xs font-semibold tracking-widest text-[#F2F0EA] bg-[#0D0D0D] border border-[#242424] hover:border-[#C8A45D]/60 rounded-sm hover:text-[#C8A45D] transition-all"
              >
                {hero.secondaryCTA}
              </button>
            </motion.div>

            {/* University Tag */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center gap-6 pt-4 text-xs text-[#777777]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                <span>{profile.degree}</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#242424]" />
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C8A45D]" />
                <span>{profile.university}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Executive Portrait Card */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Gold Framing Border */}
              <div className="absolute -inset-2 rounded-sm border border-[#C8A45D]/30 bg-gradient-to-br from-[#C8A45D]/10 to-transparent pointer-events-none transform translate-x-2 translate-y-2" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-[#0D0D0D] border border-[#242424] group shadow-2xl">
                {/* Visual Image / High Quality Unsplash Executive Portrait */}
                <img
                  src="/photo/anbarasi1.jpeg"
                  alt="Anbarasi - MBA Professional"
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ${
                    imageLoaded ? 'opacity-90' : 'opacity-0'
                  }`}
                />

                {/* Fallback canvas background if image is loading */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0D0D0D] p-6 text-center">
                    <div className="w-24 h-24 rounded-full border border-[#C8A45D]/40 bg-[#171717] flex items-center justify-center font-serif-editorial text-3xl text-[#C8A45D] mb-4">
                      {profile.initials}
                    </div>
                    <p className="text-xs text-[#777777] uppercase tracking-widest">{profile.name}</p>
                    <p className="text-[10px] text-[#C8A45D] mt-1">{profile.displayTitle}</p>
                  </div>
                )}

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                {/* Premium Editorial Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 pt-16 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-transparent">
                  <h2 className="font-serif-editorial text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-light text-[#F2F0EA] tracking-[0.15em] uppercase leading-none">
                    ANBARASI
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-6 h-[1px] bg-[#C8A45D]" />
                    <p className="text-[10px] tracking-[0.25em] text-[#C8A45D] uppercase font-semibold">
                      {profile.displayTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Metadata Badges */}
              {hero.floatingBadges.map((badge, idx) => {
                const positions = [
                  "-top-4 -left-4",
                  "top-12 -right-4",
                  "bottom-24 -left-6",
                  "-bottom-4 right-8"
                ];
                return (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className={`absolute ${positions[idx]} px-3 py-1.5 bg-[#080808]/90 backdrop-blur-md border border-[#C8A45D]/40 rounded-sm text-[10px] tracking-[0.2em] font-semibold text-[#C8A45D] shadow-xl pointer-events-none hidden sm:block`}
                  >
                    {badge}
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-4 flex justify-between items-center text-xs text-[#777777]">
        <button
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-[#B8B8B8] hover:text-[#C8A45D] transition-colors focus:outline-none uppercase"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#C8A45D] animate-bounce" />
        </button>

        <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] text-[#777777] uppercase">
          EST. 2026 / EXECUTIVE PORTFOLIO
        </span>
      </div>

      {/* Scrolling Marquee Ticker */}
      <div className="w-full bg-[#0D0D0D] border-y border-[#242424] py-3.5 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...hero.tickerItems, ...hero.tickerItems].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-6 px-6 text-xs tracking-[0.25em] font-medium text-[#B8B8B8] uppercase">
              <span>{item}</span>
              <span className="text-[#C8A45D]">—</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

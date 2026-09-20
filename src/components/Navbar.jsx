import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { id: 'hero', number: '01', label: 'HOME' },
  { id: 'about', number: '02', label: 'ABOUT' },
  { id: 'work', number: '03', label: 'WORK' },
  { id: 'expertise', number: '04', label: 'EXPERTISE' },
  { id: 'insights', number: '05', label: 'INSIGHTS' },
  { id: 'credentials', number: '06', label: 'CREDENTIALS' },
  { id: 'contact', number: '07', label: 'CONTACT' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Opacity change on scroll
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll Progress Calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Active Section Detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#242424]/60 py-4'
            : 'bg-transparent py-6'
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#C8A45D] to-[#E1C37A] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-sm bg-[#171717] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D] font-serif-editorial text-xl font-bold group-hover:border-[#C8A45D] transition-colors">
              {portfolioData.profile.initials}
            </div>
            <div>
              <span className="block text-sm font-semibold tracking-wider text-[#F2F0EA] group-hover:text-[#C8A45D] transition-colors">
                {portfolioData.profile.name}
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-[#777777] uppercase font-light">
                MBA PROFESSIONAL
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs tracking-[0.2em] font-medium transition-all relative py-1 focus:outline-none ${
                  activeSection === item.id
                    ? 'text-[#C8A45D]'
                    : 'text-[#B8B8B8] hover:text-[#F2F0EA]'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C8A45D]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Gold CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest text-[#080808] bg-gradient-to-r from-[#C8A45D] to-[#E1C37A] rounded-sm hover:brightness-110 transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#C8A45D]/10"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F2F0EA] hover:text-[#C8A45D] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto lg:hidden grain-texture"
          >
            <div className="pt-20">
              <div className="text-[10px] tracking-[0.3em] font-semibold text-[#C8A45D] uppercase mb-8 border-b border-[#242424] pb-4">
                NAVIGATION DIRECTORY
              </div>
              <ul className="space-y-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-baseline gap-4 w-full text-left font-serif-editorial text-3xl sm:text-4xl hover:text-[#C8A45D] transition-colors group ${
                        activeSection === item.id ? 'text-[#C8A45D]' : 'text-[#F2F0EA]'
                      }`}
                    >
                      <span className="text-xs font-sans tracking-widest text-[#C8A45D] font-semibold">
                        {item.number}
                      </span>
                      <span>{item.label}</span>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="pt-12 border-t border-[#242424] mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#777777] font-light">Direct Contact</p>
                <a
                  href={`mailto:${portfolioData.profile.email}`}
                  className="text-sm font-medium text-[#C8A45D] hover:underline"
                >
                  {portfolioData.profile.email}
                </a>
              </div>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto text-center px-6 py-3 text-xs font-semibold tracking-widest text-[#080808] bg-[#C8A45D] rounded-sm"
              >
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

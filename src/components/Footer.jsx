import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'work', label: 'WORK' },
  { id: 'expertise', label: 'EXPERTISE' },
  { id: 'insights', label: 'INSIGHTS' },
  { id: 'credentials', label: 'CREDENTIALS' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Footer() {
  const { profile } = portfolioData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-[#171717] relative grain-texture">
      {/* Subtle Gold Divider */}
      <div className="section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#171717]">
          
          {/* Left Name & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm glass-surface flex items-center justify-center text-[#C8A45D] font-serif-editorial font-bold">
                {profile.initials}
              </div>
              <span className="font-serif-editorial text-2xl font-semibold text-[#F2F0EA]">
                {profile.name}
              </span>
            </div>
            <p className="text-xs tracking-[0.2em] text-[#777777] uppercase font-light">
              MBA PROFESSIONAL — GNANAM SCHOOL OF BUSINESS
            </p>
            <p className="text-[10px] tracking-[0.15em] text-[#777777]/70 font-light mt-1">
              Karanthai, Thanjavur, Tamil Nadu, India
            </p>
          </div>

          {/* Right Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs tracking-[0.2em] font-medium text-[#B8B8B8]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="hover:text-[#C8A45D] transition-colors focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 text-[#B8B8B8]">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-[#C8A45D] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-2 hover:text-[#C8A45D] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 text-[#C8A45D] hover:underline focus:outline-none"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

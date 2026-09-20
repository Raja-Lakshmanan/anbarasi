import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle, Lightbulb, BarChart, Layers, Target, ShieldCheck } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080808]/90 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0D0D0D] border border-[#C8A45D]/40 rounded-sm shadow-2xl overflow-y-auto z-10 flex flex-col grain-texture"
        >
          {/* Header Banner */}
          <div className="sticky top-0 z-20 bg-[#080808]/95 backdrop-blur-md border-b border-[#242424] p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#171717] border border-[#C8A45D]/40 text-[#C8A45D] text-xs font-semibold tracking-widest rounded-sm uppercase">
                {project.category}
              </span>
              <span className="text-xs text-[#777777] tracking-widest uppercase">
                CASE STUDY {project.number}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#B8B8B8] hover:text-[#C8A45D] hover:bg-[#171717] rounded-sm transition-colors"
              aria-label="Close Case Study Details"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-10 space-y-10">

            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#F2F0EA]">
                {project.title}
              </h2>
              <p className="text-lg text-[#C8A45D] font-light italic">
                {project.subtitle}
              </p>
            </div>

            {/* Featured Image */}
            <div className="relative rounded-sm overflow-hidden border border-[#242424] max-h-[350px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />
            </div>

            {/* Key Meta Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 bg-[#171717]/60 border border-[#242424] rounded-sm text-xs">
              <div>
                <span className="block text-[#777777] font-semibold uppercase tracking-wider mb-1">Role</span>
                <span className="text-[#F2F0EA] font-medium">{project.role}</span>
              </div>
              <div>
                <span className="block text-[#777777] font-semibold uppercase tracking-wider mb-1">Tools & Methodology</span>
                <span className="text-[#F2F0EA] font-medium">{project.tools.join(' • ')}</span>
              </div>
              <div>
                <span className="block text-[#777777] font-semibold uppercase tracking-wider mb-1">Key Outcome</span>
                <span className="text-[#C8A45D] font-medium">{project.outcome}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-xs tracking-[0.25em] font-semibold text-[#C8A45D] uppercase flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>EXECUTIVE OVERVIEW</span>
              </h3>
              <p className="text-[#B8B8B8] text-base leading-relaxed">
                {project.details.overview}
              </p>
            </div>

            {/* Business Problem */}
            <div className="space-y-3 p-6 bg-[#171717]/40 border-l-2 border-[#C8A45D] rounded-r-sm">
              <h3 className="text-xs tracking-[0.25em] font-semibold text-[#F2F0EA] uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                <span>THE BUSINESS CHALLENGE</span>
              </h3>
              <p className="text-[#B8B8B8] text-sm sm:text-base leading-relaxed">
                {project.details.businessProblem}
              </p>
            </div>

            {/* Research & Strategy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-[#080808] border border-[#242424] rounded-sm space-y-3">
                <h4 className="text-xs tracking-widest text-[#C8A45D] font-semibold uppercase flex items-center gap-2">
                  <BarChart className="w-4 h-4" />
                  <span>RESEARCH & DATA MINING</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
                  {project.details.research}
                </p>
              </div>

              <div className="p-6 bg-[#080808] border border-[#242424] rounded-sm space-y-3">
                <h4 className="text-xs tracking-widest text-[#C8A45D] font-semibold uppercase flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>STRATEGIC FRAMEWORK</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
                  {project.details.strategy}
                </p>
              </div>
            </div>

            {/* Quantifiable Results */}
            <div className="space-y-4">
              <h3 className="text-xs tracking-[0.25em] font-semibold text-[#C8A45D] uppercase flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>QUANTIFIABLE IMPACT & RESULTS</span>
              </h3>
              <ul className="space-y-3">
                {project.details.results.map((res, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-[#171717]/50 border border-[#242424] rounded-sm text-sm text-[#F2F0EA]">
                    <span className="w-2 h-2 rounded-full bg-[#C8A45D] mt-1.5 flex-shrink-0" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Learnings */}
            <div className="p-6 bg-[#080808] border border-[#C8A45D]/40 rounded-sm space-y-2">
              <h4 className="text-xs tracking-widest text-[#C8A45D] font-semibold uppercase flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-[#C8A45D]" />
                <span>KEY STRATEGIC TAKEAWAY</span>
              </h4>
              <p className="text-sm text-[#F2F0EA] font-serif-editorial italic">
                "{project.details.keyLearnings}"
              </p>
            </div>

          </div>

          {/* Footer Close Button */}
          <div className="p-6 bg-[#080808] border-t border-[#242424] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold tracking-widest text-[#080808] bg-[#C8A45D] rounded-sm hover:brightness-110 transition-all"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Calendar } from 'lucide-react';

export default function ArticleModal({ article, onClose }) {
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

  if (!article) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080808]/90"
          style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-3xl max-h-[90vh] glass-card border-[#C8A45D]/30 rounded-sm shadow-2xl overflow-y-auto z-10 flex flex-col grain-texture"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 glass-nav border-b border-white/[0.06] p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 glass-pill text-[#C8A45D] text-xs font-semibold tracking-widest rounded-sm uppercase">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-xs text-[#777777]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#C8A45D]" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                  {article.readTime}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#B8B8B8] hover:text-[#C8A45D] hover:bg-white/[0.04] rounded-sm transition-colors"
              aria-label="Close Article"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-10 space-y-8">
            <div className="space-y-4 border-b border-white/[0.06] pb-6">
              <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#F2F0EA] leading-tight">
                {article.title}
              </h2>
              <p className="text-base text-[#B8B8B8] font-light leading-relaxed italic border-l-2 border-[#C8A45D] pl-4">
                "{article.excerpt}"
              </p>
            </div>

            <div className="prose prose-invert max-w-none text-[#B8B8B8] text-base leading-relaxed space-y-6 font-light">
              {article.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="font-serif-editorial text-2xl text-[#F2F0EA] font-semibold pt-4">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 glass-nav border-t border-white/[0.06] flex items-center justify-between">
            <span className="text-xs text-[#777777] uppercase tracking-widest font-medium">
              EXECUTIVE BUSINESS PERSPECTIVE
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2 text-xs font-semibold tracking-widest btn-glass-primary rounded-sm"
            >
              CLOSE ARTICLE
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

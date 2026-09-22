import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Calendar, Building2, User, Key, FileCheck } from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
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

  if (!certificate) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
          className="relative w-full max-w-4xl glass-card border-[#C8A45D]/40 rounded-sm shadow-2xl p-5 sm:p-8 z-10 space-y-6 grain-texture max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C8A45D]" />
              <span className="text-xs font-semibold tracking-widest text-[#C8A45D] uppercase">
                OFFICIAL CERTIFICATE PREVIEW
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#B8B8B8] hover:text-[#C8A45D] hover:bg-white/[0.04] rounded-sm transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Image Frame — Glass with Gold Border */}
          {certificate.image && (
            <div className="w-full premium-image-frame rounded-sm overflow-hidden p-2 sm:p-4 flex items-center justify-center max-h-[50vh] sm:max-h-[60vh] relative group">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="max-w-full max-h-[46vh] sm:max-h-[56vh] object-contain rounded-sm shadow-2xl"
              />
            </div>
          )}

          {/* Credential Details Breakdown */}
          <div className="space-y-4 glass-surface p-5 rounded-sm">
            <div className="border-b border-white/[0.05] pb-3">
              <span className="text-[10px] tracking-[0.2em] text-[#C8A45D] uppercase font-semibold">
                CREDENTIAL TITLE
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#F2F0EA] font-semibold mt-1">
                {certificate.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#C8A45D] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#777777] block text-[10px] uppercase tracking-wider">ISSUED BY</span>
                  <span className="text-[#F2F0EA] font-medium">{certificate.issuer}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <User className="w-4 h-4 text-[#C8A45D] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#777777] block text-[10px] uppercase tracking-wider">RECIPIENT</span>
                  <span className="text-[#F2F0EA] font-medium">{certificate.recipient}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-[#C8A45D] mt-0.5 shrink-0" />
                <div>
                  <span className="text-[#777777] block text-[10px] uppercase tracking-wider">DATE ISSUED</span>
                  <span className="text-[#F2F0EA] font-medium">{certificate.date || certificate.year}</span>
                </div>
              </div>

              {certificate.credentialId && (
                <div className="flex items-start gap-2.5 sm:col-span-2 md:col-span-1">
                  <Key className="w-4 h-4 text-[#C8A45D] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[#777777] block text-[10px] uppercase tracking-wider">CREDENTIAL ID</span>
                    <span className="text-[#C8A45D] font-mono font-semibold">{certificate.credentialId}</span>
                  </div>
                </div>
              )}

              {certificate.signatory && (
                <div className="flex items-start gap-2.5 sm:col-span-2 md:col-span-2">
                  <FileCheck className="w-4 h-4 text-[#C8A45D] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-[#777777] block text-[10px] uppercase tracking-wider">SIGNATORY</span>
                    <span className="text-[#F2F0EA] font-medium">{certificate.signatory}</span>
                  </div>
                </div>
              )}
            </div>

            {certificate.description && (
              <div className="pt-3 border-t border-white/[0.05]">
                <span className="text-[10px] tracking-widest text-[#777777] uppercase font-semibold block mb-1">
                  DESCRIPTION & SCOPE:
                </span>
                <p className="text-xs text-[#B8B8B8] font-light leading-relaxed">
                  {certificate.description}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-3">
              {certificate.image && (
                <a
                  href={certificate.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 btn-glass-secondary text-[#F2F0EA] text-xs font-semibold tracking-widest rounded-sm flex items-center gap-2"
                >
                  <span>OPEN FULL SIZE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {certificate.verifyUrl && (
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 btn-glass-secondary text-[#C8A45D] text-xs font-semibold tracking-widest rounded-sm flex items-center gap-2 border-[#C8A45D]/30"
                >
                  <span>VERIFY ONLINE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-semibold tracking-widest btn-glass-primary rounded-sm"
            >
              CLOSE PREVIEW
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

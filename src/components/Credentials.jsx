import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, ShieldCheck, CheckCircle2, FileText, ChevronRight, Eye, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import CertificateModal from './CertificateModal';
import { portfolioData } from '../data/portfolioData';

export default function Credentials() {
  const { credentials } = portfolioData;
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="credentials" className="py-24 bg-[#080808] border-b border-[#171717] relative grain-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          number="06 / CREDENTIALS"
          title="Education & Credentials"
          subtitle="Academic foundation, professional certifications, and skill development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* LEFT COLUMN: Education & Experience Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] font-semibold text-[#C8A45D] uppercase pb-2 border-b border-[#242424]">
              <GraduationCap className="w-4 h-4 text-[#C8A45D]" />
              <span>ACADEMIC & EXECUTIVE TIMELINE</span>
            </div>

            <div className="relative border-l border-[#242424] pl-6 ml-3 space-y-10">
              {credentials.education.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Gold Node */}
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#080808] border-2 border-[#C8A45D] group-hover:bg-[#C8A45D] transition-colors" />

                  <div className="bg-[#0D0D0D] border border-[#242424] hover:border-[#C8A45D]/40 p-6 rounded-sm space-y-2 transition-all">
                    <span className="text-xs font-semibold tracking-wider text-[#C8A45D] uppercase block">
                      {item.year}
                    </span>
                    <h4 className="font-serif-editorial text-2xl text-[#F2F0EA]">
                      {item.degree}
                    </h4>
                    <p className="text-xs text-[#777777] uppercase tracking-wider font-medium">
                      {item.institution}{item.location ? ` — ${item.location}` : ''}
                    </p>
                    {item.details && (
                      <p className="text-sm text-[#B8B8B8] font-light leading-relaxed pt-2">
                        {item.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Honors & Achievements */}
            <div className="pt-6 space-y-6">
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] font-semibold text-[#C8A45D] uppercase pb-2 border-b border-[#242424]">
                <Award className="w-4 h-4 text-[#C8A45D]" />
                <span>HONORS & COMPETITION AWARDS</span>
              </div>

              <div className="space-y-4">
                {credentials.achievements.map((ach) => (
                  <div key={ach.id} className="p-5 bg-[#0D0D0D] border border-[#242424] rounded-sm space-y-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-serif-editorial text-lg text-[#F2F0EA]">
                        {ach.title}
                      </h5>
                      <span className="text-xs font-semibold text-[#C8A45D]">
                        {ach.year}
                      </span>
                    </div>
                    <p className="text-xs text-[#777777] uppercase tracking-wider">
                      {ach.organization}
                    </p>
                    <p className="text-xs text-[#B8B8B8] font-light leading-relaxed pt-1">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Document Certifications & Skill Matrix */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 text-xs tracking-[0.25em] font-semibold text-[#C8A45D] uppercase pb-2 border-b border-[#242424]">
              <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
              <span>VERIFIED CERTIFICATIONS</span>
            </div>

            {/* Certifications Cards Grid */}
            <div className="grid grid-cols-1 gap-6">
              {credentials.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-6 bg-[#0D0D0D] border border-[#242424] hover:border-[#C8A45D]/60 rounded-sm space-y-5 transition-all shadow-xl"
                >
                  {/* Top Image Preview Frame */}
                  {cert.image && (
                    <div
                      onClick={() => setSelectedCert(cert)}
                      className="relative aspect-[16/10] w-full bg-[#080808] border border-[#C8A45D]/30 group-hover:border-[#C8A45D]/70 rounded-sm overflow-hidden cursor-pointer flex items-center justify-center p-3 transition-all group/frame"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-contain filter grayscale-0 group-hover/frame:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#080808]/40 opacity-0 group-hover/frame:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <span className="px-3 py-1.5 bg-[#080808]/90 border border-[#C8A45D] text-[#C8A45D] text-[10px] tracking-[0.2em] font-semibold uppercase rounded-sm flex items-center gap-1.5 shadow-lg">
                          <Eye className="w-3.5 h-3.5" />
                          <span>ENLARGE CERTIFICATE</span>
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Card Content & Metadata */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] tracking-widest text-[#777777] uppercase border-b border-[#171717] pb-2">
                      <span className="text-[#C8A45D] font-semibold">{cert.number}</span>
                      <span>DATE: {cert.date || cert.year}</span>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-[0.2em] text-[#777777] uppercase font-medium block">
                        CERTIFICATE
                      </span>
                      <h5 className="font-serif-editorial text-2xl text-[#F2F0EA] hover:text-[#C8A45D] transition-colors leading-snug">
                        {cert.title}
                      </h5>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                      <div>
                        <span className="text-[#777777] block text-[10px] uppercase tracking-wider">ISSUED BY</span>
                        <span className="text-[#F2F0EA] font-medium">{cert.issuer}</span>
                      </div>
                      <div>
                        <span className="text-[#777777] block text-[10px] uppercase tracking-wider">RECIPIENT</span>
                        <span className="text-[#F2F0EA] font-medium">{cert.recipient}</span>
                      </div>
                      {cert.credentialId && (
                        <div className="sm:col-span-2 pt-1">
                          <span className="text-[#777777] block text-[10px] uppercase tracking-wider">CREDENTIAL ID</span>
                          <span className="text-[#C8A45D] font-mono text-xs font-semibold">{cert.credentialId}</span>
                        </div>
                      )}
                    </div>

                    {cert.description && (
                      <p className="text-xs text-[#B8B8B8] font-light leading-relaxed pt-2 border-t border-[#171717]">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-[#171717] flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="py-2.5 px-4 bg-[#171717] border border-[#242424] hover:bg-[#C8A45D] hover:text-[#080808] hover:border-[#C8A45D] text-[#F2F0EA] text-xs font-semibold tracking-widest transition-all rounded-sm flex items-center gap-2"
                    >
                      <span>VIEW CERTIFICATE</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 text-xs tracking-widest text-[#C8A45D] hover:underline font-semibold flex items-center gap-1.5"
                      >
                        <span>VERIFY CREDENTIAL</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Matrix */}
            <div className="pt-6 space-y-6">
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] font-semibold text-[#C8A45D] uppercase pb-2 border-b border-[#242424]">
                <FileText className="w-4 h-4 text-[#C8A45D]" />
                <span>EXECUTIVE SKILLS MATRIX</span>
              </div>

              <div className="space-y-6">
                {credentials.skillCategories.map((sc, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-xs font-semibold text-[#777777] uppercase tracking-widest block">
                      {sc.category}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {sc.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 bg-[#0D0D0D] border border-[#242424] hover:border-[#C8A45D]/40 text-[#F2F0EA] text-xs rounded-sm transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </section>
  );
}

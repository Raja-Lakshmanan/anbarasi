import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ProjectModal from './ProjectModal';
import { portfolioData } from '../data/portfolioData';

export default function Work() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const categories = ['ALL', 'STRATEGY', 'MARKETING', 'BUSINESS ANALYTICS'];

  const filteredProjects = filter === 'ALL'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-28 bg-[#080808] border-b border-[#171717] relative grain-texture bg-depth-layer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="03 / WORK"
          title="Selected Work"
          subtitle="Projects, academic work, business case studies and professional initiatives."
        />

        {/* Category Filters — Glass Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs tracking-widest font-semibold transition-all rounded-sm uppercase ${
                filter === cat
                  ? 'btn-glass-primary'
                  : 'glass-surface text-[#B8B8B8] hover:text-[#F2F0EA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Study Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card rounded-sm overflow-hidden flex flex-col justify-between group glass-light-reflection"
            >
              <div>
                {/* Card Top Image — FULL COLOR, NO GRAYSCALE */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-70" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-2.5 py-1 glass-pill text-[#C8A45D] text-[10px] font-semibold tracking-widest rounded-sm uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Number */}
                  <div className="absolute top-4 right-4 font-serif-editorial text-2xl font-bold text-[#C8A45D]/70">
                    {project.number}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div className="space-y-1">
                    <h3 className="font-serif-editorial text-2xl text-[#F2F0EA] group-hover:text-[#C8A45D] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#777777] uppercase tracking-wider font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#B8B8B8] font-light leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Role & Outcome box */}
                  <div className="pt-3 border-t border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#777777]">Role:</span>
                      <span className="text-[#F2F0EA] font-medium">{project.role}</span>
                    </div>

                    <div className="p-2.5 glass-surface rounded-sm text-[11px] text-[#C8A45D] font-medium leading-snug">
                      💡 {project.outcome}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 text-xs font-semibold tracking-widest text-[#F2F0EA] glass-surface group-hover:bg-[#C8A45D]/90 group-hover:text-[#080808] group-hover:border-[#C8A45D] transition-all rounded-sm flex items-center justify-center gap-2"
                >
                  <span>VIEW CASE STUDY</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

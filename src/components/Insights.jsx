import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight, BookOpen, Calendar } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ArticleModal from './ArticleModal';
import { portfolioData } from '../data/portfolioData';

export default function Insights() {
  const { insights } = portfolioData;
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'STRATEGY', 'LEADERSHIP', 'MARKETING', 'ANALYTICS'];

  const filteredArticles = activeCategory === 'ALL'
    ? insights
    : insights.filter(a => a.category === activeCategory);

  const featuredArticle = filteredArticles.find(a => a.featured) || filteredArticles[0];
  const secondaryArticles = filteredArticles.filter(a => a.id !== featuredArticle?.id);

  return (
    <section id="insights" className="py-24 bg-[#080808] border-b border-[#171717] relative grain-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeader
          number="05 / INSIGHTS"
          title="Thoughts on Business"
          subtitle="Executive perspectives, strategic case analysis, and industry observations."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs tracking-widest font-semibold transition-all rounded-sm uppercase ${
                activeCategory === cat
                  ? 'bg-[#C8A45D] text-[#080808]'
                  : 'bg-[#0D0D0D] text-[#B8B8B8] border border-[#242424] hover:border-[#C8A45D]/40 hover:text-[#F2F0EA]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredArticles.length === 0 ? (
          <div className="py-12 text-center text-[#777777] text-sm">
            No insights found for category "{activeCategory}".
          </div>
        ) : (
          <div className="space-y-10">

            {/* Featured Large Article Card */}
            {featuredArticle && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedArticle(featuredArticle)}
                className="bg-[#0D0D0D] border border-[#242424] hover:border-[#C8A45D]/60 rounded-sm overflow-hidden p-8 sm:p-12 cursor-pointer group transition-all duration-500 hover:-translate-y-1 shadow-xl relative"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-3 py-1 bg-[#171717] border border-[#C8A45D]/40 text-[#C8A45D] text-[10px] font-semibold tracking-widest uppercase rounded-sm">
                    FEATURED ESSAY
                  </span>
                </div>

                <div className="max-w-3xl space-y-6">
                  <div className="flex items-center gap-4 text-xs text-[#777777]">
                    <span className="text-[#C8A45D] font-semibold tracking-widest uppercase">
                      {featuredArticle.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#C8A45D]" />
                      {featuredArticle.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-3xl sm:text-5xl text-[#F2F0EA] group-hover:text-[#C8A45D] transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-[#B8B8B8] text-base sm:text-lg font-light leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>

                  <div className="pt-4 flex items-center gap-2 text-xs tracking-widest font-semibold text-[#C8A45D] group-hover:translate-x-2 transition-transform">
                    <span>READ EXECUTIVE PERSPECTIVE</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Secondary Articles Grid */}
            {secondaryArticles.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {secondaryArticles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setSelectedArticle(article)}
                    className="bg-[#0D0D0D] border border-[#242424] hover:border-[#C8A45D]/60 rounded-sm p-8 cursor-pointer group transition-all duration-500 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs text-[#777777]">
                        <span className="text-[#C8A45D] font-semibold tracking-widest uppercase">
                          {article.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                          {article.readTime}
                        </span>
                      </div>

                      <h4 className="font-serif-editorial text-2xl text-[#F2F0EA] group-hover:text-[#C8A45D] transition-colors">
                        {article.title}
                      </h4>

                      <p className="text-sm text-[#B8B8B8] font-light leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-[#171717] flex items-center justify-between text-xs text-[#C8A45D] font-semibold tracking-widest">
                      <span>READ ESSAY</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

          </div>
        )}

      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </section>
  );
}

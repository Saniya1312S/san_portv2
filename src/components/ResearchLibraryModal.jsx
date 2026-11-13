import React, { useState } from 'react';
import { X, Search, BookOpen, ExternalLink, BookmarkCheck, Filter, Award } from 'lucide-react';
import { publications, publicationCategories } from '../data/publications';
import { profile } from '../data/profile';

export default function ResearchLibraryModal({ isOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  if (!isOpen) return null;

  const filteredPapers = publications.filter((pub) => {
    const matchesCategory = activeCategory === "All" || pub.category === activeCategory;
    const matchesSearch =
      !searchTerm.trim() ||
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.abstract.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#0c0e18] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl my-auto text-white max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-[#121524] border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Complete Research &amp; Publication Library</span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                  {publications.length} Papers Indexed
                </span>
              </h2>
              <p className="text-[11px] text-slate-400">
                Peer-reviewed papers, systematic reviews &amp; preprints on Google Scholar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profile.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 transition"
            >
              <span>Google Scholar</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-5 border-b border-slate-800 bg-[#0e111f] space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search publications by title, author, venue or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl bg-[#161a2e] border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {publicationCategories.map((cat) => {
              const count = cat === "All" ? publications.length : publications.filter(p => p.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-mono transition flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-600 text-white font-bold'
                      : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span className="text-[10px] opacity-75">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Publications List */}
        <div className="overflow-y-auto p-6 space-y-4 text-xs sm:text-sm">
          {filteredPapers.map((pub) => (
            <div
              key={pub.id}
              className="p-5 rounded-2xl bg-[#131626] border border-slate-800 hover:border-cyan-500/40 transition space-y-2 group"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                    {pub.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {pub.type} &bull; {pub.year}
                  </span>
                </div>
                {pub.featured && (
                  <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 flex items-center gap-1">
                    <Award className="w-3 h-3" /> Featured Paper
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                {pub.title}
              </h3>

              <div className="text-xs text-slate-400 font-mono">
                <span className="text-slate-300 font-medium">Authors: </span>
                {pub.authors}
              </div>

              <div className="text-xs text-cyan-400 font-medium">
                {pub.venue}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed pt-1">
                {pub.abstract}
              </p>

              <div className="pt-2 flex items-center justify-between border-t border-white/5 text-[11px] font-mono">
                <span className="text-slate-500">Indexed: Google Scholar (wh5CzfAAAAAJ)</span>
                <a
                  href={pub.scholarLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:underline font-semibold"
                >
                  <span>View Citation</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}

          {filteredPapers.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              No publications match your filter criteria.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#0a0c16] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Profile: https://scholar.google.com/citations?user=wh5CzfAAAAAJ&amp;hl=en</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

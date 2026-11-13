import React, { useState } from 'react';
import { BookOpen, ExternalLink, Search, BookmarkCheck, Sparkles, Filter, Link2 } from 'lucide-react';
import { publications } from '../data/publications';
import { profile } from '../data/profile';

export default function ResearchLibrary() {
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 7 Domain Filters as explicitly requested:
  // All, Artificial Intelligence, Business, ESG & Finance, Healthcare, New Technology Stack, Machine Learning
  const domainsList = [
    'All',
    'Artificial Intelligence',
    'Business',
    'ESG & Finance',
    'Healthcare',
    'New Technology Stack',
    'Machine Learning'
  ];

  const filteredPapers = publications.filter((paper) => {
    let matchesDomain = selectedDomain === 'All';

    if (!matchesDomain) {
      if (selectedDomain === 'Artificial Intelligence') {
        matchesDomain = paper.domains?.some(d => d === 'AI' || d === 'Artificial Intelligence');
      } else if (selectedDomain === 'New Technology Stack') {
        matchesDomain = paper.domains?.some(d => d === 'New Tech Stack' || d === 'New Technology Stack');
      } else {
        matchesDomain = paper.domains?.includes(selectedDomain);
      }
    }

    const matchesSearch = 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDomain && matchesSearch;
  });

  return (
    <section id="research" className="py-16 md:py-24 relative bg-[#090B12] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest">
              <span>DOMAIN-BASED RESEARCH LIBRARY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Research &amp; Publications
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              20+ peer-reviewed scientific papers organized across 6 interdisciplinary domains and indexed on Google Scholar.
            </p>
          </div>

          <a
            href={profile.googleScholar}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition shadow-md self-start sm:self-auto shadow-cyan-600/30"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Google Scholar (wh5CzfAAAAAJ)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Search & Domain Filter Bar */}
        <div className="space-y-4 mb-8">
          {/* Domain Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#111827] border border-slate-800">
            {domainsList.map((domain) => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  selectedDomain === domain
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search papers by title, author, venue, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#111827] border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredPapers.map((paper) => (
            <div
              key={paper.id}
              className="p-5 rounded-2xl bg-[#111827] border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-3 group shadow-md"
            >
              <div className="space-y-2">
                {/* Domain Badges + Year */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {paper.domains?.map((d) => (
                      <span
                        key={d}
                        className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                      >
                        {d}
                      </span>
                    ))}
                    {paper.connectedProject && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        Linked Project
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">{paper.year}</span>
                </div>

                {/* Paper Title */}
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {paper.title}
                </h3>

                {/* Authors */}
                <p className="text-[11px] font-mono text-slate-400 truncate">
                  {paper.authors}
                </p>

                {/* Venue */}
                <p className="text-xs text-slate-300 italic">
                  {paper.venue}
                </p>

                {/* Short Description */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {paper.description}
                </p>
              </div>

              {/* Card Footer: View Paper Action */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  Peer-Reviewed Proceeding
                </span>

                <a
                  href={paper.scholarLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span>View Paper</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredPapers.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-xs">
            No publications found matching &ldquo;{searchQuery}&rdquo; in domain &ldquo;{selectedDomain}&rdquo;.
          </div>
        )}

      </div>
    </section>
  );
}

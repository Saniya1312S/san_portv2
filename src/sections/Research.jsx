import React from 'react';
import { BookOpen, ExternalLink, BookmarkCheck } from 'lucide-react';
import { publications } from '../data/publications';
import { profile } from '../data/profile';

export default function Research({ onOpenLibrary }) {
  const featuredPapers = publications.slice(0, 8);

  return (
    <section id="research" className="py-16 md:py-24 relative bg-[#090B12] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest">
              <span>PEER-REVIEWED RESEARCH</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Research &amp; Publications
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              20+ verified scientific publications across 5G/6G networks, healthcare AI, and time-series econometrics indexed on Google Scholar.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <a
              href={profile.googleScholar}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 transition shadow-md"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Google Scholar</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onOpenLibrary}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition"
            >
              <span>View All 20+</span>
            </button>
          </div>
        </div>

        {/* Up to 8 Featured Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredPapers.map((paper, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                  <span>{paper.year}</span>
                  <span className="text-slate-500 text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/5">
                    Peer-Reviewed
                  </span>
                </div>

                <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {paper.title}
                </h3>

                <p className="text-[11px] font-mono text-slate-400">
                  {paper.venue}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">
                  {paper.citations ? `${paper.citations} citations` : 'Indexed Paper'}
                </span>
                
                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <span>Official Publication</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Publications Action Footer */}
        <div className="mt-8 p-4 rounded-2xl bg-[#111827] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-xs text-slate-400">
            Full publication catalog with 20 peer-reviewed papers indexed under Scholar ID <code className="text-slate-300 bg-white/5 px-1.5 py-0.5 rounded">wh5CzfAAAAAJ</code>.
          </div>
          <button
            onClick={onOpenLibrary}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition shrink-0"
          >
            <span>Open Publication Library</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

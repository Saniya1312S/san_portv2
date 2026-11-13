import React from 'react';
import { ArrowUp, RefreshCw, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer({ onSwitchProfile }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07090F] border-t border-slate-800 text-slate-400 text-xs py-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-black text-white uppercase tracking-wider">
              {profile.name}
            </div>
            <p className="text-xs text-slate-400">
              Data Analyst | Data Scientist | AI/ML Engineer &bull; Nagpur, India
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onSwitchProfile}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition text-xs font-mono"
            >
              <RefreshCw className="w-3 h-3 text-red-500" />
              <span>Switch Profile</span>
            </button>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 transition"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Saniya Saratkar. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition">LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition">GitHub</a>
            <a href={profile.googleScholar} target="_blank" rel="noreferrer" className="hover:text-white transition">Google Scholar</a>
            <a href={`mailto:${profile.email}`} className="hover:text-white transition">Email</a>
            <a href={profile.portfolioHome} target="_blank" rel="noreferrer" className="text-red-400 hover:text-white font-bold inline-flex items-center gap-1 transition">
              <span>Portfolio Home</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

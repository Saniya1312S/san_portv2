import React from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Wrench, ArrowRight, Layers, BookOpen } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const techs = project.technologies || project.allTechnologies || [];
  const highlights = project.highlights || [];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-[#0F1322] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl my-auto text-white max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with Screenshot */}
        <div className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden border-b border-slate-800">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1322] via-[#0F1322]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/90 text-slate-300 hover:text-white border border-white/10 transition"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Badge */}
          <div className="absolute bottom-4 left-6 right-6 space-y-1">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-red-600 text-white">
              {project.categoryLabel}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Problem → Approach → Tools → Result Body */}
        <div className="overflow-y-auto p-6 space-y-5 text-xs sm:text-sm text-slate-300">
          
          {/* Step 1: Problem */}
          {project.problem && (
            <div className="p-4 rounded-2xl bg-[#141A2D] border border-slate-800 space-y-1">
              <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>1. Problem Statement</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>
          )}

          {/* Step 2: Approach */}
          {project.approach && (
            <div className="p-4 rounded-2xl bg-[#141A2D] border border-slate-800 space-y-1">
              <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>2. Analytical &amp; Technical Approach</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-sans">
                {project.approach}
              </p>
            </div>
          )}

          {/* Step 3: Tools & Technologies */}
          <div className="p-4 rounded-2xl bg-[#141A2D] border border-slate-800 space-y-2">
            <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              <span>3. Technology Stack &amp; Implementation</span>
            </div>
            {project.tools && (
              <p className="text-slate-300 font-mono text-xs">
                {project.tools}
              </p>
            )}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {techs.map((t, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Step 4: Results & Quantified Impact */}
          {project.result && (
            <div className="p-4 rounded-2xl bg-[#141A2D] border border-slate-800 space-y-2">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>4. Results &amp; Quantified Outcomes</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-medium">
                {project.result}
              </p>
              {highlights.length > 0 && (
                <ul className="space-y-1.5 pt-2 pl-1">
                  {highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Paper Citation Link if available */}
          {project.paperTitle && (
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Associated Scientific Publication:
                </span>
                <p className="font-semibold text-white">
                  {project.paperTitle}
                </p>
              </div>
              <a
                href={project.paperLink || project.paperUrl}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 ml-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-600 text-white font-bold hover:bg-cyan-500 transition"
              >
                <span>Read Paper</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>

        {/* Footer Actions: GitHub + Demo + Close */}
        <div className="p-4 px-6 bg-[#0B0E1A] border-t border-slate-800 flex items-center justify-between">
          <div className="text-[11px] font-mono text-slate-500">
            Verified repository code &bull; Reproducible project
          </div>

          <div className="flex items-center gap-2.5">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition shadow-md shadow-emerald-600/30"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {(project.paperLink || project.paperUrl) && (
              <a
                href={project.paperLink || project.paperUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition shadow-md shadow-purple-600/30"
              >
                <span>Read Paper</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/10 transition"
              >
                <GitHubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

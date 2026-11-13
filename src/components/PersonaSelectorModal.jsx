import React from 'react';
import { Briefcase, BarChart3, Brain, BookOpen, Check, ArrowRight, X, Sparkles } from 'lucide-react';
import { personas } from '../data/profile';

export default function PersonaSelectorModal({ isOpen, onClose, currentPersona, onSelectPersona }) {
  if (!isOpen) return null;

  const iconMap = {
    Briefcase: <Briefcase className="w-8 h-8 text-red-500" />,
    BarChart3: <BarChart3 className="w-8 h-8 text-blue-500" />,
    Brain: <Brain className="w-8 h-8 text-purple-400" />,
    BookOpen: <BookOpen className="w-8 h-8 text-cyan-400" />
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#0c0e18] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl my-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/10 text-red-400 border border-red-500/30 uppercase tracking-widest">
            <span>PERSONALIZED VIEW</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            Who&apos;s Exploring Saniya&apos;s Portfolio?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Choose your role to personalize the featured rows, highlights, and browsing sequence. You can switch personas at any time or explore the full portfolio.
          </p>
        </div>

        {/* 4 Persona Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {personas.map((persona) => {
            const isSelected = currentPersona === persona.id;

            return (
              <div
                key={persona.id}
                onClick={() => {
                  onSelectPersona(persona.id);
                  onClose();
                }}
                className={`group relative rounded-2xl p-5 border cursor-pointer transition-all duration-300 flex flex-col justify-between hover:scale-[1.03] ${
                  isSelected
                    ? `bg-gradient-to-b ${persona.bgGradient} ${persona.borderColor} shadow-lg ring-2 ring-red-500/50`
                    : 'bg-[#121524] border-slate-800 hover:border-slate-700 hover:bg-[#161a2e]'
                }`}
                style={{
                  boxShadow: isSelected ? `0 10px 30px -10px ${persona.glowColor}` : 'none'
                }}
              >
                <div>
                  {/* Top row: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                      {iconMap[persona.icon]}
                    </div>
                    {persona.badge && (
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-slate-300 border border-white/15">
                        {persona.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-red-400 transition-colors">
                    {persona.title}
                  </h3>
                  
                  <p className="text-xs text-slate-300 font-medium mt-1.5 leading-snug">
                    {persona.subtitle}
                  </p>

                  <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed">
                    {persona.description}
                  </p>
                </div>

                {/* Bottom Enter Action */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-white flex items-center gap-1">
                    <span>{isSelected ? "Active View" : "Enter View"}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                  {isSelected && (
                    <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-white">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Options */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">&bull;</span>
            <span>All personas have full access to all projects, research papers, and technical skills.</span>
          </div>

          <button
            onClick={() => {
              onSelectPersona('recruiter');
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold transition"
          >
            View Full Portfolio (Default)
          </button>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { Play, Info, ExternalLink, ArrowRight, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function NetflixCard({
  title,
  category,
  badge,
  desc,
  image,
  onClick,
  accentColor = "#E50914",
  actionLabel = "Inspect Details",
  isSpecial = false
}) {
  return (
    <div
      onClick={onClick}
      className="group relative flex-none w-[260px] sm:w-[300px] md:w-[320px] rounded-2xl bg-[#121422] border border-slate-800/90 hover:border-slate-700 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:z-10 shadow-lg hover:shadow-2xl flex flex-col justify-between"
      style={{
        boxShadow: isSpecial ? `0 0 20px -5px ${accentColor}30` : undefined
      }}
    >
      {/* Top Media / Abstract Visual Banner */}
      <div className="relative h-40 bg-gradient-to-br from-slate-900 via-[#15192c] to-[#0d0e17] overflow-hidden border-b border-slate-800/80">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center filter contrast-105 brightness-90 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 p-4 flex flex-col justify-between bg-grid-pattern opacity-60">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-300 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                {category}
              </span>
              {badge && (
                <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  {badge}
                </span>
              )}
            </div>

            <div className="p-2.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Highlight</div>
              <div className="text-sm font-bold text-white font-mono flex items-center gap-1.5 mt-0.5 truncate">
                <TrendingUp className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <span className="truncate">{badge || "Verified Case Study"}</span>
              </div>
            </div>
          </div>
        )}

        {/* Gradient Overlay for cards with images */}
        {image && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#121422] via-[#121422]/40 to-transparent">
            <div className="absolute top-2.5 left-2.5">
              <span className="text-[10px] font-mono font-bold text-white bg-red-600/90 backdrop-blur-md px-2 py-0.5 rounded shadow">
                {badge || category}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-slate-400 uppercase">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }}></span>
            <span>{category}</span>
          </div>

          <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 mt-1">
            {title}
          </h4>

          <p className="text-xs text-slate-300 line-clamp-2 mt-1.5 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Action Link Footer */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white transition-colors">
          <span className="flex items-center gap-1">
            <span>{actionLabel}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </span>
          <Info className="w-4 h-4 text-slate-500 group-hover:text-red-400 transition-colors" />
        </div>
      </div>
    </div>
  );
}

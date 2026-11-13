import React from 'react';

export default function RunningMarquee({ items, reverse = false }) {
  const marqueeItems = items || [
    "DATA ANALYTICS",
    "BUSINESS INTELLIGENCE",
    "RESEARCH & PUBLICATIONS",
    "MACHINE LEARNING",
    "APPLIED ARTIFICIAL INTELLIGENCE",
    "DATA STORYTELLING",
    "TIME-SERIES FORECASTING"
  ];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-slate-800/60 bg-[#090b14]/70 select-none group">
      <div 
        className={`flex items-center gap-8 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-reverse' : ''
        }`}
      >
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-xs sm:text-sm font-black tracking-[0.2em] font-mono text-slate-400/80 hover:text-white transition-colors uppercase">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-600/70" />
          </div>
        ))}
      </div>
    </div>
  );
}

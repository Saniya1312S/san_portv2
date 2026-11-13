import React from 'react';
import { profilesList } from '../data/profile';

export default function WhoIsWatchingScreen({ onSelectProfile }) {
  return (
    <div className="min-h-screen w-full bg-[#141414] text-white flex flex-col items-center justify-center px-4 py-12 select-none font-sans relative overflow-hidden animate-fadeIn">
      {/* Background Netflix Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-[#141414] to-[#141414] pointer-events-none" />

      {/* Center Wrapper */}
      <div className="relative z-10 w-full max-w-5xl text-center space-y-8 sm:space-y-12">
        
        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium text-white tracking-tight">
            Who&apos;s Watching?
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-sans tracking-wide">
            Select a profile to experience a tailored portfolio walkthrough
          </p>
        </div>

        {/* 5 Streaming-Service Style Illustrated Avatars */}
        <div className="flex flex-wrap items-start justify-center gap-6 sm:gap-8 md:gap-10 pt-4">
          {profilesList.map((p) => (
            <div
              key={p.id}
              onClick={() => onSelectProfile(p.id)}
              className="group flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Rounded Square Illustrated Avatar */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-transparent group-hover:border-white shadow-2xl transition-all duration-300 bg-slate-900 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.25)]">
                <img
                  src={p.avatar}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Understated Profile Name */}
              <span className="mt-3.5 text-xs sm:text-sm font-semibold text-slate-400 group-hover:text-white transition-colors capitalize text-center">
                {p.name}
              </span>

              {/* Small Subtle Hover Description (visible ONLY on hover) */}
              <span className="mt-1 text-[10px] text-slate-400 font-sans text-center max-w-[130px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {p.hoverDescription}
              </span>
            </div>
          ))}
        </div>

        {/* Minimal Instructions */}
        <div className="pt-6">
          <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-mono text-slate-500 bg-white/5 border border-white/5">
            Click any profile to instantly enter
          </span>
        </div>

      </div>
    </div>
  );
}

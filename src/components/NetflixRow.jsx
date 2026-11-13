import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NetflixRow({ title, subtitle, badge, children }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollAmount = clientWidth * 0.75;
      rowRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="py-6 sm:py-8 space-y-3 relative group/row">
      {/* Row Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-baseline justify-between">
        <div className="space-y-0.5">
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight flex items-center gap-2.5">
              <span>{title}</span>
              {badge && (
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
                  {badge}
                </span>
              )}
            </h3>
          </div>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-400 font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Row Carousel Wrapper with Left & Right Nav Buttons */}
      <div className="relative">
        {/* Left Arrow Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-black/95 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 border border-white/20 shadow-2xl backdrop-blur-md"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={rowRef}
          className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto scrollbar-none px-4 sm:px-6 lg:px-8 py-3 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-black/95 text-white flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-300 border border-white/20 shadow-2xl backdrop-blur-md"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';

export default function NetflixTitleScreen({ onComplete }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Preload audio
    audioRef.current = new Audio('./assets/netflix-sound.mp3');
  }, []);

  const handlePlaySoundAndEnter = () => {
    if (isClicked) return;
    setIsClicked(true);

    if (audioRef.current && !isMuted) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn('Audio play restricted or interrupted:', err);
      });
    }

    // Smooth transition into Screen 2 after the Netflix signature zoom animation
    const timer = setTimeout(() => {
      onComplete();
    }, 2800);

    return () => clearTimeout(timer);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black cursor-pointer select-none overflow-hidden"
      onClick={handlePlaySoundAndEnter}
    >
      {/* Sound Mute Toggle */}
      <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={toggleMute}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white backdrop-blur-md border border-white/10 transition"
          title={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          {isMuted ? <VolumeX className="w-5 h-5 text-red-500" /> : <Volume2 className="w-5 h-5 text-slate-200" />}
        </button>
      </div>

      {/* Netflix Iconic Arched Wordmark Animation */}
      <div 
        className={`w-[85vw] max-w-[850px] transition-all duration-1000 ${
          isClicked 
            ? 'scale-[2.4] opacity-0 blur-sm pointer-events-none' 
            : 'scale-100 opacity-100 hover:scale-[1.03]'
        }`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.7, 0, 0.3, 1)',
          transitionDuration: isClicked ? '2.5s' : '0.4s'
        }}
      >
        <svg
          viewBox="0 0 1000 280"
          className="w-full h-auto overflow-visible drop-shadow-[0_0_40px_rgba(229,9,20,0.6)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="netflixTextArc"
              d="M 50,230 Q 500,20 950,230"
              fill="none"
            />
            <linearGradient id="netflixRedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b20710" />
              <stop offset="50%" stopColor="#e50914" />
              <stop offset="100%" stopColor="#b20710" />
            </linearGradient>
          </defs>
          <text 
            className="font-black uppercase tracking-[8px] sm:tracking-[12px]"
            style={{
              fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif",
              fontSize: '85px',
              fill: 'url(#netflixRedGradient)',
              letterSpacing: '10px'
            }}
          >
            <textPath
              href="#netflixTextArc"
              startOffset="50%"
              textAnchor="middle"
            >
              SANIYA SARATKAR
            </textPath>
          </text>
        </svg>
      </div>

      {/* Invitation to Click Prompt */}
      <div 
        className={`mt-12 transition-all duration-500 text-center space-y-2 ${
          isClicked ? 'opacity-0 translate-y-4' : 'opacity-80 hover:opacity-100'
        }`}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-widest text-slate-300">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span>Click anywhere to start</span>
        </div>
        <p className="text-[11px] font-mono text-slate-500">
          Netflix-inspired cinematic reveal • Sound enabled
        </p>
      </div>

      {/* Skip Button for quick testing */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onComplete();
        }}
        className="absolute bottom-6 right-6 text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition"
      >
        <span>Skip Intro</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}

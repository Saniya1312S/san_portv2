import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowRight, Sparkles, FastForward } from 'lucide-react';
import { profile } from '../data/profile';

export default function CinematicIntro({ onComplete }) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  // Play a smooth cinematic synth chime via Web Audio API if sound is enabled
  const playCinematicSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      // Deep root bass note + harmonic chord
      const freqs = [110, 164.81, 220, 329.63, 440];
      const now = ctx.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = idx === 0 ? 'sawtooth' : 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.001, now);
        gain.gain.exponentialRampToValueAtTime(0.08 / (idx + 1), now + 0.3);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.5);
      });
    } catch (e) {
      console.warn("Audio Context not supported or blocked", e);
    }
  };

  useEffect(() => {
    // Step-by-step cinematic sequence
    const t1 = setTimeout(() => setAnimationStep(1), 300);  // Glow & initial mesh
    const t2 = setTimeout(() => {
      setAnimationStep(2); // Name reveal
      if (soundEnabled) playCinematicSound();
    }, 1000);
    const t3 = setTimeout(() => setAnimationStep(3), 2000); // Tagline & Buttons

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [soundEnabled]);

  const handleEnter = () => {
    sessionStorage.setItem('saniya_portfolio_intro_seen', 'true');
    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#07080e] text-white flex flex-col items-center justify-center overflow-hidden px-4 select-none">
      
      {/* Background cinematic particle rays */}
      <div className="absolute inset-0 bg-gradient-radial from-red-950/20 via-black to-[#07080e] pointer-events-none"></div>
      
      {/* Ambient glowing spotlight */}
      <div 
        className={`absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-all duration-1000 pointer-events-none ${
          animationStep >= 1 ? 'opacity-40 bg-red-600/30 scale-100' : 'opacity-0 scale-50'
        }`}
      ></div>

      <div 
        className={`absolute w-[400px] h-[400px] rounded-full blur-[140px] transition-all duration-1000 delay-300 pointer-events-none ${
          animationStep >= 2 ? 'opacity-30 bg-blue-600/25 translate-y-12' : 'opacity-0'
        }`}
      ></div>

      {/* Top right sound toggle & skip button */}
      <div className="absolute top-6 right-6 flex items-center gap-3 z-20">
        <button
          onClick={() => {
            const next = !soundEnabled;
            setSoundEnabled(next);
            if (next) playCinematicSound();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-white/10 hover:bg-white/20 border border-white/15 transition backdrop-blur-md"
          title={soundEnabled ? "Mute audio" : "Enable cinematic sound"}
        >
          {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-red-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
          <span className="text-[11px]">{soundEnabled ? "SOUND ON" : "SOUND OFF"}</span>
        </button>

        <button
          onClick={handleEnter}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/15 transition backdrop-blur-md text-slate-300 hover:text-white"
        >
          <span>Skip Intro</span>
          <FastForward className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Central Cinematic Lettering Reveal */}
      <div className="relative z-10 text-center max-w-4xl space-y-6">
        
        {/* Monogram emblem */}
        <div 
          className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 via-rose-700 to-red-950 p-[2px] shadow-2xl transition-all duration-1000 transform ${
            animationStep >= 1 ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-12'
          }`}
        >
          <div className="w-full h-full bg-[#0d0e17] rounded-[14px] flex items-center justify-center font-black text-2xl tracking-widest text-red-500 font-mono">
            SS
          </div>
        </div>

        {/* Animated Name */}
        <div className="overflow-hidden">
          <h1 
            className={`text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase transition-all duration-1000 transform ${
              animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              SANIYA
            </span>{' '}
            <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(229,9,20,0.6)]">
              SARATKAR
            </span>
          </h1>
        </div>

        {/* Role Subtitle */}
        <p 
          className={`text-sm sm:text-lg md:text-xl font-mono tracking-widest text-slate-300 uppercase transition-all duration-700 delay-200 transform ${
            animationStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Data Analyst <span className="text-red-500">&bull;</span> Data Scientist <span className="text-blue-400">&bull;</span> AI/ML Engineer
        </p>

        {/* Tagline */}
        <div 
          className={`p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${
            animationStep >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <p className="text-xs sm:text-sm md:text-base text-slate-200 italic font-medium">
            &ldquo;{profile.tagline}&rdquo;
          </p>
        </div>

        {/* CTA Enter Button */}
        <div 
          className={`pt-4 transition-all duration-700 delay-400 transform ${
            animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            onClick={handleEnter}
            className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-500 shadow-[0_0_30px_-5px_rgba(229,9,20,0.6)] hover:shadow-[0_0_40px_0_rgba(229,9,20,0.8)] transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <span>Enter Portfolio Experience</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      {/* Bottom subtle note */}
      <div className="absolute bottom-6 text-[11px] font-mono text-slate-500 tracking-wider">
        A Netflix-Inspired Professional Data &amp; AI Showcase &bull; Nagpur, India
      </div>

    </div>
  );
}

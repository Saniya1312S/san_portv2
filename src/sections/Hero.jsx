import React from 'react';
import { ArrowRight, Download, Mail, BookOpen, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo, heroMetrics } from '../data/portfolioData';
import InteractiveDataCanvas from '../components/InteractiveDataCanvas';
import { LinkedInIcon, GitHubIcon } from '../components/SocialIcons';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting glows */}
      <div className="radial-glow w-96 h-96 bg-blue-600 top-10 left-1/4 -translate-x-1/2"></div>
      <div className="radial-glow w-96 h-96 bg-violet-600 top-40 right-1/4 translate-x-1/2"></div>
      <div className="radial-glow w-80 h-80 bg-cyan-500 bottom-10 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand, Positioning & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/10 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {personalInfo.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                {personalInfo.title}
              </p>
            </div>

            {/* Headline Banner */}
            <div className="p-4 rounded-xl bg-slate-900/5 dark:bg-navy-900/60 border border-slate-200 dark:border-navy-700/80 backdrop-blur-sm">
              <p className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-200 italic">
                &ldquo;{personalInfo.tagline}&rdquo;
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {personalInfo.bio}
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                <span>{personalInfo.location}</span>
              </div>
              <span>&bull;</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>B.Tech AI &amp; Data Science (AIHER / DMIHER)</span>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-glow-blue transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-navy-800 border border-slate-300 dark:border-navy-700 hover:border-blue-500/60 hover:bg-slate-50 dark:hover:bg-navy-700/80 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-500" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 bg-transparent hover:bg-slate-200/50 dark:hover:bg-navy-800/50 border border-slate-300/70 dark:border-navy-700 transition-all duration-200"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">CONNECT:</span>
              
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200 dark:border-navy-700 transition"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950/40 border border-slate-200 dark:border-navy-700 transition"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.googleScholar}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-950/40 border border-slate-200 dark:border-navy-700 transition"
                aria-label="Google Scholar Citations"
                title="Google Scholar Citations"
              >
                <BookOpen className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200 dark:border-navy-700 transition"
                aria-label="Send Email"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Profile Image Card + Interactive Data Canvas */}
          <div className="lg:col-span-5 flex flex-col gap-5 items-center">
            
            {/* Verified Profile Photo Card */}
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-60 blur-md group-hover:opacity-90 transition duration-500"></div>
              
              <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/80 shadow-2xl">
                <div className="aspect-[4/4.2] overflow-hidden bg-navy-900 relative">
                  <img
                    src={personalInfo.profileImage}
                    alt="Saniya Saratkar"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent"></div>
                  
                  {/* Photo overlay badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-navy-950/80 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                    <div>
                      <div className="font-bold text-slate-100">Saniya Saratkar</div>
                      <div className="text-[11px] text-blue-400 font-mono">B.Tech AI &amp; Data Science</div>
                    </div>
                    <div className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-medium">
                      Verified
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Data Telemetry Dashboard Canvas */}
            <div className="w-full h-72">
              <InteractiveDataCanvas />
            </div>

          </div>

        </div>

        {/* 4 Highlight Stat Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {heroMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-navy-700/70 glass-panel-hover"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400 font-mono">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

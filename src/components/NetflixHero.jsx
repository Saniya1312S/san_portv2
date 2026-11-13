import React from 'react';
import { ArrowRight, Download, Mail, MapPin, CheckCircle2, FileText, Code2, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function NetflixHero({ onOpenResume, onSelectResumeTab }) {
  const expertiseItems = [
    { name: "SQL", color: "#38bdf8" },
    { name: "Python", color: "#3b82f6" },
    { name: "Power BI", color: "#f59e0b" },
    { name: "Excel", color: "#10b981" },
    { name: "Machine Learning", color: "#8b5cf6" }
  ];

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-20 flex items-center overflow-hidden bg-[#090B12] border-b border-slate-800/80">
      
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Core Hero Info */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status & Location Pill */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Entry-Level Opportunities</span>
              </span>

              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>Nagpur, India</span>
              </span>
            </div>

            {/* Name & Identity */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-[1.05]">
                {profile.name}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-bold text-slate-300">
                {profile.headline}
              </p>
            </div>

            {/* Required Headline */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#111827] border border-slate-800 text-left">
              <div className="text-xs font-mono text-red-400 font-bold mb-1 uppercase tracking-wider">
                Core Philosophy
              </div>
              <p className="text-lg sm:text-xl font-black text-white italic tracking-tight">
                &ldquo;Turning Data Into Meaningful Insights.&rdquo;
              </p>
            </div>

            {/* Required Short Description */}
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in analytics, business intelligence, research and applied AI.
            </p>

            {/* Required 4 Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profile.resumeDataAnalyst}
                download="Saniya_Saratkar_Data_Analyst_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-[#151B2B] hover:bg-[#1a2236] border border-sky-500/30 hover:border-sky-500/60 transition shadow-sm"
                title="Download verified 1-page Data Analyst ATS Resume"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Data Analyst Resume</span>
              </a>

              <a
                href={profile.resumeDataScientist}
                download="Saniya_Saratkar_Data_Scientist_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-[#151B2B] hover:bg-[#1a2236] border border-purple-500/30 hover:border-purple-500/60 transition shadow-sm"
                title="Download verified 1-page Data Scientist ATS Resume"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Data Scientist Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Required Expertise Snapshot: Exactly 5 items */}
            <div className="pt-2 text-left">
              <div className="text-[11px] font-mono uppercase text-slate-400 mb-2 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-red-500" />
                <span>Expertise Snapshot:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {expertiseItems.map((item) => (
                  <span
                    key={item.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-[#151B2B] border border-slate-700/80 text-white shadow-sm flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Verified Photograph + Subtle Code/Data Visual */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5">
            
            {/* Verified Photo Card */}
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 opacity-60 blur-lg group-hover:opacity-85 transition duration-500" />

              <div className="relative rounded-3xl overflow-hidden bg-[#151B2B] border border-slate-700 shadow-2xl">
                <div className="aspect-[4/4.2] overflow-hidden bg-slate-900 relative">
                  <img
                    src={profile.profileImage}
                    alt="Saniya Saratkar"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#090B12] via-[#090B12]/60 to-transparent" />
                  
                  {/* Verified Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                    <div>
                      <div className="font-extrabold text-white text-sm">Saniya Saratkar</div>
                      <div className="text-[11px] text-slate-300 font-mono">AI &amp; Data Science B.Tech</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Subtle Code-Inspired Visual (Does not dominate screen) */}
            <div className="w-full max-w-sm p-3.5 rounded-2xl bg-[#111827] border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1.5 shadow-md">
              <div className="flex items-center justify-between text-[10px] text-slate-400 border-b border-slate-800 pb-1.5">
                <span className="text-slate-300">saniya_workflow.py</span>
                <span className="text-emerald-400">● clean &amp; validated</span>
              </div>
              <div className="text-slate-400">
                <span className="text-purple-400">def</span> <span className="text-blue-400">transform_data</span>(raw_records):
              </div>
              <div className="pl-4 text-slate-300">
                insights = pipeline.clean(raw_records).model()
              </div>
              <div className="pl-4 text-slate-300">
                <span className="text-purple-400">return</span> insights.to_business_value()
              </div>
            </div>

          </div>

        </div>

        {/* 5 Compact Verified Metric Badges */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {profile.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#151B2B] border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between"
            >
              <div className="text-lg sm:text-xl font-black text-red-500 font-mono">
                {metric.value}
              </div>
              <div>
                <div className="text-xs font-bold text-white mt-1">
                  {metric.label}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {metric.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { GraduationCap, Award, ExternalLink, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import { profile } from '../data/profile';
import { certifications, achievements } from '../data/certifications';

export default function EducationCertifications() {
  return (
    <section id="certifications" className="py-16 md:py-24 relative bg-[#090B12] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. Academic Foundation */}
        <div id="education">
          <div className="space-y-2 mb-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 text-slate-300 border border-white/10 uppercase tracking-widest">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Education
            </h2>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#111827] border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center shrink-0 text-red-500">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider">
                  Bachelor of Technology (B.Tech)
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Artificial Intelligence &amp; Data Science
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  {profile.education.institution}
                </p>
                <p className="text-[11px] text-slate-500">
                  {profile.education.affiliationNote}
                </p>
              </div>
            </div>

            <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-slate-800/80 pt-3 sm:pt-0 gap-1 shrink-0">
              <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                {profile.education.cgpa}
              </div>
              <div className="text-xs font-mono text-slate-400">
                CGPA ({profile.education.duration})
              </div>
            </div>
          </div>
        </div>

        {/* 2. Achievements (Celebratory Visual Highlights) */}
        <div id="achievements">
          <div className="space-y-2 mb-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest">
              <Award className="w-3.5 h-3.5" />
              <span>KEY RECOGNITIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Achievements
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Competitive fellowships, hackathon podiums, research milestones, and institutional leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-2xl bg-[#111827] border border-slate-800 hover:border-amber-500/40 transition shadow-sm space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {ach.icon}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {ach.badge}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base leading-snug">
                    {ach.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    {ach.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Clean Certification Gallery with Working Drive Links */}
        <div>
          <div className="space-y-2 mb-6 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest">
              <FileCheck className="w-3.5 h-3.5" />
              <span>INDUSTRY CERTIFICATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Professional Certifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Verified professional credentials across analytics, artificial intelligence, Python, and medical informatics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 rounded-2xl bg-[#111827] border border-slate-800 hover:border-cyan-500/40 transition shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 uppercase">
                      {cert.issuer}
                    </span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>

                  <h3 className="font-bold text-white text-sm leading-snug pt-1">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.highlight}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl text-xs font-bold text-cyan-400 hover:text-white bg-cyan-600/10 hover:bg-cyan-600 transition border border-cyan-500/30 hover:border-cyan-500"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

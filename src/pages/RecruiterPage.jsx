import React from 'react';
import { Download, Mail, Phone, MapPin, CheckCircle2, GraduationCap, Briefcase, Award, ExternalLink, ArrowRight, FileText, Sparkles, FolderGit2, Code2, BookOpen, FileCheck } from 'lucide-react';
import { profile } from '../data/profile';
import { LinkedInIcon, GitHubIcon } from '../components/SocialIcons';
import RunningMarquee from '../components/RunningMarquee';
import CodeSection from '../sections/CodeSection';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import CombinedSkills from '../sections/CombinedSkills';
import ResearchLibrary from '../sections/ResearchLibrary';
import EducationCertifications from '../sections/EducationCertifications';
import Resumes from '../sections/Resumes';
import OpenRoles from '../sections/OpenRoles';
import Contact from '../sections/Contact';

export default function RecruiterPage({ onSelectProject, onOpenResume }) {
  return (
    <div className="space-y-16 py-4">
      {/* 1. Recruiter Executive Hero */}
      <section id="hero" className="relative pt-6 pb-12 border-b border-slate-800/80 bg-gradient-to-b from-[#0e1220]/60 via-[#090B12] to-[#090B12]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Main Hero Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#111827] border border-slate-800 flex flex-col lg:flex-row items-center gap-10 shadow-2xl relative overflow-hidden">
            
            {/* Left: Introduction & Professional Headline */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Entry-Level Opportunities
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Hi, I&apos;m Saniya Saratkar
              </h1>
              
              {/* Recruiter Headline: Strictly Data Analyst | Data Scientist */}
              <p className="text-lg sm:text-xl font-bold text-red-500 font-sans tracking-wide">
                Data Analyst | Data Scientist
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in analytics, business intelligence, finance, healthcare and research. Passionate about exploring technology, continuously learning and building practical solutions that create meaningful impact
              </p>

              {/* Social Links & Meta */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-red-500" /> {profile.location}</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-emerald-400" /> {profile.phone}</span>
                <span>&bull;</span>
                <a href={`mailto:${profile.email}`} className="text-sky-400 hover:underline">{profile.email}</a>
              </div>

              {/* Quick Resume Download & Contact Actions */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => onOpenResume('analyst')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/30 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download DA Resume (1-Page)</span>
                </button>

                <button
                  onClick={() => onOpenResume('scientist')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition"
                >
                  <Download className="w-4 h-4" />
                  <span>Download DS Resume (1-Page)</span>
                </button>

                <div className="flex items-center gap-2 pl-2">
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition"
                    title="GitHub"
                  >
                    <GitHubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Larger, Beautifully Positioned Profile Picture with Rounded Portrait Frame */}
            <div className="relative shrink-0 flex justify-center">
              <div className="relative group w-48 h-48 sm:w-56 sm:h-56">
                {/* Subtle visual ambient glows */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-red-600 via-purple-600 to-sky-600 opacity-60 blur-xl group-hover:opacity-85 transition duration-500" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-slate-900 group-hover:border-white transition-colors duration-300">
                  <img
                    src={profile.profileImage}
                    alt="Saniya Saratkar"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.05]"
                  />
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md text-center border border-white/10">
                    <div className="text-[11px] font-bold text-white">Saniya Saratkar</div>
                    <div className="text-[9.5px] font-mono text-red-400">Data Analyst &bull; Data Scientist</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Running Marquee Banner */}
      <RunningMarquee />

      {/* 2. Analytical Workflow Code Section */}
      <CodeSection subtitle="A glimpse into my analytical workflow for business intelligence and predictive models." />

      {/* 3. Professional Experience Vertical Roadmap */}
      <Experience roleFilter="all" />

      {/* 4. Featured Projects with Real Screenshots & Visible GitHub Links */}
      <Projects
        activePersona="all"
        onSelectProject={onSelectProject}
      />

      {/* 5. Technical Skills & Data Workflow */}
      <CombinedSkills />

      {/* 6. Research & Publications (Domain Library) */}
      <ResearchLibrary />

      {/* 7. Achievements & Certifications */}
      <EducationCertifications />

      {/* 8. My Resumes (Two 1-Page ATS Resumes) */}
      <Resumes onPreviewResume={onOpenResume} />

      {/* 9. Open to Opportunities */}
      <OpenRoles />

      {/* 10. Contact Section */}
      <Contact />
    </div>
  );
}

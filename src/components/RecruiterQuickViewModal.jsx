import React from 'react';
import { X, Download, Mail, Phone, MapPin, CheckCircle2, GraduationCap, Briefcase, Award, ExternalLink, ArrowRight, FileText } from 'lucide-react';
import { profile } from '../data/profile';
import { experiences } from '../data/experience';
import { projects } from '../data/projects';
import { LinkedInIcon, GitHubIcon } from './SocialIcons';

export default function RecruiterQuickViewModal({ isOpen, onClose, onSelectProject, onOpenResume }) {
  if (!isOpen) return null;

  const analyticsProjects = projects.filter(p => p.category === 'analytics'); // 3
  const aiProjects = projects.filter(p => p.category === 'ai').slice(0, 3); // 3

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-5xl bg-[#0c0e18] border border-red-600/40 rounded-3xl overflow-hidden shadow-2xl my-auto text-white max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Strip */}
        <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between px-6 py-3.5 bg-[#121524] border-b border-slate-800 gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-xs font-mono">
              30s
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-black tracking-tight text-white flex items-center gap-2">
                <span>Recruiter Quick View</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  Fast 30–60s Scan
                </span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.resumeDataAnalyst}
              download="Saniya_Saratkar_Data_Analyst_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition shadow-sm"
              title="Download Data Analyst Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DA Resume</span>
            </a>

            <a
              href={profile.resumeDataScientist}
              download="Saniya_Saratkar_Data_Scientist_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition shadow-sm"
              title="Download Data Scientist Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DS Resume</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Quick View Body */}
        <div className="overflow-y-auto p-6 space-y-6 text-xs sm:text-sm text-slate-300">
          
          {/* 1. Candidate Summary & Contact */}
          <div className="p-5 rounded-2xl bg-[#141829] border border-slate-800 flex flex-col md:flex-row items-center gap-5">
            <img
              src={profile.profileImage}
              alt="Saniya Saratkar"
              className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-red-500/40 shadow-lg shrink-0"
            />
            <div className="flex-1 text-center md:text-left space-y-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-white">{profile.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Open to Entry-Level Opportunities
                </span>
              </div>
              <p className="text-xs font-semibold text-red-400">{profile.headline}</p>
              <p className="text-xs text-slate-300 leading-relaxed">
                {profile.summary}
              </p>
              
              <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-red-400" /> Nagpur, India</span>
                <span>&bull;</span>
                <span className="flex items-center gap-1"><Phone className="w-3 h-3 text-emerald-400" /> +91-7276253304</span>
                <span>&bull;</span>
                <a href={`mailto:${profile.email}`} className="text-sky-400 hover:underline">{profile.email}</a>
                <span>&bull;</span>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">LinkedIn</a>
                <span>&bull;</span>
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">GitHub</a>
              </div>
            </div>
          </div>

          {/* 2. Education */}
          <div className="p-4 rounded-xl bg-[#111628] border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-red-500 shrink-0" />
              <div>
                <div className="text-xs font-bold text-white">B.Tech in Artificial Intelligence &amp; Data Science</div>
                <div className="text-[11px] text-slate-400">Adani Institute of Higher Education and Research (AIHER), Nagpur &bull; 2022–2026</div>
              </div>
            </div>
            <div className="text-sm font-black text-emerald-400 font-mono">
              CGPA: 8.35/10
            </div>
          </div>

          {/* 3. Five Internship Experiences in Compact Roadmap */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-red-500" />
              <span>5 Professional Experiences (Chronological)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="p-3 rounded-xl bg-[#111628] border border-slate-800 flex flex-col justify-between space-y-1.5">
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>0{idx + 1}</span>
                      <span className="text-slate-400">{exp.period.split('–')[0]}</span>
                    </div>
                    <div className="font-bold text-white text-xs mt-1">{exp.company}</div>
                    <div className="text-[11px] text-slate-300 font-medium">{exp.role}</div>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 truncate">
                    {exp.tools.slice(0, 3).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Three Data Analytics Projects */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
              3 Data Analytics Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {analyticsProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="p-3.5 rounded-xl bg-[#111628] border border-slate-800 hover:border-sky-500/50 cursor-pointer transition space-y-1.5"
                >
                  <div className="text-xs font-bold text-white line-clamp-1">{p.title}</div>
                  <div className="text-[11px] text-slate-300 line-clamp-2">{p.shortDescription}</div>
                  <div className="text-[10px] font-mono text-emerald-400">{p.badge}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Selected Data Science & AI Projects */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
              Selected Data Science &amp; AI Projects
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {aiProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="p-3.5 rounded-xl bg-[#111628] border border-slate-800 hover:border-purple-500/50 cursor-pointer transition space-y-1.5"
                >
                  <div className="text-xs font-bold text-white line-clamp-1">{p.title}</div>
                  <div className="text-[11px] text-slate-300 line-clamp-2">{p.shortDescription}</div>
                  <div className="text-[10px] font-mono text-purple-400">{p.badge}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. Key Skills Snapshot */}
          <div className="p-4 rounded-xl bg-[#111628] border border-slate-800 space-y-2">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
              Key Technical Toolkit
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["SQL", "Python", "Power BI", "Excel", "Tableau", "Pandas", "Scikit-Learn", "PyTorch", "FastAPI", "Qdrant", "JMeter", "GCP", "Docker", "n8n"].map((s) => (
                <span key={s} className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300">
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 px-6 bg-[#0B0E1A] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="text-[11px] font-mono text-slate-400">
            Nagpur, Maharashtra, India &bull; Available for immediate start
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenResume();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Resume Modal</span>
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Saniya</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

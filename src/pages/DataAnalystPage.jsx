import React from 'react';
import { Download, ArrowRight, CheckCircle2, BarChart3, Database, FileSpreadsheet, LayoutDashboard, Calendar, MapPin, Mail, ExternalLink, Award } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { GitHubIcon } from '../components/SocialIcons';
import RunningMarquee from '../components/RunningMarquee';
import Experience from '../sections/Experience';
import CombinedSkills from '../sections/CombinedSkills';
import CodeSection from '../sections/CodeSection';
import EducationCertifications from '../sections/EducationCertifications';
import Resumes from '../sections/Resumes';
import Contact from '../sections/Contact';

export default function DataAnalystPage({ onSelectProject, onOpenResume }) {
  // Exactly 3 Data Analytics projects
  const daProjects = projects.filter(p => p.category === 'analytics');

  return (
    <div className="space-y-16 py-4">
      {/* 1. Data Analyst Hero */}
      <section id="hero" className="relative pt-6 pb-12 border-b border-slate-800/80 bg-gradient-to-b from-sky-950/20 via-[#090B12] to-[#090B12]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>BUSINESS INTELLIGENCE &bull; KPI REPORTING &bull; EDA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Data Analyst | Business Analytics
              </h1>

              {/* Exact Requested Short Introduction */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Data Analyst skilled in SQL, Python, Excel, and Power BI, with hands-on experience in data cleaning, EDA, dashboard development, and business reporting. Experienced in identifying business trends, evaluating KPIs, performing statistical analysis, and translating complex data into actionable insights across multidisciplinary domains. Awarded an $8,500 UC Berkeley AI Scholarship.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-lg shadow-sky-600/30 transition"
                >
                  <span>Explore 3 Analytics Case Studies</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenResume('analyst')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-[#151B2B] hover:bg-[#1a2236] border border-sky-500/30 transition shadow-sm"
                >
                  <Download className="w-4 h-4 text-sky-400" />
                  <span>Download DA Resume (1-Page)</span>
                </button>
              </div>

              {/* Core DA Snapshot Tooling */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {["SQL (CTEs, Window Functions)", "Microsoft Excel", "Power BI & DAX", "Python (Pandas, EDA)", "Tableau", "KPI Evaluation"].map(tool => (
                  <span key={tool} className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#151B2B] border border-slate-700 text-sky-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Profile Picture with Subtle Visual Glow */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group w-48 h-48 sm:w-56 sm:h-56">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-sky-500 to-blue-600 opacity-60 blur-lg group-hover:opacity-85 transition" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#151B2B] border-2 border-sky-400/30 shadow-2xl">
                  <img
                    src={profile.profileImage}
                    alt="Saniya Saratkar"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md text-center border border-sky-500/20">
                    <div className="text-[11px] font-bold text-white">Saniya Saratkar</div>
                    <div className="text-[9.5px] font-mono text-sky-400">Data Analyst &bull; BI Specialist</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Running Marquee */}
      <RunningMarquee items={["SQL QUERIES", "POWER BI DASHBOARDS", "BUSINESS INTELLIGENCE", "EXCEL MODELING", "KPI ATTRIBUTION", "COHORT ANALYSIS"]} />

      {/* 2. About Me — Concise Business-Focused Description */}
      <section id="about" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-white">About Me</h2>
        <div className="p-6 rounded-3xl bg-[#111827] border border-slate-800 space-y-3 text-slate-300 text-sm leading-relaxed shadow-lg">
          <p>
            I specialize in transforming raw, multi-table operational databases into clear, interactive executive dashboards that leadership and operations teams rely on.
          </p>
          <p>
            From auditing class imbalance in card payment fraud to mapping e-commerce merchant conversion funnels and diagnosing systemic railway network bottlenecks, my work bridges rigorous data engineering with actionable business storytelling.
          </p>
        </div>
      </section>

      {/* 3. 3 Main Featured Data Analytics Projects Prominently Displayed */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30 uppercase tracking-widest">
            <span>CORE CASE STUDIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Featured Data Analytics Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Real enterprise datasets, interactive dashboards, verified business metrics, and direct GitHub repositories.
          </p>
        </div>

        <div className="space-y-10">
          {daProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`p-6 sm:p-8 rounded-3xl bg-[#111827] border transition-all duration-300 shadow-xl flex flex-col lg:flex-row gap-8 items-center ${
                project.id === 'railway-operations'
                  ? 'border-sky-500/30 hover:border-sky-500'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Large High-Quality Screenshot */}
              <div 
                className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg cursor-pointer group"
                onClick={() => onSelectProject(project)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/80 backdrop-blur-md text-white border border-white/20">
                    0{idx + 1} &bull; {project.categoryLabel}
                  </div>
                  {project.badge && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-black/85 text-emerald-400 border border-emerald-500/30 backdrop-blur-md">
                      {project.badge}
                    </div>
                  )}
                </div>
              </div>

              {/* Project Storytelling Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 
                  onClick={() => onSelectProject(project)}
                  className="text-xl sm:text-2xl font-black text-white hover:text-sky-400 transition-colors cursor-pointer leading-tight"
                >
                  {project.title}
                </h3>

                {/* Visible Exact Technology Stack Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#151B2B] text-sky-300 border border-slate-700/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {project.shortDescription}
                </p>

                {/* Key Insights Highlights */}
                <div className="p-4 rounded-2xl bg-black/30 border border-slate-800/80 space-y-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Key Findings:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visible GitHub & Details Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 shadow-md shadow-sky-600/30 transition"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition shadow-sm"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>View GitHub Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Skills & Methodology (Strictly DA skills: SQL, Excel, Python, Power BI, Tableau) */}
      <CombinedSkills roleFilter="data-analyst" />

      {/* 5. SQL & Analytics Workflow Blueprint */}
      <CodeSection 
        variant="sql" 
        title="How I Approach Analytics &amp; SQL" 
        subtitle="Clean CTEs, window functions, and business cohort modeling." 
      />

      {/* 6. Professional Experience Roadmap (DA focus) */}
      <Experience roleFilter="data-analyst" />

      {/* 7. Achievements & Certifications */}
      <EducationCertifications />

      {/* 8. Resumes Section (Only Data Analyst Resume per requirements) */}
      <Resumes onPreviewResume={onOpenResume} roleFilter="data-analyst" />

      {/* 9. Contact */}
      <Contact />
    </div>
  );
}

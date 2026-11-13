import React from 'react';
import { Download, ArrowRight, Brain, Cpu, Code2, Layers, Calendar, MapPin, Sparkles, ExternalLink, CheckCircle2, Award } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { GitHubIcon } from '../components/SocialIcons';
import RunningMarquee from '../components/RunningMarquee';
import CodeSection from '../sections/CodeSection';
import Experience from '../sections/Experience';
import CombinedSkills from '../sections/CombinedSkills';
import EducationCertifications from '../sections/EducationCertifications';
import Resumes from '../sections/Resumes';
import Contact from '../sections/Contact';

export default function DataScienceAIPage({ onSelectProject, onOpenResume }) {
  // Exactly 7 Data Science & AI projects (including Intel AI Form Filling Assistant)
  const dsProjects = projects.filter(p => p.category === 'ai');

  return (
    <div className="space-y-16 py-4">
      {/* 1. Data Science & AI Hero with Profile Picture */}
      <section id="hero" className="relative pt-6 pb-12 border-b border-slate-800/80 bg-gradient-to-b from-purple-950/20 via-[#090B12] to-[#090B12]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-400 border border-purple-500/30">
                <Brain className="w-3.5 h-3.5" />
                <span>APPLIED MACHINE LEARNING &bull; DEEP LEARNING &bull; RAG</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Data Science &amp; AI
              </h1>

              {/* Exact Requested Short, Approachable Introduction */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I enjoy applying machine learning, deep learning, and modern AI techniques to solve practical problems. My work spans computer vision, natural language processing, forecasting, and retrieval-augmented generation, with a focus on building useful and scalable applications.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/30 transition"
                >
                  <span>Explore AI Case Studies (7 Projects)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => onOpenResume('scientist')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-[#151B2B] hover:bg-[#1a2236] border border-purple-500/30 transition shadow-sm"
                >
                  <Download className="w-4 h-4 text-purple-400" />
                  <span>Download DS Resume (1-Page)</span>
                </button>
              </div>

              {/* Core DS/AI Snapshot */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {["Computer Vision", "MediaPipe", "FastAPI & RAG", "Qdrant", "Time-Series (LSTM, GRU)", "Ollama / LLMs", "OpenCV"].map(f => (
                  <span key={f} className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-[#151B2B] border border-slate-700 text-purple-300">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Profile Picture with Purple AI Aura */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group w-48 h-48 sm:w-56 sm:h-56">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-60 blur-lg group-hover:opacity-85 transition" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#151B2B] border-2 border-purple-400/30 shadow-2xl">
                  <img
                    src={profile.profileImage}
                    alt="Saniya Saratkar"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-xl bg-black/80 backdrop-blur-md text-center border border-purple-500/20">
                    <div className="text-[11px] font-bold text-white">Saniya Saratkar</div>
                    <div className="text-[9.5px] font-mono text-purple-400">Data Science &amp; AI Engineer</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Running Marquee */}
      <RunningMarquee items={["MACHINE LEARNING", "DEEP LEARNING", "RAG PIPELINES", "TIME-SERIES FORECASTING", "COMPUTER VISION", "EDGE AI OPTIMIZATION"]} />

      {/* 2. Analytical Workflow Code Section (PyTorch + Qdrant RAG) */}
      <CodeSection 
        variant="ds"
        title="How I Build Machine Learning &amp; AI Systems"
        subtitle="End-to-end Python pipeline with PyTorch, vector search, and clinical guardrails." 
      />

      {/* 3. Featured Data Science & AI Projects Grid */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-widest">
            <span>INTELLIGENT SYSTEMS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Data Science &amp; AI Project Highlights
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Translational machine learning architectures, real-time edge computer vision, and verified biomedical literature RAG pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dsProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-[#111827] border border-slate-800 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl space-y-4 group"
            >
              <div>
                {/* Project Screenshot */}
                <div 
                  className="aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 relative cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {project.badge && (
                    <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-black/85 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                      {project.badge}
                    </div>
                  )}
                </div>

                <div className="pt-4 space-y-2.5">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-base sm:text-lg font-black text-white group-hover:text-purple-400 transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-[#151B2B] text-purple-300 border border-slate-700/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Paper Link if exists */}
                  {project.paperTitle && (
                    <div className="p-2.5 rounded-xl bg-purple-950/20 border border-purple-500/30 flex items-center justify-between text-xs mt-2">
                      <span className="font-mono text-[11px] text-purple-300 font-semibold truncate mr-2">
                        📄 {project.paperTitle}
                      </span>
                      <a
                        href={project.paperLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple-400 hover:text-white inline-flex items-center gap-1 font-bold shrink-0"
                      >
                        <span>Paper</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Details + Demo + GitHub */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-purple-400 transition"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  {(project.paperLink || project.paperUrl) && (
                    <a
                      href={project.paperLink || project.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-purple-300 bg-purple-600/15 hover:bg-purple-600/25 border border-purple-500/30 transition"
                      title={project.paperTitle || "Published Research Paper"}
                    >
                      <span>Paper</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition shadow-sm"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Skills & Methodology (Strictly DS & AI skills) */}
      <CombinedSkills roleFilter="data-science-ai" />

      {/* 5. Professional Experience Roadmap (DS focus) */}
      <Experience roleFilter="data-science-ai" />

      {/* 6. Achievements & Certifications */}
      <EducationCertifications />

      {/* 7. Resumes Section (Only Data Scientist & AI resume) */}
      <Resumes onPreviewResume={onOpenResume} roleFilter="data-science-ai" />

      {/* 8. Contact */}
      <Contact />
    </div>
  );
}

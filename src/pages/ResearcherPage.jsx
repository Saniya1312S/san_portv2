import React from 'react';
import { BookOpen, ExternalLink, ArrowRight, Sparkles, GraduationCap, Award, FileText, CheckCircle2, FlaskConical, Cpu, Layers } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { GitHubIcon } from '../components/SocialIcons';
import RunningMarquee from '../components/RunningMarquee';
import ResearchLibrary from '../sections/ResearchLibrary';
import Contact from '../sections/Contact';

export default function ResearcherPage({ onSelectProject }) {
  // Key research projects with papers
  const researchProjects = projects.filter(p => 
    p.id === 'frozen-shoulder' || p.id === 'bac-motion-ai' || p.id === 'esg-forecasting' || p.id === 'medievidence'
  );

  const researchAreas = [
    { emoji: "🤖", title: "Artificial Intelligence", desc: "Foundation models, generative AI evaluation, explainable AI architectures and multi-agent systems." },
    { emoji: "🧠", title: "Machine Learning", desc: "Supervised and unsupervised learning, ensemble methods, empirical error bounds and biophysical chemotaxis." },
    { emoji: "📈", title: "Business Analytics", desc: "Customer lifetime value, conversion attribution, longitudinal econometric modeling and KPI diagnostics." },
    { emoji: "🌿", title: "ESG & Climate Finance", desc: "Quantitative ESG disclosure scoring, temporal drift modeling, stubble-burning remote sensing and asset risk forecasting." },
    { emoji: "🏥", title: "Healthcare & MedTech", desc: "Kinematic joint tracking, MediaPipe biomechanics, clinical evidence retrieval and sub-2-degree goniometer precision." },
    { emoji: "🚀", title: "Emerging Technologies", desc: "Edge AI inference, 5G/6G wireless AI integration, digital twin frameworks and privacy-preserving learning." },
    { emoji: "🧬", title: "Deep Learning & Bio-AI", desc: "Convolutional Neural Networks, Recurrent Architectures (LSTM, GRU), bacterial motility trajectories and Transformers." },
    { emoji: "👁️", title: "Computer Vision & NLP", desc: "Real-time pose landmark estimation, biomedical segmentation, semantic vector search with Qdrant." }
  ];

  return (
    <div className="space-y-16 py-4">
      {/* 1. Researcher Hero */}
      <section id="hero" className="relative pt-6 pb-12 border-b border-slate-800/80 bg-gradient-to-b from-cyan-950/20 via-[#090B12] to-[#090B12]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>🔬 RESEARCH &amp; APPLIED AI &bull; ACADEMIC PORTFOLIO</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Hi, I&apos;m Saniya — Research &amp; Applied AI
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Interested in interdisciplinary research across AI, machine learning, business analytics, ESG and finance, healthcare informatics and emerging technologies. Passionate about translating theoretical machine learning models into peer-reviewed published scientific work with verifiable real-world impact.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href="#research"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-cyan-600 hover:bg-cyan-500 shadow-lg shadow-cyan-600/30 transition"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Explore Domain Research Library (20+ Papers)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={profile.googleScholar}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-[#151B2B] hover:bg-[#1a2236] border border-cyan-500/30 transition shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>Google Scholar Profile</span>
                </a>
              </div>

              {/* Research Metrics */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
                <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 text-center">
                  <div className="text-xl sm:text-2xl font-black text-cyan-400">20+</div>
                  <div className="text-[11px] text-slate-400 font-mono">Published Papers</div>
                </div>
                <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 text-center">
                  <div className="text-xl sm:text-2xl font-black text-purple-400">6</div>
                  <div className="text-[11px] text-slate-400 font-mono">Scientific Domains</div>
                </div>
                <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">{profile.education.cgpa}</div>
                  <div className="text-[11px] text-slate-400 font-mono">B.Tech CGPA</div>
                </div>
                <div className="p-3 rounded-xl bg-[#111827] border border-slate-800 text-center">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">IEEE</div>
                  <div className="text-[11px] text-slate-400 font-mono">Published Proceedings</div>
                </div>
              </div>
            </div>

            {/* Right: Academic Persona Avatar */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group w-48 h-48 sm:w-56 sm:h-56">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-60 blur-lg group-hover:opacity-85 transition" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#151B2B] border-2 border-cyan-400/30 shadow-2xl">
                  <img
                    src={profile.profileImage}
                    alt="Saniya Saratkar"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-xl bg-black/85 backdrop-blur-md text-center border border-cyan-500/20">
                    <div className="text-[11px] font-bold text-white">Saniya Saratkar</div>
                    <div className="text-[9.5px] font-mono text-cyan-400">Researcher &bull; Applied AI</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Running Marquee */}
      <RunningMarquee items={["🔬 ACADEMIC RESEARCH", "📄 IEEE ICICT PROCEEDINGS", "🏥 CLINICAL COMPUTER VISION", "📈 LONGITUDINAL TIME-SERIES", "🧬 BIOMEDICAL AI", "🎓 GOOGLE SCHOLAR CITATIONS"]} />

      {/* 2. Research Areas Grid with Emojis */}
      <section id="areas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest">
            <span>🔬 ACADEMIC SPECTRUM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Core Interdisciplinary Research Areas
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Cross-disciplinary scientific investigation bridging theory, algorithmic design, and domain application.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {researchAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#111827] border border-slate-800 hover:border-cyan-500/40 transition group hover:shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-600/15 border border-cyan-500/25 flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition">
                <span>{area.emoji}</span>
              </div>
              <h3 className="font-bold text-white text-sm mb-1.5 flex items-center gap-1.5">
                <span>{area.emoji}</span>
                <span>{area.title}</span>
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Research-Linked Key Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase tracking-widest">
            <span>🧪 TRANSLATIONAL SYSTEMS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Research-Backed Projects &amp; Published Systems
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Selected projects that directly resulted from or contributed to peer-reviewed scientific literature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-3xl bg-[#111827] border border-slate-800 hover:border-cyan-500/40 transition flex flex-col justify-between shadow-xl space-y-4"
            >
              <div>
                <div 
                  className="aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer group"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="pt-4 space-y-2.5">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="font-bold text-white text-base hover:text-cyan-300 transition-colors cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Paper Link Badge if exists */}
                  {(project.paperLink || project.paperUrl) && (
                    <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between text-xs mt-2">
                      <span className="font-mono text-[11px] text-cyan-300 font-semibold truncate mr-2">
                        📄 {project.paperTitle || "Published Research Paper"}
                      </span>
                      <a
                        href={project.paperLink || project.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-cyan-400 hover:text-white inline-flex items-center gap-1 font-bold shrink-0"
                      >
                        <span>Paper</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 4).map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#151B2B] text-cyan-300 border border-slate-700/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1"
                >
                  <span>View Case Study</span>
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

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition"
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

      {/* 4. Complete Domain-Based Research Library with 7 Filter Tabs */}
      <ResearchLibrary />

      {/* 5. Academic Collaboration / Contact */}
      <Contact />
    </div>
  );
}

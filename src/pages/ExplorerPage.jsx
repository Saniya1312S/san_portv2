import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Compass, Zap, ArrowRight, Heart, ExternalLink, Code2, 
  Layers, Cpu, Database, Play, CheckCircle2, Flame, Award, Globe, 
  Lightbulb, Rocket, Milestone, HelpCircle, Star, Terminal, BookOpen
} from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { GitHubIcon } from '../components/SocialIcons';
import RunningMarquee from '../components/RunningMarquee';
import Contact from '../sections/Contact';

export default function ExplorerPage({ onSelectProject }) {
  // Gamified Roadmap Stages from Basic to Advanced
  const roadmapStages = [
    {
      level: "LEVEL 01",
      badge: "📊 Basic Data & Business Intelligence",
      title: "SQL, Excel & Business Analytics",
      description: "Mastering foundational data interrogation, multi-table joins, CTEs, and executive dashboards.",
      color: "from-sky-500/20 to-blue-500/10 border-sky-500/40 text-sky-400",
      accent: "#38bdf8",
      funFact: "💡 Fun Fact: In the 283K credit transactions audit, just 0.167% of cases accounted for over 52% of total financial loss!",
      skills: ["SQL (CTEs & Joins)", "Power BI", "Excel VLOOKUP/Pivot", "Cohort Analysis"],
      projectIds: ["olist-marketing", "card-fraud", "railway-operations"]
    },
    {
      level: "LEVEL 02",
      badge: "🐍 Python Engineering & Automated Pipelines",
      title: "Data Cleaning, Scripting & Microservices",
      description: "Moving from manual spreadsheets to automated Python scripts, Docker microservices, and n8n webhooks.",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/40 text-emerald-400",
      accent: "#10b981",
      funFact: "⚡ Behind-the-Scenes: At Deeptimaan Systems, automating recurring reporting via n8n & Docker eliminated 21.25% of manual executive prep!",
      skills: ["Python", "Pandas & NumPy", "n8n Webhooks", "Docker", "REST APIs"],
      projectIds: ["railway-operations", "card-fraud"]
    },
    {
      level: "LEVEL 03",
      badge: "🧠 Machine Learning & Biophysics",
      title: "Predictive Classifiers & Earth Observation",
      description: "Training machine learning algorithms on biophysical chemotaxis trajectories and Copernicus satellite thermal bands.",
      color: "from-amber-500/20 to-orange-500/10 border-amber-500/40 text-amber-400",
      accent: "#f59e0b",
      funFact: "🔬 Science Fact: Bacterial swimming trajectories were classified into 4 chemical conditions with 87.3% accuracy from raw (x, y) coordinates alone!",
      skills: ["Scikit-Learn", "Random Forest", "XGBoost", "Google Earth Engine", "Copernicus"],
      projectIds: ["bac-motion-ai", "esg-forecasting"]
    },
    {
      level: "LEVEL 04",
      badge: "👁️ Computer Vision & Real-Time Edge AI",
      title: "Biomechanical Tracking & Spatial AI",
      description: "Extracting 3D skeletal landmarks and joint angles in real time on standard consumer hardware without heavy GPUs.",
      color: "from-purple-500/20 to-indigo-500/10 border-purple-500/40 text-purple-400",
      accent: "#a855f7",
      funFact: "🎯 Real Clinical Impact: The Frozen Shoulder angle detector matches clinical physical goniometers within < 2 degrees of error and is published in IEEE ICICT!",
      skills: ["MediaPipe Pose & Hands", "OpenCV", "CNN", "Streamlit", "Edge Inference (30 FPS)"],
      projectIds: ["frozen-shoulder", "sign-assistant"]
    },
    {
      level: "LEVEL 05",
      badge: "🚀 Generative AI, Clinical RAG & Foundation Models",
      title: "PubMed Vector Retrieval & Longitudinal Forecasting",
      description: "Grounding LLMs with strict biomedical citations via Qdrant vector databases, and modeling 14 historical years of ESG time-series.",
      color: "from-red-500/20 to-pink-500/10 border-red-500/40 text-red-400",
      accent: "#ef4444",
      funFact: "🛡️ Safe AI Fact: MediEvidence has deterministic cosine refusal guards — it strictly refuses out-of-domain non-medical queries to avoid dangerous hallucinations!",
      skills: ["Qdrant Vector DB", "FastAPI", "Ollama / LLMs", "LSTM / GRU", "Prompt Engineering"],
      projectIds: ["medievidence", "esg-forecasting"]
    }
  ];

  // Selected level for interactive exploration
  const [activeLevelIdx, setActiveLevelIdx] = useState(0);

  // Random fun fact generator
  const allFunFacts = [
    { tag: "Bio-AI", text: "Bacteria swim in runs and tumbles. My ML pipeline proved that chemical attractants alter directional persistence significantly (p < 0.001)!" },
    { tag: "Healthcare CV", text: "Frozen Shoulder rehabilitation tracking runs 100% in the browser using MediaPipe Pose with zero hardware sensors!" },
    { tag: "Satellite AI", text: "Analyzed 200,000+ Copernicus satellite records in Google Earth Engine to detect active agricultural stubble fire anomalies." },
    { tag: "UC Berkeley", text: "Awarded an $8,500 UC Berkeley AI Scholarship to study advanced Generative AI and safe LLM evaluation in California!" },
    { tag: "Clean RAG", text: "MediEvidence retrieves exact PubMed citations so clinicians don't have to trust black-box AI responses." }
  ];
  const [funFactIdx, setFunFactIdx] = useState(0);

  const cycleFunFact = () => {
    setFunFactIdx((prev) => (prev + 1) % allFunFacts.length);
  };

  const activeStage = roadmapStages[activeLevelIdx];
  const stageProjects = projects.filter(p => activeStage.projectIds.includes(p.id));

  return (
    <div className="space-y-16 py-4">
      
      {/* 1. Joyful & Curious Explorer Hero */}
      <section id="hero" className="relative pt-6 pb-12 border-b border-slate-800/80 bg-gradient-to-b from-amber-950/20 via-[#090B12] to-[#090B12] overflow-hidden">
        
        {/* Playful Floating SVG Visual Nodes */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <circle cx="15%" cy="20%" r="4" fill="#f59e0b" className="animate-ping" />
            <circle cx="85%" cy="30%" r="3" fill="#38bdf8" />
            <circle cx="50%" cy="80%" r="5" fill="#a855f7" className="animate-pulse" />
            <path d="M 50,120 Q 300,50 600,140 T 1200,100" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 6" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
                <span>JOYFUL EXPLORATION &bull; LEARNING ROADMAP &bull; CURIOSITY</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
                Curious About Tech, <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                  Always Learning, Always Building.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans">
                Welcome to my interactive workshop! This is my personal learning journey from my very first SQL queries and Python scripts all the way to peer-reviewed computer vision models and clinical Generative AI assistants.
              </p>

              {/* Interactive Fun Fact Dice Bar */}
              <div className="pt-2">
                <div className="p-4 rounded-2xl bg-[#111827] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
                  <div className="flex items-center gap-3 text-left">
                    <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                      <Lightbulb className="w-5 h-5 animate-bounce" />
                    </span>
                    <div>
                      <div className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span>Curious Tech Discovery #{funFactIdx + 1}</span>
                        <span className="px-1.5 py-0.2 rounded bg-amber-400/20 text-amber-300 text-[9px]">{allFunFacts[funFactIdx].tag}</span>
                      </div>
                      <p className="text-xs text-slate-200 mt-0.5 font-medium">
                        &ldquo;{allFunFacts[funFactIdx].text}&rdquo;
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={cycleFunFact}
                    className="shrink-0 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-amber-300 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 transition flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Next Fact &rarr;</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Right: Explorer Portrait with Warm Glowing Aura */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative group w-48 h-48 sm:w-56 sm:h-56">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-60 blur-lg group-hover:opacity-85 transition" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#151B2B] border-2 border-amber-400/30 shadow-2xl">
                  <img
                    src={profile.profileImage}
                    alt="Saniya Saratkar"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-xl bg-black/85 backdrop-blur-md text-center border border-amber-500/20">
                    <div className="text-[11px] font-bold text-white">Saniya Saratkar</div>
                    <div className="text-[9.5px] font-mono text-amber-400">Curious Builder &bull; AI Explorer</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Running Marquee */}
      <RunningMarquee items={["🎮 GAMIFIED LEARNING ROADMAP", "💡 BEHIND-THE-SCENES INSIGHTS", "🔬 FROM SQL TO BIO-AI", "🚀 EDGE COMPUTER VISION", "✨ 0% BORING TEXT", "🧠 100% CURIOSITY DRIVEN"]} />

      {/* 2. Gamified Learning Roadmap: From Basic to Advanced */}
      <section id="roadmap" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="space-y-2 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest">
            <Milestone className="w-3.5 h-3.5" />
            <span>PROGRESSIVE LEARNING ROADMAP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            From 'Hello World' to Real-World AI Impact
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            Click through each level of my technical growth to see the projects, tools, and fun discoveries along the way.
          </p>
        </div>

        {/* Level Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-2 rounded-2xl bg-[#111827] border border-slate-800">
          {roadmapStages.map((stage, idx) => {
            const isSelected = activeLevelIdx === idx;
            return (
              <button
                key={stage.level}
                onClick={() => setActiveLevelIdx(idx)}
                className={`p-3 rounded-xl text-left transition-all flex flex-col justify-between ${
                  isSelected 
                    ? 'bg-amber-500/20 border-2 border-amber-500/60 shadow-lg text-white' 
                    : 'bg-[#151B2B]/60 hover:bg-[#151B2B] border border-slate-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                    {stage.level}
                  </span>
                  {isSelected && <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />}
                </div>
                <div className="text-xs font-bold mt-1 text-white truncate">
                  {stage.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Roadmap Level Showcase Card */}
        <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${activeStage.color} border shadow-2xl space-y-6 animate-fadeIn`}>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/60 text-amber-300 border border-amber-500/30">
                {activeStage.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                {activeStage.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl font-sans">
                {activeStage.description}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 max-w-md">
              <p className="text-xs text-amber-200 leading-relaxed font-mono">
                {activeStage.funFact}
              </p>
            </div>
          </div>

          {/* Unlocked Skills */}
          <div>
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              🛠️ Skills &amp; Powers Unlocked:
            </div>
            <div className="flex flex-wrap gap-2">
              {activeStage.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-black/70 text-slate-200 border border-white/15"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Level Projects Showcase */}
          <div className="space-y-3 pt-2">
            <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
              🚀 Key Landmark Projects at this Stage:
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stageProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="p-5 rounded-2xl bg-[#0e1220] border border-slate-800 hover:border-amber-500/40 transition flex flex-col justify-between group shadow-lg"
                >
                  <div className="space-y-2.5">
                    <div className="aspect-[16/9] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer" onClick={() => onSelectProject(proj)}>
                      <img
                        src={proj.image}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h4 
                      onClick={() => onSelectProject(proj)}
                      className="text-base font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer"
                    >
                      {proj.title}
                    </h4>

                    <p className="text-xs text-slate-300 line-clamp-2 font-sans">
                      {proj.shortDescription}
                    </p>

                    {/* Behind the scenes fact pill */}
                    {proj.funFact && (
                      <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 font-mono">
                        💡 {proj.funFact}
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2 mt-3">
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1"
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition flex items-center gap-1"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {(proj.paperLink || proj.paperUrl) && (
                        <a
                          href={proj.paperLink || proj.paperUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold text-purple-300 bg-purple-600/15 hover:bg-purple-600/25 border border-purple-500/30 transition flex items-center gap-1"
                        >
                          <span>Paper</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition"
                      >
                        <GitHubIcon className="w-3.5 h-3.5 inline mr-1" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </section>

      {/* 3. All 10 Projects Interactive Catalog (With Fun Facts & Direct Demos) */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase tracking-widest">
            <span>✨ COMPLETE PROJECT COMPENDIUM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            10 Real Projects, Real Data &amp; Real Code
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Click any project to see the problem statement, technical approach, verified outcome, and behind-the-scenes insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, idx) => (
            <div
              key={p.id}
              className="p-5 rounded-3xl bg-[#111827] border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-1 group"
            >
              <div className="space-y-3">
                <div 
                  className="aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer relative"
                  onClick={() => onSelectProject(p)}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-black/80 text-white border border-white/20">
                    {p.learningStage || p.categoryLabel}
                  </div>
                </div>

                <h3 
                  onClick={() => onSelectProject(p)}
                  className="text-base font-bold text-white group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1"
                >
                  {p.title}
                </h3>

                <p className="text-xs text-slate-300 line-clamp-2 font-sans">
                  {p.shortDescription}
                </p>

                {p.funFact && (
                  <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 font-mono line-clamp-2">
                    💡 {p.funFact}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-3">
                <button
                  onClick={() => onSelectProject(p)}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300"
                >
                  View Details &rarr;
                </button>

                <div className="flex items-center gap-1.5">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition"
                      title="Live Demo"
                    >
                      Demo
                    </a>
                  )}

                  {(p.paperLink || p.paperUrl) && (
                    <a
                      href={p.paperLink || p.paperUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2 py-1 rounded-lg text-xs font-semibold text-purple-300 bg-purple-600/15 hover:bg-purple-600/25 border border-purple-500/30 transition"
                      title="Published Paper"
                    >
                      Paper
                    </a>
                  )}

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2 py-1 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition"
                    title="GitHub Repository"
                  >
                    Code
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 4. Contact / Friendly Conversation Starter */}
      <Contact />

    </div>
  );
}

import React from 'react';
import { ArrowRight, Database, BarChart3, Cpu, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  // Required 6-step simple process
  const workflowSteps = [
    { name: "Collect", detail: "SQL, APIs, Web Scrapes" },
    { name: "Clean", detail: "Pandas, Validation, Regex" },
    { name: "Analyse", detail: "EDA, Stats, Cohorts" },
    { name: "Build", detail: "ML, PyTorch, RAG Pipelines" },
    { name: "Visualise", detail: "Power BI, Tableau, Charts" },
    { name: "Communicate", detail: "Executive Storytelling & ROI" }
  ];

  // Exactly the 5 requested compact skill clusters
  const skillGroups = [
    {
      title: "Data Analytics & BI",
      icon: <BarChart3 className="w-4 h-4 text-sky-400" />,
      color: "border-sky-500/30 text-sky-300",
      skills: [
        "SQL", "Python", "Excel", "Power BI", "Tableau", 
        "KPI Reporting", "EDA", "Business Analytics"
      ]
    },
    {
      title: "Data & Visualization",
      icon: <Database className="w-4 h-4 text-blue-400" />,
      color: "border-blue-500/30 text-blue-300",
      skills: [
        "Pandas", "NumPy", "Matplotlib", "Seaborn", 
        "DAX", "Power Query", "Data Modelling"
      ]
    },
    {
      title: "Data Science & AI",
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      color: "border-purple-500/30 text-purple-300",
      skills: [
        "Machine Learning", "Regression", "Classification", "Random Forest", "XGBoost", 
        "NLP", "CNN", "LSTM", "RAG", "LLMs", "Prompt Engineering"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-4 h-4 text-amber-400" />,
      color: "border-amber-500/30 text-amber-300",
      skills: [
        "MySQL", "Jupyter", "Google Colab", "GitHub", "Docker", "n8n", 
        "Postman", "JMeter", "Google Cloud Platform", "Google Earth Engine", "Copernicus"
      ]
    },
    {
      title: "Other Skills",
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      color: "border-emerald-500/30 text-emerald-300",
      skills: [
        "SEO", "Communication", "Data Storytelling", 
        "Leadership", "Collaboration", "Problem-Solving"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative bg-[#090B12] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-widest">
            <span>METHODOLOGY &amp; TOOLKIT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Skills &amp; How I Work With Data
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            A structured data workflow grounded in verified tools, reproducible pipelines, and measurable business outcomes.
          </p>
        </div>

        {/* Small Simple Process Bar: Collect → Clean → Analyse → Build → Visualise → Communicate */}
        <div className="p-5 rounded-2xl bg-[#111827] border border-slate-800 mb-10">
          <div className="text-[11px] font-mono font-bold uppercase text-slate-400 mb-3 flex items-center gap-1.5">
            <span>Data Workflow Process:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {workflowSteps.map((step, idx) => (
              <div
                key={step.name}
                className="p-3 rounded-xl bg-[#151B2B] border border-slate-800 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-500">0{idx + 1}</span>
                  {idx < 5 && (
                    <ArrowRight className="w-3 h-3 text-slate-600 hidden lg:block" />
                  )}
                </div>
                <div className="mt-2">
                  <div className="text-xs font-bold text-white">
                    {step.name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {step.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5 Compact Skill Categories with Tags */}
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="p-4 sm:p-5 rounded-2xl bg-[#111827] border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3"
            >
              {/* Category Name & Icon */}
              <div className="flex items-center gap-2.5 min-w-[210px]">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {group.icon}
                </div>
                <h3 className="text-sm font-bold text-white">
                  {group.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 flex-1 md:justify-end">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#151B2B] border border-slate-700/60 text-slate-200 hover:border-slate-500 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Layers, Cpu, Database, PieChart, Workflow, BarChart3 } from 'lucide-react';
import { workflowStages, technicalSkills, softSkills } from '../data/skills';

export default function CombinedSkills({ roleFilter = 'all' }) {
  const isDA = roleFilter === 'data-analyst';
  const isDS = roleFilter === 'data-science-ai';

  // Customize workflow stages based on role
  const daWorkflow = [
    { step: "01", name: "Problem Framing", detail: "Understand business goals, identify key metrics and define KPI benchmarks" },
    { step: "02", name: "SQL Extraction", detail: "Query multi-table transactional databases using CTEs, joins and subqueries" },
    { step: "03", name: "Data Cleaning", detail: "Handle missing values, deduplicate records and normalize schemas in Python" },
    { step: "04", name: "Exploratory Analysis", detail: "Perform statistical EDA, correlation matrices and cohort segmentation" },
    { step: "05", name: "Data Modeling", detail: "Design star schemas, establish dimensional tables and calculate DAX measures" },
    { step: "06", name: "Dashboard Design", detail: "Build interactive Power BI / Tableau dashboards with drill-downs" },
    { step: "07", name: "Executive Storytelling", detail: "Translate analytical findings into executive briefings and strategic impact" }
  ];

  const dsWorkflow = [
    { step: "01", name: "Hypothesis & Research", detail: "Empirical literature review, metric formulation and research question framing" },
    { step: "02", name: "Feature Engineering", detail: "Kinematic calculations, geometric invariants, text vectorization & embeddings" },
    { step: "03", name: "Model Architecture", detail: "Select classifiers, deep neural networks (CNN, LSTM, GRU) or RAG pipelines" },
    { step: "04", name: "Training & Validation", detail: "Leak-free cross-validation, hyperparameter tuning and early stopping" },
    { step: "05", name: "Evaluation & Testing", detail: "ROC-AUC, F1-scores, stationarity ADF tests and unit test suites" },
    { step: "06", name: "Deployment & Guardrails", detail: "Streamlit prototypes, edge MediaPipe inference and Qdrant vector retrieval" },
    { step: "07", name: "Scientific Reporting", detail: "Publication-grade research documentation, DOI registration and citations" }
  ];

  const activeWorkflow = isDA ? daWorkflow : isDS ? dsWorkflow : workflowStages;

  // Filter skills strictly per user requirements:
  // DA: only SQL, Excel, Python/Visualization, Business Intelligence, Analytics Tools (NO DevOps, NO SEO, NO ML/DL)
  // DS: only ML, DL & AI, Python & Scientific, AI Tools (NO SEO, NO Excel, NO DevOps)
  const filteredSkills = technicalSkills.filter((cluster) => {
    if (isDA) {
      return [
        "SQL & Database Management",
        "Excel & Data Analysis",
        "Python & Data Visualization",
        "Business Intelligence"
      ].includes(cluster.category);
    }
    if (isDS) {
      return [
        "Machine Learning",
        "Deep Learning & AI",
        "Python & Data Visualization",
        "Tools & Platforms"
      ].includes(cluster.category);
    }
    return true;
  });

  const stageColors = [
    { text: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
    { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10" },
    { text: "text-cyan-400", border: "border-cyan-500/30", bg: "bg-cyan-500/10" },
    { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10" },
    { text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10" },
    { text: "text-orange-400", border: "border-orange-500/30", bg: "bg-orange-500/10" },
    { text: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10" }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 relative bg-[#090B12] border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase tracking-widest">
            <Workflow className="w-3.5 h-3.5" />
            <span>{isDA ? "DATA ANALYST COMPETENCY MATRIX" : isDS ? "AI & DATA SCIENCE SKILL MATRIX" : "METHODOLOGY & TECHNICAL CAPABILITY MAP"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {isDA ? "Core Data Analyst Skills & Workflow" : isDS ? "AI & Machine Learning Competencies" : "Technical Skills & Data Workflow"}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            {isDA 
              ? "Focused technical skillset spanning SQL querying, Excel modeling, Python EDA, Power BI / Tableau dashboards, and business KPI reporting."
              : isDS 
              ? "Hands-on machine learning, deep learning, computer vision, and clinical RAG development with verified algorithmic pipelines."
              : "A structured, repeatable analytical process turning raw information into verified models, interactive dashboards, and strategic business decisions."}
          </p>
        </div>

        {/* 1. First: My Data Workflow Animated Pipeline */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#111827] border border-slate-800 mb-14 shadow-2xl relative overflow-hidden">
          <div className="text-xs font-mono font-bold uppercase text-slate-300 mb-6 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="text-white text-sm">
                {isDA ? "Data Analytics Workflow Pipeline" : isDS ? "AI / ML Research & Engineering Pipeline" : "My Data Workflow"}
              </span>
            </span>
            <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
              {isDA ? "Problem &rarr; SQL &rarr; Clean &rarr; EDA &rarr; Model &rarr; Visualise &rarr; Storytelling" : "7-Step Repeatable Pipeline"}
            </span>
          </div>

          {/* 7-Stage Flowing Pipeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
            {activeWorkflow.map((stage, idx) => {
              const color = stageColors[idx % stageColors.length];
              return (
                <div
                  key={stage.name}
                  className="relative p-4 rounded-2xl bg-[#151B2B] border border-slate-800 hover:border-slate-700 transition flex flex-col justify-between group hover:scale-[1.02]"
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${color.bg} ${color.text} border ${color.border}`}>
                      {stage.step}
                    </span>
                    {idx < 6 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>

                  <div className="mt-4 space-y-1">
                    <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors">
                      {stage.name}
                    </h4>
                    <p className="text-[10.5px] text-slate-400 leading-snug font-sans">
                      {stage.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Structured Technical Skills Groups */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              {isDA ? "Data Analyst Technical Domains" : isDS ? "Data Science & AI Domains" : "Technical Competencies Matrix"}
            </div>
            <span className="text-[11px] font-mono text-slate-500">{filteredSkills.length} Core Domains</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {filteredSkills.map((cluster) => (
              <div
                key={cluster.category}
                className="p-6 rounded-2xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isDA ? 'bg-sky-500' : isDS ? 'bg-purple-500' : 'bg-red-600'}`} />
                    <span>{cluster.category}</span>
                  </h3>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {cluster.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-[#151B2B] text-slate-300 border border-slate-700/60 hover:border-slate-500 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Soft Skills (Exact 8 Competencies) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#111827] border border-slate-800 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono font-bold uppercase text-emerald-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Professional &amp; Soft Competencies</span>
            </div>
            <span className="text-[11px] font-mono text-slate-500">8 Core Strengths</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {softSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#151B2B] border border-slate-800/80 hover:border-slate-700 flex items-center gap-2.5 transition text-slate-200"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold font-sans">{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

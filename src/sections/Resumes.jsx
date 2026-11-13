import React from 'react';
import { FileText, Download, Eye, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';
import { profile } from '../data/profile';

export default function Resumes({ onPreviewResume, roleFilter }) {
  const showAnalyst = !roleFilter || roleFilter === 'data-analyst' || roleFilter === 'all';
  const showScientist = !roleFilter || roleFilter === 'data-science-ai' || roleFilter === 'all';

  return (
    <section id="resumes" className="py-16 md:py-24 relative bg-[#090B12] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-600/10 text-red-400 border border-red-500/30 uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {roleFilter === 'data-analyst' ? 'Data Analyst Resume' : roleFilter === 'data-science-ai' ? 'Data Scientist & AI Resume' : 'My Resumes'}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl">
            {roleFilter === 'data-analyst' 
              ? 'ATS-optimized 1-page A4 PDF resume tailored specifically for Data Analyst and Business Analytics roles.'
              : roleFilter === 'data-science-ai'
              ? 'ATS-optimized 1-page A4 PDF resume tailored specifically for Data Scientist and Machine Learning positions.'
              : 'Two separate ATS-optimized 1-page PDF resumes tailored specifically for Data Analyst and Data Scientist / AI positions.'}
          </p>
        </div>

        {/* Resume Cards */}
        <div className={`grid gap-6 ${showAnalyst && showScientist ? 'grid-cols-1 md:grid-cols-2' : 'max-w-xl mx-auto'}`}>
          
          {/* Card 1: Data Analyst Resume */}
          {showAnalyst && (
            <div className="p-6 sm:p-7 rounded-3xl bg-[#111827] border border-slate-800 hover:border-sky-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    <FileText className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    1-Page A4 ATS PDF
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white">
                  Data Analyst Resume
                </h3>

                <div className="text-xs font-mono text-sky-400 font-bold">
                  SQL | Python | Excel | Power BI | Tableau
                </div>

                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>File: Saniya_Saratkar_Data_Analyst_Resume.pdf &bull; Updated Nov 2026</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Focused on SQL query optimization, data cleaning, exploratory analysis, Power BI/Tableau dashboard reporting, and KPI business metrics.
                </p>

                <div className="space-y-1.5 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified 1-page A4 format with selectable text</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Highlights Olist Funnel Analytics &amp; Railway Operations</span>
                  </div>
                </div>
              </div>

              {/* Actions: Preview Resume & Download PDF */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <button
                  onClick={() => onPreviewResume('analyst')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
                >
                  <Eye className="w-3.5 h-3.5 text-sky-400" />
                  <span>Preview PDF</span>
                </button>

                <a
                  href={profile.resumeDataAnalyst}
                  download="Saniya_Saratkar_Data_Analyst_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition shadow-md shadow-sky-600/30"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          )}

          {/* Card 2: Data Scientist Resume */}
          {showScientist && (
            <div className="p-6 sm:p-7 rounded-3xl bg-[#111827] border border-slate-800 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between">
                  <span className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <FileText className="w-5 h-5" />
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    1-Page A4 ATS PDF
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white">
                  Data Scientist &amp; AI Resume
                </h3>

                <div className="text-xs font-mono text-purple-400 font-bold">
                  Machine Learning | Deep Learning | NLP | PyTorch | RAG
                </div>

                <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5 bg-black/30 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>File: Saniya_Saratkar_Data_Scientist_Resume.pdf &bull; Updated Nov 2026</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Tailored for Machine Learning, Deep Learning, NLP, Computer Vision, and Generative AI roles with research publication references.
                </p>

                <div className="space-y-1.5 text-xs text-slate-400 pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified 1-page A4 format with selectable text</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Highlights MediEvidence RAG, SignAssistant &amp; IEEE Paper</span>
                  </div>
                </div>
              </div>

              {/* Actions: Preview Resume & Download PDF */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <button
                  onClick={() => onPreviewResume('scientist')}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
                >
                  <Eye className="w-3.5 h-3.5 text-purple-400" />
                  <span>Preview PDF</span>
                </button>

                <a
                  href={profile.resumeDataScientist}
                  download="Saniya_Saratkar_Data_Scientist_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 transition shadow-md shadow-purple-600/30"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

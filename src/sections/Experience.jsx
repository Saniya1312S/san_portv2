import React, { useState } from 'react';
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp, CheckCircle2, Award, Briefcase, GraduationCap, Globe } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience({ roleFilter }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Company logo badges
  const companyLogos = {
    'deeptimaan': { bg: 'bg-red-500/10 text-red-400 border-red-500/30', label: 'DS', name: 'Deeptimaan' },
    'iit-kgp': { bg: 'bg-sky-500/10 text-sky-400 border-sky-500/30', label: 'IIT', name: 'IIT KGP' },
    'isro-nrsc': { bg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30', label: 'ISRO', name: 'NRSC' },
    'uc-berkeley': { bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30', label: 'UCB', name: 'Berkeley' },
    'ignite-center': { bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', label: 'IC', name: 'Ignite' }
  };

  return (
    <section id="experience" className="py-16 md:py-24 relative bg-[#090B12] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-600/10 text-red-400 border border-red-500/30 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER ROADMAP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Professional Experience Roadmap
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            A chronological timeline of industry internships, research fellowships and AI mentorship.
          </p>
        </div>

        {/* Straight Vertical Roadmap with Continuous Connecting Line */}
        <div className="relative">
          
          {/* Continuous Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-gradient-to-b from-red-500 via-sky-500 via-cyan-500 via-amber-500 to-emerald-500 opacity-60" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, idx) => {
              const isExpanded = expandedId === exp.id;
              const logo = companyLogos[exp.id] || { bg: 'bg-white/10 text-white', label: 'EXP' };
              
              // Select bullets based on role context
              const bulletsToShow = 
                roleFilter === 'data-analyst' && exp.daBullets ? exp.daBullets :
                roleFilter === 'data-science-ai' && exp.dsBullets ? exp.dsBullets :
                exp.bullets;

              return (
                <div key={exp.id} className="relative pl-12 sm:pl-16 group">
                  
                  {/* Distinct Roadmap Timeline Node */}
                  <div
                    className="absolute left-2.5 sm:left-4.5 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full border-4 border-[#090B12] shadow-lg flex items-center justify-center transition-all duration-300 group-hover:scale-125 z-10"
                    style={{ backgroundColor: exp.color }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                  </div>

                  {/* Experience Card */}
                  <div className="p-5 sm:p-7 rounded-2xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition shadow-xl space-y-4">
                    
                    {/* Header Row: Logo, Company, Role, Badges, Dates */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-800/80 pb-4">
                      
                      <div className="flex items-start gap-3.5">
                        {/* Company Logo Badge */}
                        <div className={`w-11 h-11 rounded-xl flex flex-col items-center justify-center font-black text-xs font-mono border shrink-0 ${logo.bg}`}>
                          <span>{logo.label}</span>
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-lg sm:text-xl font-black text-white">
                              {exp.company}
                            </h3>
                            {exp.workArrangement === 'Remote' && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-500/15 text-sky-400 border border-sky-500/30">
                                REMOTE
                              </span>
                            )}
                            {exp.id === 'uc-berkeley' && (
                              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                                <Award className="w-3 h-3 text-amber-400" />
                                $8,500 Scholarship
                              </span>
                            )}
                          </div>

                          <div className="text-sm font-semibold text-slate-300 mt-0.5">
                            {exp.role}
                          </div>
                        </div>
                      </div>

                      {/* Dates and Location */}
                      <div className="text-xs font-mono text-slate-400 space-y-1 sm:text-right shrink-0">
                        <div className="flex items-center sm:justify-end gap-1.5 text-slate-300 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-red-500" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center sm:justify-end gap-1.5 text-slate-400">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                    </div>

                    {/* Concise High-Impact Bullet Points */}
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                      {bulletsToShow.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Expandable Deep-Dive Details */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-slate-800 space-y-3 text-xs text-slate-300 animate-fadeIn">
                        <div className="p-3.5 rounded-xl bg-black/40 border border-slate-800 space-y-2.5">
                          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                            Technical Context, Architecture &amp; Deliverables:
                          </span>
                          <p className="leading-relaxed">
                            {exp.id === 'deeptimaan' && "Operated within production CRM databases to build automated lead intelligence pipelines. Integrated n8n webhooks with Dockerized microservices to eliminate recurring manual exports for executives. Applied NLP sentiment analysis across 50K customer records using Python, Pandas, and NumPy for automated executive dashboards."}
                            {exp.id === 'iit-kgp' && "Remote research fellowship examining temporal ESG disclosures across 50 listed companies over 14 historical years (~100,000 records). Formulated time-series backtests comparing classical statistical models (ARIMA, SARIMA) against deep recurrent neural networks (LSTM, Chronos) for ESG disclosure projections."}
                            {exp.id === 'isro-nrsc' && "Utilized Copernicus multi-spectral thermal bands in Google Earth Engine to monitor active stubble burning coordinates across northern agricultural belts (200K+ satellite records), generating analytical reports and Streamlit prototypes for senior scientists."}
                            {exp.id === 'uc-berkeley' && "Completed rigorous on-campus fellowship in Berkeley, CA focusing on advanced generative AI evaluation, prompt engineering paradigms, ethical safety alignments, and domain-grounded LLM systems."}
                            {exp.id === 'ignite-center' && "Led technical guidance sessions for undergraduate cohorts on machine learning pipelines, ESG quantitative methodologies, time-series forecasting, and real-world applied analytics."}
                          </p>
                          <div className="pt-1.5 flex flex-wrap gap-1.5 items-center">
                            <span className="text-[10px] font-mono text-slate-500 uppercase">Core Competencies:</span>
                            {exp.tools.map((t, idx) => (
                              <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-emerald-300 border border-emerald-500/30">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Card Footer: Tools, Expand Toggle, LinkedIn Button */}
                    <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-3">
                      
                      {/* Tools Used - display all skills directly */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] font-mono text-slate-500 uppercase mr-1">Skills:</span>
                        {exp.tools.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#151B2B] text-slate-300 border border-slate-700/60 hover:border-slate-500 transition"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        {/* Toggle Expand Details */}
                        <button
                          onClick={() => toggleExpand(exp.id)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-mono text-slate-400 hover:text-white transition"
                        >
                          <span>{isExpanded ? 'Less' : 'Details'}</span>
                          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>

                        {/* Verified LinkedIn Post Link */}
                        {exp.linkedInPost && (
                          <a
                            href={exp.linkedInPost}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-blue-300 bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 transition shadow-sm"
                          >
                            <span>LinkedIn Post</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { ExternalLink, Info, Filter, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { projects } from '../data/projects';
import { GitHubIcon } from '../components/SocialIcons';

export default function Projects({ onSelectProject, activePersona }) {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (activePersona === 'analytics') {
      setFilter('analytics');
    } else if (activePersona === 'ai') {
      setFilter('ai');
    } else {
      setFilter('all');
    }
  }, [activePersona]);

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const countAll = projects.length; // 10
  const countAnalytics = projects.filter((p) => p.category === 'analytics').length; // 3
  const countAI = projects.filter((p) => p.category === 'ai').length; // 7

  return (
    <section id="projects" className="py-16 md:py-24 relative bg-[#090B12] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30 uppercase tracking-widest">
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Real dashboard screenshots, verified insights, reproducible algorithms, and direct GitHub repositories.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#111827] border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                filter === 'all'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ALL PROJECTS ({countAll})
            </button>
            <button
              onClick={() => setFilter('analytics')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                filter === 'analytics'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              DATA ANALYTICS ({countAnalytics})
            </button>
            <button
              onClick={() => setFilter('ai')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                filter === 'ai'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              DATA SCIENCE &amp; AI ({countAI})
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Real Project Screenshot with Category Badge */}
                <div 
                  className="aspect-[16/9.5] bg-slate-900 relative overflow-hidden cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top filter brightness-[0.95] group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-black/75 text-white backdrop-blur-md border border-white/15">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Highlights Badge */}
                  {project.badge && (
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <span className="inline-block text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-black/85 text-emerald-400 border border-emerald-500/30 backdrop-blur-md truncate max-w-full">
                        {project.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-base font-black text-white group-hover:text-red-400 transition-colors line-clamp-2 cursor-pointer leading-snug"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 font-sans">
                    {project.shortDescription}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10.5px] font-mono bg-[#151B2B] text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="text-[10px] font-mono text-slate-500 self-center">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions: Visible GitHub Repository Link & Details Action */}
              <div className="p-5 sm:p-6 pt-0 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-red-400 transition"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition"
                      title="Live Interactive Demo"
                    >
                      <span>Demo</span>
                      <ArrowUpRight className="w-3 h-3" />
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

                  {/* Visible GitHub Link directly on the card */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition shadow-sm"
                    title="Open GitHub Repository"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

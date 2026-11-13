import React from 'react';
import { Award, Briefcase, BookOpen, Users, ArrowRight, FileText } from 'lucide-react';
import { profile } from '../data/profile';

export default function About({ onOpenResume }) {
  const highlights = [
    {
      icon: <Award className="w-5 h-5 text-purple-400" />,
      title: "$8,500 UC Berkeley AI Scholarship",
      desc: "Merit-based competitive fellowship for applied AI and LLM research."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-blue-400" />,
      title: "Industry & Research Internships",
      desc: "Hands-on experience at Deeptimaan Systems, IIT Kharagpur, ISRO NRSC and UC Berkeley."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-cyan-400" />,
      title: "20+ Verified Research Publications",
      desc: "Peer-reviewed scientific papers and conference proceedings indexed on Google Scholar."
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-400" />,
      title: "Leadership & Community Involvement",
      desc: "Google Developer Group Data Science Head and Student Council Vice President coordinating 50+ campus events."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-20 relative bg-[#090B12] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 text-slate-300 border border-white/10 uppercase tracking-widest">
            <span>BACKGROUND</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            I am an Artificial Intelligence and Data Science graduate interested in solving practical problems through data analytics, business intelligence, research and AI. My experience spans industry internships, scientific research and applied projects.
          </p>
        </div>

        {/* 4 Compact Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Actions */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400">
            Education: <strong className="text-white">B.Tech in AI &amp; Data Science</strong> (AIHER, 8.35/10 CGPA)
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-[#151B2B] hover:bg-slate-800 border border-slate-700 transition"
            >
              <FileText className="w-3.5 h-3.5 text-sky-400" />
              <span>View Resumes</span>
            </button>
            <a
              href="#experience"
              className="inline-flex items-center gap-1 text-xs font-semibold text-red-400 hover:text-red-300 transition"
            >
              <span>Explore Career Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

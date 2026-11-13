import React from 'react';
import { Award, Trophy, Compass, Users, BookOpen, Star } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  const iconMap = {
    Award: <Award className="w-6 h-6 text-amber-500" />,
    Trophy: <Trophy className="w-6 h-6 text-yellow-500" />,
    Compass: <Compass className="w-6 h-6 text-blue-500" />,
    Users: <Users className="w-6 h-6 text-emerald-500" />,
    BookOpen: <BookOpen className="w-6 h-6 text-violet-500" />,
  };

  return (
    <section className="py-20 md:py-24 relative bg-slate-50/40 dark:bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <span>LEADERSHIP &amp; RECOGNITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Honors &amp; Campus Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Demonstrated initiative through executive student council leadership, technical mentoring, and competitive hackathon recognition.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-navy-700/80 flex flex-col justify-between glass-panel-hover"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-100 dark:bg-navy-800">
                    {iconMap[item.icon]}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-navy-900 px-2.5 py-1 rounded-md border border-amber-200 dark:border-navy-700">
                    {item.award}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 dark:border-navy-800 text-[11px] font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-amber-500" />
                <span>Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

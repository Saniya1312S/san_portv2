import React from 'react';
import { Briefcase, Mail } from 'lucide-react';
import { openRolesData } from '../data/openRoles';
import { profile } from '../data/profile';

export default function OpenRoles() {
  return (
    <section id="open-roles" className="py-12 border-b border-slate-800/80 bg-[#090B12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Open to Opportunities
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            {openRolesData.description}
          </p>
        </div>

        {/* Small Group of Role Chips */}
        <div className="flex flex-wrap items-center gap-2.5">
          {openRolesData.roles.map((role) => (
            <div
              key={role.id}
              className="px-3.5 py-2 rounded-xl bg-[#111827] border border-slate-800 hover:border-emerald-500/40 text-xs font-semibold text-slate-200 hover:text-white transition shadow-sm flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{role.title}</span>
            </div>
          ))}
        </div>

        {/* Small Trailing Line */}
        <div className="mt-4 pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
          <span>And other relevant opportunities.</span>
          <a
            href={`mailto:${profile.email}?subject=Opportunity%20Discussion`}
            className="text-red-400 hover:text-red-300 font-semibold inline-flex items-center gap-1 transition"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Discuss a Role</span>
          </a>
        </div>

      </div>
    </section>
  );
}

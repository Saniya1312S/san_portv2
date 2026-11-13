import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';
import { LinkedInIcon, GitHubIcon } from '../components/SocialIcons';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUri = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUri;
    setStatus('Message client launched!');
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-[#090B12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase tracking-widest">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-sm text-slate-300 max-w-2xl">
            Open to entry-level opportunities, analytics roles, research collaborations and practical AI projects.
          </p>
        </div>

        {/* Contact Info & Channels */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & 4 Required Buttons */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Direct Communication</h3>
              
              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-red-500 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Email</div>
                    <a href={`mailto:${profile.email}`} className="text-white font-semibold hover:text-red-400 transition">
                      {profile.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Phone</div>
                    <a href={`tel:${profile.phone}`} className="text-white font-semibold hover:text-emerald-400 transition">
                      {profile.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-sky-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Location</div>
                    <div className="text-white font-semibold">{profile.location}</div>
                  </div>
                </div>
              </div>

              {/* 4 Required Action Buttons */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="text-[11px] font-mono uppercase text-slate-400">Professional Profiles:</div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition shadow-sm"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </a>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white bg-[#0A66C2] hover:bg-[#095196] transition shadow-sm"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profile.googleScholar}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white bg-cyan-700 hover:bg-cyan-600 transition"
                  >
                    <span>Scholar</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-7 rounded-2xl bg-[#111827] border border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-white">Send a Direct Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 uppercase">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Recruiter or Hiring Manager"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B2B] border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-slate-400 uppercase">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B2B] border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 uppercase">Subject / Role</label>
                <input
                  type="text"
                  required
                  placeholder="Data Analyst Opportunity / Research Collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B2B] border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-mono text-slate-400 uppercase">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Hello Saniya, we reviewed your projects and would like to discuss..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#151B2B] border border-slate-700/80 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-500 shadow-lg shadow-red-600/30 transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message via Email Client</span>
              </button>

              {status && (
                <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs text-center font-mono">
                  {status}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

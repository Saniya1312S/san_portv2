import React, { useState, useEffect } from 'react';
import { Menu, X, Timer, Mail, LogOut, Sparkles } from 'lucide-react';
import { profilesList, profile } from '../data/profile';

export default function NetflixNavbar({
  currentRole,
  onOpenProfileSelector,
  onOpen30sFastView
}) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeProfile = profilesList.find(p => p.id === currentRole) || profilesList[0];

  // Navigation Links: Home, About, Skills, Experience, Projects, Research, Certifications, Contact
  // (Resume option removed from top menu, 30s Fast View added)
  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    ...(currentRole !== 'data-analyst' && currentRole !== 'data-science-ai' ? [{ name: 'Research', href: '#research', id: 'research' }] : []),
    ...(currentRole !== 'explorer' && currentRole !== 'researcher' ? [{ name: 'Certifications', href: '#certifications', id: 'certifications' }] : []),
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  // Active scroll highlight via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [currentRole]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#090B12]/95 backdrop-blur-md border-b border-slate-800/80 py-2.5 shadow-xl'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          
          {/* Left: Brand Name + Profile Label */}
          <div className="flex items-center gap-3">
            <a
              href="#hero"
              className="text-base sm:text-lg font-black text-white tracking-wider uppercase font-sans hover:text-red-500 transition-colors"
            >
              <span className="text-red-600">SANIYA</span> SARATKAR
            </a>

            {/* Profile Label */}
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="font-semibold text-white">{activeProfile.name}</span>
            </span>
          </div>

          {/* Center: Desktop Navigation Links with Active Glow / Indicator */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/10 shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Utility: 30s Fast View & Profile Control */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* 30-Second Fast View Button (Replaces resume option in top menu) */}
            <button
              onClick={onOpen30sFastView}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-600/30 transition transform hover:scale-[1.02] active:scale-95"
              title="Open 30s Executive Recruiter Fast View"
            >
              <Timer className="w-3.5 h-3.5" />
              <span>30s Fast View</span>
            </button>

            {/* Contact Action */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>

            {/* Switch Profile / Exit Profile Avatar Control */}
            <button
              onClick={onOpenProfileSelector}
              className="group flex items-center gap-2 pl-1 pr-2.5 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition"
              title="Switch Profile / Who's Watching?"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden border border-white/20 group-hover:border-white shadow transition-all duration-200 group-hover:scale-105 bg-slate-800">
                <img
                  src={activeProfile.avatar}
                  alt={activeProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[11px] font-mono text-slate-300 group-hover:text-white hidden sm:inline">
                Exit
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e18] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg ${
                  activeSection === link.id
                    ? 'bg-red-600 text-white'
                    : 'bg-white/5 text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpen30sFastView();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-red-600"
            >
              <Timer className="w-4 h-4" />
              <span>30s Fast View Scan</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenProfileSelector();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-800 border border-slate-700"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Switch Profile (Who&apos;s Watching?)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

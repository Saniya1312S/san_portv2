import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText, Download, Sparkles, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ darkMode, setDarkMode, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      // Calculate scroll progress percentage
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledPercent = (winScroll / height) * 100;
      setScrollProgress(scrolledPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/85 dark:bg-navy-950/85 backdrop-blur-md border-b border-slate-700/50 dark:border-navy-800/80 shadow-lg' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400 transition-all duration-150 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 p-[1.5px] shadow-glow-blue transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center font-bold text-base tracking-wider text-white font-mono">
                SS
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-100 group-hover:text-blue-400 transition-colors">
                Saniya Saratkar
              </span>
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Data &amp; AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white dark:text-slate-300 dark:hover:text-white rounded-lg hover:bg-slate-800/50 dark:hover:bg-navy-800/60 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Controls: Theme Toggle & Resume Actions */}
          <div className="hidden sm:flex items-center space-x-2.5">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-800/50 dark:bg-navy-900/70 border border-slate-700/60 dark:border-navy-700 hover:border-slate-500 transition-all"
              aria-label="Toggle Theme"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
            </button>

            {/* Resume Button with Modal Trigger */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/80 dark:bg-navy-800 border border-slate-700/80 dark:border-navy-700 hover:border-blue-500/60 hover:bg-slate-700/60 transition-all shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>View 1-Page Resume</span>
            </button>

            {/* Direct Download Button */}
            <a
              href={personalInfo.resumePdf}
              download="Saniya_Saratkar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-glow-blue transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl text-slate-300 bg-slate-800/60 border border-slate-700"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 bg-slate-800/60 border border-slate-700"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-900/95 dark:bg-navy-950/95 backdrop-blur-xl border-b border-slate-800 px-5 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/80"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-200 bg-slate-800 rounded-xl border border-slate-700"
            >
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Preview 1-Page Resume (DA &amp; BA)</span>
            </button>

            <a
              href={personalInfo.resumePdf}
              download="Saniya_Saratkar_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume PDF</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import React from 'react';
import { PERSONAL_INFO } from '../data/projects';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-slate-950 bg-slate-950 py-12 text-xs text-slate-300 overflow-hidden w-full max-w-full shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 p-1 flex items-center justify-center shadow-xs">
              <img src="/breakx-logo.png" alt="BreakX Studio Logo" className="w-full h-full object-contain brightness-0 invert" />
            </div>
            <div>
              <span className="font-bold text-white text-base tracking-tight font-display">
                BreakX Studio
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-semibold text-slate-300">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-sky-400 transition-colors font-mono"
            >
              Email
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white transition-all text-xs shadow-xs cursor-pointer font-medium"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-slate-400" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs font-medium">
          <div>
            &copy; {new Date().getFullYear()} BreakX Studio. Built with React, TypeScript &amp; Tailwind CSS.
          </div>
          <div className="flex items-center gap-2 font-mono text-slate-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Serving Clients Worldwide &middot; GMT+5</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, ExternalLink, Video, CheckCircle2, Globe } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-sm transition-all">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Window - Grey Inner Card Tone */}
      <div className="relative w-full max-w-4xl bg-[#EEF0F4] border border-[#D2D6DE] rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D2D6DE] bg-[#E4E7EC]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-lime-100 border border-lime-300 text-lime-900">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {project.statusBadge || 'Production Deployment'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-[#EEF0F4] hover:bg-white text-slate-500 hover:text-slate-900 transition-colors cursor-pointer border border-[#D2D6DE]"
            aria-label="Close Project Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {/* Project Title & Tagline */}
          <div className="mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display mb-1.5">
              {project.name}
            </h2>
            <p className="text-sky-700 text-sm sm:text-base font-medium">
              {project.tagline}
            </p>
          </div>

          {/* Browser Mockup Image Preview - 100% Unclipped, Unzoomed Navbar */}
          <div className="rounded-xl overflow-hidden bg-white border-2 border-[#D2D6DE] shadow-md mb-8">
            <div className="flex items-center justify-between px-4 py-2 bg-[#E4E7EC] border-b border-[#D2D6DE] text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-lime-500" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-[#D2D6DE] text-[11px] font-mono text-slate-700 truncate max-w-sm shadow-inner">
                <Globe className="w-3 h-3 text-sky-600" />
                <span>{project.liveUrl}</span>
              </div>
              <span className="text-[10px] font-mono text-slate-500 hidden sm:inline">
                Full Viewport Capture
              </span>
            </div>
            <div className="relative overflow-hidden bg-slate-100">
              <img
                src={project.posterImage}
                alt={project.name}
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Left 2 cols: Description & Highlights */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider mb-2">
                  Project Overview
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider mb-3">
                  Key Architectural Points
                </h4>
                <div className="space-y-2.5">
                  {project.highlightPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right col: Stack & Info */}
            <div className="space-y-6 bg-white border border-[#D2D6DE] p-5 rounded-xl shadow-xs">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded bg-[#EEF0F4] border border-[#D2D6DE] text-xs font-mono text-slate-800 font-medium shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider mb-1">
                  Deployment Platform
                </h4>
                <p className="text-xs text-slate-800 font-mono font-semibold">
                  Vercel Edge Network
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase text-slate-700 tracking-wider mb-1">
                  Engineering Scope
                </h4>
                <p className="text-xs text-slate-600">
                  Responsive UI, Micro-Interactions, Asset Optimization &amp; Production Build
                </p>
              </div>
            </div>
          </div>

          {/* Action CTAs inside Modal */}
          <div className="pt-6 border-t border-[#D2D6DE] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold text-xs tracking-wide shadow-md shadow-sky-500/20 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Open Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {project.linkedinVideoUrl && (
                <a
                  href={project.linkedinVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-lime-100 hover:bg-lime-200 border border-lime-300 text-lime-900 font-semibold text-xs transition-all"
                >
                  <Video className="w-4 h-4 text-lime-700" />
                  <span>{project.linkedinVideoUrl2 ? 'Watch LinkedIn Demo 1' : 'Watch LinkedIn Video Demo'}</span>
                </a>
              )}
              {project.linkedinVideoUrl2 && (
                <a
                  href={project.linkedinVideoUrl2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-lime-100 hover:bg-lime-200 border border-lime-300 text-lime-900 font-semibold text-xs transition-all"
                >
                  <Video className="w-4 h-4 text-lime-700" />
                  <span>Watch LinkedIn Demo 2</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

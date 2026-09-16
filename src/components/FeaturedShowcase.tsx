import React, { useState } from 'react';
import type { Project } from '../types';
import { ExternalLink, Sparkles, CheckCircle2, Video, Globe, ArrowRight } from 'lucide-react';

interface FeaturedShowcaseProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

export const FeaturedShowcase: React.FC<FeaturedShowcaseProps> = ({ projects, onOpenModal }) => {
  const featured = projects.filter((p) => p.featured);
  // State for BreakX version switcher (v1.0 vs v2.0)
  const [breakXVersion, setBreakXVersion] = useState<'v2.0' | 'v1.0'>('v2.0');

  const breakXLinks = {
    'v2.0': {
      label: 'BreakX 2.0 (Refined Architecture)',
      videoUrl: 'https://www.linkedin.com/posts/m-hasnain-shaukat-398b4b2a8_breakx-20previous-one-seems-a-bit-of-activity-7499223656221437952-rB-h',
      description: 'Major UX overhaul with refined contrast, elevated typography, and fluid micro-interactions.'
    },
    'v1.0': {
      label: 'BreakX 1.0 (Initial Release)',
      videoUrl: 'https://www.linkedin.com/posts/m-hasnain-shaukat-398b4b2a8_another-day-another-project-breakx-activity-7498344250817019904-VF9E',
      description: 'The original high-impact creative concept that started the BreakX design evolution.'
    }
  };

  return (
    <section id="featured" className="py-16 sm:py-24 border-t border-[#D5D0DF] relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-slate-800 text-xs font-mono font-medium mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Editorial Spotlight</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
              Featured Flagships
            </h2>
            <p className="text-slate-900 font-medium text-base sm:text-lg max-w-xl mt-2">
              Three standout web applications representing luxury e-commerce, continuous brand iteration, and interactive dining platforms.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-600 bg-[#EEF0F4] px-3 py-1.5 rounded-lg border border-[#D2D6DE] shadow-xs self-start md:self-auto">
            01 &mdash; 03 of 16 Showcases
          </div>
        </div>

        {/* Featured Projects List */}
        <div className="space-y-12 sm:space-y-16">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;
            const isBreakX = project.id === 'break-x';

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#EEF0F4] border border-[#D2D6DE] p-4 sm:p-8 lg:p-10 transition-all hover:border-purple-300 hover:shadow-xl shadow-md shadow-purple-950/5"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}
                >
                  {/* Left or Right: Browser Frame Preview */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="rounded-xl overflow-hidden bg-white border-2 border-[#D2D6DE] shadow-md group relative">
                      {/* Browser Window Bar */}
                      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-[#E4E7EC] border-b border-[#D2D6DE] text-xs">
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-rose-400" />
                          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-amber-400" />
                          <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-lime-500" />
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white border border-[#D2D6DE] text-slate-700 font-mono text-[10px] sm:text-[11px] max-w-[200px] sm:max-w-[260px] truncate shadow-inner">
                          <Globe className="w-3 h-3 text-sky-600 shrink-0" />
                          <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono hidden sm:inline">
                          Vercel Deployed
                        </span>
                      </div>

                      {/* Interactive Website Preview Viewport - Clean Edge-to-Edge */}
                      <div
                        className="relative overflow-hidden bg-slate-100 cursor-pointer"
                        onClick={() => onOpenModal(project)}
                      >
                        <img
                          src={project.posterImage}
                          alt={`${project.name} Screenshot`}
                          className="w-full h-auto block transition-opacity duration-300 group-hover:opacity-95"
                          loading="lazy"
                        />

                        {/* Interactive Hover Overlay with Prompt */}
                        <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                          <div className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/95 border border-slate-300 text-slate-900 text-xs font-semibold flex items-center gap-2 shadow-xl">
                            <span>Click to Inspect Architecture</span>
                            <ArrowRight className="w-3.5 h-3.5 text-sky-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info & Controls */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-center ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Category & Status */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-800 bg-white/90 border border-slate-300/80 px-2 py-0.5 rounded shadow-2xs">
                        {project.category}
                      </span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-xs font-mono text-slate-500">
                        {project.statusBadge || 'Production'}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 mb-2 font-display">
                      {project.name}
                    </h3>
                    <p className="text-sky-700 text-sm font-medium mb-4">
                      {project.tagline}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* BreakX Special Version Switcher */}
                    {isBreakX && (
                      <div className="mb-6 p-3 sm:p-4 rounded-xl bg-[#E4E7EC] border border-[#D2D6DE]">
                        <div className="text-xs font-mono text-slate-800 font-semibold mb-2 flex items-center justify-between">
                          <span>Select BreakX Architectural Iteration:</span>
                          <span className="text-sky-600 font-bold hidden sm:inline">2 Versions Available</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          {(['v2.0', 'v1.0'] as const).map((v) => (
                            <button
                              key={v}
                              onClick={() => setBreakXVersion(v)}
                              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer text-left sm:text-center ${
                                breakXVersion === v
                                  ? 'bg-slate-950 text-white shadow-md'
                                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-[#D2D6DE]'
                              }`}
                            >
                              {breakXLinks[v].label}
                            </button>
                          ))}
                        </div>
                        <p className="text-xs text-slate-600 mt-2 italic">
                          {breakXLinks[breakXVersion].description}
                        </p>
                      </div>
                    )}

                    {/* Key Architectural Highlights */}
                    <div className="space-y-2 mb-6">
                      {project.highlightPoints.map((point, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white border border-[#D2D6DE] text-slate-700 font-medium shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-md shadow-sky-500/20 hover:shadow-sky-500/30 transition-all cursor-pointer"
                      >
                        <span>Visit Live Deployment</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>

                      {/* Video link: BreakX switches URL dynamically */}
                      <a
                        href={isBreakX ? breakXLinks[breakXVersion].videoUrl : project.linkedinVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-lime-100 hover:bg-lime-200 border border-lime-300 text-lime-900 text-xs font-semibold transition-all cursor-pointer"
                      >
                        <Video className="w-3.5 h-3.5 text-lime-700" />
                        <span>Watch LinkedIn Walkthrough</span>
                      </a>

                      <button
                        onClick={() => onOpenModal(project)}
                        className="text-xs font-medium text-slate-600 hover:text-slate-900 ml-auto cursor-pointer py-1"
                      >
                        Details &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

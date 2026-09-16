import React, { useState, useMemo } from 'react';
import type { Project, CategoryFilter } from '../types';
import { ExternalLink, Video, Eye, Filter, ArrowUpRight, Globe } from 'lucide-react';

interface ProjectGalleryProps {
  projects: Project[];
  onOpenModal: (project: Project) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ projects, onOpenModal }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: CategoryFilter[] = [
    'All',
    'E-Commerce',
    'Food & Dining',
    'Fashion & Lifestyle',
    'Tech & Digital',
    'Trading & B2B'
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-[#D5D0DF] relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-slate-800 text-xs font-mono font-medium mb-3 shadow-xs">
              <Filter className="w-3.5 h-3.5 text-sky-600" />
              <span>Full Production Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display">
              All Web Deployments
            </h2>
            <p className="text-slate-900 font-medium text-sm sm:text-base max-w-2xl mt-2">
              Explore all 16 live Vercel deployments, luxury e-commerce storefronts, B2B platforms, and recorded LinkedIn video demonstrations.
            </p>
          </div>

          {/* Project count indicator */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-700 bg-[#EEF0F4] px-3.5 py-2 rounded-xl border border-[#D2D6DE] shrink-0 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-lime-500" />
            <span>Showing {filteredProjects.length} of {projects.length} Sites</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const count =
              cat === 'All'
                ? projects.length
                : projects.filter((p) => p.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20 font-semibold'
                    : 'bg-[#EEF0F4] text-slate-700 hover:text-slate-950 hover:bg-white border border-[#D2D6DE]'
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    activeCategory === cat
                      ? 'bg-sky-700 text-white'
                      : 'bg-[#E4E7EC] text-slate-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid - Grey Inner Card Shade */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => {
            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-[#EEF0F4] border border-[#D2D6DE] hover:border-purple-300 transition-all duration-300 flex flex-col overflow-hidden shadow-sm hover:shadow-xl shadow-purple-950/5"
              >
                {/* Browser Frame Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#E4E7EC] border-b border-[#D2D6DE] text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-lime-500" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-[#D2D6DE] text-[11px] font-mono text-slate-700 max-w-[220px] truncate shadow-inner">
                    <Globe className="w-3 h-3 text-sky-600 shrink-0" />
                    <span className="truncate">{project.liveUrl.replace('https://', '')}</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Captured Preview Screen - Clean Edge-to-Edge Without Black Screen */}
                <div
                  className="relative overflow-hidden cursor-pointer bg-slate-100"
                  onClick={() => onOpenModal(project)}
                >
                  <img
                    src={project.posterImage}
                    alt={project.name}
                    className="w-full h-auto block transition-opacity duration-300 group-hover:opacity-95"
                    loading="lazy"
                  />

                  {/* Hover prompt pill */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/30 backdrop-blur-[1px]">
                    <div className="px-4 py-2 rounded-full bg-white/95 border border-slate-300 text-slate-900 text-xs font-semibold flex items-center gap-2 shadow-xl">
                      <Eye className="w-3.5 h-3.5 text-sky-600" />
                      <span>Inspect Project Case</span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Actions */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl font-bold text-slate-950 group-hover:text-sky-600 transition-colors font-display">
                        {project.name}
                      </h3>
                      <button
                        onClick={() => onOpenModal(project)}
                        className="text-slate-400 hover:text-slate-900 p-1 rounded transition-colors cursor-pointer"
                        title="View Architecture Details"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-sky-700 text-xs font-medium mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2 mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-white border border-[#D2D6DE] text-[10px] font-mono text-slate-700 shadow-2xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-1.5 py-0.5 rounded bg-white border border-[#D2D6DE] text-[10px] font-mono text-slate-500 shadow-2xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons Bar */}
                  <div className="pt-3 sm:pt-4 border-t border-[#D2D6DE] flex flex-wrap items-center justify-between gap-2">
                    {/* Live Website Button */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white font-medium text-xs transition-all shadow-sm shadow-sky-500/20"
                      aria-label={`Visit live deployment for ${project.name}`}
                    >
                      <Globe className="w-3.5 h-3.5 text-white" />
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3 h-3 text-sky-100" />
                    </a>

                    {/* LinkedIn Video Demo Link if present */}
                    {project.linkedinVideoUrl && (
                      <a
                        href={project.linkedinVideoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-lime-100 hover:bg-lime-200 border border-lime-300 text-lime-900 font-medium text-xs transition-all"
                        aria-label={`Watch video demo for ${project.name}`}
                      >
                        <Video className="w-3.5 h-3.5 text-lime-700" />
                        <span>{project.linkedinVideoUrl2 ? 'Demo 1' : 'Video Demo'}</span>
                      </a>
                    )}
                    {project.linkedinVideoUrl2 && (
                      <a
                        href={project.linkedinVideoUrl2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-lime-100 hover:bg-lime-200 border border-lime-300 text-lime-900 font-medium text-xs transition-all"
                        aria-label={`Watch video demo 2 for ${project.name}`}
                      >
                        <Video className="w-3.5 h-3.5 text-lime-700" />
                        <span>Demo 2</span>
                      </a>
                    )}
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

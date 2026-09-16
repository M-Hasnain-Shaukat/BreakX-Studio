import React, { useState, useEffect, useRef } from 'react';
import { PROJECTS } from '../data/projects';
import { CountUp } from './CountUp';
import {
  ArrowDown,
  ExternalLink,
  Layers,
  ChevronLeft,
  ChevronRight,
  Globe
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onContactClick }) => {
  // Put MHS Store with the new video first as the starting video of the hero card
  const startingProject = PROJECTS.find((p) => p.id === 'mhs-store');
  const otherVideoProjects = PROJECTS.filter((p) => p.videoUrl && p.id !== 'mhs-store');
  const otherProjects = PROJECTS.filter((p) => !p.videoUrl);
  const sliderProjects = [
    ...(startingProject ? [startingProject] : []),
    ...otherVideoProjects,
    ...otherProjects
  ]; // 16 total projects

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPageTurning, setIsPageTurning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeProject = sliderProjects[currentIndex];
  const hasVideo = Boolean(activeProject.videoUrl);

  // Auto-advance book page every 6 seconds if video, or 4 seconds if static image
  useEffect(() => {
    if (isPaused) return;
    const duration = hasVideo ? 7000 : 4000;
    const interval = setInterval(() => {
      triggerPageTurn((prev) => (prev + 1) % sliderProjects.length);
    }, duration);

    return () => clearInterval(interval);
  }, [isPaused, sliderProjects.length, hasVideo, currentIndex]);

  // Keep video playing when project changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, [currentIndex]);

  const triggerPageTurn = (updateFn: (prev: number) => number) => {
    setIsPageTurning(true);
    setTimeout(() => {
      setCurrentIndex(updateFn);
    }, 280); // Swap content during the apex of the turn

    setTimeout(() => {
      setIsPageTurning(false);
    }, 750); // Finish animation
  };

  const nextSlide = () => {
    if (isPageTurning) return;
    triggerPageTurn((prev) => (prev + 1) % sliderProjects.length);
  };

  const prevSlide = () => {
    if (isPageTurning) return;
    triggerPageTurn((prev) => (prev - 1 + sliderProjects.length) % sliderProjects.length);
  };

  return (
    <section className="relative h-[100dvh] max-h-[100dvh] w-full max-w-full flex flex-col justify-between pt-20 sm:pt-20 md:pt-20 min-[900px]:pt-22 lg:pt-24 pb-4 sm:pb-5 min-[900px]:pb-6 overflow-hidden">
      {/* Ambient background specular highlights on brushed titanium */}
      <div className="absolute top-1/4 left-1/4 w-[260px] sm:w-[520px] h-[200px] sm:h-[360px] bg-purple-300/12 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[260px] sm:w-[520px] h-[200px] sm:h-[380px] bg-violet-300/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[220px] sm:w-[400px] h-[160px] sm:h-[250px] bg-slate-300/10 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-between my-auto relative z-10">
        <div className="flex-1 flex flex-col justify-between hero-desktop-grid items-center py-1">
          
          {/* TOP BLOCK ON MOBILE / LEFT COLUMN ON DESKTOP: Badge, Title, and Small Description */}
          <div className="w-full flex flex-col justify-between text-left pt-0 hero-desktop-left hero-content-wrap">
            {/* Studio Badge with generous gap below it */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-900/80 shadow-xs mb-2.5 xs:mb-4.5 min-[410px]:mb-6 sm:mb-4 md:mb-4 self-start hero-badge-desktop">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs md:text-sm font-mono font-medium text-slate-900">
                BreakX Studio &middot; 16 Showcases
              </span>
            </div>

            {/* Center Text Block (Headline & Description) */}
            <div className="hero-text-block-desktop">
              {/* Headline with generous gap below it */}
              <h1 className="text-2xl xs:text-[27px] min-[410px]:text-[29px] sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950 leading-[1.22] mb-2.5 xs:mb-4 min-[410px]:mb-5 sm:mb-3.5 md:mb-4 font-display hero-title-responsive drop-shadow-xs">
                Modern Web &amp;{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">
                  Digital Stores.
                </span>
              </h1>

              {/* Description - Compact on small mobile, expanded with more text and breathing room on larger screens */}
              <p className="text-xs min-[410px]:text-[13.5px] sm:text-sm md:text-base text-slate-100 font-medium leading-relaxed xs:leading-[1.65] min-[410px]:leading-[1.7] max-w-md sm:max-w-xl md:max-w-2xl mb-2 xs:mb-4 min-[410px]:mb-5.5 sm:mb-3.5 md:mb-4 lg:mb-0 hero-desc-responsive">
                Crafting fast, high-converting e-commerce platforms and bespoke web applications.
                <span className="hidden xs:inline lg:hidden text-slate-100"> Engineered with immersive 3D elements, lightning-fast performance, and bespoke digital journeys built to scale.</span>
                <span className="hidden lg:inline text-slate-100"> Engineered with immersive 3D elements and lightning-fast performance.</span>
              </p>
            </div>

            {/* Mathematical Numbers Starting from 0 - Visible on both mobile & desktop with adequate gap */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-2.5 xs:mt-4 min-[410px]:mt-5.5 sm:mt-3.5 md:mt-4 mb-0 hero-desktop-none hero-content-wrap hero-numbers-responsive w-full">
              <div className="p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-md border border-slate-900/80 shadow-sm text-center hero-number-card">
                <div className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-sky-600 hero-number-value">
                  <CountUp end={16} suffix="+" duration={1600} />
                </div>
                <div className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-mono text-slate-700 font-medium mt-0.5 md:mt-1 hero-number-label">
                  Deployments
                </div>
              </div>

              <div className="p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-md border border-slate-900/80 shadow-sm text-center hero-number-card">
                <div className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-emerald-600 hero-number-value">
                  <CountUp end={100} suffix="%" duration={1800} />
                </div>
                <div className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-mono text-slate-700 font-medium mt-0.5 md:mt-1 hero-number-label">
                  Responsive
                </div>
              </div>

              <div className="p-2 xs:p-2.5 sm:p-3 md:p-3.5 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-md border border-slate-900/80 shadow-sm text-center hero-number-card">
                <div className="font-display text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-indigo-600 hero-number-value">
                  <CountUp end={2} prefix="v" suffix=".0" duration={1400} />
                </div>
                <div className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-mono text-slate-700 font-medium mt-0.5 md:mt-1 hero-number-label">
                  Editions
                </div>
              </div>
            </div>

            {/* Desktop Action Buttons: Pinned in accordance with the bottom of the card on desktop */}
            <div className="hidden hero-desktop-buttons flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-semibold text-xs shadow-md shadow-purple-950/25 border border-white/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Layers className="w-3.5 h-3.5 text-sky-400" />
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
              <button
                onClick={onContactClick}
                className="inline-flex items-center justify-center gap-2 px-4.5 py-2.5 rounded-xl bg-white/80 hover:bg-white border border-slate-900/80 text-slate-900 font-semibold text-xs shadow-sm backdrop-blur-md transition-all cursor-pointer"
              >
                <span>Contact Us</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </button>
            </div>
          </div>

          {/* MIDDLE BLOCK ON MOBILE / RIGHT COLUMN ON DESKTOP: Showcase Frame */}
          <div className="w-full flex items-center justify-center my-auto lg:my-0 py-0 hero-desktop-right">
            <div
              className="relative w-full hero-content-wrap hero-desktop-card perspective-container mx-auto"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Stacked Paper Pages with purplish-slate edges (tablet & desktop) */}
              <div className="hidden sm:block absolute -inset-2 rounded-2xl bg-[#D4CEE0] rotate-1 scale-[0.99] -z-10 shadow-md" />
              <div className="hidden sm:block absolute -inset-1 rounded-2xl bg-[#DDD8E8] -rotate-0.5 scale-[0.995] -z-10 shadow-sm" />

              {/* Main Book Folio Cover/Page - Grey Inner Card Tone */}
              <div className="relative rounded-xl sm:rounded-2xl bg-[#EEF0F4] border border-[#D2D6DE] sm:border-2 book-paper-shadow overflow-hidden flex flex-col">
                
                {/* Book Spine Accent on left */}
                <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3.5 bg-gradient-to-r from-slate-400/25 to-transparent z-30 pointer-events-none" />

                {/* Top Folio Header Bar */}
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 bg-[#E4E7EC] border-b border-[#D2D6DE] text-xs">
                  {/* Domain ribbon */}
                  <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 rounded-full bg-white border border-[#D2D6DE] text-slate-700 font-mono text-[10px] sm:text-[11px] md:text-xs max-w-[170px] xs:max-w-[210px] sm:max-w-[280px] md:max-w-md truncate shadow-inner">
                    <Globe className="w-3 h-3 text-sky-600 shrink-0" />
                    <span className="truncate">{activeProject.liveUrl.replace('https://', '')}</span>
                  </div>

                  {/* Previous / Next Folio Controls */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevSlide}
                      aria-label="Previous Page"
                      className="p-1 sm:p-1.5 rounded bg-[#EEF0F4] hover:bg-white border border-[#D2D6DE] text-slate-700 transition-colors cursor-pointer shadow-2xs"
                    >
                      <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next Page"
                      className="p-1 sm:p-1.5 rounded bg-[#EEF0F4] hover:bg-white border border-[#D2D6DE] text-slate-700 transition-colors cursor-pointer shadow-2xs"
                    >
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                </div>

                {/* 3D Viewport - Matched to native 1376x736 on small mobile & desktop, scaled on tablets */}
                <div className="relative aspect-[1376/736] xs:aspect-[16/9.6] min-[410px]:aspect-[16/9.8] hero-viewport-responsive hero-desktop-viewport w-full overflow-hidden bg-slate-900 flex items-start justify-center">
                  {/* The Turning Page Element */}
                  <div
                    className={`w-full h-full relative flex items-start justify-center ${
                      isPageTurning ? 'animate-page-turn' : ''
                    }`}
                  >
                    {hasVideo ? (
                      <video
                        ref={videoRef}
                        key={activeProject.id}
                        src={activeProject.videoUrl}
                        poster={activeProject.posterImage}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <img
                        src={activeProject.posterImage}
                        alt={`${activeProject.name} Page Plate`}
                        className="w-full h-full object-cover object-top"
                      />
                    )}

                    {/* Subtle crease shadow down the spine */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 bg-gradient-to-r from-black/25 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Project Info Bar - Harmonized Titanium Glass */}
                <div className="px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 bg-[#EEF0F4] border-t border-[#D2D6DE] flex items-center justify-between gap-2 sm:gap-3">
                  <div className="truncate pr-1 sm:pr-2">
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-mono uppercase font-semibold text-slate-800 bg-white/90 border border-slate-300/80 px-2 py-0.5 rounded shadow-2xs mr-1.5 sm:mr-2">
                      {activeProject.category}
                    </span>
                    <span className="text-xs sm:text-sm md:text-base font-bold text-slate-900 font-display">
                      {activeProject.name}
                    </span>
                  </div>

                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-[11px] sm:text-xs md:text-sm tracking-wide shrink-0 transition-all shadow-md shadow-sky-600/25 cursor-pointer"
                  >
                    <span>Visit Live</span>
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* BOTTOM BLOCK ON MOBILE / TABLET: Action Buttons - Equal in height and width, finish at the bottom */}
          <div className="w-full flex hero-mobile-buttons hero-content-wrap items-center justify-center gap-2.5 sm:gap-3 md:gap-4 mx-auto pt-0">
            <button
              onClick={onExploreClick}
              className="flex-1 h-11 xs:h-12 inline-flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 px-3 sm:px-4 rounded-xl md:rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-semibold text-xs sm:text-xs md:text-sm shadow-md shadow-purple-950/25 border border-white/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap hero-button-responsive"
            >
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 shrink-0 text-sky-400" />
              <span>Explore Projects</span>
              <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 shrink-0 text-slate-400" />
            </button>
            <button
              onClick={onContactClick}
              className="flex-1 h-11 xs:h-12 inline-flex items-center justify-center gap-1.5 xs:gap-2 sm:gap-2.5 px-3 sm:px-4 rounded-xl md:rounded-2xl bg-white/80 hover:bg-white border border-slate-900/80 text-slate-900 font-semibold text-xs sm:text-xs md:text-sm shadow-xs active:scale-95 transition-all cursor-pointer whitespace-nowrap hero-button-responsive backdrop-blur-md"
            >
              <span>Contact Us</span>
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 shrink-0" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};



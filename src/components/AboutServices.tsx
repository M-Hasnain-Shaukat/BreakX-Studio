import React from 'react';
import { PERSONAL_INFO, CAPABILITIES } from '../data/projects';
import { Code2, ShoppingBag, Zap, Smartphone, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export const AboutServices: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-sky-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-lime-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-600" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-teal-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section id="capabilities" className="py-16 sm:py-24 border-t border-[#D5D0DF] relative overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: About Bio & Ethos */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-slate-800 text-xs font-mono font-medium shadow-xs">
              <Terminal className="w-3.5 h-3.5 text-purple-600" />
              <span>Studio Engineering Ethos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-display">
              About BreakX Studio
            </h2>

            <p className="text-slate-100 text-sm sm:text-base leading-relaxed font-medium">
              Operating as <strong className="text-white font-bold">BreakX Studio</strong>, we specialize in engineering responsive, visual-first web platforms. Whether constructing high-ticket jewelry e-commerce experiences like <strong className="text-sky-300 font-semibold">Zewellery PK</strong>, flagship retail stores like <strong className="text-amber-300 font-semibold">MHS Store</strong>, dynamic fast-casual platforms like <strong className="text-lime-300 font-semibold">Bun N’ Blaze</strong>, or bespoke digital storefronts, our focus is always on speed, aesthetics, and high conversion.
            </p>

            <p className="text-slate-200 text-sm leading-relaxed font-medium">
              Every project in this portfolio is live, deployed on the Vercel edge network, and verified across both desktop and mobile screens.
            </p>

            {/* Quick stats panel - Grey Inner Tone */}
            <div className="p-5 rounded-2xl bg-[#EEF0F4] border border-[#D2D6DE] shadow-sm space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Total Live Deployments:</span>
                <span className="font-mono font-bold text-slate-900">16 Applications</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Primary Specialization:</span>
                <span className="font-mono font-bold text-sky-600">Frontend &amp; E-Commerce</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Location &amp; Timezone:</span>
                <span className="font-mono font-bold text-slate-700">Pakistan (PKT / GMT+5)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Current Work Status:</span>
                <span className="font-mono font-bold text-lime-700 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                  Available for Contracts
                </span>
              </div>
            </div>

            {/* GitHub Profile Banner */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-xl bg-[#EEF0F4] hover:bg-white border border-[#D2D6DE] hover:border-purple-300 transition-all text-slate-800 group shadow-xs"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-950 flex items-center justify-center text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                    Muhammad-Hasnain-Shaukat
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Explore Repositories &amp; Source Code
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </a>
          </div>

          {/* Right Column: Capabilities Cards - Grey Inner Tone */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((cap, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#EEF0F4] border border-[#D2D6DE] hover:border-purple-300 transition-all shadow-sm hover:shadow-md shadow-purple-950/5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#D2D6DE] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                  {getIcon(cap.icon)}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 font-display">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

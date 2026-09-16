import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/projects';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#E5E0ED]/90 backdrop-blur-md border-b border-[#D5D0DF] py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#EEF0F4] border border-[#D2D6DE] p-1 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
            <img src="/breakx-logo.png" alt="BreakX Studio Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-slate-950 group-hover:text-sky-600 transition-colors font-display">
                BreakX
              </span>
              <span className="text-[11px] px-1.5 py-0.5 rounded bg-white/80 border border-slate-900/80 text-slate-900 font-mono font-medium">
                Studio
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/85 backdrop-blur-md border border-slate-900/80 rounded-full px-4 py-1.5 text-sm font-medium shadow-sm">
          <button
            onClick={() => handleLinkClick('featured')}
            className="px-3.5 py-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            Featured
          </button>
          <button
            onClick={() => handleLinkClick('projects')}
            className="px-3.5 py-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            All Work
            <span className="text-[11px] bg-sky-100 text-sky-800 font-mono px-1.5 py-0.2 rounded-full border border-sky-200">
              16
            </span>
          </button>
          <button
            onClick={() => handleLinkClick('capabilities')}
            className="px-3.5 py-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            Capabilities
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-3.5 py-1.5 text-slate-600 hover:text-slate-950 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons & Status */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Availability Status Badge */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md border border-slate-900/80 text-slate-900 text-xs font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Hire</span>
          </div>

          {/* Social Quick Links */}
          <div className="flex items-center gap-1.5 border-l border-slate-300 pl-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#EEF0F4] hover:bg-white border border-[#D2D6DE] hover:border-sky-300 flex items-center justify-center text-slate-600 hover:text-sky-600 transition-all shadow-xs"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#EEF0F4] hover:bg-white border border-[#D2D6DE] hover:border-slate-400 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all shadow-xs"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-[#EEF0F4] hover:bg-white border border-[#D2D6DE] hover:border-pink-300 flex items-center justify-center text-slate-600 hover:text-pink-600 transition-all shadow-xs"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Direct WhatsApp Action */}
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-all shadow-md shadow-emerald-600/20"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-lime-100 border border-lime-300 text-lime-800"
            aria-label="WhatsApp Chat"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white border border-slate-300 text-slate-700 hover:text-slate-950"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-300 px-4 pt-4 pb-6 mt-2 backdrop-blur-xl shadow-xl">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleLinkClick('featured')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-slate-800 hover:bg-slate-100 hover:text-sky-600 transition-colors font-medium flex items-center justify-between"
            >
              <span>Featured Showcases</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('projects')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-slate-800 hover:bg-slate-100 hover:text-sky-600 transition-colors font-medium flex items-center justify-between"
            >
              <span>All 16 Projects Gallery</span>
              <span className="text-xs bg-sky-100 text-sky-800 border border-sky-200 px-2 py-0.5 rounded-full font-mono">
                16 Sites
              </span>
            </button>
            <button
              onClick={() => handleLinkClick('capabilities')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-slate-800 hover:bg-slate-100 hover:text-sky-600 transition-colors font-medium flex items-center justify-between"
            >
              <span>Capabilities & Ethos</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full text-left px-4 py-2.5 rounded-lg text-slate-800 hover:bg-slate-100 hover:text-sky-600 transition-colors font-medium flex items-center justify-between"
            >
              <span>Contact & Inquiries</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </button>

            <div className="pt-4 mt-2 border-t border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 border border-slate-300 text-slate-600 hover:text-sky-600"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 border border-slate-300 text-slate-600 hover:text-slate-900"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-100 border border-slate-300 text-slate-600 hover:text-pink-600"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs font-mono text-sky-700 underline underline-offset-4"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

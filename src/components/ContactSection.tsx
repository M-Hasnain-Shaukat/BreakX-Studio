import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/projects';
import { Mail, MessageCircle, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('E-Commerce Web Application');
  const [message, setMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Project Inquiry - ${projectType}] from ${name}`);
    const body = encodeURIComponent(
      `Hello BreakX Studio,\n\nName: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nMessage:\n${message}\n\nSent via BreakX Studio Portfolio`
    );
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`, '_blank');
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-[#D5D0DF] relative overflow-hidden w-full max-w-full">
      {/* Background soft ambient glows in purplish and violet tones */}
      <div className="absolute bottom-0 right-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-purple-300/15 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-60 sm:w-96 h-60 sm:h-96 bg-violet-300/12 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact & Details */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-white/60 text-slate-800 text-xs font-mono font-medium mb-3 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Open for Client Projects</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight font-display mb-4">
                Let’s Build Your Next Digital Flagship.
              </h2>
              <p className="text-slate-900 font-medium text-sm sm:text-base leading-relaxed max-w-lg">
                Have a new web application, e-commerce brand, or need a high-performance modern redesign? Connect directly with me today.
              </p>
            </div>

            {/* Direct Contact Cards - Grey Inner Tone */}
            <div className="space-y-3 max-w-md">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-[#EEF0F4] border border-[#D2D6DE] shadow-xs flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-mono font-semibold text-slate-900 group-hover:text-sky-600 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer border border-[#D2D6DE]"
                  title="Copy email to clipboard"
                  aria-label="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-lime-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Quick Chat */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#EEF0F4] hover:bg-lime-50/50 border border-[#D2D6DE] hover:border-lime-300 shadow-xs flex items-center justify-between gap-3 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-lime-100 border border-lime-300 flex items-center justify-center text-lime-700">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">WhatsApp / Instant Message</div>
                    <div className="text-sm font-mono font-semibold text-slate-900 group-hover:text-lime-800 transition-colors">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-lime-700 font-medium">
                  <span>Chat</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>

            {/* Social Channels Row */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-200 mb-3 font-semibold">
                Verified Social Channels
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EEF0F4] hover:bg-white border border-[#D2D6DE] hover:border-sky-300 text-xs font-medium text-slate-700 hover:text-sky-700 transition-all shadow-xs"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EEF0F4] hover:bg-white border border-[#D2D6DE] hover:border-slate-400 text-xs font-medium text-slate-700 hover:text-slate-950 transition-all shadow-xs"
                >
                  <GithubIcon className="w-4 h-4 text-slate-900" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#EEF0F4] hover:bg-white border border-[#D2D6DE] hover:border-pink-300 text-xs font-medium text-slate-700 hover:text-pink-700 transition-all shadow-xs"
                >
                  <InstagramIcon className="w-4 h-4 text-pink-600" />
                  <span>{PERSONAL_INFO.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form - Grey Inner Card Tone */}
          <div className="lg:col-span-6 bg-[#EEF0F4] border border-[#D2D6DE] rounded-2xl p-4 sm:p-8 shadow-md shadow-purple-950/5">
            <h3 className="text-xl font-bold text-slate-950 mb-2 font-display">
              Send a Direct Project Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Fill out this form to directly pre-compose your message to BreakX Studio.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe / Brand Founder"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D2D6DE] text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-colors shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D2D6DE] text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-colors shadow-2xs"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                  PROJECT CATEGORY
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D2D6DE] text-slate-900 text-xs focus:outline-none focus:border-sky-500 transition-colors shadow-2xs"
                >
                  <option>E-Commerce Web Application</option>
                  <option>Restaurant / Food Digital Platform</option>
                  <option>Luxury / Fashion Storefront</option>
                  <option>Corporate / B2B Commercial Website</option>
                  <option>Full-Stack / Frontend Engineering Contract</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 mb-1.5">
                  PROJECT BRIEF &amp; SCOPE
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, timeline, and key requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#D2D6DE] text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-sky-500 transition-colors resize-none shadow-2xs"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-sky-500 to-lime-600 hover:from-sky-600 hover:to-lime-700 text-white text-xs font-semibold tracking-wide flex items-center justify-center gap-2 shadow-md shadow-sky-500/25 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Project Brief</span>
              </button>

              {formSent && (
                <div className="p-3 rounded-xl bg-lime-100 border border-lime-300 text-lime-900 text-xs text-center font-medium">
                  Your mail client has been opened with your inquiry prefilled. Thank you!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

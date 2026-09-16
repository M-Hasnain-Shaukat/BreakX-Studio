import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { ProjectGallery } from './components/ProjectGallery';
import { ProjectModal } from './components/ProjectModal';
import { AboutServices } from './components/AboutServices';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PROJECTS } from './data/projects';
import type { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#E5E0ED] purplish-canvas-texture text-slate-800 flex flex-col selection:bg-purple-200 selection:text-purple-950 overflow-x-hidden w-full max-w-full">
      {/* Top Sticky Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-full overflow-x-hidden">
        <Hero
          onExploreClick={() => scrollToSection('projects')}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* Featured Showcase (Top 3 with BreakX Switcher) */}
        <FeaturedShowcase
          projects={PROJECTS}
          onOpenModal={(proj) => setSelectedProject(proj)}
        />

        {/* Complete Project Gallery (15+ Deployments with Category Filters) */}
        <ProjectGallery
          projects={PROJECTS}
          onOpenModal={(proj) => setSelectedProject(proj)}
        />

        {/* Studio Capabilities & About */}
        <AboutServices />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Project Architectural Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { BrandStatement } from './components/BrandStatement';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { StackSkills } from './components/StackSkills';
import { SazeonLoop } from './components/SazeonLoop';
import { SazeonDifference } from './components/SazeonDifference';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInitialService, setSelectedInitialService] = useState<string | undefined>(undefined);

  // Initialize smooth scrolling with Lenis
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenProjectModal = (serviceName?: string) => {
    setSelectedInitialService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsModalOpen(false);
    setSelectedInitialService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0C0B0A] text-[#F5F1E8] relative selection:bg-[#FF7043]/20 selection:text-[#F5F1E8]">
      {/* Page Scroll Progress Indicator at Viewport Top */}
      <ScrollProgress />

      {/* Subtle Editorial Tactile Grain Texture (2-3% opacity) */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Custom Desktop Cursor (Obsidian & Burnt Orange) */}
      <CustomCursor />

      {/* Sticky Studio Navigation */}
      <Navbar onOpenProjectModal={() => handleOpenProjectModal()} />

      {/* Main Experience Flow */}
      <main id="main-content">
        {/* 1. Hero Section with Interactive Parallax and WhatsApp CTA */}
        <Hero onOpenProjectModal={() => handleOpenProjectModal()} />

        {/* 2. Marquee 01 — Services (Moving Left with Scroll Velocity) */}
        <Marquee
          items={[
            'WEB DESIGN',
            'E-COMMERCE',
            'DIGITAL EXPERIENCES',
            'BRAND IDENTITY',
            'BUSINESS DESIGN',
          ]}
          separator="•"
          direction="left"
          speed={48}
        />

        {/* 3. Brand Statement with Progressive Masked Typography */}
        <BrandStatement />

        {/* 4. Services — Full-width Editorial Expanding Rows */}
        <Services onSelectService={(srv) => handleOpenProjectModal(srv)} />

        {/* 5. Marquee 02 — Philosophy (Moving Right with Outlined Typography) */}
        <Marquee
          items={[
            'BUILT WITH INTENTION',
            'DESIGNED TO MOVE',
            'READY FOR WHAT\'S NEXT',
          ]}
          separator="/"
          direction="right"
          speed={40}
          outlined={true}
        />

        {/* 6. Selected Work — Large Cinematic Showcase & Project Previews */}
        <SelectedWork />

        {/* 7. Marquee 03 — Technical Stack (Moving Left) */}
        <Marquee
          items={[
            'REACT',
            'TYPESCRIPT',
            'FIGMA',
            'VITE',
            'SPRING BOOT',
            'SUPABASE',
            'MYSQL',
          ]}
          separator="•"
          direction="left"
          speed={44}
        />

        {/* 8. Stack & Skills Architecture */}
        <StackSkills />

        {/* 9. The SAZEON Loop Connected Horizontal Timeline */}
        <SazeonLoop />

        {/* 10. The SAZEON Difference Editorial Rows */}
        <SazeonDifference />

        {/* 11. Dedicated Contact Section with Real WhatsApp, Email & Social */}
        <ContactSection onOpenProjectModal={() => handleOpenProjectModal()} />
      </main>

      {/* 12. Minimal Editorial Footer */}
      <Footer />

      {/* Interactive Project Inquiry & Scope Briefing Drawer */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseProjectModal}
        initialService={selectedInitialService}
      />
    </div>
  );
}

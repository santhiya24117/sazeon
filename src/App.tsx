/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TheStatement } from './components/TheStatement.tsx';
import { TheResidence } from './components/TheResidence.tsx';
import { PropertyStats } from './components/PropertyStats.tsx';
import { ArchitectureSection } from './components/ArchitectureSection.tsx';
import { ResidenceSelector } from './components/ResidenceSelector.tsx';
import { FloorPlanViewer } from './components/FloorPlanViewer.tsx';
import { CityWithinReach } from './components/CityWithinReach.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { LifestyleGallery } from './components/LifestyleGallery.tsx';
import { AmenityList } from './components/AmenityList.tsx';
import { TheEdit } from './components/TheEdit.tsx';
import { ConceptRealitySlider } from './components/ConceptRealitySlider.tsx';
import { AvailabilityList } from './components/AvailabilityList.tsx';
import { VisitForm } from './components/VisitForm.tsx';
import { CTASection } from './components/CTASection.tsx';
import { Footer } from './components/Footer.tsx';
import { ResidenceModal } from './components/ResidenceModal.tsx';
import { FontSwitcher } from './components/FontSwitcher.tsx';
import { ResidenceConfig } from './types.ts';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedResidenceForModal, setSelectedResidenceForModal] = useState<ResidenceConfig | null>(null);
  const [selectedPlanConfig, setSelectedPlanConfig] = useState<ResidenceConfig | undefined>(undefined);
  const [preselectedVisitType, setPreselectedVisitType] = useState<string | undefined>(undefined);
  const [showMobileStickyBar, setShowMobileStickyBar] = useState<boolean>(false);

  // Active Section Spy & Mobile Sticky visibility check
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      const sections = [
        'hero',
        'project',
        'residences',
        'architecture',
        'configurations',
        'floorplans',
        'city',
        'location',
        'lifestyle',
        'amenities',
        'gallery',
        'transformation',
        'availability',
        'visit',
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // Mobile sticky CTA bar logic: show after hero (>400px), hide in visit/footer
      const visitEl = document.getElementById('visit');
      if (visitEl) {
        const visitTop = visitEl.offsetTop;
        const windowBottom = window.scrollY + window.innerHeight;
        if (window.scrollY > 500 && windowBottom < visitTop + 200) {
          setShowMobileStickyBar(true);
        } else {
          setShowMobileStickyBar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectFloorPlan = (config: ResidenceConfig) => {
    setSelectedPlanConfig(config);
    const fpEl = document.getElementById('floorplans');
    if (fpEl) {
      fpEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInquireFromResidence = (config: ResidenceConfig) => {
    setSelectedResidenceForModal(config);
  };

  const handleBookVisitForResidence = (residenceName: string) => {
    setPreselectedVisitType(residenceName);
    const visitEl = document.getElementById('visit');
    if (visitEl) {
      visitEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#101815] text-[#F5F1E7] selection:bg-[#9B7657]/30 selection:text-[#F5F1E7] overflow-x-hidden font-sans">
      {/* Editorial Navbar */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Flow (Strict Sequence according to Section 24) */}
      <main>
        {/* 1. HERO — THE ARRIVAL */}
        <Hero
          onExplore={() => handleNavigate('project')}
          onBookVisit={() => handleNavigate('visit')}
        />

        {/* 2. STATEMENT — NOT JUST A PLACE TO LIVE */}
        <TheStatement />

        {/* 3. THE RESIDENCE — 01 DESIGNED AROUND LIGHT */}
        <TheResidence />

        {/* 4. PROPERTY STATISTICS */}
        <PropertyStats />

        {/* 5. ARCHITECTURE — 02 FORM MEETS FUNCTION */}
        <ArchitectureSection />

        {/* 6. RESIDENCE SELECTOR — FIND YOUR CONFIGURATION */}
        <ResidenceSelector
          onSelectFloorPlan={handleSelectFloorPlan}
          onInquire={handleInquireFromResidence}
        />

        {/* 7. FLOOR PLAN VIEWER */}
        <FloorPlanViewer
          initialConfig={selectedPlanConfig}
          onBookTourForPlan={(cfg) => handleBookVisitForResidence(`${cfg.name} (${cfg.area})`)}
        />

        {/* 8. THE CITY, WITHIN REACH */}
        <CityWithinReach />

        {/* 9. LOCATION — ARCHITECTURAL MAP */}
        <LocationSection />

        {/* 10. LIFESTYLE — THE DAILY RITUAL */}
        <LifestyleGallery />

        {/* 11. AMENITIES — SHARED SANCTUARIES */}
        <AmenityList />

        {/* 12. THE EDIT — ARCHITECTURAL GALLERY */}
        <TheEdit />

        {/* 13. CONCEPT → REALITY SLIDER */}
        <ConceptRealitySlider />

        {/* 14. AVAILABILITY */}
        <AvailabilityList
          onSelectResidence={(cfg) => setSelectedResidenceForModal(cfg)}
          onBookVisit={(code) => handleBookVisitForResidence(code)}
        />

        {/* 15. BOOK A VISIT */}
        <VisitForm preselectedResidence={preselectedVisitType} />

        {/* 16. FINAL CTA */}
        <CTASection
          onBookVisit={() => handleNavigate('visit')}
          onExploreResidences={() => handleNavigate('configurations')}
        />
      </main>

      {/* 17. FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* Modal Dossier */}
      <ResidenceModal
        config={selectedResidenceForModal}
        onClose={() => setSelectedResidenceForModal(null)}
        onBookVisitForResidence={handleBookVisitForResidence}
      />

      {/* Interactive Architectural Typography Switcher */}
      <FontSwitcher />

      {/* Optional Mobile Sticky CTA (Section 25: <= 15% height, hidden on visit form) */}
      {showMobileStickyBar && (
        <aside
          aria-label="Quick appointment action"
          className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-[#53665A]/40 bg-[#101815]/95 backdrop-blur-md px-6 py-3 md:hidden shadow-2xl transition-all duration-300"
        >
          <div className="flex flex-col">
            <span className="font-serif text-xs uppercase tracking-widest text-[#F5F1E7]">THE ADDRESS</span>
            <span className="text-[10px] font-mono text-[#9B7657]">PRIVATE CLIENT APPOINTMENTS</span>
          </div>
          <button
            onClick={() => handleNavigate('visit')}
            className="inline-flex items-center gap-2 bg-[#1C3028] border border-[#9B7657] text-[#F5F1E7] px-4 py-2 text-[11px] font-medium tracking-[0.16em] uppercase"
          >
            <span>BOOK A VISIT</span>
            <ArrowRight className="h-3 w-3 text-[#9B7657]" />
          </button>
        </aside>
      )}
    </div>
  );
}

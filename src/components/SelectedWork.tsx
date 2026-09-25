import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData, ProjectItem } from '../data/projects';
import { ProjectPreview } from './ProjectPreview';
import { MagneticButton } from './MagneticButton';

export const SelectedWork: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [previewState, setPreviewState] = useState<{
    visible: boolean;
    image: string;
    title: string;
    x: number;
    y: number;
  }>({
    visible: false,
    image: '',
    title: '',
    x: 0,
    y: 0,
  });

  const handleTitleMouseMove = (e: React.MouseEvent, project: ProjectItem) => {
    setPreviewState({
      visible: true,
      image: project.image,
      title: project.title,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleTitleMouseLeave = () => {
    setPreviewState((prev) => ({ ...prev, visible: false }));
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % projectsData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };

  return (
    <section id="work" className="py-24 sm:py-36 bg-[#0C0B0A] relative border-t border-[#332D28]">
      {/* Floating Cursor Preview */}
      <ProjectPreview
        image={previewState.image}
        title={previewState.title}
        isVisible={previewState.visible}
        x={previewState.x}
        y={previewState.y}
      />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#332D28]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF7043] block mb-3">
              CURATED PRODUCTION
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] tracking-[-0.035em] text-[#F5F1E8]">
              WHAT WE'VE MADE
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-sm font-mono text-[#A8A198] flex items-center gap-3">
              <span>SELECTED COMMISSIONS</span>
              <span className="text-[#332D28]">/</span>
              <span className="text-[#FF7043]">03 ARCHIVES</span>
            </div>

            {/* Desktop Slide Navigation Controls */}
            <div className="hidden lg:flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous project"
                className="w-10 h-10 rounded-sm border border-[#332D28] hover:border-[#FF7043] bg-[#151311] hover:bg-[#1D1A17] flex items-center justify-center text-[#A8A198] hover:text-[#FF7043] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next project"
                className="w-10 h-10 rounded-sm border border-[#332D28] hover:border-[#FF7043] bg-[#151311] hover:bg-[#1D1A17] flex items-center justify-center text-[#A8A198] hover:text-[#FF7043] transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Cinematic Project Display (Active Featured Slider + Quick Selector) */}
        <div className="hidden lg:block">
          {/* Quick Select Bar */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {projectsData.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => setActiveSlide(idx)}
                onMouseMove={(e) => handleTitleMouseMove(e, project)}
                onMouseLeave={handleTitleMouseLeave}
                className={`text-left p-4 rounded-sm border transition-all duration-300 ${
                  activeSlide === idx
                    ? 'bg-[#1D1A17] border-[#FF7043]'
                    : 'bg-[#151311] border-[#332D28] hover:border-[#A8A198]/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1">
                  <span className={activeSlide === idx ? 'text-[#FF7043]' : 'text-[#A8A198]'}>
                    {project.number}
                  </span>
                  <span className="text-[#A8A198]/60">{project.year}</span>
                </div>
                <div className="font-display font-bold text-lg text-[#F5F1E8] truncate">
                  {project.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Featured Project Showcase */}
          <AnimatePresence mode="wait">
            <motion.article
              key={projectsData[activeSlide].id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="group relative"
              data-cursor="project"
            >
              <a
                href={projectsData[activeSlide].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-none"
                aria-label={`View live project: ${projectsData[activeSlide].title}`}
              >
                {/* Project Header Row */}
                <div className="flex items-baseline justify-between gap-4 mb-6">
                  <div className="flex items-baseline gap-6">
                    <span className="text-3xl font-mono text-[#FF7043]">
                      {projectsData[activeSlide].number}
                    </span>
                    <h3 className="font-display font-bold text-5xl lg:text-6xl text-[#F5F1E8] tracking-tight group-hover:translate-x-1.5 transition-transform duration-300">
                      {projectsData[activeSlide].title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="px-5 py-2.5 bg-[#1D1A17] group-hover:bg-[#25211D] border border-[#332D28] group-hover:border-[#FF7043] text-xs font-display font-semibold tracking-wider text-[#F5F1E8] rounded-sm transition-all inline-flex items-center">
                      <span className="mr-2">VIEW PROJECT</span>
                      <ArrowUpRight className="w-4 h-4 text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Large Website Preview Frame */}
                <div className="relative w-full aspect-21/9 rounded-sm overflow-hidden bg-[#1D1A17] border border-[#332D28] group-hover:border-[#FF7043] transition-colors duration-400 shadow-2xl">
                  {/* Browser minimal header */}
                  <div className="absolute top-0 left-0 right-0 h-9 bg-[#151311]/95 backdrop-blur-xs border-b border-[#332D28] px-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#332D28]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#332D28]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#332D28]" />
                    </div>
                    <span className="text-[11px] font-mono text-[#A8A198]/60 truncate max-w-md">
                      {projectsData[activeSlide].url}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#A8A198]/60 group-hover:text-[#FF7043] transition-colors" />
                  </div>

                  {/* Preview Image with hover zoom */}
                  <div className="w-full h-full pt-9 overflow-hidden bg-[#151311]">
                    <img
                      src={projectsData[activeSlide].image}
                      alt={`${projectsData[activeSlide].title} - Digital Experience Preview`}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-600 ease-out group-hover:scale-[1.03]"
                      onError={(e) => {
                        const parent = (e.target as HTMLElement).parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center bg-[#1D1A17] text-center p-8">
                              <span class="font-display text-2xl font-bold text-[#F5F1E8] mb-2">${projectsData[activeSlide].title}</span>
                              <span class="text-sm font-mono text-[#A8A198]">${projectsData[activeSlide].category}</span>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Details Bar */}
                <div className="mt-6 flex items-center justify-between gap-4 pt-4 border-t border-[#332D28]">
                  <p className="text-base text-[#A8A198] max-w-2xl font-normal leading-relaxed">
                    {projectsData[activeSlide].description}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A8A198]">
                    <span className="text-[#FF7043]">/</span>
                    <span>{projectsData[activeSlide].category}</span>
                  </div>
                </div>
              </a>
            </motion.article>
          </AnimatePresence>
        </div>

        {/* Mobile / Tablet Vertical Editorial Stacking */}
        <div className="lg:hidden flex flex-col gap-16">
          {projectsData.map((project) => (
            <article key={project.id} className="group relative">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus-visible:outline-none"
                aria-label={`View live project: ${project.title}`}
              >
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-xl font-mono text-[#FF7043]">
                      {project.number}
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F1E8]">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF7043]">
                    <span>VIEW</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="relative w-full aspect-16/10 rounded-sm overflow-hidden bg-[#1D1A17] border border-[#332D28] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <p className="text-sm text-[#A8A198] leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="text-xs font-mono text-[#A8A198]/70 border-t border-[#332D28] pt-3">
                  {project.category}
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

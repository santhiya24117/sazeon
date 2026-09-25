import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TechCategory {
  title: string;
  code: string;
  description: string;
  items: string[];
}

const stackData: TechCategory[] = [
  {
    title: 'FRONTEND',
    code: '01',
    description: 'Modern, reactive interfaces with component discipline and instant feel.',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'BACKEND',
    code: '02',
    description: 'Resilient application layers, structured databases, and clean data access.',
    items: ['Spring Boot', 'Node.js', 'REST APIs', 'Supabase', 'MySQL'],
  },
  {
    title: 'DESIGN',
    code: '03',
    description: 'Editorial rigor, typography hierarchies, and scalable token systems.',
    items: ['Figma', 'UI/UX', 'Design Systems', 'Responsive Design', 'Branding'],
  },
  {
    title: 'SHIP',
    code: '04',
    description: 'Production deployments, global CDNs, zero-lag metrics, and discovery.',
    items: ['Git', 'GitHub', 'Vercel', 'API Integration', 'SEO & Performance'],
  },
];

export const StackSkills: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-[#0C0B0A] relative border-t border-[#332D28]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#332D28]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF7043] block mb-3">
              TECHNICAL ARCHITECTURE
            </span>
            <h2 className="font-display font-bold text-[clamp(2rem,5vw,3.75rem)] tracking-[-0.035em] text-[#F5F1E8] leading-tight">
              THE TOOLS <br className="hidden sm:inline" />
              BEHIND THE WORK.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A8A198] max-w-md font-normal leading-relaxed">
            A battle-tested foundation prioritizing speed, maintainability, type safety, and longevity.
          </p>
        </div>

        {/* 4 Editorial Technical Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackData.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              whileHover={{ y: -4 }}
              className="p-8 bg-[#1D1A17] hover:bg-[#25211D] border border-[#332D28] hover:border-[#6A4336] transition-all duration-300 rounded-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-[#FF7043]">
                    AREA {category.code}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#332D28] group-hover:bg-[#FF7043] transition-colors" />
                </div>

                <h3 className="font-display font-bold text-xl text-[#F5F1E8] tracking-wide mb-3">
                  {category.title}
                </h3>

                <p className="text-xs text-[#A8A198] leading-relaxed mb-6 font-normal">
                  {category.description}
                </p>
              </div>

              {/* Technologies List with animated underline on hover */}
              <div className="pt-6 border-t border-[#332D28]/60 flex flex-col gap-3">
                {category.items.map((tech) => {
                  const isHovered = hoveredTech === tech;

                  return (
                    <div
                      key={tech}
                      onMouseEnter={() => setHoveredTech(tech)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="group/tech relative cursor-default"
                    >
                      <div className="flex items-center justify-between text-xs sm:text-sm font-mono text-[#F5F1E8]/90 group-hover/tech:text-[#F5F1E8] group-hover/tech:translate-x-1 transition-all py-1">
                        <span>{tech}</span>
                        <span className="text-[#332D28] group-hover/tech:text-[#FF7043] transition-colors">↗</span>
                      </div>
                      <div
                        className="h-[1px] bg-[#FF7043] transition-all duration-300 ease-out"
                        style={{
                          width: isHovered ? '100%' : '0%',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

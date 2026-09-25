import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SazeonLogo } from './SazeonLogo';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'WORK', id: 'work' },
    { label: 'SERVICES', id: 'services' },
    { label: 'PROCESS', id: 'process' },
    { label: 'ABOUT', id: 'difference' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const socialLinks = [
    {
      label: 'WHATSAPP',
      href: "https://wa.me/917358357933?text=Hi%20SAZEON%2C%20I%27d%20like%20to%20discuss%20a%20project.",
      cursor: 'chat',
    },
    {
      label: 'INSTAGRAM',
      href: 'https://www.instagram.com/santhiya_v24/?hl=en',
      cursor: 'open',
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/santhiya-v-558b13214',
      cursor: 'open',
    },
    {
      label: 'EMAIL',
      href: 'mailto:sazeoncontact@gmail.com',
      cursor: 'email',
    },
  ];

  return (
    <footer className="bg-[#0C0B0A] border-t border-[#332D28] pt-16 pb-12 text-[#A8A198]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#332D28]">
          {/* Brand Col */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <SazeonLogo height={42} />
              </div>
              <p className="text-sm font-display text-[#FF7043] tracking-wide font-medium">
                BUILT FOR WHAT'S NEXT.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs text-[#A8A198]/70 max-w-sm leading-relaxed font-mono mb-3">
                Independent digital and creative studio crafting bespoke web experiences, e-commerce stores, and high-impact visual design systems.
              </p>
              <a
                href="mailto:sazeoncontact@gmail.com"
                data-cursor="email"
                className="text-xs font-mono text-[#F5F1E8] hover:text-[#FF7043] transition-colors"
              >
                sazeoncontact@gmail.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5F1E8] block mb-4">
              INDEX
            </span>
            <ul className="space-y-2.5 font-display text-xs tracking-wider">
              {navItems.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-[#F5F1E8] hover:translate-x-1 transition-all duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#F5F1E8] block mb-4">
              CONNECT
            </span>
            <ul className="space-y-2.5 font-display text-xs tracking-wider">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor={item.cursor}
                    className="hover:text-[#F5F1E8] inline-flex items-center gap-1.5 transition-colors group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#332D28] group-hover:text-[#FF7043] transition-colors" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8A198]/60">
          <span>© 2026 SAZEON. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
};

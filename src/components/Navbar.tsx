import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X, MessageSquare } from 'lucide-react';
import { MagneticButton } from './MagneticButton';
import { SazeonLogo } from './SazeonLogo';

interface NavbarProps {
  onOpenProjectModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'ABOUT', href: '#difference' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#151311]/92 backdrop-blur-md border-b border-[#332D28] py-3.5 shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-[#332D28]/40 py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Official SAZEON Logo: Faceted Origami S + Wordmark */}
          <a
            href="#"
            className="group focus-visible:outline-none flex items-center py-1"
            aria-label="SAZEON Home"
          >
            <SazeonLogo height={38} />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-[13px] font-display font-medium tracking-widest text-[#A8A198]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#F5F1E8] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#FF7043] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-4">
            <MagneticButton
              onClick={onOpenProjectModal}
              dataCursor="cta"
              strength={0.25}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-display font-semibold tracking-wider text-[#F5F1E8] bg-[#1D1A17] hover:bg-[#25211D] border border-[#332D28] hover:border-[#FF7043] px-4 py-2.5 rounded-sm transition-all duration-200 group"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </MagneticButton>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center gap-1.5 text-xs font-display font-semibold tracking-widest text-[#F5F1E8] border border-[#332D28] bg-[#1D1A17] px-3 py-2 rounded-sm"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              {mobileMenuOpen ? (
                <X className="w-3.5 h-3.5 text-[#FF7043]" />
              ) : (
                <Menu className="w-3.5 h-3.5 text-[#FF7043]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-[#0C0B0A] flex flex-col justify-between p-8 pt-24 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#332D28]/60">
                <SazeonLogo height={34} />
                <span className="text-[11px] font-mono tracking-widest text-[#FF7043] uppercase">
                  Studio
                </span>
              </div>
              <div className="flex flex-col gap-4 font-display">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.2 }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-3xl font-bold tracking-tight text-[#F5F1E8] hover:text-[#FF7043] transition-colors py-1 flex items-center justify-between border-b border-[#332D28]/60"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-[#FF7043]">0{idx + 1}</span>
                  </motion.a>
                ))}
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#contact');
                  }}
                  className="text-3xl font-bold tracking-tight text-[#F5F1E8] hover:text-[#FF7043] transition-colors py-1 flex items-center justify-between border-b border-[#332D28]/60"
                >
                  <span>CONTACT</span>
                  <span className="text-xs font-mono text-[#FF7043]">05</span>
                </motion.a>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-8 border-t border-[#332D28]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjectModal();
                }}
                className="w-full flex items-center justify-center gap-2 text-sm font-display font-semibold tracking-wider text-[#0C0B0A] bg-[#FF7043] hover:bg-[#FF9A78] py-3.5 rounded-sm transition-colors shadow-md"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/917358357933?text=Hi%20SAZEON%2C%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-sm font-display font-semibold tracking-wider text-[#F5F1E8] bg-[#1D1A17] border border-[#332D28] py-3 rounded-sm hover:border-[#FF7043] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#FF7043]" />
                <span>CHAT ON WHATSAPP ↗</span>
              </a>

              <div className="flex items-center justify-between text-xs font-mono text-[#A8A198] pt-3">
                <span>SAZEON STUDIO</span>
                <a href="mailto:sazeoncontact@gmail.com" className="hover:text-[#FF7043]">
                  sazeoncontact@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

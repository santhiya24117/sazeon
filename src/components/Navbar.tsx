import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0D0D0D]/90 backdrop-blur-md border-b border-[rgba(244,241,236,0.12)] py-4 shadow-2xl'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group flex flex-col items-start focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A98A]"
            aria-label="LUMIÈRE Home"
          >
            <span className="font-serif-editorial text-2xl md:text-3xl tracking-[0.24em] text-[#F4F1EC] uppercase transition-colors duration-300 group-hover:text-[#C8A98A]">
              LUMIÈRE
            </span>
            <span className="text-[8px] tracking-[0.3em] uppercase text-[#A9A39B] -mt-0.5 group-hover:text-[#C8A98A]/80 transition-colors">
              COIMBATORE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex items-center gap-8 text-[11px] tracking-[0.24em] font-medium text-[#A9A39B]">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `transition-colors duration-200 relative py-1 focus-visible:outline-none focus-visible:text-[#C8A98A] ${
                      isActive
                        ? 'text-[#F4F1EC] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#C8A98A]'
                        : 'hover:text-[#F4F1EC]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Outlined champagne BOOK button */}
            <Link
              to="/book"
              onClick={() => {
                if (onOpenBooking && location.pathname === '/book') {
                  onOpenBooking();
                }
              }}
              className="px-5 py-2 text-[11px] font-medium tracking-[0.22em] uppercase text-[#C8A98A] border border-[#C8A98A]/50 rounded-none hover:border-[#C8A98A] hover:bg-[#C8A98A] hover:text-[#0D0D0D] transition-all duration-300 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A98A]"
            >
              BOOK
            </Link>
          </div>

          {/* Mobile Right Controls: Book + Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              to="/book"
              className="px-3.5 py-1.5 text-[10px] font-medium tracking-[0.2em] uppercase text-[#C8A98A] border border-[#C8A98A]/60 rounded-none active:bg-[#C8A98A] active:text-[#0D0D0D]"
            >
              BOOK
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F4F1EC] hover:text-[#C8A98A] transition-colors focus-visible:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#0D0D0D] flex flex-col justify-between px-8 py-10 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between border-b border-[rgba(244,241,236,0.12)] pb-6">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col items-start"
              >
                <span className="font-serif-editorial text-2xl tracking-[0.25em] text-[#F4F1EC]">
                  LUMIÈRE
                </span>
                <span className="text-[8px] tracking-[0.3em] uppercase text-[#A9A39B]">
                  COIMBATORE · EST. 2026
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
                aria-label="Close menu"
              >
                <X size={26} />
              </button>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-6 py-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.35 }}
                >
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-serif-editorial text-3xl sm:text-4xl tracking-wider transition-colors flex items-center justify-between ${
                        isActive ? 'text-[#C8A98A]' : 'text-[#F4F1EC] hover:text-[#C8A98A]'
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={20} className="text-[#A9A39B]/60" />
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.35 }}
              >
                <NavLink
                  to="/book"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif-editorial text-3xl sm:text-4xl tracking-wider text-[#C8A98A] flex items-center justify-between"
                >
                  <span>RESERVATIONS</span>
                  <ArrowUpRight size={20} className="text-[#C8A98A]" />
                </NavLink>
              </motion.div>
            </nav>

            {/* Bottom Actions inside Mobile Menu */}
            <div className="pt-6 border-t border-[rgba(244,241,236,0.12)] flex flex-col gap-4">
              <Link
                to="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 text-xs font-semibold tracking-[0.25em] uppercase text-[#0D0D0D] bg-[#C8A98A] hover:bg-[#d5bba0] transition-colors text-center"
              >
                BOOK AN EXPERIENCE
              </Link>

              <div className="flex justify-between items-center text-xs tracking-widest text-[#A9A39B] pt-2">
                <span>RACE COURSE, COIMBATORE</span>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C8A98A] underline underline-offset-4"
                >
                  CONCIERGE
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

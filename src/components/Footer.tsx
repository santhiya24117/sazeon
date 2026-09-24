import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-[#F4F1EC] pt-20 pb-12 border-t border-[rgba(244,241,236,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[rgba(244,241,236,0.08)]">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block group">
                <h3 className="font-serif-editorial text-3xl md:text-4xl tracking-[0.25em] uppercase text-[#F4F1EC] group-hover:text-[#C8A98A] transition-colors mb-2">
                  LUMIÈRE
                </h3>
              </Link>
              <p className="font-serif-editorial italic text-lg text-[#C8A98A]">
                Beauty, redefined.
              </p>
            </div>
            <p className="mt-8 text-xs text-[#A9A39B] max-w-sm leading-relaxed font-light">
              Race Course Road, Coimbatore, Tamil Nadu 641018, India.
              <br />
              Tuesday – Sunday: 10:00 – 20:00 · Private Appointments Recommended.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3 text-xs tracking-[0.22em] uppercase font-medium">
            <span className="text-[#C8A98A] text-[10px] tracking-[0.3em] mb-2 block">
              NAVIGATION
            </span>
            <Link
              to="/"
              className="text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
            >
              ABOUT
            </Link>
            <Link
              to="/services"
              className="text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
            >
              SERVICES
            </Link>
            <Link
              to="/gallery"
              className="text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              className="text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
            >
              CONTACT
            </Link>
            <Link
              to="/book"
              className="text-[#C8A98A] hover:text-[#F4F1EC] transition-colors pt-1"
            >
              RESERVATIONS
            </Link>
          </div>

          {/* Social & Connect */}
          <div className="md:col-span-3 flex flex-col gap-3 text-xs tracking-[0.22em] uppercase font-medium">
            <span className="text-[#C8A98A] text-[10px] tracking-[0.3em] mb-2 block">
              CONNECT
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A9A39B] hover:text-[#C8A98A] transition-colors"
            >
              WhatsApp Concierge
            </a>
            <a
              href="https://maps.google.com/?q=Race+Course+Coimbatore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
            >
              Google Maps
            </a>
            <a
              href="tel:+919876543210"
              className="text-[#A9A39B] hover:text-[#F4F1EC] transition-colors"
            >
              Direct: +91 98765 43210
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] tracking-widest text-[#A9A39B]/70">
          <span>© 2026 LUMIÈRE. ALL RIGHTS RESERVED.</span>
          <span className="mt-2 sm:mt-0 text-[10px] tracking-[0.2em] text-[#A9A39B]/50 uppercase">
            HAUTE BEAUTY STUDIO · RACE COURSE, COIMBATORE
          </span>
        </div>
      </div>
    </footer>
  );
};

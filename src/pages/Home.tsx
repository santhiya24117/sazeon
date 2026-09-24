import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { IntroSection } from '../components/IntroSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { Transformation } from '../components/Transformation';
import { Studio } from '../components/Studio';
import { Testimonials } from '../components/Testimonials';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { MessageSquare, Calendar } from 'lucide-react';

export const Home: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    } else {
      setSelectedServiceId(null);
    }
    setBookingModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-[#F4F1EC] selection:bg-[#C8A98A] selection:text-[#0D0D0D] overflow-x-hidden">
      {/* Top Sticky Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Sections */}
      <main id="main-content">
        {/* 100svh Cinematic Hero - The ONLY video on the home page */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Editorial Introduction */}
        <IntroSection />

        {/* Cinematic Experience (~80vh) */}
        <ExperienceSection onOpenBooking={() => handleOpenBooking()} />

        {/* Interactive Transformation Comparison Slider */}
        <Transformation />

        {/* The Studio & Architecture */}
        <Studio onOpenBooking={() => handleOpenBooking()} />

        {/* Minimal Editorial Testimonials */}
        <Testimonials />

        {/* Final Cinematic Call to Action */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Booking Modal / Drawer */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
      />

      {/* Mobile Sticky Bottom CTA Bar (Restrained to <= 15% height) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#0D0D0D]/95 backdrop-blur-lg border-t border-[rgba(244,241,236,0.15)] px-4 py-3 flex items-center gap-3">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 border border-[#C8A98A]/40 text-[#C8A98A] hover:bg-[#C8A98A]/10 transition-colors flex items-center justify-center shrink-0"
          aria-label="WhatsApp Concierge"
        >
          <MessageSquare size={18} />
        </a>

        <button
          onClick={() => handleOpenBooking()}
          className="flex-1 py-3 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-2 active:bg-[#d5bba0] transition-colors"
        >
          <Calendar size={15} />
          <span>BOOK AN APPOINTMENT</span>
        </button>
      </div>
    </div>
  );
};

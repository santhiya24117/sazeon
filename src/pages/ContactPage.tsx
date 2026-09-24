import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { MapPin, Phone, Mail, Clock, MessageSquare, Car, ArrowUpRight, Check, Send } from 'lucide-react';
import { motion } from 'motion/react';

export const ContactPage: React.FC = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Appointment Inquiry',
    preferredDate: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1EC] selection:bg-[#C8A98A] selection:text-[#0D0D0D]">
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Header Banner */}
      <section className="pt-36 pb-16 md:pt-48 md:pb-24 border-b border-[rgba(244,241,236,0.1)] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#C8A98A] font-medium block mb-4">
            ATELIER CONCIERGE · COIMBATORE
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight mb-6">
            CONTACT & LOCATION
          </h1>
          <p className="text-[#A9A39B] text-base md:text-lg font-light leading-relaxed max-w-2xl">
            Our atelier is situated along the tranquil tree-lined avenue of Race Course Road in Coimbatore.
            For reservations, custom inquiries, or private consultations, connect with our concierge team.
          </p>
        </div>
      </section>

      {/* Contact Grid & Map Section */}
      <section className="py-20 md:py-28 border-b border-[rgba(244,241,236,0.08)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info & Amenities */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
              <div>
                <span className="text-xs tracking-[0.3em] uppercase text-[#C8A98A] block mb-3">
                  THE ATELIER
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl uppercase text-[#F4F1EC] mb-6">
                  LUMIÈRE COIMBATORE
                </h2>

                <div className="space-y-6 text-sm text-[#A9A39B] font-light">
                  <div className="flex items-start gap-4">
                    <MapPin size={20} className="text-[#C8A98A] shrink-0 mt-1" />
                    <div>
                      <p className="text-[#F4F1EC] font-medium">Race Course Road</p>
                      <p>Coimbatore, Tamil Nadu 641018, India</p>
                      <a
                        href="https://maps.google.com/?q=Race+Course+Coimbatore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C8A98A] text-xs tracking-wider uppercase mt-1 inline-flex items-center gap-1 hover:underline"
                      >
                        Open in Google Maps <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock size={20} className="text-[#C8A98A] shrink-0 mt-1" />
                    <div>
                      <p className="text-[#F4F1EC] font-medium">Studio Hours</p>
                      <p>Tuesday – Sunday: 10:00 AM – 8:00 PM</p>
                      <p className="text-xs text-[#A9A39B]/70">Mondays reserved for private masterclasses.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={20} className="text-[#C8A98A] shrink-0 mt-1" />
                    <div>
                      <p className="text-[#F4F1EC] font-medium">Direct Concierge</p>
                      <a href="tel:+919876543210" className="hover:text-[#F4F1EC] transition-colors">
                        +91 98765 43210
                      </a>
                      <p className="text-xs text-[#A9A39B]/70">Attentive concierge phone assistance.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageSquare size={20} className="text-[#C8A98A] shrink-0 mt-1" />
                    <div>
                      <p className="text-[#F4F1EC] font-medium">WhatsApp Atelier</p>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#C8A98A] hover:underline"
                      >
                        Connect via WhatsApp
                      </a>
                      <p className="text-xs text-[#A9A39B]/70">Instant confirmation & personalized questions.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Car size={20} className="text-[#C8A98A] shrink-0 mt-1" />
                    <div>
                      <p className="text-[#F4F1EC] font-medium">Arrival & Valet</p>
                      <p>Complimentary secured valet parking available at our private entrance on Race Course Road.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Quick Card */}
              <div className="p-6 bg-[#141414] border border-[#C8A98A]/30">
                <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] font-semibold block mb-1">
                  IMMEDIATE ASSISTANCE
                </span>
                <p className="text-xs text-[#A9A39B] mb-4">
                  Prefer instant messaging? Our concierge typically responds within 15 minutes during salon hours.
                </p>
                <a
                  href="https://wa.me/919876543210?text=Hello%20LUMIÈRE,%20I%20would%20like%20to%20inquire%20about%20an%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#d5bba0] transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={15} />
                  <span>CHAT WITH CONCIERGE</span>
                </a>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-7 bg-[#121212] border border-[rgba(244,241,236,0.12)] p-8 sm:p-12">
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C8A98A] font-semibold block mb-2">
                ONLINE INQUIRIES
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl uppercase text-[#F4F1EC] mb-2">
                SEND A MESSAGE
              </h2>
              <p className="text-xs text-[#A9A39B] mb-8">
                Our reservations team will reach out with bespoke availability and consultation details.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full border border-[#C8A98A] text-[#C8A98A] flex items-center justify-center mx-auto mb-6">
                    <Check size={32} />
                  </div>
                  <h3 className="font-serif-editorial text-3xl uppercase text-[#F4F1EC] mb-2">
                    INQUIRY RECEIVED
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A9A39B] max-w-md mx-auto leading-relaxed mb-8">
                    Thank you, {formData.name}. Our atelier concierge has received your request and will contact you via phone or WhatsApp shortly.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'Appointment Inquiry',
                        preferredDate: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-3 border border-white/20 text-xs tracking-widest uppercase text-[#F4F1EC] hover:border-[#C8A98A] hover:text-[#C8A98A] transition-colors"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aishwarya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] placeholder-white/20 focus:outline-none focus:border-[#C8A98A]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] placeholder-white/20 focus:outline-none focus:border-[#C8A98A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        placeholder="aishwarya@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] placeholder-white/20 focus:outline-none focus:border-[#C8A98A]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2">
                        INQUIRY TYPE
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] focus:outline-none focus:border-[#C8A98A]"
                      >
                        <option value="Appointment Inquiry">Appointment Inquiry</option>
                        <option value="Color Diagnostic Consultation">Color Diagnostic Consultation</option>
                        <option value="Cellular Skincare Treatment">Cellular Skincare Treatment</option>
                        <option value="Japanese Hydro-Spa Head Ritual">Japanese Hydro-Spa Head Ritual</option>
                        <option value="Private Pavilion Booking">Private Pavilion Booking</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2">
                      PREFERRED DATE OR TIMING
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] focus:outline-none focus:border-[#C8A98A]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2">
                      MESSAGE OR SPECIAL REQUESTS
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your hair history, skin goals, or specific artisan requests..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] placeholder-white/20 focus:outline-none focus:border-[#C8A98A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#F4F1EC] text-[#0D0D0D] text-xs font-semibold tracking-[0.25em] uppercase hover:bg-[#C8A98A] transition-colors flex items-center justify-center gap-3 active:scale-[0.99]"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Architectural Map Preview */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="p-8 md:p-12 border border-white/10 bg-[#0D0D0D] flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] block mb-2 font-semibold">
                NEIGHBORHOOD SANCTUARY
              </span>
              <h3 className="font-serif-editorial text-3xl uppercase text-[#F4F1EC] mb-2">
                RACE COURSE, COIMBATORE
              </h3>
              <p className="text-xs text-[#A9A39B] max-w-xl font-light leading-relaxed">
                Known as the green heart of Coimbatore, Race Course offers pedestrian walkways, serene heritage trees, and refined tranquility — the perfect environment for LUMIÈRE.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="https://maps.google.com/?q=Race+Course+Road+Coimbatore"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#d5bba0] transition-colors inline-flex items-center gap-2"
              >
                <span>GET DIRECTIONS</span>
                <ArrowUpRight size={14} />
              </a>
              <button
                onClick={() => setBookingModalOpen(true)}
                className="px-6 py-3.5 border border-white/20 text-[#F4F1EC] text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#C8A98A] hover:text-[#C8A98A] transition-colors"
              >
                BOOK ATELIER VISIT
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
};

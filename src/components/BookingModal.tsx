import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Calendar, Clock, MessageSquare, Phone } from 'lucide-react';
import { SERVICES_DATA } from '../data/services';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('hair');
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedStylist, setSelectedStylist] = useState<string>('Master Stylist');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<string>('11:00 AM');
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestNotes, setGuestNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedCategory(initialServiceId);
      const matched = SERVICES_DATA.find((s) => s.id === initialServiceId);
      if (matched && matched.subServices.length > 0) {
        setSelectedService(matched.subServices[0]);
      }
    } else {
      setSelectedService(SERVICES_DATA[0].subServices[0]);
    }
  }, [initialServiceId, isOpen]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const currentCategoryData =
    SERVICES_DATA.find((s) => s.id === selectedCategory) || SERVICES_DATA[0];

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '02:00 PM',
    '03:45 PM',
    '05:30 PM',
    '07:00 PM',
  ];

  const stylistLevels = [
    { title: 'Senior Stylist', surcharge: 'Standard Tier' },
    { title: 'Master Stylist', surcharge: '+15% Precision' },
    { title: 'Creative Director', surcharge: '+30% Bespoke' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const openWhatsAppDirect = () => {
    const message = encodeURIComponent(
      `Hello LUMIÈRE Coimbatore, I would like to reserve a bespoke appointment:\n` +
      `Category: ${selectedCategory.toUpperCase()}\n` +
      `Service: ${selectedService || 'Consultation'}\n` +
      `Stylist: ${selectedStylist}\n` +
      `Preferred Date: ${selectedDate}\n` +
      `Preferred Time: ${selectedSlot}\n` +
      `Guest Name: ${guestName || 'Guest'}`
    );
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#0D0D0D]/90 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#121212] border border-[rgba(244,241,236,0.18)] shadow-2xl p-6 sm:p-10 my-auto text-[#F4F1EC]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#A9A39B] hover:text-[#F4F1EC] transition-colors focus-visible:outline-none"
            aria-label="Close booking modal"
          >
            <X size={22} />
          </button>

          {!isSubmitted ? (
            <div>
              {/* Header */}
              <div className="mb-8 border-b border-[rgba(244,241,236,0.12)] pb-5">
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#C8A98A] font-semibold block mb-2">
                  BESPOKE RESERVATION · COIMBATORE
                </span>
                <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#F4F1EC] uppercase tracking-tight">
                  BOOK AN EXPERIENCE
                </h2>
                <p className="text-xs text-[#A9A39B] tracking-wider mt-1">
                  Each session commences with our signature diagnostic consultation.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Category Tabs */}
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2 font-medium">
                    01. SELECT DISCIPLINE
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {SERVICES_DATA.map((srv) => {
                      const isSelected = selectedCategory === srv.id;
                      return (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => {
                            setSelectedCategory(srv.id);
                            setSelectedService(srv.subServices[0]);
                          }}
                          className={`py-2.5 px-3 text-xs tracking-widest uppercase transition-all duration-200 border text-center ${
                            isSelected
                              ? 'border-[#C8A98A] bg-[#C8A98A] text-[#0D0D0D] font-semibold shadow-md'
                              : 'border-white/10 text-[#A9A39B] hover:border-white/30 hover:text-[#F4F1EC]'
                          }`}
                        >
                          {srv.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Specific Service Selection */}
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2 font-medium">
                    02. SPECIFIC RITUAL
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#181818] border border-[rgba(244,241,236,0.15)] text-xs text-[#F4F1EC] px-4 py-3 focus:border-[#C8A98A] focus:outline-none transition-colors"
                  >
                    {currentCategoryData.subServices.map((sub, idx) => (
                      <option key={idx} value={sub} className="bg-[#181818] text-[#F4F1EC]">
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Stylist Level */}
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2 font-medium">
                    03. STYLIST LEVEL
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {stylistLevels.map((st) => {
                      const isSelected = selectedStylist === st.title;
                      return (
                        <button
                          key={st.title}
                          type="button"
                          onClick={() => setSelectedStylist(st.title)}
                          className={`p-3 text-left border transition-all duration-200 ${
                            isSelected
                              ? 'border-[#C8A98A] bg-[#C8A98A]/10 text-[#F4F1EC]'
                              : 'border-white/10 text-[#A9A39B] hover:border-white/20'
                          }`}
                        >
                          <span className="text-xs font-medium block uppercase tracking-wider">
                            {st.title}
                          </span>
                          <span className="text-[10px] text-[#C8A98A] tracking-wider block mt-0.5">
                            {st.surcharge}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Date & Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2 font-medium flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#C8A98A]" />
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-[#181818] border border-[rgba(244,241,236,0.15)] text-xs text-[#F4F1EC] px-4 py-3 focus:border-[#C8A98A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2 font-medium flex items-center gap-1.5">
                      <Clock size={13} className="text-[#C8A98A]" />
                      TIME SLOT
                    </label>
                    <select
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      className="w-full bg-[#181818] border border-[rgba(244,241,236,0.15)] text-xs text-[#F4F1EC] px-4 py-3 focus:border-[#C8A98A] focus:outline-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-[#181818] text-[#F4F1EC]">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* 5. Guest Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-1 font-medium">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sundaram"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-[#181818] border border-[rgba(244,241,236,0.15)] text-xs text-[#F4F1EC] px-4 py-2.5 focus:border-[#C8A98A] focus:outline-none placeholder:text-stone-600"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-1 font-medium">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-[#181818] border border-[rgba(244,241,236,0.15)] text-xs text-[#F4F1EC] px-4 py-2.5 focus:border-[#C8A98A] focus:outline-none placeholder:text-stone-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-1 font-medium">
                    ADDITIONAL NOTES / PREVIOUS COLOR CHEMICAL HISTORY (OPTIONAL)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your hair type, skin goals, or wedding date..."
                    value={guestNotes}
                    onChange={(e) => setGuestNotes(e.target.value)}
                    className="w-full bg-[#181818] border border-[rgba(244,241,236,0.15)] text-xs text-[#F4F1EC] px-4 py-2 focus:border-[#C8A98A] focus:outline-none placeholder:text-stone-600 resize-none"
                  />
                </div>

                {/* Primary & WhatsApp Booking Options */}
                <div className="pt-4 border-t border-[rgba(244,241,236,0.12)] flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <button
                    type="button"
                    onClick={openWhatsAppDirect}
                    className="w-full sm:w-auto px-5 py-3.5 border border-[#C8A98A]/50 text-xs tracking-wider uppercase text-[#C8A98A] hover:bg-[#C8A98A]/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={15} />
                    <span>INSTANT WHATSAPP</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3.5 bg-[#F4F1EC] text-[#0D0D0D] text-xs font-semibold tracking-[0.22em] uppercase hover:bg-[#C8A98A] transition-colors"
                  >
                    CONFIRM APPOINTMENT REQUEST
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Confirmation State */
            <div className="text-center py-8">
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#C8A98A]/15 border border-[#C8A98A] flex items-center justify-center text-[#C8A98A]">
                <Check size={26} />
              </div>

              <span className="text-[10px] tracking-[0.35em] uppercase text-[#C8A98A] font-semibold block mb-2">
                RESERVATION REQUEST RECORDED
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#F4F1EC] uppercase mb-4">
                THANK YOU, {guestName.toUpperCase()}
              </h3>

              <p className="text-xs sm:text-sm text-[#A9A39B] max-w-md mx-auto leading-relaxed mb-8">
                Your bespoke reservation for <strong className="text-[#F4F1EC] font-normal">{selectedService}</strong> on <strong className="text-[#F4F1EC] font-normal">{selectedDate} at {selectedSlot}</strong> has been received by our Coimbatore Concierge.
                We will contact you via WhatsApp / Call at {guestPhone} within 2 hours.
              </p>

              <div className="p-4 bg-[#181818] border border-white/10 max-w-sm mx-auto text-left text-xs mb-8 space-y-1 text-[#A9A39B]">
                <div><span className="text-[#F4F1EC]">Studio:</span> LUMIÈRE Race Course, Coimbatore</div>
                <div><span className="text-[#F4F1EC]">Stylist:</span> {selectedStylist}</div>
                <div><span className="text-[#F4F1EC]">Concierge Line:</span> +91 98765 43210</div>
              </div>

              <button
                onClick={handleReset}
                className="px-8 py-3 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-widest uppercase hover:bg-[#d5bba0] transition-colors"
              >
                RETURN TO EXPERIENCE
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

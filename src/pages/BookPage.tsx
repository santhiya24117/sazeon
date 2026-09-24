import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { SERVICES_DATA } from '../data/services';
import { Check, Calendar, Clock, Sparkles, User, Coffee, VolumeX, Shield, ArrowRight, ArrowLeft, MessageSquare, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const BookPage: React.FC = () => {
  const [searchParams] = useSearchParams();

  // Multi-step state: 1: Treatment, 2: Artisan, 3: Date/Time, 4: Amenities, 5: Guest Info, 6: Confirmed
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [selectedCategory, setSelectedCategory] = useState<string>('hair');
  const [selectedTreatment, setSelectedTreatment] = useState<string>('');
  const [selectedArtisan, setSelectedArtisan] = useState<string>('Any Available Master Artisan');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [beverage, setBeverage] = useState<string>('Nilgiri Estate White Needle Tea');
  const [vibe, setVibe] = useState<string>('Silent Sanctuary (Essential consultation only)');
  const [sensitivities, setSensitivities] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  // Pre-fill from query params if passed
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const serviceParam = searchParams.get('service');

    if (categoryParam) {
      const match = SERVICES_DATA.find((s) => s.id === categoryParam);
      if (match) {
        setSelectedCategory(match.id);
        if (serviceParam) {
          setSelectedTreatment(decodeURIComponent(serviceParam));
        } else {
          setSelectedTreatment(match.subServices[0]);
        }
        return;
      }
    }

    if (serviceParam) {
      setSelectedTreatment(decodeURIComponent(serviceParam));
    } else {
      setSelectedTreatment(SERVICES_DATA[0].subServices[0]);
    }
  }, [searchParams]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedDate(tomorrow.toISOString().split('T')[0]);
  }, []);

  const currentCategoryObj =
    SERVICES_DATA.find((s) => s.id === selectedCategory) || SERVICES_DATA[0];

  const artisans = [
    {
      id: 'any',
      name: 'First Available Master Artisan',
      title: 'Optimal Availability',
      desc: 'We will match you with the master specialist best suited to your selected discipline.',
    },
    {
      id: 'elodie',
      name: 'Élodie Ramachandran',
      title: 'Creative Director & Master Colorist',
      desc: 'Paris & London trained. Specialist in bespoke balayage and tone architecture.',
    },
    {
      id: 'vanya',
      name: 'Dr. Vanya Mehra',
      title: 'Head Dermal Aesthetician',
      desc: 'Cellular hydro-infusion, buccal facial contouring, and enzymatic barrier health.',
    },
    {
      id: 'arjun',
      name: 'Arjun Devraj',
      title: 'Master Texture Architect',
      desc: 'Architectural cuts, Japanese silk smoothing, and head spa hydrotherapy.',
    },
  ];

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:15 PM',
    '02:45 PM',
    '04:30 PM',
    '06:00 PM',
    '07:15 PM',
  ];

  const beverages = [
    'Nilgiri Estate White Needle Tea (Organic Hand-Picked)',
    'Chilled Brut Vintage Champagne',
    'Cold-Pressed Botanical Elixir (Cucumber, Mint, Green Apple)',
    'Single-Origin South Indian Roast Espresso',
    'Sparkling Himalayan Botanical Tonic',
  ];

  const vibes = [
    'Silent Sanctuary (Essential diagnostic only, uninterrupted quiet)',
    'Gentle Consultation (Relaxed guidance, ambient soundscape)',
    'Full Editorial Consultation (In-depth aesthetic and lifestyle discussion)',
  ];

  const handleNextStep = () => {
    if (currentStep === 5) {
      if (!guestName || !guestPhone) return;
      const ref = `LMR-${Math.floor(1000 + Math.random() * 9000)}`;
      setBookingRef(ref);
      setCurrentStep(6);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const openWhatsAppConfirmation = () => {
    const text = encodeURIComponent(
      `Hello LUMIÈRE Coimbatore, I have completed a reservation on your website:\n` +
      `Reference: ${bookingRef}\n` +
      `Guest Name: ${guestName}\n` +
      `Phone: ${guestPhone}\n` +
      `Category: ${selectedCategory.toUpperCase()}\n` +
      `Treatment: ${selectedTreatment}\n` +
      `Artisan: ${selectedArtisan}\n` +
      `Date: ${selectedDate}\n` +
      `Time: ${selectedTime}\n` +
      `Refreshment: ${beverage}\n` +
      `Atmosphere: ${vibe}\n` +
      (sensitivities ? `Notes: ${sensitivities}\n` : '') +
      `Please confirm my atelier reservation.`
    );
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
  };

  const downloadCalendarFile = () => {
    const icsContent =
      `BEGIN:VCALENDAR\n` +
      `VERSION:2.0\n` +
      `PRODID:-//LUMIÈRE Atelier//Reservation//EN\n` +
      `BEGIN:VEVENT\n` +
      `SUMMARY:LUMIÈRE: ${selectedTreatment}\n` +
      `DESCRIPTION:Atelier reservation with ${selectedArtisan}. Ref: ${bookingRef}. Location: Race Course Road, Coimbatore.\n` +
      `LOCATION:LUMIÈRE Atelier, Race Course Road, Coimbatore, Tamil Nadu\n` +
      `STATUS:CONFIRMED\n` +
      `END:VEVENT\n` +
      `END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `lumiere-reservation-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1EC] selection:bg-[#C8A98A] selection:text-[#0D0D0D]">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-12 md:pt-48 md:pb-16 border-b border-[rgba(244,241,236,0.1)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[11px] tracking-[0.35em] uppercase text-[#C8A98A] font-medium block mb-3">
            RESERVATIONS ATELIER · COIMBATORE
          </span>
          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight mb-4">
            RESERVE AN EXPERIENCE
          </h1>
          <p className="text-[#A9A39B] text-xs sm:text-sm font-light max-w-lg mx-auto">
            Experience unhurried one-on-one artistry in our private acoustic pavilions.
          </p>

          {/* Progress Indicator */}
          {currentStep < 6 && (
            <div className="mt-10 flex items-center justify-center gap-3 sm:gap-6 text-[10px] tracking-widest text-[#A9A39B]">
              <span className={currentStep >= 1 ? 'text-[#C8A98A] font-semibold' : ''}>01. TREATMENT</span>
              <span>—</span>
              <span className={currentStep >= 2 ? 'text-[#C8A98A] font-semibold' : ''}>02. ARTISAN</span>
              <span>—</span>
              <span className={currentStep >= 3 ? 'text-[#C8A98A] font-semibold' : ''}>03. DATE & TIME</span>
              <span>—</span>
              <span className={currentStep >= 4 ? 'text-[#C8A98A] font-semibold' : ''}>04. AMENITIES</span>
              <span>—</span>
              <span className={currentStep >= 5 ? 'text-[#C8A98A] font-semibold' : ''}>05. GUEST</span>
            </div>
          )}
        </div>
      </section>

      {/* Main Reservation Container */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-[#121212] border border-[rgba(244,241,236,0.14)] p-8 sm:p-12 shadow-2xl">
            <AnimatePresence mode="wait">
              {/* STEP 1: TREATMENT SELECTION */}
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] block mb-2 font-semibold">
                      STEP 01
                    </span>
                    <h2 className="font-serif-editorial text-3xl uppercase text-[#F4F1EC] mb-1">
                      SELECT DISCIPLINE & TREATMENT
                    </h2>
                    <p className="text-xs text-[#A9A39B]">
                      Every appointment begins with a diagnostic texture and tone assessment.
                    </p>
                  </div>

                  {/* Discipline categories */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {SERVICES_DATA.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(srv.id);
                          setSelectedTreatment(srv.subServices[0]);
                        }}
                        className={`p-4 border text-left transition-all ${
                          selectedCategory === srv.id
                            ? 'border-[#C8A98A] bg-[#C8A98A]/10 text-[#F4F1EC]'
                            : 'border-white/10 text-[#A9A39B] hover:border-white/30'
                        }`}
                      >
                        <span className="text-[10px] text-[#C8A98A] block mb-1">{srv.number}</span>
                        <span className="font-serif-editorial text-xl uppercase block text-[#F4F1EC]">
                          {srv.title}
                        </span>
                        <span className="text-[10px] tracking-wider text-[#A9A39B] uppercase block mt-1">
                          From {srv.startingPrice}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Sub-services list */}
                  <div className="pt-4 border-t border-white/10">
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-3 font-medium">
                      CHOOSE SPECIFIC TREATMENT PROTOCOL
                    </label>
                    <div className="space-y-2">
                      {currentCategoryObj.subServices.map((sub) => {
                        const isSelected = selectedTreatment === sub;
                        return (
                          <div
                            key={sub}
                            onClick={() => setSelectedTreatment(sub)}
                            className={`p-4 border cursor-pointer flex items-center justify-between transition-all ${
                              isSelected
                                ? 'border-[#C8A98A] bg-[#181818] text-[#F4F1EC]'
                                : 'border-white/5 bg-[#0F0F0F] text-[#A9A39B] hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                  isSelected ? 'border-[#C8A98A] bg-[#C8A98A]' : 'border-white/20'
                                }`}
                              >
                                {isSelected && <Check size={10} className="text-[#0D0D0D]" />}
                              </div>
                              <span className="text-xs sm:text-sm">{sub}</span>
                            </div>
                            <span className="text-[10px] tracking-wider text-[#C8A98A] uppercase shrink-0">
                              {currentCategoryObj.duration}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex justify-end">
                    <button
                      onClick={handleNextStep}
                      className="px-8 py-3.5 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#d5bba0] transition-colors flex items-center gap-2"
                    >
                      <span>CONTINUE TO ARTISAN</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: ARTISAN SELECTION */}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] block mb-2 font-semibold">
                      STEP 02
                    </span>
                    <h2 className="font-serif-editorial text-3xl uppercase text-[#F4F1EC] mb-1">
                      CHOOSE YOUR MASTER ARTISAN
                    </h2>
                    <p className="text-xs text-[#A9A39B]">
                      Our team members are trained extensively in global styling capitals.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {artisans.map((artisan) => {
                      const isSelected = selectedArtisan === artisan.name;
                      return (
                        <div
                          key={artisan.id}
                          onClick={() => setSelectedArtisan(artisan.name)}
                          className={`p-6 border cursor-pointer flex flex-col justify-between transition-all ${
                            isSelected
                              ? 'border-[#C8A98A] bg-[#181818]'
                              : 'border-white/10 bg-[#0F0F0F] hover:border-white/20'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] tracking-widest uppercase text-[#C8A98A] font-medium">
                                {artisan.title}
                              </span>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                  isSelected ? 'border-[#C8A98A] bg-[#C8A98A]' : 'border-white/20'
                                }`}
                              >
                                {isSelected && <Check size={10} className="text-[#0D0D0D]" />}
                              </div>
                            </div>
                            <h3 className="font-serif-editorial text-xl uppercase text-[#F4F1EC] mb-2">
                              {artisan.name}
                            </h3>
                            <p className="text-xs text-[#A9A39B] font-light leading-relaxed">
                              {artisan.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <button
                      onClick={handlePrevStep}
                      className="px-6 py-3.5 border border-white/20 text-xs tracking-widest uppercase text-[#A9A39B] hover:text-[#F4F1EC] hover:border-white/40 transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft size={14} />
                      <span>BACK</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="px-8 py-3.5 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#d5bba0] transition-colors flex items-center gap-2"
                    >
                      <span>SELECT DATE & TIME</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: DATE & TIME SELECTION */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] block mb-2 font-semibold">
                      STEP 03
                    </span>
                    <h2 className="font-serif-editorial text-3xl uppercase text-[#F4F1EC] mb-1">
                      SELECT DATE & TIME SLOT
                    </h2>
                    <p className="text-xs text-[#A9A39B]">
                      Tuesday through Sunday. Appointments are scheduled with ample decompression buffer.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-3 font-medium">
                        APPOINTMENT DATE
                      </label>
                      <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full bg-[#181818] border border-white/15 p-4 text-xs text-[#F4F1EC] focus:outline-none focus:border-[#C8A98A]"
                      />
                      <p className="text-[11px] text-[#A9A39B]/70 mt-2">
                        * Mondays are reserved for team masterclasses & deep studio sanitization.
                      </p>
                    </div>

                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-3 font-medium">
                        AVAILABLE TIME SLOTS
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((slot) => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setSelectedTime(slot)}
                              className={`p-3 border text-xs tracking-wider uppercase transition-all ${
                                isSelected
                                  ? 'border-[#C8A98A] bg-[#C8A98A] text-[#0D0D0D] font-semibold'
                                  : 'border-white/10 text-[#A9A39B] hover:border-white/30'
                              }`}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <button
                      onClick={handlePrevStep}
                      className="px-6 py-3.5 border border-white/20 text-xs tracking-widest uppercase text-[#A9A39B] hover:text-[#F4F1EC] hover:border-white/40 transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft size={14} />
                      <span>BACK</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="px-8 py-3.5 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#d5bba0] transition-colors flex items-center gap-2"
                    >
                      <span>CUSTOMIZE AMENITIES</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: AMENITIES & ATMOSPHERE */}
              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] block mb-2 font-semibold">
                      STEP 04
                    </span>
                    <h2 className="font-serif-editorial text-3xl uppercase text-[#F4F1EC] mb-1">
                      BESPOKE AMENITIES & REFRESHMENTS
                    </h2>
                    <p className="text-xs text-[#A9A39B]">
                      Every session at LUMIÈRE is curated to your sensory and conversation preferences.
                    </p>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-3 font-medium">
                      COMPLIMENTARY ARRIVAL REFRESHMENT
                    </label>
                    <div className="space-y-2">
                      {beverages.map((bev) => (
                        <div
                          key={bev}
                          onClick={() => setBeverage(bev)}
                          className={`p-3.5 border cursor-pointer flex items-center gap-3 text-xs transition-all ${
                            beverage === bev
                              ? 'border-[#C8A98A] bg-[#181818] text-[#F4F1EC]'
                              : 'border-white/5 bg-[#0F0F0F] text-[#A9A39B] hover:border-white/20'
                          }`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                              beverage === bev ? 'border-[#C8A98A] bg-[#C8A98A]' : 'border-white/20'
                            }`}
                          >
                            {beverage === bev && <Check size={8} className="text-[#0D0D0D]" />}
                          </div>
                          <span>{bev}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-3 font-medium">
                      SESSION ATMOSPHERE & CONVERSATION
                    </label>
                    <div className="space-y-2">
                      {vibes.map((v) => (
                        <div
                          key={v}
                          onClick={() => setVibe(v)}
                          className={`p-3.5 border cursor-pointer flex items-center gap-3 text-xs transition-all ${
                            vibe === v
                              ? 'border-[#C8A98A] bg-[#181818] text-[#F4F1EC]'
                              : 'border-white/5 bg-[#0F0F0F] text-[#A9A39B] hover:border-white/20'
                          }`}
                        >
                          <div
                            className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                              vibe === v ? 'border-[#C8A98A] bg-[#C8A98A]' : 'border-white/20'
                            }`}
                          >
                            {vibe === v && <Check size={8} className="text-[#0D0D0D]" />}
                          </div>
                          <span>{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2 font-medium">
                      SCALP / SKIN SENSITIVITIES OR ALLERGIES
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sensitive to strong fragrances, eczema, previous bleach sensitivity..."
                      value={sensitivities}
                      onChange={(e) => setSensitivities(e.target.value)}
                      className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] placeholder-white/20 focus:outline-none focus:border-[#C8A98A]"
                    />
                  </div>

                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <button
                      onClick={handlePrevStep}
                      className="px-6 py-3.5 border border-white/20 text-xs tracking-widest uppercase text-[#A9A39B] hover:text-[#F4F1EC] hover:border-white/40 transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft size={14} />
                      <span>BACK</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      className="px-8 py-3.5 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#d5bba0] transition-colors flex items-center gap-2"
                    >
                      <span>GUEST DETAILS</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: GUEST INFORMATION */}
              {currentStep === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  <div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] block mb-2 font-semibold">
                      STEP 05
                    </span>
                    <h2 className="font-serif-editorial text-3xl uppercase text-[#F4F1EC] mb-1">
                      GUEST CONFIRMATION
                    </h2>
                    <p className="text-xs text-[#A9A39B]">
                      Enter your contact information to receive appointment confirmation and valet directions.
                    </p>
                  </div>

                  {/* Summary card */}
                  <div className="p-5 bg-[#0F0F0F] border border-white/10 text-xs space-y-2">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8A98A] font-medium block mb-1">
                      RESERVATION SUMMARY
                    </span>
                    <div className="flex justify-between">
                      <span className="text-[#A9A39B]">Treatment:</span>
                      <span className="text-[#F4F1EC] font-medium">{selectedTreatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A9A39B]">Artisan:</span>
                      <span className="text-[#F4F1EC]">{selectedArtisan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A9A39B]">Date & Time:</span>
                      <span className="text-[#F4F1EC]">{selectedDate} at {selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A9A39B]">Refreshment:</span>
                      <span className="text-[#F4F1EC] truncate max-w-[240px]">{beverage}</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Radhika Sundaram"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] placeholder-white/20 focus:outline-none focus:border-[#C8A98A]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2">
                          PHONE NUMBER (WHATSAPP ENABLED) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={guestPhone}
                          onChange={(e) => setGuestPhone(e.target.value)}
                          className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] placeholder-white/20 focus:outline-none focus:border-[#C8A98A]"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] tracking-[0.25em] uppercase text-[#A9A39B] block mb-2">
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          placeholder="radhika@example.com"
                          value={guestEmail}
                          onChange={(e) => setGuestEmail(e.target.value)}
                          className="w-full bg-[#181818] border border-white/10 px-4 py-3 text-xs text-[#F4F1EC] placeholder-white/20 focus:outline-none focus:border-[#C8A98A]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                    <button
                      onClick={handlePrevStep}
                      className="px-6 py-3.5 border border-white/20 text-xs tracking-widest uppercase text-[#A9A39B] hover:text-[#F4F1EC] hover:border-white/40 transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft size={14} />
                      <span>BACK</span>
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={!guestName || !guestPhone}
                      className={`px-8 py-3.5 text-xs font-semibold tracking-[0.2em] uppercase transition-all flex items-center gap-2 ${
                        guestName && guestPhone
                          ? 'bg-[#C8A98A] text-[#0D0D0D] hover:bg-[#d5bba0]'
                          : 'bg-white/10 text-white/30 cursor-not-allowed'
                      }`}
                    >
                      <span>CONFIRM RESERVATION</span>
                      <Check size={14} />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 6: LUXURY CONFIRMATION */}
              {currentStep === 6 && (
                <motion.div
                  key="step-6"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full border border-[#C8A98A] text-[#C8A98A] flex items-center justify-center mx-auto mb-6">
                    <Check size={32} />
                  </div>

                  <span className="text-[10px] tracking-[0.35em] uppercase text-[#C8A98A] block mb-2 font-medium">
                    ATELIER RESERVATION CONFIRMED
                  </span>
                  <h2 className="font-serif-editorial text-4xl sm:text-5xl uppercase text-[#F4F1EC] mb-2">
                    WE AWAIT YOUR ARRIVAL
                  </h2>
                  <p className="text-xs sm:text-sm text-[#A9A39B] max-w-md mx-auto mb-8 font-light leading-relaxed">
                    Thank you, {guestName}. Your private pavilion has been reserved at our Race Course studio.
                  </p>

                  {/* Ref badge */}
                  <div className="inline-block p-4 bg-[#181818] border border-[#C8A98A]/40 mb-8 text-center min-w-[280px]">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#A9A39B] block mb-1">
                      RESERVATION REFERENCE
                    </span>
                    <span className="font-serif-editorial text-2xl text-[#C8A98A] tracking-wider block">
                      {bookingRef}
                    </span>
                    <span className="text-[10px] text-[#F4F1EC]/80 block mt-1">
                      {selectedDate} · {selectedTime}
                    </span>
                  </div>

                  {/* Booking details card */}
                  <div className="max-w-md mx-auto p-6 bg-[#0E0E0E] border border-white/5 text-left text-xs space-y-2 mb-8">
                    <div className="flex justify-between">
                      <span className="text-[#A9A39B]">Treatment:</span>
                      <span className="text-[#F4F1EC] font-medium">{selectedTreatment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A9A39B]">Master Artisan:</span>
                      <span className="text-[#F4F1EC]">{selectedArtisan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A9A39B]">Location:</span>
                      <span className="text-[#F4F1EC]">Race Course Road, Coimbatore</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#A9A39B]">Arrival Valet:</span>
                      <span className="text-[#C8A98A]">Included & Reserved</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={openWhatsAppConfirmation}
                      className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] text-[#0D0D0D] text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#22c35e] transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <MessageSquare size={16} />
                      <span>RECEIVE WHATSAPP PASS</span>
                    </button>

                    <button
                      onClick={downloadCalendarFile}
                      className="w-full sm:w-auto px-6 py-3.5 border border-white/20 text-[#F4F1EC] text-xs font-semibold tracking-[0.2em] uppercase hover:border-[#C8A98A] hover:text-[#C8A98A] transition-colors inline-flex items-center justify-center gap-2"
                    >
                      <Download size={14} />
                      <span>ADD TO CALENDAR</span>
                    </button>
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center gap-6 text-xs text-[#A9A39B]">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="hover:text-[#F4F1EC] transition-colors underline underline-offset-4"
                    >
                      Reserve Another Session
                    </button>
                    <span>·</span>
                    <Link
                      to="/"
                      className="hover:text-[#F4F1EC] transition-colors underline underline-offset-4"
                    >
                      Return to LUMIÈRE Home
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

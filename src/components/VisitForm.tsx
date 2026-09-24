import React, { useState } from 'react';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Reveal } from './Reveal.tsx';
import { SectionLabel } from './SectionLabel.tsx';
import { RESIDENCE_CONFIGS } from '../data/content.ts';

interface VisitFormProps {
  preselectedResidence?: string;
}

export const VisitForm: React.FC<VisitFormProps> = ({ preselectedResidence }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    preferredResidence: preselectedResidence || 'THREE BEDROOM (1,860 SQ. FT.)',
    preferredDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.phoneNumber.trim() || formData.phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid contact phone number.';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please specify a preferred date for your private viewing.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-[#101815] px-6 sm:px-10 lg:px-16 py-28 sm:py-36 border-t border-[#53665A]/25 text-[#F5F1E7]"
      aria-label="Book a Private Visit"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#53665A]/25 pb-6">
          <SectionLabel label="12 — PRIVATE VISIT" />
          <span className="font-serif text-xs italic text-[#53665A]">APPOINTMENT RESERVATION</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-8">
            <Reveal durationMs={700} yOffset={25}>
              <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-normal leading-[0.96] tracking-[-0.01em] uppercase text-[#F5F1E7]">
                MAKE TIME
                <br />
                TO SEE IT.
              </h2>
            </Reveal>

            <Reveal durationMs={700} delayMs={150} yOffset={25}>
              <div className="space-y-4 max-w-md">
                <p className="font-sans text-base sm:text-lg leading-relaxed text-[#EAE5D8]/85">
                  Private viewings are arranged individually to experience the acoustic quietness, daylight shifts, and monolithic materiality first-hand.
                </p>
                <p className="font-sans text-xs sm:text-sm text-[#53665A] leading-relaxed">
                  Our private client representative will guide you through the architectural model, full-scale material archives, and physical site orientation in Chennai.
                </p>

                <div className="pt-8 border-t border-[#53665A]/25 space-y-3 text-xs tracking-wider text-[#53665A]">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9B7657]" />
                    <span>PRIVATE INDIVIDUAL APPOINTMENTS ONLY</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9B7657]" />
                    <span>CONFIDENTIAL ARCHITECTURAL DOSSIER PROVIDED</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Sophisticated Minimal Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C3028]/40 border border-[#53665A]/30 p-8 sm:p-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#F5F1E7] mb-2"
                      >
                        FULL NAME *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Alistair Chen"
                        className="w-full bg-[#101815] border border-[#53665A]/40 px-4 py-3.5 text-sm text-[#F5F1E7] placeholder-[#53665A] focus:border-[#9B7657] focus:outline-none transition-colors"
                      />
                      {errors.fullName && (
                        <p className="mt-1.5 text-xs text-[#9B7657]">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#F5F1E7] mb-2"
                      >
                        PHONE NUMBER *
                      </label>
                      <input
                        id="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({ ...formData, phoneNumber: e.target.value })
                        }
                        placeholder="+91 98400 12345"
                        className="w-full bg-[#101815] border border-[#53665A]/40 px-4 py-3.5 text-sm text-[#F5F1E7] placeholder-[#53665A] focus:border-[#9B7657] focus:outline-none transition-colors"
                      />
                      {errors.phoneNumber && (
                        <p className="mt-1.5 text-xs text-[#9B7657]">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#F5F1E7] mb-2"
                      >
                        EMAIL *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="client@sanctuary.com"
                        className="w-full bg-[#101815] border border-[#53665A]/40 px-4 py-3.5 text-sm text-[#F5F1E7] placeholder-[#53665A] focus:border-[#9B7657] focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-[#9B7657]">{errors.email}</p>
                      )}
                    </div>

                    {/* Preferred Residence */}
                    <div>
                      <label
                        htmlFor="preferredResidence"
                        className="block font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#F5F1E7] mb-2"
                      >
                        PREFERRED RESIDENCE
                      </label>
                      <select
                        id="preferredResidence"
                        value={formData.preferredResidence}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredResidence: e.target.value })
                        }
                        className="w-full bg-[#101815] border border-[#53665A]/40 px-4 py-3.5 text-sm text-[#F5F1E7] focus:border-[#9B7657] focus:outline-none transition-colors"
                      >
                        {RESIDENCE_CONFIGS.map((r) => (
                          <option key={r.id} value={`${r.name} (${r.area})`}>
                            {r.name} — {r.area} ({r.headline})
                          </option>
                        ))}
                        <option value="GENERAL PORTFOLIO INQUIRY">
                          GENERAL ARCHITECTURAL INQUIRY
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#F5F1E7] mb-2"
                    >
                      PREFERRED DATE *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredDate: e.target.value })
                      }
                      className="w-full bg-[#101815] border border-[#53665A]/40 px-4 py-3.5 text-sm text-[#F5F1E7] focus:border-[#9B7657] focus:outline-none transition-colors [color-scheme:dark]"
                    />
                    {errors.preferredDate && (
                      <p className="mt-1.5 text-xs text-[#9B7657]">{errors.preferredDate}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-sans text-xs font-medium tracking-[0.2em] uppercase text-[#F5F1E7] mb-2"
                    >
                      MESSAGE / SPECIFIC REQUIREMENTS (OPTIONAL)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share any spatial preferences, timing requirements, or architectural interests..."
                      className="w-full bg-[#101815] border border-[#53665A]/40 px-4 py-3.5 text-sm text-[#F5F1E7] placeholder-[#53665A] focus:border-[#9B7657] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 bg-[#F5F1E7] hover:bg-[#EAE5D8] px-8 py-4 text-xs font-semibold tracking-[0.2em] text-[#101815] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9B7657]"
                    >
                      <span>REQUEST A PRIVATE VISIT</span>
                      <ArrowRight className="h-4 w-4 text-[#9B7657] group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="mt-4 font-sans text-[11px] text-[#53665A]">
                      *Demonstration appointment form. Fictional portfolio project created for SAZEON.
                    </p>
                  </div>
                </form>
              ) : (
                /* Success State */
                <div className="py-8 space-y-6 text-center sm:text-left">
                  <div className="inline-flex h-12 w-12 items-center justify-center border border-[#9B7657] bg-[#101815] text-[#9B7657]">
                    <Check className="h-6 w-6 stroke-[1.5]" />
                  </div>

                  <h3 className="font-serif text-3xl uppercase tracking-wide text-[#F5F1E7]">
                    APPOINTMENT REQUEST RECEIVED.
                  </h3>

                  <p className="font-sans text-sm sm:text-base leading-relaxed text-[#EAE5D8]/80 max-w-lg">
                    Thank you, <strong className="text-[#F5F1E7]">{formData.fullName}</strong>. A dedicated private client representative has staged your viewing consultation for <span className="text-[#9B7657]">{formData.preferredResidence}</span> on <span className="text-[#9B7657]">{formData.preferredDate}</span>.
                  </p>

                  <div className="p-4 bg-[#101815] border border-[#53665A]/30 text-xs text-[#53665A] max-w-lg space-y-1">
                    <p className="text-[#EAE5D8]">PORTFOLIO DEMONSTRATION NOTICE:</p>
                    <p>
                      This interface is part of the architectural portfolio concept for SAZEON. No real appointment has been booked or credit recorded.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        phoneNumber: '',
                        email: '',
                        preferredResidence: 'THREE BEDROOM (1,860 SQ. FT.)',
                        preferredDate: '',
                        message: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-[#9B7657] hover:text-[#F5F1E7] transition-colors pt-2"
                  >
                    <span>SUBMIT ANOTHER INQUIRY</span>
                    <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

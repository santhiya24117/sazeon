import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, MessageSquare } from 'lucide-react';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('$3,000 – $7,500');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('2–4 Weeks');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setSelectedServices([initialService]);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const servicesList = [
    'Business Websites',
    'Landing Pages',
    'E-commerce Websites',
    'Logo Design',
    'Business Card Design',
    'Poster Design',
  ];

  const budgetOptions = [
    '$1,500 – $3,000',
    '$3,000 – $7,500',
    '$7,500 – $15,000+',
  ];

  const timelineOptions = ['2–4 Weeks', '1–2 Months', 'Flexible'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMsg('Please provide your name and work email.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg('Please provide a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', company: '', details: '' });
    setSelectedServices([]);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0C0B0A]/88 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="relative w-full max-w-2xl bg-[#151311] border border-[#332D28] rounded-sm p-6 sm:p-10 z-10 my-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 text-[#A8A198] hover:text-[#F5F1E8] border border-[#332D28] hover:border-[#FF7043] bg-[#1D1A17] rounded-sm transition-colors"
              aria-label="Close project inquiry dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#25211D] border border-[#FF7043] flex items-center justify-center text-[#FF7043] mb-6 shadow-[0_0_16px_rgba(255,112,67,0.3)]">
                  <Check className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF7043] mb-2">
                  TRANSMISSION CONFIRMED
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F1E8] mb-4">
                  Project Brief Received.
                </h3>
                <p className="text-sm text-[#A8A198] max-w-md mb-8 leading-relaxed">
                  Thank you, <span className="text-[#F5F1E8]">{formData.name}</span>. Our studio partners will review your scope for <span className="text-[#FF7043]">{selectedServices.join(', ') || 'your project'}</span> and reply within 24 business hours to <span className="text-[#F5F1E8]">{formData.email}</span>.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 text-xs font-display font-semibold tracking-wider text-[#0C0B0A] bg-[#FF7043] hover:bg-[#FF9A78] rounded-sm transition-colors"
                  >
                    RETURN TO STUDIO
                  </button>

                  <a
                    href="https://wa.me/917358357933?text=Hi%20SAZEON%2C%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-display font-semibold tracking-wider text-[#F5F1E8] bg-[#1D1A17] border border-[#332D28] hover:border-[#FF7043] rounded-sm transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#FF7043]" />
                    <span>CHAT ON WHATSAPP NOW ↗</span>
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-8">
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF7043] block mb-2">
                    START A PROJECT
                  </span>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F1E8] tracking-tight">
                    Let’s build what’s next.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A8A198] mt-1">
                    Tell us about your brand vision, scope, and timeline.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Service Multi-Select */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8A198] mb-3">
                      Selected Services
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {servicesList.map((service) => {
                        const isSelected = selectedServices.includes(service);
                        return (
                          <button
                            type="button"
                            key={service}
                            onClick={() => toggleService(service)}
                            className={`p-2.5 text-left text-xs font-display transition-all border rounded-sm ${
                              isSelected
                                ? 'bg-[#25211D] border-[#FF7043] text-[#F5F1E8]'
                                : 'bg-[#1D1A17] border-[#332D28] text-[#A8A198] hover:border-[#A8A198]'
                            }`}
                          >
                            <span className="block truncate">{service}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A8A198] mb-2">
                        Estimated Budget
                      </label>
                      <select
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                        className="w-full bg-[#1D1A17] border border-[#332D28] rounded-sm px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:border-[#FF7043] focus:outline-none"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b} className="bg-[#151311] text-[#F5F1E8]">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A8A198] mb-2">
                        Desired Timeline
                      </label>
                      <select
                        value={selectedTimeline}
                        onChange={(e) => setSelectedTimeline(e.target.value)}
                        className="w-full bg-[#1D1A17] border border-[#332D28] rounded-sm px-3.5 py-2.5 text-xs text-[#F5F1E8] focus:border-[#FF7043] focus:outline-none"
                      >
                        {timelineOptions.map((t) => (
                          <option key={t} value={t} className="bg-[#151311] text-[#F5F1E8]">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A8A198] mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        className="w-full bg-[#1D1A17] border border-[#332D28] rounded-sm px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder-[#A8A198]/40 focus:border-[#FF7043] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#A8A198] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full bg-[#1D1A17] border border-[#332D28] rounded-sm px-3.5 py-2.5 text-xs text-[#F5F1E8] placeholder-[#A8A198]/40 focus:border-[#FF7043] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#A8A198] mb-1.5">
                      Project Goals & Context
                    </label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Give a brief summary of the business, key deliverables, or target launch date..."
                      className="w-full bg-[#1D1A17] border border-[#332D28] rounded-sm p-3.5 text-xs text-[#F5F1E8] placeholder-[#A8A198]/40 focus:border-[#FF7043] focus:outline-none resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-xs text-[#FF9A78] bg-[#25211D] p-2.5 border border-[#332D28]">
                      {errorMsg}
                    </p>
                  )}

                  {/* Action Row */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 text-xs font-display font-semibold tracking-wider text-[#0C0B0A] bg-[#FF7043] hover:bg-[#FF9A78] py-3.5 rounded-sm transition-colors group shadow-md"
                    >
                      <span>SEND INQUIRY TO STUDIO</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <a
                      href="https://wa.me/917358357933?text=Hi%20SAZEON%2C%20I'd%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-display font-semibold text-[#F5F1E8] bg-[#1D1A17] hover:bg-[#25211D] border border-[#332D28] hover:border-[#FF7043] rounded-sm transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#FF7043]" />
                      <span>OR WHATSAPP ↗</span>
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

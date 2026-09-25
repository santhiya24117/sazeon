import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, MessageSquare, Mail, Instagram, Linkedin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

interface ContactSectionProps {
  onOpenProjectModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenProjectModal }) => {
  return (
    <section id="contact" className="py-28 sm:py-40 bg-[#0C0B0A] relative border-t border-[#332D28] bg-editorial-grid overflow-hidden">
      {/* Subtle warm micro atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full bg-[#FF7043]/[0.025] blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Narrative */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7043]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#FF7043]">
                INQUIRY & COLLABORATION
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.035em] text-[#F5F1E8] mb-8"
            >
              LET'S BUILD <br />
              WHAT'S <span className="text-[#FF7043]">NEXT.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-[#A8A198] max-w-xl leading-relaxed mb-12 font-normal"
            >
              Have an idea, a business, or a project in mind? <br />
              Let's turn it into something real.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <MagneticButton
                onClick={onOpenProjectModal}
                dataCursor="cta"
                strength={0.3}
                className="px-8 sm:px-10 py-4 sm:py-5 bg-[#25211D] hover:bg-[#1D1A17] border border-[#332D28] hover:border-[#FF7043] text-sm sm:text-base font-display font-semibold tracking-wider text-[#F5F1E8] rounded-sm transition-all shadow-xl group"
              >
                <span className="mr-3">START A PROJECT</span>
                <ArrowUpRight className="w-5 h-5 text-[#FF7043] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </MagneticButton>

              <MagneticButton
                href="https://wa.me/917358357933?text=Hi%20SAZEON%2C%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                dataCursor="chat"
                strength={0.25}
                className="px-6 sm:px-8 py-4 sm:py-5 bg-[#151311] hover:bg-[#1D1A17] border border-[#332D28] hover:border-[#FF7043] text-sm sm:text-base font-display font-semibold tracking-wider text-[#F5F1E8] rounded-sm transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-[#FF7043] mr-2.5" />
                <span className="mr-2">CHAT ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4 text-[#A8A198] group-hover:text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right Column: Direct Channels & Social Integration */}
          <div className="lg:col-span-4 bg-[#151311] p-8 sm:p-10 border border-[#332D28] rounded-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#FF7043] block mb-6">
                DIRECT ACCESS
              </span>

              <div className="space-y-6">
                {/* Email Direct */}
                <div className="border-b border-[#332D28]/70 pb-5">
                  <span className="text-[11px] font-mono text-[#A8A198] uppercase block mb-1">
                    PRIMARY INQUIRIES
                  </span>
                  <a
                    href="mailto:sazeoncontact@gmail.com"
                    data-cursor="email"
                    className="group inline-flex items-center gap-2 text-sm sm:text-base font-display font-medium text-[#F5F1E8] hover:text-[#FF7043] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#FF7043]" />
                    <span>sazeoncontact@gmail.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A198] group-hover:text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>

                {/* WhatsApp Direct */}
                <div className="border-b border-[#332D28]/70 pb-5">
                  <span className="text-[11px] font-mono text-[#A8A198] uppercase block mb-1">
                    INSTANT MESSAGING
                  </span>
                  <a
                    href="https://wa.me/917358357933?text=Hi%20SAZEON%2C%20I'd%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="chat"
                    className="group inline-flex items-center gap-2 text-sm sm:text-base font-display font-medium text-[#F5F1E8] hover:text-[#FF7043] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FF7043]" />
                    <span>+91 73583 57933</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A198] group-hover:text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>

                {/* Instagram Profile */}
                <div className="border-b border-[#332D28]/70 pb-5">
                  <span className="text-[11px] font-mono text-[#A8A198] uppercase block mb-1">
                    VISUAL ARCHIVE
                  </span>
                  <a
                    href="https://www.instagram.com/santhiya_v24/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="open"
                    className="group inline-flex items-center gap-2 text-sm sm:text-base font-display font-medium text-[#F5F1E8] hover:text-[#FF7043] transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#FF7043]" />
                    <span>santhiya_v24</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A198] group-hover:text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>

                {/* LinkedIn Profile */}
                <div className="pb-2">
                  <span className="text-[11px] font-mono text-[#A8A198] uppercase block mb-1">
                    PROFESSIONAL NETWORK
                  </span>
                  <a
                    href="https://www.linkedin.com/in/santhiya-v-558b13214"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="open"
                    className="group inline-flex items-center gap-2 text-sm sm:text-base font-display font-medium text-[#F5F1E8] hover:text-[#FF7043] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-[#FF7043]" />
                    <span>santhiya-v-558b13214</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#A8A198] group-hover:text-[#FF7043] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#332D28] text-xs font-mono text-[#A8A198]">
              ESTIMATED RESPONSE: &lt; 24 HOURS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

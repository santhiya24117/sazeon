import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ASSETS } from '../data/assets';
import { X, Maximize2, ArrowRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeModalImage, setActiveModalImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-[#0D0D0D] border-b border-[rgba(244,241,236,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-[rgba(244,241,236,0.12)]">
          <div>
            <span className="text-xs tracking-[0.35em] uppercase text-[#C8A98A] font-medium block mb-3">
              EDITORIAL ARCHIVE
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl font-light uppercase tracking-tight text-[#F4F1EC]">
              THE GALLERY
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm text-[#A9A39B] max-w-sm tracking-wider leading-relaxed">
            Captured moments of precision, mood, and haute transformation.
          </p>
        </div>

        {/* Asymmetric Magazine-Style Grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {ASSETS.gallery.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.span} ${item.offset} group relative cursor-pointer`}
              onClick={() => setActiveModalImage(item.image)}
            >
              <div className="relative overflow-hidden border border-[rgba(244,241,236,0.15)] bg-[#121212]">
                {/* Image with slow hover zoom & subtle grayscale-to-color transition */}
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out filter grayscale-[35%] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Editorial Caption on hover/bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A98A] block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#F4F1EC] uppercase tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <div className="p-2 text-[#F4F1EC] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={18} className="text-[#C8A98A]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Full Portfolio */}
        <div className="mt-16 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#C8A98A]/50 text-[#C8A98A] text-xs font-semibold tracking-[0.24em] uppercase hover:bg-[#C8A98A] hover:text-[#0D0D0D] transition-all duration-300"
          >
            <span>EXPLORE FULL EDITORIAL PORTFOLIO</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 bg-[#0D0D0D]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <button
              onClick={() => setActiveModalImage(null)}
              className="absolute top-6 right-6 text-[#A9A39B] hover:text-[#F4F1EC] p-2"
              aria-label="Close image"
            >
              <X size={26} />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={activeModalImage}
              alt="LUMIÈRE Editorial Lightbox"
              className="max-h-[88vh] max-w-[92vw] object-contain border border-[rgba(244,241,236,0.15)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

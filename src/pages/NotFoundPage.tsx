import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F4F1EC] flex flex-col justify-between selection:bg-[#C8A98A] selection:text-[#0D0D0D]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-6 py-32 text-center">
        <div className="max-w-xl mx-auto">
          <span className="text-xs tracking-[0.35em] uppercase text-[#C8A98A] font-medium block mb-4">
            404 · PAGE NOT FOUND
          </span>
          <h1 className="font-serif-editorial text-5xl sm:text-7xl font-light uppercase tracking-tight mb-6">
            THE REQUESTED ATELIER DOES NOT EXIST.
          </h1>
          <p className="text-[#A9A39B] text-sm sm:text-base font-light mb-10 leading-relaxed">
            The page you are looking for is not part of the LUMIÈRE studio directory.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-4 bg-[#C8A98A] text-[#0D0D0D] text-xs font-semibold tracking-[0.24em] uppercase hover:bg-[#d5bba0] transition-colors w-full sm:w-auto"
            >
              RETURN TO HOME
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 border border-white/20 text-[#F4F1EC] text-xs font-semibold tracking-[0.24em] uppercase hover:border-[#C8A98A] hover:text-[#C8A98A] transition-colors w-full sm:w-auto"
            >
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

import React from "react";
import { m } from "framer-motion";
import GambarUtama from "../components/GambarUtama";
import SEO from "../components/SEO";

const Project = () => {
  return (
    <div className="bg-[#0A0A0A] min-h-screen font-sans">
      <SEO 
        title="Our Projects" 
        description="Koleksi portofolio desain interior eksklusif oleh Ilena Interior Studio. Realitas yang berawal dari sekadar imajinasi." 
      />

      {/* ── Hero Header ─────────────────────────────────────── */}
      <div className="relative w-full h-[45svh] sm:h-[50svh] md:h-[55svh] flex flex-col items-center justify-center text-center px-4 sm:px-8 bg-gradient-to-b from-[#1a0a0a] to-[#0A0A0A]">
        <m.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#e63946] tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-semibold uppercase mb-3"
        >
          Portofolio
        </m.p>
        <m.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
        >
          Our <span className="text-[#e63946]">Masterpieces.</span>
        </m.h1>
        <m.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xs sm:max-w-xl md:max-w-2xl font-light mt-4 leading-relaxed"
        >
          Kumpulan realitas yang berawal dari sekadar imajinasi.
        </m.p>
      </div>

      {/* ── Project Gallery ──────────────────────────────────── */}
      <div className="relative z-10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">
          <GambarUtama />
        </div>
      </div>

    </div>
  );
};

export default Project;

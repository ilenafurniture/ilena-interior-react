import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { m, useScroll, useTransform, useInView } from 'framer-motion';
import Scroll3DImage from "../components/Scroll3DImage";
import SEO from "../components/SEO";

// Lazy load GambarUtama since it's far below the fold on home page
const GambarUtama = lazy(() => import("../components/GambarUtama"));

const Home = () => {
  const { scrollY } = useScroll();
  const galleryRef = useRef(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "200px" });

  // Chapter 1: Hero — frames 1–60 (scroll 0–1000px)
  const op1 = useTransform(scrollY, [0, 800, 1000], [1, 1, 0]);
  const y1  = useTransform(scrollY, [0, 1000], [0, -60]);

  // Chapter 2: Project — frames 61–120 (scroll 1000–2000px)
  const op2 = useTransform(scrollY, [1050, 1300, 1800, 2000], [0, 1, 1, 0]);
  const y2  = useTransform(scrollY, [1050, 1300], [50, 0]);

  // Chapter 3: About — frames 121–180 (scroll 2000–3000px)
  const op3 = useTransform(scrollY, [2050, 2300, 2800, 3000], [0, 1, 1, 0]);
  const y3  = useTransform(scrollY, [2050, 2300], [50, 0]);

  // Chapter 4: Final CTA — frames 181–192 (scroll 3000–4000px)
  const op4 = useTransform(scrollY, [3050, 3300, 3900, 4200], [0, 1, 1, 0]);
  const y4  = useTransform(scrollY, [3050, 3300], [50, 0]);

  return (
    <div className="w-full font-sans">
      <SEO 
        title="Exclusive Interior Design" 
        description="Ilena Interior Studio adalah jasa desain interior premium di Semarang. Kami mewujudkan ruang impian Anda dengan sentuhan mewah dan elegan." 
      />

      {/* ── Fixed Canvas Background ─────────────────────────── */}
      <Scroll3DImage />

      {/* ── 4-Chapter Image Sequence Section (4500px scroll) ── */}
      <div className="w-full h-[4500px] relative">
        <div className="sticky top-0 h-screen w-full z-20 overflow-hidden">

          {/* Chapter 1 – Hero */}
          <m.div
            style={{ opacity: op1, y: y1 }}
            className="absolute bottom-[12vh] left-5 right-5 md:left-24 md:right-auto max-w-xl"
          >
            <p className="text-[#e63946] tracking-[0.2em] text-[10px] md:text-sm font-semibold uppercase mb-2">
              Ilena Interior Studio
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 tracking-tight leading-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
              Learn with<br />
              <span className="text-[#e63946]">a good lens.</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-lg font-light leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] max-w-sm md:max-w-none">
              Wujudkan ruang impian dengan sebaik-baiknya pilihan bersama Ilena Interior Studio.
            </p>
          </m.div>

          {/* Chapter 2 – Projects */}
          <m.div
            style={{ opacity: op2, y: y2 }}
            className="absolute top-1/2 -translate-y-1/2 right-5 md:right-24 max-w-xs md:max-w-lg text-right"
          >
            <p className="text-[#e63946] tracking-[0.2em] text-[10px] md:text-sm font-semibold uppercase mb-2">
              Portofolio
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
              Foto<br /><span className="text-[#e63946]">Project.</span>
            </h2>
            <div className="space-y-1 text-gray-300 text-xs md:text-base drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
              <p>✦ ILENA MODERN LIVING</p>
              <p className="text-gray-400 text-[10px] md:text-xs">Residential</p>
              <p className="mt-2">✦ ILENA INTERIOR</p>
              <p className="text-gray-400 text-[10px] md:text-xs">Residential</p>
            </div>
          </m.div>

          {/* Chapter 3 – About */}
          <m.div
            style={{ opacity: op3, y: y3 }}
            className="absolute top-1/2 -translate-y-1/2 left-5 md:left-24 max-w-xs md:max-w-xl"
          >
            <p className="text-[#e63946] tracking-[0.2em] text-[10px] md:text-sm font-semibold uppercase mb-2">
              Tentang Kami
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)]">
              Tentang <span className="text-[#e63946]">Ilena.</span>
            </h2>
            <p className="text-gray-300 text-xs md:text-base font-light leading-relaxed drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]">
              Ilena Interior Studio bergerak di bidang desain dan rancang bangun ruang secara custom di bawah naungan CV Catur Bhakti Mandiri. Mulai tahun 2025, Ilena berkantor di Semarang, Jawa Tengah.
            </p>
          </m.div>

          {/* Chapter 4 – CTA */}
          <m.div
            style={{ opacity: op4, y: y4 }}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center w-full px-6"
          >
            <p className="text-[#e63946] tracking-[0.2em] text-[10px] md:text-sm font-semibold uppercase mb-3">
              Ilena Interior Studio
            </p>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.9)]">
              Realisasikan Impian<br />
              <span className="text-[#e63946]">Ruangan Anda.</span>
            </h2>
            <Link
              to="/project"
              className="inline-block px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-[#e63946] to-[#c62828] text-white text-xs md:text-base font-bold tracking-[0.2em] uppercase rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(230,57,70,0.5)] border border-white/10"
            >
              Jelajahi Koleksi
            </Link>
          </m.div>

        </div>
      </div>

      {/* ── Content Below Sequence ─────────────────────────── */}
      <div className="relative z-10 bg-[#0A0A0A]" ref={galleryRef}>
        <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto min-h-[400px]">
          {isGalleryInView && (
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-500">Loading Gallery...</div>}>
              <GambarUtama />
            </Suspense>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;


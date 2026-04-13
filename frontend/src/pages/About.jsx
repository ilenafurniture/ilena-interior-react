import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { m } from "framer-motion";
import SEO from "../components/SEO";

const About = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama && email && pesan) {
      setSuccess(true);
      setNama(""); setEmail(""); setPesan("");
    } else {
      alert("Harap isi semua form");
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen font-sans">
      <SEO 
        title="About Us" 
        description="Mengenal jati diri & mahakarya di balik nama besar ILENA Interior Studio Semarang. Kami percaya setiap ruang memiliki cerita." 
      />

      {/* ── Hero Header ─────────────────────────────────────── */}
      <div className="relative w-full h-[45svh] sm:h-[50svh] md:h-[55svh] flex flex-col items-center justify-center text-center px-4 sm:px-8 bg-gradient-to-b from-[#1a0a0a] to-[#0A0A0A]">
        <m.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[#e63946] tracking-[0.3em] text-[10px] sm:text-xs md:text-sm font-semibold uppercase mb-3"
        >
          Ilena Interior Studio
        </m.p>
        <m.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)]"
        >
          Timeless <span className="text-[#e63946]">Legacy.</span>
        </m.h1>
        <m.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-xs sm:max-w-xl md:max-w-2xl font-light mt-4 leading-relaxed"
        >
          Mengenal jati diri &amp; mahakarya di balik nama besar ILENA Interior Studio.
        </m.p>
      </div>

      {/* ── Main Content ────────────────────────────────────── */}
      <div className="relative z-10 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20">

          {/* Brand Header */}
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 sm:mb-14 md:mb-16"
          >
            <p className="text-[#e63946] tracking-[0.3em] text-[10px] sm:text-xs uppercase font-semibold mb-3">Tentang</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              ILENA INTERIOR STUDIO
            </h2>
            <div className="w-12 h-[2px] bg-[#e63946] mx-auto mt-4"></div>
            <p className="mt-5 text-gray-400 text-sm sm:text-base max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              Mewujudkan ruang impian Anda dengan desain interior elegan, fungsional, dan dibuat sepenuh hati.
            </p>
          </m.div>

          {/* Company Description */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16 border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 bg-white/5"
          >
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>Ilena Interior Studio bergerak di bidang desain dan rancang bangun ruang secara custom di bawah naungan CV Catur Bhakti Mandiri. Sejak tahun 2025, Ilena berkantor di Semarang, Jawa Tengah.</p>
              <p>Fokus kami adalah mewujudkan ruang impian klien secara baik dan terarah: hunian, studio apartment, perhotelan/resort, dan interior lainnya. Layanan kami meliputi survey lokasi, konsep desain, sketsa, hingga arsitektur interior.</p>
              <p className="text-[#e63946] font-medium">Kami percaya setiap ruang memiliki cerita. Ilena hadir memberikan yang terbaik — dari hati, dengan sepenuh hati.</p>
            </div>
          </m.div>

          {/* Stats */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center mb-12 sm:mb-16">
            {[
              { count: "150+", label: "Project Selesai" },
              { count: "20+",  label: "Tim Profesional" },
              { count: "300+", label: "Klien Puas" },
            ].map((stat, i) => (
              <m.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-2xl p-4 sm:p-6 bg-white/5"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#e63946]">{stat.count}</h3>
                <p className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</p>
              </m.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
              Perjalanan Kami
            </h2>
            <div className="border-l-2 border-[#e63946]/40 pl-5 sm:pl-8 space-y-6 sm:space-y-8">
              {[
                { year: "2021", text: "Ilena berdiri sebagai tim kreatif desain interior." },
                { year: "2023", text: "Menyelesaikan lebih dari 100 proyek desain skala nasional." },
                { year: "2025", text: "Resmi menjadi CV dan beroperasi penuh di Semarang." },
              ].map((item, i) => (
                <m.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[25px] sm:-left-[33px] w-3 h-3 rounded-full bg-[#e63946] mt-1.5"></div>
                  <h3 className="text-base sm:text-lg font-bold text-[#e63946]">{item.year}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{item.text}</p>
                </m.div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-12 sm:mb-16">
            <m.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8"
            >
              Pertanyaan Umum
            </m.h2>
            <div className="space-y-4">
              {[
                { q: "Berapa lama proses desain?", a: "Proses desain interior biasanya memakan waktu 7–14 hari kerja tergantung kompleksitas." },
                { q: "Apakah bisa request custom style?", a: "Tentu! Kami sangat terbuka dengan keinginan klien untuk gaya, warna, atau inspirasi khusus." },
                { q: "Apakah bisa survei lokasi dulu?", a: "Ya, survei lokasi akan kami lakukan sebelum pembuatan konsep desain." },
              ].map((faq, i) => (
                <m.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="border border-white/10 rounded-xl p-4 sm:p-5 md:p-6 bg-white/5"
                >
                  <h3 className="font-semibold text-white text-sm sm:text-base mb-1">{faq.q}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{faq.a}</p>
                </m.div>
              ))}
            </div>
          </div>

          {/* Contact & Form */}
          <div className="mb-12 sm:mb-16 max-w-2xl mx-auto">
            {/* Contact Info */}
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-8">Lokasi &amp; Kontak</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm sm:text-base">
                <m.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 text-gray-400"
                >
                  <FaMapMarkerAlt className="text-[#e63946] text-xl" />
                  <div>
                    <p className="text-white font-medium">Semarang</p>
                    <p>Jawa Tengah, Indonesia</p>
                  </div>
                </m.div>
                <m.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 text-gray-400"
                >
                  <FaPhoneAlt className="text-[#e63946] text-xl" />
                  <a href="https://wa.me/628112938158" className="hover:text-white transition-colors">+62 811 2938 158</a>
                </m.div>
                <m.div 
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 text-gray-400"
                >
                  <FaEnvelope className="text-[#e63946] text-xl" />
                  <a href="mailto:ilenacbm@gmail.com" className="hover:text-white transition-colors break-all">ilenacbm@gmail.com</a>
                </m.div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border border-white/10" style={{ height: '300px' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.79606115865!2d110.33982531640624!3d-7.0247246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sSemarang%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1711234567890!5m2!1sen!2sid"
              width="100%" height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Ilena Interior Studio"
            />
          </m.div>

        </div>
      </div>
    </div>
  );
};

export default About;


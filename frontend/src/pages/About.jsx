import React, { useState } from "react";
import { Img } from "react-image";
import about from "../assets/img/About.jpg";
import Tombol from "../components/Tombol";
import "../styles/components/tombol.scss";

const About = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama && email && pesan) {
      setSuccess(true);
      setNama("");
      setEmail("");
      setPesan("");
    } else {
      alert("Harap isi semua form");
    }
  };

  return (
    <>
      {/* Header Image */}
      <div className="w-full h-[30svh] relative">
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
        <Img
          src={about}
          alt="About Banner"
          className="w-full h-full object-cover max-h-[700px]"
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Judul & Deskripsi */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            ILENA INTERIOR STUDIO
          </h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Mewujudkan ruang impian Anda dengan desain interior elegan, fungsional, dan dibuat sepenuh hati.
          </p>
        </div>

        {/* Deskripsi Perusahaan */}
        <div className="mb-16">
          <div className="text-justify space-y-6 text-gray-700 leading-relaxed">
            <p>
              Ilena Interior Studio bergerak di bidang desain dan rancang bangun ruang secara custom di bawah naungan CV Catur Bhakti Mandiri. Sejak tahun 2025, Ilena berkantor di Semarang, Jawa Tengah.
            </p>
            <p>
              Fokus kami adalah mewujudkan ruang impian klien secara baik dan terarah: hunian, studio apartment, perhotelan/resort, dan interior lainnya.
            </p>
            <p>
              Kami percaya setiap ruang memiliki cerita. Ilena hadir memberikan yang terbaik — dari hati, dengan sepenuh hati.
            </p>
          </div>
        </div>

        {/* Statistik Highlight */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mb-16">
          {[
            { count: "150+", label: "Project Selesai" },
            { count: "20+", label: "Tim Profesional" },
            { count: "300+", label: "Klien Puas" },
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-800">{stat.count}</h2>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Timeline Perjalanan */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Perjalanan Kami</h2>
          <div className="border-l-4 border-gray-300 pl-6 space-y-6">
            {[
              { year: "2021", text: "Ilena berdiri sebagai tim kreatif desain interior." },
              { year: "2023", text: "Menyelesaikan lebih dari 100 proyek desain skala nasional." },
              { year: "2025", text: "Resmi menjadi CV dan beroperasi penuh di Semarang." },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-lg font-bold">{item.year}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Pertanyaan Umum</h2>
          <div className="space-y-4">
            {[
              {
                q: "Berapa lama proses desain?",
                a: "Proses desain interior biasanya memakan waktu 7-14 hari kerja tergantung kompleksitas.",
              },
              {
                q: "Apakah bisa request custom style?",
                a: "Tentu! Kami sangat terbuka dengan keinginan klien untuk gaya, warna, atau inspirasi khusus.",
              },
              {
                q: "Apakah bisa survei lokasi dulu?",
                a: "Ya, survei lokasi akan kami lakukan sebelum pembuatan konsep desain.",
              },
            ].map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-gray-800">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lokasi & Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Lokasi */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Lokasi Kami:</h2>
            <div className="space-y-4 text-gray-700">
              {Array(2)
                .fill()
                .map((_, i) => (
                  <div key={i}>
                    <h3 className="text-lg font-medium">Semarang</h3>
                    <p className="text-sm">Jl. Raya Semarang No. 123</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Kontak Kami:</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              />
              <textarea
                placeholder="Pesan"
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                className="p-2 border border-gray-300 rounded-md"
              />
              <Tombol
                style="hitam rounded-md p-2 text-white"
                text="Kirim"
                type="submit"
              />
            </form>
            {success && (
              <p className="text-green-600 text-center mt-4">
                Terima kasih, pesan Anda telah terkirim.
              </p>
            )}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gray-100 py-10 px-6 text-center rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">
            Ingin update promo dan desain terbaru dari ILENA?
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Daftarkan email Anda di bawah ini.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="p-2 border border-gray-300 rounded-md flex-1"
            />
            <Tombol
              style="hitam rounded-md px-6 py-2 text-white"
              text="Daftar"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default About;

import Tombol from "./Tombol";

const Promo = () => (
  <section className="bg-[#F3F0EA] my-6 flex flex-col lg:flex-row gap-6 rounded-tl-[20px] rounded-br-[20px] p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
    <img
      src="https://ilenafurniture.com/img/barang/300/BA100000.webp"
      alt="Promo"
      className="object-cover w-full lg:w-1/2 rounded-md max-h-[350px]"
    />
    <div className="flex flex-col justify-center gap-4 lg:w-1/2">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-normal">
        Dedikasi Terhadap Detail Ruangan Anda
      </h3>
      <p className="text-base md:text-lg text-gray-600">
        Konsultasikan langsung impian desain ruangan terbaik Anda agar kami hadirkan gaya hidup elegan setiap hari.
      </p>
      <Tombol style="merah lonjong" text="HUBUNGI SEKARANG" />
    </div>
  </section>
);

export default Promo;

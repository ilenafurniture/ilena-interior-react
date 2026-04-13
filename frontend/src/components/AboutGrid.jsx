import Tombol from "./Tombol";

const AboutGrid = () => {
  const apikey = import.meta.env.VITE_IMG_APIKEY;

  return (
    <section className="flex flex-col lg:flex-row gap-8 py-12 px-2 border-t border-gray-200 mt-8 max-w-full overflow-hidden">
      <div className="flex-1 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-gray-900 tracking-widest">ABOUT</h3>
        <div className="w-12 h-1 bg-[#88304e] mt-2 mb-4"></div>
        <h1 className="text-sm text-[#f7374f] font-semibold uppercase tracking-wider mb-2 leading-relaxed">
          Kami Menyediakan Layanan Konsultasi & Arsitektur Terbaik
        </h1>
        <p className="my-4 text-gray-600 leading-relaxed font-light line-clamp-3">
          Berpusat di Semarang, kami membantu mewujudkan ruangan mulai dari pemilihan furnitur hingga perombakan menyeluruh. Kenyamanan dan estetika modern adalah prioritas Ilena.
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-2">
          {["1742449142002", "1742449295384"].map((id) => (
            <img
              key={id}
              src={`https://img.ilenafurniture.com/image/${id}.png/?apikey=${apikey}`}
              alt="Project Reference"
              className="w-1/2 h-[180px] object-cover rounded-md shadow-sm"
            />
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex-1 flex justify-center w-full pb-4">
            <Tombol text="LEARN MORE" style="transparan" />
          </div>
          <img
            src={`https://img.ilenafurniture.com/image/1742448909605.png/?apikey=${apikey}`}
            alt="Interior Component"
            className="w-1/2 h-[180px] object-cover rounded-br-[50px] shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;

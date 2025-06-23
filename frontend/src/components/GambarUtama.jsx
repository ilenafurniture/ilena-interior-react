import Tombol from "./Tombol";

const GambarUtama = () => {
  const apikey = import.meta.env.VITE_IMG_APIKEY;

  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:h-[70svh]">
      <div className="flex flex-1 gap-4">
        {["1742449295384", "1742449142002"].map((id) => (
          <img
            key={id}
            src={`https://img.ilenafurniture.com/image/${id}.png/?apikey=${apikey}`}
            className="w-full h-[250px] lg:h-full object-cover flex-1 rounded-md"
            alt="Project"
          />
        ))}
      </div>
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex h-[250px] gap-2">
          <img
            src={`https://img.ilenafurniture.com/image/1742448909605.png/?apikey=${apikey}`}
            alt=""
            className="aspect-square object-cover rounded-tr-[50px] w-1/2"
          />
          <div className="flex justify-end items-end w-1/2">
            <Tombol text="LEARN MORE" style="lonjong hitam" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-center">
          {[
            { count: "2K+", label: "PROJECTS DONE" },
            { count: "20+", label: "PRO TEAMS" },
            { count: "300+", label: "GLOBAL CLIENTS" },
          ].map((item, i) => (
            <div key={i}>
              <h2 className="text-3xl font-bold">{item.count}</h2>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GambarUtama;

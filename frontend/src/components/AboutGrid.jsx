import Tombol from "./Tombol";

const AboutGrid = () => {
  const apikey = import.meta.env.VITE_IMG_APIKEY;

  return (
    <section className="flex flex-col lg:flex-row gap-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold">ABOUT</h3>
        <h1 className="text-sm text-gray-400">
          We are the best interior design studio in the world
        </h1>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex gap-2">
          {["1742445399641", "1742449295384"].map((id) => (
            <img
              key={id}
              src={`https://img.ilenafurniture.com/image/${id}.webp/?apikey=${apikey}`}
              alt=""
              className="w-1/2 h-[180px] object-cover rounded-md"
            />
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex-1 flex justify-center">
            <Tombol text="LEARN MORE" style="lonjong hitam" />
          </div>
          <img
            src={`https://img.ilenafurniture.com/image/1742445431983.webp/?apikey=${apikey}`}
            alt=""
            className="w-1/2 h-[180px] object-cover rounded-br-[50px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGrid;

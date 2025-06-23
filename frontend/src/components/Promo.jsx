import Tombol from "./Tombol";

const Promo = () => (
  <section className="bg-gray-200 my-6 flex flex-col lg:flex-row gap-6 rounded-tl-[20px] rounded-br-[20px] p-6">
    <img
      src="https://ilenafurniture.com/img/barang/300/BA100000.webp"
      alt="Promo"
      className="object-cover w-full lg:w-1/2 rounded-md max-h-[350px]"
    />
    <div className="flex flex-col justify-center gap-4 lg:w-1/2">
      <h3 className="text-2xl md:text-3xl font-bold">
        We are the best interior design studio in the world
      </h3>
      <p className="text-base md:text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <Tombol style="lonjong hitam" text="LEARN ABOUT" />
    </div>
  </section>
);

export default Promo;

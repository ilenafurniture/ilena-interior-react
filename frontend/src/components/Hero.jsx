import { Img } from "react-image";
import benner from "../assets/img/benner.jpg";

const Hero = () => (
  <section className="relative w-full h-[100svh] min-h-[500px] flex flex-col items-center justify-center text-center px-4 bg-transparent z-10 pb-20">
      <h1 className="text-4xl md:text-6xl text-white font-bold mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.7)] tracking-wide">
        Elevate with a good lens
      </h1>
      <p className="text-lg md:text-xl text-gray-200 max-w-3xl drop-shadow-[0_5px_10px_rgba(0,0,0,0.7)] font-light">
        Nyatakan ruangan impian dengan sebaik-baiknya pilihan, dari Ilena Interior Studio.
      </p>
  </section>
);

export default Hero;

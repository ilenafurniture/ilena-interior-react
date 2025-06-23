import { Img } from "react-image";
import benner from "../assets/img/benner.jpg";

const Hero = () => (
  <Img
    src={benner}
    alt="Hero Banner"
    className="w-full h-[100svh] max-h-[700px] object-cover"
  />
);

export default Hero;

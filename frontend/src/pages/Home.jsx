import Hero from "../components/Hero";
import AboutIntro from "../components/AboutIntro";
import GambarUtama from "../components/GambarUtama";
import Promo from "../components/Promo";
import AboutGrid from "../components/AboutGrid";
import LogoScroll from "../components/LogoScroll";
import Gallery from "../components/Gallery";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 md:px-8">
        <AboutIntro />
        <GambarUtama />
        <Promo />
        <AboutGrid />
        <LogoScroll />
        <Gallery />
        <Services />
      </div>
    </>
  );
};

export default Home;

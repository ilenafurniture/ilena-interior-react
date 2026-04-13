import Tombol from "./Tombol";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    "Interior Design",
    "Furniture Design",
    "Landscape Design",
  ];

  return (
    <section className="w-full bg-[#FAFAF9] py-16 px-4 md:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {services.map((title, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start border-b border-gray-200 pb-8 last:border-0"
          >
            {/* Left: Number + Title */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-4">
                <span className="text-[#88304e]">0{i + 1}.</span> {title}
              </h2>
            </div>

            {/* Right: Description + Button */}
            <div className="flex-1 flex flex-col gap-4 text-gray-600">
              <p className="text-base leading-relaxed">
                Menyediakan perombakan desain yang sesuai dengan fungsionalitas dan selera gaya rumah masa kini dengan pengawasan tim tepercaya kami.
              </p>
              <div className="w-fit text-[#f7374f]">
                  <Tombol
                    text="LIHAT DETAIL"
                    icon={<FaArrowRight />}
                    style="transparan"
                    onClick={() => {}}
                  />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

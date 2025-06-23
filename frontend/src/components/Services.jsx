import Tombol from "./Tombol";
import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  const services = [
    "Interior Design",
    "Furniture Design",
    "Lanscape Design",
  ];

  return (
    <section className="w-full bg-gray-200 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {services.map((title, i) => (
          <div
            key={i}
            className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start"
          >
            {/* Left: Number + Title */}
            <div className="flex-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                0{i + 1}. {title}
              </h2>
            </div>

            {/* Right: Description + Button */}
            <div className="flex-1 flex flex-col gap-4 text-gray-700">
              <p className="text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias dolores, sequi tempore laboriosam vitae unde saepe
                eligendi dignissimos!
              </p>
              <Tombol
                text="LEARN MORE"
                icon={<FaArrowRight />}
                style="transparan"
                onClick={() => {}}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

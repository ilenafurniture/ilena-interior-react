const LogoScroll = () => {
  const apikey = import.meta.env.VITE_IMG_APIKEY;

  const logos = [
    "1742450163897",
    "1742450190985",
    "1742450222588",
    "1742450249426",
  ];

  const repeated = [...logos, ...logos];

  return (
    <section className="py-12 bg-[#ffffff] border-t border-b border-gray-100 my-8 w-full">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 px-4 md:px-8 opacity-60 hover:opacity-100 transition-all duration-500 overflow-hidden">
        {repeated.map((id, i) => (
          <img
            key={i}
            src={`https://img.ilenafurniture.com/image/${id}.webp/?apikey=${apikey}`}
            alt={`Brand ${i}`}
            className="h-5 sm:h-8 md:h-10 lg:h-12 w-auto object-contain hover:-translate-y-1 transition-transform"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoScroll;

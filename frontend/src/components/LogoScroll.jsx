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
    <section className="py-6 bg-white overflow-hidden">
      <div className="logo-track flex items-center gap-12 px-4">
        {repeated.map((id, i) => (
          <img
            key={i}
            src={`https://img.ilenafurniture.com/image/${id}.webp/?apikey=${apikey}`}
            alt={`Brand ${i}`}
            className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default LogoScroll;

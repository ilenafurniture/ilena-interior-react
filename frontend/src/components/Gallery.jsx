const Gallery = () => (
  <section className="gallery flex flex-col gap-4 px-4 sm:px-0">
    {[["/img/aa2.jpg", "/img/aa.jpg", "/img/aa3.jpg"], ["/img/ak1.jpg", "/img/ak3.jpg", "/img/ak2.jpg"]].map(
      (group, i) => (
        <div key={i} className="gallery-container flex gap-2">
          {group.map((src, j) => (
            <div key={j} className="flex-1 h-[220px] sm:h-[300px] overflow-hidden rounded-md">
              <img src={src} alt={`Gallery ${i}${j}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      )
    )}
  </section>
);

export default Gallery;

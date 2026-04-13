import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaExpandAlt } from "react-icons/fa";

const ProjectData = [
  {
    id: "1",
    image: "/img/project1.png",
    title: "ILENA MODERN LIVING",
    category: "Residential Architecture",
    description: "Desain apartemen modern dengan sentuhan minimalis dan fungsionalitas tinggi.",
    images: ["/img/project1.png"] // Placeholder for other images if they exist
  },
  {
    id: "2",
    image: "/img/project2.png",
    title: "ILENA INTERIOR",
    category: "Interior Design",
    description: "Eksplorasi estetika interior yang memadukan kenyamanan dan kemewahan dalam setiap sudut.",
    images: [
      "/img/project/1.webp",
      "/img/project/2.webp",
      "/img/project/3.webp",
      "/img/project/4.webp",
      "/img/project/5.webp",
      "/img/project/6.webp",
      "/img/project/7.webp"
    ]
  }
];

const GambarUtama = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-12 flex flex-col gap-8 w-full mt-4">
      <div className="text-center" data-aos="fade-up">
        <h3 className="text-3xl font-bold tracking-wider text-white">FOTO PROJECT</h3>
        <div className="w-16 h-[2px] bg-[#e63946] mx-auto mt-2"></div>
        <p className="text-gray-500 text-sm mt-4 max-w-lg mx-auto">
          Klik pada project untuk melihat detail mahakarya kami.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto lg:min-h-[60svh]">
        {ProjectData.map((project, idx) => (
          <motion.div 
            key={project.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            onClick={() => openModal(project)}
            className="relative group overflow-hidden rounded-2xl shadow-2xl flex-1 h-[400px] md:h-full cursor-pointer border border-white/5"
          >
            <img
              src={project.image}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              alt={project.title}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 flex flex-col justify-end transition-all duration-500">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-[1px] bg-[#e63946]"></span>
                  <p className="text-[10px] text-[#e63946] font-bold tracking-[0.3em] uppercase drop-shadow-md">
                    {project.category}
                  </p>
                </div>
                <h4 className="text-2xl md:text-3xl text-white font-bold mb-2 drop-shadow-md tracking-tight">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-4 max-w-sm">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <FaExpandAlt className="text-[#e63946]" /> 
                  <span>Lihat Galeri</span>
                </div>
              </div>
            </div>
            
            {/* Hover Outline */}
            <div className="absolute inset-0 border-0 group-hover:border-[8px] border-[#e63946]/10 transition-all duration-500 pointer-events-none rounded-2xl"></div>
          </motion.div>
        ))}
      </div>

      {/* Modal Detail Project using Portal */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] flex items-center justify-center p-2 md:p-8 bg-black/95 backdrop-blur-xl"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-6xl max-h-[95vh] bg-[#0F0F0F] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center p-5 md:p-8 border-b border-white/5 bg-[#0F0F0F]/80 backdrop-blur-md sticky top-0 z-10">
                  <div>
                    <p className="text-[#e63946] text-[8px] md:text-[10px] tracking-[0.3em] font-bold uppercase mb-1">Project Detail</p>
                    <h3 className="text-lg md:text-3xl text-white font-bold tracking-tight">{selectedProject.title}</h3>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="w-9 h-9 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 text-white hover:bg-[#e63946] hover:text-white transition-all duration-300"
                  >
                    <FaTimes size={18} />
                  </button>
                </div>

                {/* Modal Content - Scrollable Gallery */}
                <div className="flex-1 overflow-y-auto p-4 md:p-10 custom-scrollbar">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                    {selectedProject.images.map((img, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className={`relative overflow-hidden rounded-xl border border-white/5 bg-white/5 group ${
                          i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                        }`}
                      >
                        <img 
                          src={img} 
                          alt={`${selectedProject.title} - ${i + 1}`} 
                          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                            i === 0 ? "min-h-[250px] md:min-h-[400px]" : "h-[180px] md:h-full max-h-[250px] md:max-h-none"
                          }`}
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Description Text in Modal */}
                  <div className="mt-8 md:mt-12 max-w-3xl">
                    <h4 className="text-white font-bold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-[#e63946]"></span>
                      Tentang Project
                    </h4>
                    <p className="text-gray-400 leading-relaxed text-xs md:text-base">
                      {selectedProject.description} Kami mengedepankan kualitas material dan presisi dalam setiap pengerjaan 
                      untuk memastikan hasil akhir yang sesuai dengan visi dan ekspektasi klien.
                      Project ini merupakan salah satu mahakarya ILENA Interior Studio yang mengedepankan konsep 
                      keindahan yang abadi dan fungsionalitas yang maksimal.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export default GambarUtama;



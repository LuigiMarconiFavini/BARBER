import { useState, useEffect } from "react";

import trabajo1 from "../assets/portfolio/trabajo1.jpeg";
import trabajo2 from "../assets/portfolio/trabajo2.jpeg";
import trabajo3 from "../assets/portfolio/trabajo3.jpeg";
import trabajo4 from "../assets/portfolio/trabajo4.jpeg";
import trabajo5 from "../assets/portfolio/trabajo5.jpeg";
import trabajo6 from "../assets/portfolio/trabajo6.jpeg";
import trabajo7 from "../assets/portfolio/trabajo7.jpeg";
import trabajo8 from "../assets/portfolio/trabajo8.jpeg";
import trabajo9 from "../assets/portfolio/trabajo9.jpeg";
import trabajo10 from "../assets/portfolio/trabajo10.jpeg";
import trabajo11 from "../assets/portfolio/trabajo11.jpeg";
import trabajo12 from "../assets/portfolio/trabajo12.jpeg";

const Portfolio = () => {
  const images = [
    { src: trabajo4, position: "center 20%" },
    { src: trabajo5, position: "center 16%" },
    { src: trabajo2, position: "center 15%" },
    { src: trabajo7, position: "center 32%" },
    { src: trabajo6, position: "center 48%" },
    { src: trabajo1, position: "center 25%" },
    { src: trabajo8, position: "center 35%" },
    { src: trabajo11, position: "center 32%" },
    { src: trabajo10, position: "center 15%" },
    { src: trabajo3, position: "center 55%" },
    { src: trabajo9, position: "center 38%" },
    { src: trabajo12, position: "center 20%" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // desactivar scroll cuando modal abierto
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedIndex]);

  return (
    <section className="min-h-screen bg-[#0e0e0e] px-6 md:px-10 py-24 text-white">
      <div className="max-w-7xl mx-auto">
        {/* TITULO */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            PORTFOLIO
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl">
            Precisión técnica, estética cuidada y una identidad visual clara
            aplicada a cada trabajo realizado.
          </p>
        </div>

        {/* GALERIA */}
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="h-[320px] md:h-[380px] overflow-hidden border border-gray-800 hover:border-gray-600 transition cursor-pointer"
            >
              <img
                src={img.src}
                alt={`Trabajo ${index + 1}`}
                style={{ objectPosition: img.position }}
                className="w-full h-full object-cover hover:scale-110 hover:brightness-90 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 animate-fadeUp">
          {/* BOTON CERRAR */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-8 text-white text-4xl"
          >
            ✕
          </button>

          {/* FLECHA IZQUIERDA */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white text-5xl"
          >
            ‹
          </button>

          {/* IMAGEN */}
          <img
            src={images[selectedIndex].src}
            className="max-h-[90vh] max-w-[90vw] object-contain transition duration-500"
          />

          {/* FLECHA DERECHA */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white text-5xl"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

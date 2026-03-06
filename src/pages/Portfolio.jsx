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
  const images = [trabajo1, trabajo2, trabajo3, trabajo4, trabajo5, trabajo6, trabajo7, trabajo8, trabajo9, trabajo10, trabajo11, trabajo12];

  return (
    <section className="min-h-screen bg-[#0e0e0e] px-6 md:px-10 py-24">
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
              className="h-[320px] md:h-[380px] overflow-hidden border border-gray-800 hover:border-gray-600 transition"
            >
              <img
                src={img}
                alt={`Trabajo ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 hover:brightness-90 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

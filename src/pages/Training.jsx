import texture from "../assets/textures/concrete.jpg";
import alumno from "../assets/training/alumno-ecuador.jpeg";

import video1 from "../assets/training/video1.mp4";
import video2 from "../assets/training/video2.mp4";
import video3 from "../assets/training/video3.mp4";

import preview1 from "../assets/training/preview1.jpg";
import preview2 from "../assets/training/preview2.jpg";
import preview3 from "../assets/training/preview3.jpg";

import { useLanguage } from "../context/LanguageContext";

const Training = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* SECCION INTRO */}
      <section
        className="relative py-28 px-6 text-white"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-10">
            {t.training.intro.title}
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            {t.training.intro.p1}
            <br />
            <br />
            {t.training.intro.p2}
            <br />
            <br />
            {t.training.intro.p3}
          </p>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="w-full h-px bg-neutral-800"></div>

      {/* ALUMNO DESTACADO */}
      <section className="relative py-24 md:py-48 px-6 text-white bg-[#0b0b0b]">
        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          {/* TEXTO */}
          <div className="md:w-1/2 order-1 md:order-2 z-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-wide">
              {t.training.featuredStudent.title}
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              {t.training.featuredStudent.p1}
            </p>

            <p className="text-gray-300 leading-relaxed">
              {t.training.featuredStudent.p2}
            </p>
          </div>

          {/* IMAGEN */}
          <div className="w-full md:w-1/2 order-2 md:order-1 relative flex justify-center items-start">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${texture})` }}
              ></div>
            </div>

            <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg group z-10">
              <img
                src={alumno}
                alt="Alumno internacional"
                className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
              <div className="absolute -inset-4 bg-black/30 blur-xl z-0 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="w-full h-px bg-neutral-800"></div>

      {/* VIDEOS */}
      <section className="py-28 px-6 bg-[#0e0e0e] text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-16 tracking-wide">
            {t.training.videos.title}
          </h3>

          <div className="grid md:grid-cols-3 gap-10 justify-items-center">
            <video
              controls
              poster={preview1}
              className="w-full max-w-[320px] aspect-[9/16] object-cover rounded-sm shadow-lg hover:scale-[1.02] transition"
            >
              <source src={video1} type="video/mp4" />
            </video>

            <video
              controls
              poster={preview2}
              className="w-full max-w-[320px] aspect-[9/16] object-cover rounded-sm shadow-lg hover:scale-[1.02] transition"
            >
              <source src={video2} type="video/mp4" />
            </video>

            <video
              controls
              poster={preview3}
              className="w-full max-w-[320px] aspect-[9/16] object-cover rounded-sm shadow-lg hover:scale-[1.02] transition"
            >
              <source src={video3} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;

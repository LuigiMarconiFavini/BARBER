import { Link } from "react-router-dom";
import hero from "../assets/hero/hero.jpeg";
import texture from "../assets/textures/concrete.jpg";
import foto5 from "../assets/manifiesto/foto5.jpeg";
import icon4 from "../assets/hero/icon4.jpeg";

import trabajo2 from "../assets/portfolio/trabajo2.jpeg";
import trabajo5 from "../assets/portfolio/trabajo5.jpeg";
import trabajo4 from "../assets/portfolio/trabajo4.jpeg";
import trabajo7 from "../assets/portfolio/trabajo7.jpeg";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-10 md:px-24 text-white pb-20 md:pb-0"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            DEJÁ DE CORTAR <br />
            POR INTUICIÓN. <br />
            <span className="text-gray-300">
              EMPEZÁ A CORTAR <br />
              CON INTENCIÓN.
            </span>
          </h1>

          <div className="mt-10 text-gray-300 text-lg space-y-2">
            <p>Sistema técnico.</p>
            <p>Sistema empresarial.</p>
            <p>Evolución real del barbero.</p>
          </div>

          <Link
            to="/programs"
            className="inline-block mt-16 border border-white px-8 py-4 text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            EXPLORAR EL MÉTODO
          </Link>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="w-full h-px bg-neutral-800"></div>

      {/* PROGRAMAS */}
      <section
        id="programas"
        className="py-28 px-10 bg-[#0e0e0e] text-white"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              PROGRAMAS EDUCATIVOS
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Sistemas de formación diseñados para transformar barberos en
              profesionales con método. THE RISE organiza la técnica. INITIUM
              organiza el negocio.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Cuando ambas estructuras se integran, el profesional deja de
              improvisar y comienza a construir su carrera con claridad.
            </p>

            <Link
              to="/programs"
              className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
            >
              VER PROGRAMAS
            </Link>
          </div>

          <div className="hidden md:block h-[420px] overflow-hidden rounded-lg shadow-lg group">
            <img
              src={icon4}
              alt="Formación barbería"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="w-full h-px bg-neutral-800"></div>

      {/* FORMACION EN ACCION */}
      <section id="formacion" className="py-28 px-10 bg-black text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="hidden md:block h-[420px] overflow-hidden rounded-lg group">
            <img
              src={foto5}
              alt="Formación real"
              className="w-full h-full object-cover object-top transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              FORMACIÓN EN ACCIÓN
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Una mirada real al proceso de aprendizaje dentro de las
              formaciones de Pablo Muñoz.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Análisis técnico, demostraciones prácticas y desarrollo del
              criterio profesional aplicado a casos reales dentro de la barbería
              moderna.
            </p>

            <Link
              to="/training"
              className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
            >
              VER FORMACIÓN
            </Link>
          </div>
        </div>
      </section>

      {/* SEPARADOR */}
      <div className="w-full h-px bg-neutral-800"></div>

      {/* PORTFOLIO */}
      <section
        id="portfolio"
        className="py-28 px-6 md:px-10 bg-[#0e0e0e] text-white"
        style={{
          backgroundImage: `url(${texture})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-center">
          {/* TEXTO */}
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tight">
              PORTFOLIO
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Precisión técnica, estética cuidada y una identidad visual clara
              aplicada a cada trabajo realizado.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Cada corte refleja una combinación entre análisis, estructura y
              styling dentro del sistema técnico desarrollado por Pablo Muñoz.
            </p>

            <Link
              to="/portfolio"
              className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
            >
              VER TRABAJOS
            </Link>
          </div>

          {/* FOTOS */}
          <div className="relative h-[420px] md:h-[460px] overflow-hidden group rounded-lg">
            {/* FOTO DE FONDO */}
            <img
              src={trabajo4}
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition duration-700"
              alt="corte"
            />

            {/* GRID DE FOTOS */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-3 md:gap-6 p-3 md:p-10">
              <div className="overflow-hidden rounded-md">
                <img
                  src={trabajo4}
                  className="w-full h-full object-cover object-[center_33%] transition duration-700 hover:scale-110 hover:-translate-y-1 shadow-lg"
                  alt="corte"
                />
              </div>

              <div className="overflow-hidden rounded-md">
                <img
                  src={trabajo5}
                  className="w-full h-full object-cover object-[center_22%] transition duration-700 hover:scale-110 hover:-translate-y-1 shadow-lg"
                  alt="corte"
                />
              </div>

              <div className="overflow-hidden rounded-md">
                <img
                  src={trabajo2}
                  className="w-full h-full object-cover object-[center_20%] transition duration-700 hover:scale-110 hover:-translate-y-1 shadow-lg"
                  alt="corte"
                />
              </div>

              <div className="overflow-hidden rounded-md">
                <img
                  src={trabajo7}
                  className="w-full h-full object-cover object-[center_35%] transition duration-700 hover:scale-110 hover:-translate-y-1 shadow-lg"
                  alt="corte"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

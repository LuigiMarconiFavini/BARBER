import { Link } from "react-router-dom";
import texture from "../assets/textures/concrete.jpg";

const Programs = () => {
  const whatsappLink = "https://wa.me/5493413826774";

  return (
    <section
      className="py-28 px-10 bg-[#0e0e0e]"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold tracking-wide mb-3">
          PROGRAMAS EDUCATIVOS
        </h2>

        <p className="text-gray-400 mb-16">
          Sistemas de formación diseñados para transformar barberos en
          profesionales con método.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* THE RISE */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-10 hover:border-white transition duration-300">
            <h3 className="text-xl font-bold mb-1">THE RISE</h3>

            <p className="text-gray-400 text-sm mb-4">Sistema Técnico</p>

            <h4 className="font-semibold mb-6">KEEP IT SIMPLE</h4>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Un sistema técnico que elimina la improvisación y enseña a cortar
              con intención, precisión y estructura.
            </p>

            <Link
              to="/programs/the-rise"
              className="border border-white px-5 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition"
            >
              CONOCER MÁS
            </Link>
          </div>

          {/* CURSO ONLINE */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-10 opacity-70">
            <h3 className="text-xl font-bold mb-1">CURSO ONLINE</h3>

            <p className="text-gray-400 text-sm mb-4">Próximamente</p>

            <h4 className="font-semibold mb-6">FORMACIÓN DIGITAL</h4>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              Próximamente estará disponible una formación online que integrará
              el conocimiento técnico y empresarial desarrollado por Pablo
              Muñoz.
            </p>

            <span className="text-gray-500 text-sm tracking-wider">
              PRÓXIMAMENTE
            </span>
          </div>

          {/* INITIUM */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-10 hover:border-white transition duration-300">
            <h3 className="text-xl font-bold mb-1">INITIUM</h3>

            <p className="text-gray-400 text-sm mb-4">Sistema Empresarial</p>

            <h4 className="font-semibold mb-6">ESTRUCTURA Y ESCALA</h4>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              El método de gestión que transforma barberos en empresarios y
              barberías en negocios rentables y sostenibles.
            </p>

            <Link
              to="/programs/initium"
              className="border border-white px-5 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition"
            >
              CONOCER MÁS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

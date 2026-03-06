import { Link } from "react-router-dom";
import texture from "../../assets/textures/concrete.jpg";

const Initium = () => {
  const whatsappLink = "https://wa.me/5493413826774";

  return (
    <section
      className="min-h-screen py-28 px-6 bg-[#0e0e0e] text-white"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* HERO */}
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">INITIUM</h1>

          <p className="text-gray-400 text-lg mb-8">
            Sistema de gestión para barberos.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            INITIUM nace de una realidad que muchos profesionales descubren con
            el tiempo: cortar bien no es suficiente.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Para crecer, es necesario aprender a gestionar el negocio y comenzar
            a pensar la barbería como una empresa.
          </p>
        </div>

        {/* QUE ES INITIUM */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">QUÉ ES INITIUM</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            INITIUM es un sistema de gestión diseñado para dueños de barberías,
            peluquerías y profesionales independientes que desean transformar su
            trabajo en un proyecto empresarial estructurado.
          </p>

          <p className="text-gray-300 leading-relaxed">
            No es solo una capacitación. Es una metodología que permite entender
            el salón como una empresa y aprender a gestionar todas las áreas
            necesarias para que el negocio crezca de forma sostenible.
          </p>
        </div>

        {/* QUE APRENDE */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">QUÉ APRENDE UN ALUMNO</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                Gestionar el salón como una empresa
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                Entender y controlar los costos reales del negocio
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                Planificar financieramente su actividad
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                Desarrollar una marca sólida que conecte con los clientes
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                Mejorar la experiencia del cliente dentro del salón
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                Organizar equipos de trabajo y liderar personas
              </p>
            </div>
          </div>
        </div>

        {/* A QUIEN ESTA DIRIGIDO */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">A QUIÉN ESTÁ DIRIGIDO</h2>

          <ul className="text-gray-300 space-y-3">
            <li>• Dueños de barberías</li>
            <li>• Dueños de peluquerías</li>
            <li>• Barberos independientes</li>
            <li>• Profesionales que desean abrir su propio salón</li>
            <li>• Barberos que trabajan mucho pero no logran escalar</li>
          </ul>
        </div>

        {/* RESULTADOS */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">RESULTADOS DEL SISTEMA</h2>

          <ul className="text-gray-300 space-y-3">
            <li>• mayor control sobre los números del negocio</li>
            <li>• una estructura de trabajo más ordenada</li>
            <li>• mejor posicionamiento de marca</li>
            <li>• clientes más satisfechos y recurrentes</li>
            <li>• equipos de trabajo más comprometidos</li>
            <li>• visión estratégica del crecimiento del salón</li>
          </ul>
        </div>

        {/* FORMATO */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">
            FORMATO DE LAS FORMACIONES
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            El sistema INITIUM se trabaja principalmente en formato
            personalizado para adaptar la metodología a la realidad de cada
            barbería o negocio.
          </p>

          <p className="text-gray-300">
            Más de 20 profesionales ya han trabajado el sistema con resultados
            destacables.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-gray-800 pt-16">
          <p className="text-xl mb-8">
            De trabajador del oficio a gestor de una empresa.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            CONSULTAR FORMACIÓN
          </a>

          <div className="mt-8">
            <Link
              to="/programs"
              className="text-gray-400 hover:text-white transition"
            >
              Volver a programas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initium;

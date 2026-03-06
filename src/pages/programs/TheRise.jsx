import { Link } from "react-router-dom";
import texture from "../../assets/textures/concrete.jpg";

const TheRise = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">THE RISE</h1>

          <p className="text-gray-400 text-lg mb-8">
            Sistema técnico para comprender el corte de cabello.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            THE RISE nace para resolver el problema técnico del barbero:
            entender el corte de cabello.
          </p>

          <p className="text-gray-300 leading-relaxed">
            El sistema organiza la técnica y permite que el profesional deje de
            improvisar para comenzar a cortar con método, estructura e
            intención.
          </p>
        </div>

        {/* 3 PILARES */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">
            LOS TRES PILARES DEL SISTEMA
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* ANALISIS */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8">
              <h3 className="text-xl font-bold mb-4">ANÁLISIS</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Todo comienza con el análisis. Cada cliente, cada cráneo y cada
                tipo de cabello es diferente. Antes de cortar, el profesional
                aprende a observar, interpretar y entender qué necesita cada
                cabeza.
              </p>
            </div>

            {/* FORMAS */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8">
              <h3 className="text-xl font-bold mb-4">FORMAS</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Las formas se construyen a partir de tres principios técnicos:
                elevación, traslado y ángulo de dedos. Cuando estos conceptos se
                comprenden correctamente, el barbero deja de copiar cortes y
                comienza a construirlos.
              </p>
            </div>

            {/* STYLING */}
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8">
              <h3 className="text-xl font-bold mb-4">STYLING</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                El styling representa gran parte del resultado final del corte.
                Es lo que transforma una estructura correcta en un corte con
                identidad, presencia y personalidad.
              </p>
            </div>
          </div>
        </div>

        {/* FILOSOFIA */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl font-bold mb-6">KEEP IT SIMPLE</h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dentro del sistema THE RISE existe una regla que atraviesa todo el
            método: mantenerlo simple. Cuando simplificamos el proceso
            entendemos mejor lo que estamos haciendo, y cuando entendemos lo que
            hacemos comenzamos a crear con intención.
          </p>
        </div>

        {/* MODALIDADES */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">MODALIDADES DE FORMACIÓN</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="border border-[#2a2a2a] p-8">
              <h3 className="font-bold mb-3">FORMACIÓN UNO A UNO</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Experiencia personalizada trabajando directamente con Pablo
                Muñoz. Permite corregir errores técnicos, mejorar el análisis y
                profundizar en la comprensión del sistema.
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-8">
              <h3 className="font-bold mb-3">FORMACIÓN GRUPAL</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Formaciones para grupos reducidos donde se analiza el sistema
                aplicado a distintos tipos de cabello y situaciones reales.
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-8">
              <h3 className="font-bold mb-3">SEMINARIOS Y MASTERCLASS</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                Encuentros intensivos donde se presentan los fundamentos del
                sistema a través de demostraciones técnicas y análisis de
                cortes.
              </p>
            </div>
          </div>
        </div>

        {/* A QUIEN ESTA DIRIGIDO */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">A QUIÉN ESTÁ DIRIGIDO</h2>

          <ul className="text-gray-300 space-y-3">
            <li>• Barberos que quieren ordenar su técnica</li>
            <li>
              • Profesionales que quieren entender el porqué de cada corte
            </li>
            <li>• Estilistas que buscan desarrollar criterio propio</li>
            <li>• Barberos que quieren mejorar su análisis y decisiones</li>
          </ul>
        </div>

        {/* RESULTADOS */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">RESULTADOS DEL SISTEMA</h2>

          <p className="text-gray-300 mb-6">
            Más de 300 profesionales ya aplicaron el sistema THE RISE.
          </p>

          <ul className="text-gray-300 space-y-3">
            <li>• mayor claridad técnica</li>
            <li>• mayor capacidad de análisis</li>
            <li>• más seguridad en la toma de decisiones</li>
            <li>• mayor control del resultado final</li>
          </ul>
        </div>

        {/* CTA FINAL */}
        <div className="text-center border-t border-gray-800 pt-16">
          <p className="text-xl mb-8">La técnica construye el profesional.</p>

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

export default TheRise;

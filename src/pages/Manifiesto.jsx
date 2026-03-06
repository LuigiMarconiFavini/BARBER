import foto5 from "../assets/manifiesto/foto5.jpeg";
import texture from "../assets/textures/concrete.jpg";

const Manifesto = () => {
  return (
    <section
      id="manifesto"
      className="py-28 px-10 text-white relative"
      style={{
        backgroundImage: `url(${texture})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#111",
      }}
    >
      {/* FOTO COMO FONDO SOLO EN MOBILE */}
      <div
        className="absolute inset-0 md:hidden opacity-25"
        style={{
          backgroundImage: `url(${foto5})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* TEXTO */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            MANIFIESTO DEL <br /> BARBERO MODERNO
          </h2>

          <div className="text-gray-400 text-lg leading-relaxed space-y-6">
            <p>El barbero moderno no corta pelo. Construye identidad.</p>

            <p>
              Entiende que la técnica es solo el comienzo, y que el verdadero
              crecimiento aparece cuando existe disciplina, criterio y visión
              empresarial.
            </p>

            <p>No trabaja por intuición. Trabaja con sistema.</p>

            <p>
              Porque el futuro de la barbería no pertenece al que corta más,
              sino al que entiende el oficio con profundidad.
            </p>
          </div>
        </div>

        {/* FOTO SOLO DESKTOP */}
        <div className="h-[520px] overflow-hidden hidden md:block">
          <img
            src={foto5}
            alt="Pablo Muñoz"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

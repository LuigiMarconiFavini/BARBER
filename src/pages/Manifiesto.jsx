import foto5 from "../assets/manifiesto/foto5.jpeg";

const Manifesto = () => {
  return (
    <section
      id="manifesto"
      className="relative min-h-[120vh] flex items-center px-10 text-white" // sección más alta
      style={{
        backgroundImage: `url(${foto5})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%", // ajusta la cabeza + torso
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-black/50"></div>

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

        {/* En desktop ya no necesitamos la foto */}
      </div>
    </section>
  );
};

export default Manifesto;

import foto1 from "../assets/about/foto1.jpeg";
import foto2 from "../assets/about/foto2.jpeg";
import foto3 from "../assets/about/foto3.jpeg";
import foto4 from "../assets/about/foto4.jpeg";

const About = () => {
  return (
    <section
      className="relative text-white pt-16 pb-20 md:py-28 px-6"
      style={{
        backgroundImage: `url(${foto4})`,
        backgroundSize: "cover",
        backgroundPosition: "50% 20%",
      }}
    >
      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* GALERIA */}
        <div className="grid grid-cols-2 gap-6 order-2 md:order-1">
          {/* FOTO PRINCIPAL */}
          <div className="col-span-2 overflow-hidden fade-up">
            <img
              src={foto4}
              alt="Pablo Muñoz"
              className="w-full aspect-[4/5] object-cover object-center hover:scale-105 transition duration-700"
            />
          </div>

          {/* FOTO FAMILIA */}
          <div className="overflow-hidden fade-up-delay">
            <img
              src={foto1}
              alt="Familia"
              className="w-full aspect-square object-cover object-top hover:scale-105 transition duration-700"
            />
          </div>

          {/* FOTO HIJO */}
          <div className="overflow-hidden fade-up-delay2">
            <img
              src={foto2}
              alt="Hijo"
              className="w-full aspect-square object-cover object-center hover:scale-105 transition duration-700"
            />
          </div>

          {/* FOTO FINAL */}
          <div className="col-span-2 overflow-hidden fade-up-delay3">
            <img
              src={foto3}
              alt="Hijo"
              className="w-full aspect-[16/10] object-cover object-center hover:scale-105 transition duration-700"
            />
          </div>
        </div>

        {/* TEXTO */}
        <div className="fade-up order-1 md:order-2">
          <h2 className="text-4xl font-bold mb-10 tracking-wide">QUIÉN SOY</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Además de ser peluquero, barbero y educador, también soy padre,
            marido y atleta.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Creo profundamente en el equilibrio. La disciplina, la familia y el
            trabajo no son mundos separados, forman parte de la misma
            construcción.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Ese equilibrio es el que me permite sostener mi crecimiento
            profesional, seguir aprendiendo y transmitir lo que enseño con
            coherencia.
          </p>

          <p className="text-gray-300 leading-relaxed mb-10">
            Porque antes que educador, soy persona.
          </p>

          {/* FRASE DESTACADA */}
          <div className="border-l-2 border-white pl-6">
            <p className="text-lg font-medium">
              El crecimiento profesional real se construye cuando existe
              equilibrio entre la vida personal, la disciplina y la vocación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import foto5 from "../assets/manifiesto/foto5.jpeg";
import { useLanguage } from "../context/LanguageContext";

const Manifesto = () => {
  const { t } = useLanguage();

  return (
    <section
      id="manifesto"
      className="relative min-h-[120vh] flex items-center px-10 text-white"
      style={{
        backgroundImage: `url(${foto5})`,
        backgroundSize: "cover",
        backgroundPosition: "center 20%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* TEXTO */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            {t.manifesto.title}
          </h2>

          <div className="text-gray-400 text-lg leading-relaxed space-y-6">
            <p>{t.manifesto.p1}</p>
            <p>{t.manifesto.p2}</p>
            <p>{t.manifesto.p3}</p>
            <p>{t.manifesto.p4}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;

import { Link } from "react-router-dom";
import texture from "../assets/textures/concrete.jpg";
import { useLanguage } from "../context/LanguageContext";

const Programs = () => {
  const { t } = useLanguage();

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
          {t.programs.title}
        </h2>

        <p className="text-gray-400 mb-16">{t.programs.subtitle}</p>

        <div className="grid md:grid-cols-3 gap-10">
          {/* THE RISE */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-10 hover:border-white transition duration-300">
            <h3 className="text-xl font-bold mb-1">THE RISE</h3>

            <p className="text-gray-400 text-sm mb-4">
              {t.programs.rise.system}
            </p>

            <h4 className="font-semibold mb-6">
              {t.programs.rise.tagline}
            </h4>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              {t.programs.rise.description}
            </p>

            <Link
              to="/programs/the-rise"
              className="border border-white px-5 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition"
            >
              {t.programs.rise.button}
            </Link>
          </div>

          {/* CURSO ONLINE */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-10 opacity-70">
            <h3 className="text-xl font-bold mb-1">
              {t.programs.online.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {t.programs.online.soon}
            </p>

            <h4 className="font-semibold mb-6">
              {t.programs.online.tagline}
            </h4>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              {t.programs.online.description}
            </p>

            <span className="text-gray-500 text-sm tracking-wider">
              {t.programs.online.coming}
            </span>
          </div>

          {/* INITIUM */}
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-10 hover:border-white transition duration-300">
            <h3 className="text-xl font-bold mb-1">INITIUM</h3>

            <p className="text-gray-400 text-sm mb-4">
              {t.programs.initium.system}
            </p>

            <h4 className="font-semibold mb-6">
              {t.programs.initium.tagline}
            </h4>

            <p className="text-gray-300 text-sm leading-relaxed mb-8">
              {t.programs.initium.description}
            </p>

            <Link
              to="/programs/initium"
              className="border border-white px-5 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition"
            >
              {t.programs.initium.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;

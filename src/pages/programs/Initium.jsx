import { Link } from "react-router-dom";
import texture from "../../assets/textures/concrete.jpg";
import { useLanguage } from "../../context/LanguageContext";

const Initium = () => {
  const { t } = useLanguage();
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
            {t.initium.hero.subtitle}
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            {t.initium.hero.p1}
          </p>

          <p className="text-gray-300 leading-relaxed">{t.initium.hero.p2}</p>
        </div>

        {/* WHAT IS INITIUM */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">{t.initium.whatIs.title}</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            {t.initium.whatIs.text1}
          </p>

          <p className="text-gray-300 leading-relaxed">
            {t.initium.whatIs.text2}
          </p>
        </div>

        {/* LEARNING */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">
            {t.initium.learning.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                {t.initium.learning.item1}
              </p>
            </div>
            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                {t.initium.learning.item2}
              </p>
            </div>
            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                {t.initium.learning.item3}
              </p>
            </div>
            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                {t.initium.learning.item4}
              </p>
            </div>
            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                {t.initium.learning.item5}
              </p>
            </div>
            <div className="border border-[#2a2a2a] p-8">
              <p className="text-gray-300 text-sm">
                {t.initium.learning.item6}
              </p>
            </div>
          </div>
        </div>

        {/* AUDIENCE */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">
            {t.initium.audience.title}
          </h2>

          <ul className="text-gray-300 space-y-3">
            <li>{t.initium.audience.item1}</li>
            <li>{t.initium.audience.item2}</li>
            <li>{t.initium.audience.item3}</li>
            <li>{t.initium.audience.item4}</li>
            <li>{t.initium.audience.item5}</li>
          </ul>
        </div>

        {/* RESULTS */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">{t.initium.results.title}</h2>

          <ul className="text-gray-300 space-y-3">
            <li>{t.initium.results.item1}</li>
            <li>{t.initium.results.item2}</li>
            <li>{t.initium.results.item3}</li>
            <li>{t.initium.results.item4}</li>
            <li>{t.initium.results.item5}</li>
            <li>{t.initium.results.item6}</li>
          </ul>
        </div>

        {/* FORMAT */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">{t.initium.format.title}</h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            {t.initium.format.p1}
          </p>
          <p className="text-gray-300">{t.initium.format.p2}</p>
        </div>

        {/* CTA */}
        <div className="text-center border-t border-gray-800 pt-16">
          <p className="text-xl mb-8">{t.initium.cta.phrase}</p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            {t.initium.cta.button}
          </a>

          <div className="mt-8">
            <Link
              to="/programs"
              className="text-gray-400 hover:text-white transition"
            >
              {t.initium.cta.back}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initium;

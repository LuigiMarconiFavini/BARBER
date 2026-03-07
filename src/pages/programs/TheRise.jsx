import { Link } from "react-router-dom";
import texture from "../../assets/textures/concrete.jpg";
import { useLanguage } from "../../context/LanguageContext";

const TheRise = () => {
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
        <div className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">THE RISE</h1>

          <p className="text-gray-400 text-lg mb-8">
            {t.theRise.hero.subtitle}
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            {t.theRise.hero.p1}
          </p>

          <p className="text-gray-300 leading-relaxed">{t.theRise.hero.p2}</p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">
            {t.theRise.pillars.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8">
              <h3 className="text-xl font-bold mb-4">
                {t.theRise.pillars.analysisTitle}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {t.theRise.pillars.analysisText}
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8">
              <h3 className="text-xl font-bold mb-4">
                {t.theRise.pillars.formsTitle}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {t.theRise.pillars.formsText}
              </p>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] p-8">
              <h3 className="text-xl font-bold mb-4">
                {t.theRise.pillars.stylingTitle}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {t.theRise.pillars.stylingText}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {t.theRise.philosophy.title}
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.theRise.philosophy.text}
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12">
            {t.theRise.training.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="border border-[#2a2a2a] p-8">
              <h3 className="font-bold mb-3">{t.theRise.training.oneTitle}</h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {t.theRise.training.oneText}
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-8">
              <h3 className="font-bold mb-3">
                {t.theRise.training.groupTitle}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {t.theRise.training.groupText}
              </p>
            </div>

            <div className="border border-[#2a2a2a] p-8">
              <h3 className="font-bold mb-3">
                {t.theRise.training.seminarTitle}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed">
                {t.theRise.training.seminarText}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">
            {t.theRise.audience.title}
          </h2>

          <ul className="text-gray-300 space-y-3">
            <li>{t.theRise.audience.item1}</li>
            <li>{t.theRise.audience.item2}</li>
            <li>{t.theRise.audience.item3}</li>
            <li>{t.theRise.audience.item4}</li>
          </ul>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-8">{t.theRise.results.title}</h2>

          <p className="text-gray-300 mb-6">{t.theRise.results.intro}</p>

          <ul className="text-gray-300 space-y-3">
            <li>{t.theRise.results.item1}</li>
            <li>{t.theRise.results.item2}</li>
            <li>{t.theRise.results.item3}</li>
            <li>{t.theRise.results.item4}</li>
          </ul>
        </div>

        <div className="text-center border-t border-gray-800 pt-16">
          <p className="text-xl mb-8">{t.theRise.cta.phrase}</p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            {t.theRise.cta.button}
          </a>

          <div className="mt-8">
            <Link
              to="/programs"
              className="text-gray-400 hover:text-white transition"
            >
              {t.theRise.cta.back}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheRise;

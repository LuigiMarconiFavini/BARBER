import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* LOGO / NOMBRE */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold tracking-wide">{t.footer.logo}</h3>
          <p className="text-gray-400 text-sm mt-2">{t.footer.subtitle}</p>
        </div>

        {/* GRID FOOTER */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* NAVEGACION */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  {t.footer.home}
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  {t.footer.portfolio}
                </Link>
              </li>

              <li>
                <Link to="/programs" className="hover:text-white transition">
                  {t.footer.programs}
                </Link>
              </li>

              <li>
                <Link to="/training" className="hover:text-white transition">
                  {t.footer.training}
                </Link>
              </li>

              <li>
                <Link to="/manifiesto" className="hover:text-white transition">
                  {t.footer.manifesto}
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  {t.footer.about}
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* PROGRAMAS */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.programsTitle}</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link
                  to="programs/the-rise"
                  className="hover:text-white transition"
                >
                  {t.footer.theRise}
                </Link>
              </li>

              <li>
                <Link
                  to="programs/initium"
                  className="hover:text-white transition"
                >
                  {t.footer.initium}
                </Link>
              </li>

              <li>{t.footer.onlineCourse}</li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contactTitle}</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://wa.me/5493413826774"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  {t.footer.whatsapp}
                </a>
              </li>

              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=pabloalemunoz@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {t.footer.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* REDES */}
        <div className="flex gap-6 text-sm text-gray-400 mb-10">
          <a
            href="https://www.instagram.com/pablomunoz.oka/"
            className="hover:text-white transition"
          >
            {t.footer.socialInstagram}
          </a>

          <a
            href="https://www.tiktok.com/@pablomunozoka"
            className="hover:text-white transition"
          >
            {t.footer.socialTikTok}
          </a>

          <a
            href="https://www.youtube.com/@Pablomunozoka"
            className="hover:text-white transition"
          >
            {t.footer.socialYoutube}
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-gray-500 text-sm border-t border-gray-800 pt-6">
          {t.footer.copyright.replace("{year}", year)}

          <div className="text-gray-600 text-xs mt-2">
            {t.footer.createdBy}{" "}
            <a
              href="https://portfolio-luigi-marconi-favini.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              Luigi Marconi Favini
            </a>
          </div>
        </div>
      </div>
    </footer >
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../i18n/translations";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, toggleLanguage } = useLanguage();

  const t = translations[language].navbar;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        <Link to="/" className="text-lg tracking-widest font-semibold">
          PABLO MUÑOZ
        </Link>

        <div className="hidden md:flex gap-6 text-sm tracking-wider">
          <Link to="/portfolio" className="hover:text-gray-400 transition">
            {t.portfolio}
          </Link>

          <Link to="/programs" className="hover:text-gray-400 transition">
            {t.programs}
          </Link>

          <Link to="/training" className="hover:text-gray-400 transition">
            {t.training}
          </Link>

          <Link to="/manifiesto" className="hover:text-gray-400 transition">
            {t.manifesto}
          </Link>

          <Link to="/about" className="hover:text-gray-400 transition">
            {t.about}
          </Link>

          <Link to="/contact" className="hover:text-gray-400 transition">
            {t.contact}
          </Link>

          <button
            onClick={toggleLanguage}
            className="border border-white/30 px-2 py-1 text-xs hover:bg-white hover:text-black transition"
          >
            {language === "es" ? "EN" : "ES"}
          </button>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      <div
        className={`md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-sm tracking-wider text-white">
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
            {t.portfolio}
          </Link>

          <Link to="/programs" onClick={() => setMenuOpen(false)}>
            {t.programs}
          </Link>

          <Link to="/training" onClick={() => setMenuOpen(false)}>
            {t.training}
          </Link>

          <Link to="/manifiesto" onClick={() => setMenuOpen(false)}>
            {t.manifesto}
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            {t.about}
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            {t.contact}
          </Link>

          <button
            onClick={() => {
              toggleLanguage();
              setMenuOpen(false);
            }}
            className="border border-white/30 px-3 py-1 text-xs hover:bg-white hover:text-black transition"
          >
            {language === "es" ? "ENGLISH" : "ESPAÑOL"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

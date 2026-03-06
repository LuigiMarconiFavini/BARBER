import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        {/* LOGO */}
        <Link to="/" className="text-lg tracking-widest font-semibold">
          PABLO MUÑOZ
        </Link>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex gap-6 text-sm tracking-wider">
          <Link to="/portfolio" className="hover:text-gray-400 transition">
            PORTFOLIO
          </Link>

          <Link to="/programs" className="hover:text-gray-400 transition">
            PROGRAMAS EDUCATIVOS
          </Link>

          <Link to="/training" className="hover:text-gray-400 transition">
            FORMACIÓN
          </Link>

          <Link to="/manifiesto" className="hover:text-gray-400 transition">
            MANIFIESTO
          </Link>

          <Link to="/about" className="hover:text-gray-400 transition">
            SOBRE MÍ
          </Link>

          <Link to="/contact" className="hover:text-gray-400 transition">
            CONTACTO
          </Link>
        </div>

        {/* BOTON MOBILE */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-6 text-sm tracking-wider text-white">
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>
            PORTFOLIO
          </Link>

          <Link to="/programs" onClick={() => setMenuOpen(false)}>
            PROGRAMAS EDUCATIVOS
          </Link>

          <Link to="/training" onClick={() => setMenuOpen(false)}>
            FORMACIÓN
          </Link>

          <Link to="/manifiesto" onClick={() => setMenuOpen(false)}>
            MANIFIESTO
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            SOBRE MÍ
          </Link>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACTO
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

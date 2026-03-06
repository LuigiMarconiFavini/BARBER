import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 px-6 py-16">
      <div className="max-w-6xl mx-auto">
        {/* LOGO / NOMBRE */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold tracking-wide">PABLO MUÑOZ</h3>
          <p className="text-gray-400 text-sm mt-2">
            Sistema técnico y empresarial para barberos.
          </p>
        </div>

        {/* GRID FOOTER */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* NAVEGACION */}
          <div>
            <h4 className="font-semibold mb-4">NAVEGACIÓN</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Inicio
                </Link>
              </li>

              <li>
                <Link to="/portfolio" className="hover:text-white transition">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link to="/programs" className="hover:text-white transition">
                  Programas Educativos
                </Link>
              </li>

              <li>
                <Link to="/training" className="hover:text-white transition">
                  Formaciones
                </Link>
              </li>

              <li>
                <Link to="/manifiesto" className="hover:text-white transition">
                  Manifiesto
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition">
                  Sobre mí
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* PROGRAMAS */}
          <div>
            <h4 className="font-semibold mb-4">PROGRAMAS</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>The Rise</li>
              <li>Initium</li>
              <li>Curso Online (Próximamente)</li>
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="font-semibold mb-4">CONTACTO</h4>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a
                  href="https://wa.me/5493413826774"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>

              <li>pabloalemunoz@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* REDES */}
        <div className="flex gap-6 text-sm text-gray-400 mb-10">
          <a
            href="https://www.instagram.com/pablomunoz.oka/"
            className="hover:text-white transition"
          >
            INSTAGRAM
          </a>

          <a
            href="https://www.tiktok.com/@pablomunozoka"
            className="hover:text-white transition"
          >
            TIKTOK
          </a>

          <a
            href="https://www.youtube.com/@Pablomunozoka"
            className="hover:text-white transition"
          >
            YOUTUBE
          </a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-gray-500 text-sm border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} Pablo Muñoz — Todos los derechos
          reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-[#0e0e0e] text-white py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* TITULO */}
        <h2 className="text-4xl font-bold tracking-wide mb-8">
          {t.contact.title}
        </h2>

        {/* TEXTO */}
        <p className="text-gray-300 mb-12 leading-relaxed">{t.contact.text}</p>

        {/* BOTONES */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <a
            href="https://wa.me/5493413826774?text=Hola%20Pablo,%20quiero%20información%20sobre%20tus%20programas."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-8 py-3 text-sm tracking-widest hover:bg-gray-200 transition"
          >
            {t.contact.whatsapp}
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pabloalemunoz@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition"
          >
            {t.contact.email}
          </a>
        </div>

        {/* SEPARADOR */}
        <div className="w-full h-px bg-neutral-800 mb-16"></div>

        {/* REDES */}
        <div className="flex justify-center gap-10 text-sm tracking-wider text-gray-400 mb-24">
          <a
            href="https://www.instagram.com/pablomunoz.oka/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            {t.contact.instagram}
          </a>

          <a
            href="https://www.tiktok.com/@pablomunozoka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            {t.contact.tiktok}
          </a>

          <a
            href="https://www.youtube.com/@Pablomunozoka"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            {t.contact.youtube}
          </a>
        </div>

        {/* CIERRE FILOSOFICO */}
        <div className="border-t border-gray-800 pt-20">
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 whitespace-pre-line">
            {t.contact.closingTitle}
          </h3>

          <p className="text-gray-400 leading-relaxed whitespace-pre-line">
            {t.contact.closingText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

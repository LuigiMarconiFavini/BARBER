import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="flex gap-2 text-sm">
      <button
        onClick={() => changeLanguage("es")}
        className={language === "es" ? "text-white" : "text-gray-400"}
      >
        ES
      </button>

      <span>|</span>

      <button
        onClick={() => changeLanguage("en")}
        className={language === "en" ? "text-white" : "text-gray-400"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
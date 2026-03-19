import { createContext, useContext, useState, ReactNode } from "react";
import translations, { Language, languageLabels } from "./translations";

type ContextType = {
  lang: Language;
  setLang: (l: Language) => void;
  t: typeof translations["en"];
};

const LanguageContext = createContext<ContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export { languageLabels };
export type { Language };

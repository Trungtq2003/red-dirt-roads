import { useState } from "react";
import { Globe } from "lucide-react";
import { useLanguage, languageLabels, type Language } from "@/i18n/LanguageContext";

const langs: Language[] = ["en", "bg", "cs", "da", "nl", "et", "fr", "de", "hi", "it", "lv", "no", "pl", "pt", "ro", "ru", "sl", "es", "sv"];

const LanguageSwitcher = () => {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 font-mono text-xs tracking-wider text-muted-foreground hover:text-primary transition-colors"
      >
        <Globe className="w-4 h-4" />
        {languageLabels[lang]}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 bg-card border border-border min-w-[140px] max-h-[400px] overflow-y-auto shadow-lg">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => { setLang(l); setOpen(false); }}
                className={`block w-full text-left px-4 py-2 font-mono text-xs tracking-wider transition-colors ${
                  l === lang ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {languageLabels[l]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;

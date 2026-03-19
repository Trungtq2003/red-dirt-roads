import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const CTABanner = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  return (
    <section className="bg-surface noise-overlay py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="topo" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 100 Q50 80 100 100 T200 100" fill="none" stroke="hsl(22 90% 44%)" strokeWidth="0.5" />
            <path d="M0 130 Q50 110 100 130 T200 130" fill="none" stroke="hsl(22 90% 44%)" strokeWidth="0.5" />
            <path d="M0 60 Q50 40 100 60 T200 60" fill="none" stroke="hsl(22 90% 44%)" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#topo)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-4">
          {t.cta.heading1}<br />{t.cta.heading2}
        </h2>
        <p className="font-heading text-xl text-muted-foreground mb-10 max-w-lg mx-auto">{t.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.cta.placeholder}
            className="flex-1 bg-background border border-border px-5 py-4 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <button className="bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase px-8 py-4 hover:scale-[1.02] transition-transform whitespace-nowrap">
            {t.cta.button}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;

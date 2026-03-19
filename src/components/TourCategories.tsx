import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const TourCategories = () => {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();

  const categories = [
    { icon: "🏍️", label: t.categories.motorbike },
    { icon: "💨", label: t.categories.dirtbike },
    { icon: "🔥", label: t.categories.bigbike },
    { icon: "⛰️", label: t.categories.offroad },
    { icon: "🌿", label: t.categories.jungleTrail },
    { icon: "🏔️", label: t.categories.mountainPass },
  ];

  return (
    <section className="bg-surface border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex overflow-x-auto gap-2 py-4 scrollbar-hide">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-6 py-3 font-heading text-sm tracking-wider uppercase whitespace-nowrap transition-all ${
                active === i
                  ? "border-2 border-primary text-primary shadow-[0_0_15px_rgba(212,87,10,0.3)]"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;

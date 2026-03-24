import { useLanguage } from "@/i18n/LanguageContext";

interface TourCategoriesProps {
  active: string;
  onSelect: (category: string) => void;
}

const TourCategories = ({ active, onSelect }: TourCategoriesProps) => {
  const { t } = useLanguage();

  const categories = [
    { key: "ALL", icon: "🔥", label: t.tourGrid.exploreAll.includes("EXPLORE") ? "ALL" : t.categories.motorbike.toUpperCase() === t.categories.motorbike ? "ALL" : "All" },
    { key: "MOTORBIKE", icon: "🏍️", label: t.categories.motorbike },
    { key: "DIRTBIKE", icon: "💨", label: t.categories.dirtbike },
    { key: "BIGBIKE", icon: "🔥", label: t.categories.bigbike },
    { key: "OFFROAD", icon: "⛰️", label: t.categories.offroad },
    { key: "JUNGLE", icon: "🌿", label: t.categories.jungleTrail },
    { key: "MOUNTAIN", icon: "🏔️", label: t.categories.mountainPass },
  ];

  return (
    <div className="flex overflow-x-auto gap-3 scrollbar-hide pb-2">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onSelect(cat.key)}
          className={`flex items-center gap-2 px-5 py-2.5 font-heading text-sm tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
            active === cat.key
              ? "border-2 border-primary text-primary bg-primary/10 shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
              : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:bg-muted/50"
          }`}
        >
          <span className="text-base">{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
};

export default TourCategories;

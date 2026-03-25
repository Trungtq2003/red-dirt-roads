interface TourCategoriesProps {
  active: string;
  onSelect: (category: string) => void;
}

const categories = [
  { key: "ALL", icon: "🔥", label: "All" },
  { key: "MOTORBIKE", icon: "🏍️", label: "Motorbike" },
  { key: "DIRTBIKE", icon: "💨", label: "Dirtbike" },
  { key: "BIGBIKE", icon: "🔥", label: "Bigbike" },
  { key: "OFFROAD", icon: "⛰️", label: "Offroad" },
  { key: "JUNGLE", icon: "🌿", label: "Jungle Trail" },
  { key: "MOUNTAIN", icon: "🏔️", label: "Mountain Pass" },
];

const TourCategories = ({ active, onSelect }: TourCategoriesProps) => {
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

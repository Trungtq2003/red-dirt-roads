interface TourCardProps {
  image: string;
  name: string;
  difficulty: "EASY" | "HARD" | "EXTREME";
  duration: string;
  distance: string;
  terrain: string;
  price: string;
  bookLabel?: string;
}

const difficultyColors = {
  EASY: "bg-emerald-700 text-emerald-100",
  HARD: "bg-secondary text-secondary-foreground",
  EXTREME: "bg-destructive text-destructive-foreground",
};

const TourCard = ({ image, name, difficulty, duration, distance, terrain, price, bookLabel = "BOOK NOW →" }: TourCardProps) => {
  return (
    <div className="group bg-card border border-border hover:border-l-4 hover:border-l-primary hover:shadow-[0_0_20px_rgba(212,87,10,0.3)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
        <span className={`absolute top-4 right-4 px-3 py-1 font-mono text-xs tracking-wider ${difficultyColors[difficulty]}`}>
          {difficulty}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-2xl text-foreground mb-3">{name}</h3>
        <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground mb-4">
          <span>{duration}</span>
          <span>{distance}</span>
          <span>{terrain}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-heading text-2xl font-bold text-primary">{price}</span>
          <button className="font-heading text-sm tracking-wider uppercase text-foreground border border-foreground/30 px-4 py-2 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
            {bookLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

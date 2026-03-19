import { useLanguage } from "@/i18n/LanguageContext";
import TourCard from "./TourCard";
import tourMountain from "@/assets/tour-mountain.jpg";
import tourJungle from "@/assets/tour-jungle.jpg";
import tourRice from "@/assets/tour-rice.jpg";
import tourCoastal from "@/assets/tour-coastal.jpg";
import tourExtreme from "@/assets/tour-extreme.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const tours = [
  { image: tourMountain, name: "HA GIANG LOOP", difficulty: "HARD" as const, duration: "4 DAYS", distance: "350 KM", terrain: "MOUNTAIN", price: "$389" },
  { image: tourJungle, name: "JUNGLE RUNNER", difficulty: "EXTREME" as const, duration: "3 DAYS", distance: "180 KM", terrain: "JUNGLE", price: "$299" },
  { image: tourRice, name: "GOLDEN HIGHLANDS", difficulty: "EASY" as const, duration: "2 DAYS", distance: "220 KM", terrain: "MIXED", price: "$199" },
  { image: tourCoastal, name: "COASTAL WARRIOR", difficulty: "EASY" as const, duration: "3 DAYS", distance: "280 KM", terrain: "COASTAL", price: "$259" },
  { image: tourExtreme, name: "DEATH ROAD DESCENT", difficulty: "EXTREME" as const, duration: "1 DAY", distance: "64 KM", terrain: "EXTREME", price: "$149" },
  { image: heroBg, name: "RED DIRT CLASSIC", difficulty: "HARD" as const, duration: "5 DAYS", distance: "420 KM", terrain: "OFFROAD", price: "$449" },
];

const TourGrid = () => {
  const { t } = useLanguage();

  return (
    <section id="tours" className="bg-background py-20 tire-track">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">{t.tourGrid.tag}</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">{t.tourGrid.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.name} {...tour} bookLabel={t.tourGrid.bookNow} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourGrid;

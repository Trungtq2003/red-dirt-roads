import { useState, useMemo } from "react";
import TourCard from "./TourCard";
import TourCategories from "./TourCategories";
import tourMountain from "@/assets/tour-mountain.jpg";
import tourJungle from "@/assets/tour-jungle.jpg";
import tourRice from "@/assets/tour-rice.jpg";
import tourCoastal from "@/assets/tour-coastal.jpg";
import tourExtreme from "@/assets/tour-extreme.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const tours = [
  { image: tourMountain, name: "HA GIANG LOOP", difficulty: "HARD" as const, duration: "4 DAYS", distance: "350 KM", terrain: "MOUNTAIN", price: "$389", category: "MOTORBIKE" },
  { image: tourJungle, name: "JUNGLE RUNNER", difficulty: "EXTREME" as const, duration: "3 DAYS", distance: "180 KM", terrain: "JUNGLE", price: "$299", category: "DIRTBIKE" },
  { image: tourRice, name: "GOLDEN HIGHLANDS", difficulty: "EASY" as const, duration: "2 DAYS", distance: "220 KM", terrain: "MIXED", price: "$199", category: "MOTORBIKE" },
  { image: tourCoastal, name: "COASTAL WARRIOR", difficulty: "EASY" as const, duration: "3 DAYS", distance: "280 KM", terrain: "COASTAL", price: "$259", category: "BIGBIKE" },
  { image: tourExtreme, name: "DEATH ROAD DESCENT", difficulty: "EXTREME" as const, duration: "1 DAY", distance: "64 KM", terrain: "EXTREME", price: "$149", category: "OFFROAD" },
  { image: heroBg, name: "RED DIRT CLASSIC", difficulty: "HARD" as const, duration: "5 DAYS", distance: "420 KM", terrain: "OFFROAD", price: "$449", category: "DIRTBIKE" },
];

const TourGrid = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filtered = useMemo(() => {
    if (activeCategory === "ALL") return tours;
    return tours.filter(
      (tour) => tour.category === activeCategory || tour.terrain === activeCategory
    );
  }, [activeCategory]);

  return (
    <section id="tours" className="bg-background py-20 tire-track">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">// SELECT YOUR ROUTE</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">OUR TOURS</h2>
        </div>

        <div className="mb-10">
          <TourCategories active={activeCategory} onSelect={setActiveCategory} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filtered.length > 0 ? (
            filtered.map((tour) => (
              <TourCard key={tour.name} {...tour} bookLabel="BOOK NOW →" />
            ))
          ) : (
            <p className="col-span-full text-center text-muted-foreground font-mono text-sm py-12">
              No tours found for this category.
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <a
            href="#tours"
            className="inline-block bg-primary text-primary-foreground font-heading text-lg font-semibold px-8 py-4 tracking-wider uppercase hover:scale-[1.02] transition-transform"
          >
            EXPLORE ALL OUR TOURS
          </a>
        </div>
      </div>
    </section>
  );
};

export default TourGrid;

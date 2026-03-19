import { Users, CalendarDays } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import tourMountain from "@/assets/tour-mountain.jpg";
import tourJungle from "@/assets/tour-jungle.jpg";
import tourCoastal from "@/assets/tour-coastal.jpg";

const groupTours = [
  { image: tourMountain, name: "HA GIANG EXPEDITION", price: "$329", minRiders: 6, nextDate: "APR 12, 2026", duration: "4 DAYS", terrain: "MOUNTAIN" },
  { image: tourJungle, name: "JUNGLE PACK RUN", price: "$259", minRiders: 4, nextDate: "MAY 3, 2026", duration: "3 DAYS", terrain: "JUNGLE" },
  { image: tourCoastal, name: "COASTAL CONVOY", price: "$219", minRiders: 5, nextDate: "APR 28, 2026", duration: "3 DAYS", terrain: "COASTAL" },
];

const GroupTours = () => {
  const { t } = useLanguage();

  return (
    <section id="group-tours" className="bg-surface py-20 racing-stripe">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">{t.groupTours.tag}</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-4">{t.groupTours.heading}</h2>
          <p className="font-heading text-xl text-muted-foreground max-w-lg">{t.groupTours.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {groupTours.map((tour) => (
            <div key={tour.name} className="group bg-card border border-border hover:border-l-4 hover:border-l-primary hover:shadow-[0_0_20px_rgba(212,87,10,0.3)] transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-[16/9]">
                <img src={tour.image} alt={tour.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1 font-mono text-xs tracking-wider bg-gold/20 text-gold border border-gold/30">
                  <Users className="w-3 h-3 inline mr-1" />GROUP
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-2xl text-foreground mb-3">{tour.name}</h3>
                <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground mb-4">
                  <span>{tour.duration}</span>
                  <span>{tour.terrain}</span>
                </div>
                <div className="flex items-center gap-4 font-mono text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Users className="w-3 h-3" />{t.groupTours.minRiders}: {tour.minRiders}</span>
                  <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3" />{tour.nextDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-heading text-2xl font-bold text-primary">{tour.price}<span className="text-sm text-muted-foreground">{t.groupTours.perPerson}</span></span>
                  <button className="font-heading text-sm tracking-wider uppercase text-foreground border border-foreground/30 px-4 py-2 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
                    {t.tourGrid.bookNow}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll-to-section CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#tours" className="inline-block bg-primary text-primary-foreground font-heading text-lg font-semibold px-8 py-4 tracking-wider uppercase hover:scale-[1.02] transition-transform">
            {t.groupTours.exploreTours}
          </a>
        </div>
      </div>
    </section>
  );
};

export default GroupTours;

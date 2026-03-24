import { MapPin, Compass, BookOpen, Camera } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TravelGuide = () => {
  const { t } = useLanguage();

  const guides = [
    { icon: MapPin, title: t.travelGuide.bestRoutesTitle, desc: t.travelGuide.bestRoutesDesc },
    { icon: Compass, title: t.travelGuide.tipsTitle, desc: t.travelGuide.tipsDesc },
    { icon: BookOpen, title: t.travelGuide.cultureTitle, desc: t.travelGuide.cultureDesc },
    { icon: Camera, title: t.travelGuide.photoTitle, desc: t.travelGuide.photoDesc },
  ];

  return (
    <section id="travel-guide" className="bg-surface py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-gold bg-gold/10 px-3 py-1 mb-4 border border-gold/30">
            {t.travelGuide.badge}
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">{t.travelGuide.heading}</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">{t.travelGuide.desc}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {guides.map((item) => (
            <div key={item.title} className="bg-card border border-border p-6 hover:border-primary/50 transition-colors">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <p className="font-heading text-lg text-foreground font-semibold mb-2">{item.title}</p>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase px-8 py-4 hover:scale-[1.02] transition-transform">
            {t.travelGuide.readMore}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelGuide;

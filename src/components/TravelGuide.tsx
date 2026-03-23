import featuredRoute from "@/assets/featured-route.jpg";
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
    <section id="travel-guide" className="bg-surface py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          <div className="lg:col-span-3 relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}>
              <img src={featuredRoute} alt="Travel guide scenic route" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/40" />
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col justify-center py-12 lg:pl-8">
            <span className="inline-block font-mono text-xs tracking-[0.3em] text-gold bg-gold/10 px-3 py-1 self-start mb-4 border border-gold/30">
              {t.travelGuide.badge}
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">{t.travelGuide.heading}</h2>
            <p className="font-body text-muted-foreground mb-8 text-lg leading-relaxed">{t.travelGuide.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {guides.map((item) => (
                <div key={item.title} className="border-l-4 border-primary pl-3">
                  <item.icon className="w-4 h-4 text-primary mb-1" />
                  <p className="font-heading text-base text-foreground font-semibold">{item.title}</p>
                  <p className="font-mono text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="self-start bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase px-8 py-4 hover:scale-[1.02] transition-transform">
              {t.travelGuide.readMore}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGuide;

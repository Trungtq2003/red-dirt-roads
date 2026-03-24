import featuredRoute from "@/assets/featured-route.jpg";
import { MapPin, Compass, BookOpen, Camera } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TravelGuide = () => {
  const { t } = useLanguage();

  const articles = [
    { icon: MapPin, title: t.travelGuide.bestRoutesTitle, desc: t.travelGuide.bestRoutesDesc, image: featuredRoute },
    { icon: Compass, title: t.travelGuide.tipsTitle, desc: t.travelGuide.tipsDesc, image: featuredRoute },
    { icon: BookOpen, title: t.travelGuide.cultureTitle, desc: t.travelGuide.cultureDesc, image: featuredRoute },
    { icon: Camera, title: t.travelGuide.photoTitle, desc: t.travelGuide.photoDesc, image: featuredRoute },
  ];

  return (
    <section id="travel-guide" className="bg-surface py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-gold bg-gold/10 px-3 py-1 mb-4 border border-gold/30">
            {t.travelGuide.badge}
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">{t.travelGuide.heading}</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">{t.travelGuide.desc}</p>
        </div>

        {/* Featured article */}
        <article className="group grid grid-cols-1 lg:grid-cols-2 gap-0 mb-8 bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors">
          <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
            <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <div className="flex items-center gap-2 mb-3">
              <articles[0].icon className="w-4 h-4 text-primary" />
              <span className="font-mono text-xs tracking-widest text-primary uppercase">{t.travelGuide.badge}</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">{articles[0].title}</h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">{articles[0].desc}</p>
            <span className="font-heading text-sm text-primary tracking-wider uppercase cursor-pointer hover:underline underline-offset-4 self-start">
              {t.travelGuide.readMore} →
            </span>
          </div>
        </article>

        {/* Secondary articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {articles.slice(1).map((item) => (
            <article key={item.title} className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{t.travelGuide.badge}</span>
                </div>
                <h3 className="font-heading text-lg text-foreground font-semibold mb-2">{item.title}</h3>
                <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-4">{item.desc}</p>
                <span className="font-heading text-xs text-primary tracking-wider uppercase cursor-pointer hover:underline underline-offset-4">
                  {t.travelGuide.readMore} →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelGuide;

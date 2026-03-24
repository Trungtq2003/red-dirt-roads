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

  const FeaturedIcon = articles[0].icon;

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left — featured article */}
          <article className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors h-full">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <FeaturedIcon className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs tracking-widest text-primary uppercase">{t.travelGuide.badge}</span>
              </div>
              <h3 className="font-display text-3xl text-foreground mb-4">{articles[0].title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{articles[0].desc}</p>
              <span className="font-heading text-sm text-primary tracking-wider uppercase cursor-pointer hover:underline underline-offset-4">
                {t.travelGuide.readMore} →
              </span>
            </div>
          </article>

          {/* Right — three items stacked evenly */}
          <div className="flex flex-col gap-6">
            {articles.slice(1).map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="group flex-1 bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors flex flex-col sm:flex-row">
                  <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col justify-center sm:w-3/5">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{t.travelGuide.badge}</span>
                    </div>
                    <h3 className="font-heading text-lg text-foreground font-semibold mb-1">{item.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                    <span className="font-heading text-xs text-primary tracking-wider uppercase cursor-pointer hover:underline underline-offset-4">
                      {t.travelGuide.readMore} →
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGuide;

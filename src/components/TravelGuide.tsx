import featuredRoute from "@/assets/featured-route.jpg";
import { MapPin, Compass, BookOpen, Camera } from "lucide-react";

const articles = [
  { icon: MapPin, title: "Best Routes", desc: "Curated riding paths through stunning landscapes", image: featuredRoute },
  { icon: Compass, title: "Rider Tips", desc: "Essential advice for Southeast Asian adventures", image: featuredRoute },
  { icon: BookOpen, title: "Local Culture", desc: "Traditions, cuisine, and hidden villages", image: featuredRoute },
  { icon: Camera, title: "Photo Spots", desc: "Capture breathtaking moments on the trail", image: featuredRoute },
];

const TravelGuide = () => {
  const FeaturedIcon = articles[0].icon;

  return (
    <section id="travel-guide" className="bg-surface py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block font-mono text-xs tracking-[0.3em] text-gold bg-gold/10 px-3 py-1 mb-4 border border-gold/30">
            📖 TRAVEL GUIDE
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">EXPLORE THE LAND</h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">Discover insider tips, cultural highlights, and the best-kept secrets of Southeast Asia's riding destinations.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-colors h-full">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <FeaturedIcon className="w-4 h-4 text-primary" />
                <span className="font-mono text-xs tracking-widest text-primary uppercase">TRAVEL GUIDE</span>
              </div>
              <h3 className="font-display text-3xl text-foreground mb-4">{articles[0].title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">{articles[0].desc}</p>
              <span className="font-heading text-sm text-primary tracking-wider uppercase cursor-pointer hover:underline underline-offset-4">
                READ THE GUIDE →
              </span>
            </div>
          </article>

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
                      <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">TRAVEL GUIDE</span>
                    </div>
                    <h3 className="font-heading text-lg text-foreground font-semibold mb-1">{item.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                    <span className="font-heading text-xs text-primary tracking-wider uppercase cursor-pointer hover:underline underline-offset-4">
                      READ THE GUIDE →
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

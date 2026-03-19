import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center noise-overlay overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Motorbike adventure on dusty red dirt road" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <p className="font-mono text-sm tracking-[0.3em] text-primary mb-4 uppercase">{t.hero.tagline}</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-foreground mb-6 tracking-tight">
            {t.hero.headline1}<br />{t.hero.headline2}
          </h1>
          <p className="font-heading text-xl md:text-2xl text-muted-foreground max-w-lg mb-10 font-light">{t.hero.subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#tours" className="inline-block bg-primary text-primary-foreground font-heading text-lg font-semibold px-8 py-4 tracking-wider uppercase hover:scale-[1.02] transition-transform">
              {t.hero.bookTour}
            </a>
            <a href="#group-tours" className="inline-block border-2 border-foreground/30 text-foreground font-heading text-lg font-semibold px-8 py-4 tracking-wider uppercase hover:border-primary hover:text-primary transition-colors">
              {t.groupTours.heading}
            </a>
            <a href="#group-tours" className="inline-block border-2 border-foreground/30 text-foreground font-heading text-lg font-semibold px-8 py-4 tracking-wider uppercase hover:border-primary hover:text-primary transition-colors">
              {t.hero.groupTours}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-surface" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }} />
    </section>
  );
};

export default HeroSection;

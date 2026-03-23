import { useLanguage } from "@/i18n/LanguageContext";
import heroBg from "@/assets/hero-bg.jpg";

const CompanyIntro = () => {
  const { t } = useLanguage();

  return (
    <section id="about-company" className="bg-surface py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">{t.companyIntro.tag}</p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">{t.companyIntro.heading}</h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">{t.companyIntro.desc1}</p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">{t.companyIntro.desc2}</p>
            <div className="flex gap-8">
              <div className="border-l-4 border-primary pl-4">
                <span className="font-display text-4xl text-foreground">12+</span>
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mt-1">{t.companyIntro.statYears}</p>
              </div>
              <div className="border-l-4 border-gold pl-4">
                <span className="font-display text-4xl text-foreground">5000+</span>
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mt-1">{t.companyIntro.statRiders}</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <span className="font-display text-4xl text-foreground">50+</span>
                <p className="font-mono text-xs text-muted-foreground tracking-wider uppercase mt-1">{t.companyIntro.statRoutes}</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden" style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)' }}>
              <img src={heroBg} alt="Wildtrack team on the trail" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;

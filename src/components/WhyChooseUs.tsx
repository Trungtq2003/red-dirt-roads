import { Shield, Wrench, Map, Users, Headphones, Award } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: Shield, title: t.whyChoose.safetyTitle, desc: t.whyChoose.safetyDesc },
    { icon: Wrench, title: t.whyChoose.gearTitle, desc: t.whyChoose.gearDesc },
    { icon: Map, title: t.whyChoose.routesTitle, desc: t.whyChoose.routesDesc },
    { icon: Users, title: t.whyChoose.guidesTitle, desc: t.whyChoose.guidesDesc },
    { icon: Headphones, title: t.whyChoose.supportTitle, desc: t.whyChoose.supportDesc },
    { icon: Award, title: t.whyChoose.experienceTitle, desc: t.whyChoose.experienceDesc },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">{t.whyChoose.tag}</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">{t.whyChoose.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-card border border-border p-8 hover:border-l-4 hover:border-l-primary transition-all duration-300 group">
              <r.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
              <h3 className="font-heading text-xl text-foreground font-semibold mb-3">{r.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

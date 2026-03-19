import { Calendar, Map, Shield, Wrench } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FeatureStrip = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Calendar, stat: "12+", label: t.features.years },
    { icon: Map, stat: "500+", label: t.features.routes },
    { icon: Shield, stat: "Expert", label: t.features.guides },
    { icon: Wrench, stat: "Full", label: t.features.gear },
  ];

  return (
    <section className="bg-surface border-y border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i < features.length - 1 ? "md:border-r md:border-border" : ""}`}>
              <f.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
              <span className="font-display text-4xl text-foreground">{f.stat}</span>
              <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase mt-1">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;

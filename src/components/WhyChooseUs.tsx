import { Shield, Wrench, Map, Users, Headphones, Award } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Safety First", desc: "Full protective gear, first-aid trained guides, and satellite communication on every ride." },
  { icon: Wrench, title: "Premium Gear", desc: "Top-tier bikes maintained daily. Helmets, boots, and armor included." },
  { icon: Map, title: "Curated Routes", desc: "Hand-picked trails tested by our team. No generic tourist paths." },
  { icon: Users, title: "Expert Guides", desc: "Local riders who know the terrain, culture, and hidden gems." },
  { icon: Headphones, title: "24/7 Support", desc: "Roadside assistance and backup vehicles on every tour." },
  { icon: Award, title: "12+ Years", desc: "Over a decade of leading unforgettable adventures across SE Asia." },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">// THE WILDTRACK DIFFERENCE</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">WHY CHOOSE US</h2>
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

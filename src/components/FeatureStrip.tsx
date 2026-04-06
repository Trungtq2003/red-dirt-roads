import { Bike, Clock, MapPin, Users } from "lucide-react";

const options = [
  { icon: Bike, title: "Choose Your Bike", desc: "Pick from motorbikes, dirt bikes, or big bikes to match your style." },
  { icon: MapPin, title: "Select Your Route", desc: "Mountains, coast, jungle — design the perfect path." },
  { icon: Clock, title: "Set Your Pace", desc: "Half-day rides to multi-week expeditions, your schedule rules." },
  { icon: Users, title: "Pick Your Group", desc: "Solo, couple, or crew — we tailor every detail." },
];

const FeatureStrip = () => {
  return (
    <section className="bg-surface border-y border-border py-16 track-border-top track-border-bottom checkered-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">// BUILD YOUR ADVENTURE</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">CUSTOMIZE YOUR TOURS</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {options.map((o, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i < options.length - 1 ? "md:border-r md:border-border" : ""}`}>
              <o.icon className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
              <span className="font-display text-xl text-foreground mb-1">{o.title}</span>
              <span className="font-mono text-xs text-muted-foreground tracking-wider mt-1 max-w-[180px]">{o.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;

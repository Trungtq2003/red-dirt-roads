import { Star } from "lucide-react";

const testimonials = [
  { quote: "The Ha Giang Loop was the most raw, unforgettable ride of my life. Nothing compares to carving those mountain passes at sunrise.", name: "Marcus J.", tour: "Ha Giang Loop", stars: 5 },
  { quote: "Professional guides, solid bikes, and trails that'll push your limits. This is the real deal — not some tourist ride.", name: "Elena V.", tour: "Jungle Runner", stars: 5 },
  { quote: "I've ridden in 30+ countries. Vietnam's red dirt roads with these guys? Top 3, easily. Gear was perfect, routes were insane.", name: "Riku T.", tour: "Red Dirt Classic", stars: 5 },
  { quote: "From river crossings to cliff edges — every moment felt earned. If you ride, you need to do this at least once.", name: "James O.", tour: "Canyon River Run", stars: 5 },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">// RIDER STORIES</p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground">FROM THE TRAIL</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-card border border-border p-6 relative">
              <span className="font-display text-8xl text-primary/10 absolute top-2 left-4 leading-none">"</span>
              <div className="relative z-10">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: item.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-body text-foreground/80 mb-6 text-sm leading-relaxed">{item.quote}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-heading font-semibold text-foreground">{item.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{item.tour}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

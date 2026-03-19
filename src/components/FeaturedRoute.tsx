import featuredRoute from "@/assets/featured-route.jpg";
import { Mountain, Route, Compass, Flame } from "lucide-react";

const FeaturedRoute = () => {
  return (
    <section id="featured" className="bg-surface py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Image - 60% */}
          <div className="lg:col-span-3 relative">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0 100%)' }}>
              <img src={featuredRoute} alt="Featured canyon river crossing route" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/40" />
            </div>
          </div>

          {/* Details - 40% */}
          <div className="lg:col-span-2 flex flex-col justify-center py-12 lg:pl-8">
            <span className="inline-block font-mono text-xs tracking-[0.3em] text-gold bg-gold/10 px-3 py-1 self-start mb-4 border border-gold/30">
              ★ SIGNATURE ROUTE
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4">CANYON<br />RIVER RUN</h2>
            <p className="font-body text-muted-foreground mb-8 text-lg leading-relaxed">
              Cross rivers, navigate canyon walls, and camp under stars on this legendary 6-day expedition through untouched wilderness.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Mountain, label: "Elevation", value: "2,400m" },
                { icon: Route, label: "Distance", value: "380 km" },
                { icon: Compass, label: "Terrain", value: "Canyon/River" },
                { icon: Flame, label: "Difficulty", value: "EXTREME" },
              ].map((item) => (
                <div key={item.label} className="border-l-4 border-primary pl-3">
                  <item.icon className="w-4 h-4 text-primary mb-1" />
                  <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-heading text-lg text-foreground font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6">
              <span className="font-display text-4xl text-primary">$599</span>
              <button className="bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase px-8 py-4 hover:scale-[1.02] transition-transform">
                BOOK THIS ROUTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRoute;

import { ChevronRight } from "lucide-react";

const FeatureStrip = () => {
  return (
    <section className="bg-surface border-y border-border py-16 checkered-accent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">
              // BUILD YOUR ADVENTURE
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              CUSTOMIZE YOUR TOURS
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-md">
              Choose your bike, route, pace, and crew — we build the ride around you.
            </p>
          </div>

          <div className="flex md:justify-end">
            <a
              href="#tours"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-heading text-lg font-bold uppercase tracking-wider px-8 py-5 border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 -skew-x-3"
            >
              <span className="skew-x-3">START CUSTOMIZING</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform skew-x-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;

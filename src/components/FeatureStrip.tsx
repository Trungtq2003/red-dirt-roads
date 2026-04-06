import { ChevronRight } from "lucide-react";

const FeatureStrip = () => {
  return (
    <section className="bg-surface border-y border-border py-16 track-border-top track-border-bottom checkered-accent">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left — Title & Description */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-primary mb-2">
              // BUILD YOUR ADVENTURE
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              CUSTOMIZE YOUR TOURS
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-md">
              Choose your bike, route, pace, and crew — we build the ride around you.
              From single-day dirt tracks to multi-week mountain expeditions, every detail is yours to shape.
            </p>
          </div>

          {/* Right — Bold CTA Button */}
          <div className="flex md:justify-end">
            <a
              href="#tours"
              className="group relative inline-flex items-center gap-4 bg-primary text-primary-foreground font-heading text-lg md:text-xl font-bold uppercase tracking-wider px-10 py-6 border-2 border-primary hover:bg-transparent hover:text-primary transition-all duration-300 skew-x-[-3deg]"
            >
              {/* Tire-track accent line */}
              <span className="absolute -top-1 -left-1 w-full h-1 bg-accent skew-x-[6deg]" />

              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10 fill-current shrink-0"
                aria-hidden="true"
              >
                {/* Stylised dirt-bike wheel */}
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                <circle cx="20" cy="20" r="4" fill="currentColor" />
                {/* Spokes */}
                <line x1="20" y1="2" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
                <line x1="20" y1="30" x2="20" y2="38" stroke="currentColor" strokeWidth="1.5" />
                <line x1="2" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" />
                <line x1="30" y1="20" x2="38" y2="20" stroke="currentColor" strokeWidth="1.5" />
              </svg>

              <span className="skew-x-[3deg]">START CUSTOMIZING</span>

              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform skew-x-[3deg]" />

              {/* Bottom accent */}
              <span className="absolute -bottom-1 -right-1 w-2/3 h-1 bg-accent skew-x-[6deg]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureStrip;

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import SignUpModal from "@/components/SignUpModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl text-foreground tracking-wider">WILDTRACK</a>

        <div className="hidden md:flex items-center gap-8">
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 font-heading text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              Motorbike Tours
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-card border border-border shadow-lg z-50">
                <a href="#tours" onClick={() => setDropdownOpen(false)} className="block px-5 py-3 font-heading text-sm uppercase tracking-wider text-foreground hover:text-primary hover:bg-muted/50 transition-colors">
                  🏍️ Dirtbikes
                </a>
                <a href="#tours" onClick={() => setDropdownOpen(false)} className="block px-5 py-3 font-heading text-sm uppercase tracking-wider text-foreground hover:text-primary hover:bg-muted/50 transition-colors border-t border-border">
                  🔥 Big Bikes
                </a>
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="font-heading text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
          <Globe className="w-4 h-4 text-muted-foreground" />
          <a href="#tours" className="bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase px-5 py-2 hover:scale-[1.02] transition-transform">
            BOOK NOW
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="flex items-center gap-2 font-heading text-lg uppercase tracking-wider text-foreground hover:text-primary transition-colors w-full"
              >
                Motorbike Tours
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdownOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-primary pl-4">
                  <a href="#tours" onClick={() => { setOpen(false); setMobileDropdownOpen(false); }} className="font-heading text-base uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                    🏍️ Dirtbikes
                  </a>
                  <a href="#tours" onClick={() => { setOpen(false); setMobileDropdownOpen(false); }} className="font-heading text-base uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                    🔥 Big Bikes
                  </a>
                </div>
              )}
            </div>

            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-heading text-lg uppercase tracking-wider text-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
            <div className="py-2"><Globe className="w-4 h-4 text-muted-foreground" /></div>
            <a href="#tours" className="bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase px-5 py-3 text-center mt-2">
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

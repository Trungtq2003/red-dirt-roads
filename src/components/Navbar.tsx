import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const navItems = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-2xl text-foreground tracking-wider">WILDTRACK</a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="font-heading text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <a href="#tours" className="bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase px-5 py-2 hover:scale-[1.02] transition-transform">
            {t.nav.bookNow}
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-heading text-lg uppercase tracking-wider text-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
            <div className="py-2"><LanguageSwitcher /></div>
            <a href="#tours" className="bg-primary text-primary-foreground font-heading text-sm tracking-wider uppercase px-5 py-3 text-center mt-2">
              {t.nav.bookNow}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

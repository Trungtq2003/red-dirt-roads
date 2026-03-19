import { Instagram, Youtube, Facebook, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-display text-3xl text-foreground mb-2">WILDTRACK</h3>
            <p className="font-mono text-xs text-muted-foreground tracking-wider">{t.footer.tagline.split("//")[0]}// {t.footer.tagline.split("//").slice(1).join("//").trim()}</p>
          </div>

          <div>
            <h5 className="font-heading font-semibold text-foreground uppercase tracking-wider mb-4 text-sm">{t.footer.explore}</h5>
            <ul className="space-y-2 font-body text-muted-foreground text-sm">
              <li><a href="#tours" className="hover:text-primary transition-colors">{t.footer.allTours}</a></li>
              <li><a href="#featured" className="hover:text-primary transition-colors">{t.footer.featuredRoutes}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.customTrips}</a></li>
              <li><a href="#group-tours" className="hover:text-primary transition-colors">{t.footer.groupRides}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-semibold text-foreground uppercase tracking-wider mb-4 text-sm">{t.footer.info}</h5>
            <ul className="space-y-2 font-body text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.aboutUs}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.ourBikes}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.safetyGear}</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">{t.footer.faqs}</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-heading font-semibold text-foreground uppercase tracking-wider mb-4 text-sm">{t.footer.connect}</h5>
            <div className="flex gap-4">
              {[Instagram, Youtube, Facebook, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-muted-foreground">{t.footer.copyright}</p>
          <p className="font-mono text-xs text-muted-foreground">{t.footer.locations}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

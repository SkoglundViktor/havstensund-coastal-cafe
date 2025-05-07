
import { Link } from "react-router-dom";
import { Anchor, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/translations/translations";
import './Footer.css'

export function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-coastal-deep-blue text-white">
      <div className="wave-bg h-12"></div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Anchor className="h-6 w-6 mr-2" />
              <span className="text-xl font-display font-bold">Skaldjurscaféet</span>
            </Link>
            <p className="text-sm opacity-80">
              {t.footerTagline}
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-4">{t.contactTitle}</h4>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <span>Sjövägen 43, 45773 Havstenssund</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+46706484748" className="hover:underline">
                  +46 70 648 47 48
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-bold mb-4">{t.openingHours}</h4>
            <div className="grid grid-cols-2 gap-1">
              <span className="opacity-80">{t.mondayFriday}</span>
              <span className="opacity-80">{t.saturdaySunday}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6">
          <p className="text-sm opacity-70 text-center">
            © {currentYear} Skaldjurscaféet. {t.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
}

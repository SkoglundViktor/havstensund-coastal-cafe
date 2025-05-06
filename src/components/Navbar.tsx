
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Anchor, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, LanguageCode } from "@/contexts/LanguageContext";
import { getTranslations } from "@/translations/translations";

// Language options with flag codes and display names
const languages = [
  { code: "se", flag: "🇸🇪", name: "Svenska" },
  { code: "no", flag: "🇳🇴", name: "Norsk" },
  { code: "dk", flag: "🇩🇰", name: "Dansk" },
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "de", flag: "🇩🇪", name: "Deutsch" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = getTranslations(language);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleLanguageChange = (code: LanguageCode) => {
    setLanguage(code);
  };

  // Find the current language object
  const currentLangObj = languages.find(lang => lang.code === language) || languages[0];

  return (
    <header className="relative z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Anchor className="h-8 w-8 text-coastal-deep-blue mr-2" />
          <span className="text-2xl font-display font-bold text-coastal-cliff">
            Skaldjurscaféet
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-coastal-deep-blue transition-colors">
            {t.home}
          </Link>
          <Link to="/menu" className="font-medium hover:text-coastal-deep-blue transition-colors">
            {t.menu}
          </Link>
          <Link to="/about" className="font-medium hover:text-coastal-deep-blue transition-colors">
            {t.about}
          </Link>
          <Link to="/contact" className="font-medium hover:text-coastal-deep-blue transition-colors">
            {t.contact}
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <span className="text-lg mr-1">{currentLangObj.flag}</span>
                <span>{currentLangObj.code.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as LanguageCode)}
                  className={`flex items-center space-x-2 ${
                    language === lang.code ? "font-bold bg-coastal-light-blue/30" : ""
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center mr-2">
                <span className="text-lg mr-1">{currentLangObj.flag}</span>
                <span>{currentLangObj.code.toUpperCase()}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code as LanguageCode)}
                  className={`flex items-center space-x-2 ${
                    language === lang.code ? "font-bold bg-coastal-light-blue/30" : ""
                  }`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <Link
              to="/"
              className="block py-2 text-lg font-medium hover:text-coastal-deep-blue"
              onClick={toggleMenu}
            >
              {t.home}
            </Link>
            <Link
              to="/menu"
              className="block py-2 text-lg font-medium hover:text-coastal-deep-blue"
              onClick={toggleMenu}
            >
              {t.menu}
            </Link>
            <Link
              to="/about"
              className="block py-2 text-lg font-medium hover:text-coastal-deep-blue"
              onClick={toggleMenu}
            >
              {t.about}
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-lg font-medium hover:text-coastal-deep-blue"
              onClick={toggleMenu}
            >
              {t.contact}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

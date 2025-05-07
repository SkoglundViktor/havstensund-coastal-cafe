
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/translations/translations";

export function AboutPreview() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {t.aboutTitle}
            </h2>
            <p className="text-gray-700 mb-4">
              {t.aboutParagraph1}
            </p>
            <p className="text-gray-700 mb-6">
              {t.aboutParagraph2}
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-coastal-deep-blue text-coastal-deep-blue hover:bg-coastal-light-blue">
                {t.readMore}
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
              <img 
                src="./Solnedgång.jpg"
                alt="Havstensund strandlinje"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-1/2 aspect-square rounded-lg overflow-hidden border-4 border-white shadow-lg hidden md:block">
              <img 
                src="./uteplats.jpg"
                alt="Fiskehamn i Havstensund" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

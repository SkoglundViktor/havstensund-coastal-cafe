
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/translations/translations";

export function ContactInfo() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          {t.findUsTitle}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {t.findUsParagraph}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-coastal-light-blue rounded-full flex items-center justify-center mb-4">
              <MapPin className="h-7 w-7 text-coastal-deep-blue" />
            </div>
            <p className="text-gray-600">Sjövägen 43</p>
            <p className="text-gray-600">45773 Havstenssund</p>
            <a 
              href="https://maps.google.com/?q=Sjovägen+43+45773+Havstenssund" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-coastal-deep-blue hover:underline mt-2"
            >
              {t.showOnMap}
            </a>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
        <CardContent className="p-6 flex flex-col items-center justify-center text-center">

            <div className="w-14 h-14 bg-coastal-light-blue rounded-full flex items-center justify-center mb-4">
              <Phone className="h-7 w-7 text-coastal-deep-blue" />
            </div>
             
            
            
            <p className="text-gray-600 mb-2">{t.phone}</p>
            <a 
              href="tel:+46706484748" 
              className="text-coastal-deep-blue hover:underline font-medium"
            >
              +46 70 648 47 48
            </a>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-coastal-light-blue rounded-full flex items-center justify-center mb-4">
              <Clock className="h-7 w-7 text-coastal-deep-blue" />
            </div>
            <div className="text-gray-600">
              <div className="grid grid-cols-2 gap-x-2 text-center flex flex-col items-center text-center">
                <span>{t.mondayFriday}</span>
                <span>{t.saturdaySunday}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="mt-10 rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.3817841285177!2d11.17523!3d58.753661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4645c83aa61f6a7d%3A0x4019078290e7a80!2sSj%C3%B6v%C3%A4gen%2043%2C%20457%2073%20Havstensund!5e0!3m2!1sen!2sse!4v1698756212452!5m2!1sen!2sse"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Skaldjurscaféet location"
        ></iframe>
      </div>
    </section>
  );
}


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function AboutPreview() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Om Skaldjurscaféet
            </h2>
            <p className="text-gray-700 mb-4">
              Sedan 2005 har vi serverat det bästa från havet i vår restaurang i Havstensund. 
              Med havet som närmsta granne och ett personligt engagemang för kvalitet har vi 
              blivit en älskad destination för både lokalbefolkningen och turister.
            </p>
            <p className="text-gray-700 mb-6">
              Våra skaldjur kommer direkt från lokala fiskare och tillagas med omsorg för att bevara 
              de naturliga smakerna. Här kan du njuta av en genuin smak av västkusten i en 
              avslappnad och vacker miljö.
            </p>
            <Link to="/about">
              <Button variant="outline" className="border-coastal-deep-blue text-coastal-deep-blue hover:bg-coastal-light-blue">
                Läs mer om oss
              </Button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Havstensund strandlinje"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-1/2 aspect-square rounded-lg overflow-hidden border-4 border-white shadow-lg hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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

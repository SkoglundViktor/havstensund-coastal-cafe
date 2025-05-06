
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-32">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Välkommen till Skaldjurscaféet
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 drop-shadow-md">
            Upplev det bästa av västkustens skaldjur i vår mysiga restaurang i 
            hjärtat av Havstensund.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/menu">
              <Button size="lg" className="bg-coastal-blue hover:bg-coastal-deep-blue">
                Se vår meny
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white/90 hover:bg-white">
                <MapPin className="mr-2 h-5 w-5" /> Hitta hit
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-24">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="white"></path>
        </svg>
      </div>
    </section>
  );
}

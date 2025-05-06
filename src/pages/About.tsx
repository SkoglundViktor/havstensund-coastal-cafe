
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative overflow-hidden mb-10">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            filter: "brightness(0.7)" 
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg text-center">
            Om oss
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto text-center drop-shadow-md">
            Lär känna historien bakom Skaldjurscaféet och vår passion för god mat och lokal tradition
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="white"></path>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          <div>
            <h2 className="font-display text-3xl font-bold mb-4">Vår Historia</h2>
            <p className="text-gray-700 mb-4">
              Skaldjurscaféet grundades 2005 av syskonen Lisa och Erik Lindgren, som båda är uppvuxna i Havstensund och har en djup 
              kärlek till havet och den lokala matkulturen. Med erfarenheter från restaurangbranschen och en passion för färska, 
              lokala råvaror, öppnade de ett litet café som erbjöd enkla men smakrika skaldjursrätter.
            </p>
            <p className="text-gray-700 mb-4">
              Genom åren har Skaldjurscaféet vuxit från ett enkelt café till en älskad restaurang som bevarar den 
              genuina känslan och starka kopplingen till det lokala fiskesamhället. Vi är stolta över att kunna 
              erbjuda en autentisk smakupplevelse av västkustens rikedomar.
            </p>
            <p className="text-gray-700">
              Idag drivs verksamheten av Erik tillsammans med hans fru Maria, som med sin kärlek till god mat och 
              högklassig service fortsätter att göra Skaldjurscaféet till en av västkustens gastronomiska pärlor.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Havstensund fiskehamn" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
        
        <div className="bg-coastal-light-blue/30 py-12 px-6 md:px-10 rounded-lg mb-16">
          <h2 className="font-display text-3xl font-bold mb-6 text-center">Vår Filosofi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coastal-deep-blue">
                  <path d="M12 13V2l8 4-8 4"></path>
                  <path d="M20.55 10.23A9 9 0 1 1 8 4.94"></path>
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium mb-2">Hållbarhet</h3>
              <p className="text-gray-600">
                Vi arbetar bara med lokala fiskare som använder hållbara fiskemetoder och respekterar havet och dess resurser.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coastal-deep-blue">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium mb-2">Närproducerat</h3>
              <p className="text-gray-600">
                Våra råvaror kommer från lokala producenter och fisket sker i närliggande vatten för att garantera färskhet och kvalitet.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coastal-deep-blue">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium mb-2">Kvalitet</h3>
              <p className="text-gray-600">
                Vi kompromissar aldrig med kvaliteten och strävar alltid efter att servera de absolut fräschaste och godaste rätterna.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-6 text-center">Vårt Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 border-4 border-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Erik Lindgren"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-medium">Erik Lindgren</h3>
              <p className="text-coastal-deep-blue mb-2">Grundare & Köksmästare</p>
              <p className="text-gray-600">
                Med över 25 års erfarenhet av matlagning har Erik en unik känsla för de lokala råvarorna och västkustens smaker.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 border-4 border-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Maria Lindgren"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-medium">Maria Lindgren</h3>
              <p className="text-coastal-deep-blue mb-2">Restaurangchef</p>
              <p className="text-gray-600">
                Maria skapar den varma och välkomnande atmosfären i restaurangen och ser till att varje gäst känner sig som hemma.
              </p>
            </div>
            <div className="text-center">
              <div className="aspect-square rounded-full overflow-hidden w-48 h-48 mx-auto mb-4 border-4 border-white shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80"
                  alt="Thomas Berg"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-display text-xl font-medium">Thomas Berg</h3>
              <p className="text-coastal-deep-blue mb-2">Kock</p>
              <p className="text-gray-600">
                Thomas kreativa matlagningsstil och passion för skaldjur tillför nya spännande dimensioner till våra klassiska rätter.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;

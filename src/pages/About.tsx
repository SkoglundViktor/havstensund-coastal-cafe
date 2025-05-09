
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/translations/translations";

const About = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  
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
            {t.aboutUsTitle}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto text-center drop-shadow-md">
            {t.aboutUsSubtitle}
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
            <h2 className="font-display text-3xl font-bold mb-4">{t.ourHistoryTitle}</h2>
            <p className="text-gray-700 mb-4">
              {t.ourHistoryP1}
            </p>
            <p className="text-gray-700 mb-4">
              {t.ourHistoryP2}
            </p>
            <p className="text-gray-700">
              {t.ourHistoryP3}
            </p>
          </div>
          <div className="relative lg:pl-[200px]" >
            <img 
              src="./uteplats.jpg" 
              alt="Havstensund fiskehamn" 
              className="rounded-lg shadow-md max-h-[400px] "
            />
          </div>
        </div>
        
        <div className="bg-coastal-light-blue/30 py-12 px-6 md:px-10 rounded-lg mb-16">
          <h2 className="font-display text-3xl font-bold mb-6 text-center">{t.ourPhilosophyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coastal-deep-blue">
                  <path d="M12 13V2l8 4-8 4"></path>
                  <path d="M20.55 10.23A9 9 0 1 1 8 4.94"></path>
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium mb-2">{t.sustainabilityTitle}</h3>
              <p className="text-gray-600">
                {t.sustainabilityText}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coastal-deep-blue">
                  <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium mb-2">{t.localProduceTitle}</h3>
              <p className="text-gray-600">
                {t.localProduceText}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coastal-deep-blue">
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="font-display text-xl font-medium mb-2">{t.qualityTitle}</h3>
              <p className="text-gray-600">
                {t.qualityText}
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

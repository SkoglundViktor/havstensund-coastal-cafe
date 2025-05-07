import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/translations/translations";

const Menu = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  
  const menuCategories = [
    {
      id: "starters",
      title: t.menuPageTitle,
      items: [
        {
          name: t.lobsterRollName,
          description: t.lobsterRollDescription,
          price: "149 kr",
        },
        {
          name: t.bruschettaName,
          description: t.bruschettaDescription,
          price: "119 kr",
        },
        {
          name: t.cevicheName,
          description: t.cevicheDescription,
          price: "139 kr",
        },
      ],
    },
    {
      id: "Till de små",
      title: t.drinks,  // Detta kommer vara översatt till "Till de små" på svenska och "Til de små" på norska
      items: [
        {
          name: t.friedChicken,  // Översätt namnet på rätten till svenska och norska
          description: t.friedChickenDescription,  // Översätt beskrivningen på rätten
          price: "129 kr",
        },
        {
          name: t.pancakes,  // Översätt namnet på rätten till svenska och norska
          description: t.pancakesDescription,  // Översätt beskrivningen på rätten
          price: "69 kr",
        },
      ],
    },
    {
      id: "mains",
      title: t.mains, // Det här kommer att vara "Huvudrätter" på svenska, "Hovedretter" på norska, "Hovedretter" på danska, "Mains" på engelska och "Hauptgerichte" på tyska
      items: [
        {
          name: t.fishAndChips, // Översatt till korrekt språk
          description: t.fishAndChipsDescription, // Översatt till korrekt språk
          price: "199 kr",
        },
        {
          name: t.fishSoup,
          description: t.fishSoupDescription,
          price: "249 kr",
        },
        {
          name: t.havstenssundBox,
          description: t.havstenssundBoxDescription,
          price: "275 kr",
        },
        {
          name: t.caesarSalad,
          description: t.caesarSaladDescription,
          price: "199/199/229 kr", // Om detta pris beror på vilken variant du väljer kan du justera det
        },
        {
          name: t.shrimpSandwich,
          description: t.shrimpSandwichDescription,
          price: "249 kr",
        },
        {
          name: t.burger,
          description: t.burgerDescription,
          price: "229 kr",
        },
        {
          name: t.steakFrites,
          description: t.steakFritesDescription,
          price: "298 kr",
        },
      ],
    },
    {
      id: "desserts",
      title: t.desserts, // Det här kommer att vara "Desserter" på svenska, "Desserter" på norska, "Desserter" på danska, "Desserts" på engelska och "Nachtisch" på tyska
      items: [
        {
          name: t.cremeBrulee,
          description: t.cremeBruleeDescription,
          price: "99 kr",
        },
        {
          name: t.brownie,
          description: t.brownieDescription,
          price: "99 kr",
        },
        {
          name: t.etonMess,
          description: t.etonMessDescription,
          price: "95 kr",
        },
        {
          name: t.iceCream,
          description: t.iceCreamDescription,
          price: "39 kr/kula",
        },
      ],
    }
    
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative overflow-hidden mb-10">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            filter: "brightness(0.7)" 
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg text-center">
            {t.menuPageTitle}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto text-center drop-shadow-md">
            {t.menuPageSubtitle}
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="white"></path>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6 mb-10">
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          {t.menuDescription}
        </p>
        
        {menuCategories.map((category) => (
          <section key={category.id} className="mb-14" id={category.id}>
            <h2 className="font-display text-3xl font-bold mb-6 text-center md:text-left">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, index) => (
                <div key={index} className="p-4 border-b border-gray-100">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-display font-bold text-xl">{item.name}</h3>
                    <span className="text-coastal-deep-blue font-medium">{item.price}</span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="bg-coastal-light-blue/50 p-6 rounded-lg mt-10">
          <p className="text-center text-gray-700">
            <strong>{t.allergiesNote}</strong>
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Menu;

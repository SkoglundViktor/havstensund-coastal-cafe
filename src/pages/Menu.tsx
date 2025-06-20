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
          name: t.SkagenRollName,
          description: t.SkagenRollDescription,
          price: "159 kr",
        },
        {
          name: t.CharkChipsName,
          description: t.CharkChipsDescription,
          price: "139 kr",
        },
        {
          name: t.RöktaRäkorName,
          description: t.RöktaRäkorDescription,
          price: "139 kr",
        },
        {
          name: t.CapreseName,
          description: t.CapreseDescription,
          price: "139 kr",
        },
      ],
    },
    {
      id: "mains",
      title: t.mains, // Det här kommer att vara "Huvudrätter" på svenska, "Hovedretter" på norska, "Hovedretter" på danska, "Mains" på engelska och "Hauptgerichte" på tyska
      items: [
        {
          name: t.fishSoup,
          description: t.fishSoupDescription,
          price: "259 kr",
        },
        {
          name: t.havstenssundBox,
          description: t.havstenssundBoxDescription,
          price: "299kr",
        },
        {
          name: t.fishAndChips, // Översatt till korrekt språk
          description: t.fishAndChipsDescription, // Översatt till korrekt språk
          price: "199 kr",
        },
        {
          name: t.shrimpSandwich,
          description: t.shrimpSandwichDescription,
          price: "255 kr",
        },
        {
          name: t.caesarSalad,
          description: t.caesarSaladDescription,
          price: "199/199/229 kr", // Om detta pris beror på vilken variant du väljer kan du justera det
        },
        {
          name: t.burger,
          description: t.burgerDescription,
          price: "229 kr",
        },
        {
          name: t.TodaysCatch,
          description: t.TodaysCatchDescription,
          price: "249 kr",
        },
      ],
    },
    {
      id: "Till de små",
      title: t.drinks, // Översatt till "Till de små" på svenska och "Til de små" på norska
      items: [
        {
          name: t.friedChicken, // Översätt namnet på rätten till svenska och norska
          description: t.friedChickenDescription, // Översätt beskrivningen på rätten
          price: "129 kr",
        },
        {
          name: t.pancakes, // Översätt namnet på rätten till svenska och norska
          description: t.pancakesDescription, // Översätt beskrivningen på rätten
          price: "69 kr",
        },
      ],
    },
    {
      id: "desserts",
      title: t.desserts, // Det här kommer att vara "Desserter" på svenska, "Desserter" på norska, "Desserter" på danska, "Desserts" på engelska och "Nachtisch" på tyska
      items: [
        {
          name: t.Pavlova,
          description: t.PavlovaDescription,
          price: "99 kr",
        },
        {
          name: t.brownie,
          description: t.brownieDescription,
          price: "99 kr",
        },
        {
          name: t.Gelato,
          description: t.GelatoDescription,
          price: "95 kr",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="relative overflow-hidden mb-10">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('./uteplats.jpg')",
            filter: "brightness(0.7)",
            backgroundSize: "cover", // Gör bilden responsiv
            backgroundPosition: "center center", // Centrerar bilden
            minHeight: "50vh", // Sätt minsta höjd till 50% av viewport-höjden
            maxWidth: "100%",
            padding: "0px",
            margin: "0px"
          }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 py-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg text-center">
            {t.menuPage}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto text-center drop-shadow-md">
            {t.menuPageSubtitle}
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
              fill="white"
            ></path>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {category.items.map((item, index) => (
                <div key={index} className="p-4 border-b border-gray-100">
                  <div className="flex flex-col justify-center items-center">

                    
                  <h3 className="font-bold text-[20px] pb-[10px]"> {item.name}</h3>
                  
                   

                  <p className="text-gray-600">{item.description}</p>
                  </div>
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

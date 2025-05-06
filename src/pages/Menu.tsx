
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const menuCategories = [
  {
    id: "starters",
    title: "Förrätter",
    items: [
      {
        name: "Skagen på hembakt bröd",
        description: "Handskalade räkor med dill, majonnäs och löjrom på hembakat bröd",
        price: "145 kr",
      },
      {
        name: "Ostron",
        description: "Färska ostron från närliggande vatten, serveras med citron och schalottenlök i rödvinsvinäger",
        price: "35 kr/st eller 195 kr/6 st",
      },
      {
        name: "Fisksoppa",
        description: "Krämig soppa med dagens fångst, saffran och aioli",
        price: "165 kr",
      },
    ],
  },
  {
    id: "mains",
    title: "Huvudrätter",
    items: [
      {
        name: "Skaldjursplatå",
        description: "Havets läckerheter på ett fat med hummer, krabba, räkor och ostron",
        price: "375 kr",
      },
      {
        name: "Fisk- och skaldjursgryta",
        description: "Dagens fisk, musslor, räkor och grönsaker i krämig tomat- och saffransbaserad sås",
        price: "245 kr",
      },
      {
        name: "Halstrad hälleflundra",
        description: "Serveras med potatispuré, smörstekta havskräftor och brynt smör",
        price: "275 kr",
      },
      {
        name: "Räksmörgås",
        description: "Klassisk smörgås med handskalade räkor på hembakat bröd",
        price: "195 kr",
      },
      {
        name: "Moules Frites",
        description: "Blåmusslor kokta i vitt vin, vitlök och grädde. Serveras med pommes frites och aioli",
        price: "215 kr",
      },
    ],
  },
  {
    id: "desserts",
    title: "Efterrätter",
    items: [
      {
        name: "Crème Brûlée",
        description: "Krämig vaniljcrème med knäckigt sockerlock",
        price: "95 kr",
      },
      {
        name: "Chokladfondant",
        description: "Varm chokladfondant med hjärtformad vit chokladtryffel och bärcoulis",
        price: "105 kr",
      },
      {
        name: "Bärpaj",
        description: "Säsongens färska bär i en hembakad smörpaj, serveras med vaniljglass",
        price: "95 kr",
      },
    ],
  },
  {
    id: "drinks",
    title: "Drycker",
    items: [
      {
        name: "Husets vita vin",
        description: "Friskt vin med inslag av gröna äpplen och citrus",
        price: "95 kr/glas, 375 kr/flaska",
      },
      {
        name: "Husets röda vin",
        description: "Medelfylligt vin med inslag av mörka bär och örter",
        price: "95 kr/glas, 375 kr/flaska",
      },
      {
        name: "Lokal öl",
        description: "Olika sorters öl från lokala bryggerier",
        price: "85 kr",
      },
      {
        name: "Alkoholfri cider",
        description: "Frisk och fruktig äppelcider",
        price: "55 kr",
      },
      {
        name: "Kaffe",
        description: "Ekologiskt bryggkaffe",
        price: "35 kr",
      },
    ],
  },
];

const Menu = () => {
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
            Vår Meny
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto text-center drop-shadow-md">
            Tillagad med kärlek och de färskaste råvarorna från havet och lokala producenter
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
          Vår meny ändras efter säsong och tillgång, men nedan finner du ett urval av våra mest populära rätter. 
          Alla skaldjur serveras med bröd, citron, aioli och tillbehör.
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
            <strong>Allergier eller specialkost?</strong> Informera vår personal så hjälper vi dig med alternativ.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Menu;

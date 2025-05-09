import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/translations/translations";

const dishes = [
  {
    id: 1,
    name: "Havstenssundlåda",
    description:
      "Havets läckerheter på ett fat med hummer, krabba, räkor och ostron",
    image:
      "./Havstenssundlånda.jpg",
    price: "375 kr",
  },
  {
    id: 2,
    name: "Fisksoppa",
    description: "Krämig soppa med dagens fångst, saffran och aioli",
    image: "./fisksoppa.WEBP",
    price: "165 kr",
  },
  {
    id: 3,
    name: "Räkmacka",
    description: "Klassisk smörgås med handskalade räkor på hembakat bröd",
    image:
      "./Räkmacka.jpg",
    price: "195 kr",
  },
];

export function FeaturedDishes() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <section className="container mx-auto px-4 py-16">
  <div className="text-center mb-10">
    <div className="flex justify-center flex-column">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 m-0">
        {t.featuredTitle}
      </h2>
    </div>
    <p className="text-gray-600 max-w-2xl mx-auto">{t.featuredSubtitle}</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {dishes.map((dish) => (
      <Card
        key={dish.id}
        className="overflow-hidden hover:shadow-lg transition-shadow"
      >
        <div className="h-48 overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name}
            className={`w-full h-full object-cover transition-transform duration-500 
              ${dish.id === 1 ? "" : ""} 
              ${dish.id === 2 ? "object-[center_17%]" : ""}
              ${dish.id === 3 ? "object-[center_45%]" : ""}
            `}
          />
        </div>

        <CardContent className="p-6 pt-0">
          <div className="relative h-20 w-full mb-1 p-0">  {/* Justera mb här för att minska avståndet till bilden */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="font-display text-xl font-bold m-0 mb-0">
                {dish.name}
              </h3>
            </div>
          </div>

          {/* Beskrivning */}
          <p className="text-gray-600 mb-2 mt-0 leading-none">{dish.description}</p>
        </CardContent>
      </Card>
    ))}
  </div>

  <div className="text-center mt-10">
    <Link to="/menu">
      <Button
        size="lg"
        className="bg-coastal-blue hover:bg-coastal-deep-blue"
      >
        {t.viewFullMenu}
      </Button>
    </Link>
  </div>
</section>


  );
}

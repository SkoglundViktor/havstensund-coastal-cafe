
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const dishes = [
  {
    id: 1,
    name: "Skaldjursplatå",
    description: "Havets läckerheter på ett fat med hummer, krabba, räkor och ostron",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: "375 kr",
  },
  {
    id: 2,
    name: "Fisksoppa",
    description: "Krämig soppa med dagens fångst, saffran och aioli",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: "165 kr",
  },
  {
    id: 3,
    name: "Räksmörgås",
    description: "Klassisk smörgås med handskalade räkor på hembakat bröd",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    price: "195 kr",
  },
];

export function FeaturedDishes() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Våra Specialiteter
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Vi serverar färska skaldjur från västkusten, fångade med respekt för havet och 
          tillagade med passion för god mat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-xl font-bold">{dish.name}</h3>
                <span className="font-medium text-coastal-deep-blue">{dish.price}</span>
              </div>
              <p className="text-gray-600 mb-4">{dish.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Link to="/menu">
          <Button size="lg" className="bg-coastal-blue hover:bg-coastal-deep-blue">
            Se hela menyn
          </Button>
        </Link>
      </div>
    </section>
  );
}

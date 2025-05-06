
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeaturedDishes } from "@/components/FeaturedDishes";
import { AboutPreview } from "@/components/AboutPreview";
import { ContactInfo } from "@/components/ContactInfo";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <AboutPreview />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Index;

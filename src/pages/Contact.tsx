import { useState, ChangeEvent, FormEvent } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/translations/translations";
import emailjs from '@emailjs/browser'; // Lägg till detta för EmailJS

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const { language } = useLanguage();
  const t = getTranslations(language);
  
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Använd EmailJS för att skicka formulärdata
      const result = await emailjs.send(
        "service_df91cyq",      // Service ID
        "template_3ep8c0e",     // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "eankGItpq-3Pqxb86"     // Public Key
      );

      // Visa toast vid lyckad skickning
      toast({
        title: t.messageSent,
        description: t.messageSentDescription,
      });

      // Nollställ formuläret efter lyckad skickning
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      // Visa toast vid fel
      toast({
        title: error,
        description: (error as Error).message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="relative overflow-hidden mb-10">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
            filter: "brightness(0.7)" 
          }}
        ></div>
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg text-center">
            {t.contact}
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto text-center drop-shadow-md">
            {t.findUsParagraph}
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="white"></path>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">{t.contactTitle}</h2>
            
            <div className="space-y-5 mb-8">
              <div className="flex items-center">
                <div className="bg-coastal-light-blue rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-coastal-deep-blue" />
                </div>
                <div>
                 
                  <p className="text-gray-700">Sjövägen 43, 45773 Havstenssund</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-coastal-light-blue rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-coastal-deep-blue" />
                </div>
                <div>
                  
                  <p className="text-gray-700">
                    <a href="tel:+46706484748" className="hover:text-coastal-deep-blue">+46 70 648 47 48</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-coastal-light-blue rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-coastal-deep-blue" />
                </div>
                <div>
                  
                  <p className="text-gray-700">
                    <a href="mailto:info@skaldjurscafeet.se" className="hover:text-coastal-deep-blue">info@skaldjurscafeet.se</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-coastal-light-blue rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-coastal-deep-blue" />
                </div>
                <div>
                 
                  <div className="text-gray-700">
                    <div className="grid grid-cols-2 gap-x-2">
                      <span>{t.mondayFriday}</span>
                      {/*<span>{t.saturdaySunday}</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2182.3817841285177!2d11.17523!3d58.753661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4645c83aa61f6a7d%3A0x4019078290e7a80!2sSj%C3%B6v%C3%A4gen%2043%2C%20457%2073%20Havstensund!5e0!3m2!1sen!2sse!4v1698756212452!5m2!1sen!2sse"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Skaldjurscaféet location"
              ></iframe>
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-3xl font-bold mb-6">{t.sendMessage}</h2>
            <p className="text-gray-600 mb-6">
              {t.contactFormInfo}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">
                  {t.name}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder={t.name}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block font-medium mb-1">
                  {t.email}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                  placeholder={t.email}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block font-medium mb-1">
                  {t.messageLabel}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                  placeholder={t.messageLabel}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-coastal-deep-blue hover:bg-coastal-blue"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.sending : t.submitButton}
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;

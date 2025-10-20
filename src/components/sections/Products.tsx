import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wheat, CheckCircle, Star, Sparkles } from "lucide-react";
import poroto1 from "@/assets/poroto1.jpg";
import poroto2 from "@/assets/poroto2.jpeg";
import poroto3 from "@/assets/poroto3.jpg";
import granos2 from "@/assets/granos2.jpeg";
import maiz from "@/assets/maiz.jpeg";
import garbanzo from "@/assets/garbanzo.jpg";
import { useScrollAnimation, useMagneticHover } from "@/hooks/useScrollAnimation";
import { BeanVarietyCard } from "./BeanVarietyCard";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Products = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation(0.1);
  const { ref: qualityRef, isVisible: qualityVisible } = useScrollAnimation(0.2);
  const magneticRef = useMagneticHover();
  const { language } = useLanguage();
  const t = translations[language].products;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: t.soja,
      type: t.premium,
      description: t.sojaDesc,
      features: [t.qualityControl, t.certifications, t.globalExport],
      highlight: false,
      image: granos2
    },
    {
      name: t.maiz,
      type: t.premium,
      description: t.maizDesc,
      features: [t.rigorousSelection, t.globalMarkets, t.consistentQuality],
      highlight: false,
      image: maiz
    },
    {
      name: t.garbanzo,
      type: t.premium,
      description: t.garbanzoDesc,
      features: [t.premiumProcessing, t.highStandards, t.satisfactionGuarantee],
      highlight: false,
      image: garbanzo
    }
  ];

  const qualityPoints = [
    t.point1,
    t.point2,
    t.point3,
    t.point4
  ];

  return (
    <section id="productos" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef as any} className="text-center mb-16">
          <h2
            className={`font-heading font-bold text-4xl md:text-5xl text-primary mb-4 transition-all duration-1000 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {t.title}
          </h2>
          <div
            className={`w-24 h-1 bg-secondary mx-auto mb-6 transition-all duration-1000 delay-200 ${
              headerVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
            }`}
          ></div>
        </div>

        {/* Products Grid */}
        <div ref={productsRef as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 md:gap-8 lg:gap-10 mb-16">
          {/* Bean Variety Card - Interactive */}
          <div className={`${productsVisible ? 'opacity-100 translate-y-0 transition-all duration-700' : 'opacity-0 translate-y-8'}`}>
            <BeanVarietyCard />
          </div>
          
          {/* Other Products */}
          {products.map((product, index) => (
            <Card
            key={index}
            className={`relative transition-all duration-500 border-2 border-black/10 hover:border-secondary hover:shadow-elegant hover-lift hover:animate-glow-pulse overflow-hidden h-full flex flex-col ${
              productsVisible ? `opacity-100 translate-y-0 transition-all duration-700 delay-[${(index + 1) * 100}ms]` : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 opacity-10 transition-opacity duration-500 hover:opacity-15">
              <img
                src={product.image}
                alt={`${product.name} de alta calidad`}
                className="w-full h-full object-cover"
              />
            </div>

            <CardHeader className="pb-4 relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden border-2 border-primary/20">
                <img
                  src={product.image}
                  alt={`Icono ${product.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-center text-xl font-heading">
                {product.name}
              </CardTitle>
              <Badge variant="outline" className="w-fit mx-auto">
                {product.type}
              </Badge>
            </CardHeader>

            <CardContent className="pt-0 relative z-10 flex-grow flex flex-col">
              <p className="text-muted-foreground text-sm mb-4 text-center min-h-[60px]">
                {product.description}
              </p>
              <div className="space-y-2">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm transition-all duration-300">
                    <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12">
          <Button
            ref={magneticRef as any}
            onClick={() => scrollToSection('contacto')}
            className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6"
          >
            {t.btnRequest}
            <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wheat, CheckCircle, Star, Sparkles } from "lucide-react";
import poroto1 from "@/assets/poroto1.jpg";
import poroto2 from "@/assets/poroto2.jpeg";
import poroto3 from "@/assets/poroto3.jpg";
import granos2 from "@/assets/granos2.jpeg";
import granos4 from "@/assets/granos4.jpeg";
import garbanzo from "@/assets/garbanzo.jpg";
import { useScrollAnimation, useMagneticHover } from "@/hooks/useScrollAnimation";
import { BeanVarietyCard } from "./BeanVarietyCard";
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      name: "Soja",
      type: "Grano Premium",
      description: "Producida bajo estrictos estándares de calidad con control de trazabilidad desde el campo hasta su destino final.",
      features: ["Control de Calidad", "Certificaciones", "Exportación Global"],
      highlight: false,
      image: granos2
    },
    {
      name: "Maíz",
      type: "Grano Premium",
      description: "Seleccionado cuidadosamente para satisfacer las demandas de mercados exigentes en Latinoamérica y el resto del mundo.",
      features: ["Selección Rigurosa", "Mercados Globales", "Calidad Consistente"],
      highlight: false,
      image: granos4
    },
    {
      name: "Garbanzo",
      type: "Grano Premium",
      description: "Procesado con los más altos estándares para garantizar la máxima calidad y satisfacción del cliente.",
      features: ["Procesamiento Premium", "Estándares Altos", "Satisfacción Garantizada"],
      highlight: false,
      image: garbanzo
    }
  ];

  const qualityPoints = [
    "Trabajo responsable y profesional",
    "Orientado a satisfacer las demandas de mercados exigentes",
    "Control de trazabilidad desde el campo hasta el destino",
    "Cada lote es resultado de trabajo orientado a la excelencia"
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
            Nuestros Productos
          </h2>
          <div
            className={`w-24 h-1 bg-secondary mx-auto mb-6 transition-all duration-1000 delay-200 ${
              headerVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
            }`}
          ></div>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Granos de alta calidad cultivados en el norte argentino, con trazabilidad garantizada y control de calidad en cada etapa del proceso.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={productsRef as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Bean Variety Card - Interactive */}
          <div className={`${productsVisible ? 'opacity-100 translate-y-0 transition-all duration-700' : 'opacity-0 translate-y-8'}`}>
            <BeanVarietyCard />
          </div>
          
          {/* Other Products */}
          {products.map((product, index) => (
            <Card
            key={index}
            className={`relative transition-all duration-500 border border-border/50 hover:border-secondary hover:shadow-elegant hover-lift hover:animate-glow-pulse overflow-hidden ${
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

            <CardContent className="pt-0 relative z-10">
              <p className="text-muted-foreground text-sm mb-4 text-center">
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

        {/* Quality Section */}
        <div ref={qualityRef as any} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Carousel - Poroto */}
          <div className={`relative transition-all duration-1000 ${qualityVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-elegant hover-lift">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3500,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <img
                      src={poroto1}
                      alt="Poroto - Nuestro producto estrella de alta calidad"
                      className="w-full h-[400px] object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={poroto2}
                      alt="Poroto blanco premium de calidad excepcional"
                      className="w-full h-[400px] object-cover"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img
                      src={poroto3}
                      alt="Poroto rojo de alta calidad para exportación"
                      className="w-full h-[400px] object-cover"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
                <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
              </Carousel>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${qualityVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-accent mr-3" />
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary">
                  Calidad Garantizada
                </h3>
              </div>
              <p className="text-foreground text-lg mb-6 leading-relaxed">
                Cada producto que exportamos es el resultado de un trabajo responsable y profesional, orientado a satisfacer las demandas de mercados exigentes en Latinoamérica y el resto del mundo.
              </p>
            </div>

            <div className="space-y-4">
              {qualityPoints.map((point, index) => (
                <div
                  key={index}
                  className={`flex items-start transition-all duration-500 ${
                    qualityVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                ref={magneticRef as any}
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6"
              >
                Solicitar Información
                <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

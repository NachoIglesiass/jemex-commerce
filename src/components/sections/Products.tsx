import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wheat, Sparkles, CheckCircle, Star } from "lucide-react";
import grainsImage from "@/assets/grains-macro.jpg";
import { useScrollAnimation, useMagneticHover } from "@/hooks/useScrollAnimation";

const Products = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: productsRef, isVisible: productsVisible } = useScrollAnimation(0.1);
  const { ref: qualityRef, isVisible: qualityVisible } = useScrollAnimation(0.2);
  const magneticRef = useMagneticHover();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      name: "Poroto",
      type: "Producto Insignia",
      description: "Cultivado en condiciones óptimas y cuidadosamente seleccionado para asegurar calidad, sabor y valor nutricional excepcional.",
      features: ["Calidad Premium", "Trazabilidad Completa", "Valor Nutricional Alto"],
      highlight: true
    },
    {
      name: "Soja",
      type: "Grano Premium",
      description: "Producida bajo estrictos estándares de calidad con control de trazabilidad desde el campo hasta su destino final.",
      features: ["Control de Calidad", "Certificaciones", "Exportación Global"],
      highlight: false
    },
    {
      name: "Maíz",
      type: "Grano Premium", 
      description: "Seleccionado cuidadosamente para satisfacer las demandas de mercados exigentes en Latinoamérica y el resto del mundo.",
      features: ["Selección Rigurosa", "Mercados Globales", "Calidad Consistente"],
      highlight: false
    },
    {
      name: "Garbanzo",
      type: "Grano Premium",
      description: "Procesado con los más altos estándares para garantizar la máxima calidad y satisfacción del cliente.",
      features: ["Procesamiento Premium", "Estándares Altos", "Satisfacción Garantizada"],
      highlight: false
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-secondary rounded-full animate-float stagger-2"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-primary rounded-full animate-float stagger-3"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef as any} className="text-center mb-16">
          <h2 className={`font-heading font-bold text-4xl md:text-5xl text-primary mb-4 transition-all duration-1000 ${headerVisible ? 'animate-fade-in-down text-shimmer' : 'opacity-0 translate-y-8'}`}>
            Nuestros Productos
          </h2>
          <div className={`w-24 h-1 bg-secondary mx-auto mb-6 transition-all duration-1000 delay-200 ${headerVisible ? 'animate-fade-in-up w-32' : 'opacity-0 w-0'}`}></div>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-400 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Granos de alta calidad cultivados en el norte argentino, con trazabilidad garantizada y control de calidad en cada etapa del proceso.
          </p>
        </div>

        {/* Products Grid */}
        <div ref={productsRef as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-500 hover:shadow-elegant hover-lift hover-glow magnetic-hover ${
                product.highlight 
                  ? 'ring-2 ring-secondary border-secondary bg-gradient-to-br from-secondary-light to-accent-light animate-glow-pulse' 
                  : 'hover:shadow-soft border-border/50'
              } ${
                productsVisible 
                  ? `animate-fade-in-up stagger-${index + 1}` 
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {product.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground px-3 py-1 animate-bounce-in hover-glow">
                    <Star className="w-3 h-3 mr-1 animate-glow-pulse" />
                    Producto Insignia
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-morph">
                  <Wheat className={`h-8 w-8 animate-float ${product.highlight ? 'text-secondary' : 'text-primary'}`} />
                </div>
                <CardTitle className="text-center text-xl font-heading text-shimmer">
                  {product.name}
                </CardTitle>
                <Badge variant="outline" className="w-fit mx-auto hover-glow">
                  {product.type}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm hover-lift transition-all duration-300">
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0 animate-glow-pulse" />
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
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${qualityVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-8'}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-elegant hover-lift">
              <img 
                src={grainsImage} 
                alt="Granos de alta calidad - soja, maíz, poroto y garbanzo"
                className="w-full h-[400px] object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
              {/* Floating elements over image */}
              <div className="absolute top-4 right-4 w-4 h-4 bg-accent/60 rounded-full animate-float"></div>
              <div className="absolute bottom-8 left-6 w-2 h-2 bg-secondary/50 rounded-full animate-float stagger-2"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${qualityVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'}`}>
            <div>
              <div className="flex items-center mb-4">
                <Sparkles className="h-8 w-8 text-accent mr-3 animate-glow-pulse" />
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-primary text-shimmer">
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
                  className={`flex items-start transition-all duration-500 hover-lift ${
                    qualityVisible 
                      ? `animate-fade-in-up stagger-${index + 1}` 
                      : 'opacity-0 translate-y-4'
                  }`}
                >
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0 animate-glow-pulse" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button 
                ref={magneticRef as any}
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-primary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 hover-lift hover-glow group"
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
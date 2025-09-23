import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wheat, Sparkles, CheckCircle, Star } from "lucide-react";
import grainsImage from "@/assets/grains-macro.jpg";

const Products = () => {
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
    <section id="productos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Nuestros Productos
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Granos de alta calidad cultivados en el norte argentino, con trazabilidad garantizada y control de calidad en cada etapa del proceso.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-elegant ${
                product.highlight 
                  ? 'ring-2 ring-secondary border-secondary bg-gradient-to-br from-secondary-light to-accent-light' 
                  : 'hover:shadow-soft border-border/50'
              }`}
            >
              {product.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground px-3 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Producto Insignia
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wheat className={`h-8 w-8 ${product.highlight ? 'text-secondary' : 'text-primary'}`} />
                </div>
                <CardTitle className="text-center text-xl font-heading">
                  {product.name}
                </CardTitle>
                <Badge variant="outline" className="w-fit mx-auto">
                  {product.type}
                </Badge>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {product.description}
                </p>
                
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={grainsImage} 
                alt="Granos de alta calidad - soja, maíz, poroto y garbanzo"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
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
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                  <p className="text-foreground">{point}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                Solicitar Información
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
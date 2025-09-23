import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, Award } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main Heading */}
          <div className="mb-6">
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight">
              JEMEX
              <span className="block text-3xl md:text-4xl lg:text-5xl font-medium text-accent mt-2">
                COMMERCE
              </span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          </div>

          {/* Tagline */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-primary-foreground/90">
            Exportamos Calidad desde el Norte Argentino
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Donde la calidad y la seriedad abren mercados. Especializados en exportación de granos de alta calidad con trazabilidad garantizada desde el campo hasta su destino.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('productos')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-elegant"
            >
              Nuestros Productos <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={() => scrollToSection('nosotros')}
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
            >
              Conoce Más
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Calidad Premium</h3>
              <p className="text-primary-foreground/70">Granos cuidadosamente seleccionados</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Exportación Global</h3>
              <p className="text-primary-foreground/70">Presencia en Latinoamérica y el mundo</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary-glow" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Trazabilidad Total</h3>
              <p className="text-primary-foreground/70">Desde el origen hasta el destino</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, Award } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation(0.2);
  const { ref: bgRef, offset } = useParallax(0.3);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef as any}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef as any}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg scale-110"
        style={{
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          {/* Main Heading */}
          <div
            className={`mb-6 transition-all duration-1200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight relative">
              <span
                className="block text-primary-foreground animate-pulse-glow"
                style={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
              >
                JEMEX
              </span>
              <span
                className="block text-3xl md:text-4xl lg:text-5xl font-medium text-accent mt-2 animate-pulse-glow"
                style={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
              >
                COMMERCE
              </span>
            </h1>
            <div
              className={`w-24 h-1 bg-accent mx-auto mb-6 transition-all duration-1000 ${
                isVisible ? "w-32" : "w-0"
              }`}
            ></div>
          </div>

          {/* Tagline */}
          <h2
            className={`text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-primary-foreground/90 transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            Exportamos Calidad desde el Norte Argentino
          </h2>

          <p
            className={`text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            Donde la calidad y la seriedad abren mercados. Especializados en
            exportación de granos de alta calidad con trazabilidad garantizada
            desde el campo hasta su destino.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              onClick={() => scrollToSection("productos")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-elegant hover-lift hover-glow group"
            >
              Nuestros Productos
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollToSection("nosotros")}
              className="bg-primary-foreground text-primary font-semibold text-lg px-8 py-6 glass transition-transform duration-300 hover:scale-105 hover:bg-primary-foreground"
            >
              Conoce Más
            </Button>

          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-20">
            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-900 hover-lift ${
                isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 animate-morph hover-glow">
                <Leaf className="h-8 w-8 text-secondary animate-float" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Calidad Premium</h3>
              <p className="text-primary-foreground/70">
                Granos cuidadosamente seleccionados
              </p>
            </div>

            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-1000 hover-lift ${
                isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4 animate-morph hover-glow stagger-2">
                <Globe className="h-8 w-8 text-accent animate-float stagger-2" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Exportación Global</h3>
              <p className="text-primary-foreground/70">
                Presencia en Latinoamérica y el mundo
              </p>
            </div>

            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-1100 hover-lift ${
                isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-primary-glow/20 rounded-full flex items-center justify-center mb-4 animate-morph hover-glow stagger-3">
                <Award className="h-8 w-8 text-primary-glow animate-float stagger-3" />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                Trazabilidad Total
              </h3>
              <p className="text-primary-foreground/70">
                Desde el origen hasta el destino
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-12 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isVisible ? "animate-bounce opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center items-start hover-glow">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

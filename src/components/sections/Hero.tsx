import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Globe, Award } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import logoJemex from "@/assets/logo-jemex-clean.png";
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
          filter: 'brightness(0.85) saturate(1.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        {/* Subtle top overlay for navbar integration */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/15 via-background/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">

          {/* Logo */}
          <div
            className={`flex justify-center mb-4 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <img 
              src={logoJemex} 
              alt="Jemex Commerce" 
              className="h-48 md:h-64 lg:h-72 w-auto object-contain hover:scale-105 transition-all duration-700 ease-in-out"
              style={{ 
                filter: 'brightness(1.3) contrast(1.2) drop-shadow(0 0 6px rgba(255,255,255,0.5)) drop-shadow(0 0 12px rgba(255,255,255,0.25))',
                animation: 'float 6s ease-in-out infinite'
              }}
            />
          </div>

          {/* Tagline */}
          <h1
            className={`text-xl md:text-3xl lg:text-4xl font-bold mb-6 text-primary-foreground transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
          >
            Sembrar con responsabilidad, cosechar con compromiso
          </h1>

          <p
            className={`text-lg md:text-xl text-primary-foreground/90 mb-6 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            Desde Rosario de la Frontera, Salta, llevamos al mundo granos de calidad excepcional, cultivados con respeto por la tierra y acompañados por una trazabilidad transparente de principio a fin.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-10 transition-all duration-1000 delay-700 ${
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

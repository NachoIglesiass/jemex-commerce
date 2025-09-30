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
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1 className="font-logo font-bold text-6xl md:text-8xl lg:text-9xl mb-2 leading-none tracking-wider">
              <span className="block text-primary-foreground drop-shadow-2xl">
                JEMEX
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-sans tracking-[0.3em] text-primary-foreground/90 uppercase">
              COMMERCE
            </p>
            <div
              className={`w-24 h-1 bg-secondary mx-auto mt-6 transition-all duration-1000 ${
                isVisible ? "w-32" : "w-0"
              }`}
            ></div>
          </div>

          {/* Tagline */}
          <h2
            className={`text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-primary-foreground transition-all duration-1000 delay-300 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            Sembrar con responsabilidad, cosechar con compromiso
          </h2>

          <p
            className={`text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            Desde Rosario de la Frontera, Salta, llevamos al mundo granos de calidad excepcional, cultivados con respeto por la tierra y acompañados por una trazabilidad transparente de principio a fin.
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
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 hover-glow">
                <Leaf className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary-foreground">Calidad</h3>
              <p className="text-primary-foreground/80">
                Productos que cumplen altos estándares con trazabilidad garantizada
              </p>
            </div>

            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-1000 hover-lift ${
                isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mb-4 hover-glow">
                <Globe className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary-foreground">Transparencia</h3>
              <p className="text-primary-foreground/80">
                Vínculos comerciales basados en confianza y comunicación clara
              </p>
            </div>

            <div
              className={`flex flex-col items-center text-center transition-all duration-1000 delay-1100 hover-lift ${
                isVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4 hover-glow">
                <Award className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-primary-foreground">
                Profesionalismo
              </h3>
              <p className="text-primary-foreground/80">
                Experiencia técnica con visión estratégica y eficiencia logística
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

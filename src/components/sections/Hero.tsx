import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation(0.2);
  const { ref: bgRef, offset } = useParallax(0.3);
  const { language } = useLanguage();
  const t = translations[language].hero;

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
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto text-center text-primary-foreground">

          {/* Main Heading - H1 for SEO */}
          <h1
            className={`text-xl md:text-3xl lg:text-4xl font-extrabold mb-10 text-primary-foreground transition-all duration-1000 mt-8 md:mt-0 tracking-tight ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.4)" }}
          >
            {t.title}
          </h1>

          <p
            className={`text-base md:text-lg lg:text-xl text-primary-foreground/95 mb-14 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
          >
            {t.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"
            }`}
          >
            <Button
              onClick={() => scrollToSection("productos")}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 shadow-elegant hover-glow group transition-transform duration-300 hover:scale-105"
            >
              {t.btnProducts}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => scrollToSection("nosotros")}
              className="bg-primary-foreground text-primary font-semibold text-lg px-8 py-6 glass transition-transform duration-300 hover:scale-105 hover:bg-primary-foreground"
            >
              {t.btnLearnMore}
            </Button>
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

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoJemex from "@/assets/logo-jemex-clean.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'productos', label: 'Productos' },
    { id: 'galeria', label: 'Galería' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-soft" 
        : "bg-transparent backdrop-blur-[2px]"
    )}>
      <div className="w-full px-2 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('inicio')}
            className="relative flex items-center group transition-all duration-300 -ml-1"
          >
            <img 
              src={logoJemex} 
              alt="Jemex Commerce Logo" 
              className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-lg transition-all duration-300 hover:scale-110"
              style={{ filter: isScrolled ? 'brightness(1.3) contrast(1.3)' : 'brightness(0) invert(1)' }}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "hover:text-primary transition-colors duration-200 font-medium",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              Contactanos
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2",
                !isScrolled && "text-primary-foreground hover:text-primary-foreground/80"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out overflow-hidden backdrop-blur-md border-t",
          isScrolled ? "bg-background/95 border-border" : "bg-primary/30 border-primary-foreground/20",
          isOpen ? "max-h-80 opacity-100 pb-4" : "max-h-0 opacity-0"
        )}>
          <div className="py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "block w-full text-left hover:text-primary transition-colors duration-200 font-medium py-3 px-4 hover:bg-primary/5 rounded-md",
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Contactanos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-agriculture.jpg";
import campo1 from "@/assets/campo1.jpeg";
import campo2 from "@/assets/campo2.jpg";
import campo3 from "@/assets/campo3.jpg";
import grainsImage from "@/assets/grains-macro.jpg";
import granos2 from "@/assets/granos2.jpg";
import granos3 from "@/assets/granos3.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Gallery = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.2);

  const galleryCollections = [
    { 
      title: "Campos de Cultivo", 
      description: "Extensos campos de cultivo en el norte argentino", 
      category: "Cultivos",
      images: [campo1, campo2, campo3]
    },
    { 
      title: "Productos Premium", 
      description: "Granos de alta calidad: soja, maíz, poroto y garbanzo", 
      category: "Productos",
      images: [grainsImage, granos2, granos3]
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-earth-light relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div ref={headerRef as any} className="text-center mb-16">
          <h2 className={`font-heading font-bold text-4xl md:text-5xl text-primary mb-4 transition-all duration-1000 ${headerVisible ? 'animate-fade-in-down' : 'opacity-0 translate-y-8'}`}>
            Galería
          </h2>
          <div className={`w-24 h-1 bg-secondary mx-auto mb-6 transition-all duration-1000 delay-200 ${headerVisible ? 'animate-fade-in-up w-32' : 'opacity-0 w-0'}`}></div>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-400 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Conoce nuestras instalaciones, procesos y la calidad de nuestros productos a través de estas imágenes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={galleryRef as any} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryCollections.map((collection, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover:shadow-elegant transition-all duration-500 border-secondary/20 hover-lift hover-glow ${galleryVisible ? `animate-fade-in-up stagger-${index + 1}` : 'opacity-0 translate-y-8'}`}
            >
              <div className="relative overflow-hidden">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {collection.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <img
                          src={image}
                          alt={`${collection.description} - imagen ${imgIndex + 1}`}
                          className="w-full h-64 md:h-80 object-cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-secondary text-secondary-foreground">
                    {collection.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className={`font-heading font-semibold text-xl text-primary mb-2 ${galleryVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
                  {collection.title}
                </h3>
                <p className={`text-muted-foreground ${galleryVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}>
                  {collection.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-agriculture.jpg";
import campo1 from "@/assets/campo1.jpeg";
import campo2 from "@/assets/campo2.jpeg";
import campo3 from "@/assets/campo3.jpeg";
import grainsImage from "@/assets/garbanzo.jpg";
import granos2 from "@/assets/granos2.jpeg";
import granos3 from "@/assets/granos3.jpeg";
import granos4 from "@/assets/granos4.jpeg";
import granos5 from "@/assets/granos5.jpeg";
import porotoMung from "@/assets/poroto-mung.png";
import porotoAlubia from "@/assets/poroto2.jpeg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentCollectionIndex, setCurrentCollectionIndex] = useState(0);

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
      images: [grainsImage, granos2, granos3, granos4, granos5, porotoMung, porotoAlubia ]
    }
  ];

  const allImages = galleryCollections.flatMap(collection => collection.images);

  const openModal = (collectionIndex: number, imageIndex: number) => {
    setCurrentCollectionIndex(collectionIndex);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const currentCollection = galleryCollections[currentCollectionIndex];
    const totalImages = currentCollection.images.length;
    
    if (direction === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % totalImages);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

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
                  className="w-full"
                >
                  <CarouselContent>
                    {collection.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <img
                          src={image}
                          alt={`${collection.description} - imagen ${imgIndex + 1}`}
                          className="w-full h-64 md:h-80 object-cover cursor-pointer"
                          onClick={() => openModal(index, imgIndex)}
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 bg-background/80 hover:bg-background" />
                  <CarouselNext className="right-4 bg-background/80 hover:bg-background" />
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

      {/* Fullscreen Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent hideClose className="max-w-full h-screen p-0 bg-black/95 border-0">
          <DialogTitle className="sr-only">
            {galleryCollections[currentCollectionIndex]?.title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {galleryCollections[currentCollectionIndex]?.description}
          </DialogDescription>
          <Button
            variant="ghost"
            size="icon"
            className="fixed top-8 right-4 safe-top md:top-8 md:right-8 z-[100] text-white hover:bg-white/20 h-12 w-12 md:h-14 md:w-14"
            onClick={() => setIsModalOpen(false)}
          >
            <X className="h-8 w-8 md:h-10 md:w-10 stroke-[3]" />
          </Button>

          <div className="relative w-full h-full flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 text-white hover:bg-white/20 h-12 w-12"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <img
              src={galleryCollections[currentCollectionIndex].images[currentImageIndex]}
              alt={`${galleryCollections[currentCollectionIndex].description} - imagen ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain p-4"
            />

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 text-white hover:bg-white/20 h-12 w-12"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {galleryCollections[currentCollectionIndex].images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
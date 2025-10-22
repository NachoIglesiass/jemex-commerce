import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import poroto1 from "@/assets/poroto1.jpg";
import poroto2 from "@/assets/poroto2.jpeg";
import poroto3 from "@/assets/poroto3.jpg";
import porotoMung from "@/assets/poroto-mung.png";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

export const BeanVarietyCard = () => {
  const [currentVariety, setCurrentVariety] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].beans;

  const beanVarieties = [
    {
      name: t.porotoNegro,
      description: t.porotoNegroDesc,
      image: poroto1,
      color: "text-gray-800"
    },
    {
      name: t.porotoRojoDark,
      description: t.porotoRojoDarkDesc,
      image: poroto3,
      color: "text-red-700"
    },
    {
      name: t.porotoRojoLight,
      description: t.porotoRojoLightDesc,
      image: poroto3,
      color: "text-red-500"
    },
    {
      name: t.porotoCranberry,
      description: t.porotoCranberryDesc,
      image: poroto2,
      color: "text-rose-600"
    },
    {
      name: t.porotoAdzuki,
      description: t.porotoAdzukiDesc,
      image: poroto3,
      color: "text-red-800"
    },
    {
      name: t.porotoAlubia,
      description: t.porotoAlubiaDesc,
      image: poroto2,
      color: "text-amber-700"
    },
    {
      name: t.porotoMung,
      description: t.porotoMungDesc,
      image: porotoMung,
      color: "text-green-700"
    }
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVariety((prev) => (prev + 1) % beanVarieties.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentVariety((prev) => (prev - 1 + beanVarieties.length) % beanVarieties.length);
      setIsTransitioning(false);
    }, 300);
  };

  const currentBean = beanVarieties[currentVariety];

  return (
    <Card className="relative transition-all duration-500 border border-border/50 hover:border-secondary hover:shadow-elegant hover-lift group ring-2 ring-secondary bg-gradient-to-br from-secondary-light to-accent-light overflow-visible mt-4 h-full flex flex-col">
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
        <Badge className="bg-secondary text-secondary-foreground px-3 py-1 shadow-md">
          <Star className="w-3 h-3 mr-1" />
          {t.flagshipProduct}
        </Badge>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-10 transition-opacity duration-700">
        <img
          src={currentBean.image}
          alt={currentBean.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isTransitioning ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
        />
      </div>

      <CardHeader className="pb-4 relative z-10">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden border-2 border-secondary/30">
          <img
            src={currentBean.image}
            alt={currentBean.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isTransitioning ? 'opacity-0 scale-125 rotate-12' : 'opacity-100 scale-100 rotate-0'
            }`}
          />
        </div>
        <CardTitle className="text-center text-xl font-heading">
          {t.poroto}
        </CardTitle>
        <Badge variant="outline" className="w-fit mx-auto">
          {t.flagshipProduct}
        </Badge>
      </CardHeader>

      <CardContent className="pt-0 relative z-10 flex-grow flex flex-col">
        {/* Variety Display */}
        <div className="mb-4 min-h-[140px] flex items-center justify-center">
          <div className={`text-center transition-all duration-500 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <h4 className={`font-semibold text-lg mb-2 ${currentBean.color}`}>
              {currentBean.name}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {currentBean.description}
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/30">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full hover:bg-secondary/20 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={t.prevVariety}
          >
            <ChevronLeft className="w-5 h-5 text-secondary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {beanVarieties.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isTransitioning) return;
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentVariety(index);
                    setIsTransitioning(false);
                  }, 300);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === currentVariety
                    ? 'w-8 h-2 bg-secondary'
                    : 'w-2 h-2 bg-secondary/30 hover:bg-secondary/50'
                }`}
                aria-label={`${t.view} ${beanVarieties[index].name}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full hover:bg-secondary/20 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label={t.nextVariety}
          >
            <ChevronRight className="w-5 h-5 text-secondary" />
          </button>
        </div>

        {/* Features */}
        <div className="mt-4 pt-4 border-t border-border/30 space-y-2 text-center">
          <p className="text-xs text-muted-foreground">
            {beanVarieties.length} {t.varieties}
          </p>
          <p className="text-xs font-medium text-foreground">
            {t.features}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Award, Shield, CheckCircle2, Users } from "lucide-react";
import workerImage from "@/assets/worker-field.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";



const About = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation(0.1);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.1);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Compromiso",
      description: "Cumplimos lo que prometemos, en tiempo y forma"
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Excelencia en cada grano que exportamos"
    },
    {
      icon: Shield,
      title: "Transparencia",
      description: "Relaciones comerciales claras y honestas"
    },
    {
      icon: CheckCircle2,
      title: "Profesionalismo",
      description: "Equipo experto en comercio y agronomía"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            ¿Quiénes Somos?
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empresa argentina especializada en la exportación de granos de alta calidad, con base en Rosario de la Frontera, Salta. Conectamos el norte argentino con el mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={workerImage} 
                alt="Trabajador agrícola inspeccionando cultivos en el campo"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
                Nuestra Filosofía
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                <em>"Donde la calidad y la seriedad abren mercados."</em> Nos enfocamos en ofrecer productos confiables, con trazabilidad garantizada, gestionados por un equipo profesional con experiencia en <strong>Comercio Exterior, Administración Agropecuaria e Ingeniería Agronómica</strong>.
              </p>
              <p className="text-foreground leading-relaxed">
                Nuestra ubicación estratégica en el norte argentino nos permite conectar de manera ágil y eficiente con distintos puntos del país y del extranjero, optimizando tiempos y costos logísticos.
              </p>
            </div>
          </div>
        </div>

        {/* Misión, Visión y Valores Section */}
        <div className="mb-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center hover:shadow-soft transition-shadow duration-300 border-secondary/20">
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-3 text-primary">Misión</h4>
                <p className="text-muted-foreground">
                  Llevar al mundo lo mejor de la producción agroalimentaria argentina, conectando el norte del país con mercados globales mediante granos de alta calidad y servicios confiables.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-shadow duration-300 border-secondary/20">
              <CardContent className="p-6">
                <Eye className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-3 text-primary">Visión</h4>
                <p className="text-muted-foreground">
                  Ser referentes en el comercio agroexportador, reconocidos por nuestra excelencia en cada etapa: cultivo, cosecha, control y entrega, construyendo relaciones comerciales duraderas.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-soft transition-shadow duration-300 border-secondary/20">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h4 className="font-semibold text-xl mb-3 text-primary">Valores</h4>
                <div className="text-left space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">Compromiso:</strong> Cumplimos lo que prometemos, en tiempo y forma</p>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">Calidad:</strong> Excelencia en cada grano que exportamos</p>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">Transparencia:</strong> Relaciones comerciales claras y honestas</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">Profesionalismo:</strong> Equipo experto en comercio y agronomía</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <Users className="h-16 w-16 text-accent mx-auto mb-6" />
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Nuestro Compromiso
          </h3>
          <p className="text-lg md:text-xl mb-6 text-primary-foreground/90 max-w-3xl mx-auto">
            Trabajamos para que cada grano llegue en tiempo y forma, manteniendo su calidad desde el campo hasta el destino final.
          </p>
          <p className="text-primary-foreground/80 mb-8">
            Apostamos a relaciones comerciales transparentes y sustentables, basadas en la confianza, el respeto y el cumplimiento de nuestros compromisos. Promovemos vínculos duraderos que beneficien a toda la cadena de valor.
          </p>
          <Button 
            onClick={() => scrollToSection('productos')}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            Conoce Nuestros Productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
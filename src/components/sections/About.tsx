import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Plane, Handshake, Globe2, TrendingUp } from "lucide-react";
import workerImage from "@/assets/worker-field.jpg";

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Plane,
      title: "Trazabilidad",
      description: "Desde el origen hasta el destino"
    },
    {
      icon: Handshake,
      title: "Relaciones Transparentes",
      description: "Comerciales transparentes y duraderas"
    },
    {
      icon: Globe2,
      title: "Visión Integral",
      description: "Del negocio agroexportador"
    },
    {
      icon: TrendingUp,
      title: "Expansión Global",
      description: "Presencia estratégica en Latinoamérica"
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
            JEMEX Commerce es una empresa argentina especializada en la exportación de granos de alta calidad, con base en Rosario de la Frontera, Salta.
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
                Nuestra Historia
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Nos enfocamos en ofrecer productos confiables, con trazabilidad garantizada, gestionados por un equipo profesional con experiencia en <strong>Comercio Exterior, Administración Agropecuaria e Ingeniería Agronómica</strong>.
              </p>
              <p className="text-foreground leading-relaxed">
                Nuestra ubicación estratégica en el norte argentino nos permite conectar de manera ágil y eficiente con distintos puntos del país y del extranjero, optimizando tiempos y costos.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-secondary/20">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Misión</h4>
                  <p className="text-sm text-muted-foreground">
                    Llevar al mundo lo mejor de la producción agroalimentaria del norte argentino
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20">
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Visión</h4>
                  <p className="text-sm text-muted-foreground">
                    Garantizar excelencia en cada etapa: cultivo, cosecha, control y entrega
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h3 className="font-heading font-semibold text-3xl text-center text-primary mb-12">
            Nuestra Propuesta de Valor
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-soft transition-shadow duration-300 border-secondary/20">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-secondary" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2 text-primary">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <Heart className="h-16 w-16 text-accent mx-auto mb-6" />
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Nuestro Compromiso
          </h3>
          <p className="text-lg md:text-xl mb-6 text-primary-foreground/90 max-w-3xl mx-auto">
            Apostamos a relaciones comerciales transparentes y sustentables, basadas en la confianza, el respeto y el cumplimiento de los compromisos asumidos.
          </p>
          <p className="text-primary-foreground/80 mb-8">
            Estamos comprometidos con la sustentabilidad, la innovación y el desarrollo de vínculos comerciales duraderos que beneficien a todos los actores de la cadena de valor.
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
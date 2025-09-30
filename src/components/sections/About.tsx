import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Plane, Handshake, Globe2, TrendingUp } from "lucide-react";
import workerImage from "@/assets/worker-field.jpg";
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
      description: "Nos involucramos en cada etapa, cumpliendo lo que prometemos y construyendo relaciones sostenibles"
    },
    {
      icon: Target,
      title: "Calidad",
      description: "Productos que cumplen altos estándares, asegurando trazabilidad y excelencia en cada entrega"
    },
    {
      icon: Handshake,
      title: "Transparencia",
      description: "Vínculos comerciales basados en confianza mutua, comunicación clara y cumplimiento de compromisos"
    },
    {
      icon: Users,
      title: "Profesionalismo",
      description: "Formación técnica y experiencia que permite abordar cada operación con visión estratégica"
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Somos fruto de la pasión compartida de profesionales del comercio exterior, la administración agropecuaria y la ingeniería agronómica en Rosario de la Frontera, Salta.
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
                Nuestro Origen
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                Desde el corazón productivo del norte argentino asumimos un compromiso simple y contundente: <strong>llevar al mundo granos de calidad excepcional</strong>, cultivados con respeto por la tierra y acompañados por una trazabilidad transparente de principio a fin.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                Creemos que cada operación es mucho más que un intercambio comercial; es un vínculo humano basado en la confianza, la seriedad y el cumplimiento de la palabra.
              </p>
              <p className="text-foreground leading-relaxed">
                Latinoamérica es nuestro punto de partida natural y estratégico, pero nuestra mirada es global. Estamos abiertos a nuevas alianzas que nos permitan crecer junto a quienes comparten nuestra visión de excelencia y desarrollo sustentable.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-secondary/20 hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Misión</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ofrecer granos de alta calidad al mercado nacional e internacional, con fuerte compromiso con la excelencia, la trazabilidad y el cumplimiento
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 hover:shadow-soft transition-shadow">
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Filosofía</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    La calidad no termina en el producto, sino en la forma de hacer las cosas
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h3 className="font-heading font-semibold text-3xl text-center text-primary mb-12">
            Nuestros Valores
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
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground shadow-elegant">
          <Heart className="h-16 w-16 text-secondary mx-auto mb-6" />
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            Nuestro Compromiso
          </h3>
          <p className="text-lg md:text-xl mb-6 text-primary-foreground max-w-3xl mx-auto leading-relaxed">
            Construir relaciones comerciales sólidas, transparentes y duraderas, aportando valor desde el origen hasta el destino final, y actuando con responsabilidad en cada etapa del proceso.
          </p>
          <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Trabajamos con la convicción de que la calidad se cultiva, la reputación se construye paso a paso y el futuro se cosecha cuando la responsabilidad guía cada decisión.
          </p>
          <Button 
            onClick={() => scrollToSection('productos')}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-soft hover:shadow-elegant transition-all"
          >
            Conoce Nuestros Productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
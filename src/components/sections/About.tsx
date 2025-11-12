import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlipCard } from "@/components/ui/flip-card";
import { Target, Eye, Medal, Award, Shield, CheckCircle2, Handshake } from "lucide-react";
import workerImage from "@/assets/worker.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";



const About = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation(0.1);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.2);
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation(0.1);
  const { language } = useLanguage();
  const t = translations[language].about;
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="nosotros" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            {t.title}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <img 
                src={workerImage} 
                alt="Trabajador de Jemex Commerce inspeccionando cultivos de legumbres y granos en campos argentinos - Exportadora de poroto, soja, maíz y garbanzo"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading font-semibold text-2xl text-primary mb-4">
                {t.philosophy}
              </h3>
              <p className="text-foreground leading-relaxed mb-4">
                <em>{t.philosophyText}</em> <strong>{t.philosophyBold}</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Misión, Visión y Valores Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FlipCard
              icon={<Target className="h-12 w-12 text-secondary" />}
              title={t.mission}
              content={
                <p className="text-muted-foreground">
                  {t.missionText}
                </p>
              }
            />

            <FlipCard
              icon={<Eye className="h-12 w-12 text-secondary" />}
              title={t.vision}
              content={
                <p className="text-muted-foreground">
                  {t.visionText}
                </p>
              }
            />

            <FlipCard
              icon={<Medal className="h-12 w-12 text-secondary" />}
              title={t.values}
              content={
                <div className="text-left space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">{t.commitment}</strong></p>
                  </div>
                  <div className="flex items-start">
                    <Award className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">{t.quality}</strong> </p>
                  </div>
                  <div className="flex items-start">
                    <Shield className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">{t.transparency}</strong></p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-4 w-4 text-secondary mr-2 mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground"><strong className="text-primary">{t.professionalism}</strong> </p>
                  </div>
                </div>
              }
            />
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-gradient-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <Handshake className="h-16 w-16 text-secondary mx-auto mb-6" />
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            {t.ourCommitment}
          </h3>
          <p className="text-lg md:text-xl mb-6 text-primary-foreground/90 max-w-3xl mx-auto">
            {t.commitmentText}
          </p>
          <p className="text-primary-foreground/80 mb-8">
            {t.commitmentDesc}
          </p>
          <Button 
            onClick={() => scrollToSection('productos')}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
          >
            {t.btnProducts}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
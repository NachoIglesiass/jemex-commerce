import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Phone, Clock, Send, FileText, Info, Package } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    inquiry: "general"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
      inquiry: "general"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jemex.commerce@gmail.com",
      description: "Respuesta en 24 horas"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Rosario de la Frontera, Salta",
      description: "Argentina"
    },
    {
      icon: Clock,
      title: "Horario",
      value: "Lun - Vie: 8:00 - 18:00",
      description: "Hora Argentina (GMT-3)"
    }
  ];

  const inquiryTypes = [
    { value: "general", label: "Consulta General", icon: Info },
    { value: "comercial", label: "Condiciones Comerciales", icon: FileText },
    { value: "tecnica", label: "Información Técnica", icon: Package },
    { value: "muestra", label: "Muestras de Producto", icon: Package }
  ];

  return (
    <section id="contacto" className="py-20 bg-secondary-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Querés conocer más? Estamos aquí para responder todas tus consultas sobre nuestros productos y servicios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit border-secondary/20">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Services Available */}
            <Card className="mt-6 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-lg font-heading text-primary">
                  Información Disponible
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {inquiryTypes.map((type, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <type.icon className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-foreground">{type.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">
                  Envíanos tu Consulta
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nombre y Apellido *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Nombre de tu empresa (opcional)"
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry">Tipo de Consulta</Label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleInputChange}
                      className="w-full mt-1 p-2 border border-input rounded-md bg-background"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[120px]"
                      placeholder="Cuéntanos sobre tu consulta o requerimiento..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <Button 
                      type="submit" 
                      className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Consulta
                    </Button>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Info className="w-3 h-3 mr-1" />
                        Respuesta en 24hs
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <FileText className="w-3 h-3 mr-1" />
                        Info técnica disponible
                      </Badge>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-primary rounded-2xl p-8 md:p-12 text-primary-foreground">
          <h3 className="font-heading font-bold text-2xl md:text-3xl mb-4">
            ¿Listo para Exportar Calidad?
          </h3>
          <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Conecta con nosotros y descubre cómo podemos ayudarte con granos de alta calidad desde el norte argentino.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('mailto:jemex.commerce@gmail.com', '_blank')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contacto Directo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
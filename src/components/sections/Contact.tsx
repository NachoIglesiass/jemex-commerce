import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Send, Package, Info, FileText } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Contact = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = translations[language].contact;
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    inquiry: "general"
  });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("https://formspree.io/f/xjkpyqwa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: formData.name,
        email: formData.email,
        empresa: formData.company,
        tipo_consulta: formData.inquiry,
        mensaje: formData.message,
      }),
    });

    if (response.ok) {
      toast({
        title: t.messageSent,
        description: t.messageDesc,
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        inquiry: "general",
      });
    } else {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "No se pudo conectar con el servidor. Intenta más tarde.",
    });
  }
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
      title: t.email,
      value: t.emailValue
    },
    {
      icon: MapPin,
      title: t.location,
      value: t.locationValue,
      description: t.locationDesc
    }
  ];

  const inquiryTypes = [
    { value: "general", label: t.generalInquiry, icon: Info },
    { value: "comercial", label: t.commercialConditions, icon: FileText },
    { value: "tecnica", label: t.technicalInfo, icon: Package },
  ];

  return (
    <section id="contacto" className="py-20 bg-secondary-light">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-fit border-secondary/20">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-primary">
                  {t.contactInfo}
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
                  {t.contactBy}
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
                  {t.sendInquiry}
                </CardTitle>
                <p className="text-muted-foreground">
                  {t.formDesc}
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t.name} *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder={t.namePlaceholder}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.emailLabel} *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                        placeholder={t.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">{t.company}</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder={t.companyPlaceholder}
                    />
                  </div>

                  <div>
                    <Label htmlFor="inquiry">{t.inquiryType}</Label>
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
                    <Label htmlFor="message">{t.message} *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="mt-1 min-h-[120px]"
                      placeholder={t.messagePlaceholder}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t.btnSend}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
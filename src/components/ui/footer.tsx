import { Mail, MapPin, Leaf, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = translations[language].footer;
  const nav = translations[language].nav;
  const whatsapp = translations[language].whatsapp;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Company Info */}
          <div>
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-2 mb-4">
              <div className="font-heading font-bold text-2xl">JEMEX</div>
              <div className="text-sm font-medium tracking-wider text-primary-foreground/80">
                COMMERCE
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              {t.description}
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-2 text-secondary">
              <Leaf className="h-5 w-5" />
              <span className="text-sm font-medium">
                {t.qualityTag}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { name: nav.inicio, id: "inicio" },
                { name: nav.nosotros, id: "nosotros" },
                { name: nav.productos, id: "productos" },
                { name: nav.galeria, id: "galeria" },
                { name: nav.contacto, id: "contacto" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">{t.contact}</h4>
            <div className="space-y-3">
              <div className="flex justify-center md:justify-start items-start space-x-3">
                <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <a
                  href="mailto:info@jemexcommerce.com.ar"
                  className="text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  info@jemexcommerce.com.ar
                </a>
              </div>
              </div>
              <div className="flex justify-center md:justify-start items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Rosario de la Frontera</p>
                  <p>Salta, Argentina</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start items-start space-x-3">
                <MessageCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href={`https://wa.me/${whatsapp.phone}?text=${encodeURIComponent(whatsapp.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    WhatsApp: +54 9 3876 66-8361
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} JEMEX Commerce. {t.rights}
            </p>
            <p className="text-primary-foreground/60 text-sm">
              {t.tagline}
            </p>
            <p className="text-sm font-semibold text-secondary hover:text-secondary/80 transition-colors">
                {t.developedBy}{" "}
              <span className="text-secondary font-bold">Ignacio Iglesias</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

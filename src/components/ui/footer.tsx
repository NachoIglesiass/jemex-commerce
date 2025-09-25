import { Mail, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              Empresa argentina especializada en exportación de granos de alta calidad desde el norte argentino al mundo.
            </p>
            <div className="flex justify-center md:justify-start items-center space-x-2 text-accent">
              <Leaf className="h-5 w-5" />
              <span className="text-sm font-medium">
                Calidad y Seriedad desde 2008
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: "Inicio", id: "inicio" },
                { name: "Nosotros", id: "nosotros" },
                { name: "Productos", id: "productos" },
                { name: "Galería", id: "galeria" },
                { name: "Contacto", id: "contacto" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex justify-center md:justify-start items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:jemex.commerce@gmail.com"
                    className="text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    jemex.commerce@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex justify-center md:justify-start items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-primary-foreground/80">
                  <p>Rosario de la Frontera</p>
                  <p>Salta, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-center md:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} JEMEX Commerce. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Exportamos calidad desde el norte argentino
            </p>
            <p className="text-sm font-semibold text-accent hover:text-wine-gold transition-colors">
                Desarrollado por{" "}
              <span className="text-wine-gold font-bold">Ignacio Iglesias</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

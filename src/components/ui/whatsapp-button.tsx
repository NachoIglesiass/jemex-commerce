import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { cn } from "@/lib/utils";

const WhatsAppButton = () => {
  const { language } = useLanguage();
  const t = translations[language].whatsapp;

  const handleClick = () => {
    const encodedMessage = encodeURIComponent(t.message);
    const whatsappUrl = `https://wa.me/${t.phone}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label={t.ariaLabel}
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 rounded-full",
        "bg-[#25D366] hover:bg-[#20BA5A]",
        "shadow-elegant hover:shadow-glow",
        "flex items-center justify-center",
        "transition-all duration-300",
        "animate-bounce hover:animate-none",
        "group"
      )}
      style={{
        animationDuration: "3s",
        animationIterationCount: "infinite",
      }}
    >
      <MessageCircle 
        className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-200" 
        fill="currentColor"
      />
    </button>
  );
};

export default WhatsAppButton;

import * as React from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  className?: string;
  isFlipped: boolean;
  onFlip: (flipped: boolean) => void;
}

const FlipCard = ({ icon, title, content, className, isFlipped, onFlip }: FlipCardProps) => {

  return (
    <div 
      className={cn("relative h-[340px] group", className)} 
      style={{ perspective: "1200px" }}
    >
      <div
        className="relative w-full h-full transition-all duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl border border-secondary/30 bg-gradient-to-br from-card via-card to-secondary/5 shadow-lg hover:shadow-2xl hover:border-secondary/60 transition-all duration-300 flex flex-col items-center justify-center p-8"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="mb-5">
            {icon}
          </div>
          <h4 className="font-heading font-bold text-2xl mb-8 text-primary text-center">
            {title}
          </h4>
          <button 
            onClick={() => onFlip(true)}
            className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            Ver contenido
          </button>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full rounded-xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-secondary/15 shadow-xl flex flex-col p-6 pb-16 sm:p-8 sm:pb-10"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Header con ícono y título */}
          <div className="flex flex-col items-center mb-6">
            <div className="mb-3">
              {icon}
            </div>
            <h4 className="font-heading font-bold text-xl text-primary text-center">
              {title}
            </h4>
          </div>

          {/* Contenido */}
          <div className="flex-1 flex items-start justify-start text-left mb-6">
            <div className="text-sm leading-relaxed text-foreground w-full">
              {content}
            </div>
          </div>

          {/* Botón Volver */}
          <button 
            onClick={() => onFlip(false)}
            className="mt-auto mb-4 sm:mb-2 px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export { FlipCard };

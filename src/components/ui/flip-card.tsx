import * as React from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  className?: string;
}

const FlipCard = ({ icon, title, content, className }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div className={cn("relative h-[280px]", className)} style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg border border-secondary/20 bg-card shadow-sm flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="mb-4">{icon}</div>
          <h4 className="font-semibold text-xl mb-3 text-primary text-center">{title}</h4>
          <button 
            onClick={() => setIsFlipped(true)}
            className="mt-3 px-6 py-2 text-sm font-medium text-white bg-secondary hover:bg-secondary/90 rounded-lg transition-colors"
          >
            Ver contenido
          </button>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg border border-secondary/20 bg-gradient-to-br from-primary/5 to-secondary/10 shadow-sm flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-sm text-center mb-4 text-foreground">{content}</div>
          <button 
            onClick={() => setIsFlipped(false)}
            className="mt-3 px-6 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-colors"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export { FlipCard };

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

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
    console.log("Flip clicked, isFlipped:", !isFlipped); // Debug
  };

  return (
    <div
      className={cn("relative h-[280px] cursor-pointer", className)}
      style={{ perspective: "1000px" }}
      onClick={handleClick}
    >
      <div
        className="relative w-full h-full transition-all duration-700 ease-in-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg border border-secondary/20 bg-card text-card-foreground shadow-sm flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="mb-4">{icon}</div>
          <h4 className="font-semibold text-xl mb-3 text-primary text-center">{title}</h4>
          <button 
            className="mt-3 px-4 py-2 text-sm font-medium text-secondary border border-secondary/30 rounded-lg hover:bg-secondary/10 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Ver contenido
          </button>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 w-full h-full rounded-lg border border-secondary/20 bg-gradient-to-br from-primary/5 to-secondary/10 text-card-foreground shadow-sm flex flex-col items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-sm text-center mb-4">{content}</div>
          <button 
            className="mt-3 px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Ocultar
          </button>
        </div>
      </div>
    </div>
  );
};

export { FlipCard };

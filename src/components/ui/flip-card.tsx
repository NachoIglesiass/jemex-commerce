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

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={cn("flip-card-container h-[280px]", className)}
      onClick={handleClick}
    >
      <div
        className={cn(
          "flip-card-inner relative w-full h-full transition-transform duration-700 transform-gpu",
          isFlipped && "flip-card-flipped"
        )}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          className="flip-card-face flip-card-front absolute inset-0 w-full h-full rounded-lg border border-secondary/20 bg-card text-card-foreground shadow-sm flex flex-col items-center justify-center p-6 cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="mb-4">{icon}</div>
          <h4 className="font-semibold text-xl mb-3 text-primary text-center">{title}</h4>
          <button className="mt-3 px-4 py-2 text-sm font-medium text-secondary border border-secondary/30 rounded-lg hover:bg-secondary/10 transition-colors">
            Ver contenido
          </button>
        </div>

        {/* Back */}
        <div
          className="flip-card-face flip-card-back absolute inset-0 w-full h-full rounded-lg border border-secondary/20 bg-gradient-to-br from-primary/5 to-secondary/10 text-card-foreground shadow-sm flex flex-col items-center justify-center p-6 cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-sm text-center mb-4">{content}</div>
          <button className="mt-3 px-4 py-2 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors">
            Ocultar
          </button>
        </div>
      </div>
    </div>
  );
};

export { FlipCard };

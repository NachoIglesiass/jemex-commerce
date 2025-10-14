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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsFlipped(false);
    }
  };

  return (
    <div
      className={cn("flip-card-container h-[280px]", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
          <p className="text-xs text-muted-foreground text-center italic">
            {isMobile ? "Tocá para ver más" : "Pasá el cursor para ver el contenido"}
          </p>
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
          <div className="text-sm text-center">{content}</div>
          {isMobile && (
            <p className="text-xs text-muted-foreground text-center italic mt-4">
              Tocá para volver
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export { FlipCard };

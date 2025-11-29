import { cn } from "@/lib/utils";

type Mood = "happy" | "calm" | "sad" | "stressed" | "neutral";

interface AvatarProps {
  mood?: Mood;
  size?: "sm" | "md" | "lg" | "xl";
  isAnimated?: boolean;
  className?: string;
}

const moodColors: Record<Mood, string> = {
  happy: "from-happy to-primary",
  calm: "from-calm to-accent",
  sad: "from-sad to-secondary",
  stressed: "from-stressed to-destructive",
  neutral: "from-primary to-energetic",
};

const moodExpressions: Record<Mood, { eyes: string; mouth: string }> = {
  happy: { eyes: "scale-y-75", mouth: "scale-x-110" },
  calm: { eyes: "scale-y-90", mouth: "scale-x-100" },
  sad: { eyes: "scale-y-110 translate-y-0.5", mouth: "scale-x-75 rotate-180" },
  stressed: { eyes: "scale-y-125", mouth: "scale-x-90" },
  neutral: { eyes: "scale-y-100", mouth: "scale-x-100" },
};

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

export function Avatar({ 
  mood = "neutral", 
  size = "lg", 
  isAnimated = true,
  className 
}: AvatarProps) {
  const expression = moodExpressions[mood];
  
  return (
    <div className={cn("relative", className)}>
      {/* Glow effect */}
      <div 
        className={cn(
          "absolute inset-0 rounded-full bg-gradient-to-br opacity-50 blur-2xl",
          moodColors[mood],
          isAnimated && "animate-pulse-soft"
        )}
      />
      
      {/* Main avatar body */}
      <div 
        className={cn(
          "relative rounded-full bg-gradient-to-br shadow-glow flex items-center justify-center",
          moodColors[mood],
          sizeClasses[size],
          isAnimated && "animate-breathe"
        )}
      >
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-card/20 backdrop-blur-sm" />
        
        {/* Face container */}
        <div className="relative flex flex-col items-center justify-center gap-2">
          {/* Eyes */}
          <div className="flex gap-3">
            <div 
              className={cn(
                "w-3 h-4 bg-card rounded-full transition-transform duration-500",
                expression.eyes
              )}
            >
              <div className="w-1.5 h-1.5 bg-foreground/80 rounded-full mt-1 ml-0.5" />
            </div>
            <div 
              className={cn(
                "w-3 h-4 bg-card rounded-full transition-transform duration-500",
                expression.eyes
              )}
            >
              <div className="w-1.5 h-1.5 bg-foreground/80 rounded-full mt-1 ml-1" />
            </div>
          </div>
          
          {/* Mouth */}
          <div 
            className={cn(
              "w-6 h-2 bg-card rounded-full transition-transform duration-500",
              expression.mouth
            )}
          />
        </div>
        
        {/* Blush marks for happy mood */}
        {mood === "happy" && (
          <>
            <div className="absolute left-3 top-1/2 w-2 h-1 bg-primary/40 rounded-full" />
            <div className="absolute right-3 top-1/2 w-2 h-1 bg-primary/40 rounded-full" />
          </>
        )}
      </div>
      
      {/* Floating particles */}
      {isAnimated && (
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className={cn(
              "absolute w-2 h-2 rounded-full bg-gradient-to-br opacity-60",
              moodColors[mood],
              "top-0 left-1/4 animate-float"
            )} 
            style={{ animationDelay: "0s" }}
          />
          <div 
            className={cn(
              "absolute w-1.5 h-1.5 rounded-full bg-gradient-to-br opacity-40",
              moodColors[mood],
              "bottom-2 right-1/4 animate-float"
            )} 
            style={{ animationDelay: "1s" }}
          />
          <div 
            className={cn(
              "absolute w-1 h-1 rounded-full bg-gradient-to-br opacity-50",
              moodColors[mood],
              "top-1/3 right-0 animate-float"
            )} 
            style={{ animationDelay: "2s" }}
          />
        </div>
      )}
    </div>
  );
}

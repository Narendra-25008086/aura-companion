import { cn } from "@/lib/utils";
import { TrendingUp, Lightbulb } from "lucide-react";

interface InsightCardProps {
  className?: string;
}

export function InsightCard({ className }: InsightCardProps) {
  return (
    <div className={cn("glass-card p-6 gradient-warm", className)}>
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
          <Lightbulb className="w-5 h-5 text-primary" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">Today's Insight</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Your mood tends to improve after morning walks. Consider making it a daily habit! 🌿
          </p>
          
          <div className="flex items-center gap-2 text-xs">
            <TrendingUp className="w-4 h-4 text-happy" />
            <span className="text-happy font-medium">+23% mood improvement this week</span>
          </div>
        </div>
      </div>
    </div>
  );
}

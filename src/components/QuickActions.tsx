import { cn } from "@/lib/utils";
import { Heart, Wind, Moon, Headphones, BookOpen, Coffee } from "lucide-react";

interface QuickActionsProps {
  className?: string;
  onActionClick?: (action: string) => void;
}

const actions = [
  { id: "breathe", label: "Breathe", icon: Wind, color: "bg-calm/20 text-calm hover:bg-calm/30" },
  { id: "relax", label: "Relax", icon: Moon, color: "bg-sad/20 text-sad hover:bg-sad/30" },
  { id: "motivate", label: "Motivate", icon: Heart, color: "bg-happy/20 text-happy hover:bg-happy/30" },
  { id: "sounds", label: "Sounds", icon: Headphones, color: "bg-energetic/20 text-energetic hover:bg-energetic/30" },
  { id: "journal", label: "Journal", icon: BookOpen, color: "bg-secondary text-secondary-foreground hover:bg-secondary/80" },
  { id: "energy", label: "Energy", icon: Coffee, color: "bg-stressed/20 text-stressed hover:bg-stressed/30" },
];

export function QuickActions({ className, onActionClick }: QuickActionsProps) {
  return (
    <div className={cn("glass-card p-6", className)}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
      
      <div className="grid grid-cols-3 gap-3">
        {actions.map((action, index) => (
          <button
            key={action.id}
            onClick={() => onActionClick?.(action.id)}
            className={cn(
              "flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 animate-scale-in hover:scale-105",
              action.color
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <action.icon className="w-6 h-6" />
            <span className="text-xs font-medium">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

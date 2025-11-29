import { cn } from "@/lib/utils";
import { Check, Circle, Sparkles } from "lucide-react";
import { useState } from "react";

interface Goal {
  id: string;
  text: string;
  completed: boolean;
  category: "wellness" | "productivity" | "social" | "mindfulness";
}

interface DailyGoalsProps {
  className?: string;
}

const categoryColors = {
  wellness: "bg-happy/20 text-happy",
  productivity: "bg-calm/20 text-calm",
  social: "bg-energetic/20 text-energetic",
  mindfulness: "bg-secondary text-secondary-foreground",
};

const initialGoals: Goal[] = [
  { id: "1", text: "Take a 10-minute walk outside", completed: false, category: "wellness" },
  { id: "2", text: "Practice deep breathing for 5 minutes", completed: false, category: "mindfulness" },
  { id: "3", text: "Reach out to a friend or family member", completed: false, category: "social" },
  { id: "4", text: "Complete your most important task", completed: true, category: "productivity" },
];

export function DailyGoals({ className }: DailyGoalsProps) {
  const [goals, setGoals] = useState<Goal[]>(initialGoals);

  const toggleGoal = (id: string) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  const completedCount = goals.filter(g => g.completed).length;
  const progress = (completedCount / goals.length) * 100;

  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Today's Goals</h3>
        </div>
        <span className="text-sm text-muted-foreground">
          {completedCount}/{goals.length} done
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-muted rounded-full mb-6 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-primary to-happy rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="space-y-3">
        {goals.map((goal, index) => (
          <button
            key={goal.id}
            onClick={() => toggleGoal(goal.id)}
            className={cn(
              "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 text-left animate-fade-up",
              goal.completed 
                ? "bg-muted/50 opacity-70" 
                : "bg-card hover:bg-accent/30"
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
              goal.completed 
                ? "bg-happy text-primary-foreground" 
                : "border-2 border-border"
            )}>
              {goal.completed ? (
                <Check className="w-4 h-4" />
              ) : (
                <Circle className="w-4 h-4 opacity-0" />
              )}
            </div>
            
            <span className={cn(
              "flex-1 text-sm transition-all duration-300",
              goal.completed && "line-through text-muted-foreground"
            )}>
              {goal.text}
            </span>

            <span className={cn(
              "text-xs px-2 py-1 rounded-full",
              categoryColors[goal.category]
            )}>
              {goal.category}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

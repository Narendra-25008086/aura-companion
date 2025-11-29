import { cn } from "@/lib/utils";

interface MoodEntry {
  day: string;
  mood: number; // 1-5 scale
  label: string;
}

interface MoodChartProps {
  data: MoodEntry[];
  className?: string;
}

const moodColors = [
  "bg-stressed",
  "bg-sad", 
  "bg-muted-foreground",
  "bg-calm",
  "bg-happy",
];

export function MoodChart({ data, className }: MoodChartProps) {
  const maxMood = 5;
  
  return (
    <div className={cn("glass-card p-6", className)}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Weekly Mood</h3>
      
      <div className="flex items-end justify-between gap-2 h-32">
        {data.map((entry, index) => {
          const height = (entry.mood / maxMood) * 100;
          
          return (
            <div 
              key={entry.day} 
              className="flex flex-col items-center flex-1 gap-2 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full flex justify-center">
                <div 
                  className={cn(
                    "w-8 rounded-t-lg transition-all duration-500",
                    moodColors[entry.mood - 1]
                  )}
                  style={{ height: `${height}%`, minHeight: '8px' }}
                />
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {entry.day}
              </span>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-happy" />
          <span>Great</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-calm" />
          <span>Good</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-muted-foreground" />
          <span>Okay</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-sad" />
          <span>Low</span>
        </div>
      </div>
    </div>
  );
}

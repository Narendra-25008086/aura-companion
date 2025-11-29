import { cn } from "@/lib/utils";
import { Smile, Sun, CloudRain, Zap, Meh } from "lucide-react";

type Mood = "happy" | "calm" | "sad" | "stressed" | "neutral";

interface MoodSelectorProps {
  selectedMood: Mood;
  onMoodSelect: (mood: Mood) => void;
  className?: string;
}

const moods: { id: Mood; label: string; icon: React.ReactNode; color: string; ringClass: string }[] = [
  { id: "happy", label: "Happy", icon: <Smile className="w-5 h-5" />, color: "bg-happy/20 border-happy text-happy hover:bg-happy/30", ringClass: "ring-happy" },
  { id: "calm", label: "Calm", icon: <Sun className="w-5 h-5" />, color: "bg-calm/20 border-calm text-calm hover:bg-calm/30", ringClass: "ring-calm" },
  { id: "neutral", label: "Neutral", icon: <Meh className="w-5 h-5" />, color: "bg-muted border-border text-muted-foreground hover:bg-muted/80", ringClass: "ring-muted-foreground" },
  { id: "sad", label: "Sad", icon: <CloudRain className="w-5 h-5" />, color: "bg-sad/20 border-sad text-sad hover:bg-sad/30", ringClass: "ring-sad" },
  { id: "stressed", label: "Stressed", icon: <Zap className="w-5 h-5" />, color: "bg-stressed/20 border-stressed text-stressed hover:bg-stressed/30", ringClass: "ring-stressed" },
];

export function MoodSelector({ selectedMood, onMoodSelect, className }: MoodSelectorProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 justify-center", className)}>
      {moods.map((mood) => (
        <button
          key={mood.id}
          onClick={() => onMoodSelect(mood.id)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300",
            mood.color,
            selectedMood === mood.id 
              ? `scale-105 shadow-soft ring-2 ring-offset-2 ring-offset-background ${mood.ringClass}` 
              : "opacity-70 hover:opacity-100"
          )}
        >
          {mood.icon}
          <span className="text-sm font-medium">{mood.label}</span>
        </button>
      ))}
    </div>
  );
}

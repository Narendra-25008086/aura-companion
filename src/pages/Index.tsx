import { useState } from "react";
import { Header } from "@/components/Header";
import { Avatar } from "@/components/Avatar";
import { MoodSelector } from "@/components/MoodSelector";
import { MoodChart } from "@/components/MoodChart";
import { DailyGoals } from "@/components/DailyGoals";
import { ChatInterface } from "@/components/ChatInterface";
import { QuickActions } from "@/components/QuickActions";
import { InsightCard } from "@/components/InsightCard";
import { useToast } from "@/hooks/use-toast";

type Mood = "happy" | "calm" | "sad" | "stressed" | "neutral";

const weeklyMoodData = [
  { day: "Mon", mood: 4, label: "Good" },
  { day: "Tue", mood: 3, label: "Okay" },
  { day: "Wed", mood: 5, label: "Great" },
  { day: "Thu", mood: 4, label: "Good" },
  { day: "Fri", mood: 2, label: "Low" },
  { day: "Sat", mood: 4, label: "Good" },
  { day: "Sun", mood: 5, label: "Great" },
];

const Index = () => {
  const [currentMood, setCurrentMood] = useState<Mood>("neutral");
  const { toast } = useToast();

  const handleMoodSelect = (mood: Mood) => {
    setCurrentMood(mood);
    toast({
      title: "Mood logged 💫",
      description: `Your current mood has been recorded as ${mood}. I'm here for you!`,
    });
  };

  const handleQuickAction = (action: string) => {
    const actionMessages: Record<string, string> = {
      breathe: "Starting a breathing exercise... Inhale deeply 🌬️",
      relax: "Let's find some calm together 🌙",
      motivate: "You've got this! Here's some encouragement 💪",
      sounds: "Loading calming sounds for you 🎵",
      journal: "Opening your journal space 📝",
      energy: "Time for an energy boost! ⚡",
    };

    toast({
      title: action.charAt(0).toUpperCase() + action.slice(1),
      description: actionMessages[action] || "Starting...",
    });
  };

  return (
    <div className="min-h-screen gradient-hero">
      <div className="container max-w-6xl mx-auto px-4 pb-8">
        <Header />

        {/* Hero Section with Avatar */}
        <section className="py-8 flex flex-col items-center text-center animate-fade-up">
          <Avatar mood={currentMood} size="xl" className="mb-6" />
          
          <h2 className="text-xl font-semibold text-foreground mb-2">
            How are you feeling right now?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md">
            Tap on your current mood and I'll adapt to support you better
          </p>
          
          <MoodSelector 
            selectedMood={currentMood} 
            onMoodSelect={handleMoodSelect} 
          />
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {/* Left Column */}
          <div className="space-y-6">
            <ChatInterface className="animate-fade-up" />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <InsightCard className="animate-fade-up delay-100" />
            <QuickActions 
              className="animate-fade-up delay-200" 
              onActionClick={handleQuickAction}
            />
            <DailyGoals className="animate-fade-up delay-300" />
          </div>
        </div>

        {/* Mood Chart Section */}
        <section className="mt-8">
          <MoodChart 
            data={weeklyMoodData} 
            className="animate-fade-up delay-400" 
          />
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>Your data is encrypted and private. You're in control. 🔐</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

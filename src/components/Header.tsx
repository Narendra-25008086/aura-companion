import { cn } from "@/lib/utils";
import { Settings, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Good morning" : currentHour < 18 ? "Good afternoon" : "Good evening";

  return (
    <header className={cn("flex items-center justify-between py-4", className)}>
      <div>
        <h1 className="text-2xl font-bold text-foreground">
          {greeting} ✨
        </h1>
        <p className="text-sm text-muted-foreground">
          How can I support you today?
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="glass" size="icon">
          <Bell className="w-4 h-4" />
        </Button>
        <Button variant="glass" size="icon">
          <Settings className="w-4 h-4" />
        </Button>
        <Button variant="glass" size="icon-lg" className="rounded-full">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}

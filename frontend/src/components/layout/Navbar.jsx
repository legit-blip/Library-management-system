import { Bell, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b border-border bg-card shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-primary"></div>
          <h1 className="text-xl font-bold text-foreground">KCMIT LIBRARY</h1>
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 hover:bg-secondary transition-colors">
            <Bell className="h-5 w-5 text-foreground" />
          </button>
          <button className="rounded-lg p-2 hover:bg-secondary transition-colors">
            <Settings className="h-5 w-5 text-foreground" />
          </button>
          <div className="h-8 w-8 rounded-full bg-primary/20"></div>
          <button className="rounded-lg p-2 hover:bg-secondary transition-colors">
            <LogOut className="h-5 w-5 text-foreground" />
          </button>
        </div>
      </div>
    </nav>
  );
}

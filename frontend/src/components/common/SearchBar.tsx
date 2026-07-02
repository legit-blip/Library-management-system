import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Search...",
  onChange,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <input
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm placeholder-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

import React from "react";
import { Search } from "lucide-react";

/**
 * SearchBar
 * Presentational search field. Accepts value/onChange so a parent *could*
 * wire it up, but nothing in the Student Portal currently does — every
 * usage here is static UI only, per the read-only student experience.
 */
export default function SearchBar({
  placeholder = "Search...",
  value,
  onChange,
  className = "",
}) {
  return (
    <div className={`relative ${className}`}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3.5 text-sm text-slate-800
          placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-colors"
      />
    </div>
  );
}

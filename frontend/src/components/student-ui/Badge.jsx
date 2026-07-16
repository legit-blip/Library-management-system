import React from "react";

const TONES = {
  blue: "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200",
  green: "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-200",
  amber: "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
  red: "bg-red-50 text-red-700 ring-1 ring-inset ring-red-200",
  slate: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
};

/**
 * Badge
 * Small status pill. `tone` picks the color; callers map domain status
 * (e.g. "Overdue", "Returned") to a tone at the call site.
 */
export default function Badge({ children, tone = "slate", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

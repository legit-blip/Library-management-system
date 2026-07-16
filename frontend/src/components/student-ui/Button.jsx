import React from "react";

const VARIANTS = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-300 shadow-sm shadow-blue-600/20",
  secondary:
    "bg-blue-50 text-blue-700 hover:bg-blue-100 focus-visible:ring-blue-200",
  outline:
    "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 focus-visible:ring-slate-200",
  ghost:
    "bg-transparent text-slate-600 hover:bg-slate-100 focus-visible:ring-slate-200",
  danger:
    "bg-red-50 text-red-600 hover:bg-red-100 focus-visible:ring-red-200",
};

const SIZES = {
  sm: "text-xs px-3 py-1.5 gap-1.5",
  md: "text-sm px-4 py-2.5 gap-2",
  lg: "text-sm px-5 py-3 gap-2",
};

/**
 * Button
 * Static, presentational button. No side effects are wired up anywhere
 * in the Student Portal — every click here is a visual affordance only.
 */
export default function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  fullWidth = false,
  disabled = false,
  className = "",
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-xl font-medium transition-colors
        focus-visible:outline-none focus-visible:ring-4
        disabled:opacity-50 disabled:cursor-not-allowed
        ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {icon && iconPosition === "left" && (
        <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="[&>svg]:h-4 [&>svg]:w-4">{icon}</span>
      )}
    </button>
  );
}

import React from "react";

/**
 * Input
 * Standard text input used across forms and filters in the Student Portal.
 * Purely presentational — no validation or submission logic.
 */
export default function Input({
  label,
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "",
  ...rest
}) {
  return (
    <label className={`block ${className}`}>
      {label && (
        <span className="mb-1.5 block text-xs font-medium text-slate-600">
          {label}
        </span>
      )}
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 [&>svg]:h-4 [&>svg]:w-4">
            {icon}
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full rounded-xl border border-slate-200 bg-white text-sm text-slate-800
            placeholder:text-slate-400 py-2.5 ${icon ? "pl-9" : "pl-3.5"} pr-3.5
            focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-400 transition-colors`}
          {...rest}
        />
      </div>
    </label>
  );
}

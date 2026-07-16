import React from "react";

/**
 * Card
 * Base surface used throughout the Student Portal: white background,
 * rounded corners, soft shadow, subtle border.
 *
 * Props:
 *  - title, subtitle: optional header text
 *  - icon: optional element rendered in a rounded icon badge
 *  - action: optional element rendered top-right (e.g. a button/link)
 *  - padded: whether to apply default padding (default true)
 *  - className: extra classes for the outer wrapper
 */
export default function Card({
  title,
  subtitle,
  icon,
  action,
  padded = true,
  className = "",
  children,
}) {
  const hasHeader = title || subtitle || icon || action;

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/70 shadow-sm shadow-slate-200/50 ${className}`}
    >
      {hasHeader && (
        <div className="flex items-start justify-between gap-3 px-6 pt-5 pb-1">
          <div className="flex items-start gap-3">
            {icon && (
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                {icon}
              </div>
            )}
            <div>
              {title && (
                <h3 className="text-sm font-semibold text-slate-900">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      <div className={padded ? "p-6" + (hasHeader ? " pt-4" : "") : ""}>
        {children}
      </div>
    </div>
  );
}

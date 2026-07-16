import React from "react";
import { Bell, Menu } from "lucide-react";
import { currentStudent } from "../../data/studentData";

/**
 * StudentNavbar
 * Top bar shown across all Student Portal pages. `onMenuClick` opens the
 * mobile sidebar drawer (wired up by StudentLayout).
 */
export default function StudentNavbar({ title = "Dashboard", onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="lg:hidden -ml-1 flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-base sm:text-lg font-semibold text-slate-900">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-4">
        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-full text-slate-500 hover:bg-slate-100"
        >
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute top-1.5 right-2 h-2 w-2 rounded-full bg-blue-600 ring-2 ring-white" />
        </button>

        <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
            {currentStudent.avatarInitials}
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-sm font-medium text-slate-800">
              {currentStudent.name}
            </p>
            <p className="text-xs text-slate-400">{currentStudent.studentId}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

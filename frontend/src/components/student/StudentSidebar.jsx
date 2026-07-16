import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Search,
  BookOpen,
  History,
  UserCircle,
  LogOut,
  GraduationCap,
} from "lucide-react";
import { logout } from "../../utils/auth";

const NAV_ITEMS = [
  { to: "/student", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/student/search-books", label: "Search Books", icon: Search },
  { to: "/student/my-books", label: "My Borrowed Books", icon: BookOpen },
  { to: "/student/borrow-history", label: "Borrow History", icon: History },
  { to: "/student/profile", label: "Profile", icon: UserCircle },
];

/**
 * StudentSidebar
 * Primary navigation for the Student Portal.
 */
export default function StudentSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 border-r border-slate-200 bg-white">
      <div className="flex items-center gap-2.5 px-6 h-16 border-b border-slate-200">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-black">
          <GraduationCap className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 leading-tight">
            Library Portal
          </p>
          <p className="text-xs text-slate-400 leading-tight">Student</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {NAV_ITEMS.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`
            }
          >
            <Icon className="h-4.5 w-4.5 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 py-4 border-t border-slate-200">
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="h-4.5 w-4.5" />
          Logout
        </button>
      </div>
    </aside>
  );
}

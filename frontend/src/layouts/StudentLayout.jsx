import React, { useState } from "react";
import { Outlet, useLocation, NavLink, useNavigate } from "react-router-dom";
import { X, GraduationCap, LogOut } from "lucide-react";
import StudentSidebar from "../components/student/StudentSidebar";
import StudentNavbar from "../components/student/StudentNavbar";
import { logout } from "../utils/auth";

const PAGE_TITLES = {
  "/student": "Dashboard",
  "/student/search-books": "Search Books",
  "/student/my-books": "My Borrowed Books",
  "/student/borrow-history": "Borrow History",
  "/student/profile": "Profile",
};

const MOBILE_NAV_ITEMS = [
  { to: "/student", label: "Dashboard", end: true },
  { to: "/student/search-books", label: "Search Books" },
  { to: "/student/my-books", label: "My Borrowed Books" },
  { to: "/student/borrow-history", label: "Borrow History" },
  { to: "/student/profile", label: "Profile" },
];

/**
 * StudentLayout
 * Shared shell for every page in the Student Portal: fixed sidebar (desktop),
 * slide-over drawer (mobile), top navbar, and a React Router <Outlet /> for
 * the active page. Mirrors the structure of the Admin Dashboard layout so
 * both portals share one design language.
 */
export default function StudentLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const title = PAGE_TITLES[location.pathname] || "Student Portal";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <StudentSidebar />

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/40"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-5 h-16 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  Library Portal
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
            <nav className="flex-1 px-3 py-4 space-y-1">
              {MOBILE_NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setDrawerOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="px-3 py-4 border-t border-slate-200">
              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600"
              >
                <LogOut className="h-4.5 w-4.5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="lg:pl-64">
        <StudentNavbar title={title} onMenuClick={() => setDrawerOpen(true)} />
        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

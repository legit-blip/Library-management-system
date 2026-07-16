import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  RefreshCw,
  RotateCcw,
  Users,
  BarChart3,
  User,
  LogOut,
} from "lucide-react";
import { logout } from "../../utils/auth";

const menuItems = [
  { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { label: "Books", path: "/books", icon: BookOpen },
  { label: "Borrow Book", path: "/borrowbooks", icon: RefreshCw },
  { label: "Return Book", path: "/returnbooks", icon: RotateCcw },
  { label: "Students", path: "/students", icon: Users },
  { label: "Profile", path: "/profile", icon: User },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="hidden md:fixed md:left-0 md:top-0 md:block md:h-screen md:w-64 md:border-r md:border-sidebar-border md:bg-sidebar pt-20 text-black">
      <nav className="flex flex-col gap-2 px-4 py-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-4 py-2.5 font-medium transition-colors ${
                isActive
                  ? "bg-sidebar-primary text-black"
                  : "text-black hover:bg-sidebar-accent"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-0 right-0 px-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-2.5 font-medium text-black transition-colors hover:bg-sidebar-accent"
        >
          <LogOut className="h-5 w-5" />
          Logout
        </button>
      </div>
    </aside>
  );
}

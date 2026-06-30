import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  BarChart3,
  Settings,
  Users,
  FileText,
  LogOut,
  User,
} from "lucide-react";

export default function Dashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "users", label: "Users", icon: Users },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const metrics = [
    { title: "Total Users", data: "2,543" },
    { title: "Active Sessions", data: "847" },
    { title: "New Signups", data: "94" },
    { title: "Engagement Rate", data: "73" },
  ];

  const contentItems = [
    {
      title: "Welcome to Your Dashboard",
      subtitle: "Getting Started",
      description:
        "Start exploring your dashboard to monitor key metrics and manage your account settings. You have access to real-time analytics and detailed reports.",
      tags: ["Dashboard", "Onboarding"],
    },
    {
      title: "Security Best Practices",
      subtitle: "Account Protection",
      description:
        "Enable two-factor authentication and review your security settings to keep your account safe. We recommend reviewing your login history regularly.",
      tags: ["Security", "Settings"],
    },
  ];

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-200 shadow-sm flex items-center px-6 gap-5 z-40">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        <h1 className="text-2xl font-medium text-black flex-grow">Dashboard</h1>
        <Link to="/login">
          <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-gray-100 text-black font-medium hover:bg-gray-200 transition-colors">
            <span>Logout</span>
          </button>
        </Link>
      </div>

      {/* Sidebar */}
      <div className="fixed left-0 top-20 bottom-0 w-56 bg-gray-50 flex flex-col py-3 z-30">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className="w-full h-14 flex items-center justify-center gap-3 px-5 transition-colors hover:bg-gray-100"
            >
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-black" />
              </div>
              <span className="text-base font-medium text-black flex-grow text-left">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="ml-56 mt-20 pt-0">
        {/* Section Header */}
        <div className="px-12 py-12 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-black mb-2">
            Welcome Back
          </h2>
          <p className="text-base text-black">
            Here's what's happening with your account today
          </p>
        </div>

        {/* Metrics Section */}
        <div className="px-12 py-12 border-b border-gray-100">
          <h3 className="text-3xl font-bold text-black text-center mb-2">
            Key Metrics
          </h3>
          <p className="text-base text-black text-center mb-10">
            Monitor your account performance
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-4 gap-5">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 bg-white"
              >
                <p className="text-base text-gray-600 mb-2">{metric.title}</p>
                <p className="text-2xl font-medium text-black">{metric.data}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="px-12 py-12">
          <h3 className="text-4xl font-bold text-black text-center mb-2">
            Latest Updates
          </h3>
          <p className="text-base text-black text-center mb-10">
            Stay informed with the latest news and updates
          </p>

          {/* Content Items */}
          <div className="space-y-10">
            {contentItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 flex gap-4 bg-white"
              >
                {/* Image Placeholder */}
                <div className="w-24 h-24 bg-gray-300 rounded flex-shrink-0"></div>

                {/* Content */}
                <div className="flex-grow">
                  <h4 className="text-xl font-medium text-black mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">{item.subtitle}</p>
                  <p className="text-base text-black mb-3">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 mb-3">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs text-black bg-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 text-base text-black">
                    <button className="text-base">👍</button>
                    <button className="text-base">💬</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

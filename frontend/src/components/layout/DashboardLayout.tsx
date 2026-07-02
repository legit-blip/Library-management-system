import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex flex-1 md:pl-64">
        <Sidebar />
        <main className="w-full flex-1 bg-background">
          <div className="p-6 md:p-8">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

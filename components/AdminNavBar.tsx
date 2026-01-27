"use client";

import { usePathname } from "next/navigation";
import { Bell, Menu, Search } from "lucide-react";

function getTitleFromPath(pathname: string) {
  const path = pathname.replace(/\/$/, "");

  if (/^\/admin\/students\/[^/]+$/.test(path)) return "Student Profile";
  if (/^\/admin\/teachers\/[^/]+$/.test(path)) return "Teacher Profile";
  if (/^\/admin\/classes\/[^/]+$/.test(path)) return "Class Overview";

  if (path === "/admin/students") return "Students";
  if (path === "/admin/teachers") return "Teachers";
  if (path === "/admin/classes") return "Classes";
  if (path === "/admin/attendance") return "Attendance";
  if (path === "/admin/results") return "Results";
  if (path === "/admin/fees") return "Tuition & Fees";

  return "Administrator";
}

const AdminNavBar = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
  const pathname = usePathname();

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden text-slate-500 hover:text-slate-700"
          aria-label="Open sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>

        <h1 className="text-xl font-semibold text-slate-800">
          {getTitleFromPath(pathname)}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
          />
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
        </button>
      </div>
    </header>
  );
};

export default AdminNavBar;

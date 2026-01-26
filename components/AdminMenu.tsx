'use client'


import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  Presentation,
  School,
  BookOpen,
  CalendarCheck,
  FileBarChart,
  CreditCard,
  UserPlus,
  Settings,
  LogOut,
} from "lucide-react";
import { usePathname } from "next/navigation";

const AdminMenu = () => {
    const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  }
    


  return (
    <aside className="w-64 bg-white border-r border-slate-200 shrink-0 flex flex-col h-screen fixed left-0 top-0 z-20 lg:static transition-transform duration-300 transform -translate-x-full lg:translate-x-0">
      
      <div className="h-16 flex items-center px-6 border-b border-slate-100">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
          <GraduationCap className="w-8 h-8" />
          <span>Schola | Hub</span>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scroll">
        <Link
          href={"/admin"}
          className={`nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium  hover:bg-slate-50 hover:text-slate-900 transition-colors ${isActive("/dashboard") ? "text-indigo-600 font-semibold  bg-indigo-50" : "text-slate-600"}`}
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </Link>

        <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Academic
        </div>

        <Link
          href={"/admin/students"}
          className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <Users className="w-5 h-5" />
          Students
        </Link>

        <Link
          href={"/admin/teachers"}
          className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <Presentation className="w-5 h-5" />
          Teachers
        </Link>

        <Link
          href={"/"}
          className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <School className="w-5 h-5" />
          Classes
        </Link>

        <Link
          href={"/"}
          className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <BookOpen className="w-5 h-5" />
          Subjects
        </Link>

        <Link
          href={"/"}
          className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <CalendarCheck className="w-5 h-5" />
          Attendance
        </Link>

        <Link
          href={"/"}
          className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <FileBarChart className="w-5 h-5" />
          Results
        </Link>

        <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          Administration
        </div>

        <Link
          href={"/"}
          className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <CreditCard className="w-5 h-5" />
          Fees
        </Link>

        <Link
          href={"/"}
          className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <UserPlus className="w-5 h-5" />
          Parents
        </Link>

        <Link
          href={"/"}
          className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>
      </nav>

      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3">
          <Image
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Admin"
            className="w-9 h-9 rounded-full object-cover"
            width={36}
            height={36}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">
              Alex Morgan
            </p>
            <p className="text-xs text-slate-500 truncate">Administrator</p>
          </div>
          <Link href={"/"} className="text-slate-400 hover:text-slate-600">
            <LogOut className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default AdminMenu;

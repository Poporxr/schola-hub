"use client";

import { usePathname } from "next/navigation";
import { Bell, Calendar, GraduationCap, Menu, PanelRightClose, Search } from "lucide-react";

function getTitleFromPath(pathname: string) {
    const path = pathname.replace(/\/$/, "");

    if (/^\/student\/dashboard\/[^/]+$/.test(path)) return "Dashboard Overview";
    if (/^\/student\/profile\/[^/]+$/.test(path)) return " Profile";



    if (path === "/parent/payments") return "Payments Structure";
    if (path === "/parent/results") return "Results";
    if (path === "/parent/attendance") return "Attendance";
    if (path === "/parent/profile") return "Profile Overview";

    return "Dashboard Overview";
}

const ParentNav = ({ onToggleSidebar }: { onToggleSidebar: () => void }) => {
    const pathname = usePathname();

    return (
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-8 shrink-0">
            <div className="flex items-center gap-4">
                <button
                    onClick={onToggleSidebar}
                    className="lg:hidden text-slate-500 hover:text-slate-700"
                    aria-label="Open sidebar"
                >
                    <PanelRightClose className="w-8 h-8" />
                </button>

                <div className="pl-2">
                    <div className="flex lg:hidden md:hidden items-center gap-2 text-indigo-600 font-bold text-xl">
                        <GraduationCap className="w-8 h-8" />
                        <span>Schola | Hub</span>
                    </div>
                    <h1 className="md:text-xl md:font-semibold md:text-slate-800 lg:block md:block text-xs">
                        {getTitleFromPath(pathname)}
                    </h1>
                </div>


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

                <div className="flex items-center gap-3">
                    <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg text-sm">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700 font-medium">Term 2, 2024</span>
                    </div>
                    <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default ParentNav;

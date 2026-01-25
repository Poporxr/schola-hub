import Image from "next/image";
import Link from "next/link";

const AdminMenu = () => {
    return(
            <aside className="w-64 bg-white border-r border-slate-200 shrink-0 flex flex-col h-screen fixed left-0 top-0 z-20 lg:static transition-transform duration-300 transform -translate-x-full lg:translate-x-0" id="sidebar">
        <div className="h-16 flex items-center px-6 border-b border-slate-100">
            <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
                <i data-lucide="graduation-cap" className="w-8 h-8"></i>
                <span>EduAdmin</span>
            </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scroll">
            <Link href={'/'} className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-indigo-600 bg-indigo-50 transition-colors">
                <i data-lucide="layout-dashboard" className="w-5 h-5"></i>
                Dashboard
            </Link>
            
            <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Academic</div>
            
            <Link href={'/'}  className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <i data-lucide="users" className="w-5 h-5"></i>
                Students
            </Link>
            <Link href={'/'} className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <i data-lucide="presentation" className="w-5 h-5"></i>
                Teachers
            </Link>
            <Link href={'/'} className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <i data-lucide="school" className="w-5 h-5"></i>
                classNamees
            </Link>
            <Link href={'/'} className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <i data-lucide="book-open" className="w-5 h-5"></i>
                Subjects
            </Link>
            <Link href={'/'} className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <i data-lucide="calendar-check" className="w-5 h-5"></i>
                Attendance
            </Link>
            <Link href={'/'} className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <i data-lucide="file-bar-chart" className="w-5 h-5"></i>
                Results
            </Link>

            <div className="pt-4 pb-2 px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Administration</div>

            <Link href={'/'} className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <i data-lucide="credit-card" className="w-5 h-5"></i>
                Fees
            </Link>
            <Link href={'/'} className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <i data-lucide="user-plus" className="w-5 h-5"></i>
                Parents
            </Link>
            <Link href={'/'} className="nav-item w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors">
                <i data-lucide="settings" className="w-5 h-5"></i>
                Settings
            </Link>
        </nav>

        <div className="p-4 border-t border-slate-200">
            <div className="flex items-center gap-3">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Admin" className="w-9 h-9 rounded-full object-cover" />
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-900 truncate">Alex Morgan</p>
                    <p className="text-xs text-slate-500 truncate">Administrator</p>
                </div>
                <Link href={'/'} className="text-slate-400 hover:text-slate-600">
                    <i data-lucide="log-out" className="w-5 h-5"></i>
                </Link>
            </div>
        </div>
    </aside>
    )
}


export default AdminMenu;
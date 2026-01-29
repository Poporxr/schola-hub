"use client";

import { useEffect, useState } from "react";
import StudentMenu from "./StudentMenu";
import StudentNav from "./StudentNav";

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close on ESC
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      < StudentMenu
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Backdrop (mobile only) */}
      {sidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-10 bg-black/40 lg:hidden"
        />
      )}

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
        <StudentNav onToggleSidebar={() => setSidebarOpen(v => !v)} />
        <div className="flex-1 overflow-y-auto p-4 custom-scroll bg-slate-50">
          {children}
        </div>
      </main>
    </div>
  );
}

import AdminMenu from "@/components/AdminMenu";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1 flex min-w-0 overflow-hidden h-screen">
      <AdminMenu/>
      <div className="flex-1 overflow-y-auto p-4 lg:p-8 custom-scroll bg-slate-50" >
        {children}
      </div>
    </main>
  );
}

import AdminMenu from "@/components/AdminMenu";
import AdminNavBar from "@/components/AdminNavBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <AdminMenu/>
  <main className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">  
      <AdminNavBar />
      <div className="flex-1 overflow-y-auto py-4 lg:p-8 custom-scroll bg-slate-50" >
        {children}
      </div>
    </main>
    </>

  );
}

// app/(dashboard)/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="dashboard"
      className="min-h-screen bg-slate-950 text-slate-50"
    >
      {/* Aici vor sta Sidebar-ul și Header-ul ulterior */}
      <main className="p-6">{children}</main>
    </div>
  );
}

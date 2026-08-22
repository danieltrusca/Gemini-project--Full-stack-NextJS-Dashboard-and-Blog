import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      data-theme="dashboard"
      className="min-h-screen bg-(--background) text-(--foreground) flex"
    >
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Sidebar />
        {/* Conținutul principal este împins la dreapta automat pe ecran mare */}
        <main className="flex-1 md:ml-60 transition-all duration-300">
          {children}
        </main>
      </ThemeProvider>
    </div>
  );
}

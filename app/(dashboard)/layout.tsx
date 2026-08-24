"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider, useSidebar } from "@/components/dashboard/sidebar-context";
import { Sidebar } from "@/components/dashboard/sidebar";
import { Header } from "@/components/dashboard/header";

function DashboardContent({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={`
        flex-1 transition-all duration-300 ease-in-out flex flex-col min-w-0
        ${isCollapsed ? "md:ml-16" : "md:ml-60"}
      `}
    >
      <Header />
      <main className="flex-1 p-4 sm:p-6">{children}</main>
    </div>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-theme="dashboard" className="min-h-screen bg-(--background) text-(--foreground) flex">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <SidebarProvider>
          <Sidebar />
          <DashboardContent>{children}</DashboardContent>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
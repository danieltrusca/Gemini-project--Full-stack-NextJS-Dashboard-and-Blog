"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  BarChart2,
  Users,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  MessageSquare,
} from "lucide-react";
import { useSidebar } from "./sidebar-context";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
  { name: "Utilizatori", href: "/dashboard/users", icon: Users },
  { name: "Articole (Posts)", href: "/dashboard/posts", icon: FileText },
  { name: "Comentarii", href: "/dashboard/comments", icon: MessageSquare },
  { name: "Setări", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const { isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen } =
    useSidebar();

  return (
    <>
      {/* Buton Hamburger pe mobil */}
      {!isMobileOpen && (
        <button
          onClick={() => setIsMobileOpen(true)}
          className="md:hidden fixed top-3 left-4 z-40 p-2 rounded-lg bg-(--sidebar) text-(--sidebar-foreground) border border-(--border) shadow-md"
          aria-label="Deschide Meniu"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Overlay Mobil */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen transition-all duration-300 ease-in-out
          bg-[var(--sidebar)] text-[var(--sidebar-foreground)] border-r border-[var(--border)]
          flex flex-col justify-between
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isCollapsed ? "md:w-16" : "md:w-60"} w-64
        `}
      >
        <div>
          <div className="h-16 flex items-center justify-between px-4 border-b border-[var(--border)]">
            <span
              className={`font-bold text-lg tracking-wide ${isCollapsed ? "hidden" : "block"}`}
            >
              Astra UI
            </span>

            <button
              onClick={() => setIsMobileOpen(false)}
              className="md:hidden p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white"
            >
              {isCollapsed ? (
                <ChevronRight size={18} />
              ) : (
                <ChevronLeft size={18} />
              )}
            </button>
          </div>

          <nav className="p-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <Icon size={20} className="shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-3 border-t border-[var(--border)]">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs shrink-0 text-white">
              U
            </div>
            {!isCollapsed && (
              <div className="flex flex-col truncate">
                <span className="text-sm font-medium truncate">User Demo</span>
                <span className="text-xs text-gray-400 truncate">
                  user@demo.com
                </span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

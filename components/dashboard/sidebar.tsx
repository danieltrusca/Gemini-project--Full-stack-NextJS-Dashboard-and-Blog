"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Settings, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart2 },
  { name: "Utilizatori", href: "/dashboard/users", icon: Users },
  { name: "Setări", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Buton Hamburger doar pe Mobile */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-[var(--sidebar)] text-[var(--sidebar-foreground)] border border-[var(--border)]"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay fundal întunecat pentru Mobile */}
      {isMobileOpen && (
        <div
          onClick={() => setIsMobileOpen(false)}
          className="md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm"
        />
      )}

      {/* Containerul Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen transition-all duration-300
          bg-[var(--sidebar)] text-[var(--sidebar-foreground)] border-r border-[var(--border)]
          flex flex-col justify-between
          ${/* Mobil: Glisează din stânga */ ""}
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${/* Desktop/Tabletă: Lățime dinamică */ ""}
          ${isCollapsed ? "md:w-16" : "md:w-60"} w-60
        `}
      >
        {/* Antet Sidebar - Logo */}
        <div>
          <div className="h-16 flex items-center justify-between px-4 border-b border-[var(--border)]">
            {!isCollapsed && <span className="font-bold text-lg tracking-wide">Astra UI</span>}
            
            {/* Buton Pliere Sidebar (Desktop) */}
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="hidden md:flex p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white"
            >
              {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            </button>
          </div>

          {/* Meniu Navigare */}
          <nav className="p-3 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  <Icon size={20} className="shrink-0" />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Jos - Profil utilizator */}
        <div className="p-3 border-t border-[var(--border)]">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs shrink-0">
              U
            </div>
            {!isCollapsed && (
              <div className="flex flex-col truncate">
                <span className="text-sm font-medium truncate">User Demo</span>
                <span className="text-xs text-gray-400 truncate">user@demo.com</span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
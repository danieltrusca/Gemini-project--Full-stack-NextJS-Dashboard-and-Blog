"use client";

import { Search, Bell } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="h-16 border-b border-(--border) bg-(--sidebar) px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Bara de căutare cu spațiere pentru mobil */}
      <div className="flex items-center gap-2 max-w-xs w-full pl-12 md:pl-0">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Caută..."
            className="w-full bg-black/5 dark:bg-white/5 border border-(--border) rounded-lg pl-9 pr-4 py-1.5 text-sm placeholder:text-gray-400 focus:outline-none focus:border-(--primary) transition-colors"
          />
        </div>
      </div>

      {/* Zona din dreapta */}
      <div className="flex items-center gap-3">
        <button 
          className="p-2 rounded-lg border border-(--border) hover:bg-black/5 dark:hover:bg-white/10 transition-colors relative"
          aria-label="Notificări"
        >
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-500 rounded-full" />
        </button>

        <ModeToggle />

        <div className="h-6 w-px bg-(--border) hidden sm:block" />

        <div className="hidden sm:flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
            U
          </div>
        </div>
      </div>
    </header>
  );
}
// components/ui/stat-card.tsx
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  change,
  isPositive,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-xl p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-400">{title}</span>
        <div className="p-2 rounded-lg bg-blue-500/10 text-[var(--primary)]">
          <Icon size={20} />
        </div>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-2xl font-bold">{value}</h3>
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
            isPositive
              ? "bg-emerald-500/10 text-emerald-500"
              : "bg-rose-500/10 text-rose-500"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}

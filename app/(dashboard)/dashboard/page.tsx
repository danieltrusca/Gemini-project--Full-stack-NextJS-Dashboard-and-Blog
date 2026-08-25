// app/(dashboard)/dashboard/page.tsx
import { StatCard } from "@/components/ui/stat-card";
import { RecentActivityTable } from "@/components/ui/recent-activity-table";
import { DollarSign, Users, FileText, MessageSquare } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Antet Pagina */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Panou General</h1>
        <p className="text-sm text-gray-400 mt-1">
          O privire de ansamblu asupra metricilor principale.
        </p>
      </div>

      {/* Grid Carduri Statistici: 1 col pe Mobile, 2 pe Tabletă, 4 pe Desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Venit Total"
          value="$12,450"
          change="+12.5%"
          isPositive={true}
          icon={DollarSign}
        />
        <StatCard
          title="Utilizatori Noi"
          value="1,240"
          change="+8.2%"
          isPositive={true}
          icon={Users}
        />
        <StatCard
          title="Articole Publicate"
          value="84"
          change="+3.1%"
          isPositive={true}
          icon={FileText}
        />
        <StatCard
          title="Comentarii"
          value="432"
          change="-2.4%"
          isPositive={false}
          icon={MessageSquare}
        />
      </div>

      {/* Secțiune Tabel */}
      <RecentActivityTable />
    </div>
  );
}

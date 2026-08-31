// app/(dashboard)/dashboard/page.tsx
import { db } from "@/db";
import { users, posts, comments } from "@/db/schema";
import { count, eq } from "drizzle-orm";
import { StatCard } from "@/components/ui/stat-card";
import { RecentActivityTable } from "@/components/ui/recent-activity-table";
import { DollarSign, Users, FileText, MessageSquare } from "lucide-react";

export const revalidate = 0; // Forțează randarea dinamică la fiecare cerere

export default async function DashboardPage() {
  // Preluăm numărul de înregistrări din Neon în paralel
  const [[usersCount], [postsCount], [commentsCount]] = await Promise.all([
    db.select({ value: count() }).from(users),
    db.select({ value: count() }).from(posts),
    db.select({ value: count() }).from(comments),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Panou General</h1>
        <p className="text-sm text-gray-400 mt-1">
          Date live preluate din baza de date Neon.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Venit Total"
          value="$12,450"
          change="+12.5%"
          isPositive={true}
          icon={DollarSign}
        />
        <StatCard
          title="Utilizatori Înregistrați"
          value={usersCount.value.toString()}
          change="+100%"
          isPositive={true}
          icon={Users}
        />
        <StatCard
          title="Articole Publice"
          value={postsCount.value.toString()}
          change="+100%"
          isPositive={true}
          icon={FileText}
        />
        <StatCard
          title="Comentarii Totale"
          value={commentsCount.value.toString()}
          change="+100%"
          isPositive={true}
          icon={MessageSquare}
        />
      </div>

      <RecentActivityTable />
    </div>
  );
}

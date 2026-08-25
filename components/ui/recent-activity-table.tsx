// components/ui/recent-activity-table.tsx
const dummyData = [
  {
    id: "1",
    user: "Alexandru Popa",
    action: "A publicat un articol nou",
    date: "Acum 10 min",
    status: "Completat",
  },
  {
    id: "2",
    user: "Maria Ionescu",
    action: "A lăsat un comentariu",
    date: "Acum 25 min",
    status: "În așteptare",
  },
  {
    id: "3",
    user: "Andrei Radu",
    action: "Ștergere cont solicitată",
    date: "Acum 1 oră",
    status: "Respins",
  },
  {
    id: "4",
    user: "Elena Nistor",
    action: "A creat un articol draft",
    date: "Acum 2 ore",
    status: "Completat",
  },
];

export function RecentActivityTable() {
  return (
    <div className="bg-[var(--card)] text-[var(--card-foreground)] border border-[var(--border)] rounded-xl p-5 shadow-sm overflow-hidden">
      <h3 className="text-lg font-bold mb-4">Activitate Recentă</h3>

      {/* Wrapper cu scroll orizontal pentru mobile */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-[var(--border)] text-gray-400">
              <th className="pb-3 font-medium">Utilizator</th>
              <th className="pb-3 font-medium">Acțiune</th>
              <th className="pb-3 font-medium">Dată</th>
              <th className="pb-3 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {dummyData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                <td className="py-3 font-medium">{row.user}</td>
                <td className="py-3 text-gray-400">{row.action}</td>
                <td className="py-3 text-gray-400 whitespace-nowrap">
                  {row.date}
                </td>
                <td className="py-3 text-right">
                  <span
                    className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium ${
                      row.status === "Completat"
                        ? "bg-emerald-500/10 text-emerald-500"
                        : row.status === "În așteptare"
                          ? "bg-amber-500/10 text-amber-500"
                          : "bg-rose-500/10 text-rose-500"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

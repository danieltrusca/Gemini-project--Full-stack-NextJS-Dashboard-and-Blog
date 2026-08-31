// app/(dashboard)/dashboard/posts/page.tsx
import { db } from "@/db";
import { posts, users } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import Link from "next/link";
import { Plus } from "lucide-react";

export const revalidate = 0;

export default async function PostsPage() {
  // Interogare cu JOIN pentru a aduce articolele alături de autorul lor
  const allPosts = await db
    .select({
      id: posts.id,
      title: posts.title,
      slug: posts.slug,
      published: posts.published,
      createdAt: posts.createdAt,
      authorName: users.name,
    })
    .from(posts)
    .leftJoin(users, eq(posts.authorId, users.id))
    .orderBy(desc(posts.createdAt));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Articole (Posts)</h1>
          <p className="text-sm text-gray-400 mt-1">Gestionează conținutul publicat pe blog.</p>
        </div>
        <Link
          href="/dashboard/posts/new"
          className="flex items-center gap-2 bg-(--primary) text-white px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          <Plus size={16} />
          Articol Nou
        </Link>
      </div>

      <div className="bg-(--card) text-(--card-foreground) border border-(--border) rounded-xl p-5 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-(--border) text-gray-400">
                <th className="pb-3 font-medium">Titlu</th>
                <th className="pb-3 font-medium">Autor</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium text-right">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {allPosts.map((post) => (
                <tr key={post.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <td className="py-3 font-medium">{post.title}</td>
                  <td className="py-3 text-gray-400">{post.authorName || "Anonim"}</td>
                  <td className="py-3">
                    <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium ${
                      post.published === "published" 
                        ? "bg-emerald-500/10 text-emerald-500" 
                        : "bg-amber-500/10 text-amber-500"
                    }`}>
                      {post.published}
                    </span>
                  </td>
                  <td className="py-3 text-right text-gray-400 whitespace-nowrap">
                    {new Date(post.createdAt).toLocaleDateString("ro-RO")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
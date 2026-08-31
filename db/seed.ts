// db/seed.ts
import { db } from "./index";
import { users, posts, comments } from "./schema";

async function seed() {
  console.log("🌱 Populăm baza de date...");

  // 1. Inserăm utilizatori
  const insertedUsers = await db.insert(users).values([
    { name: "Alexandru Popa", email: "alex@demo.com" },
    { name: "Elena Nistor", email: "elena@demo.com" },
  ]).returning();

  // 2. Inserăm articole (posts)
  const insertedPosts = await db.insert(posts).values([
    {
      title: "Ghid Complet Next.js v15 și Tailwind v4",
      slug: "ghid-complet-nextjs-tailwind",
      content: "Acesta este primul articol de test creat din baza de date.",
      published: "published",
      authorId: insertedUsers[0].id,
    },
    {
      title: "De ce Drizzle ORM este extrem de rapid",
      slug: "de-ce-drizzle-orm",
      content: "Drizzle oferă interogări SQL de performanță maximă fără overhead.",
      published: "draft",
      authorId: insertedUsers[1].id,
    },
  ]).returning();

  // 3. Inserăm un comentariu
  await db.insert(comments).values({
    content: "Excelent articol! Aștept mai multe detalii.",
    postId: insertedPosts[0].id,
    authorId: insertedUsers[1].id,
  });

  console.log("✅ Baza de date a fost populată cu succes!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("❌ Eroare la seed:", err);
  process.exit(1);
});
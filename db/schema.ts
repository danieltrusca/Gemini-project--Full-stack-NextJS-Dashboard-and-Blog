// db/schema.ts
import { pgTable, serial, text, timestamp, integer } from "drizzle-orm/pg-core";

// Tabel Utilizatori
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Tabel Articole (Posts) - Pregătit pentru Blog
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  published: text("published").default("draft").notNull(), // draft / published
  authorId: integer("author_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Tabel Comentarii
export const comments = pgTable("comments", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  postId: integer("post_id").references(() => posts.id),
  authorId: integer("author_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
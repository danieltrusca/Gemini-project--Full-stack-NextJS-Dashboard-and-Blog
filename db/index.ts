// db/index.ts
import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Încarcă variabilele din .env.local
config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL nu este configurat în .env.local");
}

const sql = neon(process.env.DATABASE_URL);

// Exportăm direct instanța db
export const db = drizzle(sql, { schema });
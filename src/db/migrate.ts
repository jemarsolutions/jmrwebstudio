import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { sql } from "drizzle-orm";

async function migrate() {
  const client = neon(process.env.DATABASE_URL!);
  const db = drizzle(client);
  
  console.log("Running migration: Add discovery_notes column to customers table...");
  
  try {
    await db.execute(sql`
      ALTER TABLE customers ADD COLUMN IF NOT EXISTS discovery_notes TEXT;
    `);
    
    console.log("✅ Migration completed successfully!");
  } catch (error) {
    console.error("❌ Migration failed:", error);
    process.exit(1);
  }
  
  process.exit(0);
}

migrate();

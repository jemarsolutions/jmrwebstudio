import { clients, customers } from "@/db/schema";

// Infer types from Drizzle schema
export type Client = typeof clients.$inferSelect;
export type Customer = typeof customers.$inferSelect;

export type ClientStatus = "Pending" | "Design" | "Development" | "Revisions" | "Done";

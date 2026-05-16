import type { users } from "./user.schema.js";

export type User = typeof users.$inferSelect;

export type NewUser = typeof users.$inferInsert;
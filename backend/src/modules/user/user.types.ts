import type { users } from "./user.schema.js";

export type User = typeof users.$inferSelect;

export type NewUser = typeof users.$inferInsert;

export interface CreateUserDto {
	firstName?: string;
	lastName?: string;
	email?: string;
	phoneNumber?: string;
	password?: string;
}

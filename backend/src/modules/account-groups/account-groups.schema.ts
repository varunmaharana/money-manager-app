import { users } from "../user/user.schema";
import { baseColumns } from "./../../database/schema/base-columns.schema";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const accountGroups = pgTable("account_groups", {
	...baseColumns,

	userId: uuid("user_id")
		.notNull()
		.references(() => users.id, {
			onDelete: "cascade",
			onUpdate: "cascade",
		}),
	name: text("name").notNull(),
});

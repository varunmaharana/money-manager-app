import { accountGroups } from "../account-groups/account-groups.schema";
import { baseColumns } from "./../../database/schema/base-columns.schema";
import { pgTable, text, numeric, uuid } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
	...baseColumns,

	accountGroupId: uuid("account_group_id")
		.notNull()
		.references(() => accountGroups.id, {
			onDelete: "cascade",
			onUpdate: "cascade",
		}),
	name: text("name").notNull(),
	balance: numeric("balance", {
		precision: 14,
		scale: 2,
	})
		.notNull()
		.default("0.00"),
});

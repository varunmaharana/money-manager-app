import { users } from "../user/user.schema";
import { baseColumns } from "../../database/schema/base-columns.schema";
import { pgTable, pgEnum, text, uuid } from "drizzle-orm/pg-core";
import { AccountGroupType } from "./account-group.enums";

export const accountGroupTypeEnum = pgEnum(
	"account_group_type",
	Object.values(AccountGroupType) as [string, ...string[]],
);

export const accountGroups = pgTable("account_groups", {
	...baseColumns,

	userId: uuid("user_id")
		.notNull()
		.references(() => users.id, {
			onDelete: "cascade",
			onUpdate: "cascade",
		}),
	name: text("name").notNull(),
	type: accountGroupTypeEnum("type").notNull(),
});

import { users } from "../user/user.schema";
import { baseColumns } from "../../database/schema/base-columns.schema";
import { pgTable, pgEnum, text, uuid, index } from "drizzle-orm/pg-core";
import { AccountGroupType } from "./account-group.enums";

export const accountGroupTypeEnum = pgEnum(
	"account_group_type",
	Object.values(AccountGroupType) as [string, ...string[]],
);

export const accountGroups = pgTable(
	"account_groups",
	{
		...baseColumns,

		userId: uuid("user_id")
			.notNull()
			.references(() => users.id, {
				onDelete: "cascade",
				onUpdate: "cascade",
			}),
		name: text("name").notNull(),
		type: accountGroupTypeEnum("type").notNull(),
	},
	(table) => [
		index("account_groups_user_id_index").on(table.userId),

		index("account_groups_type_index").on(table.type),
	],
);

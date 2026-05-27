import { users } from "../user/user.schema";
import { baseColumns } from "./../../database/schema/base-columns.schema";
import { pgTable, pgEnum, text, uuid } from "drizzle-orm/pg-core";
import { CategoryGroupType } from "./category-groups.enums";

export const categoryGroupTypeEnum = pgEnum(
	"category_group_type",
	Object.values(CategoryGroupType) as [string, ...string[]],
);

export const categoryGroups = pgTable("category_groups", {
	...baseColumns,

	userId: uuid("user_id")
		.notNull()
		.references(() => users.id, {
			onDelete: "cascade",
			onUpdate: "cascade",
		}),
	name: text("name").notNull(),
	type: categoryGroupTypeEnum("type").notNull(),
});

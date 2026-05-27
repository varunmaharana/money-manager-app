import { categoryGroups } from "./../category-group/category-group.schema";
import { baseColumns } from "./../../database/schema/base-columns.schema";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
	...baseColumns,

	categoryGroupId: uuid("category_group_id")
		.notNull()
		.references(() => categoryGroups.id, {
			onDelete: "cascade",
			onUpdate: "cascade",
		}),
	name: text("name").notNull(),
});

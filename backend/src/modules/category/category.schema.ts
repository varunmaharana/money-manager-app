import { baseColumns } from "./../../database/schema/base-columns.schema";
import { pgTable, text } from "drizzle-orm/pg-core";

export const categories = pgTable("categories", {
	...baseColumns,
	
	name: text("name").notNull(),
});

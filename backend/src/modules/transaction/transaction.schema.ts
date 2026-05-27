import { baseColumns } from "./../../database/schema/base-columns.schema";
import {
	pgTable,
	uuid,
	pgEnum,
	timestamp,
	numeric,
	text,
} from "drizzle-orm/pg-core";
import { TransactionType } from "./transaction.enums";
import { categories } from "../category/category.schema";
import { accounts } from "../account/account.schema";

export const transactionTypeEnum = pgEnum(
	"transaction_type",
	Object.values(TransactionType) as [string, ...string[]],
);

export const transactions = pgTable("transactions", {
	...baseColumns,

	transactionType: transactionTypeEnum("transaction_type").notNull(),
	occurredAt: timestamp("occurred_at", { withTimezone: true })
		.notNull()
		.defaultNow(),
	amount: numeric("amount", {
		scale: 14,
		precision: 2,
	})
		.notNull()
		.default("0.00"),
	category: uuid("category").references(() => categories.id, {
		onDelete: "no action",
		onUpdate: "cascade",
	}),
	note: text("note"),
	description: text("description"),
	from_account_id: uuid("from_account_id").references(() => accounts.id, {
		onDelete: "no action",
		onUpdate: "cascade",
	}),
	to_account_id: uuid("to_account_id").references(() => accounts.id, {
		onDelete: "no action",
		onUpdate: "cascade",
	}),
});

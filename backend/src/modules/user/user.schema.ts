import {
	check,
	boolean,
	pgTable,
	text,
	uniqueIndex,
	index,
} from "drizzle-orm/pg-core";
import { baseColumns } from "../../database/schema/base-columns.schema";
import { sql } from "drizzle-orm";

export const users = pgTable(
	"users",
	{
		...baseColumns,
		firstName: text("first_name"),
		lastName: text("last_name"),
		email: text("email"),
		phoneCountryCode: text("phone_country_code"),
		phoneNumber: text("phone_number"),
		passwordHash: text("password_hash"),
		isEmailVerified: boolean("is_email_verified").notNull().default(false),
		isPhoneVerified: boolean("is_phone_verified").notNull().default(false),
	},
	(table) => [
		uniqueIndex("users_email_unique_index").on(table.email),

		uniqueIndex("users_phone_number_unique_index").on(
			table.phoneCountryCode,
			table.phoneNumber,
		),

		index("users_email_index").on(table.email),

		index("users_phone_index").on(
			table.phoneCountryCode,
			table.phoneNumber,
		),

		check(
			"users_email_or_phone_number_check",
			sql`
                (email IS NOT NULL OR phone_number IS NOT NULL)
            `,
		),

		check(
			"users_password_if_email_check",
			sql`
                (email IS NULL OR password_hash IS NOT NULL)
            `,
		),

		check(
			"users_phone_country_code_if_phone_number_check",
			sql`
				(phone_number IS NULL OR phone_country_code IS NOT NULL)
			`,
		),
	],
);

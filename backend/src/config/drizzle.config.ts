import "dotenv/config";
import { databaseUrl } from './db.config';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "../../drizzle",
	schema: "../database/schema/*",
	dialect: "postgresql",
	dbCredentials: {
		url: databaseUrl!,
	},
});

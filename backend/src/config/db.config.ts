import { drizzle } from "drizzle-orm/node-postgres";
import envVar from "./env.config";
import { Pool } from "pg";

const {
	nodeEnv,
	databaseHost,
	databaseName,
	databasePassword,
	databasePort,
	databaseUsername,
} = envVar;

export const databaseUrl = `postgres://${databaseUsername}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}`;

export const pool = new Pool({
	connectionString: databaseUrl,
	max: 20,
	idleTimeoutMillis: 30000,
	connectionTimeoutMillis: 5000,
	ssl: nodeEnv === "production" ? { rejectUnauthorized: false } : false,
});

export const db = drizzle({ client: pool });

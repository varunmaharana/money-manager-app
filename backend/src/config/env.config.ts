import dotenv from "dotenv";
import z from "zod";
import { logger } from "../core/logger/logger.js";

dotenv.config({
	path: ".env",
});

const envSchema = z.object({
	NODE_ENV: z.enum(["development", "production"]),
	HOSTNAME: z.string().min(1, { error: "HOSTNAME is required!" }),
	PORT: z.coerce.number(),
	CLIENT_URL: z.string().url(),
	DATABASE_HOST: z.string(),
	DATABASE_PORT: z.coerce.number(),
	DATABASE_NAME: z.string(),
	DATABASE_USERNAME: z.string(),
	DATABASE_PASSWORD: z.string(),

	REDIS_HOST: z.string(),
	REDIS_PORT: z.coerce.number(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
	logger.error(`Env validation failed: ${parsedEnv.error.message}`);
	process.exit(1);
}

const envVar = {
	nodeEnv: parsedEnv.data.NODE_ENV,
	hostname: parsedEnv.data.HOSTNAME,
	port: parsedEnv.data.PORT,
	clientUrl: parsedEnv.data.CLIENT_URL,
	databaseHost: parsedEnv.data.DATABASE_HOST,
	databasePort: parsedEnv.data.DATABASE_PORT,
	databaseName: parsedEnv.data.DATABASE_NAME,
	databaseUsername: parsedEnv.data.DATABASE_USERNAME,
	databasePassword: parsedEnv.data.DATABASE_PASSWORD,
	redisHost: parsedEnv.data.REDIS_HOST,
	redisPort: parsedEnv.data.REDIS_PORT
};

export default envVar;

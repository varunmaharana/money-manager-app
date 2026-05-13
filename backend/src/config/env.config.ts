import dotenv from "dotenv";
import z from "zod";
import { logger } from "../core/logger/logger.js";

dotenv.config({
	path: ".env",
});

const envSchema = z.object({
	NODE_ENV: z.string().min(1, { error: "NODE_ENV is required!" }),
	HOSTNAME: z.string().min(1, { error: "HOSTNAME is required!" }),
	PORT: z
		.string()
		.min(1, { error: "PORT number is required!" })
		.transform(Number),
	CLIENT_URL: z.string().url(),
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
};

export default envVar;

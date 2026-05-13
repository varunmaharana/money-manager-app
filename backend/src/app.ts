import express from "express";
import { morganMiddleware } from "./core/logger/morgan.js";
import envVar from "./config/env.config.js";
import { logger } from "./core/logger/logger.js";
import helmet from "helmet";
import cors from "cors";
import { rateLimit } from "express-rate-limit";
import hpp from "hpp";
import cookieParser from "cookie-parser";
import compression from "compression";

const app = express();

app.use(morganMiddleware);
app.use(helmet());
app.use(
	cors({
		origin: envVar.clientUrl,
		credentials: true,
	}),
);
app.use(hpp());
app.use(
	rateLimit({
		windowMs: 15 * 60 * 1000,
		limit: 100,
	}),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());

const protocol = envVar.nodeEnv === "production" ? "https" : "http";
app.listen(envVar.port, () => {
	logger.info(
		`Server listening on ${protocol}://${envVar.hostname}:${envVar.port}`,
	);
});

export default app;

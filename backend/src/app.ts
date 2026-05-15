import express from "express";

import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import cookieParser from "cookie-parser";
import hpp from "hpp";

import { rateLimit } from "express-rate-limit";

import env from "./config/env.config";

import { morganMiddleware } from "./core/logger/morgan";

import { errorHandler } from "./core/middlewares/error-handler.middleware";
import { BadRequestError } from "./core/errors/custom-error";
import { ApiResponse } from "./core/responses/api-response";

import v1Routes from "./routes";

const app = express();

// ===============================
// Security Middleware
// ===============================

app.use(helmet());

app.use(hpp());

app.use(
	rateLimit({
		windowMs: 15 * 60 * 1000,
		limit: 100,
		standardHeaders: true,
		legacyHeaders: false,
		message: {
			success: false,
			message: "Too many requests, please try again later.",
		},
	}),
);

// ===============================
// General Middleware
// ===============================

app.use(
	cors({
		origin: env.clientUrl,
		credentials: true,
	}),
);

app.use(compression());

app.use(cookieParser());

app.use(morganMiddleware);

// ===============================
// Body Parsers
// ===============================

app.use(
	express.json({
		limit: "10mb",
	}),
);

app.use(
	express.urlencoded({
		extended: true,
		limit: "10mb",
	}),
);

// ===============================
// Health Check Route
// ===============================

app.get("/health", (_, res) => {
	ApiResponse.send(res, 200, {}, "Server is healthy!");
});

// ===============================
// API Routes
// ===============================

app.use("/api/v1", v1Routes);

// ===============================
// 404 Handler
// ===============================

app.use((req, res) => {
	throw new BadRequestError(`Cannot ${req.method} ${req.originalUrl}`);
});

// ===============================
// Global Error Handler
// ===============================

app.use(errorHandler);

export default app;

import { registerExceptionHandlers } from "./core/logger/exception-handlers.js";
registerExceptionHandlers();

import app from "./app";
import envVar from "./config/env.config";
import { logger } from "./core/logger/logger";

// ===============================
// Server Bootstrap
// ===============================

const protocol = envVar.nodeEnv === "production" ? "https" : "http";

app.listen(envVar.port, () => {
	logger.info(
		`🚀 Server running at ${protocol}://${envVar.hostname}:${envVar.port}`,
	);
});

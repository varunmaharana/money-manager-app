import { logger } from "./logger.js";

export const registerExceptionHandlers = () => {
	process.on("uncaughtException", (error) => {
		logger.error(error);
		process.exit(1);
	});

	process.on("unhandledRejection", (reason) => {
		logger.error(reason);
		process.exit(1);
	});
};

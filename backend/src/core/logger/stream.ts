import { logger } from "./logger.js";

export const stream = {
	write: (message: string) => {
		logger.http(message.trim());
	},
};

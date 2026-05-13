import winston from "winston";

const consoleFormat = winston.format.printf(
	({ level, message, timestamp, stack }) => {
		return `${timestamp} [${level}]: ${stack || message}`;
	},
);

export const logger = winston.createLogger({
	level: "debug",

	format: winston.format.combine(
		winston.format.timestamp(),
		winston.format.errors({ stack: true }),
	),

	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				consoleFormat,
			),
		}),
	],
});

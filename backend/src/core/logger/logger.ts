import winston from "winston";
const { combine, timestamp, printf, colorize, errors } = winston.format;

const consoleFormat = printf(({ level, message, timestamp, stack }) => {
	return `${timestamp} [${level}]: ${stack || message}`;
});

// export const logger = winston.createLogger({
// 	level: "debug",

// 	format: winston.format.combine(
// 		winston.format.timestamp(),
// 		winston.format.errors({ stack: true }),
// 	),

// 	transports: [
// 		new winston.transports.Console({
// 			format: winston.format.combine(
// 				winston.format.colorize(),
// 				consoleFormat,
// 			),
// 		}),
// 	],
// });

export const logger = winston.createLogger({
	level: "info",

	format: combine(
		timestamp({
			format: "YYYY-MM-DD HH:mm:ss",
		}),
		errors({
			stack: true,
		}),
		consoleFormat,
	),

	transports: [
		new winston.transports.Console({
			format: combine(
				colorize({
					all: true,
				}),
				timestamp({
					format: "YYYY-MM-DD HH:mm:ss",
				}),
				errors({
					stack: true,
				}),
				consoleFormat,
			),
		}),
	],
});

import morgan from "morgan";
import { stream } from "./stream.js";

export const morganMiddleware = morgan(
	":method :url :status :response-time ms",
	{
		stream,
	},
);

import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";
import { asyncHandler } from "../core/utils/asyncHandler.js";
import { BadRequestError } from "../core/errors/CustomError.js";

export enum ValidationSource {
	BODY = "body",
	PARAMS = "params",
	QUERY = "query",
	HEADERS = "headers",
	// COOKIE = "cookie",
}

const validateRequest = (schema: ZodObject, source: ValidationSource) =>
	asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
		try {
			const data = schema.parse(req[source]);
			Object.assign(req[source], data);
			next();
		} catch (err) {
			if (err instanceof ZodError) {
				// const message = err.issues
				// 	.map((issue) => {
				// 		const path =
				// 			issue.path.length > 0
				// 				? `${issue.path.join(".")}: `
				// 				: "";
				// 		return `${path}${issue.message}`;
				// 	})
				// 	.join("\n ");
				const message = err.issues
					.map((issue) => issue.message)
					.join(";");
				throw new BadRequestError(message);
			}
			next(err);
		}
	});

export default validateRequest;

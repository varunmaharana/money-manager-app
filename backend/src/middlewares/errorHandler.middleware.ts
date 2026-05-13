import { Request, Response, NextFunction } from "express";
import { ApiError, ErrorType } from "../core/errors/ApiError.js";

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response,
	_next: NextFunction,
) => {
	if (res.headersSent) {
		return _next(err);
	}

	if (err instanceof ApiError) {
		ApiError.handle(err, res);
		return;
	}

	res.status(500).json({
		status: 500,
		success: false,
		type: ErrorType.INTERNAL,
		message: err.message || "Internal Server Error",
	});
};

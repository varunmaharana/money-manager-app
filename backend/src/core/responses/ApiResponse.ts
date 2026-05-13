import { Response } from "express";
class ApiResponse {
	statusCode: number;
	payload: any;
	message: string;
	success: boolean;

	constructor(statusCode: number, payload: any, message: string = "Success") {
		this.statusCode = statusCode;
		this.payload = payload;
		this.message = message;
		this.success = statusCode < 400;
	}

	static send(
		res: Response,
		statusCode: number,
		payload: any,
		message: string = "Success",
		success: boolean = true,
	) {
		res.status(statusCode).json({
			status: statusCode,
			success,
			message,
			payload,
		});
	}
}

export { ApiResponse };

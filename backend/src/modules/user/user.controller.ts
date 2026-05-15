import { ApiResponse } from "../../core/responses/api-response";
import { asyncHandler } from "../../core/utils/async-handler";
import { UserService } from "./user.service";
import { Request, Response } from "express";

export class UserController {
	constructor(private readonly userService: UserService) {}

	testMethod = asyncHandler(async (req: Request, res: Response) => {
		console.log("INSIDE CONTROLLER LAYER");
		await this.userService.testServiceMethod();
		console.log("INSIDE CONTROLLER LAYER");

		ApiResponse.send(res, 200, {}, "Successful");
	});
}

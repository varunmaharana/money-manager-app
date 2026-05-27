import type { Request, Response } from "express";

import { AccountGroupService } from "./account-group.service";

export class AccountGroupController {
	constructor(private readonly accountGroupService: AccountGroupService) {}

	// Add controller methods here
}

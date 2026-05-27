import type { Request, Response } from "express";

import { AccountGroupsService } from "./account-groups.service";

export class AccountGroupsController {
	constructor(private readonly accountGroupsService: AccountGroupsService) {}

	// Add controller methods here
}

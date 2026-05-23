import type { Request, Response } from "express";

import { AccountService } from "./account.service";

export class AccountController {
	constructor( private readonly accountService: AccountService ) {}

	// Add controller methods here
}

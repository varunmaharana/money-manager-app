import type { Request, Response } from "express";

import { TransactionService } from "./transaction.service";

export class TransactionController {
	constructor(private readonly transactionService: TransactionService) {}

	// Add controller methods here
}

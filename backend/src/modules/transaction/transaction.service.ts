import type { TransactionRepository } from "./transaction.repository";

export class TransactionService {
	constructor(
		private readonly transactionRepository: TransactionRepository,
	) {}

	// Add service methods here
}

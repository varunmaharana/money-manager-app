import { TransactionRepository } from "./transaction.repository";

import { TransactionService } from "./transaction.service";

import { TransactionController } from "./transaction.controller";

const transactionRepository = new TransactionRepository();

const transactionService = new TransactionService(transactionRepository);

const transactionController = new TransactionController(transactionService);

export { transactionRepository, transactionService, transactionController };

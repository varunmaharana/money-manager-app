import { AccountRepository } from "./account.repository";

import { AccountService } from "./account.service";

import { AccountController } from "./account.controller";

const accountRepository = new AccountRepository();

const accountService = new AccountService(accountRepository);

const accountController = new AccountController(accountService);

export { accountRepository, accountService, accountController, };

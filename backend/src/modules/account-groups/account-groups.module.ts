import { AccountGroupsRepository } from "./account-groups.repository";

import { AccountGroupsService } from "./account-groups.service";

import { AccountGroupsController } from "./account-groups.controller";

const accountGroupsRepository = new AccountGroupsRepository();

const accountGroupsService = new AccountGroupsService(accountGroupsRepository);

const accountGroupsController = new AccountGroupsController(
	accountGroupsService,
);

export {
	accountGroupsRepository,
	accountGroupsService,
	accountGroupsController,
};

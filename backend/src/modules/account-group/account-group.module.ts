import { AccountGroupRepository } from "./account-group.repository";

import { AccountGroupService } from "./account-group.service";

import { AccountGroupController } from "./account-group.controller";

const accountGroupRepository = new AccountGroupRepository();

const accountGroupService = new AccountGroupService(accountGroupRepository);

const accountGroupController = new AccountGroupController(accountGroupService);

export { accountGroupRepository, accountGroupService, accountGroupController };

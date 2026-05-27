import { CategoryGroupsRepository } from "./category-groups.repository";

import { CategoryGroupsService } from "./category-groups.service";

import { CategoryGroupsController } from "./category-groups.controller";

const categoryGroupsRepository = new CategoryGroupsRepository();

const categoryGroupsService = new CategoryGroupsService(
	categoryGroupsRepository,
);

const categoryGroupsController = new CategoryGroupsController(
	categoryGroupsService,
);

export {
	categoryGroupsRepository,
	categoryGroupsService,
	categoryGroupsController,
};

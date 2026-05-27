import { CategoryGroupRepository } from "./category-group.repository";

import { CategoryGroupService } from "./category-group.service";

import { CategoryGroupController } from "./category-group.controller";

const categoryGroupRepository = new CategoryGroupRepository();

const categoryGroupService = new CategoryGroupService(categoryGroupRepository);

const categoryGroupController = new CategoryGroupController(categoryGroupService);

export { categoryGroupRepository, categoryGroupService, categoryGroupController, };

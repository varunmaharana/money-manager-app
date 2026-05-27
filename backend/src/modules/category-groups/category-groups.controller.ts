import type { Request, Response } from "express";

import { CategoryGroupsService } from "./category-groups.service";

export class CategoryGroupsController {
	constructor(
		private readonly categoryGroupsService: CategoryGroupsService,
	) {}

	// Add controller methods here
}

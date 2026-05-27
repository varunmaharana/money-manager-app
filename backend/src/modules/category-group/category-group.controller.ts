import type { Request, Response } from "express";

import { CategoryGroupService } from "./category-group.service";

export class CategoryGroupController {
	constructor( private readonly categoryGroupService: CategoryGroupService ) {}

	// Add controller methods here
}

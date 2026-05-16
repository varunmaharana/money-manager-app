import type { Request, Response } from "express";

import { CategoryService } from "./category.service";

export class CategoryController {
	constructor( private readonly categoryService: CategoryService ) {}

	// Add controller methods here
}

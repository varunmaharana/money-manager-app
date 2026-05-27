import { Router } from "express";

import { categoryGroupsController } from "./category-groups.module";

import validateRequest, {
	ValidationSource,
} from "../../core/middlewares/request-validation.middleware";

import {} from "./category-groups.validation";

const namespace = "/category-accounts";

const categoryGroupsRouter = Router();

// Add routes here

export default {
	namespace,
	router: categoryGroupsRouter,
};

import { Router } from "express";

import { categoryGroupController } from "./category-group.module";

import validateRequest, {
	ValidationSource,
} from "../../core/middlewares/request-validation.middleware";

import { } from "./category-group.validation";

const namespace = "ADD-NAMESPACE-HERE";

const categoryGroupRouter = Router();

// Add routes here

export default {
	namespace,
	router: categoryGroupRouter,
};

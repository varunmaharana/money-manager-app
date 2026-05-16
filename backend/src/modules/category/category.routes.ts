import { Router } from "express";

import { categoryController } from "./category.module";

import validateRequest, {
	ValidationSource,
} from "../../core/middlewares/request-validation.middleware";

import { } from "./category.validation";

const namespace = "/categories";

const categoryRouter = Router();

// Add routes here

export default {
	namespace,
	router: categoryRouter,
};

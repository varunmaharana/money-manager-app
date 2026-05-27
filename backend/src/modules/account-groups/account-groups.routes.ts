import { Router } from "express";

import { accountGroupsController } from "./account-groups.module";

import validateRequest, {
	ValidationSource,
} from "../../core/middlewares/request-validation.middleware";

import {} from "./account-groups.validation";

const namespace = "/account-groups";

const accountGroupsRouter = Router();

// Add routes here

export default {
	namespace,
	router: accountGroupsRouter,
};

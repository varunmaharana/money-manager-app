import { Router } from "express";

import { accountGroupController } from "./account-group.module";

import validateRequest, {
	ValidationSource,
} from "../../core/middlewares/request-validation.middleware";

import {} from "./account-group.validation";

const namespace = "/account-groups";

const accountGroupRouter = Router();

// Add routes here

export default {
	namespace,
	router: accountGroupRouter,
};

import { Router } from "express";

import { accountController } from "./account.module";

import validateRequest, {
	ValidationSource,
} from "../../core/middlewares/request-validation.middleware";

import { } from "./account.validation";

const namespace = "/accounts";

const accountRouter = Router();

// Add routes here

export default {
	namespace,
	router: accountRouter,
};

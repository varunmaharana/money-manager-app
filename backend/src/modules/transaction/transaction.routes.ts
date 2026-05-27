import { Router } from "express";

import { transactionController } from "./transaction.module";

import validateRequest, {
	ValidationSource,
} from "../../core/middlewares/request-validation.middleware";

import {} from "./transaction.validation";

const namespace = "/transactions";

const transactionRouter = Router();

// Add routes here

export default {
	namespace,
	router: transactionRouter,
};

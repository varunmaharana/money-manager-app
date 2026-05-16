import { Router } from "express";
import { userController } from "./user.module";
import validateRequest, {
	ValidationSource,
} from "../../core/middlewares/request-validation.middleware";
import { createUserSchema } from "./user.validation";

const userRouter = Router();

const namespace = "/users";

userRouter
	.route("/")
	.get(
		validateRequest(createUserSchema, ValidationSource.BODY),
		userController.testMethod,
	);

export default { namespace, router: userRouter };

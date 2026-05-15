import { Router } from "express";
import { userController } from "./user.module";

const userRouter = Router();

const namespace = "/users";

userRouter.route("/").get(userController.testMethod);

export default { namespace, router: userRouter };

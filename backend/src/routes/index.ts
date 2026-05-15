import { Router } from "express";

import userRoutes from "../modules/user/user.routes.js";

const v1Routes = Router();

const routes = [userRoutes];

routes.forEach(({ namespace, router }) => {
	v1Routes.use(namespace, router);
});

export default v1Routes;

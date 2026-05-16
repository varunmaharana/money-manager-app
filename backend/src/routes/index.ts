import { Router } from "express";

import userRoutes from "../modules/user/user.routes";
import categoryRoutes from "../modules/category/category.routes";

const v1Routes = Router();

const routes = [userRoutes, categoryRoutes];

routes.forEach(({ namespace, router }) => {
	v1Routes.use(namespace, router);
});

export default v1Routes;

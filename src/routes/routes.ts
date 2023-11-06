import { Router } from "express";
import testRoutes from "./test";
import shoesRoutes from "./shoes";

const routes = Router();

routes.use(testRoutes);
routes.use(shoesRoutes);


export default routes;
import { Router } from "express";
import shoesController from "../controllers/shoesController";

const testRoutes = Router();

testRoutes.route("/shoes")
    .get(shoesController.select);

export default testRoutes;
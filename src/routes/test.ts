import { Router } from "express";
import testController from "../controllers/testController";

const testRoutes = Router();

testRoutes.route("/test")
    .get(testController.select);

export default testRoutes;
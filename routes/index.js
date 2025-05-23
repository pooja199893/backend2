
import { Router } from "express";
import AuthRoutes from "./auth.routes.js";
import ProductRoutes from "./product.routes.js";
import UserRoutes from "./user.routes.js";
import OperatorsRoutes from './operator.routes.js'



const AllRoutes = Router();

AllRoutes.use("/auth", AuthRoutes);
AllRoutes.use("/product", ProductRoutes);
AllRoutes.use("/user", UserRoutes);
AllRoutes.use("/operators", OperatorsRoutes);




export default AllRoutes;


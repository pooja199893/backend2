
import { Router } from "express";
import AuthRoutes from "./auth.routes.js";
import ProductRoutes from "./product.routes.js";

const AllRoutes = Router();

AllRoutes.use("/auth", AuthRoutes);
AllRoutes.use("/product", ProductRoutes);


export default AllRoutes;


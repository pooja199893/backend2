
import { Router } from "express";
import { AddedProducts, AddProduct, AllProducts, SingleProductData } from "../controllers/product.controllers.js";

const ProductRoutes = Router();

ProductRoutes.post('/add-product', AddProduct);
ProductRoutes.post("/added-products", AddedProducts);
ProductRoutes.get("/all-products", AllProducts); 
ProductRoutes.post("/single-product-data", SingleProductData); 

export default ProductRoutes;

import { Router } from "express";
import * as productController from "./product.controller";

const router = Router();

router.get("/products", productController.getAllProducts);

router.get("/product/:id", productController.getProduct);

router.post("/products", productController.createProduct);

export default router;

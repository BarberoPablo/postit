import { Router } from "express";
import * as userController from "./user.controller";
const router = Router();

router.get("/users", userController.getAllUsers);

router.get("/users/:id", userController.getUser);

router.post("/users", userController.createUser);

export default router;

//Cambiar contraseña con auth de usuario
//Borrar usuario solo admin

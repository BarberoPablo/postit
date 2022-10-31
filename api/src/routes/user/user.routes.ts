import { Router } from "express";
import * as userController from "./user.controller";
const router = Router();

router.get("/users", userController.getAllUsers);

router.get("/users/:id", userController.getUser);

//Register
router.post("/users", userController.createUser);

router.post("/users/login", userController.login);

export default router;

//Cambiar contraseña con auth de usuario
//Borrar usuario solo admin

import { signup, signin } from "../controllers/auth.controller.js";
import { verifySignUp } from "../middleware/index.js";  // Asegúrate de que verifiques correctamente los middlewares
import express from "express";

const router = express.Router();

// Ruta de registro, protegida por el middleware que verifica duplicados y roles
router.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail, // Middleware para verificar si el nombre de usuario o email ya existe
    verifySignUp.checkRolesExisted // Middleware para verificar que los roles existen
  ],
  signup // Llama al controlador para el registro
);

// Ruta de inicio de sesión
router.post("/signin", signin); // Llama al controlador para el inicio de sesión

export default router;

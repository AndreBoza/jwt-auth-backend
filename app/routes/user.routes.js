import {
    allAccess,       // Ruta pública para acceso a todos
    userBoard,       // Ruta protegida para usuarios
    adminBoard,      // Ruta protegida para administradores
    moderatorBoard   // Ruta protegida para moderadores
} from "../controllers/user.controller.js";
import { authJwt } from "../middleware/index.js";  // Middleware de autenticación y roles
import express from "express";

const router = express.Router();

// Ruta pública para acceder a todos los usuarios
router.get("/all", allAccess);

// Rutas protegidas con JWT
// Ruta para usuarios regulares
router.get("/user", [authJwt.verifyToken], userBoard);

// Ruta para moderadores, protegida por JWT y rol de moderador
router.get("/mod", [authJwt.verifyToken, authJwt.isModerator], moderatorBoard);

// Ruta para administradores, protegida por JWT y rol de administrador
router.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], adminBoard);

export default router;

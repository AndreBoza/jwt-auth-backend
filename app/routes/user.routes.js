import {
    allAccess,
    userBoard,
    adminBoard,
    moderatorBoard
  } from "../controllers/user.controller.js";
  
  import { authJwt } from "../middleware/index.js";
  import express from "express";
  
  const router = express.Router();
  
  // Público
  router.get("/all", allAccess);
  
  // Protegidas
  router.get("/user", [authJwt.verifyToken], userBoard);
  router.get("/mod", [authJwt.verifyToken, authJwt.isModerator], moderatorBoard);
  router.get("/admin", [authJwt.verifyToken, authJwt.isAdmin], adminBoard);
  
  export default router;
  
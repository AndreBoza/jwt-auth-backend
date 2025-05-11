import { signup, signin } from "../controllers/auth.controller.js";
import { verifySignUp } from "../middleware/index.js";
import express from "express";

const router = express.Router();

router.post(
  "/signup",
  [
    verifySignUp.checkDuplicateUsernameOrEmail,
    verifySignUp.checkRolesExisted
  ],
  signup
);

router.post("/signin", signin);

export default router;

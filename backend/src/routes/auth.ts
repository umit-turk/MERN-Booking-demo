import express from "express";
import { check } from "express-validator";
import { login, validateToken, logout } from "../controllers/auth";
import verifyToken from "../middleware/auth";

const router = express.Router();

router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password with 6 or more characters required").isLength({
      min: 6,
    }),
  ],
  login
);
router.get("/validate-token", verifyToken, validateToken);
router.post("/sign-out",logout)

export default router;

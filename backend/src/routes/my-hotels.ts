import express from "express";
import { check } from "express-validator";
import { login, validateToken, logout } from "../controllers/auth";
import verifyToken from "../middleware/auth";
import { create } from "../controllers/my-hotels";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage:storage,
    limits:{
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})

//api/my-hotels
router.post("/", upload.array("imageFiles",6) ,create)

export default router;

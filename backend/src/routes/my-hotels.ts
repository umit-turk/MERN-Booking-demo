import express from "express";
import { body, check } from "express-validator";
import { login, validateToken, logout } from "../controllers/auth";
import verifyToken from "../middleware/auth";
import { create, getAll } from "../controllers/my-hotels";
import multer from "multer";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})

//api/my-hotels
router.post("/", verifyToken,[
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hotel type is required"),
    body("pricePerNight").notEmpty().isNumeric().withMessage("Price per night is required and must be a number"),
    body("facilities").notEmpty().isArray().withMessage("Facilities are required"),    
], upload.array("imageFiles", 6), create)

router.get("/",verifyToken,getAll)

export default router;

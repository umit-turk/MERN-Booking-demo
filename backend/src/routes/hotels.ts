import express from "express";
import { search, hotelDetail } from "../controllers/hotels";
import { param } from "express-validator";

const router = express.Router();

//api/hotels/search?
router.get("/search", search)
router.get("/:id",[param("id").notEmpty().withMessage("Hotel ID is required")], hotelDetail)

export default router
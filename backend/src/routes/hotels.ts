import express from "express";
import { search } from "../controllers/hotels";

const router = express.Router();

//api/hotels/search?

router.get("/search", search)

export default router
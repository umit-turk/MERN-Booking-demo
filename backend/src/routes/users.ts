import express from 'express';
import { register } from '../controllers/users';
import {check} from 'express-validator';

const router = express.Router();

//api/users/register
router.post("/register",[
    check("firstName", "First Name is required").isString(),
    check("lastName", "Last Name is required").isString(),
    check("email", "Emailis required").isString(),
    check("password", "Password with 6 or more characters required").isLength({min:6})
],register)

export default router;
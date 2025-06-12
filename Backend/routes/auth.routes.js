import { Router } from "express";
import { userRegister,userLogin } from "../controllers/auth.controllers.js";
import {registerValidation,loginValidation} from "../validation/user.validation.js";

const router=Router();

router.post("/register",registerValidation,userRegister);

router.post("/login",loginValidation,userLogin);

export default router;
import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { createProject,getProject } from "../controllers/project.controller.js";


const router=Router();


router.post('/projects',authenticate,createProject);

router.get('/projects',authenticate,getProject);

export default router;
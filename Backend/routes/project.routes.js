import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.middleware.js";
import { createProject,getProject } from "../controllers/project.controller.js";
import {upload} from '../middlewares/multer.middleware.js'


const router=Router();


router.post('/projects',authenticate,upload.single('image'),createProject);

router.get('/projects',authenticate,getProject);

export default router;
import { body } from "express-validator";



export const registerValidation=[
    body("name").trim().notEmpty().isLength({min:3}).withMessage("Name must be at least 3 characters long"),
    body("email").trim().notEmpty().isEmail().withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required").isLength({min:8}).withMessage("Password must be at least 8 characters long")
];


export const loginValidation=[
    body("email").trim().notEmpty().isEmail().withMessage("Invalid email address"),
    body("password").notEmpty().withMessage("Password is required").isLength({min:8}).withMessage("Password must be at least 8 characters long")
]



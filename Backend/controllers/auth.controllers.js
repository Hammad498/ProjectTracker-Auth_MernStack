import userModel from "../models/userAuth.model.js";

export const userRegister=async(req,res)=>{
    const{name,email,password}=req.body;

    const hashedPassword=await userModel.hashPassword(password);

    if(!name || !email ||!password){
        return res.status(400).json({error:"All fields are required"});
    }

    const register=await userModel.create({
        name,
        email,
        password:hashedPassword
    })

    await register.save();

    res.status(200).json({
        success:true,
        message:"user registered successfully!",
        data:register
    })
}

//////////////////////////////////////////////////

export const userLogin=async(req,res)=>{
    const {email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({error:"All fields are required"});
    }

    const user=userModel.findOne({email});

    if(!user){
        return res.status(400).json({error:"User not found"});
    }

    const isMatched=await userModel.comparePassword(password);

    if(!isMatched){
        return res.status(400).json({error:"Invalid credentials"});
    }

    res.status(200).json({
        success:true,
        message:"user logged in successfully!",
        data:user
    })

    const token=userModel.generateToken();

    res.status(200).json({
        success:true,
        message:"user logged in successfully!",
        data:user,
        token
    })


    
}
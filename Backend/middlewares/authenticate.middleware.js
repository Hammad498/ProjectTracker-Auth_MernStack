import {jwt} from "jsonwebtoken";



export const authenticate=async(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({error:"Unauthorized"});
    }
    try {
        const decode=jwt.verify(token,process.env.SECRET_KEY);
        req.user=decode;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({error:"Unauthorized"});
    }
}
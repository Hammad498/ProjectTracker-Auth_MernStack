import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Schema } from "mongoose";

const userSchema=new Schema({
    name:{
        type: String,
        required: true,
        minlength:[3,"Name must be at least 3 characters long"]
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength:[5,"Email must be at least 3 characters long"]
    },
    password:{
        type: String,
        required: true,
        
    },
    isVerified:{
        type: Boolean,
        default: false
    },

    verificationToken:String,
    verificationTokenExpiry:Date

},{timestamps: true});

userSchema.methods.generateToken=function(){
  const token=jwt.sign({_id:this.id},process.env.SECRET_KEY,{expiresIn:"1d"});
  return token;
};

userSchema.methods.comparePassword=async(password)=>{
    return await bcrypt.compare(password,this.password)
}
////////////////////////////////////////

userSchema.statics.hashPassword=async(password)=>{
    return await bcrypt.hash(password,10);
}

const userModel=mongoose.model("user",userSchema);

export default userModel
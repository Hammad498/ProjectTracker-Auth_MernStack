import mongoose from "mongoose";
import { Schema } from "mongoose";

const projectSchema=new Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Name must be at least 3 characters long"],
      },
      title:{
        type:String,
        required:true,
      },
      description: {
        type: String,
        required: true,
        minlength: [3, "Description must be at least 3 characters long"],
      },
      image: {
        type: String,
        // required: true,
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
},{timestamps:true});


const projectModel=mongoose.model("Project",projectSchema);

export default projectModel
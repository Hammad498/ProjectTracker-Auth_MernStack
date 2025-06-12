import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/auth.routes.js'
import projectRoutes from './routes/project.routes.js'

connectDB();



dotenv.config();
const app=express();
app.use(express.json());
app.use('/api/auth',userRoutes);
app.use('/api',projectRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
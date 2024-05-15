import express from 'express';
import connectDB from './config/db.js'
import dotenv from 'dotenv';
import cors from 'cors';

import productRoutes from './routes/productRoutes.js'

import { notFound,errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
const port=process.env.port || 5000;

connectDB();

const app=express();

app.use(cors());



app.get('/',(req,res)=>{
    res.send('API is running...!')
})

app.use('/api/products',productRoutes);
app.use(notFound);
app.use(errorHandler);


app.listen(port,()=> console.log(`server running on port ${port}`))
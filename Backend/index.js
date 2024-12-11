import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';




const app = express();

app.use(cors());

dotenv.config();



app.use(express.json());


const PORT = process.env.PORT ;
const MONGO_URL = process.env.MongoUrl;

mongoose.connect(MONGO_URL)
.then(() =>{
    console.log("Database connected successfully")
})
.catch((err) =>{
    console.error("Databse connection error", err)
});




app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
})

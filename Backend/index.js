import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';




const app = express();

app.use(cors());

dotenv.config();



app.use(express.json());


const PORT = process.env.PORT ;
// const PORT =  4000;



app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
})

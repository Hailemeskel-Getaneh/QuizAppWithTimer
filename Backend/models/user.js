import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true
    },
    id:{type:String, required:true},
    password:{
        default:"@"+this.id
    } ,
})


const userModel =  mongoose.model("users", userSchema)

export default userModel
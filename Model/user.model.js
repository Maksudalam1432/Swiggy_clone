import mongoose from "mongoose";

 const userschema =new mongoose.Schema({
 
   UserName:{
        type:String,
        required:true,
        trim:true,
         minlength: [6, "Username must be at least 6 characters long"]
    },
    email:{
         type:String,
        required:true,
        trim:true,
        lowercase: true,
         unique:true

           },
      password:{
        type:String,
        required:true,
        trim:true
        
      },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    role:{
        type:String,
        enum:["user","owner","delivery"]
    }

 },{timestamps:true})

  const User=mongoose.model("User",userschema)

  export default User
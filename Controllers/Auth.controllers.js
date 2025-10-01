import User from "../Model/user.model.js"
import bcrypt from "bcryptjs"
import gentoken from "../utills/token.js"

export const Singup=async(req ,res)=>{
    try{

     const { UserName,email,password, phone, role}=req.body
   
     const user=await User.findOne({email})

     if(user){
         return res.status(400).json({message:"User  Already Exits"})
     }
     if(phone.length<10){
      return res.status(400).json({message:"Number  must ba at least 10 digits"})
     }
     if(password.length<10){
      return res.status(400).json({message:"password  must ba at least 6 characters"})
     }

      const hashpassword=await bcrypt.hash(password,10)
             
      user =await User.create({
         UserName,
         email,
         phone,
         role,
         password:hashpassword
      })
    const token=await gentoken(user._id)
    res.cookie("token",token,{
        secure:false,
        sameSite:"strict",
        maxAge:5*24*60*60*1000,
        httpOnly:true
    })
    return res.status(201).json(user)
    }
    catch(error){
             return res.status(500).json(`singUp error ${error}`)

    }
} 

export const SingIn=async(req ,res)=>{
    try{

     const {email,password}=req.body
   
     const user=await User.findOne({email})

     if(!user){
         return res.status(400).json({message:"User  does not Exits"})
     }
  
     const ismatch=await bcrypt.compare(password,user.password)
     if(!ismatch){
          return res.status(400).json({message:"inccrrect pasword"})
     }
    const token=await gentoken(user._id)
    res.cookie("token",token,{
        secure:false,
        sameSite:"strict",
        maxAge:5*24*60*60*1000,
        httpOnly:true
    })
    return res.status(201).json(user)
    }
    catch(error){
             return res.status(500).json(`sing In error ${error}`)

    }
} 

export  const singOut =async(req,res)=>{
     try {
        res.clearCookie("token")
  return res.status(200).json({message : "log out succesfully"})
     }
     catch(error){
             return res.status(500).json(`sing Out error ${error}`)

     }
    }
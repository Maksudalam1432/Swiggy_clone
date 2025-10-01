import jwt from "jsonwebtoken"

 const gentoken=async(userid)=>{
    try{
      const token=await jwt.sign({userid},process.env.JWT_SECRET,{expiresIn:"5d"})
      return token
    }
    catch(error){
console.log(error)
    }
 }

 export default gentoken


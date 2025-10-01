import express from "express"
import { SingIn, singOut, Singup } from "../Controllers/Auth.controllers.js"

 const authRoute=express.Router()
 
 authRoute.post("/singup",Singup)
 authRoute.post("/singin",SingIn)
 authRoute.post("/singout",singOut)

 export default authRoute;
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./Config/db.js"
import cookieParser from "cookie-parser"
import authRoute from "./route/Auth.route.js"
import cors from "cors"
 const app=express()
 const PORT=process.env.PORT ||4000
 app.use(cors({
    origin:"hppt://localhost:5173",
      credentials:true
 }))

  app.use(express.json())
  app.use(cookieParser)
  app.use("api/auth",authRoute)




app.listen(3000,()=>{
    connectDB()
    console.log(`server start port no ${PORT}`)
})
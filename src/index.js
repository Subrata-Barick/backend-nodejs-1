//require('dotenv').config({path:'./env'})

import dotnev from 'dotenv'


import connectDB from "./db/index.js";
import { app } from './app.js';


dotnev.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    })

}).
catch((err)=>{console.log("Mongo db connection failed !!!",err)})
























/*here is the first approach and proffectional approach 
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express"
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("error:",error);
        throw error
       })
       app.listien(process.env.PORT,()=>{
        console.log(`App is running  and listing on port ${process.env.PORT}`)
       })
        
    } catch (error) {
        console.error("ERROR",error)
        throw err
        
    }
})*/



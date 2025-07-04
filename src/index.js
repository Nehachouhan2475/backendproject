import dotenv from "dotenv"

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

dotenv.config({
    path:'./env'
})

import dbconnection from "./db/index.js";

dbconnection();



















// import express from "express";
// const app= express();

// ;( async ()=>{

//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error", (error)=>{
//             console.log("error: ", error);
//            throw error            
//         });
//         app.listen(process.env.PORT, ()=>{
//             console.log(`app is listening on ${process.env.PORT}` );
            
//         })

//     } catch (error) {
//         console.log(`database connection failed: ${error}`);
//         throw error    
//     }
// })()
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const dbconnection = async ()=>{
   try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n Mongodb connected !! DB host: ${connectionInstance.connection.host}`);
       
   } catch (error) {
    console.log(`database connection failed: ${error}`);
    process.exit(1)
   }
};

export default dbconnection;
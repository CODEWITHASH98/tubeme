//require('dotenv').config({path: './env'})
import dotenv from  "dotenv"
import connectDB from "./database/index.js";



dotenv.config({
    path: './env'
})



connectDB()
.then(()=>{
    app.listen(process.env.port || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("mongo db connection failed !! " ,err)
})






/*
(async () => {
   try{
    // Connect to MongoDB
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error", (error)=>{
        console.log("ERROR :",error)
    })
    
    // Start the Express server

    app.listen(process.env.PORT, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })
   }catch(error){
   
    // Log the error and prevent server from starting if there is a database connection issue

     console.error("ERROR:",error)
     throw err
   }
})();
*/


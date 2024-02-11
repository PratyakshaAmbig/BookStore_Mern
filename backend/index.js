import express from "express";
import {PORT, mongoDBURL} from "./consfig.js"
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoutes.js"
import userRouter from "./routes/user-router.js"
import {errorMiddleware} from "./middleware/error-middleware.js"
import cors from "cors"
const app = express();

const corsOption = {
    origin:'http://localhost:5173',
    methods:["POST, GET, DELETE, PATCH"],
    credential:true
}
// middeleware for handling CORS Policy
//Option 1: Allow all origin with default of cors(*)
app.use(cors(corsOption))

// Option 2: Allow custom origin
// app.use(cors(
//     {
//         origin:"http://localhost:5173",
//         methods:["POST", "GET", "DELETE", "PATCH"],
//         allowedHeaders:["Content-Type"]
//     }
// ))



//Middleware for passing request body
app.use(express.json())
app.use("/books", booksRoute)
app.use("/user", userRouter)
app.use(errorMiddleware)
mongoose.connect(mongoDBURL).
then(()=>{
    console.log("App connected to database")
    app.listen(PORT,()=>{
        console.log(`App listening to PORT:${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})
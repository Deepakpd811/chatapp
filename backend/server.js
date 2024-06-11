import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongodb from "./db/connection.js";
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


dotenv.config();
const app = express();


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);




app.listen(process.env.PORT,()=>{
    connectToMongodb();
    console.log(`server is running on ${process.env.PORT}`)
})

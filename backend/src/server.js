import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js"
import dotenv from "dotenv"


dotenv.config();

const app = express()
const PORT = process.env.PORT || 5001

connectDB();

app.use("/api/notes", notesRoutes)

app.listen(PORT, ()=> {
    console.log("Server started on PORT:", PORT)
})


// mongodb+srv://madheshk7239087:nDEVWjGrdDUDupEi@cluster0.uty9asl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
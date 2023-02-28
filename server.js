import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import router from "./routes/userRoutes.js";
import cors from "cors"


//rest obejct
const app = express();
const PORT = process.env.PORT || 9000

//middlewares
app.use(express.json());
app.use(cors())
app.use(express.urlencoded())

//dotenv conig
dotenv.config();

//mongodb connection
connectDB();

//routes
app.get('/', (req, res) => {
  res.send("Hello from server side")
})
app.use("/", router);


//listen port
app.listen(PORT, () => console.log(`Server Running on http://localhost:${PORT}`));

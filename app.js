import express from "express";
import { connectDB } from "./config/db.js";
import auth from "./routes/authRoutes.js"

const app = express();
const PORT = 5000;

app.disable("x-powered-by");
app.use(express.json())

await connectDB();

app.get("/", (req, res, next) => {
    res.json({ message: "You're server is running!" })
});

app.use("/users", auth);

app.listen(PORT, '0.0.0.0', () => {
    console.log("Server is running on PORT:",PORT);
});


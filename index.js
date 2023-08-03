import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

// custom
import { authRoute } from "./routes/authRoute.js";
import { courseRoute } from "./routes/courseRoute.js";

const app = express();
dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/courses", courseRoute);

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT, () => {
    console.log("server running");
  });
});

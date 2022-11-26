import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routing/user-routes";
import postRouter from "./routing/post-routes";
import cors from "cors";

const app = express();
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/posts", postRouter);

// connections
const adminPass = encodeURIComponent("hello123");
const dbUrl = `mongodb+srv://ajayfied:${adminPass}@cluster0.ijwa2eo.mongodb.net/?retryWrites=true&w=majority`;

mongoose
  .connect(dbUrl)
  .then(() => app.listen(5000, () => console.log("Listening to Port 5000...")))
  .catch((err) => console.log(err));

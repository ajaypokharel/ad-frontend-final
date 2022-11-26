import { Router } from "express";
import {
  listUsers,
  getUserById,
  login,
  signup,
} from "../controllers/user-controllers";

const userRouter = Router();

userRouter.get("/", listUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signup);
userRouter.post("/login", login);

export default userRouter;
